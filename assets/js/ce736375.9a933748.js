"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[248],{2224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(4848),r=t(8453);const i={title:void 0},o=void 0,s={id:"autodialer/trunk_manager",title:"trunk_manager",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/autodialer/5-trunk_manager.md",sourceDirName:"autodialer",slug:"/autodialer/trunk_manager",permalink:"/autodialer/trunk_manager",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"Autodialer",previous:{title:"announcements",permalink:"/autodialer/announcements"},next:{title:"campaigns",permalink:"/autodialer/campaigns"}},l={},u=[];function c(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:'sidebar_label: "Trunk Manager"\ntitle: "Trunk Manager"\n---\n\n# Trunk Manager\n\nThe trunk connects the contact center to the telecommunications network. Since the goal is bulk calling, limitations need to be applied to the trunk. These include defining the maximum number of simultaneous outgoing calls and the timeframes for making calls. After creating the Trunk Manager, it will be used in campaigns for bulk calling.\n\n## Trunk Manager Parameters\n\n- **Name**: Define a name for the Trunk Manager.\n\n- **Trunk**: Select the trunk responsible for outgoing calls.\n\n- **Status**: Specify whether the Trunk Manager is active or inactive.\n\n- **Dial Times**: Define the days and hours of the week for bulk calling.\n\n- **Capacity**: Specify the maximum number of channels to be used simultaneously by the bulk calling module. For instance, if you have an E1 line with 30 channels, you can set the bulk calling module to use up to 20 channels simultaneously, leaving 10 channels free for staff to handle incoming and outgoing calls.\n\n- **Dial Interval**: Define the interval between each call sent to the trunk. For example, if set to five, a call will be sent every five seconds. This parameter is measured in seconds.\n\n- **Wait Cache Length**: Specify the number of records retrieved from the database per query. For instance, if set to 100, 100 records will be fetched per query. The default value is the most suitable setting.\n'})})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);