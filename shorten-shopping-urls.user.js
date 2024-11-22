// ==UserScript==
// @name         shorten-shopping-urls
// @namespace    https://github.com/katzerax/shorten-shopping-urls
// @version      0.5
// @description  copy shortened urls
// @author       K
// @match        https://www.ebay.com/*
// @match        https://www.amazon.com/*
// @match        https://www.etsy.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ebay.com
// @grant        none
// ==/UserScript==

var currentURL = window.location.href;
var newURL = "";
var button = document.createElement('button');
button.textContent = 'Copy Shortened URL';
if (currentURL.startsWith('https://www.ebay.com/itm/')){
    var ebayelement = document.querySelector('#gh-p-3');
    ebayelement.parentNode.insertBefore(button, ebayelement.nextSibling);
    button.addEventListener('click', function() {
        var newURL = currentURL.split('?')[0];
        navigator.clipboard.writeText(newURL);
    });
}

else if (currentURL.includes('https://www.amazon.com/')){
    if (currentURL.indexOf('/dp/') !== -1 || currentURL.indexOf('/gp/product/') !== -1) {
        var amazonelement = document.querySelector("#nav-belt > div.nav-fill");
        amazonelement.parentNode.insertBefore(button, amazonelement.nextSibling);
        button.addEventListener('click', function() {
            var newURL = currentURL.split('ref')[0];
            var newnewURL = newURL.split('?')[0];
            navigator.clipboard.writeText(newnewURL);
        });
    }
}

else if (currentURL.includes('https://www.etsy.com/listing/')){
    var etsyelement = document.querySelector("#gnav-header-inner > div.wt-width-full.wt-display-flex-xs.wt-pr-lg-3.wt-flex-lg-1.order-mobile-tablet-2");
    etsyelement.parentNode.insertBefore(button, etsyelement.nextSibling);
    button.addEventListener('click', function() {
        var newURL = currentURL.split('?')[0];
        navigator.clipboard.writeText(newURL);
    });
}
