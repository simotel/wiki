"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3871],{4097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"pbx/pbx-menu/maintenance/accounts","title":"Accounts","description":"This menu displays the list of users in the web panel. From this section, you can add new users and edit or delete existing ones.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/3- pbx-menu/8-maintenance/1-accounts.md","sourceDirName":"pbx/3- pbx-menu/8-maintenance","slug":"/pbx/pbx-menu/maintenance/accounts","permalink":"/pbx/pbx-menu/maintenance/accounts","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"Docs","previous":{"title":"User Reports","permalink":"/pbx/pbx-menu/reports/custom_report"},"next":{"title":"Groups","permalink":"/pbx/pbx-menu/maintenance/groups"}}');var r=s(4848),i=s(8453);const c={title:void 0},o="Accounts",a={},l=[{value:"User Parameters",id:"user-parameters",level:2},{value:"Security Processes for User Panel Login",id:"security-processes-for-user-panel-login",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"accounts",children:"Accounts"})}),"\n",(0,r.jsx)(n.p,{children:"This menu displays the list of users in the web panel. From this section, you can add new users and edit or delete existing ones."}),"\n",(0,r.jsx)(n.h2,{id:"user-parameters",children:"User Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": User's name."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Username"}),": Unique user account."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Password"}),": User's password."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Account Type"}),": Determines the access level to the panel; access levels are specified in the ",(0,r.jsx)(n.code,{children:"Account Type"})," section."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enabled"}),": Indicates whether the user account is active or inactive."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Details"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Remove"}),": Used to delete the account."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Edit"}),": Edit the user account."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cut Current Access"}),": Disconnects logged-in access (useful when changing the password and wanting to cut off all current access immediately so that everyone must log in with the new password)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"security-processes-for-user-panel-login",children:"Security Processes for User Panel Login"}),"\n",(0,r.jsx)(n.p,{children:"To enhance system security during the login phase, the following processes are checked in order:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Captcha"}),": If the ",(0,r.jsx)(n.a,{href:"/pbx/pbx-menu/maintenance/settings/general_settings",children:"captcha"})," feature is enabled, many common attacks on the web panel will fail."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Account Status (Active, Inactive)"}),": The system checks the status of the user account."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last Failed Attempt Time"}),": If the username or password is entered incorrectly, the time for the next login attempt must be at least 5 seconds; otherwise, the system will not allow access (prevents brute-force attacks)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Number of Failed Attempts"}),": If more than three incorrect login attempts are made, the captcha feature is automatically activated. Ultimately, if ten consecutive incorrect attempts occur, the user account is automatically disabled."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Password"}),": Finally, the entered password is checked by the system, and if the information is correct, the user is granted access to the web panel."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": After a user logs into the web panel, information such as the user's IP, the account's active or inactive status, and the account expiration date are checked in real-time. If there are changes in any of these areas, the assigned session token becomes inactive, requiring the user to log in again."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Information"}),": When there are multiple unsuccessful login attempts on a system, a report of the failed logins will be shown to the user after the first successful login."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);