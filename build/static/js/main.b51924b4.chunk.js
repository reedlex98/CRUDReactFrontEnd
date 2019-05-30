(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.6777486e.png"},45:function(e,t,a){e.exports=a(82)},51:function(e,t,a){},54:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),s=(a(51),a(52),a(53),a(54),a(10)),o=(a(59),a(60),function(e){return l.a.createElement("header",{className:"header d-none d-sm-flex flex-column"},l.a.createElement("h1",{className:"mt-3"},l.a.createElement("i",{className:"fa fa-".concat(e.icon)})," ",e.title),l.a.createElement("p",{className:"lead text-muted"},e.subtitle))}),m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,e),l.a.createElement("main",{className:"content container-fluid"},l.a.createElement("div",{className:"p-3 mt-3"},e.children)))},i=function(e){return l.a.createElement(m,{icon:"home",title:"Home",subtitle:"Second project, React Course"},l.a.createElement("div",{className:"display-4"},"Welcome"),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"It's a system made to exemplify the building process of a register CRUD app developed using React"))},u=a(24),d=a(37),E=a(38),f=a(43),h=a(39),p=a(44),v=a(20),b=a.n(v),N={icon:"users",title:"Users",subtitle:"Users register: Inserting, Listing, Update and Deletion"},g="http://localhost:3001/users",y={user:{name:"",email:""},list:[]},k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state=Object(u.a)({},y),a}return Object(p.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e=this;b()(g).then(function(t){return e.setState({list:t.data})})}},{key:"clear",value:function(){this.setState({user:y.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat(g,"/").concat(t.id):g;b.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:y,list:a})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(u.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;b.a.delete("".concat(g,"/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(e){var t=this;return this.state.list.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:function(){return t.load(e)}},l.a.createElement("i",{className:"fa fa-pencil"})),l.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return t.remove(e)}},l.a.createElement("i",{className:"fa fa-trash"}))))})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name "},"Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.user.name,onChange:function(t){return e.updateField(t)},placeholder:"Type your name..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",value:this.state.user.email,onChange:function(t){return e.updateField(t)},placeholder:"Type your e-mail address..."})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.save(t)}},"Save"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.clear(t)}},"Calcel"))))}},{key:"render",value:function(){return console.log(this.state.list),l.a.createElement(m,N,l.a.createElement("div",null,this.renderForm(),this.renderTable()))}}]),t}(n.Component),w=function(e){return l.a.createElement(s.c,null,l.a.createElement(s.b,{exact:!0,path:"/",component:i}),l.a.createElement(s.b,{path:"/users",component:k}),l.a.createElement(s.a,{from:"*",to:"/"}))},x=(a(80),a(40)),C=a.n(x),j=a(8),F=function(e){return l.a.createElement("aside",{className:"logo"},l.a.createElement(j.b,{to:"/",className:"logo"},l.a.createElement("img",{src:C.a,alt:"logo"})))},S=(a(32),function(e){return l.a.createElement(j.b,{to:"/".concat(e.hash)},l.a.createElement("i",{className:"fa fa-".concat(e.icon)})," ","".concat(e.name))}),U=function(e){return l.a.createElement("aside",{className:"menu-area"},l.a.createElement("nav",{className:"menu"},l.a.createElement(S,{hash:"",icon:"home",name:"Home"}),l.a.createElement(S,{hash:"users",icon:"users",name:"Users"})))},O=(a(81),function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Desenvolvido com ",l.a.createElement("i",{className:"fa fa-heart text-danger"})," por ",l.a.createElement("strong",null,"Reedlex98")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(function(e){return l.a.createElement(j.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(F,null),l.a.createElement(U,null),l.a.createElement(w,null),l.a.createElement(O,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.b51924b4.chunk.js.map