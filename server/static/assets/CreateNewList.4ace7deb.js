var C=Object.defineProperty,t=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,e=Object.prototype.propertyIsEnumerable,l=(t,i,e)=>i in t?C(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,a=(C,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(C,r,a[r]);if(i)for(var r of i(a))e.call(a,r)&&l(C,r,a[r]);return C};import{a as r,c as n}from"./selectors.bfa9f547.js";import{u as d}from"./useStore.e8681226.js";import{L as p}from"./react-router-dom.aa0ec8dc.js";import{j as h,C as o,a as s,b as f,T as c,L as H,i as L,f as m,t as V,c as b,I as E,B as M,v as Z,k as u,H as w,V as g}from"./@chakra-ui.cfa332ef.js";import{t as x}from"./react-hot-toast.9d58ff23.js";import{c as j,b as y}from"./react-query.72d918e7.js";import{c as F}from"./index.4907a54c.js";import{h as v,i as k,A as D}from"./react-icons.f4c509b7.js";import"./zustand.a3e6d7ee.js";import"./react.feb47304.js";import"./object-assign.854adb70.js";import"./history.b73326bc.js";import"./@babel.dc43f2d2.js";import"./react-router.5e3691f3.js";import"./@emotion.7a460b2b.js";import"./hoist-non-react-statics.da991e8f.js";import"./react-is.e06272e7.js";import"./stylis.bb1903e3.js";import"./lodash.mergewith.bcbf3e94.js";import"./react-dom.f1d739b1.js";import"./scheduler.c13aab76.js";import"./prop-types.9471ffa6.js";import"./@popperjs.a8a4a6a0.js";import"./framer-motion.d103fb6e.js";import"./tslib.2bd10da0.js";import"./style-value-types.558ea47d.js";import"./popmotion.7b246e2b.js";import"./hey-listen.45400d5c.js";import"./framesync.9f9facff.js";import"./react-fast-compare.003997d8.js";import"./@ctrl.afc734ac.js";import"./index.9bc45dda.js";import"./axios.6b29e171.js";import"./date-fns.43a69caf.js";import"./focus-visible.a1c41e60.js";const O=()=>s(L,{mt:"-50px",width:81,height:200,viewBox:"0 0 81 135",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h("path",{d:"M31.5096 5.27646L16.643 9.25995C16.1203 9.40002 15.6746 9.74201 15.404 10.2107C15.1334 10.6794 15.0601 11.2364 15.2001 11.7591L16.9486 18.2845C17.0887 18.8072 17.4307 19.2529 17.8993 19.5235C18.368 19.7941 18.925 19.8674 19.4477 19.7274L21.9114 19.0673L24.5312 28.8445L34.4706 26.1813L31.8507 16.404L34.3144 15.7439C34.8371 15.6038 35.2828 15.2618 35.5534 14.7931C35.824 14.3245 35.8973 13.7675 35.7572 13.2447L34.0088 6.71934C33.8687 6.1966 33.5267 5.7509 33.058 5.48031C32.5893 5.20971 32.0324 5.13639 31.5096 5.27646Z",fill:"#F9A109"}),h("path",{d:"M62.4022 61.0071C49.7276 50.124 40.8227 35.5085 36.9632 19.2546C36.8717 18.8802 36.6535 18.549 36.3456 18.3172C36.0377 18.0854 35.659 17.9674 35.2739 17.9831L34.5184 15.1635L18.8173 19.3706L19.5623 22.151L19.346 22.209C19.1246 22.2686 18.9179 22.3732 18.7388 22.5163C18.5596 22.6594 18.4119 22.8379 18.3049 23.0406C18.1978 23.2433 18.1337 23.466 18.1165 23.6946C18.0994 23.9232 18.1295 24.1529 18.2051 24.3693C24.0622 41.2808 24.0287 57.863 18.1043 74.1161C17.7631 75.0504 17.7341 76.0701 18.0217 77.0221L33.9685 129.669C34.3271 130.842 35.1251 131.832 36.196 132.431C37.2668 133.03 38.5276 133.193 39.7154 132.885L75.2289 123.369C76.4251 123.038 77.4447 122.253 78.0706 121.181C78.6965 120.11 78.8792 118.836 78.5798 117.631L65.4253 65.8918C64.9378 63.994 63.8832 62.29 62.4022 61.0071V61.0071Z",fill:"#3F3D56"}),h("path",{opacity:"0.2",d:"M28.9801 8.23311C29.2823 9.36092 29.1241 10.5626 28.5403 11.5737C27.9565 12.5849 26.995 13.3227 25.8672 13.6249C24.7394 13.9271 23.5377 13.7689 22.5265 13.1851C21.5154 12.6013 20.7775 11.6398 20.4753 10.512",fill:"black"}),h("path",{d:"M61.5071 80.1538L57.2066 81.3061C56.0822 78.752 54.0809 76.6846 51.5646 75.478C49.0482 74.2713 46.1832 74.005 43.4876 74.7273C40.792 75.4496 38.4439 77.1127 36.8681 79.4159C35.2922 81.719 34.5927 84.5101 34.896 87.2843L30.5953 88.4366C30.1377 88.5592 29.712 88.7793 29.3475 89.0818C28.9829 89.3843 28.6881 89.7621 28.4832 90.1892C28.2784 90.6164 28.1683 91.0827 28.1605 91.5564C28.1527 92.03 28.2474 92.4997 28.4382 92.9333L41.2451 122.045L68.0679 114.857L65.6335 83.0765C65.5966 82.5952 65.4541 82.1278 65.2161 81.7078C64.9781 81.2878 64.6505 80.9253 64.2565 80.6463C63.8626 80.3672 63.412 80.1785 62.9367 80.0934C62.4615 80.0082 61.9734 80.0289 61.5071 80.1538Z",fill:"#F9A109"})]});function B(){return h(o,{pb:"30px",children:s(f,{rounded:"18px",h:"120px",w:"85%",mt:"20px",bg:"brand.darkWine",justifyContent:"space-between",children:[h(O,{}),s(f,{my:"10px",justifyContent:"space-around",w:"60%",flexDirection:"column",children:[h(c,{fontSize:"md",color:"white",children:"Didn't find what you need?"}),h(H,{as:p,to:"createItem",rounded:"10px",bg:"white",width:"100px",py:"7px",mt:"10px",fontSize:"14px",fontWeight:"600",children:h(o,{children:" Add Item"})})]})]})})}function S(C){return h(m,{display:"flex",flexDir:"column",justifyContent:"end",alignItems:"center",height:"70%",w:"100%",children:s(L,a(a({height:"65%",viewBox:"0 0 245 203",fill:"none",xmlns:"http://www.w3.org/2000/svg",w:"100%"},C),{children:[s("g",{clipPath:"url(#clip0)",children:[h("path",{d:"M144.049 47.7691H145.161V17.512C145.161 15.2123 145.618 12.9351 146.504 10.8104C147.39 8.68578 148.689 6.75527 150.327 5.12913C151.965 3.50299 153.909 2.21306 156.049 1.33301C158.189 0.452949 160.483 -7.1947e-06 162.799 0H227.362C229.679 -7.1947e-06 231.972 0.452949 234.112 1.33301C236.252 2.21306 238.196 3.50299 239.834 5.12913C241.472 6.75527 242.771 8.68578 243.657 10.8104C244.544 12.9351 245 15.2123 245 17.512V183.505C245 185.804 244.544 188.082 243.657 190.206C242.771 192.331 241.472 194.261 239.834 195.888C238.196 197.514 236.252 198.804 234.112 199.684C231.972 200.564 229.679 201.017 227.362 201.017H162.799C160.483 201.017 158.189 200.564 156.049 199.684C153.909 198.804 151.965 197.514 150.327 195.888C148.689 194.261 147.39 192.331 146.504 190.206C145.618 188.082 145.161 185.804 145.161 183.505V69.3066H144.049V47.7691Z",fill:"#E6E6E6"}),h("path",{d:"M162.087 4.55597H170.515C170.127 5.49939 169.98 6.52297 170.084 7.53653C170.189 8.5501 170.543 9.52254 171.115 10.3682C171.688 11.2138 172.461 11.9068 173.367 12.3859C174.272 12.865 175.283 13.1157 176.309 13.1157H213.296C214.323 13.1157 215.333 12.865 216.239 12.3859C217.144 11.9068 217.917 11.2138 218.49 10.3682C219.062 9.52254 219.416 8.5501 219.521 7.53653C219.626 6.52297 219.478 5.49939 219.09 4.55597H226.962C228.691 4.55597 230.404 4.89423 232.002 5.55145C233.6 6.20866 235.052 7.17196 236.275 8.38634C237.499 9.60072 238.469 11.0424 239.131 12.6291C239.793 14.2157 240.133 15.9163 240.133 17.6337V183.383C240.133 185.1 239.793 186.801 239.131 188.387C238.469 189.974 237.499 191.416 236.275 192.63C235.052 193.845 233.6 194.808 232.002 195.465C230.404 196.122 228.691 196.461 226.962 196.461H162.087C160.358 196.461 158.645 196.122 157.047 195.465C155.449 194.808 153.997 193.845 152.774 192.63C151.551 191.416 150.58 189.974 149.918 188.387C149.256 186.801 148.916 185.1 148.916 183.383V17.6337C148.916 15.9163 149.256 14.2157 149.918 12.6291C150.58 11.0424 151.551 9.60072 152.774 8.38634C153.997 7.17196 155.449 6.20866 157.047 5.55145C158.645 4.89423 160.358 4.55597 162.087 4.55597V4.55597Z",fill:"white"}),h("path",{d:"M213.638 38.251H217.511C217.647 38.251 217.778 38.3047 217.874 38.4003C217.971 38.4959 218.025 38.6256 218.025 38.7609V40.4489C218.025 40.5842 217.971 40.7138 217.874 40.8095C217.778 40.9051 217.647 40.9588 217.511 40.9588H216.869V43.4881H214.28V40.9588H213.638C213.501 40.9588 213.371 40.9051 213.275 40.8095C213.178 40.7138 213.124 40.5842 213.124 40.4489V38.7609C213.124 38.6256 213.178 38.4959 213.275 38.4003C213.371 38.3047 213.501 38.251 213.638 38.251V38.251Z",fill:"#E6E6E6"}),h("path",{d:"M209.758 53.7003C212.13 50.2538 213.343 46.1503 213.222 41.9776C213.22 41.8813 213.252 41.7872 213.311 41.7114C213.371 41.6355 213.456 41.5825 213.55 41.5614V40.832H217.641V41.5513H217.697C217.809 41.5514 217.916 41.5955 217.994 41.6737C218.073 41.752 218.117 41.8581 218.117 41.9686C218.117 41.9787 218.116 41.9888 218.116 41.9989C217.793 46.4595 218.882 50.4597 221.38 53.9994C221.524 54.2029 221.598 54.4471 221.59 54.6955L221.142 68.4338C221.132 68.7402 221.002 69.0307 220.781 69.2445C220.56 69.4584 220.264 69.5792 219.955 69.5816H210.702C210.39 69.5791 210.091 69.4556 209.869 69.2374C209.647 69.0192 209.519 68.7236 209.514 68.4135L209.341 55.0748C209.336 54.5852 209.482 54.1057 209.758 53.7003Z",fill:"#E6E6E6"}),h("path",{d:"M211.223 58.2636H219.277C219.396 58.2636 219.514 58.2892 219.622 58.3386C219.73 58.3881 219.827 58.4602 219.904 58.55C219.982 58.6399 220.039 58.7453 220.072 58.8591C220.104 58.973 220.112 59.0925 220.094 59.2094L218.877 67.0641H211.888L210.41 59.2359C210.388 59.1173 210.392 58.9953 210.422 58.8786C210.453 58.7618 210.509 58.6531 210.586 58.5603C210.664 58.4675 210.761 58.3928 210.871 58.3415C210.981 58.2902 211.101 58.2636 211.223 58.2636V58.2636Z",fill:"white"}),h("path",{d:"M170.519 79.4058H174.392C174.528 79.4058 174.659 79.4595 174.755 79.5552C174.852 79.6508 174.906 79.7805 174.906 79.9157V81.6038C174.906 81.739 174.852 81.8687 174.755 81.9643C174.659 82.0599 174.528 82.1136 174.392 82.1136H173.75V84.6429H171.161V82.1136H170.519C170.383 82.1136 170.252 82.0599 170.156 81.9643C170.059 81.8687 170.005 81.739 170.005 81.6038V79.9157C170.005 79.7805 170.059 79.6508 170.156 79.5552C170.252 79.4595 170.383 79.4058 170.519 79.4058Z",fill:"#E6E6E6"}),h("path",{d:"M166.639 94.8548C169.011 91.4083 170.224 87.3048 170.104 83.1321C170.101 83.0358 170.133 82.9417 170.193 82.8659C170.252 82.79 170.337 82.737 170.431 82.7159V81.9865H174.522V82.7058H174.579C174.634 82.7059 174.688 82.7167 174.739 82.7377C174.79 82.7587 174.836 82.7895 174.875 82.8282C174.914 82.867 174.945 82.913 174.966 82.9636C174.987 83.0142 174.998 83.0684 174.998 83.1231C174.998 83.1332 174.997 83.1433 174.997 83.1534C174.674 87.614 175.763 91.6142 178.262 95.1539C178.405 95.3573 178.479 95.6016 178.471 95.85L178.024 109.588C178.013 109.895 177.883 110.185 177.662 110.399C177.441 110.613 177.145 110.734 176.836 110.736H167.583C167.271 110.734 166.972 110.61 166.75 110.392C166.528 110.174 166.4 109.878 166.395 109.568L166.222 96.2293C166.217 95.7397 166.363 95.2602 166.639 94.8548V94.8548Z",fill:"#E6E6E6"}),h("path",{d:"M168.104 99.4183H176.158C176.277 99.4183 176.395 99.4439 176.503 99.4933C176.612 99.5427 176.708 99.6149 176.785 99.7047C176.863 99.7945 176.92 99.9 176.953 100.014C176.986 100.128 176.993 100.247 176.975 100.364L175.758 108.219H168.769L167.291 100.391C167.269 100.272 167.273 100.15 167.303 100.033C167.334 99.9165 167.39 99.8078 167.468 99.715C167.545 99.6221 167.642 99.5474 167.752 99.4961C167.862 99.4449 167.982 99.4183 168.104 99.4183H168.104Z",fill:"white"}),h("path",{d:"M219.083 137.586H220.921C220.985 137.586 221.047 137.612 221.093 137.657C221.139 137.703 221.164 137.764 221.164 137.828V138.629C221.164 138.693 221.139 138.755 221.093 138.8C221.047 138.845 220.985 138.871 220.921 138.871H220.616V140.071H219.388V138.871H219.083C219.019 138.871 218.957 138.845 218.911 138.8C218.865 138.755 218.84 138.693 218.84 138.629V137.828C218.84 137.764 218.865 137.703 218.911 137.657C218.957 137.612 219.019 137.586 219.083 137.586Z",fill:"#E6E6E6"}),h("path",{d:"M217.243 144.915C218.368 143.28 218.943 141.333 218.886 139.354C218.885 139.308 218.9 139.264 218.928 139.228C218.957 139.192 218.997 139.167 219.042 139.157V138.811H220.982V139.152H221.009C221.035 139.152 221.061 139.157 221.085 139.167C221.109 139.177 221.131 139.191 221.15 139.21C221.168 139.228 221.183 139.25 221.193 139.274C221.203 139.298 221.208 139.324 221.208 139.35C221.208 139.354 221.208 139.359 221.207 139.364C221.028 141.384 221.577 143.401 222.756 145.056C222.824 145.153 222.859 145.269 222.855 145.387L222.643 151.903C222.638 152.049 222.576 152.186 222.472 152.288C222.367 152.389 222.226 152.447 222.08 152.448H217.691C217.542 152.447 217.401 152.388 217.295 152.285C217.19 152.181 217.13 152.041 217.127 151.894L217.045 145.567C217.043 145.334 217.112 145.107 217.243 144.915V144.915Z",fill:"#E6E6E6"}),h("path",{d:"M217.875 147.31H222.062V149.389H217.875V147.31Z",fill:"white"}),h("path",{d:"M210.53 137.586H212.368C212.432 137.586 212.494 137.612 212.54 137.657C212.586 137.703 212.611 137.764 212.611 137.828V138.629C212.611 138.693 212.586 138.755 212.54 138.8C212.494 138.845 212.432 138.871 212.368 138.871H212.063V140.071H210.835V138.871H210.53C210.466 138.871 210.404 138.845 210.358 138.8C210.312 138.755 210.287 138.693 210.287 138.629V137.828C210.287 137.764 210.312 137.703 210.358 137.657C210.404 137.612 210.466 137.586 210.53 137.586Z",fill:"#E6E6E6"}),h("path",{d:"M208.69 144.915C209.815 143.28 210.39 141.333 210.333 139.354C210.332 139.308 210.347 139.264 210.376 139.228C210.404 139.192 210.444 139.167 210.489 139.157V138.811H212.429V139.152H212.456C212.482 139.152 212.508 139.157 212.532 139.167C212.556 139.177 212.578 139.191 212.597 139.21C212.615 139.228 212.63 139.25 212.64 139.274C212.65 139.298 212.655 139.324 212.655 139.35C212.655 139.354 212.655 139.359 212.654 139.364C212.475 141.384 213.024 143.401 214.203 145.056C214.271 145.153 214.306 145.269 214.302 145.387L214.09 151.903C214.085 152.049 214.024 152.186 213.919 152.288C213.814 152.389 213.673 152.447 213.527 152.448H209.138C208.99 152.447 208.848 152.388 208.742 152.285C208.637 152.181 208.577 152.041 208.574 151.894L208.492 145.567C208.49 145.334 208.559 145.107 208.69 144.915Z",fill:"#E6E6E6"}),h("path",{d:"M209.322 147.31H213.51V149.389H209.322V147.31Z",fill:"white"}),h("path",{d:"M201.977 137.586H203.815C203.879 137.586 203.941 137.612 203.987 137.657C204.033 137.703 204.058 137.764 204.058 137.828V138.629C204.058 138.693 204.033 138.755 203.987 138.8C203.941 138.845 203.879 138.871 203.815 138.871H203.51V140.071H202.282V138.871H201.977C201.913 138.871 201.851 138.845 201.805 138.8C201.759 138.755 201.734 138.693 201.734 138.629V137.828C201.734 137.764 201.759 137.703 201.805 137.657C201.851 137.612 201.913 137.586 201.977 137.586Z",fill:"#E6E6E6"}),h("path",{d:"M200.137 144.915C201.262 143.28 201.838 141.333 201.78 139.354C201.779 139.308 201.794 139.264 201.823 139.228C201.851 139.192 201.891 139.167 201.936 139.157V138.811H203.876V139.152H203.903C203.929 139.152 203.955 139.157 203.979 139.167C204.003 139.177 204.025 139.191 204.044 139.21C204.062 139.228 204.077 139.25 204.087 139.274C204.097 139.298 204.102 139.324 204.102 139.35C204.102 139.354 204.102 139.359 204.101 139.364C203.922 141.384 204.471 143.401 205.65 145.056C205.718 145.153 205.753 145.269 205.749 145.387L205.537 151.903C205.532 152.049 205.471 152.186 205.366 152.288C205.261 152.389 205.12 152.447 204.974 152.448H200.585C200.437 152.447 200.295 152.388 200.19 152.285C200.084 152.181 200.024 152.041 200.021 151.894L199.939 145.567C199.937 145.334 200.006 145.107 200.137 144.915Z",fill:"#E6E6E6"}),h("path",{d:"M200.769 147.31H204.957V149.389H200.769V147.31Z",fill:"white"}),h("path",{d:"M177.248 121.665H181.121C181.189 121.665 181.255 121.679 181.318 121.704C181.38 121.73 181.437 121.767 181.484 121.815C181.532 121.862 181.57 121.918 181.596 121.98C181.621 122.042 181.635 122.108 181.635 122.175V123.863C181.635 123.999 181.581 124.128 181.484 124.224C181.388 124.319 181.257 124.373 181.121 124.373H180.479V126.902H177.89V124.373H177.248C177.112 124.373 176.981 124.319 176.885 124.224C176.788 124.128 176.734 123.999 176.734 123.863V122.175C176.734 122.108 176.748 122.042 176.773 121.98C176.799 121.918 176.837 121.862 176.885 121.815C176.932 121.767 176.989 121.73 177.051 121.704C177.114 121.679 177.18 121.665 177.248 121.665V121.665Z",fill:"#E6E6E6"}),h("path",{d:"M173.368 137.114C175.74 133.668 176.953 129.564 176.833 125.392C176.83 125.295 176.862 125.201 176.922 125.125C176.981 125.05 177.066 124.997 177.16 124.975V124.246H181.251V124.965H181.308C181.363 124.965 181.417 124.976 181.468 124.997C181.519 125.018 181.565 125.049 181.604 125.088C181.643 125.127 181.674 125.173 181.695 125.223C181.716 125.274 181.727 125.328 181.727 125.383C181.727 125.393 181.727 125.403 181.726 125.413C181.403 129.874 182.492 133.874 184.991 137.413C185.134 137.617 185.208 137.861 185.2 138.11L184.753 151.848C184.742 152.154 184.612 152.445 184.391 152.659C184.17 152.872 183.874 152.993 183.565 152.996H174.312C174 152.993 173.701 152.87 173.479 152.651C173.257 152.433 173.13 152.138 173.124 151.828L172.951 138.489C172.946 137.999 173.092 137.52 173.368 137.114Z",fill:"#E6E6E6"}),h("path",{d:"M174.833 141.678H182.887C183.006 141.678 183.124 141.703 183.232 141.753C183.341 141.802 183.437 141.874 183.514 141.964C183.592 142.054 183.649 142.16 183.682 142.273C183.715 142.387 183.722 142.507 183.704 142.624L182.487 150.478H175.498L174.02 142.65C173.998 142.532 174.002 142.41 174.032 142.293C174.063 142.176 174.119 142.067 174.197 141.975C174.274 141.882 174.371 141.807 174.481 141.756C174.591 141.704 174.711 141.678 174.833 141.678V141.678Z",fill:"white"}),h("path",{d:"M175.133 71.35H198.223C196.608 62.6845 196.98 52.2206 198.223 40.9673H175.133C176.343 52.2206 176.705 62.6845 175.133 71.35Z",fill:"#E6E6E6"}),h("path",{d:"M186.539 60.8541C183.466 60.8541 180.975 58.3809 180.975 55.33C180.975 52.2791 183.466 49.8059 186.539 49.8059C189.612 49.8059 192.103 52.2791 192.103 55.33C192.103 58.3809 189.612 60.8541 186.539 60.8541Z",fill:"white"}),h("path",{d:"M196.275 111.676H219.365C217.751 103.011 218.122 92.5467 219.365 81.2935H196.275C197.485 92.5468 197.847 103.011 196.275 111.676Z",fill:"#E6E6E6"}),h("path",{d:"M207.681 101.18C204.608 101.18 202.117 98.7071 202.117 95.6563C202.117 92.6054 204.608 90.1321 207.681 90.1321C210.754 90.1321 213.245 92.6054 213.245 95.6563C213.245 98.7071 210.754 101.18 207.681 101.18Z",fill:"white"}),h("path",{d:"M162.058 73.2836H185.148C183.534 64.6181 183.905 54.1542 185.148 42.9009H162.058C163.268 54.1542 163.63 64.6181 162.058 73.2836Z",fill:"#E6E6E6"}),h("path",{d:"M173.464 62.7878C170.391 62.7878 167.9 60.3146 167.9 57.2637C167.9 54.2128 170.391 51.7396 173.464 51.7396C176.537 51.7396 179.028 54.2128 179.028 57.2637C179.028 60.3146 176.537 62.7878 173.464 62.7878Z",fill:"white"}),h("path",{d:"M162.058 71.9026H185.148C183.534 63.2371 183.905 52.7732 185.148 41.52H162.058C163.268 52.7732 163.63 63.2371 162.058 71.9026Z",fill:"#E6E6E6"}),h("path",{d:"M173.464 61.4066C170.391 61.4066 167.9 58.9333 167.9 55.8825C167.9 52.8316 170.391 50.3583 173.464 50.3583C176.537 50.3583 179.028 52.8316 179.028 55.8825C179.028 58.9333 176.537 61.4066 173.464 61.4066Z",fill:"white"}),h("path",{d:"M162.058 73.2836H185.148C183.534 64.6181 183.905 54.1542 185.148 42.9009H162.058C163.268 54.1542 163.63 64.6181 162.058 73.2836Z",fill:"#E6E6E6"}),h("path",{d:"M173.464 62.7878C170.391 62.7878 167.9 60.3146 167.9 57.2637C167.9 54.2128 170.391 51.7396 173.464 51.7396C176.537 51.7396 179.028 54.2128 179.028 57.2637C179.028 60.3146 176.537 62.7878 173.464 62.7878Z",fill:"white"}),h("path",{d:"M156.773 69.6929H232.44V77.9791H156.773V69.6929Z",fill:"#E6E6E6"}),h("path",{d:"M156.773 110.848H232.44V119.134H156.773V110.848Z",fill:"#E6E6E6"}),h("path",{d:"M156.773 152.002H232.44V160.288H156.773V152.002Z",fill:"#E6E6E6"}),h("path",{d:"M25.1471 185.619L43.9979 172.381C37.6402 166.231 31.8577 157.475 26.3276 147.575L7.47673 160.814C15.0093 169.307 21.3902 177.643 25.1471 185.619Z",fill:"#F9A109"}),h("path",{d:"M25.142 171.525C22.0692 171.525 19.5782 169.051 19.5782 166.001C19.5782 162.95 22.0692 160.476 25.142 160.476C28.2147 160.476 30.7057 162.95 30.7057 166.001C30.7057 169.051 28.2147 171.525 25.142 171.525Z",fill:"white"}),h("path",{d:"M116.082 125.21H118.151C118.224 125.21 118.294 125.239 118.345 125.29C118.397 125.341 118.425 125.411 118.425 125.483V126.385C118.425 126.42 118.418 126.456 118.405 126.489C118.391 126.522 118.371 126.552 118.345 126.577C118.32 126.602 118.289 126.623 118.256 126.636C118.223 126.65 118.187 126.657 118.151 126.657H117.808V128.008H116.425V126.657H116.082C116.009 126.657 115.939 126.628 115.888 126.577C115.836 126.526 115.807 126.457 115.807 126.385V125.483C115.807 125.411 115.836 125.341 115.888 125.29C115.939 125.239 116.009 125.21 116.082 125.21V125.21Z",fill:"#E6E6E6"}),h("path",{d:"M114.009 133.463C115.277 131.622 115.924 129.43 115.86 127.201C115.859 127.15 115.876 127.099 115.908 127.059C115.94 127.018 115.985 126.99 116.035 126.979V126.589H118.221V126.973H118.251C118.28 126.973 118.309 126.979 118.337 126.99C118.364 127.002 118.388 127.018 118.409 127.039C118.43 127.059 118.446 127.084 118.458 127.111C118.469 127.138 118.475 127.167 118.475 127.196C118.475 127.202 118.474 127.207 118.474 127.212C118.272 129.487 118.89 131.759 120.218 133.623C120.295 133.732 120.334 133.862 120.33 133.995L120.091 141.334C120.085 141.498 120.016 141.653 119.898 141.767C119.78 141.882 119.622 141.946 119.457 141.948H114.514C114.347 141.946 114.187 141.88 114.068 141.764C113.95 141.647 113.882 141.489 113.879 141.324L113.787 134.198C113.784 133.936 113.862 133.68 114.009 133.463V133.463Z",fill:"#F9A109"}),h("path",{opacity:"0.2",d:"M116.513 125.504C116.513 125.66 116.576 125.809 116.687 125.92C116.798 126.03 116.948 126.092 117.105 126.092C117.262 126.092 117.413 126.03 117.524 125.92C117.635 125.809 117.697 125.66 117.697 125.504",fill:"black"}),h("path",{d:"M114.972 134.877H119.145V137.64H114.972V134.877Z",fill:"white"}),h("path",{d:"M50.5996 153.881H54.473C54.6092 153.881 54.7399 153.935 54.8362 154.031C54.9325 154.126 54.9866 154.256 54.9866 154.391V156.079C54.9866 156.215 54.9325 156.344 54.8362 156.44C54.7399 156.536 54.6092 156.589 54.473 156.589H53.8311V159.119H51.2415V156.589H50.5996C50.4634 156.589 50.3328 156.536 50.2365 156.44C50.1401 156.344 50.086 156.215 50.086 156.079V154.391C50.086 154.256 50.1401 154.126 50.2365 154.031C50.3328 153.935 50.4634 153.881 50.5996 153.881V153.881Z",fill:"#E6E6E6"}),h("path",{d:"M46.7199 169.331C49.0921 165.884 50.3048 161.781 50.1843 157.608C50.1822 157.512 50.2136 157.417 50.2734 157.342C50.3332 157.266 50.4175 157.213 50.5122 157.192V156.462H54.603V157.182H54.6594C54.7145 157.182 54.7691 157.192 54.82 157.213C54.8709 157.234 54.9171 157.265 54.9561 157.304C54.995 157.343 55.0259 157.389 55.0469 157.439C55.0679 157.49 55.0787 157.544 55.0786 157.599C55.0786 157.609 55.0782 157.619 55.0775 157.629C54.7552 162.09 55.8435 166.09 58.3423 169.63C58.4861 169.833 58.5596 170.077 58.5517 170.326L58.1044 184.064C58.0936 184.37 57.9641 184.661 57.7428 184.875C57.5215 185.089 57.2256 185.209 56.9168 185.212H47.6638C47.3515 185.209 47.0525 185.086 46.8306 184.868C46.6086 184.649 46.4812 184.354 46.4755 184.044L46.3032 170.705C46.2981 170.215 46.4434 169.736 46.7199 169.331V169.331Z",fill:"#F9A109"}),h("path",{opacity:"0.2",d:"M51.4071 154.431C51.4071 154.723 51.5239 155.003 51.7317 155.209C51.9394 155.416 52.2212 155.531 52.5151 155.531C52.8089 155.531 53.0907 155.416 53.2985 155.209C53.5063 155.003 53.623 154.723 53.623 154.431",fill:"black"}),h("path",{d:"M48.1845 173.894H56.2385C56.3578 173.894 56.4756 173.919 56.5839 173.969C56.6922 174.018 56.7885 174.09 56.8661 174.18C56.9437 174.27 57.0009 174.376 57.0336 174.489C57.0664 174.603 57.0739 174.723 57.0558 174.84L55.8387 182.694H48.8501L47.3718 174.866C47.3494 174.748 47.3536 174.626 47.3841 174.509C47.4146 174.392 47.4706 174.283 47.5482 174.191C47.6258 174.098 47.7231 174.023 47.8331 173.972C47.943 173.92 48.063 173.894 48.1845 173.894V173.894Z",fill:"white"}),h("path",{d:"M61.6512 185.597H84.7407C83.1264 176.932 83.4978 166.468 84.7407 155.215H61.6512C62.861 166.468 63.2225 176.932 61.6512 185.597Z",fill:"#F9A109"}),h("path",{d:"M73.0568 175.101C69.984 175.101 67.493 172.628 67.493 169.577C67.493 166.526 69.984 164.053 73.0568 164.053C76.1295 164.053 78.6205 166.526 78.6205 169.577C78.6205 172.628 76.1295 175.101 73.0568 175.101Z",fill:"white"}),h("path",{d:"M156.093 89.9788L150.909 89.5109L147.611 81.5574L153.501 78.2822L156.093 89.9788Z",fill:"#FFB8B8"}),h("path",{d:"M108.523 111.814C108.35 111.387 108.283 110.926 108.325 110.468C108.368 110.01 108.519 109.568 108.767 109.18C109.015 108.792 109.352 108.467 109.751 108.234C110.15 108 110.599 107.864 111.061 107.837L119.109 107.361L120.294 111.273L112.009 113.532C111.317 113.721 110.579 113.65 109.936 113.333C109.293 113.016 108.79 112.475 108.523 111.814V111.814Z",fill:"#FFB8B8"}),h("path",{d:"M117.164 113.598L117.253 106.256L135.129 103.424L148.901 87.7422C149.618 86.9263 150.608 86.3958 151.688 86.2492C152.768 86.1025 153.865 86.3495 154.776 86.9445C155.328 87.3048 155.793 87.7809 156.138 88.3392C156.484 88.8975 156.702 89.5245 156.777 90.1757C156.852 90.8269 156.782 91.4864 156.572 92.1078C156.362 92.7292 156.017 93.2971 155.561 93.7716L144.2 107.654L117.164 113.598Z",fill:"#575A89"}),h("path",{d:"M160.098 196.184H155.386L143.698 143.716L131.589 159.925L124.521 195.014H120.045L120.987 157.351L136.773 117.115H152.323C156.573 124.751 159.906 132.622 156.093 140.742L160.098 196.184Z",fill:"#2F2E41"}),h("path",{d:"M127.41 199.371C127.462 199.536 127.478 199.711 127.457 199.883C127.435 200.055 127.378 200.221 127.287 200.369C127.196 200.517 127.075 200.645 126.93 200.743C126.786 200.84 126.623 200.907 126.451 200.937L114.92 202.969C114.464 203.052 113.994 202.966 113.598 202.728C113.201 202.49 112.906 202.117 112.768 201.678V201.678C112.633 201.258 112.652 200.805 112.821 200.398C112.989 199.991 113.297 199.656 113.69 199.452C116.225 198.159 118.407 196.276 120.049 193.963C121.316 195.134 122.733 195.024 124.237 194.161L125.832 194.359L127.41 199.371Z",fill:"#2F2E41"}),h("path",{d:"M162.28 199.371C162.332 199.536 162.348 199.711 162.327 199.883C162.306 200.055 162.248 200.221 162.157 200.369C162.066 200.517 161.945 200.645 161.801 200.743C161.657 200.84 161.493 200.907 161.321 200.937L149.79 202.969C149.335 203.052 148.864 202.966 148.468 202.728C148.071 202.49 147.776 202.117 147.638 201.678V201.678C147.504 201.258 147.522 200.805 147.691 200.398C147.86 199.991 148.167 199.656 148.56 199.452C151.096 198.159 153.278 196.276 154.919 193.963C156.187 195.134 157.603 195.024 159.107 194.161L160.703 194.359L162.28 199.371Z",fill:"#2F2E41"}),h("path",{d:"M147.493 84.4814C143.85 84.4814 140.896 81.5488 140.896 77.9313C140.896 74.3138 143.85 71.3812 147.493 71.3812C151.137 71.3812 154.09 74.3138 154.09 77.9313C154.09 81.5488 151.137 84.4814 147.493 84.4814Z",fill:"#FFB8B8"}),h("path",{d:"M153.383 118.869L136.184 118.402L141.235 102.617C138.096 97.621 141.255 92.6297 145.726 87.6395L149.26 85.3001L154.915 84.8323C157.363 87.4333 158.703 90.8741 158.653 94.4339C158.541 102.057 157.182 110.355 153.383 118.869Z",fill:"#575A89"}),h("path",{d:"M113.867 129.494C113.539 129.169 113.294 128.771 113.152 128.334C113.009 127.896 112.974 127.431 113.048 126.977C113.122 126.523 113.304 126.094 113.578 125.723C113.852 125.353 114.211 125.052 114.625 124.846L121.836 121.265L124.475 124.399L117.753 129.712C117.192 130.156 116.485 130.379 115.768 130.339C115.051 130.299 114.374 129.998 113.867 129.494V129.494Z",fill:"#FFB8B8"}),h("path",{d:"M122.519 127.759L119.691 120.975L135.004 111.389L141.452 91.592C141.788 90.562 142.488 89.6876 143.423 89.1308C144.358 88.574 145.464 88.3726 146.537 88.5639V88.5639C147.187 88.6797 147.803 88.9357 148.342 89.314C148.882 89.6922 149.33 90.1835 149.657 90.7529C149.984 91.3223 150.181 91.9561 150.234 92.6094C150.287 93.2627 150.195 93.9196 149.964 94.5337L145.019 111.735L122.519 127.759Z",fill:"#575A89"}),h("path",{d:"M158.331 75.358C158.331 77.9067 156.664 81.8537 154.561 83.5456C153.147 84.684 151.277 84.6361 150.556 83.0778C149.817 81.4792 147.267 77.7217 142.781 75.358C136.8 72.2071 144.902 66.8163 150.556 67.6383C154.805 68.256 158.331 71.0945 158.331 75.358Z",fill:"#2F2E41"}),h("path",{d:"M154.326 71.849C151.723 71.849 149.614 69.7543 149.614 67.1703C149.614 64.5864 151.723 62.4917 154.326 62.4917C156.928 62.4917 159.038 64.5864 159.038 67.1703C159.038 69.7543 156.928 71.849 154.326 71.849Z",fill:"#2F2E41"}),h("path",{d:"M148.907 65.533C148.907 64.3535 149.357 63.2177 150.165 62.3533C150.973 61.489 152.081 60.9599 153.266 60.8721C153.148 60.8634 153.031 60.8544 152.912 60.8544C151.662 60.8544 150.464 61.3473 149.58 62.2247C148.696 63.1021 148.2 64.2922 148.2 65.533C148.2 66.7739 148.696 67.9639 149.58 68.8413C150.464 69.7187 151.662 70.2117 152.912 70.2117C153.031 70.2117 153.148 70.2026 153.266 70.1939C152.081 70.1062 150.973 69.577 150.165 68.7127C149.357 67.8483 148.907 66.7125 148.907 65.533Z",fill:"#2F2E41"}),h("path",{d:"M147.375 80.2706C146.79 80.2706 146.315 79.6422 146.315 78.867C146.315 78.0918 146.79 77.4634 147.375 77.4634C147.961 77.4634 148.436 78.0918 148.436 78.867C148.436 79.6422 147.961 80.2706 147.375 80.2706Z",fill:"#FFB8B8"}),h("path",{d:"M13.8637 187.604H87.218L102.752 114.696H116.008V111.424H100.081L84.5473 184.332H13.8637V187.604Z",fill:"#3F3D56"}),h("path",{d:"M76.4684 200.924C72.5689 200.924 69.4077 197.785 69.4077 193.913C69.4077 190.041 72.5689 186.903 76.4684 186.903C80.3679 186.903 83.5291 190.041 83.5291 193.913C83.5291 197.785 80.3679 200.924 76.4684 200.924Z",fill:"#3F3D56"}),h("path",{d:"M23.7486 200.924C19.8491 200.924 16.6879 197.785 16.6879 193.913C16.6879 190.041 19.8491 186.903 23.7486 186.903C27.6481 186.903 30.8093 190.041 30.8093 193.913C30.8093 197.785 27.6481 200.924 23.7486 200.924Z",fill:"#3F3D56"}),h("path",{d:"M15.2011 186.063H86.5707L99.1632 124.276H3.38384C2.89511 124.277 2.4122 124.382 1.9683 124.585C1.52441 124.788 1.13005 125.084 0.812395 125.453C0.494741 125.821 0.261321 126.254 0.128166 126.721C-0.00498878 127.188 -0.0347254 127.678 0.0410378 128.157L11.8588 183.225C11.9808 184.018 12.3853 184.74 12.9988 185.261C13.6123 185.782 14.3939 186.067 15.2011 186.063V186.063ZM85.7957 185.129H15.2011C14.6185 185.131 14.0544 184.925 13.6117 184.549C13.169 184.173 12.8771 183.652 12.7892 183.08L0.971429 128.012C0.916633 127.666 0.937994 127.313 1.03404 126.975C1.13008 126.638 1.29855 126.326 1.52781 126.06C1.75707 125.794 2.04171 125.58 2.36211 125.434C2.68252 125.287 3.03109 125.211 3.38384 125.211H98.0205L85.7957 185.129Z",fill:"#3F3D56"}),h("path",{d:"M72.6963 185.865L80.943 124.82L80.0143 124.667L71.7676 185.713L72.6963 185.865Z",fill:"#3F3D56"}),h("path",{d:"M26.8419 185.397L27.7714 185.247L19.7655 124.669L18.836 124.818L26.8419 185.397Z",fill:"#3F3D56"}),h("path",{d:"M48.6891 124.744H49.6305V185.789H48.6891V124.744Z",fill:"#3F3D56"}),h("path",{d:"M94.3543 141.101L94.3566 142.036L3.22793 142.255L3.22565 141.32L94.3543 141.101Z",fill:"#3F3D56"}),h("path",{d:"M9.65636 169.976L89.7148 170.519L89.7084 171.454L9.64992 170.911L9.65636 169.976Z",fill:"#3F3D56"}),h("path",{d:"M114.596 115.397C111.736 115.397 109.418 114.141 109.418 112.592C109.418 111.044 111.736 109.788 114.596 109.788C117.456 109.788 119.774 111.044 119.774 112.592C119.774 114.141 117.456 115.397 114.596 115.397Z",fill:"#3F3D56"})]}),h("defs",{children:h("clipPath",{id:"clip0",children:h("rect",{width:245,height:203,fill:"white",transform:"matrix(-1 0 0 1 245 0)"})})})]}))})}function A(){return s(m,{display:"flex",alignItems:"center",justifyContent:"end",flexDir:"column",h:"320px",w:"100%",bg:"brand.lightWine",children:[h(c,{fontWeight:"600",children:" No items"}),h(S,{})]})}function I(){const{mutate:C}=function(){const C=y();return j(F,{onSuccess:()=>{x.success("List has been successfully created",{duration:3e3,position:"bottom-center"}),C.invalidateQueries("lists")},onMutate:async C=>{}})}(),[t,i]=V({defaultValue:""}),e=d((({list:C})=>C)),l=!e.length&&!0;return h(o,{maxH:"100% ",h:"100px",bg:"white",children:s(b,{isReadOnly:!!l,display:"flex",w:"80%",height:"50px",rounded:"8px",border:"2px",borderColor:l?"brand.darkGray":"brand.lightOrange",children:[h(E,{p:0,placeholder:"Enter a name",fontSize:"12px",ml:"15px",h:"100%",w:"full",maxLength:18,variant:"unstyled",value:t,border:1,onChange:C=>i(C.target.value)}),h(M,{onClick:()=>{C({name:t,list:e})},color:"white",bg:l?"brand.darkGray":"brand.lightOrange",w:"30%",h:"100%",children:"Save"})]})})}const W=({item:C,amount:t})=>{const[i,e]=Z(),l=d(r);return s(f,{justifyContent:"space-between",alignItems:"center",w:"100%",height:"25px",mt:"5px",children:[h(c,{w:"120px",fontSize:"14px",fontWeight:"500",children:C.name}),s(f,{justifyContent:"space-between",alignItems:"center",bg:i&&"white",rounded:"15px",width:"60%",height:"45px",color:"brand.lightOrange",onMouseEnter:e.toggle,onMouseLeave:e.off,children:[h(u,{visibility:!i&&"hidden",onClick:()=>l.removeItem(C),rounded:"10px","aria-label":"Search database",icon:h(v,{}),bg:"brand.lightOrange",color:"white",h:"44px",fontSize:"18px"}),h(u,{visibility:!i&&"hidden",onClick:()=>l.reduceItemAmount(C),bg:"transparent",icon:h(k,{})}),h(c,{rounded:"50px",p:"5px",border:"2px",bg:"transprent",fontSize:"15px",children:s(o,{w:"max-content",children:[" ",t," pcs"]})}),h(u,{visibility:!i&&"hidden",onClick:()=>l.insertItem(C),bg:"transparent",icon:h(D,{})})]})]},C.id)},z=({name:C,category:t})=>s(m,{width:"100%",mt:"25px",children:[h(w,{color:"brand.darkGray",fontWeight:"600",size:"xs",children:C}),h(g,{mt:"10px",spacing:"30px",align:"flex-start",children:t.map((({item:C,amount:t})=>h(W,{item:C,amount:t},C.id)))})]}),P=()=>{const C=d(n);return Object.keys(C).length?h(o,{children:s(m,{minH:"320px",w:"100%",children:[h(w,{fontWeight:"500",children:"Shopping list"}),h(m,{overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"},"&":{msOverflowStyle:"none",scrollbarWidth:"none"}},h:"250px",maxH:"100%",children:Object.keys(C).map((t=>h(z,{name:t,category:C[t]},t)))})]})}):s(o,{children:[h(m,{w:"100%",children:h(A,{})})," "]})};function G(){return s(m,{w:"100%",bg:"brand.lightWine",children:[h(B,{}),h(P,{}),h(I,{})]})}export default G;