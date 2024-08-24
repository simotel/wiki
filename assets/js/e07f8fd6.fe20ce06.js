"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||u;return n?a.createElement(b,l(l({ref:t},i),{},{components:n})):a.createElement(b,l({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,l=new Array(u);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<u;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const u={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(u.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),u=n(6010),l=n(2466),o=n(6550),s=n(1980),c=n(7392),i=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),u=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(u),(0,r.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(a.location.search);t.set(u,e),a.replace({...a.location,search:t.toString()})}),[u,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,u=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:u}))),[s,c]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,u]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&u.set(e)}),[n,u])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:u})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,u]),tabValues:u}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,u.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,u.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},6969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),u=n(4866),l=n(5162);const o={},s="Batch pause Agent",c={unversionedId:"developers/api/SimotelAPI/v4/queues/queue_batchpauseagent",id:"developers/api/SimotelAPI/v4/queues/queue_batchpauseagent",title:"Batch pause Agent",description:"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u062f\u0633\u062a\u0647\u200c\u0627\u06cc \u0628\u0647 \u062d\u0627\u0644\u062a \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u062f\u0631 \u0635\u0641 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.",source:"@site/docs/developers/1-api/2-SimotelAPI/v4/6-queues/10-queue_batchpauseagent.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/6-queues",slug:"/developers/api/SimotelAPI/v4/queues/queue_batchpauseagent",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queue_batchpauseagent",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"docs",previous:{title:"Batch Add Agent",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queue_batchaddagent"},next:{title:"Batch Resume Agent",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queue_batchresumagent"}},i={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batch-pause-agent"},"Batch pause Agent"),(0,r.kt)("p",null,"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u062f\u0633\u062a\u0647\u200c\u0627\u06cc \u0628\u0647 \u062d\u0627\u0644\u062a \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u062f\u0631 \u0635\u0641 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,r.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647\u200c\u0635\u0641"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10000"),(0,r.kt)("td",{parentName:"tr",align:"center"},"**"),(0,r.kt)("td",{parentName:"tr",align:"center"},"queue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647\u200c\u0627\u067e\u0631\u0627\u062a\u0648\u0631"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"570"),(0,r.kt)("td",{parentName:"tr",align:"center"},"**"),(0,r.kt)("td",{parentName:"tr",align:"center"},"agent")))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,r.kt)(u.Z,{className:"unique-tabs",defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    <?php\n\n    $curl = curl_init();\n\n    curl_setopt_array($curl, array(\n      CURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/queues/batchpauseagent\',\n      CURLOPT_RETURNTRANSFER => true,\n      CURLOPT_ENCODING => \'\',\n      CURLOPT_MAXREDIRS => 10,\n      CURLOPT_TIMEOUT => 0,\n      CURLOPT_FOLLOWLOCATION => true,\n      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n      CURLOPT_CUSTOMREQUEST => \'POST\',\n      CURLOPT_POSTFIELDS =>\'{\n        "agents":[\n            {"queue": "10000", "agent": "570"},\n            {"queue": "10000", "agent": "553"}\n        ]\n    }\',\n      CURLOPT_HTTPHEADER => array(\n        \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\n        \'Authorization: Basic c2Fkcjo=\',\n        \'Content-Type: application/json\'\n      ),\n    ));\n\n    $response = curl_exec($curl);\n\n    curl_close($curl);\n    echo $response;\n?>\n'))),(0,r.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    <html>\n        <head>\n            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n        </head>\n        <body>\n                <script>\n                    var settings = {\n                      "url": "http://192.168.51.20/api/v4/pbx/queues/batchpauseagent",\n                      "method": "POST",\n                      "timeout": 0,\n                      "headers": {\n                        "X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n                        "Authorization": "Basic c2Fkcjo=",\n                        "Content-Type": "application/json"\n                      },\n                      "data": JSON.stringify({\n                        "agents": [\n                          {\n                            "queue": "10000",\n                            "agent": "570"\n                          },\n                          {\n                            "queue": "10000",\n                            "agent": "553"\n                          }\n                        ]\n                      }),\n                    };\n\n                    $.ajax(settings).done(function (response) {\n                      console.log(response);\n                    });\n                <\/script>\n        </body>\n    </html>\n'))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://192.168.51.20/api/v4/pbx/queues/batchpauseagent\' \\\n--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\n--header \'Authorization: Basic c2Fkcjo=\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "agents":[\n        {"queue": "10000", "agent": "570"},\n        {"queue": "10000", "agent": "553"}\n    ]\n}\'\n')))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": "",\n    "data": {\n        "Data": [\n            {\n                "agent": "570",\n                "message": "Paused successfully",\n                "ok": 1,\n                "queue": "10000"\n            },\n            {\n                "agent": "553",\n                "message": "Paused successfully",\n                "ok": 1,\n                "queue": "10000"\n            }\n        ],\n        "ok": 1\n    }\n}\n')))}b.isMDXComponent=!0}}]);