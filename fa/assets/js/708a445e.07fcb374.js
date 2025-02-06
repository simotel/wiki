"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[8741],{3902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>x});const l=JSON.parse('{"id":"developers/SimotelWebhooks/Events/cdr_queue","title":" \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631","description":"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627\u06cc \u0635\u0641 \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/2-Events/10-cdr_queue.md","sourceDirName":"developers/3-SimotelWebhooks/2-Events","slug":"/developers/SimotelWebhooks/Events/cdr_queue","permalink":"/fa/developers/SimotelWebhooks/Events/cdr_queue","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_label":" \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631","title":" \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631"},"sidebar":"docs","previous":{"title":"\u0627\u0631\u0633\u0627\u0644 \u0641\u06a9\u0633","permalink":"/fa/developers/SimotelWebhooks/Events/outgoing_fax"},"next":{"title":"\u0630\u062e\u06cc\u0631\u0647 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc","permalink":"/fa/developers/SimotelWebhooks/Events/voicemail"}}');var s=n(4848),r=n(8453);const i={sidebar_label:" \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631",title:" \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631"},d="CDRQueue",c={},x=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdrqueue",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cdrqueue",children:"CDRQueue"})}),"\n",(0,s.jsx)(t.p,{children:"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627\u06cc \u0635\u0641 \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."}),"\n",(0,s.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"}),"\n",(0,s.jsx)("div",{class:"custom-table",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"CdrQueue"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"event_name"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1610004672.198"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"cuid"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0646\u0627\u0633\u0647 \u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"orig.call.1683107010.780601"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"originated_call_id"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627\u0621"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"991"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"src"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"992"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"dst"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0641"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"901"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"queue"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0645\u062f\u062a \u0645\u06a9\u0627\u0644\u0645\u0647"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"billsec"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"wait"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u06a9\u0644 \u0645\u062f\u062a \u062a\u0645\u0627\u0633"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"21"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"duration"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0631 \u0635\u0641"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"agent_wait"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ANSWERED"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"disposition"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"queue_status"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0642\u0637\u0639 \u06a9\u0646\u0646\u062f \u062a\u0645\u0627\u0633"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"caller"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"hangup"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"comment"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0645\u06a9\u0627\u0644\u0645\u0647"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"20210107_1610004672.198.mp3"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"record"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2021-01-07 07:31:23.860004"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"answeredtime"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2021-01-07 07:31:13.289281"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"ringtime"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0632\u0645\u0627\u0646 \u0634\u0631\u0648\u0639 \u0645\u06a9\u0627\u0644\u0645\u0647"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2021-01-07 07:31:13.247554"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"starttime"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0632\u0645\u0627\u0646 \u067e\u0627\u06cc\u0627\u0646 \u0645\u06a9\u0627\u0644\u0645\u0647"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2021-01-07 07:31:35.077859"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"endtime"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"991"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->src"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"992"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->dst"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->billsec"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->wait"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ANSWERED"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->disposition"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->comment"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"detail->tries"})})]})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdrqueue",children:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'{\n  "event_name": "CdrQueue",\n  "unique_id": "1610782193.391",\n  "src": "992",\n  "dst": "993",\n  "queue": "902",\n  "billsec": "31",\n  "wait": "3",\n  "duration": "34",\n  "agent_wait": "3",\n  "disposition": "ANSWERED",\n  "hangup": "agent",\n  "queue_status": "CONTINUE",\n  "record": "20210116_1610782193.391.mp3",\n  "answeredtime": "2021-01-16 07:29:56.819506",\n  "ringtime": "2021-01-16 07:29:53.382906",\n  "starttime": "2021-01-16 07:29:53.310319",\n  "endtime": "2021-01-16 07:30:28.794906",\n  "detail": [\n    {\n      "src": "992",\n      "dst": "993",\n      "billsec": "31",\n      "wait": "3",\n      "disposition": "ANSWERED",\n      "comment": "",\n      "tries": "1"\n    }\n  ]\n}\n'})})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var l=n(6540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);