# URL Summarizer Chrome Extension

This Chrome Extension allows users to quickly summarize the content of a web page they are currently viewing. With a click, the extension opens a new tab with the key moments or summary results from Kagi's [Universal Summarizer](https://kagi.com/summarizer/index.html).

[Kagi](https://kagi.com) registration is required to use Universal Summarizer.

## Features

- **Summarize Page**: With a single click, users can summarize the key moments of the content on the current web page.
- **Settings**: Users can select their preferred summary type - 'Key Moments' or 'Summary'
- **User Preferences**: Selected settings are saved and persist across browser sessions.

## Installation

To install the extension manually in the Orion browser, follow these steps:

1. Enable [3rd party extension installation](https://help.kagi.com/orion/browser-extensions/macos-extensions.html#enabling-3rd-party-extensions-installation) for Orion, if you haven't already
2. Clone the repository or download the ZIP file and extract it.
3. Open Orion Settings and nagivate to Advanced Settings and click Manage Extensions.
4. Click Add Extension and select Install from Disk...
5. Select the extension directory where `manifest.json` is located.
6. The extension should now be added to your Orion extensions list.
7. To use the extension, click on its icon in the Orion toolbar.

### Manual Installation in Chrome Browser

1. Clone the repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right corner.
4. Click on "Load unpacked" and select the extension directory where `manifest.json` is located.
5. The extension should now appear in your list of installed extensions.
6. Click on the extension icon in the Chrome toolbar to use it.

## Usage

- Click on the extension icon to open the popup.
- Click on "Summarize" to open a new tab with the summarized content of the current web page.
- To change the summary type, select an option from the dropdown in the settings section of the popup and click "Save".

## Customization

- `manifest.json`: Configure your extension settings and permissions here.
- `popup.html` and `popup.js`: Modify the popup's HTML and JavaScript to customize its functionality and appearance.
- `background.js`: Contains the background script for handling clicks on the extension icon.

## Contributing

Contributions are welcome! Feel free to submit pull requests or create issues for any bugs or improvements you have in mind.

## License

This project is open-source and available under the MIT License.
