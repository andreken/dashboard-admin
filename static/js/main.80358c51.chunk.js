(this["webpackJsonpadmin-dashboard"]=this["webpackJsonpadmin-dashboard"]||[]).push([[4],{122:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=n(62),u=n.n(c),s=(n(122),n(50)),o=n(61),i=n(60),d=n(56),l=n(10),f=n(20),S=n(113),b=n(85),p=n(84),h=n(66),j=n(169),E=n(11),O=h.a.div({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),_=function(){return Object(E.jsx)(O,{children:Object(E.jsx)(j.a,{})})},I=["component","isPrivate","componentProps"],T=function(e){var t=e.component,n=e.isPrivate,r=void 0!==n&&n,a=e.componentProps,c=Object(S.a)(e,I),u=t,s=Object(b.a)(p.a),o=Object(f.a)(s,2),d=o[0],h=o[1],j=null!==d;return h?Object(E.jsx)(_,{}):Object(E.jsx)(i.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return j||!r?Object(E.jsx)(u,Object(l.a)(Object(l.a)({},e),a)):Object(E.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},g=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(7)]).then(n.bind(null,247))})),v=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(8)]).then(n.bind(null,259))})),m=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(10)]).then(n.bind(null,266))})),U=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9)]).then(n.bind(null,272))})),C=a.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,268))})),F=function(){return Object(E.jsx)(r.Suspense,{fallback:Object(E.jsx)(_,{}),children:Object(E.jsx)(d.a,{history:o.b,children:Object(E.jsxs)(i.d,{children:[Object(E.jsx)(T,{exact:!0,path:"/login",component:g}),Object(E.jsx)(T,{exact:!0,path:"/register",component:v}),Object(E.jsx)(T,{exact:!0,path:"/",component:m,isPrivate:!0}),Object(E.jsx)(T,{exact:!0,path:"/photos",component:U,isPrivate:!0}),Object(E.jsx)(i.b,{component:C})]})})})},A=Object(o.a)();var y=function(){return Object(E.jsx)(s.a,{store:A,children:Object(E.jsx)(F,{})})},D=document.getElementById("root"),N=Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(y,{})});u.a.render(N,D)},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return v.a})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return _}));var r={};n.r(r),n.d(r,"signInStarted",(function(){return o})),n.d(r,"signInSuccess",(function(){return i})),n.d(r,"signInFailed",(function(){return d})),n.d(r,"signUpStarted",(function(){return l})),n.d(r,"signUpSuccess",(function(){return f})),n.d(r,"signUpFailed",(function(){return S})),n.d(r,"signOut",(function(){return b}));var a={};n.r(a),n.d(a,"fetchStarted",(function(){return j})),n.d(a,"fetchSuccess",(function(){return E})),n.d(a,"fetchFailed",(function(){return O}));var c={};n.r(c),n.d(c,"fetchStarted",(function(){return I})),n.d(c,"fetchSuccess",(function(){return T})),n.d(c,"fetchFailed",(function(){return g}));var u=n(42),s=Object(u.a)("AUTH",Object.values({SIGN_IN_STARTED:"SIGN_IN_STARTED",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILED:"SIGN_IN_FAILED",SIGN_UP_STARTED:"SIGN_UP_STARTED",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILED:"SIGN_UP_FAILED",SIGN_OUT:"SIGN_OUT"})),o=function(){return{type:s.SIGN_IN_STARTED}},i=function(){return{type:s.SIGN_IN_SUCCESS}},d=function(e){return{type:s.SIGN_IN_FAILED,payload:e}},l=function(){return{type:s.SIGN_UP_STARTED}},f=function(){return{type:s.SIGN_UP_SUCCESS}},S=function(e){return{type:s.SIGN_UP_FAILED,payload:e}},b=function(){return{type:s.SIGN_OUT}},p=n(86),h=Object(u.a)("TODOS",Object.values({FETCH_STARTED:"FETCH_STARTED",FETCH_SUCCESS:"FETCH_SUCCESS",FETCH_FAILED:"FETCH_FAILED"})),j=function(){return{type:h.FETCH_STARTED}},E=function(e){return{type:h.FETCH_SUCCESS,payload:e}},O=function(){return{type:h.FETCH_FAILED}},_=Object(u.a)("PHOTOS",Object.values({FETCH_STARTED:"FETCH_STARTED",FETCH_SUCCESS:"FETCH_SUCCESS",FETCH_FAILED:"FETCH_FAILED"})),I=function(){return{type:_.FETCH_STARTED}},T=function(e){return{type:_.FETCH_SUCCESS,payload:e}},g=function(){return{type:_.FETCH_FAILED}},v=n(52)},42:function(e,t,n){"use strict";var r=n(1),a=n(10);t.a=function(e,t){return t.reduce((function(t,n){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},n,function(e,t){return"".concat(e,"/").concat(t)}(e,n)))}),{})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(42),a=Object(r.a)("USER",Object.values({STORE_USER_DATA:"STORE_USER_DATA",REMOVE_USER_DATA:"REMOVE_USER_DATA"}))},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return O}));var r=n(48),a=n(105),c=n(89),u=n(36),s=n(102),o={signInStarted:!1,signInSuccess:!1,signInFailed:!1,signInErrorMessage:null,signUpStarted:!1,signUpSuccess:!1,signUpFailed:!1,signUpErrorMessage:null},i=null,d={list:[],fetchStarted:!1,fetchSuccess:!1,fetchFailed:!1},l={list:[],fetchStarted:!1,fetchSuccess:!1,fetchFailed:!1},f={auth:o,user:i,todos:d,photos:l},S=n(10),b=n(56),p=n(17);var h={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.b.SIGN_IN_STARTED:return Object(S.a)(Object(S.a)({},e),{},{signInStarted:!0,signInSuccess:!1,signInFailed:!1,signInErrorMessage:null});case p.b.SIGN_IN_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{signInStarted:!1,signInSuccess:!0,signInErrorMessage:null});case p.b.SIGN_IN_FAILED:return Object(S.a)(Object(S.a)({},e),{},{signInStarted:!1,signInFailed:!0,signInErrorMessage:t.payload});case p.b.SIGN_UP_STARTED:return Object(S.a)(Object(S.a)({},e),{},{signUpStarted:!0,signUpSuccess:!1,signUpFailed:!1,signUpErrorMessage:null});case p.b.SIGN_UP_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{signUpSuccess:!0,signUpStarted:!1,signUpErrorMessage:null});case p.b.SIGN_UP_FAILED:return Object(S.a)(Object(S.a)({},e),{},{signUpFailed:!0,signUpStarted:!1,signUpErrorMessage:t.payload});case p.b.SIGN_OUT:return Object(S.a)({},o);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.h.STORE_USER_DATA:return Object(S.a)({},t.payload);case p.h.REMOVE_USER_DATA:return null;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.f.FETCH_STARTED:return Object(S.a)(Object(S.a)({},e),{},{fetchStarted:!0,fetchSuccess:!1,fetchFailed:!1});case p.f.FETCH_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{list:t.payload,fetchStarted:!1,fetchSuccess:!0});case p.f.FETCH_FAILED:return Object(S.a)(Object(S.a)({},e),{},{list:[],fetchStarted:!1,fetchFailed:!0});default:return e}},photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.d.FETCH_STARTED:return Object(S.a)(Object(S.a)({},e),{},{fetchStarted:!0,fetchSuccess:!1,fetchFailed:!1});case p.d.FETCH_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{list:t.payload,fetchStarted:!1,fetchSuccess:!0});case p.d.FETCH_FAILED:return Object(S.a)(Object(S.a)({},e),{},{list:[],fetchStarted:!1,fetchFailed:!0});default:return e}}},j=function(e){return Object(r.combineReducers)(Object(S.a)({router:Object(b.b)(e)},h))},E=Object(u.a)({basename:"/dashboard-admin"});function O(){var e=Object(r.applyMiddleware)(Object(c.a)(E),a.a);return Object(r.createStore)(j(E),f,Object(s.composeWithDevTools)(e))}},73:function(e,t,n){"use strict";var r=n(110),a=n.n(r).a.create({baseURL:"https://jsonplaceholder.typicode.com/"});t.a=a},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return _}));var r=n(0),a=n.n(r),c=n(2),u=n(109),s=n(38),o=n(40),i={apiKey:"AIzaSyAzr933HQSKHmpCcJDipwa_4RPhefQGXz0",authDomain:"dashboard-admin-auth.firebaseapp.com",projectId:"dashboard-admin-auth",storageBucket:"dashboard-admin-auth.appspot.com",messagingSenderId:"692022730275",appId:"1:692022730275:web:6ebe01703886a65f639b96"},d=function(e){switch(e){case"auth/wrong-password":case"auth/user-not-found":return"Login failed. Email or password not valid.";case"auth/too-many-requests":return"Access to this account has been temporarily disabled due to many failed login attempts. Try again later.";case"auth/email-already-exists":return"Registration failed. Email already exists.";default:return"An error has occurred. Please try again later."}},l=n(73);function f(e){var t;e?(!function(e,t){var n=(new Date).getTime();localStorage.setItem(e,JSON.stringify({value:t,timestamp:n}))}("authToken",e),l.a.defaults.headers.common.Authorization=e):(t="authToken",localStorage.removeItem(t),delete l.a.defaults.headers.common.Authorization)}var S=function(e){return f(e)},b=Object(u.a)(i),p=Object(s.b)(b),h=Object(o.d)(b),j=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.e)(p,t,n);case 3:return r=e.sent,c=r.user,e.next=7,O(null===c||void 0===c?void 0:c.uid);case 7:return u=e.sent,e.next=10,I(c);case 10:return e.abrupt("return",u);case 13:throw e.prev=13,e.t0=e.catch(0),console.error("Error adding document",e.t0.code,e.t0.message,e.t0.name),Error(d(e.t0.code));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var u,i,l,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.a)(p,r,c);case 3:return u=e.sent,i=u.user,l=Object(o.b)(h,"users"),f={uid:i.uid,firstName:t,lastName:n,email:r,password:c},e.next=9,Object(o.a)(l,f);case 9:return e.next=11,I(i);case 11:return e.abrupt("return",f);case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error adding document",e.t0.code,e.t0.message,e.t0.name),Error(d(e.t0.code));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Object(o.f)(Object(o.b)(h,"users"),Object(o.g)("uid","==",t),Object(o.e)(1)),e.next=4,Object(o.c)(n);case 4:return r=e.sent,c=null,r.forEach((function(e){c=e.data()})),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(null),e.next=3,p.signOut();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:n=e.sent,S(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},86:function(e,t,n){"use strict";n.r(t),n.d(t,"storeUserData",(function(){return a})),n.d(t,"removeUserData",(function(){return c}));var r=n(52),a=function(e){return{type:r.a.STORE_USER_DATA,payload:e}},c=function(){return{type:r.a.REMOVE_USER_DATA}}}},[[154,5,6]]]);
//# sourceMappingURL=main.80358c51.chunk.js.map