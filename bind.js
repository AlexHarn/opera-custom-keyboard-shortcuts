var bookmarkLauncherSetup = (function() {
    chrome.commands.onCommand.addListener(function (command) {
        if (command === "facebook") {
            chrome.tabs.update(undefined, {url: 'http://facebook.com'});
        } else if (command === "youtube") {
            chrome.tabs.update(undefined, {url: 'http://youtube.com'});
        } else if (command === "google") {
            chrome.tabs.update(undefined, {url: 'http://google.de'});
        }
    });
}());
