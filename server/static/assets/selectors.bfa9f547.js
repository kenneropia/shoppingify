const e=e=>{const t={};return e.list.forEach((({item:e,amount:m})=>t[e.category.name]?t[e.category.name].push({item:e,amount:m}):t[e.category.name]=[{item:e,amount:m}])),t},t=({insertItem:e,reduceItemAmount:t,removeItem:m})=>({insertItem:e,reduceItemAmount:t,removeItem:m}),m=({insertItem:e})=>e;export{t as a,e as c,m as i};