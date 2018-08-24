!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,n,e){var o={},r=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),a=null,s=0,f=[],u=e(0);function c(t,n){for(var e=0;e<t.length;e++){var r=t[e],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function l(t,n){var e=i(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),f.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,r)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=f.indexOf(t);n>=0&&f.splice(n,1)}function b(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),h(n,t.attrs),l(t,n),n}function h(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var f=s++;e=a||(a=b(n)),o=y.bind(null,e,f,!1),r=y.bind(null,e,f,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(n,t.attrs),l(t,n),n}(n),o=function(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),r=function(){d(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){d(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return c(e,n),function(t){for(var r=[],i=0;i<e.length;i++){var a=e[i];(s=o[a.id]).refs--,r.push(s)}t&&c(p(t,n),n);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete o[s.id]}}}};var m=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function y(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,"#option-last-items i, #option-last-items button,\n#option-item-info i,\n#option-item-info button,\n#option-kana-chart i,\n#option-kana-chart button,\n#option-audio i,\n#option-audio button {\n  position: relative; }\n\n#option-last-items i:after, #option-last-items button:after,\n#option-item-info i:after,\n#option-item-info button:after,\n#option-kana-chart i:after,\n#option-kana-chart button:after,\n#option-audio i:after,\n#option-audio button:after {\n  font-family: \"Source Sans Pro\", sans-serif;\n  padding: 1px 4px;\n  border: 1px solid #3c3c3c;\n  border-radius: 1px;\n  -webkit-box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  position: absolute;\n  color: #294ddb;\n  width: 10px;\n  opacity: .4;\n  left: 26px;\n  top: -4px; }\n\n#option-last-items i:after {\n  content: ','; }\n\n#option-item-info i:after {\n  content: 'F'; }\n\n#option-kana-chart i:after {\n  content: '/'; }\n\n#option-audio button:after {\n  left: 17px;\n  content: 'J'; }\n\n#all-info {\n  position: relative; }\n\n#all-info::after {\n  font-family: \"Source Sans Pro\", sans-serif;\n  padding: 1px 4px;\n  border: 1px solid #3c3c3c;\n  border-radius: 1px;\n  -webkit-box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  position: absolute;\n  color: #294ddb;\n  width: auto;\n  opacity: .4;\n  content: 'SPACEBAR';\n  position: absolute;\n  left: calc(50% + 87px);\n  top: 50%;\n  transform: translateY(-50%); }\n",""])},function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){"use strict";e(4)}]);
//# sourceMappingURL=index.js.map