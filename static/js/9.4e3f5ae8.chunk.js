(this["webpackJsonpadmin-dashboard"]=this["webpackJsonpadmin-dashboard"]||[]).push([[9],{171:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"i",(function(){return i})),n.d(e,"h",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"m",(function(){return o})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return l})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return h}));var r=function(t){return t.auth.signInStarted},a=function(t){return t.auth.signInFailed},c=function(t){return t.auth.signInErrorMessage},i=function(t){return t.auth.signUpStarted},u=function(t){return t.auth.signUpFailed},s=function(t){return t.auth.signUpErrorMessage},o=function(t){return t.user},d=function(t){return t.todos.list},f=function(t){return t.todos.fetchStarted},l=function(t){return t.todos.fetchSuccess},j=function(t){return t.photos.list},b=function(t){return t.photos.fetchStarted},h=function(t){return t.photos.fetchSuccess}},172:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return j}));var r=n(0),a=n.n(r),c=n(2),i=n(85),u=n(17),s=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(u.a.signInStarted()),n.prev=1,n.next=4,Object(i.c)(t,e);case 4:(c=n.sent)&&(r(u.g.storeUserData({email:t,firstName:c.firstName,lastName:c.lastName})),r(u.a.signInSuccess())),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),s=null===n.t0||void 0===n.t0?void 0:n.t0.message,r(u.a.signInFailed(s));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},o=function(t,e,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(u.a.signUpStarted()),a.prev=1,a.next=4,Object(i.e)(t,e,n,r);case 4:a.sent&&(s(u.g.storeUserData({email:n,firstName:t,lastName:e})),s(u.a.signUpSuccess())),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),o=null===a.t0||void 0===a.t0?void 0:a.t0.message,s(u.a.signUpFailed(o));case 12:case"end":return a.stop()}}),c,null,[[1,8]])})));return function(t){return s.apply(this,arguments)}}()},d=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.d)();case 2:e(u.g.removeUserData()),e(u.a.signOut());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=n(74),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.e.fetchStarted()),e.prev=1,e.next=4,f.a.get("todos?_limit="+t);case 4:r=e.sent,c=r.data,n(u.e.fetchSuccess(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.e.fetchFailed());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return function(){var e=Object(c.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.c.fetchStarted()),e.prev=1,e.next=4,f.a.get("photos?_limit="+t);case 4:r=e.sent,c=r.data,n(u.c.fetchSuccess(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.c.fetchFailed());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},256:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r),c=n(0),i=n.n(c),u=n(2),s=n(20),o=n(44),d=n(86),f=n(85),l=n(172),j=n(89),b=n(171),h=n(63),p=n(47),x=n(271),O=n(251),v=n(1),m=n(116),g=n(262),w=n(270),k=n(266),y=n(258),S=n(272),N=n(273),D=n(248),U=n(249),I=function(t){return t.router.location.pathname||"/"},F=n(11),C=function(){var t=Object(o.e)(I);return Object(F.jsxs)(g.a,{variant:"permanent",sx:Object(v.a)({width:200,flexShrink:0},"& .MuiDrawer-paper",{width:200,boxSizing:"border-box"}),children:[Object(F.jsx)(w.a,{}),Object(F.jsx)(x.a,{sx:{overflow:"auto"},children:Object(F.jsxs)(k.a,{children:[Object(F.jsxs)(y.a,{selected:t===p.f,button:!0,component:m.a,to:p.f,children:[Object(F.jsx)(S.a,{children:Object(F.jsx)(D.a,{})}),Object(F.jsx)(N.a,{primary:"Todos"})]},p.f),Object(F.jsxs)(y.a,{selected:t===p.d,button:!0,component:m.a,to:p.d,children:[Object(F.jsx)(S.a,{children:Object(F.jsx)(U.a,{})}),Object(F.jsx)(N.a,{primary:"Album"})]},p.d)]})})]})},z=n(61),L=a.a.lazy((function(){return n.e(11).then(n.bind(null,259))})),E=a.a.lazy((function(){return n.e(10).then(n.bind(null,252))})),M=function(){return Object(F.jsxs)(x.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(F.jsx)(w.a,{}),Object(F.jsxs)(z.d,{children:[Object(F.jsx)(z.b,{exact:!0,path:p.f,component:L}),Object(F.jsx)(z.b,{exact:!0,path:p.d,component:E})]})]})},J=n(274),_=n(264),A=n(263),B=n(250),G=n(261),R=function(t){var e=t.loading,n=void 0!==e&&e,r=t.userData,a=void 0===r?null:r,c=t.fnLogout;return Object(F.jsx)(J.a,{position:"fixed",sx:{zIndex:function(t){return t.zIndex.drawer+1}},children:Object(F.jsx)(w.a,{children:Object(F.jsxs)(x.a,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",children:[Object(F.jsx)(_.a,{variant:"h4",noWrap:!0,component:"div",children:"Dashboard"}),Object(F.jsxs)(x.a,{display:"flex",children:[Object(F.jsx)(x.a,{marginRight:"2rem",children:n||!a?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(A.a,{height:24,width:200,style:{marginBottom:6,backgroundColor:"rgba(255,255,255,.5)"}}),Object(F.jsx)(A.a,{height:24,width:200,style:{backgroundColor:"rgba(255,255,255,.5)"}})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(_.a,{variant:"body1",children:null===a||void 0===a?void 0:a.email}),Object(F.jsx)(_.a,{variant:"body1",children:"".concat(null===a||void 0===a?void 0:a.firstName," ").concat(null===a||void 0===a?void 0:a.lastName)})]})}),Object(F.jsx)(B.a,{spacing:2,justifyContent:"center",children:Object(F.jsx)(G.a,{variant:"contained",onClick:c,children:"Logout"})})]})]})})})},T=function(t){var e=t.loading,n=t.userData,r=t.fnLogout;return Object(F.jsxs)(x.a,{sx:{display:"flex"},children:[Object(F.jsx)(O.a,{}),Object(F.jsx)(R,{loading:e,userData:n,fnLogout:r}),Object(F.jsx)(C,{}),Object(F.jsx)(M,{})]})},W=function(){var t=Object(d.a)(f.a),e=Object(s.a)(t,2),n=e[0],a=e[1],c=Object(o.d)(),x=Object(o.e)(b.m),O=Object(r.useCallback)(Object(u.a)(i.a.mark((function t(){var e,r,a,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Object(f.b)(n.uid);case 5:if(e=t.sent){t.next=8;break}return t.abrupt("return");case 8:r=e.email,a=e.firstName,u=e.lastName,c(Object(j.storeUserData)({email:r,firstName:a,lastName:u})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),[c,n]);Object(r.useEffect)((function(){if(!a)return n?void O():h.b.push(p.c)}),[n,a,O]);return Object(F.jsx)(T,{loading:a,userData:x,fnLogout:function(){c(Object(l.d)())}})};e.default=function(){return Object(F.jsx)(W,{})}}}]);
//# sourceMappingURL=9.4e3f5ae8.chunk.js.map