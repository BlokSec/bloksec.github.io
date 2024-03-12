"use strict";(self.webpackChunkbloksec_docs=self.webpackChunkbloksec_docs||[]).push([[4547],{912:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=i(5893),a=i(1151);const n={id:"usecases-mfa-2fa",title:"BlokSec for MFA / 2FA",sidebar_position:2,createdAt:new Date("2024-01-19T00:00:00.000Z"),tags:["Tutorial","Use Cases","MFA / 2FA"]},o=void 0,r={id:"tutorial/use-cases/usecases-mfa-2fa",title:"BlokSec for MFA / 2FA",description:"Although we feel that BlokSec is best used as a strong primary authentication factor in place of passwords and multi-factor authentication (MFA / 2FA) (indeed, BlokSec immutable authentication is stronger than passwords + legacy MFA combined) it can still be used to act as an additional authentication factor in the following scenarios:",source:"@site/docs/tutorial/use-cases/mfa-2fa.mdx",sourceDirName:"tutorial/use-cases",slug:"/tutorial/use-cases/usecases-mfa-2fa",permalink:"/docs/tutorial/use-cases/usecases-mfa-2fa",draft:!1,unlisted:!1,tags:[{label:"Tutorial",permalink:"/docs/tags/tutorial"},{label:"Use Cases",permalink:"/docs/tags/use-cases"},{label:"MFA / 2FA",permalink:"/docs/tags/mfa-2-fa"}],version:"current",sidebarPosition:2,frontMatter:{id:"usecases-mfa-2fa",title:"BlokSec for MFA / 2FA",sidebar_position:2,createdAt:"2024-01-19T00:00:00.000Z",tags:["Tutorial","Use Cases","MFA / 2FA"]},sidebar:"tutorialSidebar",previous:{title:"Integration via Standard Protocols (OIDC, SAML2)",permalink:"/docs/tutorial/use-cases/usecases-passwordlesslogin"},next:{title:"Integration with In-House / Custom Applications",permalink:"/docs/tutorial/use-cases/usecases-custom-app"}},c={},l=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Registration",id:"registration",level:2},{value:"Authentication / Authorization",id:"authentication--authorization",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Although we feel that BlokSec is best used as a strong primary authentication factor in place of passwords and multi-factor authentication (MFA / 2FA) (indeed, BlokSec immutable authentication is stronger than passwords + legacy MFA combined) it can still be used to act as an additional authentication factor in the following scenarios:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"As multi-factor authentication (MFA) or second-factor authentication (2FA) during the login process after the user has provided valid username + password credentials"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"During a sensitive operation such as when changing profile information (e.g., email address) as this is often how account take-overs occur"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"As part of a financial transaction such as an online shopping check-out flow or money transfer request"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsxs)(t.p,{children:["In order to use the required APIs, you will need an application created in the administrative console from which you can get the Application ID (required for the ",(0,s.jsx)(t.code,{children:"x-application-id"})," header) and Application Secret (required for the ",(0,s.jsx)(t.code,{children:"x-application-secret"})," header) required to authorize the API call. Please see ",(0,s.jsx)(t.a,{href:"docId:09SwEFbkYcKpaVIa56QJu",children:"Custom OIDC"})," for instructions"]}),"\n",(0,s.jsx)(t.h2,{id:"registration",children:"Registration"}),"\n",(0,s.jsxs)(t.p,{children:["Before users can use BlokSec for MFA or 2FA, they must be registered. Registrations are sent to users via email; the email contains a link to the registration request which must be retrieved by their authenticator app (e.g., ",(0,s.jsx)(t.strong,{children:"yuID"}),", or ) to complete the linking of their account with their authenticator instance. How and when you register users is up to you, but it is important only to ensure that registrations are only sent to trusted, verified email addresses. We do recommend including registration as part of the new user onboarding process for your application while the user's identity is being established."]}),"\n",(0,s.jsxs)(t.p,{children:["To register a user with BlokSec, call the ",(0,s.jsx)(t.code,{children:"POST /registration"})," API:"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://api.bloksec.io/api-docs/#/Registration/post_registration",children:"https://api.bloksec.io/api-docs/#/Registration/post_registration"})})}),"\n",(0,s.jsx)(t.p,{children:"For help on using the API including the schema, expected request values, and expected response, please see the OpenAPI documentation at the link above."}),"\n",(0,s.jsxs)(t.p,{children:["If you would like to check the status of a registration request, you can look it up with the ",(0,s.jsx)(t.code,{children:"GET /registration/{registrationId}"})," API with the registration ID returned by the POST /registration API:"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.bloksec.io/api-docs/#/Registration/get_registration__registrationId",children:"https://api.bloksec.io/api-docs/#/Registration/get_registration__registrationId"}),"_"]})}),"\n",(0,s.jsx)(t.h2,{id:"authentication--authorization",children:"Authentication / Authorization"}),"\n",(0,s.jsxs)(t.p,{children:["Once a user has been registered, they're ready to perform MFA / 2FA authentication during login. You can also use the BlokSec service to perform step-up authorization during important transactions. To send an auth* request (auth = authentication or authorization) you invoke the ",(0,s.jsx)(t.code,{children:"POST /auth"})," API:"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://api.bloksec.io/api-docs/#/Auth/post_auth",children:"https://api.bloksec.io/api-docs/#/Auth/post_auth"})})}),"\n",(0,s.jsx)(t.p,{children:"Note that this is a synchronous API so your call will block while waiting for the user's response. We suggesting showing a user-friendly message along with a spinner to provide the user with feedback that a response is pending their action."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var s=i(7294);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);