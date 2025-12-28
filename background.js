
chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: "https://aistudio.google.com/apps/drive/1TjidIZ6BW6JHJoonr4K9dOmWNgYbs-Aq?showPreview=true&showAssistant=true",
    type: "popup",
    width: 1200,
    height: 800
  });
});
