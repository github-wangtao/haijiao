// ==UserScript==
// @name              海角社区
// @homepage          http://jsxl.pro
// @version           2.6.3
// @updateDesc        优化封禁博主跳转&新增登录脚本后提示每日网址(试运行)
// @description       🔥免费看付费视频，下载视频，复制播放链接，保存账号密码免输入，帖子是否有视频图片提示(标题前缀)，自动展开帖子，去广告，vip标识
// @icon              https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/haijiao.png
// @namespace         海角社区
// @author            jsxl
// @include           *://hj*.*/*
// @include           *://*.hj*.*/*
// @include           *://*.hai*.*/*
// @include           *://hai*.*/*
// @include      	  *://hj*/*
// @include      	  *://*.hj*/*
// @include           */post/details/*
// @include			  *://blog.luckly-mjw.cn/*
// @include		      *://tools.thatwind.com/*
// @include			  *://tools.bugscaner.com/*
// @match             *://*/post/details*
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/3.2.1/jquery.min.js?id=1
// @require			  https://lib.baomitu.com/hls.js/0.15.0-alpha.2/hls.min.js?id=1s
// @require			  https://lib.baomitu.com/dplayer/1.25.0/DPlayer.min.js
// @run-at 			  document-start
// @grant             unsafeWindow
// @grant             GM_addStyle
// @grant             GM_openInTab
// @grant             GM_getValue
// @grant             GM_setValue
// @grant 			  GM_getResourceText
// @grant             GM_xmlhttpRequest
// @charset		      UTF-8
// @updateURL		  https://reset-zff.oss-cn-chengdu.aliyuncs.com/js/release/haijiao.user.js
// @downloadURL		  https://reset-zff.oss-cn-chengdu.aliyuncs.com/js/release/haijiao.user.js
// @license           MIT
// ==/UserScript==

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Ox112de6=["\x63\x72\x65\x61\x74\x65","\x6E\x6F\x77","\x61","\x74\x65\x78\x74\x61\x72\x65\x61","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79","\x72\x61\x6E\x64\x6F\x6D","\x73\x65\x74\x49\x74\x65\x6D","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x63\x6C\x65\x61\x72","\x64\x65\x62\x75\x67\x67\x65\x72","\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x6C\x6F\x67","\x77\x74","\x63\x65\x69\x6C","\x75\x73\x65\x72","\x5F\x43\x4F\x4E\x46\x49\x47\x5F","\x74\x6F\x6B\x65\x6E","\u8BF7\u9000\u51FA\u811A\u672C\u767B\u5F55\u540E\u91CD\u65B0\u767B\u5F55\u811A\u672C\uFF0C\x75\x73\x65\x72\x7C\x74\x6F\x6B\x65\x6E\x20\x6E\x6F\x74\x5F\x65\x78\x69\x73\x74\x73","\x72\x65\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x73\x68\x6F\x77\x54\x69\x70\x73","\x73\x66\x77\x65\x63\x63\x61\x74","\x73\x77\x61\x71\x62\x74","\x73\x65\x74\x48\x6F\x75\x72\x73","","\x67\x65\x74\x44\x61\x74\x65","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x67\x65\x74\x54\x69\x6D\x65","\x64\x61\x74\x65","\x6D\x64\x35\x78\x20\x65\x78\x70\x69\x72\x65","\x64\x61\x79","\x6D\x64\x35\x78\x20\x65\x72\x72","\x63\x6F\x64\x65","\x6D\x64\x35\x78\x20\x65\x72\x72\x32","\x39\x4A\x53\x58\x4C","\x72\x65\x70\x6C\x61\x63\x65","\x63\x73\x6B\x75\x65\x63\x65\x64\x65","\x6F\x62\x6A\x65\x63\x74","\x64\x75\x72\x61\x74\x69\x6F\x6E","\x76\x69\x64\x65\x6F\x55\x72\x6C","\x31\x2E\x32\x35\x30\x30\x30\x30","\x2D","\x73\x70\x6C\x69\x74","\x73\x74\x72\x5F\x65\x6E\x64","\x74\x6F\x46\x69\x78\x65\x64","\x23\x45\x58\x54\x4D\x33\x55","\x0D\x0A","\x23\x45\x58\x54\x2D\x58\x2D\x56\x45\x52\x53\x49\x4F\x4E\x3A\x33","\x23\x45\x58\x54\x2D\x58\x2D\x54\x41\x52\x47\x45\x54\x44\x55\x52\x41\x54\x49\x4F\x4E\x3A\x32","\x23\x45\x58\x54\x2D\x58\x2D\x4D\x45\x44\x49\x41\x2D\x53\x45\x51\x55\x45\x4E\x43\x45\x3A\x30","\x23\x45\x58\x54\x2D\x58\x2D\x4B\x45\x59\x3A\x4D\x45\x54\x48\x4F\x44\x3D\x41\x45\x53\x2D\x31\x32\x38\x2C\x55\x52\x49\x3D\x22","\x6B\x65\x79\x55\x72\x6C","\x22\x2C\x49\x56\x3D","\x69\x76","\x23\x45\x58\x54\x49\x4E\x46\x3A","\x2C","\x73\x74\x61\x72\x74\x5F\x75\x72\x6C","\x2E\x74\x73","\x23\x45\x58\x54\x2D\x58\x2D\x45\x4E\x44\x4C\x49\x53\x54","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x63\x72\x65\x61\x74\x65\x4F\x62\x6A\x65\x63\x74\x55\x52\x4C","\x6E\x6F\x74\x5F\x6C\x6F\x67\x69\x6E\x5F\x6A\x73\x78\x6C","\x75\x72\x6C","\x62\x6C\x6F\x62\x3A\x68\x74\x74\x70","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x2E\x6D\x33\x75\x38","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x70\x72\x65\x76\x69\x65\x77","\x65\x72\x72","\x6F\x72\x69\x67\x69\x6E\x61\x6C","\x76\x69\x64\x65\x6F\x55\x72\x6C\x2E\x75\x72\x6C\x20\x6E\x75\x6C\x6C\x3A","\x68\x74\x74\x70","\x2F\x61\x70\x69","\x69\x6E\x69\x74\x41\x65\x73","\x73\x6C\x65\x65\x70","\x61\x65\x73","\x6C\x65\x6E\x67\x74\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6A\x73\x78\x6C\x2E\x70\x72\x6F\x2F\x68\x61\x69\x6A\x69\x61\x6F","\x66\x6C\x6F\x6F\x72","\x30\x30\x2F\x63\x68\x65\x63\x6B\x56\x69\x64\x65\x6F\x49\x6E\x66\x6F\x3F\x73\x69\x67\x6E\x3D","\x70\x69\x64","\x6B\x6E\x78\x6B\x62\x78\x65\x6E","\x26\x6F\x72\x69\x67\x69\x6E\x3D","\x68\x6A\x65\x64\x64","\x26\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D","\x61\x73\x79\x6E\x63\x48\x74\x74\x70","\x6D\x73\x67","\x73\x75\x63\x63\x65\x73\x73","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x65\x72\x72\x43\x6F\x64\x65","\x77\x74\x5F\x70\x6C\x61\x79\x65\x72\x5F\x68\x61\x69\x6A\x69\x61\x6F","\x73\x68\x6F\x77\x41\x6E\x64\x48\x69\x64\x54\x69\x70\x73","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x55\x72\x6C","\x6E\x65\x77\x54\x6F\x6B\x65\x6E","\x6E\x65\x77\x52\x6F\x6C\x65","\x65\x78\x70\x69\x72\x65\x64\x5F\x64\x61\x74\x65","\x72\x6F\x6C\x65","\x6A\x73\x78\x6C\x5F\x75\x73\x65\x72","\x64\x61\x74\x61","\x6E\x6F\x74\x20\x65\x78\x69\x73\x74\x73","\x6D\x65\x73\x73\x61\x67\x65","\x65\x72\x72\x6F\x72","\x68\x6A\x65\x64\x64\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u53CD\u9988\u7ED9\u7BA1\u7406\u5458","\x6F\x72\x69\x67\x69\x6E","\x0A","\x66\x69\x6E\x64\x43\x6F\x6D\x6D\x6F\x6E\x53\x74\x61\x72\x74","\x30\x30\x2F\x66\x6F\x72\x6D\x61\x74\x56\x69\x64\x65\x6F\x49\x6E\x66\x6F\x3F\x73\x69\x67\x6E\x3D","\x26\x70\x69\x64\x3D","\x26\x75\x69\x64\x3D","\x75\x69\x64","\x26\x64\x75\x72\x61\x74\x69\x6F\x6E\x3D","\x26\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65\x3D","\x72\x65\x6C\x65\x61\x73\x65\x5F\x64\x61\x74\x65","\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x65\x78\x65\x63\x75\x74\x65\x20\x73\x77\x61\x71\x62\x74","\x63\x68\x61\x72\x41\x74","\x62\x36\x34","\x73\x6C\x69\x63\x65","\x3D\x3D\x3D","\x74\x65\x73\x74","\x62\x36\x34\x72\x65","\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x65\x78\x65\x63\x75\x74\x65\x20\x73\x66\x77\x65\x63\x63\x61\x74","\x3D\x3D","\x69\x6E\x64\x65\x78\x4F\x66","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x6F\x75\x6E\x64","\x3D","\x66\x69\x6C\x74\x65\x72","\x4A\x53","\x6A\x6F\x69\x6E","\x4A\x53\x58\x4C","\x54\x56\x45\x39\x50\x51\x3D\x3D","\x70\x6C\x75\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var obj=Object[__Ox112de6[0x0]](null),t=Date[__Ox112de6[0x1]]();Object[__Ox112de6[0x9]](obj,__Ox112de6[0x2],{get:function(){if(Date[__Ox112de6[0x1]]()- t> 100){const _0x680bx3=document[__Ox112de6[0x4]](__Ox112de6[0x3]);while(true){try{document[__Ox112de6[0x6]][__Ox112de6[0x5]](_0x680bx3);document[__Ox112de6[0x6]][__Ox112de6[0x5]](_0x680bx3);localStorage[__Ox112de6[0x8]](Math[__Ox112de6[0x7]]()* 2,Math[__Ox112de6[0x7]]()* 2);sessionStorage[__Ox112de6[0x8]](Math[__Ox112de6[0x7]]()* 2,Math[__Ox112de6[0x7]]()* 2)}catch(e){}}}}});setInterval(function(){console[__Ox112de6[0xa]]();t= Date[__Ox112de6[0x1]]();(function(){})[__Ox112de6[0xc]](__Ox112de6[0xb])();console[__Ox112de6[0xd]](obj[__Ox112de6[0x2]])},300);const decode=function(_0x680bx5,_0x680bx6){const obj={};const _0x680bx7=__Ox112de6[0xe]+ Math[__Ox112de6[0xf]](Math[__Ox112de6[0x7]]()* 100000000);if(!superVip[__Ox112de6[0x11]][__Ox112de6[0x10]]||  !superVip[__Ox112de6[0x11]][__Ox112de6[0x10]][__Ox112de6[0x12]]){util[__Ox112de6[0x16]]({title:__Ox112de6[0x13],success:(_0x680bx8)=>{if(_0x680bx8){window[__Ox112de6[0x15]][__Ox112de6[0x14]]()}}});return};obj[_0x680bx7]= escape;return _0x680bx6?decodeURIComponent(obj[_0x680bx7](ec[__Ox112de6[0x17]](ec[__Ox112de6[0x17]](_0x680bx5),false))):decodeURIComponent(ec[__Ox112de6[0x17]](ec[__Ox112de6[0x17]](_0x680bx5),false))};const encode=function(_0x680bx5,_0x680bx6){const _0x680bxa=unescape;const _0x680bxb=encodeURIComponent;return _0x680bx6?ec[__Ox112de6[0x18]](ec[__Ox112de6[0x18]](_0x680bxa(_0x680bxb(_0x680bx5))),false):ec[__Ox112de6[0x18]](ec[__Ox112de6[0x18]](_0x680bx5),false)};const md5x=function(_0x680bx5,_0x680bxd){try{if(!_0x680bxd){const _0x680bxe= new Date()[__Ox112de6[0x19]](0,0,0,0)+ __Ox112de6[0x1a];const _0x680bxf= new Date()[__Ox112de6[0x1b]]();const _0x680bx10=_0x680bxe[__Ox112de6[0x1c]](4,8)*  new Date()[__Ox112de6[0x1b]]()+ __Ox112de6[0x1a];return ec[__Ox112de6[0x18]](JSON[__Ox112de6[0x1d]]({date:_0x680bxe,code:_0x680bx10,day:_0x680bxf}))}else {const _0x680bx11=JSON[__Ox112de6[0x1e]](ec[__Ox112de6[0x17]](_0x680bx5));if(( new Date(Number(_0x680bx11[__Ox112de6[0x20]]))[__Ox112de6[0x1f]]()+ 86400000)< Date[__Ox112de6[0x1]]()){throw Error(__Ox112de6[0x21])};if(_0x680bx11[__Ox112de6[0x22]]!=  new Date(Number(_0x680bx11[__Ox112de6[0x20]]))[__Ox112de6[0x1b]]()){throw Error(__Ox112de6[0x23])};const _0x680bx10=( new Date(Number(_0x680bx11[__Ox112de6[0x20]]))[__Ox112de6[0x19]](0,0,0,0)+ __Ox112de6[0x1a])[__Ox112de6[0x1c]](4,8)* _0x680bx11[__Ox112de6[0x22]];if(_0x680bx10!= _0x680bx11[__Ox112de6[0x24]]){throw Error(__Ox112de6[0x25])};return _0x680bx11}}catch(e){return __Ox112de6[0x1a]}};const serializeVideo=(_0x680bx13)=>{if(!_0x680bx13){return __Ox112de6[0x1a]};try{const _0x680bx14=ec[__Ox112de6[0x28]](_0x680bx13[__Ox112de6[0x27]](__Ox112de6[0x26]),__Ox112de6[0x1a]);if( typeof (_0x680bx14)!= __Ox112de6[0x29]){return __Ox112de6[0x1a]};if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x2a]]&& (_0x680bx14[__Ox112de6[0x2a]]< superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x2a]])){return __Ox112de6[0x1a]};let _0x680bx15=__Ox112de6[0x2c];const _0x680bx16=_0x680bx14[__Ox112de6[0x2f]][__Ox112de6[0x2e]](__Ox112de6[0x2d])[0x1]- _0x680bx14[__Ox112de6[0x2f]][__Ox112de6[0x2e]](__Ox112de6[0x2d])[0x0];try{if(_0x680bx14[__Ox112de6[0x2a]]&& _0x680bx14[__Ox112de6[0x2a]]> 40){_0x680bx15= (_0x680bx14[__Ox112de6[0x2a]]/ (_0x680bx16+ 1))[__Ox112de6[0x30]](6);if(_0x680bx15> 2|| _0x680bx15< 0.5){_0x680bx15= __Ox112de6[0x2c]}}}catch(e){};let _0x680bx17=__Ox112de6[0x31]+ __Ox112de6[0x32];_0x680bx17+= __Ox112de6[0x33]+ __Ox112de6[0x32];_0x680bx17+= __Ox112de6[0x34]+ __Ox112de6[0x32];_0x680bx17+= __Ox112de6[0x35]+ __Ox112de6[0x32];_0x680bx17+= __Ox112de6[0x36]+ _0x680bx14[__Ox112de6[0x37]]+ __Ox112de6[0x38]+ _0x680bx14[__Ox112de6[0x39]]+ __Ox112de6[0x32];for(let _0x680bx18=Number(_0x680bx14[__Ox112de6[0x2f]][__Ox112de6[0x2e]](__Ox112de6[0x2d])[0x0]);_0x680bx18< _0x680bx16;_0x680bx18++){_0x680bx17+= __Ox112de6[0x3a]+ _0x680bx15+ __Ox112de6[0x3b]+ __Ox112de6[0x32];_0x680bx17+= _0x680bx14[__Ox112de6[0x3c]]+ _0x680bx18+ __Ox112de6[0x3d]+ __Ox112de6[0x32]};_0x680bx17+= __Ox112de6[0x3e];const _0x680bx19= new Blob([_0x680bx17],{type:__Ox112de6[0x3f]});return URL[__Ox112de6[0x40]](_0x680bx19)}catch(e){return __Ox112de6[0x1a]}};const get_m3u8_url_haijiao=async function(){if(!superVip[__Ox112de6[0x11]][__Ox112de6[0x10]][__Ox112de6[0x12]]){return __Ox112de6[0x41]};if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]){if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]][__Ox112de6[0x44]](__Ox112de6[0x43])){return superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]};if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]][__Ox112de6[0x46]](__Ox112de6[0x45])&&  !superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]][__Ox112de6[0x46]](__Ox112de6[0x47])){return superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]}};try{if(!superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]|| superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]][__Ox112de6[0x46]](__Ox112de6[0x48])){if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x49]]){superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]= superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x49]]}else {return __Ox112de6[0x4a]+ superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]}};if(!superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]][__Ox112de6[0x44]](__Ox112de6[0x4b])&&  !superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]][__Ox112de6[0x44]](__Ox112de6[0x4c])){superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]]= superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x49]]};if(!superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4d]]){for(let _0x680bx18=0;_0x680bx18< 3;_0x680bx18++){ await util[__Ox112de6[0x4e]](1000);if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4d]]){break}}};if(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4f]]){const _0x680bx1b=serializeVideo(superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4f]][__Ox112de6[0x27]](superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4f]][__Ox112de6[0x1c]](superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4f]][__Ox112de6[0x50]]- 5),__Ox112de6[0x1a]));if(_0x680bx1b){return _0x680bx1b}};try{const _0x680bx1c= await util[__Ox112de6[0x59]](__Ox112de6[0x51]+ (Math[__Ox112de6[0x52]](Math[__Ox112de6[0x7]]()* 2)+ 1)+ __Ox112de6[0x53]+ ec[__Ox112de6[0x55]](superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x54]])+ __Ox112de6[0x56]+ (superVip[__Ox112de6[0x11]][__Ox112de6[0x57]]?1:2)+ __Ox112de6[0x58]+ ec[__Ox112de6[0x55]](Date[__Ox112de6[0x1]]()),15000);if(_0x680bx1c[__Ox112de6[0x5a]]== __Ox112de6[0x5b]){const _0x680bx8=JSON[__Ox112de6[0x1e]](_0x680bx1c[__Ox112de6[0x5c]]);if(_0x680bx8[__Ox112de6[0x5d]]== 0){util[__Ox112de6[0x5f]](__Ox112de6[0x5e]);superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x60]]= _0x680bx8[__Ox112de6[0x60]];if(_0x680bx8[__Ox112de6[0x61]]|| _0x680bx8[__Ox112de6[0x62]]){if(_0x680bx8[__Ox112de6[0x61]]){superVip[__Ox112de6[0x11]][__Ox112de6[0x10]][__Ox112de6[0x12]]= _0x680bx8[__Ox112de6[0x61]]};if(_0x680bx8[__Ox112de6[0x62]]&& _0x680bx8[__Ox112de6[0x62]][__Ox112de6[0x63]]){superVip[__Ox112de6[0x11]][__Ox112de6[0x10]][__Ox112de6[0x64]][__Ox112de6[0x63]]= _0x680bx8[__Ox112de6[0x62]][__Ox112de6[0x63]]};GM_setValue(__Ox112de6[0x65],superVip[__Ox112de6[0x11]][__Ox112de6[0x10]])};const _0x680bx1b=serializeVideo(_0x680bx8[__Ox112de6[0x66]][__Ox112de6[0x27]](_0x680bx8[__Ox112de6[0x66]][__Ox112de6[0x1c]](_0x680bx8[__Ox112de6[0x66]][__Ox112de6[0x50]]- 5),__Ox112de6[0x1a]));if(_0x680bx1b){return _0x680bx1b}}else {if(_0x680bx8[__Ox112de6[0x5a]]!= __Ox112de6[0x67]){return _0x680bx8[__Ox112de6[0x5a]]|| _0x680bx8[__Ox112de6[0x69]][__Ox112de6[0x68]]}}}}catch(e){return e};if(superVip[__Ox112de6[0x11]][__Ox112de6[0x57]]){return __Ox112de6[0x6a]}else {const _0x680bx8= await util[__Ox112de6[0x59]](location[__Ox112de6[0x6b]]+ superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x42]],15000);if(_0x680bx8[__Ox112de6[0x5a]]!= __Ox112de6[0x5b]|| _0x680bx8[__Ox112de6[0x5c]][__Ox112de6[0x50]]< 30){return __Ox112de6[0x48]};const _0x680bx1d=_0x680bx8[__Ox112de6[0x5c]][__Ox112de6[0x2e]](__Ox112de6[0x6c]);let _0x680bx1e=util[__Ox112de6[0x6d]](_0x680bx1d[0x6],_0x680bx1d[0x8]);if(!_0x680bx1e){return __Ox112de6[0x48]};const _0x680bx1f= await util[__Ox112de6[0x59]](__Ox112de6[0x51]+ (Math[__Ox112de6[0x52]](Math[__Ox112de6[0x7]]()* 2)+ 1)+ __Ox112de6[0x6e]+ ec[__Ox112de6[0x55]](_0x680bx1e)+ __Ox112de6[0x6f]+ ec[__Ox112de6[0x55]](superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x54]])+ __Ox112de6[0x70]+ ec[__Ox112de6[0x55]](superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x71]])+ __Ox112de6[0x72]+ ec[__Ox112de6[0x55]](superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x2a]])+ __Ox112de6[0x73]+ superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x74]]+ __Ox112de6[0x58]+ ec[__Ox112de6[0x55]](Date[__Ox112de6[0x1]]())+ __Ox112de6[0x56]+ location[__Ox112de6[0x6b]],15000);if(_0x680bx1f[__Ox112de6[0x5a]]!= __Ox112de6[0x5b]){return __Ox112de6[0x48]};const _0x680bx20=JSON[__Ox112de6[0x1e]](_0x680bx1f[__Ox112de6[0x5c]]);if(_0x680bx20[__Ox112de6[0x5d]]!= 0){return _0x680bx20[__Ox112de6[0x5a]]};util[__Ox112de6[0x5f]](__Ox112de6[0x5e]);superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x4f]]= _0x680bx20[__Ox112de6[0x66]];superVip[__Ox112de6[0x11]][__Ox112de6[0x2b]][__Ox112de6[0x60]]= _0x680bx20[__Ox112de6[0x60]];if(_0x680bx20[__Ox112de6[0x61]]|| _0x680bx20[__Ox112de6[0x62]]){if(_0x680bx20[__Ox112de6[0x61]]){superVip[__Ox112de6[0x11]][__Ox112de6[0x10]][__Ox112de6[0x12]]= _0x680bx20[__Ox112de6[0x61]]};if(_0x680bx20[__Ox112de6[0x62]]&& _0x680bx20[__Ox112de6[0x62]][__Ox112de6[0x63]]){superVip[__Ox112de6[0x11]][__Ox112de6[0x10]][__Ox112de6[0x64]][__Ox112de6[0x63]]= _0x680bx20[__Ox112de6[0x62]][__Ox112de6[0x63]]};GM_setValue(__Ox112de6[0x65],superVip[__Ox112de6[0x11]][__Ox112de6[0x10]])};return serializeVideo(_0x680bx20[__Ox112de6[0x66]][__Ox112de6[0x27]](_0x680bx20[__Ox112de6[0x66]][__Ox112de6[0x1c]](_0x680bx20[__Ox112de6[0x66]][__Ox112de6[0x50]]- 5),__Ox112de6[0x1a]))}}catch(e){alert(JSON[__Ox112de6[0x1d]](e));return __Ox112de6[0x48]}};const ec={b64:__Ox112de6[0x75],b64re:/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,swaqbt:(_0x680bx22,_0x680bx23= true)=>{_0x680bx22= String(_0x680bx22);var _0x680bx24,_0x680bx25,_0x680bx26,_0x680bx27,_0x680bx20=__Ox112de6[0x1a],_0x680bx18=0,_0x680bx28=_0x680bx22[__Ox112de6[0x50]]% 3;for(;_0x680bx18< _0x680bx22[__Ox112de6[0x50]];){if((_0x680bx25= _0x680bx22[__Ox112de6[0x76]](_0x680bx18++))> 255|| (_0x680bx26= _0x680bx22[__Ox112de6[0x76]](_0x680bx18++))> 255|| (_0x680bx27= _0x680bx22[__Ox112de6[0x76]](_0x680bx18++))> 255){return __Ox112de6[0x77]};_0x680bx24= (_0x680bx25<< 16)| (_0x680bx26<< 8)| _0x680bx27;_0x680bx20+= ec[__Ox112de6[0x79]][__Ox112de6[0x78]](_0x680bx24>> 18& 63)+ ec[__Ox112de6[0x79]][__Ox112de6[0x78]](_0x680bx24>> 12& 63)+ ec[__Ox112de6[0x79]][__Ox112de6[0x78]](_0x680bx24>> 6& 63)+ ec[__Ox112de6[0x79]][__Ox112de6[0x78]](_0x680bx24& 63)};if(_0x680bx23){return ec[__Ox112de6[0x18]](_0x680bx28?_0x680bx20[__Ox112de6[0x7a]](0,_0x680bx28- 3)+ __Ox112de6[0x7b][__Ox112de6[0x1c]](_0x680bx28):_0x680bx20,false)}else {return _0x680bx28?_0x680bx20[__Ox112de6[0x7a]](0,_0x680bx28- 3)+ __Ox112de6[0x7b][__Ox112de6[0x1c]](_0x680bx28):_0x680bx20}},sfweccat:(_0x680bx22,_0x680bx23= true)=>{_0x680bx22= String(_0x680bx22)[__Ox112de6[0x27]](/[\t\n\f\r ]+/g,__Ox112de6[0x1a]);if(!ec[__Ox112de6[0x7d]][__Ox112de6[0x7c]](_0x680bx22)){return __Ox112de6[0x7e]};_0x680bx22+= __Ox112de6[0x7f][__Ox112de6[0x7a]](2- (_0x680bx22[__Ox112de6[0x50]]& 3));var _0x680bx24,_0x680bx20=__Ox112de6[0x1a],_0x680bx29,_0x680bx2a,_0x680bx18=0;for(;_0x680bx18< _0x680bx22[__Ox112de6[0x50]];){_0x680bx24= ec[__Ox112de6[0x79]][__Ox112de6[0x80]](_0x680bx22[__Ox112de6[0x78]](_0x680bx18++))<< 18| ec[__Ox112de6[0x79]][__Ox112de6[0x80]](_0x680bx22[__Ox112de6[0x78]](_0x680bx18++))<< 12| (_0x680bx29= ec[__Ox112de6[0x79]][__Ox112de6[0x80]](_0x680bx22[__Ox112de6[0x78]](_0x680bx18++)))<< 6| (_0x680bx2a= ec[__Ox112de6[0x79]][__Ox112de6[0x80]](_0x680bx22[__Ox112de6[0x78]](_0x680bx18++)));_0x680bx20+= _0x680bx29=== 64?String[__Ox112de6[0x81]](_0x680bx24>> 16& 255):_0x680bx2a=== 64?String[__Ox112de6[0x81]](_0x680bx24>> 16& 255,_0x680bx24>> 8& 255):String[__Ox112de6[0x81]](_0x680bx24>> 16& 255,_0x680bx24>> 8& 255,_0x680bx24& 255)};if(_0x680bx23){return ec[__Ox112de6[0x17]](_0x680bx20,false)}else {return _0x680bx20}},knxkbxen:(_0x680bx5)=>{_0x680bx5= ec[__Ox112de6[0x18]](encodeURIComponent(JSON[__Ox112de6[0x1d]](_0x680bx5)),false);const _0x680bx2b=Math[__Ox112de6[0x82]](Math[__Ox112de6[0x7]]()* (_0x680bx5[__Ox112de6[0x50]]> 11?8:1)+ 1);const _0x680bx2c=_0x680bx5[__Ox112de6[0x2e]](__Ox112de6[0x1a]);const _0x680bx2d=_0x680bx2c[__Ox112de6[0x84]]((_0x680bx18)=>{_0x680bx18== __Ox112de6[0x83]});for(let _0x680bx18=0;_0x680bx18< _0x680bx2c[__Ox112de6[0x50]];_0x680bx18++){if(_0x680bx18== _0x680bx2b){_0x680bx2c[_0x680bx18]= _0x680bx2c[_0x680bx18]+ __Ox112de6[0x85]};if(_0x680bx2c[_0x680bx18]== __Ox112de6[0x83]){_0x680bx2c[_0x680bx18]= __Ox112de6[0x1a]}};return ec[__Ox112de6[0x79]][Math[__Ox112de6[0x52]](Math[__Ox112de6[0x7]]()* 62)]+ (_0x680bx2c[__Ox112de6[0x86]](__Ox112de6[0x1a])+ _0x680bx2b)+ _0x680bx2d[__Ox112de6[0x50]]},cskuecede:(_0x680bx5)=>{if(_0x680bx5[__Ox112de6[0x44]](__Ox112de6[0x87])){_0x680bx5= _0x680bx5[__Ox112de6[0x27]](__Ox112de6[0x87],__Ox112de6[0x1a])};_0x680bx5= _0x680bx5[__Ox112de6[0x1c]](ec[__Ox112de6[0x17]](__Ox112de6[0x88]));const _0x680bx2b=_0x680bx5[__Ox112de6[0x1c]](_0x680bx5[__Ox112de6[0x50]]- 2,_0x680bx5[__Ox112de6[0x50]]- 1);const _0x680bx2e=_0x680bx5[__Ox112de6[0x1c]](_0x680bx5[__Ox112de6[0x50]]- 1);const _0x680bx2c=_0x680bx5[__Ox112de6[0x1c]](0,_0x680bx5[__Ox112de6[0x50]]- 2)[__Ox112de6[0x2e]](__Ox112de6[0x1a]);for(let _0x680bx18=0;_0x680bx18< _0x680bx2c[__Ox112de6[0x50]];_0x680bx18++){if(_0x680bx18== (Number(_0x680bx2b)+ 1)){_0x680bx2c[_0x680bx18]= __Ox112de6[0x1a];_0x680bx2c[_0x680bx18+ 1]= __Ox112de6[0x1a];break}};for(let _0x680bx18=0;_0x680bx18< Number(_0x680bx2e);_0x680bx18++){_0x680bx2c[__Ox112de6[0x89]](__Ox112de6[0x83])};return JSON[__Ox112de6[0x1e]](decodeURIComponent((ec[__Ox112de6[0x17]](_0x680bx2c[__Ox112de6[0x86]](__Ox112de6[0x1a]),false))))}};(function(_0x680bx26,_0x680bx27,_0x680bx2f,_0x680bx30,_0x680bx2d,_0x680bx31){_0x680bx31= __Ox112de6[0x8a];_0x680bx30= function(_0x680bx32){if( typeof alert!== _0x680bx31){alert(_0x680bx32)};if( typeof console!== _0x680bx31){console[__Ox112de6[0xd]](_0x680bx32)}};_0x680bx2f= function(_0x680bx25,_0x680bx26){return _0x680bx25+ _0x680bx26};_0x680bx2d= _0x680bx2f(__Ox112de6[0x8b],_0x680bx2f(_0x680bx2f(__Ox112de6[0x8c],__Ox112de6[0x8d]),__Ox112de6[0x8e]));try{_0x680bx26= __encode;if(!( typeof _0x680bx26!== _0x680bx31&& _0x680bx26=== _0x680bx2f(__Ox112de6[0x8f],__Ox112de6[0x90]))){_0x680bx30(_0x680bx2d)}}catch(e){_0x680bx30(_0x680bx2d)}})({})
const modifyData = function(data) {
	if(superVip._CONFIG_.user.ver != md5x()){
		util.logouted();
		return;
	}
	let body = '';
	let isPlus = false;
	URL.revokeObjectURL(superVip._CONFIG_.videoUrl.url);
	superVip._CONFIG_.videoUrl = {};
	util.showAndHidTips('wt_player_haijiao', 'set', false);
	if (superVip._CONFIG_.hjedd || typeof(data) == 'object') {
		superVip._CONFIG_.hjedd = true;
		body = data;
	} else {
		try {
			body = JSON.parse(decode(data));
		} catch (e) {
			body = JSON.parse(decode(data, true));
			isPlus = true;
		}
	}
	if (!body) return superVip._CONFIG_.hjedd ? 'null' : 'WW01V2MySkJQVDA9';
	if ($.isEmptyObject(body)) return superVip._CONFIG_.hjedd ? '{}' : 'WlRNd1BRPT0=';
	try {
		superVip._CONFIG_.userId = body.user.id;
	} catch (e) {}
	if (body.attachments && body.attachments.length > 0) {
		let types = [];
		body.attachments.forEach(item => {
			if (item.category == 'video') {
				const uid = /uid=([^;]+)/.exec(document.cookie);
				const token = /token=([^;]+)/.exec(document.cookie);
				if (!superVip._CONFIG_.hjedd && (!body.sale || !body.sale.money_type)) {
					$.post({
						url: location.origin + '/api/attachment',
						headers: {
							'X-User-Id': uid && token?uid[1]: '170209379101',
							'X-User-Token': uid && token?token[1]: 'f8d80654c5334595b5594cab3b462141'
						},
						data: JSON.stringify({
							id: item.id,
							resource_type: 'topic',
							resource_id: body.topicId,
							line: ''
						})
					})
				}
			}

			if (item.category == 'video' && (!types.includes('video'))) {
				types.push('video');
			}

			if (item.category == 'audio' && (!types.includes('audio'))) types.push('audio');
			if (item.category == 'images' && (!types.includes('img'))) types.push('img');
		})

		types = types.length > 0 ? '[' + types.join('-') : '[';
		if (body.sale && 'money_type' in body.sale) {
			types += ('-' + body.sale.money_type);
		} else {
			types += ('-0');
		}
		types += ']';
		body.title = (types + body.title);

		if (superVip._CONFIG_.hjedd) {
			document.querySelector('head title').innerHTML = body.title;
		} else {
			try {
				const title = decodeURIComponent(escape(body.title));
				document.querySelector('head title').innerHTML = title;
			} catch (e) {
				document.querySelector('head title').innerHTML = body.title;
			}
		}
	}
	let [nbody, rest_img, has_video, has_audio] = util.replaceExistResources(body);
	body = nbody;
	if (has_video >= 0 || has_audio >= 0) {
		let insertDom = ''
		if (has_video >= 0) {
			superVip._CONFIG_.videoUrl = {
				url: body.attachments[has_video].remoteUrl,
				type: body.sale && body.sale.money_type ? body.sale.money_type : 0,
				pid: body.topicId,
				uid: body.user.id,
				duration: body.attachments[has_video].video_time_length ? body.attachments[has_video]
					.video_time_length : 0,
				release_date: new Date(body.createTime).getTime()
			}
			superVip._CONFIG_.videoUrl.original = superVip._CONFIG_.videoUrl.url
			insertDom =
				`<div><video style="display:none" src="" data-id="${body.attachments[has_video].id}"></video></div>`
			if (superVip._CONFIG_.videoUrl.type != 0 && (superVip._CONFIG_.videoUrl.url.includes('preview') || !superVip._CONFIG_.videoUrl.url.includes('.m3u8')) && !body.title.includes('audio')) {
				GM_addStyle(`
					#wt-resources-box::after{ content: '请使用屏幕右边脚本悬浮播放按钮播放${location.href}'; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); color: red;font-size: 25px;text-shadow: 1px 1px 0px;}
				`)
				try {
					$.ajax({
						url: 'https://api.jsxl.pro/haijiao' + (Math.floor(Math.random() * 2) + 1) + '00/checkVideoInfo?sign=' + ec.knxkbxen(superVip
								._CONFIG_.videoUrl.pid) + '&origin=' + (superVip._CONFIG_.hjedd ? 1 : 2) +
							'&timestamp=' + ec.knxkbxen(Date.now()),
						method: 'GET',
						headers: {
							'JsxlToken': superVip._CONFIG_.user.token
						},
						success: function(response) {
							superVip._CONFIG_.videoUrl.initAes = true;
							if (response.errCode == 0) {
								if(response.data){
									superVip._CONFIG_.videoUrl.aes = response.data;
									superVip._CONFIG_.videoUrl.downloadUrl = response.downloadUrl;
									util.showAndHidTips('wt_player_haijiao');
								}
								if(response.newToken || response.newRole){
									if(response.newToken) superVip._CONFIG_.user.token = response.newToken;
									if(response.newRole && response.newRole.expired_date) superVip._CONFIG_.user.role.expired_date = response.newRole.expired_date;
									GM_setValue('jsxl_user', superVip._CONFIG_.user)
								}
							}else{
								if(response.msg != 'not exists'){
									util.showTips({
										title: response.msg || response.error.message
									})
									return response.msg || response.error.message;
								}
							}
						},
						error: function(xhr, status, error) {
							superVip._CONFIG_.videoUrl.initAes = true;
						}
					});
				} catch (e) {
					superVip._CONFIG_.videoUrl.initAes = true;
				}
			}
			if (!superVip._CONFIG_.videoUrl.url.includes('preview') && superVip._CONFIG_.videoUrl.url.includes(
					'.m3u8')) {
				util.showAndHidTips('wt_player_haijiao');
			}
		} else {
			GM_addStyle(`
				#wt-resources-box::after{ content: '';}
			`)
			insertDom =
				`<div style="margin: 20px;"><audio id="showaudio" src="${body.attachments[has_audio].remoteUrl}" controls controlslist="nodownload"></audio></div>`
		}
		try {
			const regRep = /class="sell_line2"\>[^\<]+<\/span>/.exec(body.content)[0]
			body.content = body.content.replace('<span class="sell-btn"',
				'<div id="wt-resources-box"><div class="sell-btn "').replace(regRep, regRep + insertDom +
				'</div></div>');
		} catch (e) {
			body.content += insertDom
		}
		return superVip._CONFIG_.hjedd ? body : util.jencode(body, isPlus);
	}

	let dom_elements = []
	for (const [id, src] of Object.entries(rest_img)) {
		dom_elements.push(`<img src="${src}" data-id="${id}"/>`);
	}
	let selled_img = `[sell]` + '<p>' + dom_elements.join('</p><p>') + '</p>' + `[/sell]`;
	let ncontent = body.content.replace(/<span class=\"sell-btn\".*<\/span>/, selled_img);
	body.content = ncontent;
	return superVip._CONFIG_.hjedd ? body : util.jencode(body, isPlus);
}

const util = {
	copyText: (text) => {
		if (navigator.clipboard && window.isSecureContext) {
		        return navigator.clipboard.writeText(text);
		} else if (document.execCommand) {
			const textArea = document.createElement('textarea');
			textArea.style.position = 'fixed';
			textArea.style.top = textArea.style.left = '-100vh';
			textArea.style.opacity = '0';
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			try {
				const success = document.execCommand('copy');
				return success ? Promise.resolve() : Promise.reject();
			} catch (err) {
				return Promise.reject(err);
			} finally {
				textArea.remove();
			}
		} else {
			return Promise.reject(new Error('Clipboard API not supported and execCommand not available.'));
		}
	},

	logined: () => {
		$("#wt-my img").addClass('margin-left')
		$('#wt-my img').attr('src', superVip._CONFIG_.user.avatar)
		$('#wt-set-box .user-box-container .user-info').css('display', 'flex')
		$('#wt-set-box .user-box-container .user-info img').attr('src', superVip._CONFIG_.user.avatar)
		$('#wt-set-box .user-box-container .user-info .nickname').html(superVip._CONFIG_.user.nickname)
		$('#wt-set-box .user-box-container .user-info .username').html(superVip._CONFIG_.user.username)
	},

	logouted: (msg) => {
		superVip._CONFIG_.user = '';
		$("#wt-my img").removeClass('margin-left')
		$('#wt-my img').attr('src',
			'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/null_square.png')
		$('#wt-set-box .user-box-container .user-info').css('display', 'none')
		GM_setValue('jsxl_user', '')
		if(msg){
			util.showTips({
				title: '请重新登录，errMsg:' + msg
			})
		}
	},

	showAndHidTips: (name, op = 'set', val = true) => {
		let tips = GM_getValue('wt_tips', {})
		if (!tips) tips = {}
		if (op == 'set') {
			tips[name] = val
			GM_setValue('wt_tips', tips)
			if (val) $('.' + name).addClass('tips-yuan')
			else $('.' + name).removeClass('tips-yuan')
			return true
		} else {
			return tips[name] ? true : false
		}
	},

	addLogin: () => {
		if ($('#wt-login-box').length > 0) {
			$("#wt-login-box input").val('');
			return;
		}
		$('body').append(`
			<div id="wt-login-mask"></div>
			<div id="wt-login-box">
				<div class="logo">
					<p>@https://jsxl.pro</p>
					<p>v ${superVip._CONFIG_.version}</p>
				</div>
				<div class="close"></div>
				<div class="title">登录脚本账号</div>
				<div class="input-box">
					<input type="number" placeholder="输入jsxl.pro的登录账号"/>
				</div>
				<div class="input-box" style="margin-top:10px;">
					<input placeholder="输入jsxl.pro的登录密码" maxLength="8"/>
				</div>
				<div class="j-login-btn">
					<button >登录</button>
				</div>
				<div class="to-index" style="color: #e91e63;text-align: right;margin-right: -30px; height: 40px;line-height: 40px;font-size: 11px;font-weight: 500;">去发电获取权限？</div>
			</div>
		`)
		GM_addStyle(`
			#wt-login-mask{ display: none;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 11000;background-color: #0000004d;}
			#wt-login-box{position: fixed;margin-top: 3%;top: 50%;left: 50%;transform: translate(-50%,-50%) scale(0);overflow: hidden;background-color: white;padding: 30px;padding-bottom: 0;border-radius: 10px;z-index: 11010;}
			#wt-login-box::before{content:'';position: absolute;width: 250px;height: 250px;border-radius: 200px;background-color: #E91E63;z-index: -1;opacity: 0.7;bottom: 110px;right: 100px;}
			#wt-login-box::after{content:'';position: absolute;width: 250px;height: 250px;border-radius: 200px;background-color: #2196F3;z-index: -1;opacity: 0.7;top: 115px;right: -112px;}
			#wt-login-box .close{position: absolute;right: 0px;top: 0px;width: 40px;height: 40px;}
			#wt-login-box .close::before,#wt-login-box .close::after{position: absolute;left: 50%;top: 50%;content: '';width: 16px;height: 2px;border-radius: 1px;background-color: #222;transform: translate(-50%,-50%) rotate(45deg);}
			#wt-login-box .close::after,#wt-set-box .close::after{transform: translate(-50%,-50%) rotate(-45deg);}
			#wt-login-box .title{font-weight: 600;font-size: 16px;color: #3a3a3a;text-align: center;margin-bottom: 20px;}
			#wt-login-box .input-box{display: flex;background-color: #f5f5f5;width: 160px;height: 35px;border-radius: 30px;overflow: hidden;font-size: 12px;}
			#wt-login-box .input-box input{width: 100%;height: 100%;padding-left: 15px;box-sizing: border-box;outline: none;border: none;background-color: #f5f5f5;font-size: 11px;color: black;letter-spacing: 1px;}
			#wt-login-box input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none !important; }
			#wt-login-box .j-login-btn{width: 100px;padding: 2px;height: 40px;font-size: 12px;margin: 15px auto;margin-bottom: 0;}
			#wt-login-box .j-login-btn button{width: 100%;height: 100%;border-radius: 30px;border: none;color: white;transition: all 0.3s ease;background-color: #ec407a;}
			#wt-login-box .logo{position: absolute;top: 5%;left: 1%; color: #dbdbdb; font-size: 11px;transform: rotate(-15deg);text-align: center;z-index: 10;}
		`)
		$("#wt-login-mask").on("click", () => {
			$('#wt-login-mask').css('display', 'none')
			$("#wt-login-box").removeClass('show-set-box')
			$("#wt-login-box").addClass('hid-set-box')
		})
		$("#wt-login-box .close").on("click", () => {
			$('#wt-login-mask').css('display', 'none')
			$("#wt-login-box").removeClass('show-set-box')
			$("#wt-login-box").addClass('hid-set-box')
		})
		$("#wt-login-box .to-index").on("click", () => {
			window.open('https://jsxl.pro/#/pages/index/item/item?id=6564356755b337cfad7df55d&appName=%25E6%25B5%25B7%25E8%25A7%2592%25E7%25A4%25BE%25E5%258C%25BA')
		})
		$("#wt-login-box .j-login-btn button").on("click", async () => {
						
			try{
				$('#wt-loading-box').css('display', 'block')
				await util.sleep(300);
				$("#wt-login-box .j-login-btn button").addClass('btn-anima')
				setTimeout(() => {
					$("#wt-login-box .j-login-btn button").removeClass('btn-anima')
				}, 500)
				const username = $("#wt-login-box input")[0].value;
				let pwd = $("#wt-login-box input")[1].value;
				if (!/^[0-9]{1,11}/.test(username) || !/.{6,8}$/.test(pwd)) {
					setTimeout(() => {
						$('#wt-loading-box').css('display', 'none')
						util.showTips({
							title: '账号或密码错误，请使用https://jsxl.pro网站的登录账号和登录密码登入脚本(如账号或密码忘记可登录/邮箱登录https://jsxl.pro网站后点头像进入修改信息页面，可看到账号及修改密码)'
						})
					}, 2500)
					return
				}
				$.ajax({
					url: "https://api.jsxl.pro/openHttp/loginScript_v2?code=" + encodeURIComponent(username + '+' + pwd) + '&ap=' +
						'JU7QJJUU2JUI1JUI3JUU4JUE3JTkyJUU3JUE0JUJFJUU1JThDJUJBK5I1H&version=' + superVip._CONFIG_.version,
					type: "GET",
					timeout: 6000,
					async: true,
					success: function(response) {
						if (response.errCode != 0) {
							$('#wt-loading-box').css('display', 'none');
							util.showTips({
								title: response.msg
							})
						} else {
							const res = {
								avatar: response.data.avatar,
								username: response.data.username,
								nickname: response.data.nickname,
								login_date: new Date().setHours(0,0,0,0),
								login_type: response.data.login_type,
								token: response.newToken,
								role: response.newRole
							}
							superVip._CONFIG_.user = res
							superVip._CONFIG_.user.ver = md5x(superVip)
							util.logined()
							GM_setValue('jsxl_user', res)
							GM_setValue('jsxl_login_pwd', username + '+' + pwd)
							
							$('#wt-loading-box').css('display', 'none')
							$('#wt-login-mask').css('display','none')
							$("#wt-login-box").removeClass('show-set-box')
							$("#wt-login-box").addClass('hid-set-box')
							
							util.showTips({
								title: response.msg + '，是否跳转到今日海角地址?',
								doubt: true,
								success: (e) => {
									if (e) {
										location.href = response.data.haijiaoUrl + '/home'
									}else{
										window.location.reload()
									}
								},
							})
						}
					},
					error: function(e) {
						$('#wt-loading-box').css('display', 'none')
						console.log(e)
						util.showTips({
							title: '登录失败，请关掉梯子(vpn)再试，或联系jsxl.pro网站管理员'
						})
					}
				});
			}catch(e){
				$('#wt-loading-box').css('display', 'block')
				alert(e)
				util.showTips({
					title: e.message
				})
			}
		})
	},

	jencode: (s, plus) => {
		return encode(JSON.stringify(s, `utf-8`), plus);
	},

	asyncHttp: async (url, timeout = 6000, isHeader = true) => {
		return new Promise((resolve, reject) => {
			var request = new XMLHttpRequest();
			request.open('GET', url, true);
			if(isHeader){
				request.setRequestHeader('JsxlToken', superVip._CONFIG_.user.token);
			}
			request.timeout = timeout;
			request.onload = function() {
				if (request.readyState == 4) {
					if (request.status === 200) {
						resolve({
							msg: 'success',
							responseText: request.responseText
						});
					} else {
						reject({
							msg: 'err1',
							responseText: ''
						});
					}
				}
			};
			request.onerror = function() {
				reject({
					msg: 'err2',
					responseText: ''
				});
			};
			request.ontimeout = function() {
				reject({
					msg: 'timeout',
					responseText: ''
				});
			};
			request.send();
		});
	},

	findCommonStart: (str1, str2) => {
		let common = '';
		const minLength = Math.min(str1.length, str2.length);
		for (let i = 0; i < minLength; i++) {
			if (str1[i] === str2[i]) {
				common += str1[i];
			} else {
				break;
			}
		}
		return common;
	},

	findTargetElement: (targetContainer, maxTryTime = 30) => {
		const body = window.document;
		let tabContainer;
		let tryTime = 0;
		let startTimestamp;
		return new Promise((resolve, reject) => {
			function tryFindElement(timestamp) {
				if (!startTimestamp) {
					startTimestamp = timestamp;
				}
				const elapsedTime = timestamp - startTimestamp;
				if (elapsedTime >= 500) {
					console.log("find element：" + targetContainer + "，this" + tryTime + "num")
					tabContainer = body.querySelector(targetContainer)
					if (tabContainer) {
						resolve(tabContainer)
					} else if (++tryTime === maxTryTime) {
						reject()
					} else {
						startTimestamp = timestamp
					}
				}
				if (!tabContainer && tryTime < maxTryTime) {
					requestAnimationFrame(tryFindElement);
				}
			}
			requestAnimationFrame(tryFindElement);
		});
	},

	replaceExistResources: (body) => {
		let attachments = body.attachments;
		let all_img = {};
		let has_video = -1;
		let has_audio = -1;
		for (var i = 0; i < attachments.length; i++) {
			var atta = attachments[i];
			if (atta.category === 'images') {
				all_img[atta.id] = atta.remoteUrl;
			}
			if (atta.category === 'audio') {
				has_audio = i;
				return [body, undefined, undefined, has_audio];
			}
			if (atta.category === 'video') {
				has_video = i;
				return [body, undefined, has_video, undefined];
			}
		}
		return [body, all_img, has_video];
	},

	sleep: (time) => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res()
			}, time)
		})
	},

	showTips: (item = {}) => {
		$('#wt-maxindex-mask').css('display', 'block');
		$("#wt-tips-box").removeClass('hid-set-box');
		$("#wt-tips-box").addClass('show-set-box');
		$('#wt-tips-box .btn-box').empty()
		$('#wt-tips-box .btn-box').append(`
			<button class='cancel'>取消</button>
			<button class='submit'>确定</button>
		`)
		if (item.title) $('#wt-tips-box .content').html(item.title);
		if (item.doubt) $('#wt-tips-box .btn-box .cancel').css('display', 'block');
		if (item.confirm) $('#wt-tips-box .btn-box .submit').html(item.confirm);
		if (item.hidConfirm) {
			$('#wt-tips-box .submit').css('display', 'none');
		} else {
			$('#wt-tips-box .submit').css('display', 'block');
		}
		$('#wt-tips-box .btn-box .submit').on('click', () => {
			$('#wt-maxindex-mask').css('display', 'none');
			$("#wt-tips-box").removeClass('show-set-box');
			$("#wt-tips-box").addClass('hid-set-box');
			if (item.success) item.success(true);
		})
		$('#wt-tips-box .btn-box .cancel').on('click', () => {
			$('#wt-maxindex-mask').css('display', 'none');
			$("#wt-tips-box").removeClass('show-set-box');
			$("#wt-tips-box").addClass('hid-set-box');
			if (item.success) item.success(false);
		})
	},

	showDownLoadWindow: (show = true, msg) => {
		if (!show) {
			$('#wt-mask-box').css('display', 'none');
			$("#wt-download-box").removeClass('show-set-box');
			$("#wt-download-box").addClass('hid-set-box');
			return
		}
		$('#wt-mask-box').css('display', 'block');
		const downloadUrl = superVip._CONFIG_.videoUrl.downloadUrlSign;
		if (!document.querySelector('#wt-download-box')) {
			let items = `<li class="item" data-url="${downloadUrl}" data-type="copy" style="background-color: #fc4884;color:#e0e0e0;">复制链接</li>`
			superVip._CONFIG_.downUtils.forEach((item, index) => {
				items += `
					<li class="item" data-url="${item.url + (item.isAppend?'':'?m3u8=') + downloadUrl}">${item.title}</li>
				`
			})
			$('body').append(`
				<div id="wt-download-box">
					<div class="close"></div>
					<div class="tips">* ${msg?msg + '(刷新页面或打开其它帖子链接将丢失，特长的链接有效期60分钟)': '特长的视频链接有效期60分钟，请尽快使用。'}</div>
					<ul>${items}</ul>
				</div>
			`)
		} else {
			$('#wt-download-box').empty()
			let items = `<li class="item" data-url="${downloadUrl}" data-type="copy" style="background-color: #fc4884;color:#e0e0e0;">复制链接</li>`
			superVip._CONFIG_.downUtils.forEach((item, index) => {
				items += `
					<li class="item" data-url="${item.url + (item.isAppend?'':'?m3u8=') + downloadUrl}">${item.title}</li>
				`
			})
			$('#wt-download-box').append(`<view class="close"></view><div class="tips">* ${msg?msg + '(刷新页面或打开其它帖子链接将丢失，特长的链接有效期60分钟)': '刷新页面或打开其它帖子链接将丢失，特长的链接有效期60分钟'}</div><ul>${items}</ul>`)
		}
		if(superVip._CONFIG_.isMobile && superVip._CONFIG_.isMobile[0] == 'iPhone'){
			$('#wt-download-box ul')[0].innerHTML += `<li class="item" data-open="1" data-url="https://apps.apple.com/cn/app/m3u8-mpjex/id6449724938">苹果视频下载软件</li>`
		}
		if(superVip._CONFIG_.isMobile && superVip._CONFIG_.isMobile[0] == 'Android'){
			$('#wt-download-box ul')[0].innerHTML += `<li class="item" data-open="1" data-url="https://wwjf.lanzoul.com/isifQ18id4fa">安卓视频下载软件(密3y3a)</li>`
		}
		
		$("#wt-download-box").removeClass('hid-set-box');
		$("#wt-download-box").addClass('show-set-box');
		$("#wt-download-box .item").on('click', function(e) {
			const url = e.target.dataset.url
			if(e.target.dataset.type == 'copy'){
				if(url){
					util.copyText(url).then(res => {
						util.showTips({
							title: '视频地址复制成功，请尽快使用'
						})
					}).catch(err =>{
						util.showTips({
							title: '复制失败，请通过下面在线下载再复制输入框内的视频地址'
						})
					})
				}else{
					util.showTips({
						title: '抱歉，未检测到视频'
					})
				}
				return;
			}
			if (!url || !url.includes('.m3u8') && e.target.dataset.open != 1) {
				util.showTips({
					title: '抱歉，未检测到视频，还继续前往吗?',
					doubt: true,
					success: (res) => {
						if (res) {
							window.open(url)
						}
					}
				})
			} else {
				window.open(url);
			}
		})
		$("#wt-download-box .close").on('click', function() {
			$("#wt-mask-box").click()
		})
	},

	formatTitle: (data) => {
		if (!data) return data
		if (superVip._CONFIG_.hjedd || typeof(data) == 'object') {
			superVip._CONFIG_.hjedd = true
		} else {
			data = JSON.parse(decode(data))
		}
		
		if (!data || data == 'null') return superVip._CONFIG_.hjedd ? 'null' : 'WW01V2MySkJQVDA9'
		if (!data.results) {
			data.results = JSON.parse(JSON.stringify(data))
			data.isList = true
		}
		data.results.forEach(item => {
			let types = []
			if (item.hasVideo && !superVip._CONFIG_.hjedd) types.push('video')
			if (item.hasAudio && !superVip._CONFIG_.hjedd) types.push('audio')
			if (item.hasPic && !superVip._CONFIG_.hjedd) types.push('img')
			if (item.attachments && item.attachments.length > 0) {
				let imgCount = 0
				item.attachments.forEach(item => {
					if (item.category == 'video' && (!types.includes('video'))) types.push(
						'video')
					if (item.category == 'audio' && (!types.includes('audio'))) types.push(
						'audio')
					if (item.category == 'images') {
						if (!types.includes('img')) types.push('img')
						imgCount++
					}
				})
				if (superVip._CONFIG_.hjedd && (imgCount > 2) && !types.includes('video')) types
					.push('?')
			}

			types = types.length > 0 ? '[' + types.join('-') : '[';
			if ('money_type' in item) {
				types += ('-' + item.money_type);
			} else {
				types += ('-0');
			}
			types += ']';
			item.title = (types + item.title);

		})
		if (superVip._CONFIG_.hjedd) {
			return data.isList ? data.isList : data
		} else {
			return data.isList ? util.jencode(data.results) : util.jencode(data)
		}
	},

	lastingToken: (data) => {
		if (!data) return data;
		let info = ''
		if (superVip._CONFIG_.hjedd || typeof(data) == 'object') {
			superVip._CONFIG_.hjedd = true
			info = data
		} else {
			info = JSON.parse(decode(data))
		}
		const user = info.user ? info.user : info
		user.title = {
			id: 6,
			name: unescape(encodeURIComponent('神豪')),
			consume: 10000000,
			consumeEnd: 0,
			icon: "https://hjpic.hjpfe1.com/hjstore/system/node/usertitle6.png?ver=1654590235"
		}
		user.vip = 4
		user.famous = true
		return superVip._CONFIG_.hjedd ? info : util.jencode(info)
	},

	formatVideo: (data) => {
		if (!data) return data
		let video = ''
		if (superVip._CONFIG_.hjedd || typeof(data) == 'object') {
			superVip._CONFIG_.hjedd = true
			video = data
		} else {
			video = JSON.parse(decode(data))
		}
		video.type = 1
		video.amount = 0
		video.money_type = 0
		video.vip = 0
		if (video.remoteUrl && !video.remoteUrl.startsWith('http')) {
			if (window.location.href.includes('videoplay')) {
				//短视频待修
				// video.remoteUrl = util.getM3u8Path(video.remoteUrl)
				// superVip._CONFIG_.videoUrl = video.remoteUrl
			} else {
				superVip._CONFIG_.videoUrl.url = video.remoteUrl
				if (superVip._CONFIG_.videoUrl.type == 0 && video.remoteUrl) {
					util.showAndHidTips('wt_player_haijiao');
				}
			}
		}
		return superVip._CONFIG_.hjedd ? video : util.jencode(video)
	},

	checkUpdate: async (check) => {
		const autoUpdatedVersionDate = GM_getValue('haijiao_auto_updated_date', 0)
		if (autoUpdatedVersionDate > Date.now() && !check) return {
			errCode: 100,
			msg: '检测更新频率限制'
		}
		if (check && GM_getValue('haijiao_updated_next_date', 0) > Date.now()) return {
			errCode: 200,
			msg: '请在 ' + new Date(GM_getValue('haijiao_updated_next_date', 0)).toLocaleString() + ' 后再检查更新'
		}
		GM_setValue('haijiao_updated_next_date', Date.now() + 300000)
		const wt_haijiao_first_use = GM_getValue('wt_haijiao_first_use', '')
		const result = await util.asyncHttp('https://api.jsxl.pro/openHttp/updateCheck?name=haijiao&version=' + superVip._CONFIG_.version + '&use_date=' + (wt_haijiao_first_use ? wt_haijiao_first_use : Date.now() + (Math.round(Math.random() * 899999 + 100000) + '')))
		if (result.msg == 'success') {
			GM_setValue('haijiao_auto_updated_date', Date.now() + 18000000)
			const res = JSON.parse(result.responseText)
			if ((res.update_msg && res.is_update) || res.msg || res.notify_all) {
				let msg = ''
				if (res.notify_all) msg += '<p>-  ' + res.notify_all + '<p/>'
				if (res.msg) msg += '<p>-  ' + res.msg + '<p/>'
				if (res.is_update && res.update_msg) msg += res.update_msg
				const historyNotify = GM_getValue('haijiao_notify')
				if (check || !historyNotify || historyNotify.msg.replace(/id\=\d+/, '') != msg
					.replace(/id\=\d+/, '')) {
					util.showNotify({
						title: msg,
						success: () => {
							if (res) {
								superVip._CONFIG_.showNotify = false
							}
						}
					})
					util.showAndHidTips('wt_my_notify_haijiao')
				}
				
				if (msg && msg.replace(/\s*/g, "").length > 0){
					GM_setValue('haijiao_notify', {
						date: new Date().setHours(0, 0, 0, 0),
						msg
					})
				}
			}
			
			if (!res.is_update){
				return { errCode: 200, msg: '当前版本 ' + superVip._CONFIG_.version + ' 已经是最新版本'}
			}else{
				return { errCode: 0, msg: 'ok'}
			}
		}else{
			return { errCode: 100, msg: '检测更新失败'}
		}
	},

	showNotify: (item = {}) => {
		$("#wt-notify-box").removeClass('hid-notify-box')
		$("#wt-notify-box").addClass('show-notify-box')
		let version = superVip._CONFIG_.version
		const v = /当前脚本版本 (\d\.\d\.\d\.{0,1}\d{0,2})/.exec(item.title)
		if (v) item.title = item.title.replace(v[1], version)
		if (item.title) $('#wt-notify-box .content').html(item.title + (version ?
			'<div style="text-align: right;color: #ccc;font-size: 10px;margin-top: 10px;">v ' +
			version + '</div>' : ''))
		superVip._CONFIG_.showNotify = true
		$('#wt-notify-box a').on('click', (e) => {
			e.stopPropagation()
		})
		$('#wt-notify-box').on('click', () => {
			$("#wt-notify-box").removeClass('show-notify-box')
			$("#wt-notify-box").addClass('hid-notify-box')
			superVip._CONFIG_.showNotify = false
			if (item.success) item.success(true)
		})
	}
}

