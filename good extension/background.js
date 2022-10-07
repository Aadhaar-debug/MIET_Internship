chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel: true}},
    { urls : ["*://*.pinterest.com/*"]},
    ["blocking"]
)