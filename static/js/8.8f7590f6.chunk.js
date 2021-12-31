(this["webpackJsonpadmin-dashboard"]=this["webpackJsonpadmin-dashboard"]||[]).push([[8],{171:function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return s})),r.d(t,"i",(function(){return i})),r.d(t,"h",(function(){return c})),r.d(t,"g",(function(){return o})),r.d(t,"m",(function(){return u})),r.d(t,"l",(function(){return d})),r.d(t,"j",(function(){return l})),r.d(t,"k",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return b}));var a=function(e){return e.auth.signInStarted},n=function(e){return e.auth.signInFailed},s=function(e){return e.auth.signInErrorMessage},i=function(e){return e.auth.signUpStarted},c=function(e){return e.auth.signUpFailed},o=function(e){return e.auth.signUpErrorMessage},u=function(e){return e.user},d=function(e){return e.todos.list},l=function(e){return e.todos.fetchStarted},f=function(e){return e.todos.fetchSuccess},m=function(e){return e.photos.list},j=function(e){return e.photos.fetchStarted},b=function(e){return e.photos.fetchSuccess}},172:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return m}));var a=r(0),n=r.n(a),s=r(2),i=r(84),c=r(17),o=function(e,t){return function(){var r=Object(s.a)(n.a.mark((function r(a){var s,o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(c.a.signInStarted()),r.prev=1,r.next=4,Object(i.c)(e,t);case 4:(s=r.sent)&&(a(c.g.storeUserData({email:e,firstName:s.firstName,lastName:s.lastName})),a(c.a.signInSuccess())),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),o=null===r.t0||void 0===r.t0?void 0:r.t0.message,a(c.a.signInFailed(o));case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()},u=function(e,t,r,a){return function(){var o=Object(s.a)(n.a.mark((function s(o){var u;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(c.a.signUpStarted()),n.prev=1,n.next=4,Object(i.e)(e,t,r,a);case 4:n.sent&&(o(c.g.storeUserData({email:r,firstName:e,lastName:t})),o(c.a.signUpSuccess())),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),u=null===n.t0||void 0===n.t0?void 0:n.t0.message,o(c.a.signUpFailed(u));case 12:case"end":return n.stop()}}),s,null,[[1,8]])})));return function(e){return o.apply(this,arguments)}}()},d=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.d)();case 2:t(c.g.removeUserData()),t(c.a.signOut());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=r(73),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return function(){var t=Object(s.a)(n.a.mark((function t(r){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(c.e.fetchStarted()),t.prev=1,t.next=4,l.a.get("todos?_limit="+e);case 4:a=t.sent,s=a.data,r(c.e.fetchSuccess(s)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(c.e.fetchFailed());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return function(){var t=Object(s.a)(n.a.mark((function t(r){var a,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(c.c.fetchStarted()),t.prev=1,t.next=4,l.a.get("photos?_limit="+e);case 4:a=t.sent,s=a.data,r(c.c.fetchSuccess(s)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(c.c.fetchFailed());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},174:function(e,t,r){},194:function(e,t,r){},196:function(e,t,r){"use strict";var a=r(4),n=r(278),s=r(20),i=r(85),c=r(84),o=r(61),u=r(50),d=r(172),l=r(171),f=function(e){var t=e.email,r=void 0===t?"":t,n=Object(a.useState)(!1),i=Object(s.a)(n,2),c=i[0],o=i[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),l=d[0],f=d[1];Object(a.useEffect)((function(){var e=m(r);o(e),f(e?"":"Invalid email")}),[r]);var m=function(e){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};return{validEmail:c,errorEmail:l}},m=function(e){var t=e.firstPassword,r=void 0===t?"":t,n=e.secondPassword,i=void 0===n?"":n,c=e.requiredLength,o=void 0===c?8:c,u=e.lengthValidation,d=void 0===u||u,l=e.numberValidation,f=void 0!==l&&l,m=e.specialcharacterValidation,j=void 0!==m&&m,b=Object(a.useState)(!1),h=Object(s.a)(b,2),p=h[0],v=h[1],O=Object(a.useState)(!1),w=Object(s.a)(O,2),g=w[0],x=w[1],S=Object(a.useState)(!1),P=Object(s.a)(S,2),N=P[0],E=P[1],C=Object(a.useState)(!1),F=Object(s.a)(C,2),y=F[0],U=F[1],I=Object(a.useState)(""),k=Object(s.a)(I,2),V=k[0],_=k[1];return Object(a.useEffect)((function(){var e,t,a,n;e=t=a=!0,d&&(e=r.length>=o,v(e)),f&&(t=/\d/.test(r),x(t)),j&&(a=/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(r),E(a)),U(n=""!==r&&r===i);var s="";e?t?a?n||(s="Password doesn't match"):s="Password should contain at least one special character":s="Password should contain at least one number":s="Password should be at least ".concat(o," characters long"),_(s)}),[r,i]),{validLength:p,hasNumber:g,hasSpecialChar:N,match:y,errorPassword:V}},j=r(116),b=r(223),h=r(273),p=r(224),v=r(262),O=r(276),w=r(277),g=r(269),x=r(265),S=r(248),P=r(257),N=r(258),E=(r(174),r(11));var C=function(e){var t=e.email,r=e.validEmail,a=e.errorEmail,n=e.password,s=e.showPassword,i=e.errorPassword,c=e.showValidation,o=e.setEmail,u=e.setPassword,d=e.setShowPassword,l=e.handleSubmit,f=e.signInStarted,m=e.signInFailed,C=e.signInErrorMessage;return Object(E.jsxs)("div",{className:"access-form-wrapper form--login",children:[Object(E.jsx)(b.a,{sx:{width:48,height:48},className:"access-form-avatar",children:Object(E.jsx)(S.a,{})}),Object(E.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(E.jsxs)("form",{className:"access-form",onSubmit:l,noValidate:!0,children:[Object(E.jsxs)(p.a,{container:!0,spacing:2,children:[Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",name:"email",value:t,onChange:function(e){return o(e.target.value)},error:c&&!r,helperText:c&&a,label:"Email Address",autoComplete:"email",autoFocus:!0})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"password",name:"password",value:n,onChange:function(e){return u(e.target.value)},error:c&&""!==i,helperText:c&&i,label:"Password",type:s?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:Object(E.jsx)(O.a,{position:"end",children:Object(E.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){return d(!s)},onMouseDown:function(){return d(!s)},children:s?Object(E.jsx)(P.a,{}):Object(E.jsx)(N.a,{})})})}})})]}),Object(E.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"access-form__btn-submit",disabled:f,children:"Sign In"}),Object(E.jsx)("div",{className:"access-form__alert-wrapper",children:m&&C&&Object(E.jsx)(x.a,{severity:"error",children:C})}),Object(E.jsx)(j.a,{to:"/register",children:"Don't have an account? Sign Up"})]})]})},F=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)(""),c=Object(s.a)(i,2),o=c[0],j=c[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),p=h[0],v=h[1],O=Object(a.useState)(!1),w=Object(s.a)(O,2),g=w[0],x=w[1],S=f({email:r}),P=S.validEmail,N=S.errorEmail,F=m({firstPassword:o,secondPassword:o,numberValidation:!0}).errorPassword,y=Object(u.d)(),U=Object(u.e)(l.f),I=Object(u.e)(l.e),k=Object(u.e)(l.d);return Object(E.jsx)(C,{email:r,validEmail:P,errorEmail:N,password:o,showPassword:p,showValidation:g,errorPassword:F,setEmail:n,setPassword:j,setShowPassword:v,handleSubmit:function(e){e.preventDefault(),x(!0),""===N&&""===F&&y(Object(d.c)(r,o))},signInStarted:U,signInFailed:I,signInErrorMessage:k})},y=r(1),U=r(10);var I=function(e){var t=e.formFields,r=e.validEmail,a=e.errorEmail,n=e.showPassword,s=e.errorPassword,i=e.showValidation,c=e.setFieldValue,o=e.setShowPassword,u=e.handleSubmit,d=e.signUpStarted,l=e.signUpFailed,f=e.signUpErrorMessage,m=t.firstName,C=t.lastName,F=t.email,y=t.password,U=t.confirmPassword;return Object(E.jsxs)("div",{className:"access-form-wrapper form--register",children:[Object(E.jsx)(b.a,{sx:{width:48,height:48},className:"access-form-avatar",children:Object(E.jsx)(S.a,{})}),Object(E.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(E.jsxs)("form",{className:"access-form",onSubmit:u,noValidate:!0,children:[Object(E.jsxs)(p.a,{container:!0,spacing:2,children:[Object(E.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"firstName",name:"firstName",value:m,onChange:function(e){return c("firstName",e.target.value)},error:i&&!m,helperText:i&&!m&&"This field is required",label:"First Name",autoComplete:"fname",autoFocus:!0})}),Object(E.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",name:"lastName",value:C,onChange:function(e){return c("lastName",e.target.value)},error:i&&!C,helperText:i&&!C&&"This field is required",label:"Last Name",autoComplete:"lname"})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",name:"email",value:F,onChange:function(e){return c("email",e.target.value)},error:i&&!r,helperText:i&&a,label:"Email Address",autoComplete:"email",autoFocus:!0})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"password",name:"password",value:y,onChange:function(e){return c("password",e.target.value)},error:i&&""!==s,helperText:i&&s,label:"Password",type:n?"text":"password",autoComplete:"current-password",InputProps:{endAdornment:Object(E.jsx)(O.a,{position:"end",children:Object(E.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){return o(!n)},onMouseDown:function(){return o(!n)},children:n?Object(E.jsx)(P.a,{}):Object(E.jsx)(N.a,{})})})}})}),Object(E.jsx)(p.a,{item:!0,xs:12,children:Object(E.jsx)(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"confirm-password",name:"confirm-password",value:U,onChange:function(e){return c("confirmPassword",e.target.value)},label:"Confirm Password",type:"password",autoComplete:"confirm-password"})})]}),Object(E.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"access-form__btn-submit",disabled:d,children:"Sign Up"}),Object(E.jsx)("div",{className:"access-form__error-wrapper",children:l&&f&&Object(E.jsx)(x.a,{severity:"error",children:f})}),Object(E.jsx)(j.a,{to:"/login",children:"Already have an account? Sign in"})]})]})},k={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},V=function(){var e=Object(a.useState)(k),t=Object(s.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),o=c[0],j=c[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),p=h[0],v=h[1],O=f({email:r.email}),w=O.validEmail,g=O.errorEmail,x=m({firstPassword:r.password,secondPassword:r.confirmPassword,numberValidation:!0}).errorPassword,S=Object(u.d)(),P=Object(u.e)(l.i),N=Object(u.e)(l.h),C=Object(u.e)(l.g);return Object(E.jsx)(I,{formFields:r,validEmail:w,errorEmail:g,showPassword:o,showValidation:p,errorPassword:x,setFieldValue:function(e,t){n((function(r){return Object(U.a)(Object(U.a)({},r),{},Object(y.a)({},e,t))}))},setShowPassword:j,handleSubmit:function(e){if(e.preventDefault(),v(!0),""===g&&""===x){var t=r.firstName,a=r.lastName,n=r.email,s=r.password;S(Object(d.e)(t,a,n,s))}},signUpStarted:P,signUpFailed:N,signUpErrorMessage:C})},_=function(e){var t=e.form,r=Object(i.a)(c.a),n=Object(s.a)(r,1)[0];Object(a.useEffect)((function(){n&&o.b.push("/")}),[n]);var u="login"===t?F:V;return Object(E.jsx)(u,{})};r(194),t.a=function(e){var t=e.form;return Object(E.jsx)("div",{className:"auth-page",children:Object(E.jsx)(n.a,{className:"auth-page-form-wrapper",component:"main",maxWidth:"login"===t?"xs":"sm",children:Object(E.jsx)(_,{form:t})})})}},259:function(e,t,r){"use strict";r.r(t);r(4);var a=r(196),n=r(11);t.default=function(){return Object(n.jsx)(a.a,{form:"register"})}}}]);
//# sourceMappingURL=8.8f7590f6.chunk.js.map