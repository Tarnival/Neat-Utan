// ==UserScript==
// @name Bilibili Idleness Prevention
// @author Xfgryujk
// @description Regulative efforts to subdue background inactivity during Bilibili live streams.
// @downloadURL https://raw.githubusercontent.com/Tarnival/Neat-Utan/Archive/TamperMonkey/Bilibili_Idleness_Prevention.user.js
// @grant none
// @homepage https://space.bilibili.com/300474/
// @icon https://s1.hdslb.com/favicon.ico
// @include /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @include /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @license X11 License
// @namespace http://www.tarne.cn/
// @run-at document-idle
// @supportURL https://bbs.nga.cn/read.php?tid=24074071
// @updateURL https://github.com/Tarnival/Neat-Utan/raw/Archive/TamperMonkey/Bilibili_Idleness_Prevention.user.js
// @version 1.00
// ==/UserScript==

(function() {
    let realSetTimeout = window.setTimeout
    let realSetInterval = window.setInterval
    window.setTimeout = function (func, ...args) {
        let code = func.toString()
        if (code.indexOf('triggerSleepCallback') !== -1) {
            return null
        }
        return realSetTimeout.call(this, func, ...args)
    }
    window.setInterval = function (func, ...args) {
        let code = func.toString()
        if (code.indexOf('triggerSleepCallback') !== -1) {
            return null
        }
        return realSetInterval.call(this, func, ...args)
    }
})();
