"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[1692],{8712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const o={title:void 0},r="Exten API",a={id:"developers/Scenarios/exten_api",title:"Exten API",description:"It is recommended to review this link before studying this content.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/4-Scenarios/2-exten_api.md",sourceDirName:"developers/4-Scenarios",slug:"/developers/Scenarios/exten_api",permalink:"/developers/Scenarios/exten_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Smart API",permalink:"/developers/Scenarios/smart_api"},next:{title:"Originate Call",permalink:"/developers/Scenarios/call_originate"}},c={},l=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"exten-api",children:"Exten API"})}),"\n",(0,s.jsx)(n.admonition,{title:"Recommendation",type:"tip",children:(0,s.jsxs)(n.p,{children:["It is recommended to review ",(0,s.jsx)(n.a,{href:"../SimotelWebhooks/DialplanApiComponents/exten_api",children:"this link"})," before studying this content."]})}),"\n",(0,s.jsx)(n.p,{children:"Assume that when a customer contacts your company, if the customer has had a previous interaction with one of your employees within the last 24 hours, the system should route the current call directly to the same employee's phone."}),"\n",(0,s.jsx)(n.p,{children:"To implement this scenario, you can use the Exten API component. When a call enters the system, it is directly routed to the Exten API. At this point, the caller's information is sent to your web service, which includes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "src": "09155441",\n  "dst": "31041000",\n  "data": "",\n  "unique_id": "",\n  "app_name": "Extension API"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the source number 09155441 has contacted the company. Now, using the data received from the ",(0,s.jsx)(n.code,{children:"New State"})," event, we need to determine whether this number has been answered by an extension within the last 24 hours. For example, in this scenario, extension 200 answered the call from this number yesterday. Therefore, the web service needs to send the following output to the Exten API in response."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "ok": "1",\n  "extension": "200"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["At this stage, the call is connected to extension 200, and the phone of extension 200 starts ringing. For more information about the ",(0,s.jsx)(n.code,{children:"New State"})," event, please refer to ",(0,s.jsx)(n.a,{href:"../SimotelWebhooks/Events/new_state",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Implemented Scenario in Dialplan"})}),"\n",(0,s.jsx)("a",{href:"https://dialplan.mysup.ir/live/plan/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f",target:"_blank",children:(0,s.jsx)("img",{src:"https://dialplan.mysup.ir/live/thumb/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f/plan.png"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);