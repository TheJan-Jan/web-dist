import{u as v,a as l,b5 as r,bs as $,bL as C,d as w,e as t,bM as I,ah as L,bd as o,n as u,$ as R,B as p,V as T}from"./index.78de7ac3.js";import{u as _}from"./useT.4db19f0e.js";import{b as x}from"./useTitle.a27a56e9.js";import{I as B}from"./SettingItem.3c4b2d97.js";import{R as M}from"./ResponsiveGrid.12832d2d.js";import"./index.1a562dcb.js";import"./index.d6b3572b.js";import"./item_type.be442da4.js";const A=d=>{const s=_(),{pathname:m}=v();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=$([]),a=async()=>{const e=await f();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",C(i))),[k,g]=w(!1);return t(T,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(M,{get children(){return t(I,{each:i,children:(e,V)=>t(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{u.success(s("global.delete_success")),a()})}}))})}}),t(R,{spacing:"$2",get children(){return[t(p,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(p,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>u.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{A as default};
