// ==UserScript==
// @name         shorten-shopping-urls
// @namespace    https://github.com/katzerax/shorten-shopping-urls
// @version      0.2
// @description  copy shortened urls
// @author       K
// @match        https://www.ebay.com/*
// @match        https://www.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.com
// @grant        none
// ==/UserScript==

// Get the current URL of the page
var currentURL = window.location.href;
var newURL = "";
// Create a button
var button = document.createElement('button');
button.textContent = 'Copy Shortened URL';

if (currentURL.startsWith('https://www.ebay.com/itm/')){
    // Insert the button to the right of an element with ID "gh-p-3"
    var ebayelement = document.querySelector('#gh-p-3');
    ebayelement.parentNode.insertBefore(button, ebayelement.nextSibling);

    button.addEventListener('click', function() {
        // Remove everything after the "?" character
        var newURL = currentURL.split('?')[0];
        // Copy the new URL to the clipboard
        navigator.clipboard.writeText(newURL);
    });
}

else if (currentURL.includes('https://www.amazon.com/')){
    if (currentURL.indexOf('/dp/') !== -1 || currentURL.indexOf('/gp/product/') !== -1) {
        // Insert the button to the right of an element with ID "prime-badge"
        var amazonelement = document.querySelector("#nav-belt > div.nav-fill");
        amazonelement.parentNode.insertBefore(button, amazonelement.nextSibling);

        button.addEventListener('click', function() {
            // Remove everything after the "?" character
            var newURL = currentURL.split('ref')[0];
            var newnewURL = newURL.split('?')[0];
            // Copy the new URL to the clipboard
            navigator.clipboard.writeText(newnewURL);
        });
    }
}
