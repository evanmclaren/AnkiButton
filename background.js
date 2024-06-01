// background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('updateReviewCount', { periodInMinutes: 5 });
    updateReviewCount(); // initial call, sets up badge when extension is installed
});

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === 'updateReviewCount') {
        updateReviewCount();
    }
});

function updateReviewCount() {
    fetch('http://localhost:8765', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'findCards',
            version: 6,
            params: {
                query: 'is:due'
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        const dueCount = data.result.length;
        chrome.action.setBadgeText({ text: dueCount.toString() });
    })
    .catch(error => {
        console.error('Error updating review count:', error);
    });
}