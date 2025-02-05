"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[4301],{8101:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(4848),l=n(8453),s=n(1470),a=n(9365);const i={sidebar_position:2,sidebar_label:"\u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647",title:"\u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647"},c="\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647",o={id:"developers/SimotelAPI/v4/call-originate",title:"\u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647",description:"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 (Number Masking) \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f. \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0647\u0645 \u062f\u0627\u062e\u0644\u06cc \u0628\u0627\u0634\u062f \u0648 \u0647\u0645 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc. \u0686\u0646\u0627\u0646 \u06a9\u0647 \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/4-call-originate.md",sourceDirName:"developers/2-SimotelAPI/v4",slug:"/developers/SimotelAPI/v4/call-originate",permalink:"/fa/developers/SimotelAPI/v4/call-originate",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647",title:"\u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647"},sidebar:"docs",previous:{title:"\u062a\u0633\u062a \u0627\u0631\u062a\u0628\u0627\u0637",permalink:"/fa/developers/SimotelAPI/v4/ping"},next:{title:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0631\u0628\u0631",permalink:"/fa/developers/SimotelAPI/v4/users/users_add"}},d={},u=[{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u062a\u0645\u0627\u0633-\u062f\u0648\u0637\u0631\u0641\u0647",children:"\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647"})}),"\n",(0,r.jsx)(e.p,{children:"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 (Number Masking) \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f. \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0647\u0645 \u062f\u0627\u062e\u0644\u06cc \u0628\u0627\u0634\u062f \u0648 \u0647\u0645 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc. \u0686\u0646\u0627\u0646 \u06a9\u0647 \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc\n\u0628\u0627\u0634\u062f\u060c \u0646\u0627\u0645 \u062a\u0631\u0627\u0646\u06a9 \u0646\u06cc\u0632 \u0628\u0627\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u0648\u062f. \u0645\u0642\u062f\u0627\u0631 time_out \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc \u0627\u0633\u062a \u0648 \u062f\u0631 \u0635\u0648\u0631\u062a \u0639\u062f\u0645 \u062a\u062e\u0635\u06cc\u0635 \u0628\u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 30 \u062b\u0627\u0646\u06cc\u0647 \u062f\u0631 \u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,r.jsx)(e.admonition,{title:"\u0646\u06a9\u062a\u0647 \u0645\u0647\u0645",type:"danger",children:(0,r.jsxs)(e.p,{children:["\u062f\u0631 \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u0641\u0631 \u0627\u0648\u0644 \u067e\u0627\u0633\u062e \u0646\u062f\u0647\u062f \u0648 \u062a\u0645\u0627\u0633 \u0631\u0627 \u0642\u0637\u0639 \u06a9\u0646\u062f\u061b \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062a\u0645\u0627\u0633(CDR) \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f. \u0627\u06af\u0631 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0627\u0647\u0645\u06cc\u062a \u0628\u0627\u0644\u0627\u06cc\u06cc \u062f\u0627\u0631\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 API\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0633\u0627\u062e\u062a \u06a9\u0645\u067e\u06cc\u0646 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a ",(0,r.jsx)(e.code,{children:"autodialer route"})," \u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f. \u0628\u0631\u0627\u06cc \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0628\u0647 ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"/developers/Autodialer_API/call_originate",children:"\u0627\u06cc\u0646 \u0642\u0633\u0645\u062a"})})," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."]})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"#%D9%BE%D8%A7%D8%B1%D8%A7%D9%85%D8%AA%D8%B1%D9%87%D8%A7",children:(0,r.jsx)(e.strong,{children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})})}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"(\u0646\u0641\u0631 \u0627\u0648\u0644 \u062f\u0631 \u062a\u0645\u0627\u0633)\u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"557"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"caller"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"(\u0646\u0641\u0631 \u062f\u0648\u0645 \u062f\u0631 \u062a\u0645\u0627\u0633)\u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0637\u0628"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"552"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"callee"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0645\u0633\u06cc\u0631 \u062a\u0645\u0627\u0633 \u0646\u0641\u0631 \u0627\u0648\u0644 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f(\u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a Outgoing_Route)"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"main_routing"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"context"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"557"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"557"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"caller_id"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0645\u0633\u06cc\u0631 \u062a\u0645\u0627\u0633 \u0646\u0641\u0631 \u062f\u0648\u0645 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"trunk_name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0627\u0646\u062a\u0638\u0627\u0631 \u0628\u0631\u0627\u06cc \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"30"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"timeout"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u062a\u0645\u0627\u0633 \u062a\u0644\u0641\u0646\u06cc"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"30"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"call_limit"})]})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(a.A,{value:"usageCode",children:(0,r.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(a.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => \'http://192.168.51.20/api/v4/call/originate/act\',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => \'\',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => \'PUT\',\n\t  CURLOPT_POSTFIELDS =>\'{\n\t\t"caller":"557",\n\t\t"callee":"552",\n\t\t"context":"main_routing",\n\t\t"caller_id":"557",\n\t\t"trunk_name":"cisco",\n\t\t"timeout":"30",\n\t\t"call_limit":"30"\n\t}\',\n\t  CURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n\t\t\'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n\t\t\'Content-Type: application/json\'\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,r.jsx)(a.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.20/api/v4/call/originate/act",\n\t\t\t\t  "method": "PUT",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t  "caller": "557",\n\t\t\t\t\t  "callee": "552",\n\t\t\t\t\t  "context": "main_routing",\n\t\t\t\t\t  "caller_id": "557",\n\t\t\t\t\t  "trunk_name": "cisco",\n\t\t\t\t\t  "timeout": "30",\n\t\t\t\t\t  "call_limit":"30"\n\t\t\t\t\t}),\n\t\t\t\t};\n\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(a.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'\n\tcurl --location --request PUT \'http://192.168.51.20/api/v4/call/originate/act\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"caller":"557",\n\t\t"callee":"552",\n\t\t"context":"main_routing",\n\t\t"caller_id":"557",\n\t\t"trunk_name":"",\n\t\t"timeout":"30",\n\t\t"call_limit":"30"\n\t}\'\n'})})]})})]})}),(0,r.jsx)(a.A,{value:"outputCode",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": null,\n    "data": {\n        "originated_call_id": "orig.call.1703145054.787335"\n    }\n}\n'})})})]}),"\n",(0,r.jsxs)(e.p,{children:["\u0628\u0647 \u062c\u0647\u062a \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631\u060c \u062f\u0631 \u0628\u062e\u0634 \u0645\u062b\u0627\u0644\u200c\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0686\u0646\u062f \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 ",(0,r.jsx)(e.a,{href:"/developers/Scenarios/call_originate",children:"\u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc"})," \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u06af\u0631\u0641\u062a\u0647\u200c \u0627\u0633\u062a."]})]})}function x(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>a});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(t){let{children:e,hidden:n,className:a}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>v});var r=n(6540),l=n(8215),s=n(3104),a=n(6347),i=n(205),c=n(7485),o=n(1682),d=n(679);function u(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return u(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,o.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function x(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:n}=t;const l=(0,a.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(l.location.search);e.set(s,t),l.replace({...l.location,search:e.toString()})}),[s,l])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,s=h(t),[a,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[o,u]=p({queryString:n,groupId:l}),[g,j]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,s]=(0,d.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:l}),m=(()=>{const t=o??g;return x({value:t,tabValues:s})?t:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((t=>{if(!x({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),j(t)}),[u,j,s]),tabValues:s}}var j=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function A(t){let{className:e,block:n,selectedValue:r,selectValue:a,tabValues:i}=t;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),l=i[n].value;l!==r&&(o(e),a(l))},u=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:i.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,b.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>c.push(t),onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function y(t){let{lazy:e,children:n,selectedValue:s}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===s));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function f(t){const e=g(t);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,b.jsx)(A,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function v(t){const e=(0,j.A)();return(0,b.jsx)(f,{...t,children:u(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var r=n(6540);const l={},s=r.createContext(l);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);