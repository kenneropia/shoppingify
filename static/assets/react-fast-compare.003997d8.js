var e="undefined"!=typeof Element,r="function"==typeof Map,t="function"==typeof Set,n="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function f(o,i){if(o===i)return!0;if(o&&i&&"object"==typeof o&&"object"==typeof i){if(o.constructor!==i.constructor)return!1;var u,a,c,s;if(Array.isArray(o)){if((u=o.length)!=i.length)return!1;for(a=u;0!=a--;)if(!f(o[a],i[a]))return!1;return!0}if(r&&o instanceof Map&&i instanceof Map){if(o.size!==i.size)return!1;for(s=o.entries();!(a=s.next()).done;)if(!i.has(a.value[0]))return!1;for(s=o.entries();!(a=s.next()).done;)if(!f(a.value[1],i.get(a.value[0])))return!1;return!0}if(t&&o instanceof Set&&i instanceof Set){if(o.size!==i.size)return!1;for(s=o.entries();!(a=s.next()).done;)if(!i.has(a.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(i)){if((u=o.length)!=i.length)return!1;for(a=u;0!=a--;)if(o[a]!==i[a])return!1;return!0}if(o.constructor===RegExp)return o.source===i.source&&o.flags===i.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===i.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===i.toString();if((u=(c=Object.keys(o)).length)!==Object.keys(i).length)return!1;for(a=u;0!=a--;)if(!Object.prototype.hasOwnProperty.call(i,c[a]))return!1;if(e&&o instanceof Element)return!1;for(a=u;0!=a--;)if(("_owner"!==c[a]&&"__v"!==c[a]&&"__o"!==c[a]||!o.$$typeof)&&!f(o[c[a]],i[c[a]]))return!1;return!0}return o!=o&&i!=i}var o=function(e,r){try{return f(e,r)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}};export{o as C};