'use strict';
/**
 * body width
 */
var bodyWidth = document.body.clientWidth;

/**
 * slider
 */
var progress = document.querySelector('.example__progress');
if (bodyWidth < 768) {
    (function () {
        /**
         *  burger button
         */
        var burgerHid = document.querySelector('.menu-icon');
        /**
         * nav ul list 
         */
        var mainNavList = document.querySelector('.main-nav__list');
        /**
         * define the height of the menu.
         */
        var mainNavListHeight = mainNavList.clientHeight;
        /**
         * show burger button if loaded with js.
         */
        function showBurger() {
            burgerHid.classList.remove('menu-hid')
        }
        showBurger();
        /**
         * hide the menu.
         */
        function hideMenu() {
            mainNavList.style.marginTop = - mainNavListHeight + 'px'
        }
        hideMenu();

        /**
         * toggle menu
         */
        function toggleMenu() {
            var clk = 0; //count clicks
            burgerHid.addEventListener('click',
                function (evt) {
                    evt.preventDefault();
                    this.classList.toggle('menu-icon__activ');
                    mainNavList.style.transition = "0.3s";
                    if (clk % 2 !== 0) {
                        mainNavList.style.marginTop = - mainNavListHeight + 'px'

                    } else {
                        mainNavList.style.marginTop = 0
                    }
                    clk++;
                }
            )
        }
        toggleMenu()
    })()
};

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, (function () {
    function e(e) { var t = !0, n = !1, o = null, d = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 }; function i(e) { return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList) } function s(e) { e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", "")) } function u(e) { t = !1 } function a() { document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c) } function c(e) { e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c)) } document.addEventListener("keydown", (function (n) { n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && s(e.activeElement), t = !0) }), !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", (function (e) { "hidden" === document.visibilityState && (n && (t = !0), a()) }), !0), a(), e.addEventListener("focus", (function (e) { var n, o, u; i(e.target) && (t || (n = e.target, o = n.type, "INPUT" === (u = n.tagName) && d[o] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && s(e.target) }), !0), e.addEventListener("blur", (function (e) { var t; i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(o), o = window.setTimeout((function () { n = !1 }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added"))) }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", "")) } if ("undefined" != typeof window && "undefined" != typeof document) {
        var t; window.applyFocusVisiblePolyfill = e; try { t = new CustomEvent("focus-visible-polyfill-ready") } catch (e) { (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {}) } window.dispatchEvent(t)
    } "undefined" != typeof document && e(document)
}));
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else c=document.createElement("a"),c.href=a;return c.protocol.replace(/:/g,"")+c.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
"true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,q=0;m();var f=document.getElementsByTagName("use");for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect()}catch(w){g=!1}var h=(a=f[c].getAttribute("href")||f[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[c].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var b=
h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute("href")&&f[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),b.length&&(a=e[b],!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&(h=u(b),void 0!==h&&(a=new h,e[b]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",b),a.send(),q+=1)))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?e[b]=!0:e[b].onload&&(e[b].abort(),
delete e[b].onload,e[b]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();

if (progress) {
    (function () {
        /**
         * buttons and range
         */
        var btnProgress = progress.querySelectorAll('.example__progress-button');
        var btnProgressToggle = progress.querySelector('.example__progress-toggle');
        var progressRange = progress.querySelector('.example__range');
        /**
         * container with pictures before and after
         */
        var progressWrap = progress.querySelector('.example__progress-wrap');
        /**
         * container before
         */
        var progressImgBefore = progress.querySelector('.example__progress-img-before');
        /**
         * container after
         */
        var progressImgAfter = progress.querySelector('.example__progress-img-after');
        /**
         * pointer
         */
        var pointer = progress.querySelector('.example__progress-toggle div');

        if (bodyWidth < 768) {
            function toggleImg() {
                btnProgress[0].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressWrap.classList.remove('example__progress-wrap_after');
                        pointer.classList.remove('pointer_after')
                    }
                )

                btnProgress[1].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressWrap.classList.add('example__progress-wrap_after');
                        pointer.classList.add('pointer_after')
                    }
                )

                btnProgressToggle.addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressWrap.classList.toggle('example__progress-wrap_after');
                        pointer.classList.toggle('pointer_after')
                    }
                )

            } toggleImg()
        } else {
            function resizeImg() {
                btnProgress[0].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressRange.value = 0;
                        progressImgBefore.style.width = 100 + '%';
                        progressImgAfter.style.width = 0;
                    }
                )

                btnProgress[1].addEventListener('click',
                    function (evt) {
                        evt.preventDefault();
                        progressRange.value = 100;
                        progressImgBefore.style.width = 0;
                        progressImgAfter.style.width = 100 + '%';
                    }
                )
                /**
                 * for ie
                 */
                progressRange.addEventListener('change',
                    function (evt) {
                        evt.preventDefault();
                        progressImgBefore.style.width = (100 - progressRange.value) + '%';
                        progressImgAfter.style.width = progressRange.value + '%';
                    }

                )
                /**
                 * other browsers
                 */
                progressRange.addEventListener('input',
                    function (evt) {
                        evt.preventDefault();
                        progressImgBefore.style.width = (100 - progressRange.value) + '%';
                        progressImgAfter.style.width = progressRange.value + '%';
                    }

                )
            }
            resizeImg()
        }
    })()
}