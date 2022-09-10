import{u as h,a as u,b5 as m,e,H as S,bb as w,$ as s,bc as d,bu as C,az as x,X as B,B as o,aL as p,bd as b,n as v,V as $,d as y,bY as L,t as _}from"./index.78de7ac3.js";import{u as f}from"./useT.4db19f0e.js";import{b as D}from"./useTitle.a27a56e9.js";import{D as M}from"./DeletePopover.7bbaa30b.js";const T=t=>{const r=f(),{to:l}=h(),[g,i]=u(()=>m.post(`/admin/storage/delete?id=${t.storage.id}`)),[c,n]=u(()=>m.post(`/admin/storage/${t.storage.disabled?"enable":"disable"}?id=${t.storage.id}`));return e($,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return S("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${w()}`}},get children(){return[e(s,{spacing:"$2",get children(){return[e(d,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return t.storage.mount_path}}),e(C,{colorScheme:"info",get children(){return r(`drivers.drivers.${t.storage.driver}`)}})]}}),e(s,{get children(){return[e(d,{get children(){return[x(()=>r("storages.common.status")),":\xA0"]}}),e(B,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return t.storage.status}})]}}),e(d,{css:{wordBreak:"break-all"},get children(){return t.storage.remark}}),e(s,{spacing:"$2",get children(){return[e(o,{onClick:()=>{l(`/@manage/storages/edit/${t.storage.id}`)},get children(){return r("global.edit")}}),e(o,{get loading(){return c()},colorScheme:"warning",onClick:async()=>{const a=await n();p(a,()=>{t.refresh()})},get children(){return r(`global.${t.storage.disabled?"enable":"disable"}`)}}),e(M,{get name(){return t.storage.mount_path},get loading(){return g()},onClick:async()=>{const a=await i();b(a,()=>{v.success(r("global.delete_success")),t.refresh()})}})]}})]}})},O=()=>{const t=f();D("manage.sidemenu.storages");const{to:r}=h(),[l,g]=u(()=>m.get("/admin/storage/list")),[i,c]=y([]),n=async()=>{const a=await g();b(a,k=>c(k.content))};return n(),e($,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(s,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return l()},onClick:n,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{r("/@manage/storages/add")},get children(){return t("global.add")}})]}}),e(L,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(_,{get each(){return i()},children:a=>e(T,{storage:a,refresh:n})})}})]}})};export{O as default};
