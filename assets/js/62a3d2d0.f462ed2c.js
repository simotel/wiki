"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3513],{6474:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=s(4848),t=s(8453);const i={title:void 0},l="HA",o={id:"pbx/pbx-menu/control-panel/ha",title:"HA",description:"This section is related to the HA structure and displays the status of the servers present in HA.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/3- pbx-menu/9-control-panel/2-ha.md",sourceDirName:"pbx/3- pbx-menu/9-control-panel",slug:"/pbx/pbx-menu/control-panel/ha",permalink:"/pbx/pbx-menu/control-panel/ha",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"Docs",previous:{title:"Backup",permalink:"/pbx/pbx-menu/control-panel/backup"},next:{title:"HA Logs",permalink:"/pbx/pbx-menu/control-panel/ha_logs"}},a={},h=[{value:"HA Status",id:"ha-status",level:2},{value:"Server Status",id:"server-status",level:2}];function c(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ha",children:"HA"})}),"\n",(0,r.jsx)(n.p,{children:"This section is related to the HA structure and displays the status of the servers present in HA."}),"\n",(0,r.jsx)(n.h2,{id:"ha-status",children:"HA Status"}),"\n",(0,r.jsx)(n.p,{children:"In this section, information regarding the servers is displayed as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Server Name"}),": The name of the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HA State"}),": The state of the server in the HA structure (PRIMARY, SECONDARY, STANDBY, UNKNOWN)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PBX State"}),": The status of the Asterisk server (UP, DOWN, UNKNOWN)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last Heartbeat"}),": The last heartbeat signal from the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Priority"}),": The priority of the server for selection as PRIMARY (a higher number indicates a higher priority)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last HA Configure"}),": The last change made to HA."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Float IP"}),": Represents the floating IP address (the floating IP should always be on the PRIMARY server)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use As Primary"}),": Indicates whether the server can become PRIMARY (yes, no)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HA Recovery Mode"}),": The recovery method for the server in case of failure. If set to Auto, it will switch to secondary after the issue is resolved; if set to Manual, it will go to standby after failure and must be manually transitioned to secondary by the system administrator."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Details"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Edit"}),": To edit the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Delete"}),": To delete the server (if the server is active, it will be recreated with default data)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Arping"}),": To apply arping on the primary server."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"server-status",children:"Server Status"}),"\n",(0,r.jsx)(n.p,{children:"A server in HA can have one of the following statuses:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PRIMARY"}),": The main server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SECONDARY"}),": Servers that can replace the primary in case of failure."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"STANDBY"}),": The server needs to be manually switched to secondary."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UNKNOWN"}),": The status of the server is unclear."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);