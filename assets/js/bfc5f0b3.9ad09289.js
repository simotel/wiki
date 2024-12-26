"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[9828],{1168:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(4848),l=i(8453);const t={title:"Dialer.ini",sidebar_label:"Dialer.ini"},r="Dialer.ini Settings",o={id:"autodialer/dialer.ini",title:"Dialer.ini",description:"The dialer.ini file contains the settings for the bulk calling module. The path to this file is /etc/simotel/dialer.ini/. You can open this file and make changes using the following command.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/autodialer/8-dialer.ini.md",sourceDirName:"autodialer",slug:"/autodialer/dialer.ini",permalink:"/autodialer/dialer.ini",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Dialer.ini",sidebar_label:"Dialer.ini"},sidebar:"Autodialer",previous:{title:"reports",permalink:"/autodialer/reports"}},a={},d=[{value:"MongoDB Database Settings",id:"mongodb-database-settings",level:3},{value:"Audio Files Settings",id:"audio-files-settings",level:3},{value:"dialer logs Settings",id:"dialer-logs-settings",level:3},{value:"AMI Settings",id:"ami-settings",level:3},{value:"call Settings",id:"call-settings",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dialerini-settings",children:"Dialer.ini Settings"})}),"\n",(0,s.jsxs)(n.p,{children:["The dialer.ini file contains the settings for the bulk calling module. The path to this file is ",(0,s.jsx)(n.code,{children:"/etc/simotel/dialer.ini/"}),". You can open this file and make changes using the following command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\nnano /etc/simote/dialer.ini\n"})}),"\n",(0,s.jsxs)(n.p,{children:[":::",(0,s.jsx)(n.strong,{children:"Caution:"}),(0,s.jsx)(n.br,{}),"\n","Restart the simoteldialer service after modifying the dialer.ini file, otherwise the changes will not be applied."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\nDebian\nservice simoteldialer restart\n\nUbuntu\nstop simoteldialer\nstart simoteldialer\n"})}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.h3,{id:"mongodb-database-settings",children:"MongoDB Database Settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n[mongodb]\n\nmongodb_connection_string = mongodb://username:password@localhost:27017\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u06f1. ",(0,s.jsx)(n.strong,{children:"mongodb_connection_string"}),": The database connection address, which includes the username, password, connection address, and database connection port."]}),"\n",(0,s.jsx)(n.h3,{id:"audio-files-settings",children:"Audio Files Settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n[directories]\n\nannouncement_directory = /var/www/html/files/\t\n\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"announcement_directory"}),": Path to store the audio files for the bulk calling module."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dialer-logs-settings",children:"dialer logs Settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n[logging]\nlog_level = DEBUG\n\nlog_to_file = True\t\n\nlog_to_console = False\t\t\n\nlog_directory = /var/log/simotel/\n\nlog_file_name = simoteldialer.log\t\n\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"log_level"}),": The logging level for the bulk calling module."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"log_to_file"}),": If this parameter is set to True, logs will be saved to a file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"log_to_console"}),": If this parameter is set to True, logs will be displayed in the terminal console."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"log_directory"}),": Path to store log files. The ",(0,s.jsx)(n.code,{children:"log_to_file"})," field must be set to True."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"log_file_name"}),": Name of the simoteldialer log file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ami-settings",children:"AMI Settings"}),"\n",(0,s.jsxs)(n.p,{children:["These settings relate to the contact center itself. If AMI access is needed, refer to the ",(0,s.jsx)(n.strong,{children:"/etc/asterisk/manager.conf"})," path."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n[ami]\n\nami_host = 'localhost'\n\nami_port = '5038'\n\nami_username = 'test'\n\nami_password = 'test'\n\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"localhost"}),": The AMI host address."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ami_port"}),": The AMI service port."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ami_username"}),": The account username."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ami_password"}),": The account password."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[":::For more information on how to create an AMI account, please refer to ",(0,s.jsx)(n.a,{href:"/pbx/advance-settings/create_ami_user",children:"this section"}),".\n:::"]}),"\n",(0,s.jsx)(n.h3,{id:"call-settings",children:"call Settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n[originate-options]\n\nami_originate_caller_id = AutoDialer\n\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ami_originate_caller_id"}),": The value of the caller_id sent on the trunk is defined in this section."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Important note",type:"danger",children:(0,s.jsx)(n.p,{children:"In some cases, the service provider (e.g., telecommunications) does not recognize the caller_id with the value AutoDialer, and the module calls are dropped. To resolve this issue, set the caller_id value to a number."})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);