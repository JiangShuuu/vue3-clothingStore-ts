import{d as y,I as F,x as $,j as g,f as A,o as _,c as f,b as e,F as w,r as B,B as l,a as d,M as h,_ as k,m as D,K as j,u as x,g as T,J as N,p as S,e as I}from"./index.583c14a6.js";const M={class:"flex-col hidden md:flex"},V=e("div",{class:"hidden grid-flow-row grid-cols-5 py-3 text-sm border md:grid"},[e("p",null,"\u5546\u54C1\u8CC7\u6599"),e("p",null,"\u539F\u50F9"),e("p",null,"\u55AE\u4EF6\u50F9\u683C"),e("p",null,"\u6578\u91CF"),e("p",null,"\u5C0F\u8A08")],-1),H={class:"relative hidden grid-flow-row grid-cols-5 p-2 text-sm border md:grid"},G={class:"grid grid-flow-row grid-cols-2 ml-12 w-36 flex-center"},J={class:"w-16 h-16 overflow-hidden border"},L=["src"],O={class:"text-sm"},P={class:"flex-center"},U={class:"flex-center"},q={class:"flex-center"},K={class:"justify-between w-32 p-2 border flex-center"},R=["onClick","disabled"],W={class:"text-sm"},Y=["onClick","disabled"],z={class:"flex-center"},Q=["onClick"],X={class:"md:hidden"},Z={class:"flex justify-between p-2"},ee=e("div",{class:"flex space-x-2"},[e("div",{class:"w-16 h-16 overflow-hidden border"},[e("img",{src:"https://images.unsplash.com/photo-1657879005446-fd4563beddb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",class:"object-cover",alt:""})]),e("p",{class:"text-sm"},"\u9632\u98A8\u4E0A\u8863")],-1),te={class:"flex flex-col items-end justify-between text-sm"},se=e("p",null,"NT$450",-1),oe={class:"justify-between p-2 flex-center"},ae={class:"justify-between w-32 p-2 border flex-center"},ce=e("p",{class:"text-sm"},"2",-1),le=e("p",null,"NT$900",-1),ue=y({__name:"CartProducts",setup(r){const o=F(),i=$(),p=g(o.carts),a=g(!1);function v(t){return t.Cart.productCount*t.price}async function C(t){await h.addCount(t.id).then(()=>{a.value=!0,t.Cart.productCount+=1,i.addOrderCount(t),a.value=!1}).catch(n=>{console.log(n)})}async function b(t){await h.reduceCount(t.id).then(()=>{a.value=!0,t.Cart.productCount>1&&(t.Cart.productCount-=1,i.reduceOrderCount(t)),a.value=!1}).catch(n=>{console.log(n)})}async function E(t){try{const{data:n}=await h.deleteCart(t.id);p.value=p.value.filter(s=>s.id!==t.id);const c=t.price*t.Cart.productCount;i.order.price-=c,t.isCart=!1}catch(n){console.log(n)}}return(t,n)=>{const c=A("Icon");return _(),f(w,null,[e("section",M,[V,(_(!0),f(w,null,B(p.value,s=>(_(),f("div",{key:s.id},[e("div",H,[e("div",G,[e("div",J,[e("img",{src:s.image,class:"object-cover",alt:""},null,8,L)]),e("p",O,l(s.title),1)]),e("div",P,[e("s",null,l(s.og_price),1)]),e("div",U,[e("p",null,"NT$"+l(s.price),1)]),e("div",q,[e("div",K,[e("button",{onClick:m=>b(s),disabled:a.value},[d(c,{icon:"fa-solid:minus",class:"w-4 h-4"})],8,R),e("p",W,l(s.Cart.productCount),1),e("button",{onClick:m=>C(s),disabled:a.value},[d(c,{icon:"fa-solid:plus",class:"w-4 h-4"})],8,Y)])]),e("div",z,[e("p",null,"NT$"+l(v(s)),1)]),e("div",{class:"absolute top-7 right-8",onClick:m=>E(s)},[d(c,{icon:"icon-park-outline:delete-five",class:"w-5 h-5 text-gray-500 cursor-pointer"})],8,Q)])]))),128))]),e("section",X,[e("div",Z,[ee,e("div",te,[d(c,{icon:"icon-park-outline:delete-five",class:"w-5 h-5 text-gray-500 cursor-pointer"}),se])]),e("div",oe,[e("div",ae,[d(c,{icon:"fa-solid:minus",class:"w-4 h-4 cursor-pointer"}),ce,d(c,{icon:"fa-solid:plus",class:"w-4 h-4 cursor-pointer"})]),le])])],64)}}});const u=r=>(S("data-v-c8a5a14c"),r=r(),I(),r),ne={class:"flex-col block w-full h-full mb-24 space-y-3 flex-center"},de=u(()=>e("h2",{class:"text-2xl underline underline-offset-4 text-primary"},"\u8CFC\u7269\u8ECA",-1)),re={class:"border"},ie=u(()=>e("div",{class:"flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start"},[e("p",null,"\u8CFC\u7269\u8ECA"),e("p",null,"(1 \u4EF6)")],-1)),pe={class:"md:flex md:space-x-8"},_e=T('<section class="w-full border md:basis-3/5" data-v-c8a5a14c><div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start" data-v-c8a5a14c><p data-v-c8a5a14c>\u9078\u64C7\u9001\u8CA8\u53CA\u4ED8\u6B3E\u65B9\u5F0F</p></div><div class="p-2 space-y-3" data-v-c8a5a14c><div class="flex flex-col space-y-1 text-sm text-start" data-v-c8a5a14c><label for="" data-v-c8a5a14c>\u9001\u8CA8\u5730\u9EDE</label><select name="" id="" class="p-2 border rounded-md" data-v-c8a5a14c><option value="" default data-v-c8a5a14c>\u53F0\u5317</option></select></div><div class="flex flex-col space-y-1 text-sm text-start" data-v-c8a5a14c><label for="" data-v-c8a5a14c>\u9001\u8CA8\u65B9\u5F0F</label><select name="" id="" class="p-2 border rounded-md" data-v-c8a5a14c><option value="" default data-v-c8a5a14c>\u65B0\u7AF9\u7269\u6D41</option><option value="" default data-v-c8a5a14c>7-11\u5E97\u53D6</option><option value="" default data-v-c8a5a14c>\u81EA\u53D6</option></select></div><div class="flex flex-col space-y-1 text-sm text-start" data-v-c8a5a14c><label for="" data-v-c8a5a14c>\u4ED8\u6B3E\u65B9\u5F0F</label><select name="" id="" class="p-2 border rounded-md" data-v-c8a5a14c><option value="" default data-v-c8a5a14c>\u9280\u884C\u5E33\u865F/ATM</option><option value="" default data-v-c8a5a14c>\u4FE1\u7528\u5361 (\u652F\u63F4\u570B\u5167\u5916Visa\u3001Master\u3001JCB)</option></select></div></div></section>',1),fe={class:"w-full border md:basis-2/5"},ve=u(()=>e("div",{class:"flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start"},[e("p",null,"\u8A02\u55AE\u8CC7\u8A0A")],-1)),he={class:"p-4"},xe={class:"space-y-2"},Ce={class:"justify-between text-sm flex-center"},be=u(()=>e("p",null,"\u5C0F\u8A08",-1)),me={class:"justify-between text-sm flex-center"},ge=u(()=>e("p",null,"\u904B\u8CBB",-1)),we=u(()=>e("div",{class:"cursor-pointer text-start text-primary hover:brightness-150"}," \u4F7F\u7528\u512A\u60E0\u4EE3\u78BC ",-1)),ye=u(()=>e("hr",null,null,-1)),Fe={class:"justify-between text-sm font-bold flex-center"},$e=u(()=>e("p",null,"\u5408\u8A08 (1\u4EF6)",-1)),Ee=y({__name:"Cart01",setup(r){D(()=>{o.progress.progressNum="0%",o.progress.circle2=!1,o.progress.circle3=!1});const o=$(),i=F(),p=N(),a=j(),v=()=>{i.carts.length<1?a.warning("\u8CFC\u7269\u8ECA\u76EE\u524D\u6C92\u6709\u5546\u54C1, \u8ACB\u81F3\u5546\u54C1\u5340\u6DFB\u52A0\u5546\u54C1!"):p.push("/cart/info")};return(C,b)=>(_(),f("section",ne,[de,e("section",re,[ie,d(ue)]),e("div",pe,[_e,e("section",fe,[ve,e("div",he,[e("div",xe,[e("div",Ce,[be,e("p",null,"NT$"+l(x(o).order.price),1)]),e("div",me,[ge,e("p",null,"NT$"+l(x(o).order.fee),1)]),we,ye,e("div",Fe,[$e,e("p",null,"NT$"+l(x(o).orderTotal),1)])]),e("button",{onClick:v,class:"w-full mt-5 md:mt-8 p-2.5 bg-green-600 border rounded-md text-white hover:brightness-110"},"\u524D\u5F80\u7D50\u8CEC")])])])]))}}),Be=k(Ee,[["__scopeId","data-v-c8a5a14c"]]);export{Be as default};
