webpackJsonp([1],{"1+zw":function(t,e){},"9n10":function(t,e){},LJ87:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},n,!1,function(t){i("yUP2")},null,null).exports,a=i("/ocq"),o={name:"HomeHeader",props:{city:String}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var l=i("VU/8")(o,c,!1,function(t){i("v5Om")},"data-v-b2ec03fa",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(u,d,!1,function(t){i("uOSx")},"data-v-3f8b895a",null).exports,f={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var v=i("VU/8")(f,h,!1,function(t){i("1+zw")},"data-v-5dbe9f9a",null).exports,m={name:"HomeRecommend",props:{recommendList:Array},data:function(){return{}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var w=i("VU/8")(m,_,!1,function(t){i("hYps")},"data-v-206a5eca",null).exports,C={name:"HomeWeekend",props:{weekendList:Array},data:function(){return{}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var g=i("VU/8")(C,y,!1,function(t){i("siHg")},"data-v-5ccab2b4",null).exports,L=i("mtWM"),$=i.n(L),k={name:"home",components:{HomeHeader:l,HomeSwiper:p,HomeIcons:v,HomeRecommend:w,HomeWeekend:g},data:function(){return{city:"上海",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},mounted:function(){this.getHomeInfo()},methods:{getHomeInfo:function(){$.a.get("/docs/static/mock/index.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.city=e.city,this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header",{attrs:{city:t.city}}),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var x=i("VU/8")(k,b,!1,function(t){i("LJ87")},"data-v-267809f8",null).exports,H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\r\n  城市选择\r\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont back-icon header-back"},[this._v("")])])],1)},staticRenderFns:[]};var S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名或拼音"}})])}]};var E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("div",{staticClass:"title "}),this._v(" "),e("div",{staticClass:"area"}),this._v(" "),e("div",{staticClass:"area"})])}]};var R={name:"city",components:{CityHeader:i("VU/8")({name:"city-header"},H,!1,function(t){i("r8Z2")},"data-v-224f8f64",null).exports,CitySearch:i("VU/8")({name:"search"},S,!1,function(t){i("R2HS")},"data-v-594cfb4c",null).exports,CityList:i("VU/8")({name:"list"},E,!1,function(t){i("Xrf4")},"data-v-baa66640",null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("city-header"),this._v(" "),e("city-search"),this._v(" "),e("city-list")],1)},staticRenderFns:[]};var F=i("VU/8")(R,U,!1,function(t){i("tRi8")},"data-v-18085392",null).exports;s.a.use(a.a);var V=new a.a({routes:[{path:"/",name:"Home",component:x},{path:"/city",name:"City",component:F}]}),O=i("DVXL"),T=i.n(O),A=i("F3EI"),I=i.n(A);i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,T.a.attach(document.body),s.a.use(I.a),new s.a({el:"#app",router:V,components:{App:r},template:"<App/>"})},R2HS:function(t,e){},TzC8:function(t,e){},Xrf4:function(t,e){},hYps:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},a=i("VU/8")(n,r,!1,null,null,null);e.default=a.exports},r8Z2:function(t,e){},siHg:function(t,e){},tRi8:function(t,e){},uOSx:function(t,e){},v2ns:function(t,e){},v5Om:function(t,e){},yUP2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b7491614a3d70f61296f.js.map