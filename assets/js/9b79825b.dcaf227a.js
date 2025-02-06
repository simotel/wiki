"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[7433],{3141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developers/SimotelAPI/v4/fax/fax_download","title":"Fax Download","description":"This service is used to download a received fax.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/12-fax/4-fax_download.md","sourceDirName":"developers/2-SimotelAPI/v4/12-fax","slug":"/developers/SimotelAPI/v4/fax/fax_download","permalink":"/developers/SimotelAPI/v4/fax/fax_download","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"docs","previous":{"title":"Fax Search","permalink":"/developers/SimotelAPI/v4/fax/fax_search"},"next":{"title":"Quick Search","permalink":"/developers/SimotelAPI/v4/report/quick_search"}}');var a=n(4848),l=n(8453),s=n(5537),o=n(9329);const i={title:void 0},u="Fax Download",c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Sample Invocation",id:"sample-invocation",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"fax-download",children:"Fax Download"})}),"\n",(0,a.jsx)(t.p,{children:"This service is used to download a received fax."}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)("div",{class:"custom-table",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Sample Data"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Required[**]/Logical[*]"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{style:{textAlign:"center"},children:["Unique identifier for the fax obtained from ",(0,a.jsx)(t.a,{href:"/developers/SimotelAPI/v4/fax/fax_search",children:"fax search"})]}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"5fe7b083b6e91a5ef2bbf7bb"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"id_"})]})})]})}),"\n",(0,a.jsx)(t.h2,{id:"sample-invocation",children:"Sample Invocation"}),"\n","\n",(0,a.jsx)(s.A,{defaultValue:"usageCode",values:[{label:"Example Code To Use",value:"usageCode"}],children:(0,a.jsx)(o.A,{value:"usageCode",children:(0,a.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"Curl",value:"Curl"}],children:[(0,a.jsx)(o.A,{value:"PHP",children:(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Show Full Source Code PHP"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => 'http://192.168.51.21/api/v4/pbx/faxes/download',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => '',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => 'POST',\n\t  CURLOPT_POSTFIELDS =>'{\n\t\t\"_id\":\"5fe7b083b6e91a5ef2bbf7bb\"\n\t}',\n\t  CURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n\t\t'Content-Type: application/json'\n\t  ),\n\t));\n\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo 'response code:'.$httpcode, '<br/>';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n"})})]})}),(0,a.jsx)(o.A,{value:"Curl",children:(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Show Full Source Code Curl"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\tcurl --location --request POST 'http://192.168.51.21/api/v4/pbx/faxes/download' \\\n\t--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \\\n\t--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \\\n\t--header 'Content-Type: application/json' \\\n\t--data-raw '{\n\t\t\"_id\":\"5fe7b083b6e91a5ef2bbf7bb\"\n\t}'\n"})})]})})]})})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),a=n(8215),l=n(5627),s=n(6347),o=n(372),i=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:n,groupId:a}),[b,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),m=(()=>{const e=u??b;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function A(e){const t=(0,x.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);