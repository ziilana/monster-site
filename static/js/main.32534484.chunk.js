(this.webpackJsonprepetition=this.webpackJsonprepetition||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(13),n(3)),s=n(4),u=n(6),l=n(5),h=n(7),m=function(e){var t=e.list;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("h1",{key:e.id},e.name)})))},d=function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:t,onChange:n})},p=(n(14),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleChange=function(t){e.setState({searchText:t.target.value})},e.state={monsters:[],searchText:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchText,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(m,{list:o})),r.a.createElement("button",{onClick:function(){return e.setState({searchText:"test"})}}),r.a.createElement(d,{placeholder:"huuhuu",handleChange:this.handleChange}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.32534484.chunk.js.map