// ==UserScript==
// @name Website Grayscale Removal
// @author VoltaChan
// @description Repressive efforts to ban on-demand grayscale filters in web pages.
// @downloadURL https://raw.githubusercontent.com/Tarnival/Neat-Utan/Archive/TamperMonkey/Website_Grayscale_Removal.user.js
// @grant GM_addStyle
// @homepage https://github.com/voltachan/?tab=overview
// @icon https://www.google.cn/chrome/static/images/favicons/favicon.ico
// @license WTFPL Version 2
// @match http*://*/*
// @namespace http://www.tarne.cn/
// @run-at document-start
// @supportURL https://greasyfork.org/scripts/399478/feedback/
// @updateURL https://github.com/Tarnival/Neat-Utan/raw/Archive/TamperMonkey/Website_Grayscale_Removal.user.js
// @version 1.00
// ==/UserScript==

(function() {
    GM_addStyle("* {filter: none !important}");
})();
