// popup.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    updateReviewCount();
});

function updateReviewCount() {
    console.log('updateReviewCount function called');
    fetch('http://localhost:8765', { // need AnkiConnect running
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
    .then(response => {
        console.log('Response received', response);
        return response.json();
    })
    .then(data => {
        console.log('Data parsed', data);
        const dueCount = data.result.length;
        document.getElementById('review-count').textContent = `You have ${dueCount} cards to review.`;
    })
    .catch(error => {
        console.error('Error fetching review count:', error);
        document.getElementById('review-count').textContent = 'Error loading revview count';
    });
}