!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),document.write("<p>I am the provider.</p>"),e.default="I come from the provider"},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="I come from within the provider library"},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default="Default Message";e.alternative="Alternative Message"},function(n,e,t){!function(n){"use strict";var e=function(n){return function(e){return n.every(function(n){return n(e)})}},t=function(n){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(n,e){return n(e)},n)}},r=function(n){return Array.isArray(n)?n:"number"==typeof n?[n]:n.split(".").map(function(n){var e=parseInt(n);return isNaN(e)||String(e)!==n?n:e})},o=t(function(n){return"string"==typeof n||"number"==typeof n||Array.isArray(n)?function(e){return e&&"function"==typeof e.getIn?e.getIn(r(n)):r(n).reduce(function(n,e){return n&&n[e]},e)}:n}),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],r=!0,o=!1,u=void 0;try{for(var i,f=n[Symbol.iterator]();!(r=(i=f.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,u=n}finally{try{!r&&f.return&&f.return()}finally{if(o)throw u}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)},c=t(function(n){return function(e){return function(t){var r=o(e,t);return!("object"!==(void 0===r?"undefined":u(r))||!Boolean(r))&&("function"==typeof r.includes?r.includes(n):Array.isArray(r)?-1!==r.indexOf(n):Object.keys(r).some(function(e){return r[e]===n}))}}}),a=t(function(n){return function(e){var t=o(n,e);return t?"function"==typeof t.count?t.count():Array.isArray(t)||"string"==typeof t?t.length:"object"===(void 0===t?"undefined":u(t))?Object.keys(t).length:0:0}}),l=t(function(n){return function(e){var t=o(n,e);return t&&"function"==typeof t.first?t.first():t&&Array.isArray(t)?t[0]:(console.warn("$head expects the target to be an array, got "+(void 0===t?"undefined":u(t))+" instead"),null)}}),d=t(function(n){return function(e){var t=o(n,e);return t&&"function"==typeof t.last?t.last():t&&Array.isArray(t)?t[t.length-1]:(console.warn("$last expects the target to be an array, got "+(void 0===t?"undefined":u(t))+" instead"),null)}}),s=t(function(n){return function(e){return function(t){var r=o(e,t);if(r&&"object"===(void 0===r?"undefined":u(r))){if("function"==typeof r.map)return r.map(o(n));var i={};return Object.keys(r).forEach(function(e){i[e]=o(n,r[e])}),i}}}}),y=t(function(n){return function(e){return!Boolean(n(e))}}),p=function(n){return function(e){return n.some(function(n){return n(e)})}},v=t(function(n){return function(e){var t=o(n,e);return t&&"function"==typeof t.rest?t.rest():t&&Array.isArray(t)?t.slice(1):(console.warn("$tail expects the target to be an array, got "+(void 0===t?"undefined":u(t))+" instead"),null)}}),b=t(function(n){return"string"==typeof n||"number"==typeof n||Array.isArray(n)?function(e){return o(o(n,e),e)}:n}),g=t(function(n){return function(e){return function(t){if(void 0!==t){if("function"==typeof t.setIn)return t.setIn(r(n),e);var o=JSON.parse(JSON.stringify(t));return function n(e,t,r){return 0===r.length?t:(void 0===e&&(e="number"==typeof r[0]?[]:{}),"number"==typeof r[0]&&Array.isArray(e)&&e.length<r[0]&&(r[0]=e.length),e[r[0]]=n(e[r[0]],t,r.slice(1)),e)}(o,e,r(n))}return t}}}),m=t(function n(e){return function(t){return"object"===(void 0===t?"undefined":u(t))?Object.keys(t).reduce(function(t,r){return Object.assign({},t,function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}({},r,n(e)(t[r])))},t):e(t)}}),h=t(function(n){return function(e){return 0===Object.keys(n).length?{}:m(function(n){return"function"==typeof n?n(e):n},n)}}),j=function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];return"function"!=typeof t[t.length-1]?e(t.slice(0,-1))(t[t.length-1]):e(t)},A=c,O=a,w=o,$=l,S=d,P=s,I=y,_=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return"function"!=typeof e[e.length-1]?p(e.slice(0,-1))(e[e.length-1]):p(e)},k=v,x=b,M=h,C=t(function(n){return function(e){return function(t){var c=o(n,t);if("object"!==(void 0===c?"undefined":u(c)))return console.warn("Cannot add an item to a "+(void 0===c?"undefined":u(c))+"."),t;if(Array.isArray(c))return g(n,[].concat(f(c),[e]),t);if("function"==typeof c.push)return g(n,c.push(e),t);if("function"==typeof c.add)return g(n,c.add(e),t);if("object"!==(void 0===e?"undefined":u(e)))return console.warn("Only objects can be added to objects."),t;var a=Object.keys(e);if(1!==a.length)return console.warn("Only objects with exactly one key can be added to objects."),t;var l=i(a,1),d=l[0];return void 0!==c[d]?(console.warn("Cannot add {"+d+": "+e[d].toString()+"} to "+r(n).join(".")+", because it is already set."),t):g([].concat(f(r(n)),[d]),e[d],t)}}}),J=t(function(n){return function(e){if(e&&"function"==typeof e.deleteIn)return e.deleteIn(r(n));var t=r(n),i=t.slice(0,-1),f=t[t.length-1],c=o(i,e);return"object"!==(void 0===c?"undefined":u(c))?(console.warn("Cannot drop an item from a "+(void 0===c?"undefined":u(c))+"."),e):Array.isArray(c)?g(i,c.filter(function(n,e){return e!==f}),e):g(i,Object.keys(c).filter(function(n){return n!==f}).reduce(function(n,e){return n[e]=c[e],n},{}),e)}}),L=t(function(n){return function(e){return function(t){return t&&"function"===t.mergeIn?t.mergeIn(r(n),e):Object.keys(e).reduce(function(t,o){return g([].concat(f(r(n)),[o]),e[o],t)},t)}}}),N=t(function(n){return function(e){var t=o(n,e);return t&&!Array.isArray(t)&&"function"==typeof t.pop?g(n,t.pop(),e):Array.isArray(t)?g(n,[].concat(f(t.slice(0,-1))),e):(console.warn("Cannot pop an item from a "+(void 0===t?"undefined":u(t))+"."),e)}}),D=t(function(n){return function(e){return function(t){var r=o(n,t);return"object"!==(void 0===r?"undefined":u(r))?(console.warn("Cannot remove an item from a "+(void 0===r?"undefined":u(r))+"."),t):"function"==typeof r.filter?g(n,r.filter(function(n){return n!==e}),t):g(n,Object.keys(r).filter(function(n){return r[n]!==e}).reduce(function(n,e){return n[e]=r[e],n},{}),t)}}}),T=t(function(n){return function(e){var t=o(n,e);return t&&!Array.isArray(t)&&"function"==typeof t.shift?g(n,t.shift(),e):Array.isArray(t)?g(n,[].concat(f(t.slice(1))),e):(console.warn("Cannot shift an item from a "+(void 0===t?"undefined":u(t))+"."),e)}}),B=t(function(n){return function(e){return function(t){var c=o(n,t);if(c&&!Array.isArray(c)&&"function"==typeof c.unshift)return g(n,c.unshift(e),t);if("object"!==(void 0===c?"undefined":u(c)))return console.warn("Cannot unshift an item to a "+(void 0===c?"undefined":u(c))+"."),t;if(Array.isArray(c))return g(n,[e].concat(f(c)),t);if("object"!==(void 0===e?"undefined":u(e)))return console.warn("Only objects can be added to objects."),t;var a=Object.keys(e);if(1!==a.length)return console.warn("Only objects with exactly one key can be added to objects."),t;var l=i(a,1),d=l[0];return void 0!==c[d]?(console.warn("Cannot add {"+d+": "+e[d].toString()+"} to "+r(n).join(".")+", because it is already set."),t):g([].concat(f(r(n)),[d]),e[d],t)}}}),E=t(function(n){return function(e){return function(t){return t&&"function"==typeof t.mergeDeepIn?t.mergeDeepIn(r(n),e):function n(e,t,o){return Object.keys(t).reduce(function(o,i){return"object"===u(t[i])?n([].concat(f(e),[i]),t[i],o):g([].concat(f(r(e)),[i]),t[i],o)},o)}(r(n),e,t)}}}),z=function(n){return"string"==typeof n?"":null},F=t(function(n){return function(e){var t=o(n);if("object"===(void 0===e?"undefined":u(e))){var r=t(e);if("boolean"==typeof r)return g(n,!r,e)}else if(void 0===e)return e;return function(r){if("object"===(void 0===r?"undefined":u(r))){var o=t(r);if(o&&"function"==typeof o.delete){if(c(e,n,r))return"function"==typeof o.push?D(n,e,r):g(n,o.delete(e),r);if("function"==typeof o.push)return g(n,o.push(e),r);if("function"==typeof o.add)return g(n,o.add(e),r)}return Array.isArray(o)?c(e,n,r)?D(n,e,r):C(n,e,r):g(n,o===e?z(e):e,r)}return void 0===r?r:function(o){return void 0===r&&(r=z(e)),g(n,t(o)===e?r:e,o)}}}}),q=C,G=J,H=L,K=N,Q=D,R=g,U=T,V=B,W=E,X=F,Y=function(n){return function(e){return n.reduce(function(n,e){return e(n)},e)}},Z=t(function(n){return function(e){return function(t){return e.apply(void 0,f(n.map(function(n){return n(t)})).concat([t]))}}}),nn=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return"function"!=typeof e[e.length-1]?Y(e.slice(0,-1))(e[e.length-1]):Y(e)},en=Z,tn=m,rn=t(function(n){return"string"!=typeof n?(console.log("[Plow JS Log]","no path given"),console.log("[Plow JS Log]",n),n):function(e){var t=o(n,e);return console.log("[Plow JS Log]",n),console.log("[Plow JS Log]",t),e}}),on={createPolymorphFunction:t,resolveObjectPath:r},un=j,fn=A,cn=O,an=w,ln=$,dn=S,sn=P,yn=I,pn=_,vn=k,bn=x,gn=M,mn=q,hn=G,jn=H,An=K,On=Q,wn=R,$n=U,Sn=V,Pn=W,In=X,_n=nn,kn=en,xn=tn,Mn=rn;n.$and=un,n.$contains=fn,n.$count=cn,n.$get=an,n.$head=ln,n.$last=dn,n.$map=sn,n.$not=yn,n.$or=pn,n.$tail=vn,n.$resolve=bn,n.$transform=gn,n.$add=mn,n.$drop=hn,n.$override=jn,n.$pop=An,n.$remove=On,n.$set=wn,n.$shift=$n,n.$unshift=Sn,n.$merge=Pn,n.$toggle=In,n.$all=_n,n.$summarize=kn,n.$traverse=xn,n.$log=Mn,n.utils=on,Object.defineProperty(n,"__esModule",{value:!0})}(e)},function(n,e,t){window["@provider"]={"plow-js":t(3),module:t(2),provider:t(0),"provider/lib/something":t(1)}}]);