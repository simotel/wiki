"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[4534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="\u0645\u0639\u0631\u0641\u06cc Simotel Api",p={unversionedId:"developers/api/SimotelAPI/v4/whatis",id:"developers/api/SimotelAPI/v4/whatis",title:"\u0645\u0639\u0631\u0641\u06cc Simotel Api",description:"SA \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0632 API\u0647\u0627 \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644 \u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u060c \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u0642\u0627\u0644\u0628 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f RestAPI \u0627\u06cc\u062c\u0627\u062f \u06af\u0631\u062f\u06cc\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062a\u0645\u0627\u0633\u200c\u062f\u0648\u0637\u0631\u0641\u0647 \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644\u060c\u067e\u0633 \u0627\u0632 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f.",source:"@site/docs/developers/1-api/2-SimotelAPI/v4/1-whatis.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4",slug:"/developers/api/SimotelAPI/v4/whatis",permalink:"/docs/developers/api/SimotelAPI/v4/whatis",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},l={},c=[],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0645\u0639\u0631\u0641\u06cc-simotel-api"},"\u0645\u0639\u0631\u0641\u06cc Simotel Api"),(0,o.kt)("p",null,"SA \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0632 API\u0647\u0627 \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644 \u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u060c \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u0642\u0627\u0644\u0628 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f RestAPI \u0627\u06cc\u062c\u0627\u062f \u06af\u0631\u062f\u06cc\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062a\u0645\u0627\u0633\u200c\u062f\u0648\u0637\u0631\u0641\u0647 \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644\u060c\u067e\u0633 \u0627\u0632 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f."))}f.isMDXComponent=!0}}]);