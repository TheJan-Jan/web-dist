import{J as c,ao as u,u as f,a$ as r,D as l}from"./index.78de7ac3.js";import{u as n}from"./useT.4db19f0e.js";let m=0;const s={},i=t=>{const e=(m++).toString(),a=[];for(const o in s)s[o]&&(a.push(o),s[o]=!1);s[e]=!0,typeof t=="function"?c(()=>{s[e]&&(document.title=t())}):document.title=t,u(()=>{delete s[e];for(const o in a)s[o]=!0})},g=()=>{const t=n(),{pathname:e}=f();i(()=>`${e()==="/"?t("manage.sidemenu.home"):r(e())} | ${l("site_title")}`)},$=t=>{const e=n();i(()=>`${e(t)} | ${e("manage.title")}`)};export{i as a,$ as b,g as u};
