import{e as t,bb as b,a7 as g,d,r as h,aD as f,V as j,y as x,aC as $,aF as w,ci as i,ac as k,a6 as C,k as l,bq as p,a5 as v,bc as y,t as I,o as M,bY as S}from"./index.78de7ac3.js";import{b as O}from"./Folder.b6972768.js";import{a as P,M as z}from"./Layout.4f7e4c7f.js";import{c as A}from"./useUtil.319ed064.js";import{R as E}from"./index.d6b3572b.js";import{I as G}from"./ImageWithError.ee82ce4f.js";import{g as L,O as H}from"./icon.af55fc42.js";import"./useT.4db19f0e.js";import"./api.cbfdcdc7.js";import"./useTitle.a27a56e9.js";import"./Markdown.fd97aa04.js";import"./index.50706758.js";import"./FolderTree.6100531c.js";const W=e=>{const{isHide:a}=A();if(a(e.obj))return null;const{setPathAs:s}=P(),o=t(g,{get color(){return b()},boxSize:"$12",get as(){return L(e.obj)}}),[c,n]=d(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:m}=O({id:1});return t(z.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:E,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(p,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(v,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(y,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},Q=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(I,{get each(){return M.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{Q as default};