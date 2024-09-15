"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2093],{3544:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(4848),l=s(8453);const r={},t="Trunk API",o={id:"developers/api/SimotelWebhooks/DialplanApiComponents/trunk_api",title:"Trunk API",description:"\u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u0628\u0631 \u0631\u0648\u06cc \u062a\u0631\u0627\u0646\u06a9 \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c \u0645\u06cc\u200c\u0634\u0648\u062f. \u0639\u0645\u0644\u06a9\u0631\u062f \u0622\u0646 \u0645\u0634\u0627\u0628\u0647 Trunk \u0627\u0633\u062a\u060c \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0627\u0632\u0637\u0631\u06cc\u0642 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633\u060c \u0646\u0627\u0645 \u062a\u0631\u0627\u0646\u06a9 \u0648 \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0648",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/1-api/3-SimotelWebhooks/3-DialplanApiComponents/4-trunk_api.md",sourceDirName:"developers/1-api/3-SimotelWebhooks/3-DialplanApiComponents",slug:"/developers/api/SimotelWebhooks/DialplanApiComponents/trunk_api",permalink:"/en/docs/developers/api/SimotelWebhooks/DialplanApiComponents/trunk_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Extention API",permalink:"/en/docs/developers/api/SimotelWebhooks/DialplanApiComponents/exten_api"},next:{title:"IVR API",permalink:"/en/docs/developers/api/SimotelWebhooks/DialplanApiComponents/ivr_api"}},d={},c=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",level:2},{value:"\u062e\u0631\u0648\u062c\u06cc\u200c\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",id:"\u062e\u0631\u0648\u062c\u06cc\u0647\u0627\u06cc-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",level:2},{value:"\u0642\u0627\u0644\u0628 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633",id:"\u0642\u0627\u0644\u0628-\u0648\u0628\u0633\u0631\u0648\u06cc\u0633",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"trunk-api",children:"Trunk API"})}),"\n",(0,i.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u0628\u0631 \u0631\u0648\u06cc \u062a\u0631\u0627\u0646\u06a9 \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c \u0645\u06cc\u200c\u0634\u0648\u062f. \u0639\u0645\u0644\u06a9\u0631\u062f \u0622\u0646 \u0645\u0634\u0627\u0628\u0647 Trunk \u0627\u0633\u062a\u060c \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0627\u0632\u0637\u0631\u06cc\u0642 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633\u060c \u0646\u0627\u0645 \u062a\u0631\u0627\u0646\u06a9 \u0648 \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0648\n\u0641\u0642\u0637 \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u0634\u0645\u0627\u0631\u0647 \u0627\u06cc\u062c\u0627\u062f\u200c \u0645\u06cc\u200c\u0646\u0645\u0627\u06cc\u062f.\u06cc\u06a9\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0631\u0627\u06cc\u062c \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u06cc\u062c\u0627\u062f \u0645\u062d\u062f\u0648\u062f\u06cc\u062a \u0632\u0645\u0627\u0646\u06cc (call_limit) \u0628\u0631\u0631\u0648\u06cc \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062a\u0645\u0627\u0633\u200c\u062f\u0648\u0637\u0631\u0641\u0647 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."}),"\n",(0,i.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"API Address"}),": \u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Timeout (sec)"}),": \u0645\u062f\u062a \u0632\u0645\u0627\u0646\u06cc\u200c\u06a9\u0647 \u062a\u0645\u0627\u0633 \u0628\u0631\u0627\u06cc \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc \u0648 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u0631\u062a\u0628\u0627\u0637\u200c \u0645\u0646\u062a\u0638\u0631 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f. (\u0628\u0631\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Options"}),": \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062a\u0645\u0627\u0633."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u062e\u0631\u0648\u062c\u06cc\u0647\u0627\u06cc-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",children:"\u062e\u0631\u0648\u062c\u06cc\u200c\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"S (Success)"}),": \u062f\u0631\u0635\u0648\u0631\u062a\u06cc\u200c\u200c\u06a9\u0647 \u062a\u0645\u0627\u0633 \u0645\u0648\u0641\u0642 \u0628\u0627\u0634\u062f. \u062a\u0645\u0627\u0633 \u0627\u0632 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u0634\u0648\u062f(\u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0646\u0638\u0631\u0633\u0646\u062c\u06cc \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f)."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"F (Fail)"}),": \u062f\u0631\u0635\u0648\u0631\u062a\u06cc\u200c\u200c\u06a9\u0647 \u062a\u0645\u0627\u0633 \u0645\u0648\u0641\u0642 \u0646\u0628\u0627\u0634\u062f\u060c \u06cc\u0639\u0646\u06cc \u0645\u0642\u0635\u062f \u0628\u0647 \u0647\u0631 \u062f\u0644\u06cc\u0644\u06cc \u067e\u0627\u0633\u062e \u0646\u062f\u0647\u062f \u062a\u0645\u0627\u0633 \u0627\u0632 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u0634\u0648\u062f (\u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u0622\u0648\u0627\u06cc \u0645\u0634\u062a\u0631\u06a9 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0631\u0627 \u067e\u062e\u0634 \u06a9\u0631\u062f)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u0642\u0627\u0644\u0628-\u0648\u0628\u0633\u0631\u0648\u06cc\u0633",children:"\u0642\u0627\u0644\u0628 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633"}),"\n",(0,i.jsxs)(e.p,{children:["\u0628\u0627\u200c\u062a\u0648\u062c\u0647 \u0628\u0647 \u0645\u0642\u0627\u062f\u06cc\u0631 \u0645\u0646\u0648\u06cc \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 ",(0,i.jsx)(e.code,{children:"API Method & API Version"}),"\u060c \u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0634\u062f\u0647 \u0648 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0622\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u0646\u062f."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"src"}),": \u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633\u200c\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 (Caller \u06cc\u0627 CID)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dst"}),": \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f\u0634\u062f\u0647 (Callee \u06cc\u0627 DID \u06cc\u0627 Exten)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"data"}),": \u062f\u0627\u062f\u0647\u200c\u200c\u0627\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633\u200c\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u062f\u0631 \u0645\u0633\u06cc\u0631 \u062a\u0645\u0627\u0633 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a (\u0645\u062b\u0644\u0627\u064b \u062f\u0627\u062f\u0647\u200c\u200c\u0627\u06cc \u06a9\u0647 \u062f\u0631 IVR \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"unique_id"}),": \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"app_name"}),": \u0646\u0627\u0645 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062c\u0627\u0631\u06cc."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0648 \u062f\u0631 \u062c\u0648\u0627\u0628\u060c \u062e\u0631\u0648\u062c\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647\u200c\u0635\u0648\u0631\u062a json \u062f\u0631\u06cc\u0627\u0641\u062a\u200c \u0645\u06cc\u200c\u06a9\u0646\u062f."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'{\n "ok": "1",\t\t\t\t\n  "trunk": "NasimTrunk",\n  "extension": "09151412541",\n  "call_limit": "300"\n\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0642\u0635\u062f (\u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 09151412541) \u0628\u0627 \u0645\u062d\u062f\u0648\u062f\u06cc\u062a \u0632\u0645\u0627\u0646\u06cc \u0645\u06a9\u0627\u0644\u0645\u0647 300 \u062b\u0627\u0646\u06cc\u0647 \u0627\u06cc\u062c\u0627\u062f\u200c \u0645\u06cc\u200c\u06a9\u0646\u062f."})})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>o});var i=s(6540);const l={},r=i.createContext(l);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);