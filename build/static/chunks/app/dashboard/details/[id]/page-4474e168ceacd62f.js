(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{1318:function(t,e,n){Promise.resolve().then(n.bind(n,6143))},7907:function(t,e,n){"use strict";var r=n(5313);n.o(r,"useParams")&&n.d(e,{useParams:function(){return r.useParams}}),n.o(r,"useRouter")&&n.d(e,{useRouter:function(){return r.useRouter}})},6550:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(6480),s=n.n(r),i=n(2265),a=n(7437);let u=["as","disabled"];function o({tagName:t,disabled:e,href:n,target:r,rel:s,role:i,onClick:a,tabIndex:u=0,type:o}){t||(t=null!=n||null!=r||null!=s?"a":"button");let l={tagName:t};if("button"===t)return[{type:o||"button",disabled:e},l];let c=r=>{var s;if(!e&&("a"!==t||(s=n)&&"#"!==s.trim())||r.preventDefault(),e){r.stopPropagation();return}null==a||a(r)};return"a"===t&&(n||(n="#"),e&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:e?void 0:u,href:n,target:"a"===t?r:void 0,"aria-disabled":e||void 0,rel:"a"===t?s:void 0,onClick:c,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),c(t))}},l]}i.forwardRef((t,e)=>{let{as:n,disabled:r}=t,s=function(t,e){if(null==t)return{};var n,r,s={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,u),[i,{tagName:l}]=o(Object.assign({tagName:n,disabled:r},s));return(0,a.jsx)(l,Object.assign({},s,i,{ref:e}))}).displayName="Button";var l=n(2865);let c=i.forwardRef((t,e)=>{let{as:n,bsPrefix:r,variant:i="primary",size:u,active:c=!1,disabled:d=!1,className:f,...v}=t,x=(0,l.vE)(r,"btn"),[h,{tagName:m}]=o({tagName:n,disabled:d,...v});return(0,a.jsx)(m,{...h,...v,ref:e,disabled:d,className:s()(f,x,c&&"active",i&&"".concat(x,"-").concat(i),u&&"".concat(x,"-").concat(u),v.href&&d&&"disabled")})});c.displayName="Button";var d=c},2865:function(t,e,n){"use strict";n.d(e,{SC:function(){return c},pi:function(){return o},vE:function(){return u},zG:function(){return l}});var r=n(2265);n(7437);let s=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:a}=s;function u(t,e){let{prefixes:n}=(0,r.useContext)(s);return t||n[e]||e}function o(){let{breakpoints:t}=(0,r.useContext)(s);return t}function l(){let{minBreakpoint:t}=(0,r.useContext)(s);return t}function c(){let{dir:t}=(0,r.useContext)(s);return"rtl"===t}},6143:function(t,e,n){"use strict";n.r(e);var r=n(7437),s=n(7907);n(9628);var i=n(7727);e.default=function(){let{id:t}=(0,s.useParams)();return(0,r.jsxs)("section",{className:"user-details",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{})]})}},7727:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(7437);n(2265),n(8281);var s=n(703),i={src:"/_next/static/media/header-logo.97269863.svg",height:30,width:114,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/icon-logout.b80e229d.svg",height:36,width:36,blurWidth:0,blurHeight:0},u=n(5721);n(2674);var o=n(6550),l=function(){return(0,r.jsxs)("header",{className:"header",children:[(0,r.jsxs)("div",{className:"logo-wrap",children:[(0,r.jsxs)(o.Z,{type:"button",className:"menu",children:[(0,r.jsx)("span",{className:"lines"}),(0,r.jsx)("span",{className:"lines"}),(0,r.jsx)("span",{className:"lines"})]}),(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)(s.default,{src:i,alt:"Logo"})})]}),(0,r.jsxs)("div",{className:"user-wrap",children:[(0,r.jsxs)("span",{className:"user",children:[(0,r.jsx)("i",{className:"icon-user",children:(0,r.jsx)(s.default,{src:u.Z,alt:"User"})}),"Handwerksbetrieb Solar GmbH (Admin Handwerksbetrieb)"]}),(0,r.jsxs)(o.Z,{type:"button",className:"logout",children:[(0,r.jsx)("i",{className:"icon-logout",children:(0,r.jsx)(s.default,{src:a,alt:"Logout"})}),"Logout"]})]})]})}},9628:function(){},2674:function(){},8281:function(){},5721:function(t,e){"use strict";e.Z={src:"/_next/static/media/icon-user.61520e61.svg",height:24,width:24,blurWidth:0,blurHeight:0}},6480:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=i(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=i(e,n));return e}(n)))}return t}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(s.default=s,t.exports=s):void 0!==(n=(function(){return s}).apply(e,[]))&&(t.exports=n)}()}},function(t){t.O(0,[703,971,69,744],function(){return t(t.s=1318)}),_N_E=t.O()}]);