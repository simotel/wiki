"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[8223],{9518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(4848),a=n(8453),l=n(1470),s=n(9365);const i={title:void 0},o="Trunk Search",u={id:"developers/Autodialer_API/trunk_manager/trunk_manager_search",title:"Trunk Search",description:"This service is used to search in the TrunkManager.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/6-trunk_manager/1-trunk_manager_search.md",sourceDirName:"developers/5-Autodialer_API/6-trunk_manager",slug:"/developers/Autodialer_API/trunk_manager/trunk_manager_search",permalink:"/developers/Autodialer_API/trunk_manager/trunk_manager_search",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Announce Remove",permalink:"/developers/Autodialer_API/announcement/announcement_delete"},next:{title:"Trunk Update",permalink:"/developers/Autodialer_API/trunk_manager/trunk_manager_edit"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Sample Invocation",id:"sample-invocation",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"trunk-search",children:"Trunk Search"})}),"\n",(0,r.jsxs)(t.p,{children:["This service is used to search in the ",(0,r.jsx)(t.strong,{children:"TrunkManager"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Example Data"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required[**]/Optional[*]"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Search for Similar Items"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"true/false"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"alike"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Trunk Manager Name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"autodialer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"conditions->title"})]})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"sample-invocation",children:"Sample Invocation"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"usageCode",values:[{label:"Example Code To Use",value:"usageCode"},{label:"Example Output",value:"outputCode"}],children:[(0,r.jsx)(s.A,{value:"usageCode",children:(0,r.jsxs)(l.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(s.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/trunks/search',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => '',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => 'POST',\n\t  CURLOPT_POSTFIELDS =>'{\n\t\t\"alike\":\"true\",\n\t\t\"conditions\":{\"title\":\"autodialer\"}\n\t}',\n\t  CURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',\n\t\t'Authorization: Basic c2FkcjpTYWRyQDEyMw==',\n\t\t'Content-Type: application/json'\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tcurl_close($curl);\n\techo $response;\n?>\n"})})]})}),(0,r.jsx)(s.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.20/api/v4/autodialer/trunks/search",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n\t\t\t\t\t"Authorization": "Basic c2FkcjpTYWRyQDEyMw==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t"alike": "true",\n\t\t\t\t\t"conditions": {\n\t\t\t\t\t  "title": "autodialer"\n\t\t\t\t\t}\n\t\t\t\t  }),\n\t\t\t\t};\n\n\t\t\t\t$.ajax(settings).done(function (response) {\n\t\t\t\t  console.log(response);\n\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(s.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\tcurl --location --request POST 'http://192.168.51.20/api/v4/autodialer/trunks/search' \\\n\t--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \\\n\t--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \\\n\t--header 'Content-Type: application/json' \\\n\t--data-raw '{\n\t\t\"alike\":\"true\",\n\t\t\"conditions\":{\"title\":\"autodialer\"}\n\t}'\n"})})]})})]})}),(0,r.jsx)(s.A,{value:"outputCode",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": [\n        {\n            "_id": "5ec63107ce4f6d12c43e250f",\n            "title": "autodialer",\n            "trunk_id": {\n                "$oid": "5f19760ace4f6d16dd2e3e0c"\n            },\n            "status": "active",\n            "active_times": {\n                "1": [\n                    "10",\n                    "11",\n                    "12",\n                    "13",\n                    "14",\n                    "15",\n                    "16",\n                    "17",\n                    "18",\n                    "19"\n                ],\n                "2": [\n                    "10",\n                    "11",\n                    "12",\n                    "13",\n                    "14",\n                    "15",\n                    "16",\n                    "17",\n                    "18",\n                    "19"\n                ],\n                "3": [\n                    "10",\n                    "11",\n                    "12",\n                    "13",\n                    "14",\n                    "15",\n                    "16",\n                    "17"\n                ],\n                "4": [\n                    "10",\n                    "11",\n                    "12",\n                    "13",\n                    "14",\n                    "15",\n                    "16",\n                    "17",\n                    "18",\n                    "19"\n                ],\n                "6": [\n                    "10",\n                    "11",\n                    "12",\n                    "13",\n                    "14",\n                    "15",\n                    "16",\n                    "17",\n                    "18"\n                ],\n                "7": [\n                    "9",\n                    "10",\n                    "11",\n                    "12",\n                    "13",\n                    "14",\n                    "15",\n                    "16",\n                    "17"\n                ]\n            },\n            "capacity": "5",\n            "dial_interval": "1",\n            "wait_cache_length": "100",\n            "date": "1399-03-01 12:13:03",\n            "current_capacity": 0,\n            "current_wait_cache_length": 0\n        }\n    ]\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(6540),a=n(8215),l=n(3104),s=n(6347),i=n(205),o=n(7485),u=n(1682),c=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);