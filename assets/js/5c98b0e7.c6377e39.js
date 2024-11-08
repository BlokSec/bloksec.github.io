"use strict";(self.webpackChunkbloksec_docs=self.webpackChunkbloksec_docs||[]).push([[5153],{5224:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(5893),n=t(1151);const i={id:"tutorial-backup-restore",title:"Backup and Restore",sidebar_position:2,createdAt:new Date("2024-05-19T00:00:00.000Z"),tags:["Tutorial","yuID"]},r=void 0,a={id:"tutorial/yuid/tutorial-backup-restore",title:"Backup and Restore",description:"Backing up your yuID account is an important step in maintaining your access to BlokSec-enabled services. The instructions in this document will show you how to backup your yuID account, and how to restore it again when required. This can help in situations such as:",source:"@site/docs/tutorial/yuid/backup-restore.mdx",sourceDirName:"tutorial/yuid",slug:"/tutorial/yuid/tutorial-backup-restore",permalink:"/docs/tutorial/yuid/tutorial-backup-restore",draft:!1,unlisted:!1,tags:[{label:"Tutorial",permalink:"/docs/tags/tutorial"},{label:"yuID",permalink:"/docs/tags/yu-id"}],version:"current",sidebarPosition:2,frontMatter:{id:"tutorial-backup-restore",title:"Backup and Restore",sidebar_position:2,createdAt:"2024-05-19T00:00:00.000Z",tags:["Tutorial","yuID"]},sidebar:"tutorialSidebar",previous:{title:"Installing yuID on Android",permalink:"/docs/tutorial/yuid/android-install"},next:{title:"How to Delete your yuID Account",permalink:"/docs/tutorial/yuid/tutorial-delete-account"}},c={},l=[{value:"Backing up yuID",id:"backing-up-yuid",level:2},{value:"Restoring yuID",id:"restoring-yuid",level:2}];function u(e){const s={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Backing up your yuID account is an important step in maintaining your access to BlokSec-enabled services. The instructions in this document will show you how to backup your yuID account, and how to restore it again when required. This can help in situations such as:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Lost or stolen device"}),"\n",(0,o.jsx)(s.li,{children:"Device migration (e.g., upgraded device, or switching from iOS to Android or vise versa)"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"Backup and restore can also be used to switch your identification method in the yuID app - when you first installed the app it was configured to use biometric unlock (facial or fingerprint recognition as supported by the device) or personal access password / PIN. If you would like to switch from PIN to biometric or biometric to PIN, you must backup your account, uninstall the app, reinstall the app, and restore your backup. During this process you will be given the chance to once again select a personal authentication method."})}),"\n",(0,o.jsx)(s.p,{children:"yuID saves your backup as an encrypted QR code. This code is protected by a secret passphrase that you supply; it will only work with yuID and is not useful to others without the secret passphrase."}),"\n",(0,o.jsx)(s.h2,{id:"backing-up-yuid",children:"Backing up yuID"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["To begin, open the yuID application and select the cog icon in the top right",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-S69X5oPK.png",alt:"Screenshot of yuID home screen"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Click ",(0,o.jsx)(s.strong,{children:"Next"})," to proceed to the passphrase screen. At this point yuID will request access to your photos (for Android, this may have happened when the app was launched for this first time) - please grant access to allow yuID to save an encrypted QR code to your photos.",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-N9SmPPJU.png",alt:"Screenshot of yuID photo access request"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"After granting access, please supply a secret passphrase."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"danger",children:(0,o.jsx)(s.p,{children:"Be sure to remember and keep this secret passphrase safe - you will not be able to restore your account without it!"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-zXWsUJX9.png",alt:"Screenshot of yuID passphrase screen"})}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["yuID will create the encrypted QR code and save it to your photos. The backup is now complete.",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-qHylOZh8.png",alt:"Screenshot of yuID completion screen"})]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsx)(s.p,{children:"Please treat the encrypted QR code as an important backup artifact - we recommend printing out the encrypted QR code and keeping it in safe location to prevent loss."})}),"\n",(0,o.jsx)(s.h2,{id:"restoring-yuid",children:"Restoring yuID"}),"\n",(0,o.jsx)(s.p,{children:"Restoring yuID stars with installing the app on a device - either this is a new device, or you have uninstalled yuID after taking a backup."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Install the yuID authenticator app on your device. You can search the Apple App Store for 'yuID' or follow the links below:",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"https://apps.apple.com/ca/app/bloksec/id1462338006",children:(0,o.jsx)("img",{src:"https://bloksec.io/images/appstore.png",alt:"image",width:"120px",height:"auto"})})," ",(0,o.jsx)(s.a,{href:"https://bloksec.io/downloads/bloksec-yuid-3.5.apk",children:(0,o.jsx)("img",{src:"https://bloksec.io/images/android-direct-download.png",alt:"image",width:"136px",height:"auto"})}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-Evgo9DbG.png",alt:"Screenshot of yuID in the Apple App Store"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Launch the app, and accept the notifications prompt",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-RvoXP4k8.png",alt:"Screenshot of yuID notification prompt"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Select the ",(0,o.jsx)(s.strong,{children:"Restore from backup"})," link",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-HI13qMRT.png",alt:"Screenshot of yuID restore from backup"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Select ",(0,o.jsx)(s.strong,{children:"Choose Photo"})," if the QR code is saved on your device, or ",(0,o.jsx)(s.strong,{children:"Scan"})," to capture the QR code from another screen or a print out",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-aFSII5eX.png",alt:"Screenshot of yuID QR code selection screen"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Once the QR code has been selected from your photos or scanned with the camera, yuID will present the secret passphrase entry screen. Please enter the secret passphrase you used in backup step #3",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-k9kIZ8Vl.png",alt:"Screenshot of yuID secret passphrase entry screen"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["If the correct passphrase is supplied, yuID will restore all of your account information",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-5DRCiGY8.png",alt:"Screenshot of yuID restore successful screen"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["yuID will now prompt you to select a locking mechanism - this is where you have the ability to switch to a different method than was used previously",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/how-tos/backup-restore/20240509-screenshot-o9NAHOMx.png",alt:"Screenshot of yuID lock selection screen"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Your account has been successfully restored!"})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>r});var o=t(7294);const n={},i=o.createContext(n);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);