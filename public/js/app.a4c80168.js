(function(e){function s(s){for(var a,c,o=s[0],i=s[1],u=s[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(s);while(f.length)f.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],a=!0,o=1;o<t.length;o++){var i=t[o];0!==n[i]&&(a=!1)}a&&(r.splice(s--,1),e=c(c.s=t[0]))}return e}var a={},n={app:0},r=[];function c(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=a,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)c.d(t,a,function(s){return e[s]}.bind(null,a));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=s,o=o.slice();for(var u=0;u<o.length;u++)s(o[u]);var l=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"00fa":function(e,s,t){"use strict";var a=t("5c34"),n=t.n(a);n.a},"034f":function(e,s,t){"use strict";var a=t("85ec"),n=t.n(a);n.a},1:function(e,s){},"1ab6":function(e,s){var t=function(){var e=localStorage.getItem("token"),s={headers:{"Content-Type":"application/json"}};return e&&(s.headers["auth-token"]=e),s};e.exports=t},3012:function(e,s,t){"use strict";var a=t("8799"),n=t.n(a);n.a},"3c79":function(e,s,t){},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[e.isVerified?t("Chats",{on:{verify:e.isLoggedIn}}):t("SignUp",{on:{verify:e.isLoggedIn}})],1)},r=[],c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"main"},[t("div",{staticClass:"navbar-custom"},[t("p",{staticClass:"nav-item",on:{click:function(s){e.isSignUp=!1}}},[e._v("Sign In")]),t("p",{staticClass:"nav-item",on:{click:function(s){e.isSignUp=!0}}},[e._v("Sign Up")])]),t("div",{staticClass:"custom"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.submitForm(s)}}},[t("b-field",{staticClass:"inp",attrs:{label:"Username","label-position":"on-border"}},[t("b-input",{attrs:{value:"ex: johnsilver",maxlength:"10",minlength:"3",required:""},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}})],1),t("b-field",{staticClass:"inp",attrs:{label:"Password","label-position":"on-border"}},[t("b-input",{attrs:{type:"password",maxlength:"10",minlength:"5",required:"","password-reveal":""},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1),e.isSignUp?t("b-field",{staticClass:"inp",attrs:{label:"Confirm Password","label-position":"on-border"}},[t("b-input",{attrs:{type:"password",maxlength:"10",minlength:"5",required:"","password-reveal":""},model:{value:e.confPassword,callback:function(s){e.confPassword=s},expression:"confPassword"}})],1):e._e(),t("div",{staticClass:"btn"},[t("b-button",{staticClass:"action-btn",attrs:{type:"is-primary","native-type":"submit"}},[e._v(" "+e._s(e.isSignUp?"Sign Up":"Sign In")+" ")])],1)],1)]),e.errorMessage?t("div",{staticClass:"alert"},[t("b-message",{attrs:{type:"is-danger"}},[e._v(" "+e._s(e.errorMessage)+" ")])],1):e._e()])},o=[],i=(t("96cf"),t("1da1")),u=t("bc3a"),l=t.n(u),d={data:function(){return{username:null,password:null,confPassword:null,errorMessage:null,isSignUp:!1}},methods:{submitForm:function(){return this.errorMessage=null,this.password!==this.confPassword&&this.isSignUp?this.errorMessage="Passwords Do not match!!":this.isSignUp?this.signUp():this.signIn()},signUp:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var t,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,l.a.post("/api/users/signup",{userName:e.username,password:e.password});case 3:t=s.sent,a=t.data,localStorage.setItem("userName",a.userName),localStorage.setItem("token",a.token),e.$emit("verify"),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),e.errorMessage="User Already Exist!!";case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},signIn:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var t,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.errorMessage=null,s.prev=1,s.next=4,l.a.post("/api/users/login",{userName:e.username,password:e.password});case 4:t=s.sent,a=t.data,localStorage.setItem("userName",a.userName),localStorage.setItem("token",a.token),e.$emit("verify"),s.next=14;break;case 11:s.prev=11,s.t0=s["catch"](1),e.errorMessage="Invalid Credential !!";case 14:case"end":return s.stop()}}),s,null,[[1,11]])})))()}}},f=d,m=(t("e340"),t("2877")),b=Object(m["a"])(f,c,o,!1,null,"648d9542",null),p=b.exports,j=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"chats"},[t("div",{staticClass:"logout"},[t("b-button",{attrs:{type:"is-white","icon-left":"logout"},on:{click:e.logout}},[e._v("Logout")])],1),t("div",{staticClass:"messages"},e._l(e.messages,(function(s){return t("UserMessage",{key:s._id,attrs:{message:s},on:{logout:e.logout}})})),1),t("div",{staticClass:"send-message"},[t("AddMessage",{on:{logout:e.logout}})],1)])},g=[],h=(t("4de4"),t("8055")),v=t.n(h),k=t("1ab6"),w=t.n(k),y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:["main",e.userName===e.message.userName?"custom-main":null]},[t("div",{staticClass:"username"},[t("b-icon",{attrs:{icon:"account-circle-outline",size:"is-medium"}}),t("p",{staticClass:"name"},[e._v(e._s(e.message.userName))])],1),t("div",{staticClass:"message"},[t("p",{staticClass:"text"},[e._v(e._s(e.message.text))]),t("p",{staticClass:"date"},[e._v(" "+e._s(e.transformDateAndTime(e.message.createdAt))+" ")])]),t("div",{class:["btn",e.userName===e.message.userName?"visible":"hide"]},[t("button",{staticClass:"button is-danger is-rounded",on:{click:function(s){return e.deleteMessage(e.message._id)}}},[e._v(" x ")])])])},x=[],_=t("7f45"),C=t.n(_),S=v.a.connect("https://thc-chat-app.herokuapp.com"),z={props:["message"],data:function(){return{userName:localStorage.getItem("userName")}},methods:{transformDateAndTime:function(e){var s=C.a.tz.guess(),t=C()(e).tz(s).format();return C()(t).calendar()},deleteMessage:function(e){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.delete("api/messages/delete/".concat(e),w()());case 3:S.emit("deleteMessage",e),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),s.$emit("logout");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},O=z,M=(t("e2fe"),Object(m["a"])(O,y,x,!1,null,"0287f4c0",null)),U=M.exports,I=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"msg-box"},[t("b-input",{staticClass:"inp-box",attrs:{placeholder:"Ex: Hello world",type:"textarea",maxlength:"100"},model:{value:e.message,callback:function(s){e.message=s},expression:"message"}}),t("div",{staticClass:"btn-box"},[t("b-button",{staticClass:"btn",attrs:{type:"is-success"},on:{click:e.addMessage}},[e._v(" Send ")])],1)],1)},N=[],P=v.a.connect("https://thc-chat-app.herokuapp.com"),$={data:function(){return{message:null}},methods:{addMessage:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var t,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!e.message){s.next=13;break}return s.prev=1,s.next=4,l.a.post("api/messages/create",{userName:localStorage.getItem("userName"),text:e.message},w()());case 4:t=s.sent,a=t.data,e.message=null,P.emit("newMessage",a),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](1),e.$emit("logout");case 13:case"end":return s.stop()}}),s,null,[[1,10]])})))()}}},R=$,E=(t("00fa"),Object(m["a"])(R,I,N,!1,null,"5f7b47a1",null)),A=E.exports,L=v.a.connect("https://thc-chat-app.herokuapp.com"),T={components:{UserMessage:U,AddMessage:A},data:function(){return{messages:[]}},methods:{scroll:function(){var e=document.querySelectorAll(".main");e[e.length-1].classList.add("last-main"),document.querySelector(".last-main").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),e[e.length-1].classList.remove("last-main")},logout:function(){localStorage.clear(),this.$emit("verify")}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var t,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,l.a.get("api/messages",w()());case 3:t=s.sent,a=t.data,e.messages=a,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),e.logout();case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},created:function(){var e=this;L.on("addMessage",(function(s){e.messages.push(s),e.$nextTick((function(){e.scroll()}))})),L.on("messageDeleted",(function(s){e.messages=e.messages.filter((function(e){var t=e._id;return t!==s}))}))}},q=T,D=(t("3012"),Object(m["a"])(q,j,g,!1,null,"054551e2",null)),V=D.exports,F={name:"App",data:function(){return{isVerified:!1}},components:{SignUp:p,Chats:V},mounted:function(){this.isLoggedIn()},methods:{isLoggedIn:function(){var e=localStorage.getItem("userName");this.isVerified=!!e}}},J=F,H=(t("034f"),Object(m["a"])(J,n,r,!1,null,null,null)),B=H.exports,G=t("289d");t("5abe");a["a"].use(G["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(B)}}).$mount("#app")},"5c34":function(e,s,t){},"85ec":function(e,s,t){},8799:function(e,s,t){},a9b7:function(e,s,t){},e2fe:function(e,s,t){"use strict";var a=t("3c79"),n=t.n(a);n.a},e340:function(e,s,t){"use strict";var a=t("a9b7"),n=t.n(a);n.a}});
//# sourceMappingURL=app.a4c80168.js.map