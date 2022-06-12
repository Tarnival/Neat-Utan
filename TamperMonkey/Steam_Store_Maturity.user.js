// ==UserScript==
// @name Steam Store Maturity
// @author Dogfight360
// @description Permissive efforts to grant mature content consent in the Steam storefront.
// @downloadURL https://raw.githubusercontent.com/Tarnival/Neat-Utan/Archive/TamperMonkey/Steam_Store_Maturity.user.js
// @grant none
// @homepage https://www.dogfight360.com/
// @icon https://steamcdn-a.akamaihd.net/valvesoftware/images/favicon.ico
// @license Apache License Version 2.0
// @match http*://store.steampowered.com/
// @namespace http://www.tarne.cn/
// @run-at document-idle
// @supportURL https://keylol.com/t478344-1-1
// @updateURL https://github.com/Tarnival/Neat-Utan/raw/Archive/TamperMonkey/Steam_Store_Maturity.user.js
// @version 1.00
// ==/UserScript==

(function() {
    document.cookie = "birthtime=0; path=/; max-age=31622400";
    document.cookie = "lastagecheckage=1-1-1970; path=/; max-age=31622400";
    document.cookie = "mature_content=1; path=/; max-age=63072000";
    document.cookie = "wants_mature_content=1; path=/; max-age=63072000";
})();
