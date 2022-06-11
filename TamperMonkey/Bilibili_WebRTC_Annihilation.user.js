// ==UserScript==
// @name Bilibili WebRTC Annihilation
// @author Paranoid120
// @description Preventive efforts to limit P2P connections in Bilibili live services.
// @downloadURL https://raw.githubusercontent.com/Tarnival/Neat-Utan/Archive/TamperMonkey/Bilibili_WebRTC_Annihilation.user.js
// @grant none
// @homepage https://bbs.ngacn.cc/nuke.php?func=ucp&uid=42187969
// @icon https://i0.hdslb.com/favicon.ico
// @include /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @include /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @license Expat License
// @namespace http://www.tarne.cn/
// @run-at document-start
// @supportURL https://nga.178.com/read.php?tid=25285579
// @updateURL https://github.com/Tarnival/Neat-Utan/raw/Archive/TamperMonkey/Bilibili_WebRTC_Annihilation.user.js
// @version 1.00
// ==/UserScript==

const funcs = [
    'DataChannel',
    'mozRTCPeerConnection',
    'RTCDataChannel',
    'RTCPeerConnection',
    'webkitRTCPeerConnection',
];
const clear = () => {
    for (const i in funcs) {
        const fname = funcs[i];
        if (window[fname] !== undefined) {
            delete window[fname]
        }
    }
};
const interval = 90;
(function() {
    clear();
    setInterval(clear, interval * 1000);
})();
