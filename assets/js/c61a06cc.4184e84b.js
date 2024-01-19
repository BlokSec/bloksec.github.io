"use strict";(self.webpackChunkbloksec_docs=self.webpackChunkbloksec_docs||[]).push([[68],{6011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=n(5893),i=n(1151);const r={id:"tutorial-oidc-playground",title:"OIDC Playground",sidebar_position:1,createdAt:new Date("2024-01-19T00:00:00.000Z"),tags:["Tutorial","OIDC","Playground"]},s=void 0,l={id:"tutorial/tutorial-oidc/tutorial-oidc-playground",title:"OIDC Playground",description:"One of the best ways to learn the OIDC flow is to see it in action. This is also an excellent resource to troubleshoot issues with OIDC integrations - it allows you to see the tokens flowing between the browser, the relying party, and the identity provider right in your browser.",source:"@site/docs/tutorial/tutorial-oidc/oidc-playground.mdx",sourceDirName:"tutorial/tutorial-oidc",slug:"/tutorial/tutorial-oidc/tutorial-oidc-playground",permalink:"/docs/tutorial/tutorial-oidc/tutorial-oidc-playground",draft:!1,unlisted:!1,tags:[{label:"Tutorial",permalink:"/docs/tags/tutorial"},{label:"OIDC",permalink:"/docs/tags/oidc"},{label:"Playground",permalink:"/docs/tags/playground"}],version:"current",sidebarPosition:1,frontMatter:{id:"tutorial-oidc-playground",title:"OIDC Playground",sidebar_position:1,createdAt:"2024-01-19T00:00:00.000Z",tags:["Tutorial","OIDC","Playground"]},sidebar:"tutorialSidebar",previous:{title:"Tutorial - OpenID Connect",permalink:"/docs/category/tutorial---openid-connect"}},c={},a=[{value:"Part 1 - BlokSec Setup",id:"part-1---bloksec-setup",level:2},{value:"Create the Application",id:"create-the-application",level:3},{value:"Copy the Application ID and Secret",id:"copy-the-application-id-and-secret",level:3},{value:"Register a Test Account",id:"register-a-test-account",level:3},{value:"Part 2 - Using the Playground Tool",id:"part-2---using-the-playground-tool",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"One of the best ways to learn the OIDC flow is to see it in action. This is also an excellent resource to troubleshoot issues with OIDC integrations - it allows you to see the tokens flowing between the browser, the relying party, and the identity provider right in your browser."}),"\n",(0,o.jsx)(t.p,{children:"The whole setup can be completed in under 10 minutes, and we think you will find it is well worth the time investment."}),"\n",(0,o.jsx)(t.h2,{id:"part-1---bloksec-setup",children:"Part 1 - BlokSec Setup"}),"\n",(0,o.jsx)(t.h3,{id:"create-the-application",children:"Create the Application"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["In BlokSec, ",(0,o.jsx)(t.strong,{children:"Add Application"})," -> ",(0,o.jsx)(t.strong,{children:"Create Custom"})]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"SSO Type"}),' "OpenID Connect"']}),"\n",(0,o.jsx)(t.li,{children:'Enter a name (e.g., "OIDC Playground")'}),"\n",(0,o.jsxs)(t.li,{children:["Enter ",(0,o.jsx)(t.code,{children:"https://openidconnect.net/callback"})," as the ",(0,o.jsx)(t.strong,{children:"Redirect URI"})]}),"\n",(0,o.jsxs)(t.li,{children:["Add any other configuration settings you would like to test such as ",(0,o.jsx)(t.strong,{children:"Attributes"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/20240119-screenshot-3tWTtLne%402x.png",alt:"Screenshot of application configuration"})]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Submit"})," to save the application"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"copy-the-application-id-and-secret",children:"Copy the Application ID and Secret"}),"\n",(0,o.jsx)(t.p,{children:"The Application ID and Secret will be used when configuring our OpenID Connect relying party - the playground app. In many OIDC settings these are referred to as the client ID and client secret respectively."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Make note of the Application ID"}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Generate App Secret"})," and make note of the generated Application Secret\n",(0,o.jsx)(t.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/20240119-screenshot-Gbp94iZu%402x.png",alt:"Screenshot of the application ID and secret configuration"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"register-a-test-account",children:"Register a Test Account"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["In the application, from the 'gear' menu, select ",(0,o.jsx)(t.strong,{children:"Create Account"})]}),"\n",(0,o.jsxs)(t.li,{children:["Create an account for yourself to test with","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The registration link will be sent to the ",(0,o.jsx)(t.strong,{children:"Email"})," provided"]}),"\n",(0,o.jsxs)(t.li,{children:["You may choose any ",(0,o.jsx)(t.strong,{children:"Account Name"})," but we suggest using your email address for the account name as well (best practice)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Complete the registration on your yuID mobile authenticator app"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"part-2---using-the-playground-tool",children:"Part 2 - Using the Playground Tool"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to [",(0,o.jsx)(t.a,{href:"https://openidconnect.net/%5D(OpenID",children:"https://openidconnect.net/](OpenID"})," Connect Playground)"]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Configuration"})," and complete as follows:","\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Server Template: Custom",(0,o.jsx)(t.br,{}),"\n","Discovery Document URL: ",(0,o.jsx)(t.code,{children:"https://api.bloksec.io/oidc/.well-known/openid-configuration"}),(0,o.jsx)(t.br,{}),"\n","(",(0,o.jsxs)(t.em,{children:["Click ",(0,o.jsx)(t.strong,{children:"Use Discovery Document"})]}),")",(0,o.jsx)(t.br,{}),"\n","OIDC Client ID: ",(0,o.jsx)(t.code,{children:"(Application ID from BlokSec)"}),(0,o.jsx)(t.br,{}),"\n","OIDC Secret: ",(0,o.jsx)(t.code,{children:"(Application Secret from BlokSec)"}),(0,o.jsx)(t.br,{}),"\n","Scope: ",(0,o.jsx)(t.code,{children:"openid profile email"}),"\n",(0,o.jsx)(t.img,{src:"https://s3.us-east-2.amazonaws.com/io.bloksec.static-hosting/docs/OpenIDPlayGroundConfiguration.png",alt:"Screenshot of OpenID Connect Playground configuration"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Start"})," button to begin the OIDC flow"]}),"\n",(0,o.jsx)(t.li,{children:"You will be redirected to BlokSec - login with your test account"}),"\n",(0,o.jsx)(t.li,{children:"Once login is successful, you will be redirected back to the OpenID Connect Playground with an authorization code"}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Open your browser's Network tab under Developer Tools to see the HTTP requests and responses!"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Exchange"})," to have the OpenID Connect Playground server send the authentication code to BlokSec in exchange for an ",(0,o.jsx)(t.code,{children:"access_token"})," and ",(0,o.jsx)(t.code,{children:"id_token"})]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Next"})," to begin the token verification process"]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Verify"})," to have the OpenID Connect Playground server verify the signature on the ",(0,o.jsx)(t.code,{children:"id_token"})," and decode the payload"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can use this resource to check that any ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"custom attributes"})})," are configured correctly by inspecting exactly what is being sent to a relying part during an OIDC exchange."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);