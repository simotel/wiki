"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[9540],{5650:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"developers/Autodialer_API/report/report_search","title":"\u06af\u0632\u0627\u0631\u0634\u0627\u062a \u06a9\u0645\u067e\u06cc\u0646","description":"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u062c\u0633\u062a\u062c\u0648\u06cc \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u0645\u067e\u06cc\u0646 \u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0627\u0631\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/7-report/1-report_search.md","sourceDirName":"developers/5-Autodialer_API/7-report","slug":"/developers/Autodialer_API/report/report_search","permalink":"/fa/developers/Autodialer_API/report/report_search","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"\u06af\u0632\u0627\u0631\u0634\u0627\u062a \u06a9\u0645\u067e\u06cc\u0646","title":"\u06af\u0632\u0627\u0631\u0634\u0627\u062a \u06a9\u0645\u067e\u06cc\u0646"},"sidebar":"docs","previous":{"title":"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u062a\u0631\u0627\u0646\u06a9 \u0647\u0627","permalink":"/fa/developers/Autodialer_API/trunk_manager/trunk_manager_edit"},"next":{"title":"\u06af\u0632\u0627\u0631\u0634\u0627\u062a \u062a\u0631\u062a\u06cc\u0628\u06cc \u062a\u0645\u0627\u0633 \u0627\u0646\u0628\u0648\u0647","permalink":"/fa/developers/Autodialer_API/report/report_search_ordered"}}');var l=n(4848),s=n(8453),a=n(5537),i=n(9329);const c={sidebar_label:"\u06af\u0632\u0627\u0631\u0634\u0627\u062a \u06a9\u0645\u067e\u06cc\u0646",title:"\u06af\u0632\u0627\u0631\u0634\u0627\u062a \u06a9\u0645\u067e\u06cc\u0646"},o="Report Search",d={},u=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"report-search",children:"Report Search"})}),"\n",(0,l.jsx)(e.p,{children:"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u062c\u0633\u062a\u062c\u0648\u06cc \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u0645\u067e\u06cc\u0646 \u06a9\u0627\u0631\u0628\u0631\u062f \u062f\u0627\u0631\u062f."}),"\n",(0,l.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u06cc\u0627\u0641\u062a\u0646 \u0645\u0648\u0627\u0631\u062f \u0645\u0634\u0627\u0628\u0647"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"true/false"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"true"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"alike"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->start"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"20"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->count"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"pagination->sorting"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648\u06cc \u06a9\u0645\u067e\u06cc\u0646 \u0627\u0632 \u062a\u0627\u0631\u06cc\u062e"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"2020-12-26 15:29"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"date_range->from"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648\u06cc \u06a9\u0645\u067e\u06cc\u0646 \u062a\u0627 \u062a\u0627\u0631\u06cc\u062e"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"2022-12-26 15:29"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"date_range->to"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"LOST"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->disposition"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u06a9\u0645\u067e\u06cc\u0646"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"60c74cec7d2c21279a29b4e"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->campaign_id"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u062c\u0633\u062a\u062c\u0648 \u0628\u0631\u0627\u0633\u0627\u0633 \u0634\u0645\u0627\u0631\u0647"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"09376131239"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"conditions->number"})]})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,l.jsxs)(a.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,l.jsx)(i.A,{value:"usageCode",children:(0,l.jsxs)(a.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(i.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => \'http://192.168.51.20/api/v4/autodialer/reports/search\',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => \'\',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => \'POST\',\n\t  CURLOPT_POSTFIELDS =>\'{\n\t\t"alike":"true",\n\t\t"pagination":{"start":0,"count":20,"sorting":{}},\n\t\t"date_range":{"from":"2020-12-26 15:29","to":"2022-12-28 15:29"},\n\t\t"conditions":{\n\t\t\t"disposition":"",\n\t\t\t"campaign_id":"60c74cec7d2c21279a295b4e",\n\t\t\t"number":"09376131239"}\n\t}\',\n\t  CURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\n\t\t\'Authorization: Basic c2FkcjpTYWRyQDEyMw==\',\n\t\t\'Content-Type: application/json\'\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,l.jsx)(i.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.20/api/v4/autodialer/reports/search",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n\t\t\t\t\t"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t"alike": "true",\n\t\t\t\t\t"pagination": {\n\t\t\t\t\t  "start": 0,\n\t\t\t\t\t  "count": 20,\n\t\t\t\t\t  "sorting": {}\n\t\t\t\t\t},\n\t\t\t\t\t"date_range": {\n\t\t\t\t\t  "from": "2020-12-26 15:29",\n\t\t\t\t\t  "to": "2022-12-28 15:29"\n\t\t\t\t\t},\n\t\t\t\t\t"conditions": {\n\t\t\t\t\t  "disposition": "",\n\t\t\t\t\t  "campaign_id": "60c74cec7d2c21279a295b4e",\n\t\t\t\t\t  "number": "09376131239"\n\t\t\t\t\t}\n\t\t\t\t  }),\n\t\t\t\t};\n\n\t\t\t\t$.ajax(settings).done(function (response) {\n\t\t\t\t  console.log(response);\n\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,l.jsx)(i.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/autodialer/reports/search\' \\\n\t--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\n\t--header \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"alike":"true",\n\t\t"pagination":{"start":0,"count":20,"sorting":{}},\n\t\t"date_range":{"from":"2020-12-26 15:29","to":"2022-12-28 15:29"},\n\t\t"conditions":{\n\t\t\t"disposition":"",\n\t\t\t"campaign_id":"60c74cec7d2c21279a295b4e",\n\t\t\t"number":"09376131239"}\n\t}\'\n'})})]})})]})}),(0,l.jsx)(i.A,{value:"outputCode",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": {\n        "pagination": {\n            "start": 0,\n            "count": 20,\n            "sorting": {\n                "date": -1\n            },\n            "total": 1\n        },\n        "data": [\n            {\n                "_id": "60c74f8b00035c9848c6fd5b",\n                "start": "1399-12-01 15:17:00",\n                "end": "1400-12-04 15:17:00",\n                "date": "1400-03-24 12:46:03",\n                "campaign_id": {\n                    "$oid": "60c74cec7d2c21279a295b4e"\n                },\n                "campaign": "test1111api",\n                "interface_context": "",\n                "interface_text": "",\n                "trunk_manager_id": {\n                    "$oid": "5f7586bcce4f6d03da37cf17"\n                },\n                "announcement": "5f3ce4f1ce4f6d20217c8830",\n                "number": "09376131239",\n                "disposition": "LOST",\n                "try": 1,\n                "repeat": 1,\n                "status": "in-process",\n                "billsec": 0,\n                "wait": 0,\n                "input": "",\n                "tries": [\n                    {\n                        "cdr_id": {\n                            "$oid": "60c74f8b00035c9848c6fd5a"\n                        },\n                        "cause": null,\n                        "cause-txt": null,\n                        "starttime": {\n                            "$date": {\n                                "$numberLong": "1623658563809"\n                            }\n                        },\n                        "disposition": "LOST",\n                        "wait": 0\n                    }\n                ],\n                "LOST": 1,\n                "billsec_hhmmss": "00:00:00",\n                "wait_hhmmss": "00:00:00"\n            }\n        ]\n    }\n}\n'})})})]})]})}function x(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(h,{...t})}):h(t)}},9329:(t,e,n)=>{n.d(e,{A:()=>a});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(t){let{children:e,hidden:n,className:a}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:e})}},5537:(t,e,n)=>{n.d(e,{A:()=>v});var r=n(6540),l=n(8215),s=n(5627),a=n(6347),i=n(372),c=n(604),o=n(1861),d=n(8749);function u(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return u(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,o.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function x(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:n}=t;const l=(0,a.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(l.location.search);e.set(s,t),l.replace({...l.location,search:e.toString()})}),[s,l])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,s=h(t),[a,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[o,u]=p({queryString:n,groupId:l}),[g,j]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,s]=(0,d.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:l}),m=(()=>{const t=o??g;return x({value:t,tabValues:s})?t:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((t=>{if(!x({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),j(t)}),[u,j,s]),tabValues:s}}var j=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function f(t){let{className:e,block:n,selectedValue:r,selectValue:a,tabValues:i}=t;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),l=i[n].value;l!==r&&(o(e),a(l))},u=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:i.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,b.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>{c.push(t)},onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function y(t){let{lazy:e,children:n,selectedValue:s}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===s));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function A(t){const e=g(t);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function v(t){const e=(0,j.A)();return(0,b.jsx)(A,{...t,children:u(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var r=n(6540);const l={},s=r.createContext(l);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);