"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2641],{3651:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"developers/Autodialer_API/campaign/campaign_add","title":"Campaign Add","description":"This service is used to add a campaign.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/4-campaign/1-campaign_add.md","sourceDirName":"developers/5-Autodialer_API/4-campaign","slug":"/developers/Autodialer_API/campaign/campaign_add","permalink":"/developers/Autodialer_API/campaign/campaign_add","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"docs","previous":{"title":"Group Remove","permalink":"/developers/Autodialer_API/group/group_delete"},"next":{"title":"Campaign Search","permalink":"/developers/Autodialer_API/campaign/campaign_search"}}');var l=n(4848),s=n(8453),a=n(5537),i=n(9329);const c={title:void 0},d="Campaign Add",o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Sample Invocation",id:"sample-invocation",level:2}];function x(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"campaign-add",children:"Campaign Add"})}),"\n",(0,l.jsx)(e.p,{children:"This service is used to add a campaign."}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"Example Data"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"Required[**]/Optional[*]"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Campaign Name"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"test"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"name"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Unique Trunk ID obtained from search"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"5f6c5b56c92de0068f32e592"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"trunk_manager_id"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Context value in autodialer component route"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"auto"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"interface_context"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Text value in autodialer component route"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"text1"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"interface_text"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Phone Numbers"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"09212396500"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"numbers"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Unique Group ID obtained from search"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:'"5e96c8c2c92de0468920657e", "5e96d40cc92de025690d0a61"'}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"groups"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Time interval between each attempt"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"600"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"try_interval"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Number of retries"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"try"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Campaign Start Time"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"2021-02-19 15:17"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"start"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Campaign End Time"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"2021-02-23 15:17"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"end"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Unique Audio File ID obtained from search"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"5e5b629ec92de075df7af457"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"announcement"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Description"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"description"})]})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"sample-invocation",children:"Sample Invocation"}),"\n","\n",(0,l.jsxs)(a.A,{defaultValue:"usageCode",values:[{label:"Example Code To Use",value:"usageCode"},{label:"Example Output",value:"outputCode"}],children:[(0,l.jsx)(i.A,{value:"usageCode",children:(0,l.jsxs)(a.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(i.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Show Full Source Code PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/campaigns/add",\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => "",\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => "POST",\n\t  CURLOPT_POSTFIELDS =>"{\\r\\n    \\"name\\":\\"test\\",\\r\\n    \\"trunk_manager_id\\":\\"5f6c5b56c92de0068f32e592\\",\\r\\n    \\"interface_context\\":\\"auto\\",\\r\\n    \\"interface_text\\":\\"text1\\",\\r\\n    \\"numbers\\":[\\"09212396500\\"],\\r\\n    \\"groups\\":[\\"5e96c8c2c92de0468920657e\\",\\"5e96d40cc92de025690d0a61\\"],\\r\\n    \\"try_interval\\":\\"600\\",\\r\\n    \\"try\\":\\"1\\",\\r\\n    \\"start\\":\\"2021-02-19 15:17\\",\\r\\n    \\"end\\":\\"2021-02-23 15:17\\",\\r\\n    \\"announcement\\":\\"5e5b629ec92de075df7af457\\",\\r\\n    \\"description\\":\\"\\",\\r\\n    \\"count\\":3\\r\\n}",\n\t  CURLOPT_HTTPHEADER => array(\n\t\t"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t"Content-Type: application/json"\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,l.jsx)(i.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Show Full Source Code JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.21/api/v4/autodialer/campaigns/add",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t  "name": "test",\n\t\t\t\t\t  "trunk_manager_id": "5f6c5b56c92de0068f32e592",\n\t\t\t\t\t  "interface_context": "auto",\n\t\t\t\t\t  "interface_text": "text1",\n\t\t\t\t\t  "numbers": [\n\t\t\t\t\t\t"09212396500"\n\t\t\t\t\t  ],\n\t\t\t\t\t  "groups": [\n\t\t\t\t\t\t"5e96c8c2c92de0468920657e",\n\t\t\t\t\t\t"5e96d40cc92de025690d0a61"\n\t\t\t\t\t  ],\n\t\t\t\t\t  "try_interval": "600",\n\t\t\t\t\t  "try": "1",\n\t\t\t\t\t  "start": "2021-02-19 15:17",\n\t\t\t\t\t  "end": "2021-02-23 15:17",\n\t\t\t\t\t  "announcement": "5e5b629ec92de075df7af457",\n\t\t\t\t\t  "description": "",\n\t\t\t\t\t  "count": 3\n\t\t\t\t\t}),\n\t\t\t\t};\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,l.jsx)(i.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"Show Full Source Code Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.21/api/v4/autodialer/campaigns/add\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"name":"test",\n\t\t"trunk_manager_id":"5f6c5b56c92de0068f32e592",\n\t\t"interface_context":"auto",\n\t\t"interface_text":"text1",\n\t\t"numbers":["09212396500"],\n\t\t"groups":["5e96c8c2c92de0468920657e","5e96d40cc92de025690d0a61"],\n\t\t"try_interval":"600",\n\t\t"try":"1",\n\t\t"start":"2021-02-19 15:17",\n\t\t"end":"2021-02-23 15:17",\n\t\t"announcement":"5e5b629ec92de075df7af457",\n\t\t"description":"",\n\t\t"count":3\n\t}\'\n'})})]})})]})}),(0,l.jsx)(i.A,{value:"outputCode",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": {\n        "_id": "654338c7766d71477c6319c3"\n    }\n}\n'})})})]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(x,{...t})}):x(t)}},9329:(t,e,n)=>{n.d(e,{A:()=>a});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(t){let{children:e,hidden:n,className:a}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:e})}},5537:(t,e,n)=>{n.d(e,{A:()=>v});var r=n(6540),l=n(8215),s=n(5627),a=n(6347),i=n(372),c=n(604),d=n(1861),o=n(8749);function u(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return u(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,d.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function h(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:n}=t;const l=(0,a.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(l.location.search);e.set(s,t),l.replace({...l.location,search:e.toString()})}),[s,l])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,s=x(t),[a,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[d,u]=p({queryString:n,groupId:l}),[g,m]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,s]=(0,o.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:l}),j=(()=>{const t=d??g;return h({value:t,tabValues:s})?t:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((t=>{if(!h({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);c(t),u(t),m(t)}),[u,m,s]),tabValues:s}}var m=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function A(t){let{className:e,block:n,selectedValue:r,selectValue:a,tabValues:i}=t;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),o=t=>{const e=t.currentTarget,n=c.indexOf(e),l=i[n].value;l!==r&&(d(e),a(l))},u=t=>{let e=null;switch(t.key){case"Enter":o(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:i.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,y.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>{c.push(t)},onKeyDown:u,onClick:o,...s,className:(0,l.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function f(t){let{lazy:e,children:n,selectedValue:s}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===s));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function b(t){const e=g(t);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,y.jsx)(A,{...e,...t}),(0,y.jsx)(f,{...e,...t})]})}function v(t){const e=(0,m.A)();return(0,y.jsx)(b,{...t,children:u(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var r=n(6540);const l={},s=r.createContext(l);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);