const superVip = (function() {
	const _CONFIG_ = {
		isMobile: navigator.userAgent.match(
			/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i),
		vipBoxId: 'wt-vip-jx-box' + Math.ceil(Math.random() * 100000000),
		version: '2.6.3',
		videoUrl: {},
		homePage: 'https://jsxl.pro',
		scripts: [
			// 	{
			// 	icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/watermark_logo.png',
			// 	desc: '各大短视频平台视频/图集免费去水印下载，禁止下载的也能下载'
			// },
			{
				icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/video_logo.png',
				desc: '各大视频平台VIP视频免费看',
				url: ''
			},
			{
				icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/91video_logo.png',
				desc: '免费看付费短视频，网站内容可能引起不适，请谨慎使用。',
				url: ''
			},
			{
				icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/haijiao.png',
				desc: '免费看付费视频及图集，网站内容可能引起不适，请谨慎使用。',
				url: ''
			},
			{
				icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo_transparent.png',
				desc: '前往及时行乐获取最新脚本链接',
				url: 'https://jsxl.pro/#/'
			}
		],
		downUtils: [
			{
				title: '在线下载1(适合电脑)',
				url: 'http://tools.bugscaner.com/m3u8.html',
				isAppend: false
			},
			{
				title: '在线下载2(适合电脑)',
				url: 'https://tools.thatwind.com/tool/m3u8downloader#m3u8=',
				isAppend: true
			},
			{
				title: '在线下载3(适合电脑)',
				url: 'https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html?source=',
				isAppend: true
			}
		]
	}
	class BaseConsumer {
		constructor(body) {
			this.parse = () => {
				setTimeout(() => {
					util.checkUpdate()
				}, 1500)
				this.interceptHttp()
				util.findTargetElement('body').then(container => {
					container.style.overflowY = 'auto !important';
					this.generateElement(container).then(
						container => this.bindEvent(container))
				})
			}
		}

		interceptHttp() {
			const originOpen = XMLHttpRequest.prototype.open;
			XMLHttpRequest.prototype.open = function(method, url) {
				this.ontimeout = function() {
					window.location.reload()
				}
				if (/\/api\/comment\/reply$/.test(url)) {
					this._scope_url = url
				}
				if (_CONFIG_.user && _CONFIG_.user.token) {
					if (/\/api\/banner\/banner_list/.test(url)) {
						this.abort()
					}
					if (/\/api\/topic\/hot\/topics\?/.test(url)) {
						const xhr = this;;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									res.data = util.formatTitle(res.data);
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');
									console.log(e);
									return result;
								}
							},
						});
					}
		
					if (/\/api\/topic\/search/.test(url)) {
						;
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									res.data = util.formatTitle(res.data);
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');;
									console.log(e);
									return result;
								}
							},
						});
					}
		
					if (/\/api\/topic\/\d+/.test(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									res.data = modifyData(res.data)
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									alert(e)
									console.log('发生异常! 解析失败!');;
									console.log(e);
									return result;
								}
							},
						});
					}
		
					if (/\/api\/attachment/.test(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									if (res.data) {
										const body = JSON.parse(decode(res.data, superVip))
										res.data = util.formatVideo(res.data);
									}
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');;
									console.log(e);
									return result;
								}
							},
						});
					}
		
					if (/\/api\/topic\/(node\/(topics|news)|idol_list)/.test(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									res.data = util.formatTitle(res.data)
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');
									console.log(e);
									return result;
								}
							},
						});
					}
					
					if (/\/api\/user\/(info\/(\d+))|current/.exec(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									const regRes = /\/api\/user\/(info\/(\d+))|current/
										.exec(
											url);
									const uid = sessionStorage.getItem('uid');
									if (regRes.length > 2 && (regRes[2] && regRes[2] != uid) && res.message.includes('禁')) {
										const user =  {
											'isFavorite': false,
											'likeCount': 12,
											'user': {
												'id': parseInt(regRes[2]),
												'nickname': '被封禁账号',
												'avatar': '0',
												'description': `该账号已被封禁`,
												'topicCount': 100,
												'videoCount': 0,
												'commentCount': 303,
												'fansCount': 57,
												'favoriteCount': 39,
												'status': 0,
												'sex': 1,
												'vip': 0,
												'vipExpiresTime': '0001-01-01 00:00:00',
												'certified': false,
												'certVideo': false,
												'certProfessor': false,
												'famous': false,
												'forbidden': false,
												'tags': null,
												'role': 0,
												'popularity': 10,
												'diamondConsume': 0,
												'title': {
													'id': 0,
													'name': '',
													'consume': 0,
													'consumeEnd': 0,
													'icon': "https://hjpic.hjpfe1.com/hjstore/system/node/usertitle2.png?ver=1654590917"
												},
												'friendStatus': false,
												'voiceStatus': false,
												'videoStatus': false,
												'voiceMoneyType': 0,
												'voiceAmount': 0,
												'videoMoneyType': 0,
												'videoAmount': 0,
												'depositMoney': 0
											}
										}
										res.isEncrypted = true;
										res.errorCode = 0;
										res.success = true;
										res.message = "";
										res.data = util.jencode(user, 'plus');
										util.showTips({
											title: '此博主已被海角官方封禁，是否前往盗版海角查看此封禁博主帖子?',
											doubt: true,
											success: (res)=>{
												if(res){
													window.open(location.href.replace(/:\/\/([^/]+)/.exec(location.href)[1],'hjedd.top'));
												}
											}
										})
									}
									if(regRes[2] == uid || location.href.includes('/user/myinfo')){
										res.data = util.lastingToken(res.data);
									}
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');
									console.log(e);
									return result;
								}
							},
						});
					}
		
					if (/api\/login\/signin/.test(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									if (res.success) {
										const username = document.querySelector(
											'input[placeholder="请输入用户名/邮箱"],input[placeholder="请输入用户名"]'
											).value
										const pwd = document.querySelector(
											'input[type="password"]').value
										if (username && pwd) {
											GM_setValue('haijiao_userpwd', {
												username,
												pwd
											})
										}
										util.findTargetElement(
												'.van-dialog__cancel,.el-button--small', 7)
											.then(res => {
												res.click()
											})
									} else {
										util.showTips({
											title: res.message
										})
									}
									res.data = util.lastingToken(res.data);
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');
									console.log(e);
									return result;
								}
							},
						});
					}
		
					if (/api\/video\/checkVideoCanPlay/.test(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									res.data = util.formatVideo(res.data);
									return JSON.stringify(res, `utf-8`);
								} catch (e) {
									console.log('发生异常! 解析失败!');
									console.log(e);
									return result;
								}
							},
						})
					}
		
					if (/api\/login\/signup/.test(url)) {
						const xhr = this;
						const getter = Object.getOwnPropertyDescriptor(
							XMLHttpRequest.prototype,
							"response"
						).get;
						Object.defineProperty(xhr, "responseText", {
							get: () => {
								let result = getter.call(xhr);
								try {
									let res = JSON.parse(result, `utf-8`);
									if (!res.success) {
										util.showTips({
											title: res.message
										})
									}
									return result
								} catch (e) {
									console.log('发生异常! 解析失败!');
									console.log(e);
									return result;
								}
							},
						})
					}
				}
				originOpen.call(this, method, url);
			};
		
			const oldSend = XMLHttpRequest.prototype.send;
			XMLHttpRequest.prototype.send = function(...args) {
				if (this._scope_url && args.length > 0) {
					try {
						args[0] = args[0].replace(args[0].match(/"content":"<p>(.+)<\/p>",/)[1], util
							.decoat(
								'JUU2JTg0JTlGJUU4JUIwJUEyJUU1JThEJTlBJUU0JUI4JUJCJUU1JTg4JTg2JUU0JUJBJUFCJUVGJUJDJThDJUU1JUE1JUIzJUU0JUI4JUJCJUU3JTlDJTlGJUU2JTk4JUFGJUU2JTlFJTgxJUU1JTkzJTgxJUU1JUIwJUE0JUU3JTg5JUE5JUVGJUJDJThDJUU2JTlDJTlCJUU1JThEJTlBJUU0JUI4JUJCJUU2JThDJTgxJUU3JUJCJUFEJUU2JTlCJUI0JUU2JTk2JUIw'
								))
					} catch (e) {
						console.log(e)
					}
				}
				return oldSend.call(this, ...args)
			};
		}

		generateElement(container) {
			GM_addStyle(`
				@font-face {
				  font-family: 'iconfont';  /* Project id 3913561 */
				  src: url('//at.alicdn.com/t/c/font_3913561_cpe13fwca8.woff2?t=1696210493672') format('woff2'),
				       url('//at.alicdn.com/t/c/font_3913561_cpe13fwca8.woff?t=1696210493672') format('woff'),
				       url('//at.alicdn.com/t/c/font_3913561_cpe13fwca8.ttf?t=1696210493672') format('truetype');
				}
				.iconfont {
				    font-family: "iconfont" !important;
				    font-size: 16px;
				    font-style: normal;
		            font-weight: 400 !important;
				    -webkit-font-smoothing: antialiased;
				    -moz-osx-font-smoothing: grayscale;
				}
				@keyframes showSetBox {
					0% {
						transform: translate(-50%,-50%) scale(0);
					}
					80% {
						transform: translate(-50%,-50%) scale(1.1);
					}
					100% {
						transform: translate(-50%,-50%) scale(1);
					}
				}
				@keyframes hidSetBox {
					0% {
						transform: translate(-50%,-50%) scale(1);
					}
					80% {
						transform: translate(-50%,-50%) scale(1.1);
					}
					100% {
						transform: translate(-50%,-50%) scale(0);
					}
				}
				@keyframes colorAnima {
					0%{
						background-color: #f0f0f0;
						color: #5d5d5d;
						transform: scale(1);
					}
					50%{
						transform: scale(1.1);
					}
					100%{
						background-color: #ff6022;;
						color: white;
						transform: scale(1);
					}
				}
				@keyframes showNotifyBox {
					0% {
						transform: translate(-50%,-100%) scale(0);
					}
					80% {
						transform: translate(-50%,35px) scale(1.1);
					}
					100% {
						transform: translate(-50%,35px) scale(1);
					}
				}
				@keyframes hidNotifyBox {
					0% {
						transform: translate(-50%,35px) scale(1.1);
					}
					80% {
						transform: translate(-50%,35px) scale(1);
					}
					100% {
						transform: translate(-50%,-100%) scale(0);
					}
				}
				@keyframes scale {
					0%{
						transform: scale(1);
					}
					50%{
						transform: scale(1.1);
					}
					100%{
						transform: scale(1);
					}
				}
				@keyframes circletokLeft {
				    0%,100% {
				        left: 0px;
				        width: 12px;
				        height: 12px;
				        z-index: 0;
				    }
				    25% {
				        height: 15px;
				        width: 15px;
				        z-index: 1;
				        left: 8px;
				        transform: scale(1)
				    }
				    50% {
				        width: 12px;
				        height: 12px;
				        left: 22px;
				    }
				    75% {
				        width: 10px;
				        height: 10px;
				        left: 8px;
				        transform: scale(1)
				    }
				}
				@keyframes circletokRight {
				    0%,100% {
				        top: 3px;
				        left: 22px;
				        width: 12px;
				        height: 12px;
				        z-index: 0
				    }
				    25% {
				        height: 15px;
				        width: 15px;
				        z-index: 1;
				        left: 24px;
				        transform: scale(1)
				    }
				    50% {
				        width: 12px;
				        height: 12px;
				        left: 0px;
				    }
				    75% {
				        width: 10px;
				        height: 10px;
				        left: 24px;
				        transform: scale(1)
				    }
				}
				.color-anima{
					animation: colorAnima .3s ease 1 forwards;
				}
				.btn-anima{
					animation: scale .3s ease 1 forwards;
				}
				.login-btn::after,.login-form-button::after{content:'(如点登录后没反应，请关闭脚本再试)';color:#e91e63;margin-left:5px;font-size: 10px;}
				.el-message-box,.van-toast,.el-message,.v-modal,.publicContainer,.containeradvertising,#home .btnbox,#home .addbox,.topbanmer,.bannerliststyle,.ishide,#jsxl-box,#jsxl-mask{display:none !important;z-index:-99999 !important;opacity: 0!important;width :0 !important;}
				#wt-resources-box{position: relative; border: 1px dashed #ec8181;background: #fff4f4;}
				.sell-btn{border:none !important;margin-top:20px;}
				.margin-left{ margin-left: 0 !important;}
				.show-set-box{ animation: showSetBox 0.3s ease 1 forwards;}
				.hid-set-box{ animation: hidSetBox 0.3s ease 1 forwards;}
				.show-notify-box{ animation: showNotifyBox 0.3s ease 1 forwards;}
				.hid-notify-box{ animation: hidNotifyBox 0.3s ease 1 forwards;}
				#wt-loading-box{display: none;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 100000;background-color: #0000004d;}
				#wt-loading-box .loading{position: absolute;width: 35px;height: 17px;top: 50%;left: 50%;transform: translate(-50%,-50%);}
				#wt-loading-box .loading::before,
				#wt-loading-box .loading::after{position: absolute;content: "";top: 3px;background-color: #ffe60f;width: 14px;height: 14px;border-radius: 20px;mix-blend-mode: multiply;animation: circletokLeft 1.2s linear infinite;}
				#wt-loading-box .loading::after{animation: circletokRight 1.2s linear infinite;background-color: #4de8f4;}
				#wt-left-show{ position: fixed;left: 20px;top: 50%;transform: translateY(-50%);z-index: 9999;transition: all 0.3s ease;}
				#wt-left-show i {color: #5f5b5b;font-size: 24px;color: #E91E63;text-shadow: #E91E63 2px 2px 12px;font-size: 25px;margin-left: -1px;}
				#wt-${_CONFIG_.vipBoxId}{
					position: fixed;
					top: 50%;
					transform: translate(0, -50%);
					right: 10px;
					width: 46px;
					border-radius: 30px;
					background: rgb(64 64 64 / 81%);
					box-shadow: 1px 1px 8px 1px rgb(98 99 99 / 34%);
					z-index: 9999;
					transition: all 0.3s ease;
				}
				#wt-${_CONFIG_.vipBoxId} .item{position: relative;height: 60px;}
				.tips-yuan::before{ position: absolute; content: '';top: 12px; right: 6px;width: 8px;height: 8px; border-radius: 10px; background-color: #5ef464;}
				.tips-yuan-err::before{ position: absolute; content: '';top: 12px; right: 6px;width: 8px;height: 8px; border-radius: 10px; background-color: #f83f32;}
				#wt-${_CONFIG_.vipBoxId} .item:not(:last-child)::after{position: absolute;bottom: 0;left: 22.5%;content: '';width: 55%;height: 2px;background-color: #fff;}
				#wt-${_CONFIG_.vipBoxId} .item .iconfont,#wt-${_CONFIG_.vipBoxId} .item img{position: absolute;top:50%;left:50%;transform: translate(-50%,-50%)}
				#wt-login-box .close,#wt-set-box .close,#wt-notify-box .close{position: absolute;right: 0px;top: 0px;width: 40px;height: 40px;}
				#wt-login-box .close::before,#wt-login-box .close::after,#wt-set-box .close::before,#wt-set-box .close::after,#wt-notify-box .close::before,#wt-notify-box .close::after{position: absolute;left: 50%;top: 50%;content: '';width: 12px;height: 2px;border-radius: 1px;background-color: #6a6a6a;transform: translate(-50%,-50%) rotate(45deg);visibility: visible;}
				#wt-login-box .close::after,#wt-set-box .close::after,#wt-notify-box .close::after{transform: translate(-50%,-50%) rotate(-45deg);}
				#wt-${_CONFIG_.vipBoxId} .absolute-center{ position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}
				#wt-${_CONFIG_.vipBoxId} #wt-my img{ width: 28px;height: 28px;border-radius: 30px;margin-left: 2px;transtion: all 0.3s ease;}
				#wt-${_CONFIG_.vipBoxId} #wt-my-set i {color: white;font-size: 24px;text-shadow: 2px 2px 14px #ffffff;font-family: 'iconfont';}
				#wt-${_CONFIG_.vipBoxId} #wt-my-down i {color: white;font-size: 24px;text-shadow: 2px 2px 15px #ffffff;font-family: 'iconfont';}
				#wt-${_CONFIG_.vipBoxId} #wt-my-notify i {color: white;font-size: 23px;padding: 10px 1px;text-shadow: 2px 2px 12px #ffffff;}
				#wt-${_CONFIG_.vipBoxId} #wt-hid-box i {color: white;font-size: 24px;text-shadow: 2px 2px 12px #ffffff;font-size: 25px;margin-left: -1px;}
				.wt-player-btn-box .player-btn{ position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);width: 20%}
				.wt-player-btn-box .tips{ position: absolute;bottom: 20px;left:50%;transform: translateX(-50%);color: #FFC107;width: 80%;text-align: center;font-size: 15px;font-weight: 500;}
				#wt-mask-box,#wt-maxindex-mask{display:none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; background-color: #00000057;}
				#wt-maxindex-mask{z-index: 90000;display:none;}
				#wt-set-box{ position:fixed; top:50%;left:50%; transform: translate(-50%,-50%) scale(0);overflow: hidden;background-color: white;box-shadow: 0 15px 30px rgba(0, 0, 0, .15);border-radius: 12px;z-index: 10010;padding: 10px 15px;padding-right: 5px;box-sizing: border-box;}
				#wt-set-box::before{content:'';position: absolute;width: 150px;height: 150px;border-radius: 100px;background-color: #2196F3;z-index: -1;opacity: 0.7;bottom: 0;transform: translate(-40%,58%);}
				#wt-set-box::after{content:'';position: absolute;width: 150px;height: 150px;border-radius: 100px;background-color: #FFC107;z-index: -1;opacity: 0.7;top: 0;right: 0;transform: translate(22%,-53%);}
				#wt-set-box .selected-box .selected{ background-color: #ff6022;color: white;}
				#wt-set-box .user-box-container{display: none;letter-spacing: 1px;}
				#wt-set-box .user-box-container .update{display: inline-block; padding: 0 10px; height: 28px;line-height: 28px;background-color: #f1f1f1;color: #545454; border-radius: 30px;border: none;font-size: 10px;float: right;margin-right: 5px;}
				#wt-set-box .info-box{display:flex;height: 50px;align-items: center;}
				#wt-set-box .info-box .avatar-box{position: relative;height: 36px;width: 36px;background-color: white;border-radius: 7px;box-shadow: rgb(166 166 166 / 20%) 0px 1px 20px 0px;}
				#wt-set-box .user-box .title{text-align: center;font-weight: 600;font-size: 16px;color: #3a3a3a;}
				#wt-set-box .user-box .desc{flex: 8;font-size: 10px;color: #5d5d5d;margin: 0 10px;}
				#wt-set-box .user-box .avatar{position: absolute; width: 36px;height:36px;border-radius: 30px;border-radius: 7px;font-size: 0;}
				#wt-set-box .user-box .user-info{display: flex;align-items: center;margin-bottom: 4px;background-color: #f1f1f1;border-radius: 11px;padding: 7px;}
				#wt-set-box .user-box .user-info .info{margin-left: 10px;}
				#wt-set-box .user-box .user-info .info .nickname{color: #676767;font-size: 12px;}
				#wt-set-box .user-box .user-info .info .username{color: #b9b9b9;font-size: 10px;margin-top: 2px;}
				#wt-set-box .user-box .user-info .logout{position: absolute;font-size: 0;right: 12px;}
				#wt-set-box .user-box .user-info .logout button{padding: 0 10px;height: 28px;background-color: #615b5b;border-radius: 30px;color: white;border: none;font-size: 10px;}
				#wt-tips-box,#wt-download-box{ position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);overflow: hidden;width: 240px;min-height:130px;background-color: white;border-radius:12px;z-index: 95000;padding:10px 15px;}
				#wt-tips-box,#wt-download-box .tips{ font-size: 10px;margin-top: 30px;color: #E91E63;letter-spacing: 1px;}
				#wt-tips-box .title{font-size: 16px;text-align: center;font-weight: 600;}
				#wt-tips-box .content{text-align: center;margin: 14px 0;font-size: 12px;color: #2a2a2a;font-weight: 500;word-break: break-word;}
				#wt-tips-box .content p{color: #ff4757;text-align: left;}
				#wt-tips-box .btn-box{display:flex;justify-content: space-around;}
				#wt-tips-box .btn-box button{min-width: 60px;height: 28px;background-color: #ec407a;border-radius: 30px;color: white;border: none;font-size: 12px;}
				#wt-tips-box .btn-box .cancel{display: none;background-color: #eee;color:#2a2a2a}
				#wt-tips-box .logo{position: absolute;top: 9%;left: 1%; color: #dbdbdb; font-size: 11px;transform: rotate(-15deg);text-align: center;}
				#wt-notify-box {position: fixed;top: 2%;left: 50%;transform:translate(-50%,-100%) scale(0);overflow: hidden;width: 80%;min-height: 75px;letter-spacing: 1px;background-color: white;color:#2a2a2a;border-radius: 15px;box-shadow: 0 15px 30px rgba(0, 0, 0, .15);z-index: 95000;}
				#wt-notify-box::after{ content:'';position: absolute;width: 250px;height: 250px;border-radius: 200px;background-color: #03A9F4;z-index: -1;opacity: 0.7;bottom: 0;left: 0;transform: translate(-50%,85%);}
				#wt-notify-box .title{ text-align: center;height: 35px; line-height: 35px;font-size: 15px;font-weight: 600; color: #E91E63;}
				#wt-notify-box .content{ color: #3a3a3a;padding: 10px 15px;font-size: 12px;}
				#wt-notify-box .content a{color: #1E88E5;text-decoration: underline;}
				#wt-notify-box .content p{margin-bottom: 5px;}
				.wt-player-btn-box{ position:absolute;top:0;left:0;right:0;bottom:0;z-index: 9998;background-color: #0000004d;}
				#wt-video-container{display: none; position:fixed;top: 0;left: 0;right: 0;bottom: 0; z-index: 9998;background-color: black;}
				#wt-video-container .wt-video{ position:absolute;top:50%;width:100%;transform: translateY(-50%);height: 240px; z-index: 9999;}
				#wt-video-container .wt-video video{width:100%;height: 100%;}
				.dplayer-controller{bottom: 30px !important;}
				.main-player{height: 300px;}
				.dplayer.dplayer-hide-controller .dplayer-controller{ opacity: 0 !important;transform: translateY(200%) !important;}
				.wt-close-btn{ font-size: 15px;position: absolute;top: 40px;left: 25px;color: white;}
				#wt-download-box{ z-index: 10010;}
				#wt-download-box .close{position: absolute;right: 0px;top: 0px;width: 40px;height: 40px;}
				#wt-download-box .close::before,#wt-download-box .close::after{position: absolute;left: 50%;top: 50%;content: '';width: 14px;height: 2px;border-radius: 1px;background-color: #adadad;transform: translate(-50%,-50%) rotate(45deg);}
				#wt-download-box .close::after,#wt-download-box .close::after{transform: translate(-50%,-50%) rotate(-45deg);}
				#wt-download-box::before{content:'';position: absolute;width: 150px;height: 150px;border-radius: 100px;background-color: #e91e63;z-index: -1;opacity: 0.7;top: 0;left: 0;transform: translate(-38%,-40%);}
				#wt-download-box::after{content:'';position: absolute;width: 150px;height: 150px;border-radius: 100px;background-color: #FFC107;z-index: -1;opacity: 0.7;bottom: 0;right: 0;transform: translate(62%,30%);}
				#wt-download-box ul li{ height: 38px;line-height: 38px;font-size: 11px;text-align: center;color:#909090;font-weight: 500;background-color: white;box-shadow: rgb(166 166 166 / 20%) 0px 1px 5px 1px;margin: 18px 30px;border-radius: 40px;}
				`)
			if (_CONFIG_.isMobile) {
				GM_addStyle(`
		            #wt-set-box {width:72%;}
		        `);
			}
			let scripts = '';
			_CONFIG_.scripts.forEach((item, index) => {
				scripts += `
					<div class="info-box" data-index="${index}">
						<div class="avatar-box">
							<img class="avatar" src="${item.icon}"/>
						</div>
						<div class="desc">
							<text>${item.desc}</text>
						</div>
					</div>
				`;
			})
			$(container).append(`
		        <div id="wt-${_CONFIG_.vipBoxId}">
				    <div id="wt-my" class="item wt_my_haijiao">
						<img src="https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/null_square.png"></img>
				    </div>
				    <div id="wt-my-set" class="item wt_player_haijiao">
					    <i class="iconfont">&#xec05;</i>
				    </div>
					<div id="wt-my-down" class="item wt_my_down_haijiao">
					    <i class="iconfont">&#xec09;</i>
					</div>
					<div id="wt-my-notify" class="item wt_my_notify_haijiao" style="padding: 0 11px;">
					    <i class="iconfont">&#xec08;</i>
					</div>
				    <div id="wt-hid-box" class="item">
					    <i class="iconfont">&#xec06;</i>
				    </div>
			    </div>
			    <div id="wt-left-show" style="transform: translate(-60px,-50%);padding: 10px;">
					<i class="iconfont">&#xe704;</i>
			    </div>
				<div id="wt-mask-box"></div>
				<div id="wt-set-box">
					<div class="close"></div>
					<div class="line-box" style="display:none">
					</div>
					<div class="user-box-container">
						<div class="user-box">
							<div class="title" style="margin-bottom: 10px">及时行乐工具库</div>
							<div class="user-info">
								<div class="avatar" style="position: relative;">
									<img src="https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/null_square.png" style="width: 100%;height: 100%;border-radius: 8px;"></img>
								</div>
								<div class="info">
									<div class="nickname">请登录</div>
									<div class="username">xxxxxxxxxx</div>
								</div>
								<div class="logout">
									<button>退出登录</button>
								</div>
							</div>
							${scripts}
							<boutton class="update">检查更新</boutton>
						</div>
					</div>
				</div>
				<div id="wt-loading-box">
					<div class="loading"></div>
				</div>
				<div id="wt-maxindex-mask"></div>
				<div id="wt-tips-box">
					<div class="title">提示</div>
					<div class="content"></div>
					<div class="btn-box">
						<button class='cancel'>取消</button>
						<button class='submit'>确定</button>
					</div>
					<div class="logo">
						<p>@https://jsxl.pro</p>
						<p>v ${superVip._CONFIG_.version}</p>
					</div>
				</div>
				<div id="wt-notify-box">
					<div class="close"></div>
					<div class="title">通知</div>
					<div class="content"></div>
				</div>
				<div id="wt-video-container">
					<div class="wt-close-btn">
						<i class="van-icon van-icon-close"></i>
						<span style="margin-left: 5px;">退出播放</span>
					</div>
					<div class="wt-video">
						<video id="wt-video" controls></video>
					</div>
				</div>
		    `)
			if (_CONFIG_.user && _CONFIG_.user.avatar) {
				util.logined()
			}
			return new Promise((resolve, reject) => resolve(container));
		}

		bindEvent(container) {
			const vipBox = $(`#wt-${_CONFIG_.vipBoxId}`)
			if (GM_getValue('haijiao_hid_controller', null)) {
				vipBox.css("transform", "translate(125%, -50%)")
				$('#wt-left-show').css("transform", "translate(0, -50%)")
			}

			vipBox.find("#wt-my").on("click", () => {
				if (_CONFIG_.user) {
					$('#wt-mask-box').css('display', 'block')
					$("#wt-set-box .user-box-container").css('display', 'block')
					$("#wt-set-box").removeClass('hid-set-box')
					$("#wt-set-box").addClass('show-set-box')
					$('#wt-set-box .user-box-container .nickname').html(_CONFIG_.user.nickname)
				} else {
					util.addLogin()
					$('#wt-login-mask').css('display','block')
					$("#wt-login-box").removeClass('hid-set-box')
					$("#wt-login-box").addClass('show-set-box')
					const jsxl_login_pwd = GM_getValue('jsxl_login_pwd','')
					if(jsxl_login_pwd){
						const username = jsxl_login_pwd.substring(0,jsxl_login_pwd.indexOf('+'));
						let pwd = jsxl_login_pwd.substring(jsxl_login_pwd.indexOf('+') + 1, jsxl_login_pwd.length).substring(0,8);
						$("#wt-login-box input")[0].value = username;
						$("#wt-login-box input")[1].value = pwd;
					}
				}
			})

			vipBox.find("#wt-my-set").on("click", async () => {
				if (!_CONFIG_.user) {
					$("#wt-my").click()
					return
				}
				if (!_CONFIG_.videoUrl.url) {
					$('#wt-loading-box').css('display', 'block')
					for (let i = 0; i < 3; i++) {
						await util.sleep(1000)
						if (_CONFIG_.videoUrl.url) {
							$('#wt-loading-box').css('display', 'none')
							break
						}
					}
					$('#wt-loading-box').css('display', 'none')
				}

				if (_CONFIG_.videoUrl.url) {
					$('#wt-video-container').css('display', 'block')
					$("#wt-hid-box").click()
					if (_CONFIG_.videoUrl.type != 0) {
						if (!_CONFIG_.videoUrl.url.startsWith('blob:http')) {
							util.showTips({
								title: location.href + '</br>视频解析中请勿操作。。。</br>如解析时长大于1分钟请考虑开梯子再试</br>及时行乐脚本唯一网站https://jsxl.pro',
								hidConfirm: true
							})
							await util.sleep(500)
						}
						_CONFIG_.videoUrl.url = await get_m3u8_url_haijiao()
						if (!_CONFIG_.videoUrl.url || !_CONFIG_.videoUrl.url.includes('http')) {
							if (_CONFIG_.videoUrl.url.includes('通知:') || _CONFIG_.videoUrl.url
								.includes('最新版本')) {
								util.showTips({
									title: _CONFIG_.videoUrl.url
								})
							} else {
								util.showTips({
									title: _CONFIG_.videoUrl.url + '</br>' + location
										.href + '</br>抱歉，解析失败，请刷新页面再尝试，或尝试重新登录海角账号，或安卓用via浏览器，苹果用focus浏览器再，或者关掉VPN再试，如有问题或需梯子推荐请联系发电网站https://jsxl.pro中售后联系方式'
								})
							}
							return;
						}
						$('#wt-tips-box .btn-box .submit').click()
					}
					if (_CONFIG_.isMobile && _CONFIG_.isMobile[0] == 'iPhone') {
						$('.wt-video').empty()
						$('.wt-video').append(`
							<video controls width="100%" height="100%">
							    <source src="${_CONFIG_.videoUrl.url}" type="application/x-mpegURL">
							</video>
						`)
						// _CONFIG_.hls_dp = new DPlayer({
						// 	container: document.querySelector(".wt-video"),
						// 	screenshot: true,
						// 	video: {
						// 		url: _CONFIG_.videoUrl.url
						// 	}
						// })
						// _CONFIG_.hls_dp.play()
					} else {
						const video = document.querySelector('.wt-video #wt-video')
						_CONFIG_.hls_dp = new Hls()
						_CONFIG_.hls_dp.loadSource(_CONFIG_.videoUrl.url)
						_CONFIG_.hls_dp.attachMedia(video)
						_CONFIG_.hls_dp.on(Hls.Events.MANIFEST_PARSED, function() {
							video.play()
						})
					}
				}
				if (!_CONFIG_.videoUrl.url) {
					if(_CONFIG_.videoUrl.type == 0){
						util.showTips({
							title: location.href +
								'</br>此帖子似乎是免费视频，请登录海角账号后使用海角自带的进行播放'
						})
					}else{
						util.showTips({
							title: location.href +
								'</br>抱歉未检测到帖子视频，请关掉其它脚本再试，或苹果用Focus浏览器，安卓用Via浏览器再试'
						})
					}
				}
			})

			$('#wt-video-container div').on('click', function(e) {
				e.stopPropagation()
			})

			$('.wt-close-btn').on('click', function() {
				$('#wt-video-container').css('display', 'none')
				if (_CONFIG_.hls_dp) _CONFIG_.hls_dp.destroy()
				$("#wt-left-show").click();
			})

			vipBox.find("#wt-my-down").on("click", () => {
				if (!_CONFIG_.user) {
					$("#wt-my").click()
					return
				}
				if(_CONFIG_.user.login_type != 'username_pwd'){
					util.showTips({
						title: '抱歉，登录码登入没有下载权限，请在jsxl.pro网站发电后使用账号+密码登入'
					})
					return;
				}
				if(_CONFIG_.videoUrl.downloadUrlSign){
					util.showDownLoadWindow();
					return;
				}
				if (_CONFIG_.videoUrl.url) {
					if(_CONFIG_.user && _CONFIG_.user.stopDownload || (_CONFIG_.user.role.useDownloadNum == _CONFIG_.user.role.maxDownloadNum) ){
						util.showTips({
							title: '抱歉，今日下载次数' + _CONFIG_.user.role.maxDownloadNum + '次已经用完，请明日再下载</br>(该jsxl账号其它登录码共享次数)'
						})
						return;
					}
					if (_CONFIG_.videoUrl.type == 0 || (_CONFIG_.videoUrl.url.endsWith('.m3u8') && !
							_CONFIG_.videoUrl.url.includes('preview')) || _CONFIG_.videoUrl
						.downloadUrl) {
						util.showTips({
							title: '为了脚本的稳定现已日限下载</br>(当前账号日限' + _CONFIG_.user.role.maxDownloadNum +'次，已使用' + _CONFIG_.user.role.useDownloadNum +'次，永久会员比非永久次数多)，</br>您确定要消耗一次次数来获取视频链接吗(如失败不计数)?',
							doubt: true,
							success: async (res) => {
								if (res) {
									try {
										$('#wt-loading-box').css('display', 'block')
										await util.sleep(300);
										const res = await util.asyncHttp(
											'https://api.jsxl.pro/openDownload' + (Math.floor(Math.random() * 2) + 1) + '00/haijioaSignDownload?downloadUrl=' +
											(_CONFIG_.videoUrl.downloadUrl ?
												_CONFIG_.videoUrl.downloadUrl :
												_CONFIG_.videoUrl.url) +
											'&isDownload=' + (_CONFIG_.videoUrl
												.downloadUrl ? 1 : 0) +
											'&videoType=' + _CONFIG_.videoUrl.type +
											'&hjedd=' + (_CONFIG_.hjedd ? 1 : 0) +
											'&origin=' + location.origin + '&app=海角社区')
										$('#wt-loading-box').css('display', 'none')
										if (res.msg == 'success') {
											const result = JSON.parse(res.responseText)
											if (result.errCode != 0) {
												throw new Error(result.msg)
											}
											if(result.newToken) _CONFIG_.user.token = result.newToken;
											if(result.newRole && result.newRole.expired_date) _CONFIG_.user.role.expired_date = result.newRole.expired_date;
											_CONFIG_.user.role.useDownloadNum = result.useDownloadNum
											_CONFIG_.videoUrl.downloadUrlSign = result.data
											util.showDownLoadWindow(true, result.msg);
											GM_setValue('jsxl_user', _CONFIG_.user);
										} else {
											$('#wt-loading-box').css('display', 'none')
											util.showTips({
												title: _CONFIG_.videoUrl.url +
													'</br>' + location.href +
													'</br>' + res.msg
											})
										}
									} catch (e) {
										console.log(e)
										$('#wt-loading-box').css('display', 'none')
										util.showTips({
											title: e.message +
												'</br>' + location.href +
												'</br>获取下载链接失败'
										})
										if(e.message.includes('明日再下载')){
											_CONFIG_.user.stopDownload = true
											_CONFIG_.user.role.useDownloadNum = _CONFIG_.user.role.maxDownloadNum
											GM_setValue('jsxl_user', _CONFIG_.user);
										}
									}
								}
							}
						})
						return;
					}
				}

				if (_CONFIG_.videoUrl.url && _CONFIG_.videoUrl.type == 0) {
					_CONFIG_.videoUrl.url = location.origin + _CONFIG_.videoUrl.url + (_CONFIG_
						.videoUrl.url.includes('?') ? '&' : '?') + 'type=.m3u8';
				}
				if ((_CONFIG_.videoUrl.url && _CONFIG_.videoUrl.url.startsWith('http')) && !_CONFIG_.videoUrl.url.includes('preview') && _CONFIG_.videoUrl.url.includes('.m3u') || _CONFIG_
					.videoUrl.downloadUrl) {
					util.showDownLoadWindow();
				} else {
					util.showTips({
						title: _CONFIG_.videoUrl.url + '</br>' + location.href +
							'</br>需要播放按钮有小绿点或暂不支持下载，请等待修复'
					})
				}
			})

			vipBox.find("#wt-hid-box").on("click", () => {
				vipBox.css("transform", "translate(125%, -50%)");
				$('#wt-left-show').css("transform", "translate(0, -50%)")
				GM_setValue('haijiao_hid_controller', 1)
			})

			$('#wt-left-show').on('click', () => {
				$('#wt-left-show').css("transform", "translate(-60px, -50%)");
				vipBox.css("transform", "translate(0, -50%)")
				GM_setValue('haijiao_hid_controller', '')
			})

			$('#wt-mask-box').on('click', () => {
				$('#wt-mask-box').css('display', 'none')
				$("#wt-set-box").removeClass('show-set-box');
				$("#wt-set-box").addClass('hid-set-box')
				$("#wt-download-box").removeClass('show-set-box');
				$("#wt-download-box").addClass('hid-set-box')
				setTimeout(() => {
					$("#wt-set-box .line-box").css('display', 'none');
					$("#wt-set-box .user-box-container").css('display', 'none')
				}, 500)
			})

			$('#wt-set-box .user-box-container .user-box .info-box').on('click', function(e) {
				let index = ''
				try {
					index = Number(e.currentTarget.attributes['data-index'].value)
				} catch (e) {}
				if (_CONFIG_.scripts[index].msg) {
					util.showTips({
						title: _CONFIG_.scripts[index].msg
					})
					return
				};
				if (index != (_CONFIG_.scripts.length - 1)) {
					util.showTips({
						title: '请在网站https://jsxl.pro中获取'
					})
				} else {
					window.location.href = _CONFIG_.scripts[index].url
				}
			})
			
			$(".user-box-container .update").on("click", async() => {
				$('#wt-loading-box').css('display', 'block')
				await util.sleep(300);
				const res = await util.checkUpdate(true)
				$('#wt-loading-box').css('display', 'none')
				if (res.errCode != 0) {
					util.showTips({ title: res.msg})
				}
			})

			$("#wt-set-box .close").on("click", () => {
				$('#wt-mask-box').click()
			})

			vipBox.find("#wt-my-notify").on("click", () => {
				if (_CONFIG_.showNotify) {
					$('#wt-notify-box').click()
				} else {
					const notify = GM_getValue('haijiao_notify', '');
					if (notify && (notify.date == new Date().setHours(0, 0, 0, 0))) {
						util.showNotify({
							title: notify.msg
						})
					} else {
						util.showNotify({
							title: '还没有通知信息'
						})
					};
					util.showAndHidTips('wt_my_notify_haijiao', 'set', false)
				}
			})

			$("#wt-set-box .user-box .user-info").on('click', function() {
				util.showTips({
					title: '后面会做优化显示权限等信息'
				})
			})

			$('#wt-set-box .logout').on('click', function(e) {
				util.showTips({
					title: '您确定要退出登录吗?',
					doubt: true,
					success: (res) => {
						if (res) {
							util.logouted()
							$('#wt-mask-box').click()
						}
					}
				})
				e.stopPropagation()
			})

			if (!_CONFIG_.user) {
				util.addLogin()
				util.findTargetElement('#wt-my').then(res => {
					setTimeout(() => {
						res.click()
					}, 2500)
				})
			}
		}
	}

	return {
		start: () => {
			const wt_haijiao_first_use = GM_getValue('wt_haijiao_first_use', '')
			if (!wt_haijiao_first_use) GM_setValue('wt_haijiao_first_use', Date.now() + (Math.round(Math
				.random() * 899999 + 100000) + ''))
			_CONFIG_.user = GM_getValue('jsxl_user', '')
			if (_CONFIG_.user) {
				if (_CONFIG_.user.login_date && (_CONFIG_.user.login_date != new Date().setHours(0, 0, 0,
						0))) {
					_CONFIG_.user = ''
					GM_setValue('jsxl_user', '')
				}
			}
			new BaseConsumer().parse()
		},
		_CONFIG_
	}
})();

