// ==UserScript==
// @name Bilibili Danmaku Restoration
// @author Xfgryujk
// @description Restorative efforts to bring back live comments in Bilibili.
// @downloadURL https://raw.githubusercontent.com/Tarnival/Neat-Utan/Archive/TamperMonkey/Bilibili_Danmaku_Restoration.user.js
// @grant none
// @homepage https://ngabbs.com/nuke.php?func=ucp&uid=62238769
// @icon https://static.hdslb.com/images/favicon.ico
// @include /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @include /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @license X11 License
// @namespace http://www.tarne.cn/
// @require https://fastly.jsdelivr.net/gh/google/brotli@5692e422da6af1e991f9182345d58df87866bc5e/js/decode.js
// @require https://greasyfork.org/scripts/417560/code/bliveproxy.js?version=984333
// @run-at document-start
// @supportURL https://greasyfork.org/scripts/383826/feedback/
// @updateURL https://github.com/Tarnival/Neat-Utan/raw/Archive/TamperMonkey/Bilibili_Danmaku_Restoration.user.js
// @version 1.00
// ==/UserScript==

(function () {
    bliveproxy.addCommandHandler('DANMU_MSG', command => {
        let params = command.cmd.split(':')
        if (params.length > 4) {
            params[4] = '0'
            command.cmd = params.join(':')
        }
    })
})();
