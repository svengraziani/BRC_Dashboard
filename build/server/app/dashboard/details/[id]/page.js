(()=>{var e={};e.id=431,e.ids=[431],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1254:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>f,tree:()=>d});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["dashboard",{children:["details",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1437)),"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.jsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.jsx"],c="/dashboard/details/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/details/[id]/page",pathname:"/dashboard/details/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9193:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},7891:(e,t,r)=>{Promise.resolve().then(r.bind(r,5279))},7357:(e,t,r)=>{Promise.resolve().then(r.bind(r,2896))},5532:(e,t,r)=>{"use strict";t.FT=o;var s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var o=a?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(s,n,o):s[n]=e[n]}return s.default=e,r&&r.set(e,s),s}(r(3729)),a=r(5344);let n=["as","disabled"];function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function o({tagName:e,disabled:t,href:r,target:s,rel:a,role:n,onClick:i,tabIndex:o=0,type:l}){e||(e=null!=r||null!=s||null!=a?"a":"button");let d={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},d];let u=s=>{var a;if(!t&&("a"!==e||(a=r)&&"#"!==a.trim())||s.preventDefault(),t){s.stopPropagation();return}null==i||i(s)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?s:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}s.forwardRef((e,t)=>{let{as:r,disabled:s}=e,i=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n),[l,{tagName:d}]=o(Object.assign({tagName:r,disabled:s},i));return(0,a.jsx)(d,Object.assign({},i,l,{ref:t}))}).displayName="Button"},8428:(e,t,r)=>{"use strict";var s=r(4767);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},8154:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(4132),a=r.n(s),n=r(3729),i=r(5532),o=r(136),l=r(5344);let d=n.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:s,active:n=!1,disabled:d=!1,className:u,...c},p)=>{let f=(0,o.vE)(t,"btn"),[m,{tagName:x}]=(0,i.FT)({tagName:e,disabled:d,...c});return(0,l.jsx)(x,{...m,...c,ref:p,disabled:d,className:a()(u,f,n&&"active",r&&`${f}-${r}`,s&&`${f}-${s}`,c.href&&d&&"disabled")})});d.displayName="Button";let u=d},136:(e,t,r)=>{"use strict";r.d(t,{SC:()=>u,pi:()=>l,vE:()=>o,zG:()=>d});var s=r(3729);r(5344);let a=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:n,Provider:i}=a;function o(e,t){let{prefixes:r}=(0,s.useContext)(a);return e||r[t]||t}function l(){let{breakpoints:e}=(0,s.useContext)(a);return e}function d(){let{minBreakpoint:e}=(0,s.useContext)(a);return e}function u(){let{dir:e}=(0,s.useContext)(a);return"rtl"===e}},5279:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(5344),a=r(8428);r(2696);var n=r(190);let i=function(){let{id:e}=(0,a.useParams)();return(0,s.jsxs)("section",{className:"user-details",children:[s.jsx(n.Z,{}),s.jsx("div",{})]})}},2896:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(5344);r(9973),r(96);var a=r(6013),n=r(448);let i=(0,n.oM)({name:"login",initialState:{username:"",email:""},reducers:{setEmail:(e,t)=>{e.email=t.payload.email}}}),{setEmail:o}=i.actions,l=i.reducer,d=(0,n.xC)({reducer:{login:l}});function u({children:e}){return console.log("Loading the wrapper component"),e}function c({children:e}){return s.jsx(a.zt,{store:d,children:s.jsx(u,{children:s.jsx("html",{lang:"en",children:s.jsx("body",{children:e})})})})}},190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(5344);r(3729),r(5852);var a=r(9410);let n={src:"/_next/static/media/header-logo.97269863.svg",height:30,width:114,blurWidth:0,blurHeight:0},i={src:"/_next/static/media/icon-logout.b80e229d.svg",height:36,width:36,blurWidth:0,blurHeight:0};var o=r(3515);r(96);var l=r(8154);let d=function(){return(0,s.jsxs)("header",{className:"header",children:[(0,s.jsxs)("div",{className:"logo-wrap",children:[(0,s.jsxs)(l.Z,{type:"button",className:"menu",children:[s.jsx("span",{className:"lines"}),s.jsx("span",{className:"lines"}),s.jsx("span",{className:"lines"})]}),s.jsx("div",{className:"logo",children:s.jsx(a.default,{src:n,alt:"Logo"})})]}),(0,s.jsxs)("div",{className:"user-wrap",children:[(0,s.jsxs)("span",{className:"user",children:[s.jsx("i",{className:"icon-user",children:s.jsx(a.default,{src:o.Z,alt:"User"})}),"Handwerksbetrieb Solar GmbH (Admin Handwerksbetrieb)"]}),(0,s.jsxs)(l.Z,{type:"button",className:"logout",children:[s.jsx("i",{className:"icon-logout",children:s.jsx(a.default,{src:i,alt:"Logout"})}),"Logout"]})]})]})}},1437:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/dashboard/details/[id]/page.jsx`),{__esModule:a,$$typeof:n}=s,i=s.default},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/home/spxlpt115/Downloads/React_Dashboard/css8212/src/app/layout.js`),{__esModule:a,$$typeof:n}=s,i=s.default},3515:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={src:"/_next/static/media/icon-user.61520e61.svg",height:24,width:24,blurWidth:0,blurHeight:0}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},2696:()=>{},96:()=>{},5852:()=>{},4132:(e,t)=>{var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=n(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)s.call(e,r)&&e[r]&&(t=n(t,r));return t}(r)))}return e}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,247,421],()=>r(1254));module.exports=s})();