import{a as t}from"./react.feb47304.js";var e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,v=Math.min,l=function(){return a.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=p(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=r.test(t);return f||i.test(t)?o(t.slice(2),f?2:8):n.test(t)?NaN:+t}var m=function(t,e,n){var r,i,o,u,f,a,c=0,m=!1,y=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(e){var n=r,o=i;return r=i=void 0,c=e,u=t.apply(o,n)}function O(t){return c=t,f=setTimeout(h,e),m?j(t):u}function g(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=o}function h(){var t=l();if(g(t))return x(t);f=setTimeout(h,function(t){var n=e-(t-a);return y?v(n,o-(t-c)):n}(t))}function x(t){return f=void 0,d&&r?j(t):(r=i=void 0,u)}function T(){var t=l(),n=g(t);if(r=arguments,i=this,a=t,n){if(void 0===f)return O(a);if(y)return f=setTimeout(h,e),j(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=b(e)||0,p(n)&&(m=!!n.leading,o=(y="maxWait"in n)?s(b(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=a=i=f=void 0},T.flush=function(){return void 0===f?u:x(l())},T};export{m as C};
