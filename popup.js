const injectButton = document.getElementById("inject-button");

injectButton.addEventListener("click", () => {
    chrome.tabs.executeScript(null, { file: "content.js" });
});
