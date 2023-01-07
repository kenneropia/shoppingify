import{C as t}from"./react.feb47304.js";import{I as e}from"./history.b73326bc.js";import{u as r,a,b as n,c as o}from"./react-router.5e3691f3.js";
/**
 * React Router DOM v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}const l=["onClick","reloadDocument","replace","state","target","to"];const f=t.forwardRef((function(f,s){let{onClick:u,reloadDocument:i,replace:p=!1,state:m,target:b,to:y}=f,g=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(f,l),d=r(y),h=function(r,c){let{target:l,replace:f,state:s}=void 0===c?{}:c,u=a(),i=n(),p=o(r);return t.useCallback((t=>{if(!(0!==t.button||l&&"_self"!==l||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t))){t.preventDefault();let a=!!f||e(i)===e(p);u(r,{replace:a,state:s})}}),[i,u,p,f,s,l,r])}(y,{replace:p,state:m,target:b});return t.createElement("a",c({},g,{href:d,onClick:function(t){u&&u(t),t.defaultPrevented||i||h(t)},ref:s,target:b}))}));export{f as L};