(function() {
	if(unsafeWindow.wt_haijiao_script){
		return;
	}
	unsafeWindow.wt_haijiao_script = true;
	
	if (location.href.includes('tools.bugscaner.com')) {
		util.findTargetElement('.input-group input').then(res => {
			const url = location.search.replace('?m3u8=', '').replace(/\s*/g, "")
			if (url && url.startsWith('http')) {
				$(res).val(url)
			}
		})
		return
	}
	if (location.href.includes('tools.thatwind.com')) {
		GM_addStyle(`.top-ad{display: none !important;}`)
		util.findTargetElement('.bx--text-input__field-outer-wrapper input', 10).then(res => {
			$(res).val(Date.now())
			res.dispatchEvent(new Event("input"))
		})
		return
	}
	if (location.href.includes('blog.luckly-mjw.cn')) {
		GM_addStyle(`
			#m-app a,.m-p-temp-url,.m-p-cross,.m-p-input-container div:nth-of-type(1){display: none !important;}
			.m-p-input-container{ display: block;}
			.m-p-input-container input{ width: 100%;font-size: 12px;margin-bottom: 5px;}
			.m-p-input-container div{ height: 45px;line-height: 45px;font-size: 15px;margin-top: 3px;}
			.m-p-stream{line-height: normal;font-size: 12px;}
		`)
		return
	}

	const oldadd = EventTarget.prototype.addEventListener
	EventTarget.prototype.addEventListener = async function(...args) {
		if (args[0] == 'click') {
			if (this.className == 'login-btn' || this.className ==
				'el-button login-form-button el-button--primary') {
				const user = GM_getValue('haijiao_userpwd', '')
				if (user) {
					const e = new Event("input")
					util.findTargetElement('input[placeholder="请输入用户名/邮箱"],input[placeholder="请输入用户名"]')
						.then(res => {
							$(res).val(user.username)
							res.dispatchEvent(e)
							util.findTargetElement('input[type="password"]').then(res => {
								$(res).val(user.pwd)
								res.dispatchEvent(e)
							})
						})
				}
			}
		}
		oldadd.call(this, ...args)
	}
	superVip.start();
})();
