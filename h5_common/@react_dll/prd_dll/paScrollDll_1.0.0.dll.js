var paScrollDll=function(t){function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/",i(i.s=601)}({601:function(t,i,e){t.exports=e},602:function(t,i,e){"use strict";function s(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function o(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var r=e[o];for(var n in r)t[n]=r[n]}return t}function r(t){return void 0===t||null===t}function n(t){return!1!==k&&("standard"===k?"transitionEnd"===t?"transitionend":t:k+t.charAt(0).toUpperCase()+t.substr(1))}function h(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function a(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function l(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}function c(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function p(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function u(t,i){var e=document.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)}function d(t){function i(){r=document.createEvent("Event"),r.initEvent(n,h,a),o(r,s)}var e=void 0;"mouseup"===t.type||"mousecancel"===t.type?e=t:"touchend"!==t.type&&"touchcancel"!==t.type||(e=t.changedTouches[0]);var s={};e&&(s.screenX=e.screenX||0,s.screenY=e.screenY||0,s.clientX=e.clientX||0,s.clientY=e.clientY||0);var r=void 0,n="click",h=!0,a=!0;if("undefined"!=typeof MouseEvent)try{r=new MouseEvent(n,o({bubbles:h,cancelable:a},s))}catch(t){i()}else i();r.forwardedTouchEvent=!0,r._constructed=!0,t.target.dispatchEvent(r)}function f(t,i){i.firstChild?m(t,i.firstChild):i.appendChild(t)}function m(t,i){i.parentNode.insertBefore(t,i)}function g(t,i){t.removeChild(i)}function v(t,i,e,s,o,r){var n=t-i,h=Math.abs(n)/e,a=r.deceleration,l=r.itemHeight,c=r.swipeBounceTime,p=r.wheel,u=r.swipeTime,d=u,f=p?4:15,m=t+h/a*(n<0?-1:1);return p&&l&&(m=Math.round(m/l)*l),m<s?(m=o?Math.max(s-o/4,s-o/f*h):s,d=c):m>0&&(m=o?Math.min(o/4,o/f*h):0,d=c),{destination:Math.round(m),duration:d}}function y(){}function w(t){console.error("[BScroll warn]: "+t)}function x(t,i){if(!t)throw new Error("[BScroll] "+i)}function T(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function b(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1,this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.x=0,this.y=0,i.interactive&&this._addDOMEvents()}function S(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||w("can not resolve the wrapper dom"),this.scroller=this.wrapper.children[0],this.scroller||w("the wrapper need at least one child element to be scroller"),this.scrollerStyle=this.scroller.style,this._init(t,i)}Object.defineProperty(i,"__esModule",{value:!0});/*!
 * better-normal-scroll v1.8.4
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var _=function(){function t(t,i){var e=[],s=!0,o=!1,r=void 0;try{for(var n,h=t[Symbol.iterator]();!(s=(n=h.next()).done)&&(e.push(n.value),!i||e.length!==i);s=!0);}catch(t){o=!0,r=t}finally{try{!s&&h.return&&h.return()}finally{if(o)throw r}}return e}return function(i,e){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),M=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)},P="undefined"!=typeof window,X=P&&navigator.userAgent.toLowerCase(),Y=X&&/wechatdevtools/.test(X),E=X&&X.indexOf("android")>0,D=P&&document.createElement("div").style,k=function(){if(!P)return!1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==D[t[i]])return i;return!1}(),W=n("transform"),O=P&&n("perspective")in D,H=P&&("ontouchstart"in window||Y),L=!1!==W,z=P&&n("transition")in D,C={transform:W,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionProperty:n("transitionProperty"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin"),transitionEnd:n("transitionEnd")},A=1,I={touchstart:A,touchmove:A,touchend:A,mousedown:2,mousemove:2,mouseup:2},F={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:800,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:H,disableTouch:!H,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1,mouseWheel:!1},R={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}},B=function(){return P?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)}:y}(),N=function(){return P?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}:y}(),U=1,V=-1,j=1,q=-1;b.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t)}},b.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},b.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[C.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},b.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[C.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var r=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=r+"px",s=this.maxPosX+this.indicatorWidth-r}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[C.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},b.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[C.transitionDuration]=t+"ms"},b.prototype.transitionTimingFunction=function(t){this.indicatorStyle[C.transitionTimingFunction]=t},b.prototype.destroy=function(){this._removeDOMEvents(),this.wrapper.parentNode.removeChild(this.wrapper)},b.prototype._start=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=s(),this._handleMoveEvents(h),this.scroller.trigger("beforeScrollStart")},b.prototype._move=function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.moved||this.scroller.trigger("scrollStart"),this.moved=!0;var e=i.pageX-this.lastPointX;this.lastPointX=i.pageX;var s=i.pageY-this.lastPointY;this.lastPointY=i.pageY;var o=this.x+e,r=this.y+s;this._pos(o,r)},b.prototype._end=function(t){if(this.initiated){this.initiated=!1,t.preventDefault(),t.stopPropagation(),this._handleMoveEvents(a);var i=this.scroller.options.snap;if(i){var e=i.speed,s=i.easing,o=void 0===s?R.bounce:s,r=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),n=e||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-r.x),1e3),Math.min(Math.abs(this.scroller.y-r.y),1e3)),300);this.scroller.x===r.x&&this.scroller.y===r.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=r,this.scroller.scrollTo(r.x,r.y,n,o))}this.moved&&this.scroller.trigger("scrollEnd",{x:this.scroller.x,y:this.scroller.y})}},b.prototype._pos=function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=Math.round(t/this.sizeRatioX),i=Math.round(i/this.sizeRatioY),this.scroller.scrollTo(t,i),this.scroller.trigger("scroll",{x:this.scroller.x,y:this.scroller.y})},b.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}},b.prototype._addDOMEvents=function(){var t=h;this._handleDOMEvents(t)},b.prototype._removeDOMEvents=function(){var t=a;this._handleDOMEvents(t),this._handleMoveEvents(t)},b.prototype._handleMoveEvents=function(t){this.scroller.options.disableTouch||t(window,"touchmove",this),this.scroller.options.disableMouse||t(window,"mousemove",this)},b.prototype._handleDOMEvents=function(t){this.scroller.options.disableTouch||(t(this.indicator,"touchstart",this),t(window,"touchend",this)),this.scroller.options.disableMouse||(t(this.indicator,"mousedown",this),t(window,"mouseup",this))},function(t){t.prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},t.prototype._handleOptions=function(t){this.options=o({},F,t),this.translateZ=this.options.HWCompositing&&O?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&z,this.options.useTransform=this.options.useTransform&&L,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},t.prototype._addDOMEvents=function(){var t=h;this._handleDOMEvents(t)},t.prototype._removeDOMEvents=function(){var t=a;this._handleDOMEvents(t)},t.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),H&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,C.transitionEnd,this)},t.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel(),this.options.mouseWheel&&this._initMouseWheel()},t.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var t=this,i=!1;Object.defineProperty(this,"isInTransition",{get:function(){return i},set:function(e){i=e;for(var s=t.scroller.children.length?t.scroller.children:[t.scroller],o=i&&!t.pulling?"none":"auto",r=0;r<s.length;r++)s[r].style.pointerEvents=o}})}},t.prototype._handleAutoBlur=function(){this.on("beforeScrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},t.prototype._initDOMObserver=function(){var t=this;if("undefined"!=typeof MutationObserver){var i=void 0,e=new MutationObserver(function(e){if(!t._shouldNotRefresh()){for(var s=!1,o=!1,r=0;r<e.length;r++){var n=e[r];if("attributes"!==n.type){s=!0;break}if(n.target!==t.scroller){o=!0;break}}s?t.refresh():o&&(clearTimeout(i),i=setTimeout(function(){t._shouldNotRefresh()||t.refresh()},60))}}),s={attributes:!0,childList:!0,subtree:!0};e.observe(this.scroller,s),this.on("destroy",function(){e.disconnect()})}else this._checkDOMUpdate()},t.prototype._shouldNotRefresh=function(){var t=this.x>0||this.x<this.maxScrollX||this.y>0||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},t.prototype._checkDOMUpdate=function(){function t(){if(!this.destroyed){e=c(this.scroller);var t=e.width,r=e.height;s===t&&o===r||this.refresh(),s=t,o=r,i.call(this)}}function i(){var i=this;setTimeout(function(){t.call(i)},1e3)}var e=c(this.scroller),s=e.width,o=e.height;i.call(this)},t.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(p(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()));break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._onMouseWheel(t)}},t.prototype.refresh=function(){var t=c(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=c(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=l(this.wrapper),this.trigger("refresh"),this.resetPosition()},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1}}(S),function(t){t.prototype._start=function(t){var i=I[t.type];if((i===A||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!p(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=s(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},t.prototype._move=function(t){if(this.enabled&&!this.destroyed&&I[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,o=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=o;var r=Math.abs(this.distX),n=Math.abs(this.distY),h=s();if(!(h-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&r<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(r>n+this.options.directionLockThreshold?this.directionLocked="h":n>=r+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);o=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,o=this.hasVerticalScroll?o:0,this.movingDirectionX=e>0?q:e<0?j:0,this.movingDirectionY=o>0?V:o<0?U:0;var a=this.x+e,l=this.y+o;(a>0||a<this.maxScrollX)&&(a=this.options.bounce?this.x+e/3:a>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+o/3:l>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(a,l),h-this.startTime>this.options.momentumLimitTime&&(this.startTime=h,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var c=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,u=this.pointX-c,d=this.pointY-p;(u>document.documentElement.clientWidth-this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||d>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},t.prototype._end=function(t){if(this.enabled&&!this.destroyed&&I[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!p(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),o=i-this.absStartX,r=e-this.absStartY;if(this.directionX=o>0?q:o<0?j:0,this.directionY=r>0?V:r<0?U:0,!this.options.pullDownRefresh||!this._checkPullDown()){if(this._checkClick(t))return void this.trigger("scrollCancel");if(!this.resetPosition(this.options.bounceTime,R.bounce)){this.scrollTo(i,e),this.endTime=s();var n=this.endTime-this.startTime,h=Math.abs(i-this.startX),a=Math.abs(e-this.startY);if(this._events.flick&&n<this.options.flickLimitTime&&h<this.options.flickLimitDistance&&a<this.options.flickLimitDistance)return void this.trigger("flick");var l=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(a>this.options.momentumLimitDistance||h>this.options.momentumLimitDistance)){var c=this.hasHorizontalScroll?v(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:i,duration:0},u=this.hasVerticalScroll?v(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:e,duration:0};i=c.destination,e=u.destination,l=Math.max(c.duration,u.duration),this.isInTransition=!0}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,l=this.options.wheel.adjustTime||400);var d=R.swipe;if(this.options.snap){var f=this._nearestSnap(i,e);this.currentPage=f,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-f.x),1e3),Math.min(Math.abs(e-f.y),1e3)),300),i=f.x,e=f.y,this.directionX=0,this.directionY=0,d=this.options.snap.easing||R.bounce}if(i!==this.x||e!==this.y)return(i>0||i<this.maxScrollX||e>0||e<this.maxScrollY)&&(d=R.swipeBounce),void this.scrollTo(i,e,l,d);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}}},t.prototype._checkClick=function(t){var i=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var e=Math.abs(Math.round(this.y/this.itemHeight)),s=Math.round((this.pointY+l(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[e+s]}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,R.swipe),!0}return!i&&(this.options.tap&&u(t,this.options.tap),this.options.click&&!p(t.target,this.options.preventDefaultException)&&d(t),!0)}return!1},t.prototype._resize=function(){var t=this;this.enabled&&(E&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},t.prototype._startProbe=function(){function t(){var e=i.getComputedPosition();if(i.trigger("scroll",e),!i.isInTransition)return void i.trigger("scrollEnd",e);i.probeTimer=B(t)}N(this.probeTimer),this.probeTimer=B(t);var i=this},t.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[C.transitionProperty]=t},t.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[C.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[C.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},t.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[C.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[C.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},t.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,R.bounce)||(this.isInTransition=!1,3!==this.options.probeType&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},t.prototype._translate=function(t,i){if(x(!r(t)&&!r(i),"Oops! translate x or y is null or undefined. please check your code."),this.options.useTransform?this.scrollerStyle[C.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var n=s*(i/this.itemHeight+o);this.items[o].style[C.transform]="rotateX("+n+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var h=0;h<this.indicators.length;h++)this.indicators[h].updatePosition()},t.prototype._animate=function(t,i,e,o){function r(){var p=s();if(p>=c)return n.isAnimating=!1,n._translate(t,i),void(n.pulling||n.resetPosition(n.options.bounceTime)||n.trigger("scrollEnd",{x:n.x,y:n.y}));p=(p-l)/e;var u=o(p),d=(t-h)*u+h,f=(i-a)*u+a;n._translate(d,f),n.isAnimating&&(n.animateTimer=B(r)),3===n.options.probeType&&n.trigger("scroll",{x:n.x,y:n.y})}var n=this,h=this.x,a=this.y,l=s(),c=l+e;this.isAnimating=!0,N(this.animateTimer),r()},t.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},t.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(i>0?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},t.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var r=l(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=e||0,r.top-=s||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,this.options.wheel&&(r.top=Math.round(r.top/this.itemHeight)*this.itemHeight),this.scrollTo(r.left,r.top,i,o)}},t.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>0?e=0:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,r=Math.round(o);return!this.hasVerticalScroll||r>0?o=0:r<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},t.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(t=t[C.transform].split(")")[0].split(", "),i=+(t[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},t.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},t.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this._removeDOMEvents(),this._events={}}}(S),function(t){t.prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},t.prototype.once=function(t,i){function e(){this.off(t,e),i.apply(s,arguments)}var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;e.fn=i,this.on(t,e)},t.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},t.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,s=[].concat(M(i)),o=0;o<e;o++){var r=s[o],n=_(r,2),h=n[0],a=n[1];h&&h.apply(a,[].slice.call(arguments,1))}}}(S),function(t){t.prototype._initSnap=function(){var t=this;this.currentPage={};var i=this.options.snap;if(i.loop){var e=this.scroller.children;e.length>0&&(f(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0)))}var s=i.el;"string"==typeof s&&(s=this.scroller.querySelectorAll(s)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e=i.stepX||t.wrapperWidth,o=i.stepY||t.wrapperHeight,r=0,n=void 0,h=void 0,a=void 0,l=0,p=void 0,u=0,d=void 0,f=void 0;if(s)for(p=s.length,d=-1;l<p;l++)f=c(s[l]),(0===l||f.left<=c(s[l-1]).left)&&(u=0,d++),t.pages[u]||(t.pages[u]=[]),r=Math.max(-f.left,t.maxScrollX),n=Math.max(-f.top,t.maxScrollY),h=r-Math.round(f.width/2),a=n-Math.round(f.height/2),t.pages[u][d]={x:r,y:n,width:f.width,height:f.height,cx:h,cy:a},r>t.maxScrollX&&u++;else for(h=Math.round(e/2),a=Math.round(o/2);r>-t.scrollerWidth;){for(t.pages[l]=[],p=0,n=0;n>-t.scrollerHeight;)t.pages[l][p]={x:Math.max(r,t.maxScrollX),y:Math.max(n,t.maxScrollY),width:e,height:o,cx:r-h,cy:n-a},n-=o,p++;r-=e,l++}var m=i.loop?1:0;t._goToPage(t.currentPage.pageX||m,t.currentPage.pageY||0,0);var g=i.threshold;g%1==0?(t.snapThresholdX=g,t.snapThresholdY=g):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*g),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*g))}}),this.on("scrollEnd",function(){i.loop&&(0===t.currentPage.pageX&&t._goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t._goToPage(1,t.currentPage.pageY,0))}),!1!==i.listenFlick&&this.on("flick",function(){var e=i.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t._goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)}),this.on("destroy",function(){if(i.loop){var e=t.scroller.children;e.length>2&&(g(t.scroller,e[e.length-1]),g(t.scroller,e[0]))}})},t.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&(e+=this.directionX,e<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&(o+=this.directionY,o<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},t.prototype._goToPage=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&(s=s||o.easing||R.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var r=this.pages[t][i].x,n=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(r-this.x),1e3),Math.min(Math.abs(n-this.y),1e3)),300):e,this.currentPage={x:r,y:n,pageX:t,pageY:i},this.scrollTo(r,n,e,s)}},t.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o){if(o.loop){var r=this.pages.length-2;t>=r?t=r-1:t<0&&(t=0),t+=1}this._goToPage(t,i,e,s)}},t.prototype.next=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;e++,e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i)},t.prototype.prev=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;e--,e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i)},t.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?o({},this.currentPage,{pageX:this.currentPage.pageX-1}):this.currentPage:null}}(S),function(t){t.prototype.wheelTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},t.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},t.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,w("wheel option selectedIndex is required!"))}}(S),function(t){t.prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar,e=i.fade,s=void 0===e||e,o=i.interactive,r=void 0!==o&&o;this.indicators=[];var n=void 0;this.options.scrollX&&(n={el:T("horizontal"),direction:"horizontal",fade:s,interactive:r},this._insertScrollBar(n.el),this.indicators.push(new b(this,n))),this.options.scrollY&&(n={el:T("vertical"),direction:"vertical",fade:s,interactive:r},this._insertScrollBar(n.el),this.indicators.push(new b(this,n))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),s&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)})),this.on("destroy",function(){t._removeScrollBars()})},t.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},t.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].destroy()}}(S),function(t){t.prototype._initPullDown=function(){this.options.probeType=3},t.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return!(this.directionY!==V||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,R.bounce),this.pulling)},t.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,R.bounce)}}(S),function(t){t.prototype._initPullUp=function(){this.options.probeType=3,this.pullupWatching=!1,this._watchPullUp()},t.prototype._watchPullUp=function(){function t(i){var s=this;this.movingDirectionY===U&&i.y<=this.maxScrollY+e&&(this.once("scrollEnd",function(){s.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",t))}this.pullupWatching=!0;var i=this.options.pullUpLoad.threshold,e=void 0===i?0:i;this.on("scroll",t)},t.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()}}(S),function(t){t.prototype._initMouseWheel=function(){var t=this;this._handleMouseWheelEvent(h),this.on("destroy",function(){clearTimeout(t.mouseWheelTimer),t._handleMouseWheelEvent(a)}),this.firstWheelOpreation=!0},t.prototype._handleMouseWheelEvent=function(t){t(this.wrapper,"wheel",this),t(this.wrapper,"mousewheel",this),t(this.wrapper,"DOMMouseScroll",this)},t.prototype._onMouseWheel=function(t){var i=this;if(this.enabled){t.preventDefault(),this.firstWheelOpreation&&this.trigger("scrollStart"),this.firstWheelOpreation=!1,clearTimeout(this.mouseWheelTimer),this.mouseWheelTimer=setTimeout(function(){i.options.snap||i.trigger("scrollEnd",{x:i.x,y:i.y}),i.firstWheelOpreation=!0},400);var e=this.options.mouseWheel,s=e.speed,o=void 0===s?20:s,r=e.invert,n=void 0!==r&&r,h=void 0,a=void 0;switch(!0){case"deltaX"in t:1===t.deltaMode?(h=-t.deltaX*o,a=-t.deltaY*o):(h=-t.deltaX,a=-t.deltaY);break;case"wheelDeltaX"in t:h=t.wheelDeltaX/120*o,a=t.wheelDeltaY/120*o;break;case"wheelDelta"in t:h=a=t.wheelDelta/120*o;break;case"detail"in t:h=a=-t.detail/3*o;break;default:return}var l=n?-1:1;h*=l,a*=l,this.hasVerticalScroll||(h=a,a=0);var c=void 0,p=void 0;if(this.options.snap)return c=this.currentPage.pageX,p=this.currentPage.pageY,h>0?c--:h<0&&c++,a>0?p--:a<0&&p++,void this._goToPage(c,p);c=this.x+Math.round(this.hasHorizontalScroll?h:0),p=this.y+Math.round(this.hasVerticalScroll?a:0),this.directionX=h>0?-1:h<0?1:0,this.directionY=a>0?-1:a<0?1:0,c>0?c=0:c<this.maxScrollX&&(c=this.maxScrollX),p>0?p=0:p<this.maxScrollY&&(p=this.maxScrollY),this.scrollTo(c,p),this.trigger("scroll",{x:this.x,y:this.y})}}}(S),S.Version="1.8.4",i.default=S}});