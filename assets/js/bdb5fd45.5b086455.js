"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[6377],{7875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const s={title:void 0},r="Introduction",a={id:"developers/SimotelAPI/v4/introapi",title:"Introduction",description:"The Contact Center API package is divided into three main sections.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/1-introapi.md",sourceDirName:"developers/2-SimotelAPI/v4",slug:"/developers/SimotelAPI/v4/introapi",permalink:"/developers/SimotelAPI/v4/introapi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{}},c={},l=[{value:"The Contact Center API package is divided into three main sections.",id:"the-contact-center-api-package-is-divided-into-three-main-sections",level:2},{value:"SEA (Simotel Event API)",id:"sea-simotel-event-api",level:3},{value:"SA (Simotel API)",id:"sa-simotel-api",level:3},{value:"API Components",id:"api-components",level:3},{value:"Data Format for Sending and Receiving Information",id:"data-format-for-sending-and-receiving-information",level:3},{value:"Useful Links",id:"useful-links",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(n.h2,{id:"the-contact-center-api-package-is-divided-into-three-main-sections",children:"The Contact Center API package is divided into three main sections."}),"\n",(0,i.jsx)(n.h3,{id:"sea-simotel-event-api",children:"SEA (Simotel Event API)"}),"\n",(0,i.jsx)(n.p,{children:"SEA is a collection of APIs that send information about events that occur in the contact center to your web service. With SEA, you can quickly stay informed about all the events happening in the contact center. This section is responsible for managing all the events that are sent from the Simotel source to the destination web service."}),"\n",(0,i.jsxs)(n.p,{children:["For example, one of the most useful events in this section is the ",(0,i.jsx)(n.code,{children:"CDR (Call Detail Record)"})," method, which, after the call ends, sends all call details (such as the start time, end time, source number, destination number, call duration, wait time, etc.) to the web service. The methods available in SEA are reviewed in more detail."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,i.jsx)(n.p,{children:"Using SEA does not require polling from the web service; Simotel sends the data to you when an event occurs."})}),"\n",(0,i.jsx)(n.h3,{id:"sa-simotel-api",children:"SA (Simotel API)"}),"\n",(0,i.jsx)(n.p,{children:"SA is a collection of APIs that are triggered by a request from the web service to Simotel. This service is created using the standard RestAPI format. For example, by sending a request for a two-way call from the web service to Simotel, the contact center will initiate the two-way call upon receiving the request."}),"\n",(0,i.jsx)(n.h3,{id:"api-components",children:"API Components"}),"\n",(0,i.jsx)(n.p,{children:"The API components in the dialplan give you dynamic control over calls. Using these components, you can create an interaction between the web service and the contact center, where your web service analyzes the received data (request) and based on the current conditions, determines the response to the component's request."}),"\n",(0,i.jsxs)(n.p,{children:["For example, some setups require that when a customer calls multiple times, they should always be connected to the same company agent until the interaction is complete. The ",(0,i.jsx)(n.strong,{children:"ExtenAPI"})," component can be used to implement this scenario."]}),"\n",(0,i.jsx)(n.h3,{id:"data-format-for-sending-and-receiving-information",children:"Data Format for Sending and Receiving Information"}),"\n",(0,i.jsx)(n.p,{children:"The data format for sending requests and receiving responses is JSON (except for download and stream services)."}),"\n",(0,i.jsx)(n.h3,{id:"useful-links",children:"Useful Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The PHP package for connecting to Simotel, along with examples, is available for download from ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/nasimtelecom/simotel-php-connect",children:"here"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The Laravel package for Simotel, for more information on how to make requests, is available for download from ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/nasimtelecom/simotel-laravel-connect",children:"here"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The Postman file for a better understanding of how the API works is available for download from ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://dl.mysup.ir/postmansample/Simotel_V3.edition_14.postman_collection.json",children:"here"})})," (v3_e14)."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);