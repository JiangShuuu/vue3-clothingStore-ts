import{d as p,m as h,x as f,j as i,f as x,o,c as r,b as e,y as v,z as m,A as g,F as w,r as C,a as y,w as b,B as n}from"./index.583c14a6.js";import{p as B}from"./product.6519fc19.js";const k={class:"flex-col mt-10 flex-center"},F=e("h1",{class:"text-2xl"},"\u641C\u5C0B\u5546\u54C1",-1),D=e("button",{class:"p-2 ml-5 text-white border rounded-lg bg-primary",type:"submit"},"Search",-1),E={class:"w-full h-full flex-center"},S={key:0,class:"h-[500px] flex-center"},T=e("h1",{class:"text-3xl"},"\u67E5\u4E0D\u5230\u6B64\u5546\u54C1\uFF0C\u8ACB\u8F38\u5165\u5176\u4ED6\u95DC\u9375\u5B57\uFF01",-1),A=[T],M={key:1,class:"my-10"},N={class:"grid grid-flow-row grid-cols-3 p-2 text-sm"},V={class:"grid grid-flow-row grid-cols-2 ml-12 w-36 flex-center"},$={class:"w-16 h-16 overflow-hidden border"},j=["src"],P={class:"text-sm"},z={class:"flex-center"},I={class:"flex-center"},G=p({__name:"search",setup(L){h(()=>{s.value=u.searchText,d()});const u=f(),s=i(""),a=i();async function d(){try{if(s.value==="")return;const{data:l}=await B.searchProducts(s.value);a.value=l.data.products,u.searchText=s.value}catch(l){console.log(l)}}return(l,c)=>{const _=x("router-link");return o(),r("main",k,[F,e("form",{onSubmit:c[1]||(c[1]=g(t=>d(),["prevent"])),class:"mt-10 flex-center"},[v(e("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=t=>s.value=t),placeholder:"\u8F38\u5165\u95DC\u9375\u5B57...",class:"p-2 border rounded-lg"},null,512),[[m,s.value]]),D],32),e("section",E,[a.value?(o(),r("div",M,[(o(!0),r(w,null,C(a.value,t=>(o(),r("div",{key:t.id},[y(_,{to:`/product/${t.id}`,class:"flex-col mb-2 border flex-center"},{default:b(()=>[e("div",N,[e("div",V,[e("div",$,[e("img",{src:t.image,class:"object-cover",alt:""},null,8,j)]),e("p",P,n(t.title),1)]),e("div",z,[e("s",null,n(t.og_price),1)]),e("div",I,[e("p",null,"NT$"+n(t.price),1)])]),e("span",null,n(t.short_intro),1)]),_:2},1032,["to"])]))),128))])):(o(),r("div",S,A))])])}}});export{G as default};
