"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[9370],{3402:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developers/Autodialer_API/contact/contact_edit","title":"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062e\u0627\u0637\u0628","description":"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/2-contact/3-contact_edit.md","sourceDirName":"developers/5-Autodialer_API/2-contact","slug":"/developers/Autodialer_API/contact/contact_edit","permalink":"/fa/developers/Autodialer_API/contact/contact_edit","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062e\u0627\u0637\u0628","title":"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062e\u0627\u0637\u0628"},"sidebar":"docs","previous":{"title":"\u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062e\u0627\u0637\u0628","permalink":"/fa/developers/Autodialer_API/contact/contact_search"},"next":{"title":"\u062d\u0630\u0641  \u0645\u062e\u0627\u0637\u0628","permalink":"/fa/developers/Autodialer_API/contact/contact_delete"}}');var l=n(4848),a=n(8453),s=n(5537),c=n(9329);const o={sidebar_label:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062e\u0627\u0637\u0628",title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0645\u062e\u0627\u0637\u0628"},i="Contact Update",u={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"contact-update",children:"Contact Update"})}),"\n",(0,l.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,l.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsxs)(e.td,{style:{textAlign:"center"},children:["\u0634\u0646\u0627\u0633\u0647\u200c\u06cc\u06a9\u062a\u0627 \u06a9\u0647 \u0627\u0632 ",(0,l.jsx)(e.a,{href:"/developers/Autodialer_API/contact/contact_search",children:"\u062c\u0633\u062a\u062c\u0648"})," \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"]}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"60461561095d840c2e477098"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"id_"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0645\u062e\u0627\u0637\u0628"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"test_contact_new"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"name"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0637\u0628"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"11223"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"number"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"Just for test"}),(0,l.jsx)(e.td,{style:{textAlign:"center"}}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"description"})]})]})]})}),"\n",(0,l.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,l.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,l.jsx)(c.A,{value:"usageCode",children:(0,l.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(c.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/contacts/update",\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => "",\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => "POST",\n\t  CURLOPT_POSTFIELDS =>"{\\r\\n    \\"_id\\":\\"60461561095d840c2e477098\\",\\r\\n    \\"name\\":\\"test_contact_new\\",\\r\\n    \\"number\\":\\"11223\\",\\r\\n    \\"description\\":\\"Just for test\\"\\r\\n}",\n\t  CURLOPT_HTTPHEADER => array(\n\t\t"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t"Content-Type: application/json"\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,l.jsx)(c.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t\t<head>\n\t\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.21/api/v4/autodialer/contacts/update",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t  "_id": "60461561095d840c2e477098",\n\t\t\t\t\t  "name": "test_contact_new",\n\t\t\t\t\t  "number": "11223",\n\t\t\t\t\t  "description": "Just for test"\n\t\t\t\t\t}),\n\t\t\t\t};\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,l.jsx)(c.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.21/api/v4/autodialer/contacts/update\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"_id":"60461561095d840c2e477098",\n\t\t"name":"test_contact_new",\n\t\t"number":"11223",\n\t\t"description":"Just for test"\n\t}\'\n'})})]})})]})}),(0,l.jsx)(c.A,{value:"outputCode",children:(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'{\n    {\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": ""\n}\n}\n'})})})]})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(h,{...t})}):h(t)}},9329:(t,e,n)=>{n.d(e,{A:()=>s});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(t){let{children:e,hidden:n,className:s}=t;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:e})}},5537:(t,e,n)=>{n.d(e,{A:()=>y});var r=n(6540),l=n(8215),a=n(5627),s=n(6347),c=n(372),o=n(604),i=n(1861),u=n(8749);function d(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return d(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,i.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function x(t){let{queryString:e=!1,groupId:n}=t;const l=(0,s.W6)(),a=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(l.location.search);e.set(a,t),l.replace({...l.location,search:e.toString()})}),[a,l])]}function b(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=h(t),[s,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[i,d]=x({queryString:n,groupId:l}),[b,j]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,a]=(0,u.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&a.set(t)}),[n,a])]}({groupId:l}),m=(()=>{const t=i??b;return p({value:t,tabValues:a})?t:null})();(0,c.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);o(t),d(t),j(t)}),[d,j,a]),tabValues:a}}var j=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function g(t){let{className:e,block:n,selectedValue:r,selectValue:s,tabValues:c}=t;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),u=t=>{const e=t.currentTarget,n=o.indexOf(e),l=c[n].value;l!==r&&(i(e),s(l))},d=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=o.indexOf(t.currentTarget)+1;e=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(t.currentTarget)-1;e=o[n]??o[o.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:c.map((t=>{let{value:e,label:n,attributes:a}=t;return(0,f.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>{o.push(t)},onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function v(t){let{lazy:e,children:n,selectedValue:a}=t;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=s.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})))})}function A(t){const e=b(t);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function y(t){const e=(0,j.A)();return(0,f.jsx)(A,{...t,children:d(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>c});var r=n(6540);const l={},a=r.createContext(l);function s(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:s(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);