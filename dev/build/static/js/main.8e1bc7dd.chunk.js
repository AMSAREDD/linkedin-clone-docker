(this["webpackJsonplinked-in-clone-cp"]=this["webpackJsonplinked-in-clone-cp"]||[]).push([[0],{101:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(11),i=s.n(a),r=(s(65),s(10)),o=s(22),l=Object(o.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.value=t.payload},logout:function(e,t){e.user=null}}}),j=l.actions,d=(j.login,j.logout,l.reducer),u=s(25),b=(s(71),s(72),s(114)),h=s(1);var O=function(e){var t=e.Icon,s=e.title,c=e.avatar,n=e.logOut;return Object(h.jsxs)("div",{className:"headerOption",children:[t&&Object(h.jsx)(t,{className:"headerOption__icon"}),c&&Object(h.jsx)(b.a,{className:"headerOption__icon",src:c,onClick:function(){return n()}}),Object(h.jsx)("h3",{className:"headerOption__title",children:s})]})},m=s(42),x=s.n(m),p=s(43),g=s.n(p),v=s(44),f=s.n(v),_=s(45),N=s.n(_),I=s(46),w=s.n(I),y=s(47),S=s.n(y);var k=function(e){var t=e.user,s=e.logOut;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"header__left",children:[Object(h.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)(x.a,{}),Object(h.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(h.jsxs)("div",{className:"header__right",children:[Object(h.jsx)(O,{Icon:g.a,title:"home"}),Object(h.jsx)(O,{Icon:f.a,title:"network"}),Object(h.jsx)(O,{Icon:N.a,title:"jobs"}),Object(h.jsx)(O,{Icon:w.a,title:"messaging"}),Object(h.jsx)(O,{Icon:S.a,title:"notification"}),Object(h.jsx)(O,{title:"me",logOut:s,avatar:t.userImage})]})]})};s(75);function C(e){var t=e.user,s=function(e){return Object(h.jsxs)("div",{className:"sidebar__recentItem",children:[Object(h.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(h.jsx)("p",{children:e})]})};return Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsxs)("div",{className:"sidebar__top",children:[Object(h.jsx)("img",{src:"https://cff2.earth.com/uploads/2017/11/08174338/How-ice-forms-inside-of-clouds-768x512.jpg"}),Object(h.jsx)(b.a,{className:"sidebar__avatar",src:t.userImage}),Object(h.jsx)("h2",{children:t.username}),Object(h.jsx)("h4",{children:t.email})]}),Object(h.jsxs)("div",{className:"sidebar__stats",children:[Object(h.jsxs)("div",{className:"sidebar__stat",children:[Object(h.jsx)("p",{children:"Who viewed you profile"}),Object(h.jsx)("p",{className:"sidebar__statNumber",children:"8,888"})]}),Object(h.jsxs)("div",{className:"sidebar__stat",children:[Object(h.jsx)("p",{children:"Views of your post"}),Object(h.jsx)("p",{className:"sidebar__statNumber",children:"888"})]})]}),Object(h.jsxs)("div",{className:"sidebar__bottom",children:[Object(h.jsx)("p",{children:"Recent"}),s("ReactJS"),s("NodeJS"),s("Python"),s("Linux"),s("Blockchain")]})]})}s(76),s(77),s(78);function E(e){var t=e.Icon,s=e.title,c=e.color;return Object(h.jsxs)("div",{className:"inputOption",children:[Object(h.jsx)(t,{style:{color:c}}),Object(h.jsx)("h4",{children:s})]})}var L=s(48),P=s.n(L),D=s(49),R=s.n(D),V=s(50),B=s.n(V),H=s(51),J=s.n(H),T=Object(c.forwardRef)((function(e,t){var s=e.name,c=(e.user,e.description),n=e.image,a=e.message;return Object(h.jsxs)("div",{ref:t,className:"post",children:[Object(h.jsxs)("div",{className:"post__header",children:[Object(h.jsx)(b.a,{src:n}),Object(h.jsxs)("div",{className:"post__info",children:[Object(h.jsx)("h2",{children:s}),Object(h.jsx)("p",{children:c})]})]}),Object(h.jsx)("div",{className:"post__body",children:a}),Object(h.jsxs)("div",{className:"post__buttons",children:[Object(h.jsx)(E,{Icon:P.a,title:"Like"}),Object(h.jsx)(E,{Icon:R.a,title:"Comment"}),Object(h.jsx)(E,{Icon:B.a,title:"Share"}),Object(h.jsx)(E,{Icon:J.a,title:"Send"})]})]})})),W=s(52),F=s.n(W),U=s(53),q=s.n(U),A=s(54),M=s.n(A),Y=s(55),$=s.n(Y),z=s(56),G=s.n(z),K=s(16),Q=s.n(K),X=s(57);function Z(e){var t=e.user,s=Object(c.useState)([]),n=Object(r.a)(s,2),a=n[0],i=n[1],o=Object(c.useState)([]),l=Object(r.a)(o,2),j=l[0],d=l[1],u=Object(c.useState)(!1),b=Object(r.a)(u,2),O=b[0],m=b[1];Object(c.useEffect)((function(){Q.a.get("http://localhost:9000/v1/linkedIn/post").then((function(e){console.log(e),i(e.data)})),m(!1)}),[O]);return Object(h.jsxs)("div",{className:"feed",children:[Object(h.jsxs)("div",{className:"feed__inputContainer",children:[Object(h.jsxs)("div",{className:"feed__input",children:[Object(h.jsx)(F.a,{}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{onChange:function(e){e.preventDefault(),d(e.target.value)},value:j,type:"text"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault();var s=(new Date).toISOString(),c={message:j,description:t.email,username:t.username,userImage:t.userImage,timeStamp:s};Q.a.post("http://localhost:9000/v1/linkedIn/addPost",c).then((function(e){m(!0),d(""),console.log(e)}))},type:"submit",children:"SEND"})]})]}),Object(h.jsxs)("div",{className:"feed__inputOptions",children:[Object(h.jsx)(E,{Icon:q.a,color:"#70B5f9",title:"Photo"}),Object(h.jsx)(E,{Icon:M.a,color:"#E7A33E",title:"Video"}),Object(h.jsx)(E,{Icon:$.a,color:"gray",title:"Event"}),Object(h.jsx)(E,{Icon:G.a,color:"#7FC15E",title:"Write Article"})]})]}),Object(h.jsx)(X.a,{children:a.map((function(e){return Object(h.jsx)(T,{image:e.userImage,name:e.username,description:e.email,message:e.message,user:t},e._id)})).reverse()})]})}s(97);function ee(e){var t=e.setUser,s=Object(c.useState)(""),n=Object(r.a)(s,2),a=n[0],i=n[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),j=l[0],d=l[1],u=Object(c.useState)(""),b=Object(r.a)(u,2),O=b[0],m=b[1],x=Object(c.useState)(""),p=Object(r.a)(x,2),g=p[0],v=p[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsxs)("div",{className:"login_design",children:[Object(h.jsxs)("h1",{children:["You are not logged"," "," "]}),Object(h.jsx)("img",{className:"login_design_img",src:"https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"})]}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{placeholder:"Full name or username  (required )",onChange:function(e){m(e.target.value)},value:O,type:"text"}),Object(h.jsx)("input",{placeholder:"Profile Pic URL (required)",onChange:function(e){v(e.target.value)},value:g}),Object(h.jsx)("input",{placeholder:"Email",onChange:function(e){i(e.target.value)},value:a,type:"email"}),Object(h.jsx)("input",{placeholder:"Password",onChange:function(e){return d(e.target.value)},value:j,type:"password"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault();var s={email:a,password:j,userImage:g,username:O};Q.a.post("http://localHost:9000/login",s).then((function(e){console.log("user loaded into database");var s=e.data;console.log("Posted to Database"),i(""),d(""),m(""),v(""),t(s)}))},type:"submit",children:" Sign In"})]}),Object(h.jsxs)("p",{children:["Not a member?"," ",Object(h.jsx)("span",{className:"login__register",onClick:function(){return alert("Completing the login form will register and log you in")},children:"Register Now"})]})]})}s(98);var te=s(59),se=s.n(te),ce=s(58),ne=s.n(ce),ae=function(e,t){return Object(h.jsxs)("div",{className:"widgets__article",children:[Object(h.jsx)("div",{className:"widgets__articleLeft",children:Object(h.jsx)(ne.a,{})}),Object(h.jsxs)("div",{className:"widgets__articleRight",children:[Object(h.jsx)("h4",{children:e}),Object(h.jsx)("p",{children:t})]})]})};function ie(){return Object(h.jsxs)("div",{className:"widgets",children:[Object(h.jsxs)("div",{className:"widgets__header",children:[Object(h.jsx)("h2",{children:"LinkedIn News"}),Object(h.jsx)(se.a,{})]}),ae("Happy Easter","The Corona Virus has ended"),ae("Happy Easter","The Corona Virus has ended"),ae("Lorem Imspum","The Corona Virus has ended"),ae("Lorem Imspum","The Corona Virus has ended")]})}s(99);var re=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(h.jsx)("div",{className:"app",children:s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{user:s,logOut:function(){n(null)}}),Object(h.jsxs)("div",{className:"app__body",children:[Object(h.jsx)(C,{user:s}),Object(h.jsx)(Z,{user:s}),Object(h.jsx)(ie,{})]})]}):Object(h.jsx)(ee,{setUser:n})})},oe=Object(o.a)({reducer:{user:d}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(u.a,{store:oe,children:Object(h.jsx)(re,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[101,1,2]]]);
//# sourceMappingURL=main.8e1bc7dd.chunk.js.map