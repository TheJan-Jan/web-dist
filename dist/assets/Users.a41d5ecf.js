import{u as S,a as w,b5 as h,d as C,c4 as y,e,$ as g,B as u,X as $,c5 as B,c6 as _,c7 as m,t as d,c8 as p,c9 as v,ca as a,bd as b,n as x,V as F,bu as P,ag as R,ai as D,a1 as H}from"./index.78de7ac3.js";import{u as f}from"./useT.4db19f0e.js";import{b as L}from"./useTitle.a27a56e9.js";import{D as M}from"./DeletePopover.7bbaa30b.js";const V=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(P,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},X=t=>{const n=f(),c=s=>`$${s?"success":"danger"}9`;return e(g,{spacing:"$0_5",get children(){return e(d,{each:R,children:(s,o)=>e(D,{get label(){return n(`users.permissions.${s}`)},get children(){return e($,{boxSize:"$2",rounded:"$full",get bg(){return c(H.can(t.user,o()))}})}})})}})},q=()=>{const t=f();L("manage.sidemenu.users");const{to:n}=S(),[c,s]=w(()=>h.get("/admin/user/list")),[o,T]=C([]),l=async()=>{const r=await s();b(r,i=>T(i.content))};l();const[U,k]=y(r=>h.post(`/admin/user/delete?id=${r}`));return e(F,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(g,{spacing:"$2",get children(){return[e(u,{colorScheme:"accent",get loading(){return c()},onClick:l,get children(){return t("global.refresh")}}),e(u,{onClick:()=>{n("/@manage/users/add")},get children(){return t("global.add")}})]}}),e($,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(_,{get children(){return e(m,{get children(){return[e(d,{each:["username","base_path","role","permission"],children:r=>e(p,{get children(){return t(`users.${r}`)}})}),e(p,{get children(){return t("global.operations")}})]}})}}),e(v,{get children(){return e(d,{get each(){return o()},children:r=>e(m,{get children(){return[e(a,{get children(){return r.username}}),e(a,{get children(){return r.base_path}}),e(a,{get children(){return e(V,{get role(){return r.role}})}}),e(a,{get children(){return e(X,{user:r})}}),e(a,{get children(){return e(g,{spacing:"$2",get children(){return[e(u,{onClick:()=>{n(`/@manage/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(M,{get name(){return r.username},get loading(){return U()===r.id},onClick:async()=>{const i=await k(r.id);b(i,()=>{x.success(t("global.delete_success")),l()})}})]}})}})]}})})}})]}})}})]}})};export{q as default};