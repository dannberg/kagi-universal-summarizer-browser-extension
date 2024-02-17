chrome.action.onClicked.addListener((tab) => {
  const url = encodeURIComponent(tab.url);
  const summaryUrl = `https://kagi.com/summarizer/index.html?target_language=&summary=takeaway&url=${url}`;
  chrome.tabs.create({ url: summaryUrl });
});
