(()=>{var e={};e.id=431,e.ids=[431],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4285:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>o});var r=s(482),i=s(9108),n=s(2563),a=s.n(n),l=s(8300),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);s.d(t,c);let o=["",{children:["dashboard",{children:["details",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1437)),"D:\\Newfolder\\myProject\\new-projects\\project-css8212\\css8212\\src\\app\\dashboard\\details\\[id]\\page.jsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1965)),"D:\\Newfolder\\myProject\\new-projects\\project-css8212\\css8212\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Newfolder\\myProject\\new-projects\\project-css8212\\css8212\\src\\app\\dashboard\\details\\[id]\\page.jsx"],u="/dashboard/details/[id]/page",h={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/dashboard/details/[id]/page",pathname:"/dashboard/details/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},405:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},8622:(e,t,s)=>{Promise.resolve().then(s.bind(s,3678))},3043:(e,t,s)=>{Promise.resolve().then(s.bind(s,2896))},5532:(e,t,s)=>{"use strict";t.FT=l;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=a(t);if(s&&s.has(e))return s.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var l=i?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n]}return r.default=e,s&&s.set(e,r),r}(s(3729)),i=s(5344);let n=["as","disabled"];function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(a=function(e){return e?s:t})(e)}function l({tagName:e,disabled:t,href:s,target:r,rel:i,role:n,onClick:a,tabIndex:l=0,type:c}){e||(e=null!=s||null!=r||null!=i?"a":"button");let o={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},o];let d=r=>{var i;if(!t&&("a"!==e||(i=s)&&"#"!==i.trim())||r.preventDefault(),t){r.stopPropagation();return}null==a||a(r)};return"a"===e&&(s||(s="#"),t&&(s=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:l,href:s,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}r.forwardRef((e,t)=>{let{as:s,disabled:r}=e,a=function(e,t){if(null==e)return{};var s,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n),[c,{tagName:o}]=l(Object.assign({tagName:s,disabled:r},a));return(0,i.jsx)(o,Object.assign({},a,c,{ref:t}))}).displayName="Button"},8428:(e,t,s)=>{"use strict";var r=s(4767);s.o(r,"useParams")&&s.d(t,{useParams:function(){return r.useParams}}),s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},8154:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(4132),i=s.n(r),n=s(3729),a=s(5532),l=s(136),c=s(5344);let o=n.forwardRef(({as:e,bsPrefix:t,variant:s="primary",size:r,active:n=!1,disabled:o=!1,className:d,...u},h)=>{let p=(0,l.vE)(t,"btn"),[x,{tagName:m}]=(0,a.FT)({tagName:e,disabled:o,...u});return(0,c.jsx)(m,{...x,...u,ref:h,disabled:o,className:i()(d,p,n&&"active",s&&`${p}-${s}`,r&&`${p}-${r}`,u.href&&o&&"disabled")})});o.displayName="Button";let d=o},5209:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(4132),i=s.n(r),n=s(3729),a=s(136),l=s(5344);let c=n.forwardRef((e,t)=>{let[{className:s,...r},{as:n="div",bsPrefix:c,spans:o}]=function({as:e,bsPrefix:t,className:s,...r}){t=(0,a.vE)(t,"col");let n=(0,a.pi)(),l=(0,a.zG)(),c=[],o=[];return n.forEach(e=>{let s,i,n;let a=r[e];delete r[e],"object"==typeof a&&null!=a?{span:s,offset:i,order:n}=a:s=a;let d=e!==l?`-${e}`:"";s&&c.push(!0===s?`${t}${d}`:`${t}${d}-${s}`),null!=n&&o.push(`order${d}-${n}`),null!=i&&o.push(`offset${d}-${i}`)}),[{...r,className:i()(s,...c,...o)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,l.jsx)(n,{...r,ref:t,className:i()(s,!o.length&&c)})});c.displayName="Col";let o=c},1204:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(4132),i=s.n(r),n=s(3729),a=s(136),l=s(5344);let c=n.forwardRef(({bsPrefix:e,className:t,as:s="div",...r},n)=>{let c=(0,a.vE)(e,"row"),o=(0,a.pi)(),d=(0,a.zG)(),u=`${c}-cols`,h=[];return o.forEach(e=>{let t;let s=r[e];delete r[e],null!=s&&"object"==typeof s?{cols:t}=s:t=s;let i=e!==d?`-${e}`:"";null!=t&&h.push(`${u}${i}-${t}`)}),(0,l.jsx)(s,{ref:n,...r,className:i()(t,c,...h)})});c.displayName="Row";let o=c},136:(e,t,s)=>{"use strict";s.d(t,{SC:()=>d,pi:()=>c,vE:()=>l,zG:()=>o});var r=s(3729);s(5344);let i=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:n,Provider:a}=i;function l(e,t){let{prefixes:s}=(0,r.useContext)(i);return e||s[t]||t}function c(){let{breakpoints:e}=(0,r.useContext)(i);return e}function o(){let{minBreakpoint:e}=(0,r.useContext)(i);return e}function d(){let{dir:e}=(0,r.useContext)(i);return"rtl"===e}},3678:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var r=s(5344),i=s(8428);s(2696);var n=s(190),a=s(1297),l=s(1204),c=s(5209),o=s(8154),d=s(9410),u=s(1351);let h={src:"/_next/static/media/chevron-back.54c47fe1.svg",height:22,width:22,blurWidth:0,blurHeight:0},p={src:"/_next/static/media/icon_informationen.bcd34c44.svg",height:32,width:37,blurWidth:0,blurHeight:0},x={src:"/_next/static/media/icon_componenten.8d43e497.svg",height:32,width:37,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/icon_livedaten.3e0fc153.svg",height:32,width:37,blurWidth:0,blurHeight:0},f={src:"/_next/static/media/icon_verwaltung.de5b0a6f.svg",height:32,width:37,blurWidth:0,blurHeight:0};var g=s(3677);let b=function(){let{id:e}=(0,i.useParams)();return(0,r.jsxs)("section",{className:"user-details",children:[r.jsx(n.Z,{}),(0,r.jsxs)("div",{className:"details-wrap",children:[r.jsx(a.Z,{}),(0,r.jsxs)("div",{className:"details-block",children:[(0,r.jsxs)("div",{className:"details-primary",children:[(0,r.jsxs)(l.Z,{className:"heading-wrap align-items-center",children:[(0,r.jsxs)(c.Z,{md:"6",className:"d-flex",children:[r.jsx(c.Z,{md:"1",children:r.jsx(o.Z,{variant:"prev",children:r.jsx("i",{className:"icon-back",children:r.jsx(d.default,{src:h,alt:"Icon"})})})}),r.jsx(c.Z,{md:"5",className:"heading",children:(0,r.jsxs)("h2",{children:[r.jsx("i",{className:"icon-anlagen",children:r.jsx(d.default,{src:u.Z,alt:"Icon"})}),"Anlage A - Anlagendetails"]})})]}),(0,r.jsxs)(c.Z,{md:"6",className:"d-flex justify-content-end gap-4",children:[r.jsx(o.Z,{children:"\xc4nderungen Speichern"}),r.jsx(o.Z,{children:"Anlage l\xf6schen"})]})]}),(0,r.jsxs)("ul",{className:"d-md-flex",children:[r.jsx("li",{children:(0,r.jsxs)(o.Z,{variant:"tab",className:"active",children:[r.jsx("i",{children:r.jsx(d.default,{src:p,alt:"Icon"})}),"Informationen"]})}),r.jsx("li",{children:(0,r.jsxs)(o.Z,{variant:"tab",children:[r.jsx("i",{children:r.jsx(d.default,{src:m,alt:"Icon"})}),"Livedaten"]})}),r.jsx("li",{children:(0,r.jsxs)(o.Z,{variant:"tab",children:[r.jsx("i",{children:r.jsx(d.default,{src:g.Z,alt:"Icon"})}),"Logbuch"]})}),r.jsx("li",{children:(0,r.jsxs)(o.Z,{variant:"tab",children:[r.jsx("i",{children:r.jsx(d.default,{src:x,alt:"Icon"})}),"Komponenten"]})}),r.jsx("li",{children:(0,r.jsxs)(o.Z,{variant:"tab",children:[r.jsx("i",{children:r.jsx(d.default,{src:f,alt:"Icon"})}),"Verwaltung"]})})]})]}),r.jsx("div",{className:"details-secondary"})]})]})]})}},2896:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(5344);s(9973),s(96);var i=s(6013),n=s(448);let a=(0,n.oM)({name:"login",initialState:{username:"",email:""},reducers:{setEmail:(e,t)=>{e.email=t.payload.email}}}),{setEmail:l}=a.actions,c=a.reducer,o=(0,n.xC)({reducer:{login:c}});function d({children:e}){return console.log("Loading the wrapper component"),e}function u({children:e}){return r.jsx(i.zt,{store:o,children:r.jsx(d,{children:r.jsx("html",{lang:"en",children:r.jsx("body",{children:e})})})})}},190:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(5344);s(3729),s(5852);var i=s(9410);let n={src:"/_next/static/media/header-logo.71078bcf.svg",height:30,width:114,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/icon-logout.c48463ca.svg",height:36,width:36,blurWidth:0,blurHeight:0};var l=s(3515);s(96);var c=s(8154);let o=function(){return(0,r.jsxs)("header",{className:"header",children:[(0,r.jsxs)("div",{className:"logo-wrap",children:[(0,r.jsxs)(c.Z,{type:"button",className:"menu",children:[r.jsx("span",{className:"lines"}),r.jsx("span",{className:"lines"}),r.jsx("span",{className:"lines"})]}),r.jsx("div",{className:"logo",children:r.jsx(i.default,{src:n,alt:"Logo"})})]}),(0,r.jsxs)("div",{className:"user-wrap",children:[(0,r.jsxs)("span",{className:"user",children:[r.jsx("i",{className:"icon-user",children:r.jsx(i.default,{src:l.Z,alt:"User"})}),"Handwerksbetrieb Solar GmbH (Admin Handwerksbetrieb)"]}),(0,r.jsxs)(c.Z,{type:"button",className:"logout",children:[r.jsx("i",{className:"icon-logout",children:r.jsx(i.default,{src:a,alt:"Logout"})}),"Logout"]})]})]})}},1297:(e,t,s)=>{"use strict";s.d(t,{Z:()=>g});var r=s(5344),i=s(3729);s(96),s(5526);var n=s(9410);let a={src:"/_next/static/media/icon-dashboard.b6ad755f.svg",height:28,width:28,blurWidth:0,blurHeight:0};var l=s(3677),c=s(3515),o=s(5471),d=s(5377),u=s(640),h=s(8152),p=s(1204),x=s(5209),m=s(8154),f=s(6506);let g=function(){let[e,t]=(0,i.useState)("Dashboard"),s=[{name:"Dashboard",href:"/dashboard",icon:a,iClass:"icons"},{name:"Logbuch",href:"/logbuch",icon:l.Z,iClass:"icons"},{name:"Mein Profil",href:"/profil",icon:c.Z,iClass:"icons icon-profile"},{name:"Benutzer",href:"/benutzer",icon:o.Z,iClass:"icons"},{name:"Einstellungen",href:"/einstellungen",icon:d.Z,iClass:"icons"},{name:"Support",href:"/support",icon:u.Z,iClass:"icons"}];return(0,r.jsxs)("div",{className:"sidebar",children:[r.jsx("div",{className:"sidebar-menu",children:r.jsx("ul",{children:s.map((s,i)=>r.jsx("li",{onClick:()=>t(s.name),children:(0,r.jsxs)(f.default,{href:s.href,className:s.name===e?"btn btn-nav active":"btn btn-nav",children:[r.jsx("i",{className:s.iClass,children:r.jsx(n.default,{src:s.icon,alt:"icon"})}),s.name]})},i))})}),r.jsx(p.Z,{children:r.jsx(x.Z,{md:"10",children:(0,r.jsxs)(m.Z,{className:"facility",children:[r.jsx("i",{className:"icon-plus",children:r.jsx(n.default,{src:h.Z,alt:"Icon"})}),"Neue Anlage"]})})})]})}},1437:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let r=(0,s(6843).createProxy)(String.raw`D:\Newfolder\myProject\new-projects\project-css8212\css8212\src\app\dashboard\details\[id]\page.jsx`),{__esModule:i,$$typeof:n}=r,a=r.default},1965:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let r=(0,s(6843).createProxy)(String.raw`D:\Newfolder\myProject\new-projects\project-css8212\css8212\src\app\layout.js`),{__esModule:i,$$typeof:n}=r,a=r.default},1351:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-anlagen.47569acd.svg",height:28,width:28,blurWidth:0,blurHeight:0}},3677:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-logbuch.a67ff959.svg",height:28,width:28,blurWidth:0,blurHeight:0}},5471:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-multipleuser.9bb73214.svg",height:28,width:28,blurWidth:0,blurHeight:0}},8152:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-plus.65be5c18.svg",height:14,width:14,blurWidth:0,blurHeight:0}},5377:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-setting.8126032e.svg",height:28,width:28,blurWidth:0,blurHeight:0}},640:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-support.ccd95ff7.svg",height:28,width:28,blurWidth:0,blurHeight:0}},3515:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r={src:"/_next/static/media/icon-user.80af3d8c.svg",height:24,width:24,blurWidth:0,blurHeight:0}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},2696:()=>{},96:()=>{},5852:()=>{},5526:()=>{},4132:(e,t)=>{var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)r.call(e,s)&&e[s]&&(t=n(t,s));return t}(s)))}return e}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(s=(function(){return i}).apply(t,[]))&&(e.exports=s)}()}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,247,421,506],()=>s(4285));module.exports=r})();