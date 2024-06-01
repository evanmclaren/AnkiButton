# AnkiButton

## Description
AnkiButton is a browser extension for Microsoft Edge that displays the number of Anki cards remaining to review for the current day. It uses AnkiConnect to fetch the data from your local Anki application.

## Features
- Displays the total number of Anki cards due in a browser icon.
- Automatically updates the count every 5 minutes.

## Installation

### Prerequisites
- Anki (with AnkiConnect installed and running)
- Microsoft Edge

### Steps
1. Clone or download this repository.
2. Open Microsoft Edge and go to `edge://extensions/`.
3. Enable "Developer mode" using the toggle switch (in the bottom left corner or in the left sidebar).
4. Click "Load unpacked" and select the `AnkiButton` directory.

## Usage
1. Ensure Anki is open and AnkiConnect is running.
2. Click the Anki Review Count icon in the Edge toolbar to see the number of cards left to review.
3. The badge on the icon will update automatically every 5 minutes.

# Development
### Setting Up the Environment
1. Clone this repository
    ```sh
    git clone https://github.com/evanmclaren/AnkiButton.git
    cd AnkiButton
    ```
2. Open the project directory in your preferred code editor.
3. Make your changes and save.

### Testing Changes
1. Open Microsoft Edge and go to `edge://extensions/`.
2. Reload the extension to see your changes.

## Contributing
If you would like to contribute, fork away and use a feature branch. Pull requests are welcome.

## Credits
- [Anki](https://apps.ankiweb.net/)
- [AnkiConnect](https://foosoft.net/projects/anki-connect/)
- Icon retrieved and adapted from the [Icon Library](https://www.iconarchive.com/show/papirus-apps-icons-by-papirus-team/anki-icon.html#google_vignette)