(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4161:(e,A,t)=>{"use strict";t.r(A),t.d(A,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>l});var s=t(482),r=t(9108),i=t(2563),n=t.n(i),o=t(8300),a={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>o[e]);t.d(A,a);let l=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1665)),"D:\\Newfolder\\myProject\\new-projects\\project-css8212\\css8212\\src\\app\\login\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1965)),"D:\\Newfolder\\myProject\\new-projects\\project-css8212\\css8212\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Newfolder\\myProject\\new-projects\\project-css8212\\css8212\\src\\app\\login\\page.jsx"],d="/login/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},405:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},3043:(e,A,t)=>{Promise.resolve().then(t.bind(t,2896))},4817:(e,A,t)=>{Promise.resolve().then(t.bind(t,1087))},2896:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>d});var s=t(5344);t(9973),t(96);var r=t(6013),i=t(448);let n=(0,i.oM)({name:"login",initialState:{username:"",email:""},reducers:{setEmail:(e,A)=>{e.email=A.payload.email}}}),{setEmail:o}=n.actions,a=n.reducer,l=(0,i.xC)({reducer:{login:a}});function c({children:e}){return console.log("Loading the wrapper component"),e}function d({children:e}){return s.jsx(r.zt,{store:l,children:s.jsx(c,{children:s.jsx("html",{lang:"en",children:s.jsx("body",{children:e})})})})}},1087:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>m});var s=t(5344),r=t(9410),i=t(5367),n=t(7402);t(7602);var o=t(1204),a=t(5209),l=t(2648),c=t(8154),d=t(6506),u=t(3729);t(1146);var p=t(1246);let h=function(e){return(0,s.jsxs)(p.Z,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[s.jsx(p.Z.Header,{closeButton:!0,style:{border:"none"}}),(0,s.jsxs)(p.Z.Body,{children:[s.jsx("h2",{children:"Passwort vergessen?"}),s.jsx("p",{children:"Geben Sie die mit Ihrem Konto verkn\xfcpfte E-Mail-Adresse ein, und wir senden Ihnen einen Link zum Zur\xfccksetzen Ihres Passworts."}),(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(l.Z.Group,{className:"form-block",children:[s.jsx(l.Z.Control,{type:"email",placeholder:"E-mail"}),s.jsx(l.Z.Label,{children:"E-mail"})]}),s.jsx(c.Z,{variant:"primary",type:"submit",children:"Fortfahren"})]}),(0,s.jsxs)("p",{children:["Neu hier? ",s.jsx(d.default,{href:"/signup",children:"Jetzt registrieren"})]})]})]})};var g=t(8428),x=t(6847);function m(){let[e,A]=(0,u.useState)(!1),[t,p]=(0,u.useState)(null),[m,j]=(0,u.useState)(null),E=(0,g.useRouter)(),b=(0,u.useCallback)(e=>{e.preventDefault(),E.push("/loginpath")},[t,m]);return(0,s.jsxs)("section",{className:"form-bg",children:[s.jsx(r.default,{alt:"backgroun-image",src:x.Z,placeholder:"blur",fill:!0,quality:100,sizes:"100vw",style:{objectFit:"cover",zIndex:"-1"}}),s.jsx("div",{className:"section-logo",children:s.jsx(r.default,{src:n.Z,alt:"Section-Logo"})}),s.jsx(h,{show:e,onHide:()=>A(!1)}),s.jsx("div",{className:"form-wrap",children:s.jsx(o.Z,{children:(0,s.jsxs)(a.Z,{xs:!0,children:[s.jsx("div",{className:"logo",children:s.jsx(r.default,{src:i.Z,alt:"Logo"})}),s.jsx("h2",{children:"Login"}),(0,s.jsxs)(l.Z,{onSubmit:b,children:[(0,s.jsxs)(l.Z.Group,{className:"form-block",children:[s.jsx(l.Z.Control,{type:"email",placeholder:"E-mail",value:t,onChange:e=>p(e.target.value)}),s.jsx(l.Z.Label,{children:"E-mail"})]}),(0,s.jsxs)(l.Z.Group,{className:"form-block",children:[s.jsx(l.Z.Control,{type:"password",placeholder:"Passwort",value:m,onChange:e=>j(e.target.value)}),s.jsx(l.Z.Label,{children:"Passwort"})]}),s.jsx("p",{onClick:()=>A(!0),children:"Passwort vergessen"})," ",s.jsx("br",{}),s.jsx(c.Z,{variant:"primary",type:"submit",children:"Login"})]}),(0,s.jsxs)("p",{children:["Neu hier? ",s.jsx(d.default,{href:"/signup",children:"Jetzt registrieren"})]})]})})})]})}},1965:(e,A,t)=>{"use strict";t.r(A),t.d(A,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let s=(0,t(6843).createProxy)(String.raw`D:\Newfolder\myProject\new-projects\project-css8212\css8212\src\app\layout.js`),{__esModule:r,$$typeof:i}=s,n=s.default},1665:(e,A,t)=>{"use strict";t.r(A),t.d(A,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let s=(0,t(6843).createProxy)(String.raw`D:\Newfolder\myProject\new-projects\project-css8212\css8212\src\app\login\page.jsx`),{__esModule:r,$$typeof:i}=s,n=s.default},6847:(e,A,t)=>{"use strict";t.d(A,{Z:()=>s});let s={src:"/_next/static/media/background.f39c8d91.jpg",height:2160,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGGGm//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAVEAEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAQABPyGP/9oADAMBAAIAAwAAABAH/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qj//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EK//xAAWEAADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQEAAT8Qcn//2Q==",blurWidth:5,blurHeight:8}},5367:(e,A,t)=>{"use strict";t.d(A,{Z:()=>s});let s={src:"/_next/static/media/logo.464a3291.svg",height:58,width:220,blurWidth:0,blurHeight:0}},7402:(e,A,t)=>{"use strict";t.d(A,{Z:()=>s});let s={src:"/_next/static/media/section-logo.2ebb2936.png",height:97,width:244,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEX///////+10Or////////////////+//////+y0u7///////8umkg7AAAADHRSTlOHnww7HC94lmZ4U7pCItDlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBhwEAIAzDMCedwP//IsEbib4czdIETrsy6gMFjgBiurXP/gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},3881:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>r});var s=t(337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7602:()=>{},96:()=>{},1146:()=>{}};var A=require("../../webpack-runtime.js");A.C(e);var t=e=>A(A.s=e),s=A.X(0,[638,247,421,506,5,74],()=>t(4161));module.exports=s})();