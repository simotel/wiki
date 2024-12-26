"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2793],{5278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=n(4848),i=n(8453);const r={sidebar_position:2,title:void 0},s="Incoming Call",c={id:"developers/SimotelWebhooks/Events/incoming_call",title:"Incoming Call",description:"When a call is received by Simotel (incoming call), the IncomingCall event is triggered, specifying the entry point through which the call was received.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/2-Events/4-incoming_call.md",sourceDirName:"developers/3-SimotelWebhooks/2-Events",slug:"/developers/SimotelWebhooks/Events/incoming_call",permalink:"/developers/SimotelWebhooks/Events/incoming_call",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Transfer",permalink:"/developers/SimotelWebhooks/Events/transfer"},next:{title:"Outgoing Call",permalink:"/developers/SimotelWebhooks/Events/outgoing_call"}},o={},d=[{value:"event parameters",id:"event-parameters",level:2},{value:"Sample Output of Incoming Call Event",id:"sample-output-of-incoming-call-event",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"incoming-call",children:"Incoming Call"})}),"\n",(0,l.jsxs)(t.p,{children:["When a call is received by Simotel (incoming call), the ",(0,l.jsx)(t.strong,{children:"IncomingCall"})," event is triggered, specifying the entry point through which the call was received."]}),"\n",(0,l.jsx)(t.h2,{id:"event-parameters",children:"event parameters"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Sample Data"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Event Name"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"IncomingCall"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"event_name"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Incoming call number (caller ID)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"05131041000"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"number"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Name of the entry point to Simotel"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"E1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"entry_point"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Unique call ID generated by the PBX system"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1510564538.919"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"cuid"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Two-way call ID (populated if the call is two-way)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"orig.call.1683107010.780601"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"originated_call_id"})})]})]})]})}),"\n",(0,l.jsx)(t.h2,{id:"sample-output-of-incoming-call-event",children:"Sample Output of Incoming Call Event"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'{\n    "event_name": "IncomingCall",\n    "number": 09331112233,\n    "unique_id": "1812081675.213",\n    "entry_point": "to_simo_51_20"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var l=n(6540);const i={},r=l.createContext(i);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);