(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),u=a(4),l=a(5),i=a.n(l),s=a(7),m=a(13),p=a(14),d=a(6),f=a(2),b=a(15),h=a.n(b),v=a(22),E=a.n(v);a(69),a(73);E.a.initializeApp({apiKey:"AIzaSyDk1tT0sN7et56epjqsYmmsn6Bcj_wDnLc",authDomain:"journal-app-cd38e.firebaseapp.com",databaseURL:"https://journal-app-cd38e.firebaseio.com",projectId:"journal-app-cd38e",storageBucket:"journal-app-cd38e.appspot.com",messagingSenderId:"45787152276",appId:"1:45787152276:web:acbe76e292f098c87a5981"});var j=E.a.firestore(),g=new E.a.auth.GoogleAuthProvider,_=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/francoder/image/upload",(a=new FormData).append("upload_preset","journal-app"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/francoder/image/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(f.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="[Auth] Login",w="[Auth] Logout",N="[UI] Set error",x="[UI] Remove error",k="[UI] Start loading",C="[UI] Finish loading",S="[Notes] New note",I="[Notes] Set active note",A="[Notes] Load notes",L="[Notes] Update note",P="[Notes] Delete note",D="[Notes] Logout cleaning",U=function(e,t){return{type:I,payload:Object(f.a)({id:e},t)}},R=function(e,t){return{type:S,payload:Object(f.a)({id:e},t)}},T=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:n=t.sent,a(W(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(e){return{type:A,payload:e}},F=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a,n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(f.a)({},e)).id,t.next=6,j.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(q(e)),h.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},q=function(e){return{type:L,payload:e}},z=function(e){return{type:P,payload:e}},B=a(28),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},u=function(e){var t=e.target;c(Object(f.a)(Object(f.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,u,o]},J=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("input",{type:"file",style:{display:"none"},id:"fileSelector",name:"file",onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a,n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,h.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,willOpen:function(){h.a.showLoading()}}),t.next=4,_(e);case 4:c=t.sent,r.url=c,a(F(r)),h.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(F(t))}},"Save")))},X=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.notes})).active,a=G(t),c=Object(m.a)(a,3),o=c[0],l=c[1],p=c[2],d=o.title,b=o.body,h=o.id,v=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==v.current&&(p(t),v.current=t.id)}),[t,p]),Object(n.useEffect)((function(){e(U(o.id,Object(f.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(J,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Some awesome title",className:"notes__title-input",value:d,onChange:l}),r.a.createElement("textarea",{name:"body",placeholder:"What happened today",className:"notes__textarea",value:b,onChange:l}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(s.a)(i.a.mark((function t(a,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,j.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(z(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(h))}},"Delete"))},K=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"or create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},M=function(e){return{type:N,payload:e}},V=function(){return{type:C}},Y=function(e,t){return function(a){a({type:k}),E.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(H(t.uid,t.displayName)),a(V())})).catch((function(e){a(V()),h.a.fire("Error",e.message,"error")}))}},H=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},Q=function(){return{type:w}},Z=a(56),$=a.n(Z),ee=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,l=$()(a),i=Object(u.b)(),s=o?"journal__entry-body":"journal__entry-body journal__entry-no-picture";return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){i(U(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:s},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,l.format("dddd")),r.a.createElement("h4",null,l.format("Do"))))},te=function(){var e=Object(u.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(ee,Object.assign({key:e.id},e))})))},ae=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.auth().signOut();case 2:t(Q()),t({type:D});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,j.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(U(c.id,r)),t(R(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",null,"New entry")),r.a.createElement(te,null))},ne=function(){var e=Object(u.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content"},r.a.createElement(ae,null),r.a.createElement("main",null,e?r.a.createElement(X,null):r.a.createElement(K,null)))},re=function(){var e=Object(u.b)(),t=G({email:"",password:""}),a=Object(m.a)(t,2),n=a[0],c=a[1],o=n.email,l=n.password,i=Object(u.c)((function(e){return e.ui})).loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(Y(o,l))},className:"animate__animated animate__fadeIn animate__faster"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",autoComplete:"off",className:"auth__input",value:o,onChange:c}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:c}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:i},"Login"),r.a.createElement("div",{className:"auth__social-networks",onClick:function(){e((function(e){E.a.auth().signInWithPopup(g).then((function(t){var a=t.user;e(H(a.uid,a.displayName))}))}))}},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(p.b,{to:"/auth/register",className:"link"},"Create new account")))},ce=a(57),oe=a.n(ce),ue=function(){var e=G({name:"",email:"",password:"",password2:""}),t=Object(m.a)(e,2),a=t[0],n=t[1],c=a.name,o=a.email,l=a.password,d=a.password2,f=Object(u.b)(),b=Object(u.c)((function(e){return e.ui})).msgError,v=function(){return 0===c.trim().length?(f(M("Name is required")),!1):oe.a.isEmail(o)?l!==d||l.length<5?(f(M("Password should be at least 6 characters")),!1):(f({type:x}),!0):(f(M("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v()&&f(function(e,t,a){return function(n){E.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(H(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){h.a.fire("Error",e.message,"error")}))}}(o,l,c))},className:"animate__animated animate__fadeIn animate__faster"},b&&r.a.createElement("div",{className:"auth__alert-error"},b),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",autoComplete:"off",className:"auth__input",value:c,onChange:n}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",autoComplete:"off",className:"auth__input",value:o,onChange:n}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:n}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"auth__input",value:d,onChange:n}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(p.b,{to:"/auth/login",className:"link"},"Already registered?")))},le=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/auth/login",component:re}),r.a.createElement(d.b,{exact:!0,path:"/auth/register",component:ue}),r.a.createElement(d.a,{to:"/auth/login"}))))},ie=a(29),se=function(e){var t=e.isAuth,a=e.component,n=Object(ie.a)(e,["isAuth","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(d.a,{to:"/auth/login"})}}))},me=function(e){var t=e.isAuth,a=e.component,n=Object(ie.a)(e,["isAuth","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(d.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=function(){var e=Object(u.b)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),f=Object(m.a)(l,2),b=f[0],h=f[1];return Object(n.useEffect)((function(){E.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(H(a.uid,a.displayName)),h(!0),e(T(a.uid))):h(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,c]),c?r.a.createElement("div",null,r.a.createElement("h1",null,"Wait...")):r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(me,{path:"/auth",component:le,isAuth:b}),r.a.createElement(se,{exact:!0,path:"/",component:ne,isAuth:b}),r.a.createElement(d.a,{to:"/auth/login"}))))},de=a(16),fe=a(58),be=a(39),he={notes:[],active:null},ve={loading:!1,msgError:null},Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,je=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case w:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(f.a)(Object(f.a)({},e),{},{msgError:t.payload});case x:return Object(f.a)(Object(f.a)({},e),{},{msgError:null});case k:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case C:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(f.a)(Object(f.a)({},e),{},{active:Object(f.a)({},t.payload)});case S:return Object(f.a)(Object(f.a)({},e),{},{notes:[t.payload].concat(Object(be.a)(e.notes))});case A:return Object(f.a)(Object(f.a)({},e),{},{notes:Object(be.a)(t.payload)});case L:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload:e}))});case P:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case D:return Object(f.a)({},he);default:return e}}}),ge=Object(de.e)(je,Ee(Object(de.a)(fe.a))),_e=function(){return r.a.createElement(u.a,{store:ge},r.a.createElement(pe,null))};a(152);o.a.render(r.a.createElement(_e,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(153)}},[[59,1,2]]]);
//# sourceMappingURL=main.411d3d25.chunk.js.map