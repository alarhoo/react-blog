(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(21),l=c.n(n),i=c(8),o=c(83),r=c(1),j=function(){return Object(r.jsxs)(o.a,{collapseOnSelect:!0,sticky:"top",expand:"lg",bg:"dark",variant:"dark",children:[Object(r.jsx)(i.b,{className:"navbar-brand nav-item nav-link",to:"/",children:"React-Blog"}),Object(r.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(r.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",children:[Object(r.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(r.jsx)(i.c,{exact:!0,className:"nav-item nav-link",to:"/",activeClassName:"active",children:"Home"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/about",activeClassName:"active",children:"About"})]}),Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/new_post",activeClassName:"active",children:"New Post"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/account",activeClassName:"active",children:"Account"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/logout",activeClassName:"active",children:"Logout"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/login",activeClassName:"active",children:"Login"}),Object(r.jsx)(i.c,{className:"nav-item nav-link",to:"/register",activeClassName:"active",children:"Register"})]})]})]})},d=c(7),b=c(17),h=c(42),u=c(85),x=function(e){var t=e.post;return Object(r.jsx)(h.a,{className:"mt-3",style:{width:"350px"},children:Object(r.jsxs)(u.a,{style:{width:"350px"},children:[Object(r.jsxs)(u.a.Header,{style:{display:"flex"},children:[Object(r.jsx)("img",{style:{marginRight:"10px"},alt:"profile_pic",className:"rounded-circle article-img mr-3",src:"https://picsum.photos/seed/".concat(t.id,"/80/80")}),Object(r.jsxs)("div",{children:[Object(r.jsx)(i.b,{to:"/post/".concat(t.id),children:Object(r.jsx)(u.a.Title,{children:t.title.substr(0,20)})}),Object(r.jsx)(u.a.Subtitle,{className:"mb-2 text-muted",children:t.title.substr(0,15)})]})]}),Object(r.jsxs)(u.a.Body,{children:[Object(r.jsx)(u.a.Text,{className:"dotlines",children:t.body}),Object(r.jsx)(i.b,{to:"/post/".concat(t.id),children:Object(r.jsx)(u.a.Text,{children:"Read More..."})})]})]})})},O=c(43),p=c.n(O).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),m=c(78),v=c(79),f=c(80),g=c(81),y=c(19),N=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)({first:null,prev:null,next:null,last:null}),l=Object(b.a)(n,2),i=l[0],o=l[1],j=new URLSearchParams(Object(d.g)().search),h=j.get("_page")?j.get("_page"):1;return Object(a.useEffect)((function(){p.get("/posts?_page=".concat(h,"&_limit=9")).then((function(e){var t=function(e){var t=e.split(", ").map((function(e){return e.split("; ")})).map((function(e){return[e[1].replace(/"/g,"").replace("rel=",""),parseInt(e[0].slice(1,-1).split("=")[1])]}));return Object.fromEntries(t)}(e.headers.link);o(t),200===e.status&&s(e.data)})).catch((function(e){e.response&&(console.log(e),console.log(e.status),console.log(e.data))})),window.scrollTo(0,0)}),[h]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(v.a,{children:c.map((function(e){return Object(r.jsx)(x,{post:e},e.id)}))}),Object(r.jsx)(f.a,{className:"justify-content-md-center mt-3",children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(g.a.First,{href:"#/?_page=".concat(i.first)}),Object(r.jsx)(g.a.Prev,{href:"#/?_page=".concat(i.prev),disabled:"undefined"==="".concat(i.prev)}),Object(r.jsx)(y.f,{href:"#/?_page=".concat(h),active:!0,children:h}),Object(r.jsx)(g.a.Next,{href:"#/?_page=".concat(i.next),disabled:"undefined"==="".concat(i.next)}),Object(r.jsx)(g.a.Last,{href:"#/?_page=".concat(i.last)})]})})]})})},C=c(82),T=function(){var e=Object(d.h)().id,t=Object(a.useState)({title:"",body:""}),c=Object(b.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){p.get("/posts/".concat(e)).then((function(t){console.log(t.data,e),200===t.status&&n(t.data)}))}),[e]);var l=Object(d.f)();return Object(r.jsx)(m.a,{className:"mt-3",children:Object(r.jsxs)(u.a,{children:[Object(r.jsxs)(u.a.Header,{style:{display:"flex"},children:[Object(r.jsx)("img",{alt:"profile_pic",className:"rounded-circle article-img mr-3",src:"https://picsum.photos/seed/".concat(s.id,"/80/80")}),Object(r.jsxs)("div",{children:[Object(r.jsx)(u.a.Title,{children:s.title.substr(0,20)}),Object(r.jsx)(u.a.Subtitle,{className:"mb-2 text-muted",children:s.title.substr(0,15)})]})]}),Object(r.jsx)(u.a.Body,{children:Object(r.jsx)(u.a.Text,{className:"dotlines",children:s.body})}),Object(r.jsxs)(u.a.Footer,{children:[Object(r.jsx)(C.a,{variant:"primary",size:"sm",onClick:function(){l.push("/update/post/".concat(s.id))},children:"Update"})," ",Object(r.jsx)(C.a,{variant:"danger",size:"sm",onClick:function(){p.delete("/posts/".concat(s.id)).then((function(e){console.log(e.data),alert("".concat(e.status," - ").concat(e.statusText)),l.push("/")})).catch((function(e){console.log(e),alert(e)}))},children:"Delete"})]})]})})},w=function(){return Object(r.jsx)("div",{children:"About"})},k=function(){return Object(r.jsx)("div",{children:"Account"})},P=c(84),S=function(){return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)(u.a,{className:"mt-4",style:{width:"450px"},children:[Object(r.jsx)(u.a.Header,{children:Object(r.jsx)(u.a.Title,{children:"Login to React-Blog"})}),Object(r.jsx)(u.a.Body,{children:Object(r.jsxs)(P.a,{children:[Object(r.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(P.a.Label,{children:"Email address"}),Object(r.jsx)(P.a.Control,{type:"email",placeholder:"Enter email"}),Object(r.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(r.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(P.a.Label,{children:"Password"}),Object(r.jsx)(P.a.Control,{type:"password",placeholder:"Password"})]}),Object(r.jsx)(P.a.Group,{controlId:"formBasicCheckbox",children:Object(r.jsx)(P.a.Check,{type:"checkbox",label:"Check me out"})}),Object(r.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})},B=c(16),L=function(){var e=Object(a.useState)({title:"",body:""}),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(d.f)();return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)(u.a,{className:"mt-4",style:{width:"750px"},children:[Object(r.jsx)(u.a.Header,{children:Object(r.jsx)(u.a.Title,{children:"Add New Post"})}),Object(r.jsx)(u.a.Body,{children:Object(r.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),console.log(c),p({url:"/posts",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:c}).then((function(e){console.log(e.data),alert("".concat(e.status," - ").concat(e.statusText)),n.push("/posts/".concat(e.data.id))})).catch((function(e){console.log(e),alert(e)}))},children:[Object(r.jsxs)(P.a.Group,{as:f.a,children:[Object(r.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Title"}),Object(r.jsx)(h.a,{sm:10,children:Object(r.jsx)(P.a.Control,{type:"text",placeholder:"Title",value:c.title,onChange:function(e){s(Object(B.a)(Object(B.a)({},c),{},{title:e.target.value}))}})})]}),Object(r.jsxs)(P.a.Group,{as:f.a,children:[Object(r.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Body"}),Object(r.jsx)(h.a,{sm:10,children:Object(r.jsx)(P.a.Control,{as:"textarea",placeholder:"Body",rows:5,value:c.body,onChange:function(e){s(Object(B.a)(Object(B.a)({},c),{},{body:e.target.value}))}})})]}),Object(r.jsx)(P.a.Group,{as:f.a,children:Object(r.jsx)(h.a,{sm:{span:10,offset:2},children:Object(r.jsx)(C.a,{type:"submit",children:"Submit"})})})]})})]})})},_=function(){var e=Object(a.useState)({title:"",body:""}),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(d.f)(),l=Object(d.h)().id;return Object(a.useEffect)((function(){p.get("/posts/".concat(l)).then((function(e){console.log(e),200===e.status&&s(e.data)}))}),[l]),Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)(u.a,{className:"mt-4",style:{width:"750px"},children:[Object(r.jsx)(u.a.Header,{children:Object(r.jsx)(u.a.Title,{children:"Update Post"})}),Object(r.jsx)(u.a.Body,{children:Object(r.jsxs)(P.a,{onSubmit:function(e){e.preventDefault(),console.log(c);var t={url:"/posts/".concat(l),method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:c};p(t).then((function(e){console.log(e.data),alert("".concat(e.status," - ").concat(e.statusText)),n.push("/posts/".concat(e.data.id))})).catch((function(e){console.log(e),alert(e)}))},children:[Object(r.jsxs)(P.a.Group,{as:f.a,children:[Object(r.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Title"}),Object(r.jsx)(h.a,{sm:10,children:Object(r.jsx)(P.a.Control,{type:"text",placeholder:"Title",value:c.title,onChange:function(e){s(Object(B.a)(Object(B.a)({},c),{},{title:e.target.value}))}})})]}),Object(r.jsxs)(P.a.Group,{as:f.a,children:[Object(r.jsx)(P.a.Label,{column:!0,sm:2,children:"Post Body"}),Object(r.jsx)(h.a,{sm:10,children:Object(r.jsx)(P.a.Control,{as:"textarea",placeholder:"Body",rows:5,value:c.body,onChange:function(e){s(Object(B.a)(Object(B.a)({},c),{},{body:e.target.value}))}})})]}),Object(r.jsx)(P.a.Group,{as:f.a,children:Object(r.jsx)(h.a,{sm:{span:10,offset:2},children:Object(r.jsx)(C.a,{type:"submit",children:"Submit"})})})]})})]})})},F=function(){return Object(r.jsx)("div",{children:"404: Page Not Found"})},G=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/",component:N,exact:!0}),Object(r.jsx)(d.a,{path:"/about",component:w}),Object(r.jsx)(d.a,{path:"/account",component:k}),Object(r.jsx)(d.a,{path:"/login",component:S}),Object(r.jsx)(d.a,{path:"/new_post",component:L}),Object(r.jsx)(d.a,{path:"/post/:id",exact:!0,children:Object(r.jsx)(T,{})}),Object(r.jsx)(d.a,{path:"/update/post/:id",exact:!0,children:Object(r.jsx)(_,{})}),Object(r.jsx)(d.a,{component:F})]})]})})};c(74),c(75);var I=function(){return Object(r.jsx)(G,{})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),A()}},[[76,1,2]]]);
//# sourceMappingURL=main.6d1277ed.chunk.js.map