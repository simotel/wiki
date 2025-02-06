"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[1766],{2554:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"developers/SimotelAPI/v4/report/report_poll","title":"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc","description":"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/13-report/11-report_poll.md","sourceDirName":"developers/2-SimotelAPI/v4/13-report","slug":"/developers/SimotelAPI/v4/report/report_poll","permalink":"/fa/developers/SimotelAPI/v4/report/report_poll","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_label":"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc","title":"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc"},"sidebar":"docs","previous":{"title":"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u0635\u0641","permalink":"/fa/developers/SimotelAPI/v4/report/agent_search"},"next":{"title":"\u0645\u0639\u0631\u0641\u06cc SimotelWebHooks","permalink":"/fa/developers/SimotelWebhooks/whatis"}}');var l=n(4848),s=n(8453),i=n(5537),a=n(9329);const c={sidebar_label:"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc",title:"\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc"},o="Poll Search",d={},u=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"poll-search",children:"Poll Search"})}),"\n",(0,l.jsx)(e.p,{children:"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0638\u0631\u0633\u0646\u062c\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."}),"\n",(0,l.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"09121234567"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->from"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"555"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->to"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0628\u0631\u0686\u0633\u0628 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0631 \u062f\u0627\u06cc\u0644\u200c\u067e\u0644\u0646"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"sale"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->label"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0641"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"903"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->queue"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->cuid"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648 \u0627\u0632 \u062a\u0627\u0631\u06cc\u062e"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"2019-06-15 15:16"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"date_range->from"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648 \u062a\u0627 \u062a\u0627\u0631\u06cc\u062e"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"2022-06-22 15:16"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"date_range->to"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->start"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"20"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->count"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->sorting"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u06cc\u0627\u0641\u062a\u0646 \u0645\u0648\u0627\u0631\u062f \u0645\u0634\u0627\u0628\u0647"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"true/false"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"true"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"alike"})]})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,l.jsxs)(i.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,l.jsx)(a.A,{value:"usageCode",children:(0,l.jsxs)(i.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(a.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => \'http://192.168.51.20/api/v4/reports/poll/search\',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => \'\',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => \'POST\',\n\t  CURLOPT_POSTFIELDS =>\'{\n\t\t"conditions":{"from": "09121234567", "to": "555", "label":"sale", "queue":"900", "cuid":""},\n\t\t"date_range":{"from":"2019-06-15 15:16","to":"2022-06-22 15:16"},\n\t\t"pagination":{"start":0,"count":20,"sorting":{}},\n\t\t"alike":"true"\n\t}\',\n\t  CURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\n\t\t\'Authorization: Basic c2FkcjpTYWRyQDEyMw==\',\n\t\t\'Content-Type: application/json\'\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,l.jsx)(a.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.20/api/v4/reports/poll/search",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n\t\t\t\t\t"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t"conditions": {\n\t\t\t\t\t  "from": "09121234567",\n\t\t\t\t\t  "to": "555",\n\t\t\t\t\t  "label": "sale",\n\t\t\t\t\t  "queue": "900",\n\t\t\t\t\t  "cuid": ""\n\t\t\t\t\t},\n\t\t\t\t\t"date_range": {\n\t\t\t\t\t  "from": "2019-06-15 15:16",\n\t\t\t\t\t  "to": "2022-06-22 15:16"\n\t\t\t\t\t},\n\t\t\t\t\t"pagination": {\n\t\t\t\t\t  "start": 0,\n\t\t\t\t\t  "count": 20,\n\t\t\t\t\t  "sorting": {}\n\t\t\t\t\t},\n\t\t\t\t\t"alike": "true"\n\t\t\t\t  }),\n\t\t\t\t};\n\n\t\t\t\t$.ajax(settings).done(function (response) {\n\t\t\t\t  console.log(response);\n\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,l.jsx)(a.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/reports/poll/search\' \\\n\t--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\n\t--header \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"conditions":{"from": "09121234567", "to": "555", "label":"sale", "queue":"900", "cuid":""},\n\t\t"date_range":{"from":"2019-06-15 15:16","to":"2022-06-22 15:16"},\n\t\t"pagination":{"start":0,"count":20,"sorting":{}},\n\t\t"alike":"true"\n\t}\'\n'})})]})})]})}),(0,l.jsx)(a.A,{value:"outputCode",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": {\n        "pagination": {\n            "start": 0,\n            "count": 20,\n            "sorting": {\n                "date": -1\n            },\n            "total": 1\n        },\n        "target": "poll",\n        "useGroupBy": false,\n        "data": [\n            {\n                "_id": "602244a95f1eb5fb5d42cb2b",\n                "uniqueid": "1612858371.2269",\n                "src": "09121234567",\n                "dst": "555",\n                "point": 15,\n                "label": "sale",\n                "qnum": "900",\n                "date": "1399-11-21 11:45:37"\n            }\n        ]\n    }\n}\n'})})})]})]})}function x(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(h,{...t})}):h(t)}},9329:(t,e,n)=>{n.d(e,{A:()=>i});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(t){let{children:e,hidden:n,className:i}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n,children:e})}},5537:(t,e,n)=>{n.d(e,{A:()=>v});var r=n(6540),l=n(8215),s=n(5627),i=n(6347),a=n(372),c=n(604),o=n(1861),d=n(8749);function u(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return u(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,o.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function x(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:n}=t;const l=(0,i.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(l.location.search);e.set(s,t),l.replace({...l.location,search:e.toString()})}),[s,l])]}function j(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,s=h(t),[i,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[o,u]=p({queryString:n,groupId:l}),[j,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,s]=(0,d.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:l}),y=(()=>{const t=o??j;return x({value:t,tabValues:s})?t:null})();(0,a.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!x({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),g(t)}),[u,g,s]),tabValues:s}}var g=n(9136);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function m(t){let{className:e,block:n,selectedValue:r,selectValue:i,tabValues:a}=t;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),l=a[n].value;l!==r&&(o(e),i(l))},u=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:a.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,f.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>{c.push(t)},onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function b(t){let{lazy:e,children:n,selectedValue:s}=t;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===s));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function A(t){const e=j(t);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",y.tabList),children:[(0,f.jsx)(m,{...e,...t}),(0,f.jsx)(b,{...e,...t})]})}function v(t){const e=(0,g.A)();return(0,f.jsx)(A,{...t,children:u(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var r=n(6540);const l={},s=r.createContext(l);function i(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:i(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);