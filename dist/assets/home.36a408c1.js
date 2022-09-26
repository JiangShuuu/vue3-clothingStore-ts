import{g as A,$ as H,n as X,S as Q,a as J}from"./autoplay.min.856ed2b0.js";import{_ as L,d as Y,o as j,c as P,a as x,w as O,F as K,r as Z,u as G,b as p,p as N,e as z,f as W,g as q,h as ee,H as ae}from"./index.583c14a6.js";function R(o,e,m,c){const f=A();return o.params.createElements&&Object.keys(c).forEach(n=>{if(!m[n]&&m.auto===!0){let d=o.$el.children(`.${c[n]}`)[0];d||(d=f.createElement("div"),d.className=c[n],o.$el.append(d)),m[n]=d,e[n]=d}}),m}function te(o){let{swiper:e,extendParams:m,on:c,emit:f}=o;m({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function n(s){let l;return s&&(l=H(s),e.params.uniqueNavElements&&typeof s=="string"&&l.length>1&&e.$el.find(s).length===1&&(l=e.$el.find(s))),l}function d(s,l){const a=e.params.navigation;s&&s.length>0&&(s[l?"addClass":"removeClass"](a.disabledClass),s[0]&&s[0].tagName==="BUTTON"&&(s[0].disabled=l),e.params.watchOverflow&&e.enabled&&s[e.isLocked?"addClass":"removeClass"](a.lockClass))}function v(){if(e.params.loop)return;const{$nextEl:s,$prevEl:l}=e.navigation;d(l,e.isBeginning&&!e.params.rewind),d(s,e.isEnd&&!e.params.rewind)}function h(s){s.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&e.slidePrev()}function _(s){s.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&e.slideNext()}function b(){const s=e.params.navigation;if(e.params.navigation=R(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(s.nextEl||s.prevEl))return;const l=n(s.nextEl),a=n(s.prevEl);l&&l.length>0&&l.on("click",_),a&&a.length>0&&a.on("click",h),Object.assign(e.navigation,{$nextEl:l,nextEl:l&&l[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(l&&l.addClass(s.lockClass),a&&a.addClass(s.lockClass))}function y(){const{$nextEl:s,$prevEl:l}=e.navigation;s&&s.length&&(s.off("click",_),s.removeClass(e.params.navigation.disabledClass)),l&&l.length&&(l.off("click",h),l.removeClass(e.params.navigation.disabledClass))}c("init",()=>{e.params.navigation.enabled===!1?E():(b(),v())}),c("toEdge fromEdge lock unlock",()=>{v()}),c("destroy",()=>{y()}),c("enable disable",()=>{const{$nextEl:s,$prevEl:l}=e.navigation;s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),l&&l[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),c("click",(s,l)=>{const{$nextEl:a,$prevEl:t}=e.navigation,i=l.target;if(e.params.navigation.hideOnClick&&!H(i).is(t)&&!H(i).is(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let r;a?r=a.hasClass(e.params.navigation.hiddenClass):t&&(r=t.hasClass(e.params.navigation.hiddenClass)),f(r===!0?"navigationShow":"navigationHide"),a&&a.toggleClass(e.params.navigation.hiddenClass),t&&t.toggleClass(e.params.navigation.hiddenClass)}});const S=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),b(),v()},E=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),y()};Object.assign(e.navigation,{enable:S,disable:E,update:v,init:b,destroy:y})}function F(o){return o===void 0&&(o=""),`.${o.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function se(o){let{swiper:e,extendParams:m,on:c,emit:f}=o;const n="swiper-pagination";m({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let d,v=0;function h(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function _(a,t){const{bulletActiveClass:i}=e.params.pagination;a[t]().addClass(`${i}-${t}`)[t]().addClass(`${i}-${t}-${t}`)}function b(){const a=e.rtl,t=e.params.pagination;if(h())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el;let u;const C=e.params.loop?Math.ceil((i-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),u>i-1-e.loopedSlides*2&&(u-=i-e.loopedSlides*2),u>C-1&&(u-=C),u<0&&e.params.paginationType!=="bullets"&&(u=C+u)):typeof e.snapIndex<"u"?u=e.snapIndex:u=e.activeIndex||0,t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const g=e.pagination.bullets;let $,k,T;if(t.dynamicBullets&&(d=g.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",`${d*(t.dynamicMainBullets+4)}px`),t.dynamicMainBullets>1&&e.previousIndex!==void 0&&(v+=u-(e.previousIndex-e.loopedSlides||0),v>t.dynamicMainBullets-1?v=t.dynamicMainBullets-1:v<0&&(v=0)),$=Math.max(u-v,0),k=$+(Math.min(g.length,t.dynamicMainBullets)-1),T=(k+$)/2),g.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${t.bulletActiveClass}${I}`).join(" ")),r.length>1)g.each(I=>{const B=H(I),w=B.index();w===u&&B.addClass(t.bulletActiveClass),t.dynamicBullets&&(w>=$&&w<=k&&B.addClass(`${t.bulletActiveClass}-main`),w===$&&_(B,"prev"),w===k&&_(B,"next"))});else{const I=g.eq(u),B=I.index();if(I.addClass(t.bulletActiveClass),t.dynamicBullets){const w=g.eq($),V=g.eq(k);for(let D=$;D<=k;D+=1)g.eq(D).addClass(`${t.bulletActiveClass}-main`);if(e.params.loop)if(B>=g.length){for(let D=t.dynamicMainBullets;D>=0;D-=1)g.eq(g.length-D).addClass(`${t.bulletActiveClass}-main`);g.eq(g.length-t.dynamicMainBullets-1).addClass(`${t.bulletActiveClass}-prev`)}else _(w,"prev"),_(V,"next");else _(w,"prev"),_(V,"next")}}if(t.dynamicBullets){const I=Math.min(g.length,t.dynamicMainBullets+4),B=(d*I-d)/2-T*d,w=a?"right":"left";g.css(e.isHorizontal()?w:"top",`${B}px`)}}if(t.type==="fraction"&&(r.find(F(t.currentClass)).text(t.formatFractionCurrent(u+1)),r.find(F(t.totalClass)).text(t.formatFractionTotal(C))),t.type==="progressbar"){let g;t.progressbarOpposite?g=e.isHorizontal()?"vertical":"horizontal":g=e.isHorizontal()?"horizontal":"vertical";const $=(u+1)/C;let k=1,T=1;g==="horizontal"?k=$:T=$,r.find(F(t.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${T})`).transition(e.params.speed)}t.type==="custom"&&t.renderCustom?(r.html(t.renderCustom(e,u+1,C)),f("paginationRender",r[0])):f("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](t.lockClass)}function y(){const a=e.params.pagination;if(h())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let r="";if(a.type==="bullets"){let u=e.params.loop?Math.ceil((t-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&u>t&&(u=t);for(let C=0;C<u;C+=1)a.renderBullet?r+=a.renderBullet.call(e,C,a.bulletClass):r+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`;i.html(r),e.pagination.bullets=i.find(F(a.bulletClass))}a.type==="fraction"&&(a.renderFraction?r=a.renderFraction.call(e,a.currentClass,a.totalClass):r=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`,i.html(r)),a.type==="progressbar"&&(a.renderProgressbar?r=a.renderProgressbar.call(e,a.progressbarFillClass):r=`<span class="${a.progressbarFillClass}"></span>`,i.html(r)),a.type!=="custom"&&f("paginationRender",e.pagination.$el[0])}function S(){e.params.pagination=R(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t=H(a.el);t.length!==0&&(e.params.uniqueNavElements&&typeof a.el=="string"&&t.length>1&&(t=e.$el.find(a.el),t.length>1&&(t=t.filter(i=>H(i).parents(".swiper")[0]===e.el))),a.type==="bullets"&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),t.addClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(t.addClass(`${a.modifierClass}${a.type}-dynamic`),v=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click",F(a.bulletClass),function(r){r.preventDefault();let u=H(this).index()*e.params.slidesPerGroup;e.params.loop&&(u+=e.loopedSlides),e.slideTo(u)}),Object.assign(e.pagination,{$el:t,el:t[0]}),e.enabled||t.addClass(a.lockClass))}function E(){const a=e.params.pagination;if(h())return;const t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),t.removeClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click",F(a.bulletClass))}c("init",()=>{e.params.pagination.enabled===!1?l():(S(),y(),b())}),c("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&b()}),c("snapIndexChange",()=>{e.params.loop||b()}),c("slidesLengthChange",()=>{e.params.loop&&(y(),b())}),c("snapGridLengthChange",()=>{e.params.loop||(y(),b())}),c("destroy",()=>{E()}),c("enable disable",()=>{const{$el:a}=e.pagination;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),c("lock unlock",()=>{b()}),c("click",(a,t)=>{const i=t.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!H(i).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const u=r.hasClass(e.params.pagination.hiddenClass);f(u===!0?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}});const s=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),S(),y(),b()},l=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),E()};Object.assign(e.pagination,{enable:s,disable:l,render:y,update:b,init:S,destroy:E})}function ne(o){let{swiper:e,extendParams:m,on:c,emit:f}=o,n;e.autoplay={running:!1,paused:!1},m({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function d(){const a=e.slides.eq(e.activeIndex);let t=e.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(t=a.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=X(()=>{let i;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),i=e.slidePrev(e.params.speed,!0,!0),f("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?h():(i=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),f("autoplay")):(i=e.slidePrev(e.params.speed,!0,!0),f("autoplay")):e.params.loop?(e.loopFix(),i=e.slideNext(e.params.speed,!0,!0),f("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?h():(i=e.slideTo(0,e.params.speed,!0,!0),f("autoplay")):(i=e.slideNext(e.params.speed,!0,!0),f("autoplay")),(e.params.cssMode&&e.autoplay.running||i===!1)&&d()},t)}function v(){return typeof n<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,f("autoplayStart"),d(),!0)}function h(){return!e.autoplay.running||typeof n>"u"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,f("autoplayStop"),!0)}function _(a){!e.autoplay.running||e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,a===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,d()):["transitionend","webkitTransitionEnd"].forEach(t=>{e.$wrapperEl[0].addEventListener(t,y)}))}function b(){const a=A();a.visibilityState==="hidden"&&e.autoplay.running&&_(),a.visibilityState==="visible"&&e.autoplay.paused&&(d(),e.autoplay.paused=!1)}function y(a){!e||e.destroyed||!e.$wrapperEl||a.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(t=>{e.$wrapperEl[0].removeEventListener(t,y)}),e.autoplay.paused=!1,e.autoplay.running?d():h())}function S(){e.params.autoplay.disableOnInteraction?h():(f("autoplayPause"),_()),["transitionend","webkitTransitionEnd"].forEach(a=>{e.$wrapperEl[0].removeEventListener(a,y)})}function E(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,f("autoplayResume"),d())}function s(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",S),e.$el.on("mouseleave",E))}function l(){e.$el.off("mouseenter",S),e.$el.off("mouseleave",E)}c("init",()=>{e.params.autoplay.enabled&&(v(),A().addEventListener("visibilitychange",b),s())}),c("beforeTransitionStart",(a,t,i)=>{e.autoplay.running&&(i||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):h())}),c("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?h():_())}),c("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&d()}),c("destroy",()=>{l(),e.autoplay.running&&h(),A().removeEventListener("visibilitychange",b)}),Object.assign(e.autoplay,{pause:_,run:d,start:v,stop:h})}const U=o=>(N("data-v-81bd5dec"),o=o(),z(),o),le={class:"relative flex items-center justify-center w-full h-40 md:h-56 lg:h-72"},ie=["src"],oe=U(()=>p("div",{class:"absolute z-10 swiper-next right-6 -translate-y-2/4 top-2/4 icon arrow_right"},[p("i",{class:"fa-solid fa-angle-right"})],-1)),re=U(()=>p("div",{class:"absolute z-10 swiper-prev left-6 -translate-y-2/4 top-2/4 icon arrow_left"},[p("i",{class:"fa-solid fa-angle-left"})],-1)),pe=Y({__name:"Banner",setup(o){const e=[te,se,ne],m=["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"];return(c,f)=>(j(),P("div",null,[x(G(J),{modules:e,"slides-per-view":1,navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},pagination:{clickable:!0},autoplay:{delay:2e3}},{default:O(()=>[(j(),P(K,null,Z(m,(n,d)=>x(G(Q),{key:d},{default:O(()=>[p("div",le,[p("img",{src:n,alt:"",class:"object-cover w-full h-40 md:h-56 lg:h-72"},null,8,ie)])]),_:2},1024)),64)),oe,re]),_:1},8,["navigation"])]))}}),de=L(pe,[["__scopeId","data-v-81bd5dec"]]),ce="/assets/clothes.11862c4f.jpg",ue="/assets/coat.6f75d827.jpg",fe="/assets/pants.30185d71.jpg";const me={},M=o=>(N("data-v-f05782ae"),o=o(),z(),o),ge={class:"grid w-full grid-rows-3 gap-2 px-3 md:grid-cols-3 md:grid-rows-1 md:px-0"},be=M(()=>p("img",{class:"object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700",src:ce,alt:""},null,-1)),ve=M(()=>p("li",null,[p("i",{class:"anicon fas fa-angle-double-down"})],-1)),he=M(()=>p("span",{class:"anispan"},"\u71B1\u92B7\u4E0A\u8863",-1)),_e=M(()=>p("img",{class:"object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700",src:ue,alt:""},null,-1)),ye=M(()=>p("li",null,[p("i",{class:"anicon fas fa-angle-double-down"})],-1)),xe=M(()=>p("span",{class:"anispan"},"\u7CBE\u9078\u5916\u5957",-1)),Ce=M(()=>p("img",{class:"object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700",src:fe,alt:""},null,-1)),$e=M(()=>p("li",null,[p("i",{class:"anicon fas fa-angle-double-down"})],-1)),we=M(()=>p("span",{class:"anispan"},"\u7D93\u5178\u8932\u6B3E",-1));function Ee(o,e){const m=W("router-link");return j(),P("main",ge,[x(m,{to:"/products?categoryId=1",class:"imgbox"},{default:O(()=>[be,ve,he]),_:1}),x(m,{to:"/products?categoryId=3",class:"imgbox"},{default:O(()=>[_e,ye,xe]),_:1}),x(m,{to:"/products?categoryId=2",class:"imgbox"},{default:O(()=>[Ce,$e,we]),_:1})])}const ke=L(me,[["render",Ee],["__scopeId","data-v-f05782ae"]]),Be="/assets/shop01.900966ac.jpg";const Me={},Se=o=>(N("data-v-3dd90878"),o=o(),z(),o),Ie={class:"w-full px-3 mt-2 md:px-0 md:flex md:flex-row-reverse"},He=Se(()=>p("img",{class:"object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700",src:Be,alt:""},null,-1)),Oe={class:"flex-col my-5 space-y-2 flex-center md:flex-1"},De=q('<span class="text-lg font-normol" data-v-3dd90878> \u8CEA\u611F\u65E5\u7CFB\u6642\u5C1A </span><div class="flex-col space-y-px flex-center" data-v-3dd90878><span class="font-thin" data-v-3dd90878>\u81EA\u5206\u306B\u5FE0\u5B9F !</span><span class="font-thin" data-v-3dd90878>\u6211\u5011\u5E0C\u671B\u5275\u9020\u4E00\u500B\u512A\u8CEA\u7A7A\u9593</span><span class="font-thin" data-v-3dd90878>\u8B93\u6BCF\u500B\u524D\u4F86\u7684\u4F60\u5011\uFF0C\u90FD\u80FD\u7A7F\u51FA\u5C6C\u65BC\u81EA\u5DF1\u7684\u65E5\u7CFB\u7368\u7279\u98A8\u683C\u3002</span></div>',2),Fe=ee("SHOP NOW");function je(o,e){const m=W("router-link");return j(),P("main",Ie,[x(m,{to:"/products",class:"imgbox"},{default:O(()=>[He]),_:1}),p("div",Oe,[De,x(m,{to:"/products",class:"px-4 py-1.5 font-thin border border-black hover:bg-primary hover:text-white duration-500 ease-in-out"},{default:O(()=>[Fe]),_:1})])])}const Pe=L(Me,[["render",je],["__scopeId","data-v-3dd90878"]]);const Te={},Ae={class:"relative mt-2 flex-center"},Le=q('<div class="w-full overflow-hidden h-96" data-v-9ef8b1d0><img class="object-cover w-full h-96" src="https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=779&amp;q=80" alt="" data-v-9ef8b1d0></div><div class="w-full overflow-hidden h-96 bevel" data-v-9ef8b1d0><img class="object-cover w-full h-96" src="https://images.unsplash.com/photo-1603197788269-c76bbc23b1de?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=696&amp;q=80" alt="" data-v-9ef8b1d0></div><section class="absolute flex-col top-[25%] md:top-[35%] flex-center" data-v-9ef8b1d0><span class="text-3xl text-white" data-v-9ef8b1d0>\u8A02\u95B1\u6700\u65B0\u512A\u60E0\u5167\u5BB9</span><form class="inline-block w-full md:w-[200%] lg:w-[400%] flex-center text-center my-4" data-v-9ef8b1d0><input type="text" placeholder="Enter email for news updates" name="subscript" data-v-9ef8b1d0><button class="btn" type="submit" data-v-9ef8b1d0>SING UP!</button></form><p class="text-xs font-thin text-white" data-v-9ef8b1d0> By registering you agree with our <a class="underline underline-offset-2 text-primary" href="" data-v-9ef8b1d0>Integrity Policy</a></p></section>',3),Ge=[Le];function Ne(o,e){return j(),P("main",Ae,Ge)}const ze=L(Te,[["render",Ne],["__scopeId","data-v-9ef8b1d0"]]),qe={class:"w-full max-w-[1280px] mx-auto mb-8"},Ve=p("title",null,"Life Style SEO Page",-1),Ye=p("meta",{key:"description",name:"description",content:"\u6211\u662F\u5167\u5BB9\uFF01"},null,-1),We=p("meta",{key:"og:title",property:"og:title",content:"Life Style SEO Page"},null,-1),Re=p("meta",{key:"og:description",property:"og:description",content:"\u6211\u662F\u5167\u5BB9\uFF01"},null,-1),Ue=p("meta",{key:"og:site_name",property:"og:site_name",content:"Life Style SEO Page"},null,-1),Xe=p("meta",{key:"og:type",property:"og:type",content:"activity"},null,-1),Qe=p("meta",{key:"og:image:width",property:"og:image:width",content:"1200"},null,-1),Je=p("meta",{key:"og:image:height",property:"og:image:height",content:"630"},null,-1),Ke=q('<div class="flex-col w-full p-2 my-2 bg-gray-200 flex-center"><span class="text-xl font-light">HIGH QUALITY ASSURANCE</span><span class="w-8 h-px my-2 bg-black"></span><span class="text-sm font-extralight">\u6BCF\u4E00\u4EF6\u5546\u54C1\u90FD\u7D93\u904E\u56B4\u683C\u7BE9\u9078</span><span class="text-sm font-extralight">- \u529B\u6C42\u6642\u5C1A\u517C\u5177\u597D\u54C1\u8CEA -</span></div>',1),aa=Y({__name:"home",setup(o){return(e,m)=>(j(),P("main",qe,[x(G(ae),null,{default:O(()=>[Ve,Ye,We,Re,Ue,Xe,Qe,Je]),_:1}),x(de),Ke,x(ke),x(Pe),x(ze)]))}});export{aa as default};