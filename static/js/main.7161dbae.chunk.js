(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(12),u=a(13),s=a(16),i=a(15);a(22);var m=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(23);var d=function(e){return r.a.createElement("h1",{className:"title"},e.children)},f=a(14),E=a.n(f),p=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")};a(41);var h=function(e){var t=e.results;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:t.name,src:t.picture.large})),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Name:")," ",t.name.first," ",t.name.last),r.a.createElement("li",null,r.a.createElement("strong",null,"Age:")," ",t.dob.age),r.a.createElement("li",null,r.a.createElement("strong",null,"Email:")," ",t.email))))},v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){if(0===t.data.length)throw new Error("No results found.");if("error"===t.data.status)throw new Error(t.data.message);e.setState({data:t.data.results})})).catch((function(t){return e.setState({error:t.message})}))}},{key:"loopData",value:function(){for(var e=[],t=0;t<20;t++)e[t]=this.state.data[t];return console.log(e),e}},{key:"render",value:function(){console.log(this.loopData());var e=this.loopData();return void 0===e[1]?(console.log("this happend"),r.a.createElement("div",null,"Undefined")):r.a.createElement(m,null,r.a.createElement(d,null,"Employee Directory"),r.a.createElement(r.a.Fragment,null,e.map((function(e,t){return r.a.createElement(h,{key:t,results:e})}))))}}]),a}(n.Component);var g=function(){return r.a.createElement(v,null)};a(42);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7161dbae.chunk.js.map