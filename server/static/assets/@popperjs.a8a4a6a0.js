var e="top",t="bottom",n="right",r="left",o=[e,t,n,r],i=o.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),a=[].concat(o,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),s=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function f(e){return e?(e.nodeName||"").toLowerCase():null}function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof c(e).Element||e instanceof Element}function u(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function l(e){return"undefined"!=typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var d={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&f(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&f(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function m(e){return e.split("-")[0]}function h(e,t){var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function v(e){var t=h(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function y(e){return c(e).getComputedStyle(e)}function b(e){return["table","td","th"].indexOf(f(e))>=0}function w(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function x(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||w(e)}function O(e){return u(e)&&"fixed"!==y(e).position?e.offsetParent:null}function j(e){for(var t=c(e),n=O(e);n&&b(n)&&"static"===y(n).position;)n=O(n);return n&&("html"===f(n)||"body"===f(n)&&"static"===y(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&u(e)&&"fixed"===y(e).position)return null;for(var n=x(e);u(n)&&["html","body"].indexOf(f(n))<0;){var r=y(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function E(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var D=Math.max,k=Math.min,L=Math.round;function M(e,t,n){return D(e,k(t,n))}function P(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function W(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function A(e){return e.split("-")[1]}var B={top:"auto",right:"auto",bottom:"auto",left:"auto"};function H(o){var i,a=o.popper,s=o.popperRect,f=o.placement,p=o.variation,u=o.offsets,l=o.position,d=o.gpuAcceleration,m=o.adaptive,h=o.roundOffsets,v=!0===h?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:L(L(t*r)/r)||0,y:L(L(n*r)/r)||0}}(u):"function"==typeof h?h(u):u,g=v.x,b=void 0===g?0:g,x=v.y,O=void 0===x?0:x,E=u.hasOwnProperty("x"),D=u.hasOwnProperty("y"),k=r,M=e,P=window;if(m){var W=j(a),A="clientHeight",H="clientWidth";W===c(a)&&"static"!==y(W=w(a)).position&&"absolute"===l&&(A="scrollHeight",H="scrollWidth"),W=W,f!==e&&(f!==r&&f!==n||"end"!==p)||(M=t,O-=W[A]-s.height,O*=d?1:-1),f!==r&&(f!==e&&f!==t||"end"!==p)||(k=n,b-=W[H]-s.width,b*=d?1:-1)}var R,T=Object.assign({position:l},m&&B);return d?Object.assign({},T,((R={})[M]=D?"0":"",R[k]=E?"0":"",R.transform=(P.devicePixelRatio||1)<=1?"translate("+b+"px, "+O+"px)":"translate3d("+b+"px, "+O+"px, 0)",R)):Object.assign({},T,((i={})[M]=D?O+"px":"",i[k]=E?b+"px":"",i.transform="",i))}var R={passive:!0};var T={left:"right",right:"left",bottom:"top",top:"bottom"};function S(e){return e.replace(/left|right|bottom|top/g,(function(e){return T[e]}))}var C={start:"end",end:"start"};function q(e){return e.replace(/start|end/g,(function(e){return C[e]}))}function N(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(e){return h(w(e)).left+N(e).scrollLeft}function I(e){var t=y(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function U(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:u(e)&&I(e)?e:U(x(e))}function z(e,t){var n;void 0===t&&(t=[]);var r=U(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=c(r),a=o?[i].concat(i.visualViewport||[],I(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(z(x(a)))}function _(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function F(e,t){return"viewport"===t?_(function(e){var t=c(e),n=w(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+V(e),y:s}}(e)):u(t)?function(e){var t=h(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):_(function(e){var t,n=w(e),r=N(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=D(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=D(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+V(e),f=-r.scrollTop;return"rtl"===y(o||n).direction&&(s+=D(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(w(e)))}function X(e,t,n){var r="clippingParents"===t?function(e){var t=z(x(e)),n=["absolute","fixed"].indexOf(y(e).position)>=0&&u(e)?j(e):e;return p(n)?t.filter((function(e){return p(e)&&g(e,n)&&"body"!==f(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=F(e,n);return t.top=D(r.top,t.top),t.right=k(r.right,t.right),t.bottom=k(r.bottom,t.bottom),t.left=D(r.left,t.left),t}),F(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Y(o){var i,a=o.reference,s=o.element,f=o.placement,c=f?m(f):null,p=f?A(f):null,u=a.x+a.width/2-s.width/2,l=a.y+a.height/2-s.height/2;switch(c){case e:i={x:u,y:a.y-s.height};break;case t:i={x:u,y:a.y+a.height};break;case n:i={x:a.x+a.width,y:l};break;case r:i={x:a.x-s.width,y:l};break;default:i={x:a.x,y:a.y}}var d=c?E(c):null;if(null!=d){var h="y"===d?"height":"width";switch(p){case"start":i[d]=i[d]-(a[h]/2-s[h]/2);break;case"end":i[d]=i[d]+(a[h]/2-s[h]/2)}}return i}function G(r,i){void 0===i&&(i={});var a=i,s=a.placement,f=void 0===s?r.placement:s,c=a.boundary,u=void 0===c?"clippingParents":c,l=a.rootBoundary,d=void 0===l?"viewport":l,m=a.elementContext,v=void 0===m?"popper":m,g=a.altBoundary,y=void 0!==g&&g,b=a.padding,x=void 0===b?0:b,O=P("number"!=typeof x?x:W(x,o)),j="popper"===v?"reference":"popper",E=r.rects.popper,D=r.elements[y?j:v],k=X(p(D)?D:D.contextElement||w(r.elements.popper),u,d),L=h(r.elements.reference),M=Y({reference:L,element:E,strategy:"absolute",placement:f}),A=_(Object.assign({},E,M)),B="popper"===v?A:L,H={top:k.top-B.top+O.top,bottom:B.bottom-k.bottom+O.bottom,left:k.left-B.left+O.left,right:B.right-k.right+O.right},R=r.modifiersData.offset;if("popper"===v&&R){var T=R[f];Object.keys(H).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";H[r]+=T[i]*o}))}return H}function J(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function K(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}function Q(e,t,n){void 0===n&&(n=!1);var r=u(t);u(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1}(t);var o,i,a=w(t),s=h(e),p={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==f(t)||I(a))&&(p=(o=t)!==c(o)&&u(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:N(o)),u(t)?((l=h(t)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=V(a))),{x:s.left+p.scrollLeft-l.x,y:s.top+p.scrollTop-l.y,width:s.width,height:s.height}}function Z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var $={placement:"bottom",modifiers:[],strategy:"absolute"};function ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function te(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?$:o;return function(e,t,n){void 0===n&&(n=i);var o,a,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},$,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,l={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;d(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:p(e)?z(e):e.contextElement?z(e.contextElement):[],popper:z(t)};var a,u,m=function(e){var t=Z(e);return s.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,f.options.modifiers),u=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return f.orderedModifiers=m.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:l,options:r}),a=function(){};c.push(i||a)}})),l.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(ee(t,n)){f.rects={reference:Q(t,j(n),"fixed"===f.options.strategy),popper:v(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:l})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){l.forceUpdate(),e(f)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){d(),u=!0}};if(!ee(e,t))return l;function d(){c.forEach((function(e){return e()})),c=[]}return l.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var ne=te({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=c(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,R)})),s&&f.addEventListener("resize",n.update,R),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,R)})),s&&f.removeEventListener("resize",n.update,R)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:m(t.placement),variation:A(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,H(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,H(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},d,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,s=t.name,f=i.offset,c=void 0===f?[0,0]:f,p=a.reduce((function(t,i){return t[i]=function(t,o,i){var a=m(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,c),t}),{}),u=p[o.placement],l=u.x,d=u.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=l,o.modifiersData.popperOffsets.y+=d),o.modifiersData[s]=p}},{name:"flip",enabled:!0,phase:"main",fn:function(s){var f=s.state,c=s.options,p=s.name;if(!f.modifiersData[p]._skip){for(var u=c.mainAxis,l=void 0===u||u,d=c.altAxis,h=void 0===d||d,v=c.fallbackPlacements,g=c.padding,y=c.boundary,b=c.rootBoundary,w=c.altBoundary,x=c.flipVariations,O=void 0===x||x,j=c.allowedAutoPlacements,E=f.options.placement,D=m(E),k=v||(D===E||!O?[S(E)]:function(e){if("auto"===m(e))return[];var t=S(e);return[q(e),t,q(t)]}(E)),L=[E].concat(k).reduce((function(e,t){return e.concat("auto"===m(t)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,s=n.boundary,f=n.rootBoundary,c=n.padding,p=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?a:u,d=A(r),h=d?p?i:i.filter((function(e){return A(e)===d})):o,v=h.filter((function(e){return l.indexOf(e)>=0}));0===v.length&&(v=h);var g=v.reduce((function(t,n){return t[n]=G(e,{placement:n,boundary:s,rootBoundary:f,padding:c})[m(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}(f,{placement:t,boundary:y,rootBoundary:b,padding:g,flipVariations:O,allowedAutoPlacements:j}):t)}),[]),M=f.rects.reference,P=f.rects.popper,W=new Map,B=!0,H=L[0],R=0;R<L.length;R++){var T=L[R],C=m(T),N="start"===A(T),V=[e,t].indexOf(C)>=0,I=V?"width":"height",U=G(f,{placement:T,boundary:y,rootBoundary:b,altBoundary:w,padding:g}),z=V?N?n:r:N?t:e;M[I]>P[I]&&(z=S(z));var _=S(z),F=[];if(l&&F.push(U[C]<=0),h&&F.push(U[z]<=0,U[_]<=0),F.every((function(e){return e}))){H=T,B=!1;break}W.set(T,F)}if(B)for(var X=function(e){var t=L.find((function(t){var n=W.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return H=t,"break"},Y=O?3:1;Y>0;Y--){if("break"===X(Y))break}f.placement!==H&&(f.modifiersData[p]._skip=!0,f.placement=H,f.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,a=o.options,s=o.name,f=a.mainAxis,c=void 0===f||f,p=a.altAxis,u=void 0!==p&&p,l=a.boundary,d=a.rootBoundary,h=a.altBoundary,g=a.padding,y=a.tether,b=void 0===y||y,w=a.tetherOffset,x=void 0===w?0:w,O=G(i,{boundary:l,rootBoundary:d,padding:g,altBoundary:h}),L=m(i.placement),P=A(i.placement),W=!P,B=E(L),H="x"===B?"y":"x",R=i.modifiersData.popperOffsets,T=i.rects.reference,S=i.rects.popper,C="function"==typeof x?x(Object.assign({},i.rects,{placement:i.placement})):x,q={x:0,y:0};if(R){if(c||u){var N="y"===B?e:r,V="y"===B?t:n,I="y"===B?"height":"width",U=R[B],z=R[B]+O[N],_=R[B]-O[V],F=b?-S[I]/2:0,X="start"===P?T[I]:S[I],Y="start"===P?-S[I]:-T[I],J=i.elements.arrow,K=b&&J?v(J):{width:0,height:0},Q=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Z=Q[N],$=Q[V],ee=M(0,T[I],K[I]),te=W?T[I]/2-F-ee-Z-C:X-ee-Z-C,ne=W?-T[I]/2+F+ee+$+C:Y+ee+$+C,re=i.elements.arrow&&j(i.elements.arrow),oe=re?"y"===B?re.clientTop||0:re.clientLeft||0:0,ie=i.modifiersData.offset?i.modifiersData.offset[i.placement][B]:0,ae=R[B]+te-ie-oe,se=R[B]+ne-ie;if(c){var fe=M(b?k(z,ae):z,U,b?D(_,se):_);R[B]=fe,q[B]=fe-U}if(u){var ce="x"===B?e:r,pe="x"===B?t:n,ue=R[H],le=ue+O[ce],de=ue-O[pe],me=M(b?k(le,ae):le,ue,b?D(de,se):de);R[H]=me,q[H]=me-ue}}i.modifiersData[s]=q}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(i){var a,s=i.state,f=i.name,c=i.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=m(s.placement),d=E(l),h=[r,n].indexOf(l)>=0?"height":"width";if(p&&u){var g=function(e,t){return P("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:W(e,o))}(c.padding,s),y=v(p),b="y"===d?e:r,w="y"===d?t:n,x=s.rects.reference[h]+s.rects.reference[d]-u[d]-s.rects.popper[h],O=u[d]-s.rects.reference[d],D=j(p),k=D?"y"===d?D.clientHeight||0:D.clientWidth||0:0,L=x/2-O/2,A=g[b],B=k-y[h]-g[w],H=k/2-y[h]/2+L,R=M(A,H,B),T=d;s.modifiersData[f]=((a={})[T]=R,a.centerOffset=R-H,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&g(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=G(t,{elementContext:"reference"}),s=G(t,{altBoundary:!0}),f=J(a,r),c=J(s,o,i),p=K(f),u=K(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]});export{ne as c};