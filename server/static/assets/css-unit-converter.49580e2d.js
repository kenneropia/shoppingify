var p={px:{px:1,cm:96/2.54,mm:96/25.4,in:96,pt:96/72,pc:16},cm:{px:2.54/96,cm:1,mm:.1,in:2.54,pt:2.54/72,pc:2.54/6},mm:{px:25.4/96,cm:10,mm:1,in:25.4,pt:25.4/72,pc:25.4/6},in:{px:1/96,cm:1/2.54,mm:1/25.4,in:1,pt:1/72,pc:1/6},pt:{px:.75,cm:72/2.54,mm:72/25.4,in:72,pt:1,pc:12},pc:{px:6/96,cm:6/2.54,mm:6/25.4,in:6,pt:6/72,pc:1},deg:{deg:1,grad:.9,rad:180/Math.PI,turn:360},grad:{deg:400/360,grad:1,rad:200/Math.PI,turn:400},rad:{deg:Math.PI/180,grad:Math.PI/200,rad:1,turn:2*Math.PI},turn:{deg:1/360,grad:1/400,rad:.5/Math.PI,turn:1},s:{s:1,ms:.001},ms:{s:1e3,ms:1},Hz:{Hz:1,kHz:1e3},kHz:{Hz:.001,kHz:1},dpi:{dpi:1,dpcm:1/2.54,dppx:1/96},dpcm:{dpi:2.54,dpcm:1,dppx:2.54/96},dppx:{dpi:96,dpcm:96/2.54,dppx:1}},r=function(r,t,m,d){if(!p.hasOwnProperty(m))throw new Error("Cannot convert to "+m);if(!p[m].hasOwnProperty(t))throw new Error("Cannot convert from "+t+" to "+m);var n=p[m][t]*r;return!1!==d?(d=Math.pow(10,parseInt(d)||5),Math.round(n*d)/d):n};export{r as C};
