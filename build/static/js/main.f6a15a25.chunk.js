(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),r=a.n(l),o=a(8),m=a(9),s=a(11),i=a(10),d=a(12),u=(a(36),a(16)),p=a(21),E=a(59),b=a(57),h=a(58),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:this.props.css},c.a.createElement("button",{style:{backgroundColor:"#377dff",borderRadius:4,fontFamily:"Poppins"},className:"mdc-button mdc-button--unelevated --mdc-theme-secondary",onClick:this.props.handleClick},c.a.createElement("span",{className:"mdc-button__label"},this.props.name)))}},{key:"componentDidMount",value:function(){[].map.call(document.querySelectorAll(".mdc-button"),function(e){return new p.a(e)})}}]),t}(n.PureComponent),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"mdc-form-field"},c.a.createElement("div",{className:"mdc-checkbox"},c.a.createElement("input",{type:"checkbox",className:"mdc-checkbox__native-control",id:"checkbox-1"}),c.a.createElement("div",{className:"mdc-checkbox__background"},c.a.createElement("svg",{className:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},c.a.createElement("path",{className:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),c.a.createElement("div",{className:"mdc-checkbox__mixedmark"})))))}},{key:"componentDidMount",value:function(){[].map.call(document.querySelectorAll(".mdc-checkbox"),function(e){return new E.a(e)})}}]),t}(n.PureComponent),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"mdc-text-field mdc-text-field--outlined mdc-theme--secondary"},c.a.createElement("input",{ref:function(t){e.input=t},type:this.props.type,className:"mdc-text-field__input"}),c.a.createElement("div",{className:"mdc-notched-outline"},c.a.createElement("div",{className:"mdc-notched-outline__leading"}),c.a.createElement("div",{className:"mdc-notched-outline__notch"},c.a.createElement("label",{className:"mdc-floating-label"},this.props.text)),c.a.createElement("div",{className:"mdc-notched-outline__trailing"}))))}},{key:"componentDidMount",value:function(){[].map.call(document.querySelectorAll(".mdc-text-field"),function(e){return new b.a(e)})}}]),t}(n.PureComponent),N=(n.PureComponent,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{height:"20em",width:"20em",boxShadow:"5px 10px #888888"},className:"card",id:"water"},c.a.createElement("img",{className:"card-img-top",src:"https://splatstudio.in/wp-content/uploads/2017/07/Doraemon.png",alt:"Card cap",style:{height:200}}),c.a.createElement("div",{className:"card-body"}," Some more card content "))}}]),t}(n.PureComponent)),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a.handleClick=function(){console.log("Pressed!",a.emailLogin.input.value,a.password.input.value)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"top"},c.a.createElement("span",{className:"title"},"Welcome to ",c.a.createElement("b",null,"CrowdML!")),c.a.createElement("br",null),c.a.createElement("span",{className:"text-muted"},"Login to manage you account.")),c.a.createElement("div",{className:"fieldsAndButton"},c.a.createElement("div",null,c.a.createElement(y,{ref:function(t){e.emailLogin=t},type:"text",text:"Email Address"})),c.a.createElement("div",null,c.a.createElement("div",{className:"mt-2 link d-flex flex-row-reverse"},c.a.createElement("a",{className:"forgotPassword",style:{textDecoration:"none",color:"grey",marginBottom:4},href:"http"},c.a.createElement("span",{style:{borderBottom:"1px dashed",fontSize:13},className:"forgotPassword"},"Forgot Password?"))),c.a.createElement(y,{ref:function(t){e.password=t},type:"password",text:"Password"})),c.a.createElement("div",{className:"mt-3"},c.a.createElement("div",{className:"bottom d-flex justify-content-between align-items-center"},c.a.createElement("div",{className:"signup",style:{fontSize:15}},c.a.createElement("span",{className:"text-muted"},"Don't have an account? "),c.a.createElement(u.b,{to:"/signup"},"Sign Up")),c.a.createElement("div",{className:"button"},c.a.createElement(v,{handleClick:this.handleClick,name:"Get Started"})))))))}}]),t}(n.PureComponent),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"top"},c.a.createElement("span",{className:"title"},"Welcome to ",c.a.createElement("b",null,"CrowdML!"))," ",c.a.createElement("br",null),c.a.createElement("span",{className:"m-1 text-muted"},"Enter your email to get started.")),c.a.createElement("div",{className:"fieldsAndButton"},c.a.createElement("div",{className:"input"},c.a.createElement(y,{text:"Email Address",type:"text"})),c.a.createElement("div",{style:{marginLeft:-10},className:"mt-2 d-flex align-items-center"},c.a.createElement(f,null),c.a.createElement("span",{className:"text-muted"},"I agree to the"," ",c.a.createElement("span",{style:{borderBottom:"1px dashed"}},"Terms and Conditions"))),c.a.createElement("div",{style:{marginTop:"10%"},className:"bottom d-flex justify-content-between align-items-center"},c.a.createElement("div",null,c.a.createElement("span",{className:"text-muted"},"Already have an account? "),c.a.createElement("br",null),c.a.createElement(u.b,{to:"/"},"Login")),c.a.createElement("div",{className:"d-flex flex-row-reverse"},c.a.createElement(v,{name:"Sign Up"})))))))}}]),t}(n.PureComponent),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container container-fluid"},c.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-light"},c.a.createElement("span",{className:"navbar-brand"},c.a.createElement("b",null,"Crowdsource")),c.a.createElement("div",{className:"d-flex flex-row justify-items-center"},c.a.createElement("div",{className:"mr-3"},c.a.createElement("span",{style:{border:"1px solid black"}},"Admin")),c.a.createElement("div",null,c.a.createElement("span",{style:{border:"1px solid black"}},"Moderator")))),c.a.createElement("div",{className:"mainPageContent"},c.a.createElement("div",{className:"d-flex flex-row justify-content-around align-items-center"},c.a.createElement("div",null,c.a.createElement("span",null,"What would you like to help with?")),c.a.createElement("div",{className:"box"},"Box")),c.a.createElement("div",{className:"cardsGrid"},c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null),c.a.createElement(N,null))))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var j=a(14);r.a.render(c.a.createElement(u.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{path:"/",component:x,exact:!0}),c.a.createElement(j.a,{path:"/signup",component:g}),c.a.createElement(j.a,{path:"/main",component:w}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.f6a15a25.chunk.js.map