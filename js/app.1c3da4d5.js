(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],m=0,v=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-cheatsheet/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"13a7":function(t,e,a){"use strict";a("1562")},1562:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("db4d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"bg-watermark"}),a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"col-12 bg-white p-3 mb-3"},[a("div",{staticClass:"text-left",attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")]),t._v(" | "),a("router-link",{attrs:{to:"/vuexDemo"}},[t._v("Vuex Demo")]),t._v(" | "),a("router-link",{attrs:{to:"/lifeCycle"}},[t._v("LifeCycle Demo")]),t._v(" | "),a("router-link",{attrs:{to:"/componentDemo"}},[t._v("Component Demo")]),t._v(" | "),a("router-link",{attrs:{to:"/apiDemo"}},[t._v("API Demo")]),t._v(" | "),a("router-link",{attrs:{to:"/validactionDemo"}},[t._v("Validaction Demo")]),t._v(" | "),a("router-link",{attrs:{to:"/tableDemo"}},[t._v("Table Demo")]),t._v(" | "),a("router-link",{class:{"router-link-exact-active ":t.subIsActive("/routerDemo")},attrs:{to:"/routerDemo/subPage1"}},[t._v("Router Demo")])],1)]),a("vue-page-transition",{attrs:{name:"fade-in-up"}},[a("router-view")],1),t._m(1)],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 bg-white mb-3 p-3 header"},[a("div",{staticClass:"title mb-3 text-center"},[t._v("VUE CHEATSHEET")]),a("div",{staticClass:"text-center"},[t._v(" 在這裡紀錄了以應用為主的Vue功能，協助寫程式上方便參考"),a("br"),t._v(" 畢竟你知道的，能夠直覺得明白是最好的。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"col-12 p-3"},[a("div",{staticClass:"text-center"},[t._v(" Copyright © 2021 unromanticman. All rights reserved. ")])])}],i={watch:{$route:{handler:function(t){console.log(t.path)},immediate:!0,deep:!0}},methods:{subIsActive:function(t){var e=this,a=Array.isArray(t)?t:[t];return a.some((function(t){return 0===e.$route.path.indexOf(t)}))}}},l=i,o=a("2877"),c=Object(o["a"])(l,n,r,!1,null,null,null),u=c.exports,m=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v(t._s(t.pageName))]),t._m(0)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" Hi!我是YU HSIANG."),a("br"),t._v("這是一份Vue的CheatSheet，以Vue CLI建立，主要記錄了常見的元件及操作方式。"),a("br"),t._v(" 可以點擊上方導航列做直接的範例演示。 "),a("br"),a("br"),t._v(" 如果想要直接瀏覽專案程式碼可以點擊："),a("a",{attrs:{href:"https://github.com/unromanticman/vue-cheatsheet"}},[t._v("https://github.com/unromanticman/vue-cheatsheet")]),a("br"),a("br"),a("h5",[t._v("這份專案包含的內容：")]),a("ol",[a("li",[t._v("多頁面路由vue router配置")]),a("li",[t._v("Vuex 狀態管理配置")]),a("li",[t._v("IE11 支援配置")]),a("li",[t._v("常見生命週期函式")]),a("li",[t._v("父元件子元件溝通範例")]),a("li",[t._v("API串接範例")]),a("li",[t._v("頁面特效")]),a("li",[t._v("驗證錯誤用提示元件")]),a("li",[t._v("BootstrapVue Table元件使用範例")]),a("li",[t._v("SCSS編譯&Bootstrap配置")]),a("li",[t._v("路由追蹤(未找到頁面匹配導向404頁面)")]),a("li",[t._v("巢狀路由範例")])])])}],d={name:"Home",components:{},props:["pageName"]},_=d,f=Object(o["a"])(_,v,p,!1,null,null,null),b=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"text-center"},[a("div",[a("h4",[t._v("目前瀏覽此頁面:"+t._s(t.count)+"次")])])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 這是Vuex使用範例，作為全域變數狀態管理。"),a("br"),t._v("在此頁面將利用Vuex的state、action、dispatch記錄進到此頁面的"),a("b",[t._v("次數")]),t._v("。 "),a("br"),t._v("可嘗試點擊其他連結再點回此頁，可以發現次數會增加。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/VuexDemo.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],C={name:"VuexDemo",props:["pageName"],computed:{count:function(){return this.$store.state.count}},mounted:function(){this.$store.dispatch("increment",1)}},x=C,y=Object(o["a"])(x,h,g,!1,null,null,null),w=y.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"text-center"},[a("div",[a("h4",[t._v("count:"+t._s(t.number))])])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 在這個範例裡使用vue的生命週期(lifecycle)函式created，當作第一次資料的初始。"),a("br"),t._v(" 原本count在data裡面的值是0，但因為頁面載入呼叫created後被初始為10。"),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/LifeCycle.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],k={name:"LifeCycle",props:["pageName"],created:function(){this.number=10},data:function(){return{number:0}}},P=k,E=Object(o["a"])(P,D,$,!1,null,null,null),N=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"text-left mt-3"},[a("form",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("輸入的值")]),a("div",{staticClass:"col-sm-10"},[a("FloatInput",{attrs:{value:t.number,"fixed-digit":2},on:{"update:value":function(e){t.number=e}}})],1)]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 "},[t._v("轉存後的值")]),a("div",{staticClass:"col-sm-10"},[t._v(t._s(t.number))])])])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 這是一個Custom Component範例，客製化一個可重複使用的"),a("b",[t._v("「浮點數輸入框(FloatInput)」")]),t._v("。"),a("br"),t._v(" 在這Component中輸入的值會被轉存為有2位小數的浮點數。"),a("br"),t._v(" 此外，在這個範例中也能得知父層、子層的資料傳遞方式。"),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/ComponentDemo.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.number},on:{change:t.handlerChange}})},A=[],V=(a("a9e3"),a("b680"),{name:"FloatInput",props:{value:[Number,String],fixedDigit:[Number,String]},data:function(){return{number:this.value}},watch:{value:function(t){this.number=t,this.number=parseFloat(this.number).toFixed(this.fixedDigit),this.$emit("update:value",this.number),console.log("父層props更新 number:",this.number)}},mounted:function(){this.number=parseFloat(this.number).toFixed(this.fixedDigit),this.$emit("update:value",this.number),console.log("初始載入 number:",this.number)},methods:{handlerChange:function(t){this.number=parseFloat(t.target.value).toFixed(this.fixedDigit),this.$emit("update:value",this.number),console.log("離開輸入框 number:",this.number)}}}),I=V,F=Object(o["a"])(I,j,A,!1,null,null,null),R=F.exports,T={name:"About",components:{FloatInput:R},data:function(){return{number:50}},props:["pageName"]},U=T,B=Object(o["a"])(U,O,S,!1,null,null,null),H=B.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"text-center mt-3"},[a("h4",[t._v("Result")]),t.randomUser?a("div",[t._v(" Name:"+t._s(t.randomUser.name.title)+" "+t._s(t.randomUser.name.first)+" "+t._s(t.randomUser.name.last)+" "),a("br"),t._v(" gender:"+t._s(t.randomUser.gender)+" ")]):t._e(),a("button",{staticClass:"btn-sm btn btn-primary my-3",on:{click:t.fetchUser}},[a("i",{staticClass:"fas fa-sync-alt mr-1"}),t._v("重新抓取 ")])])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 這是一個呼叫API的範例，在頁面載入created時呼叫 https://randomuser.me/api/ 產生隨機的亂數用戶。"),a("br"),t._v(" 使用fetch呼叫後再設定到資料上。"),a("br"),t._v(" 也可以點擊重新撈取。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/APIDemo.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],G=(a("d3b7"),{name:"APIDemo",props:["pageName"],data:function(){return{randomUser:null}},created:function(){this.fetchUser()},methods:{fetchUser:function(){var t=this;fetch("https://randomuser.me/api/").then((function(t){return t.json()})).then((function(e){e.results.length>0&&(t.randomUser=e.results[0])}))}},mounted:function(){}}),z=G,J=Object(o["a"])(z,L,M,!1,null,null,null),W=J.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"text-center mt-3"},[a("div",{staticClass:"text-left mt-3"},[a("form",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v("輸入的值")]),a("div",{staticClass:"col-sm-10"},[a("Validation",{attrs:{msg:t.errorMsg}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])],1)])])])])])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 這是一個客製化的驗證元件，可以嘗試再輸入框輸入3個以上的文字，會提示你輸入錯誤，必須小於3個字。"),a("br"),t._v(" 常用在後端回傳回來要給使用者的訊息。"),a("br"),t._v(" 它使用到了vue的slot用法，納入子元素。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/ValidactionDemo.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:{"validation-error":t.msg}},[t._t("default"),t.msg?a("div",{staticClass:"validation-text"},[t._v(" "+t._s(t.msg)+" ")]):t._e()],2)},Q=[],X={name:"Validation",props:{msg:[Number,String]}},Z=X,tt=(a("13a7"),Object(o["a"])(Z,K,Q,!1,null,null,null)),et=tt.exports,at={name:"About",components:{Validation:et},data:function(){return{text:"100"}},computed:{errorMsg:function(){return this.text.length>3?"必須小於三個字":null}},props:["pageName"]},st=at,nt=Object(o["a"])(st,Y,q,!1,null,null,null),rt=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"text-center mt-3"},[a("div",{staticClass:"overflow-auto text-left"},[t.selectedCount>0?a("div",{staticClass:"text-left mb-2"},[t._v(" 已勾選:"+t._s(t.selectedCount)+" ")]):t._e(),a("b-table",{attrs:{striped:"",id:"my-table",items:t.items,"per-page":t.perPage,"current-page":t.currentPage,small:"",hover:"",fields:t.column},scopedSlots:t._u([{key:"cell(selected)",fn:function(e){return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.item.selected,expression:"data.item.selected"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.item.selected)?t._i(e.item.selected,null)>-1:e.item.selected},on:{change:function(a){var s=e.item.selected,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=null,l=t._i(s,i);n.checked?l<0&&t.$set(e.item,"selected",s.concat([i])):l>-1&&t.$set(e.item,"selected",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(e.item,"selected",r)}}})]}}])}),a("div",{staticStyle:{margin:"auto","text-align":"center"}},[a("b-pagination",{attrs:{align:"center","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("p",{staticClass:"mt-3"},[t._v("Current Page: "+t._s(t.currentPage))])],1)],1)])])])},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 這是Vue的Table範例，使用到了"),a("a",{attrs:{target:"_blank",href:"https://bootstrap-vue.org/"}},[t._v("BootstrapVue")]),t._v("。"),a("br"),t._v(" 在這範例中舉例了常用的表格操作功能，如勾選、排序、分頁。"),a("br"),t._v(" 雖然看來是很複雜的功能，但有了Table元件協助，程式碼閱讀上相對容易。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/TableDemo.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],ot=(a("4de4"),{name:"About",props:["pageName"],data:function(){return{perPage:3,currentPage:1,column:[{key:"selected",label:"selected",thStyle:{width:"10%"}},{key:"id",sortable:!0,label:"id",thStyle:{width:"30%"}},{key:"first_name",sortable:!0,label:"first name",thStyle:{width:"30%"}},{key:"last_name",sortable:!0,label:"last name",thStyle:{width:"30%"}}],items:[{id:1,first_name:"Fred",last_name:"Flintstone"},{id:2,first_name:"Wilma",last_name:"Flintstone"},{id:3,first_name:"Barney",last_name:"Rubble"},{id:4,first_name:"Betty",last_name:"Rubble"},{id:5,first_name:"Pebbles",last_name:"Flintstone"},{id:6,first_name:"Bamm Bamm",last_name:"Rubble"},{id:7,first_name:"The Great",last_name:"Gazzoo"},{id:8,first_name:"Rockhead",last_name:"Slate"},{id:9,first_name:"Pearl",last_name:"Slaghoople"}]}},watch:{items:{handler:function(t){console.log("item:",t)},deep:!0}},computed:{rows:function(){return this.items.length},selectedCount:function(){return this.items.filter((function(t){return t.selected})).length}}}),ct=ot,ut=Object(o["a"])(ct,it,lt,!1,null,null,null),mt=ut.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page text-center"},[a("h2",[t._v("404")])])}],dt={name:"HelloWorld",props:{msg:String}},_t=dt,ft=Object(o["a"])(_t,vt,pt,!1,null,null,null),bt=ft.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"col-12 bg-white py-3 mb-3"},[a("div",{staticClass:"title mb-2"},[t._v("範例："+t._s(t.pageName))]),t._m(0)]),a("div",{staticClass:"col-12 bg-white py-3"},[t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/routerDemo/subPage1"}},[t._v("子頁面1")])],1),a("li",[a("router-link",{attrs:{to:"/routerDemo/subPage2"}},[t._v("子頁面2")])],1)])]),a("div",{staticClass:"col-9"},[a("router-view")],1)])])])},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description"},[t._v(" 這是Vue Router的「巢狀Router」範例。"),a("br"),t._v(" 點擊「子頁面1」、「子頁面2」會刷新右方區塊，顯示出特定區塊內容。"),a("br"),t._v(" 可以注意網址的變換，仍在routerDemo路由下，但後綴的網址會因「子頁面1」、「子頁面2」而變換。"),a("br"),t._v(" 常用在一個版面下需呈現不同路由的內容。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title mb-2"},[t._v(" Demo展示 "),a("span",{staticClass:"goCode"},[a("a",{attrs:{target:"_blank",href:"https://github.com/unromanticman/vue-cheatsheet/blob/master/src/views/RouterDemo.vue"}},[t._v("( 點我前往程式碼 "),a("i",{staticClass:"fas fa-external-link-alt"}),t._v(" )")])])])}],Ct={name:"RouterDemo",props:["pageName"]},xt=Ct,yt=Object(o["a"])(xt,ht,gt,!1,null,null,null),wt=yt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v("子頁面1的內容區塊")])},$t=[],kt={name:"RouterSubPage1"},Pt=kt,Et=Object(o["a"])(Pt,Dt,$t,!1,null,null,null),Nt=Et.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v("子頁面2的內容區塊")])},St=[],jt={name:"RouterSubPage2"},At=jt,Vt=Object(o["a"])(At,Ot,St,!1,null,null,null),It=Vt.exports;s["default"].use(m["a"]);var Ft=[{path:"/",name:"Home",component:b,props:{pageName:"首頁"}},{path:"/vuexDemo",name:"VuexDemo",component:w,props:{pageName:"Vuex Demo"}},{path:"/lifeCycle",name:"LifeCycle",component:N,props:{pageName:"LifeCycle Demo"}},{path:"/componentDemo",name:"ComponentDemo",component:H,props:{pageName:"ComponentDemo"}},{path:"/apiDemo",name:"APIDemo",component:W,props:{pageName:"API Demo"}},{path:"/validactionDemo",name:"APIDemo",component:rt,props:{pageName:"Validaction Demo"}},{path:"/tableDemo",name:"TableDemo",component:mt,props:{pageName:"Table Demo"}},{path:"/routerDemo",name:"routerDemo",component:wt,props:{pageName:"Router Demo"},children:[{path:"subPage1",name:"subPage2",component:Nt},{path:"subPage2",name:"subPage2",component:It}]},{path:"/404",name:"NotFound",component:bt,props:{pageName:"NotFound"}},{path:"*",redirect:"/404",hidden:!0}],Rt=new m["a"]({mode:"hash",base:"/vue-cheatsheet/",routes:Ft}),Tt=Rt,Ut=a("2f62");s["default"].use(Ut["a"]);var Bt=new Ut["a"].Store({state:{count:0},mutations:{increment:function(t,e){t.count=t.count+e}},actions:{increment:function(t,e){t.commit("increment",e)}}}),Ht=Bt,Lt=a("f0eb"),Mt=a("5f5b"),Gt=a("b1e0");a("2dd8"),a("78a7");s["default"].use(Mt["a"]),s["default"].use(Gt["a"]),s["default"].use(Lt["default"]),s["default"].config.productionTip=!1,new s["default"]({store:Ht,router:Tt,render:function(t){return t(u)}}).$mount("#app")},"78a7":function(t,e,a){}});
//# sourceMappingURL=app.1c3da4d5.js.map