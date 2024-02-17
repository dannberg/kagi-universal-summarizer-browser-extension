document.getElementById('summarize').addEventListener('click', () => {
  chrome.storage.local.get(['summaryType'], function(result) {
    const summaryType = result.summaryType || 'takeaway';
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const url = encodeURIComponent(tabs[0].url);
      const summaryUrl = `https://kagi.com/summarizer/index.html?target_language=&summary=${summaryType}&url=${url}`;
      chrome.tabs.create({ url: summaryUrl });
    });
  });
});

document.getElementById('save').addEventListener('click', () => {
  const summaryType = document.getElementById('summaryType').value;
  chrome.storage.local.set({summaryType}, function() {
    console.log('Summary type saved as:', summaryType);
  });
});

// Set the dropdown to the saved value on popup open
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['summaryType'], function(result) {
    if (result.summaryType) {
      document.getElementById('summaryType').value = result.summaryType;
    }
  });
});
