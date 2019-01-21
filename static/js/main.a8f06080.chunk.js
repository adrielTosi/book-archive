(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){e.exports=n(40)},30:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),c=n.n(r),l=(n(30),n(5)),i=n(6),s=n(8),u=n(7),h=n(9),m=(n(32),n(41)),p=function(){return o.a.createElement("div",{className:"header-container"},o.a.createElement("div",null,o.a.createElement(m.a,{to:"/about"},"About")),o.a.createElement("div",null,o.a.createElement(m.a,{to:"/contact"},"Contact")))},v=n(43),b=n(44),f=n(10),d=(n(16),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"toggleOpen",value:function(){this.props.changeIsOpen(this.props.index)}},{key:"render",value:function(){var e;return e=void 0===this.props.bookInfo.volumeInfo.authors?"No Author":this.props.bookInfo.volumeInfo.authors.join(", "),o.a.createElement("div",{className:"individual-book-container",key:this.props.bookInfo.volumeInfo.id},!this.props.state&&o.a.createElement("div",{className:"book-title"},o.a.createElement("div",{key:this.props.bookInfo.volumeInfo.id,className:"inner-book-name"},this.props.bookInfo.volumeInfo.title),o.a.createElement("button",{className:"expand-button",onClick:this.toggleOpen.bind(this)},"Expand")),this.props.state&&o.a.createElement("div",{key:this.props.bookInfo.volumeInfo.id,className:"book-card"},o.a.createElement("div",null,o.a.createElement("img",{src:this.props.bookInfo.volumeInfo.imageLinks.smallThumbnail,alt:"No book cover"})),o.a.createElement("div",null,o.a.createElement("h4",null," ",this.props.bookInfo.volumeInfo.title," "),o.a.createElement("h6",null," ",e," "),o.a.createElement(m.a,{to:{pathname:"/info",state:{Info:this.props.bookInfo}}},"More..."),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"expand-button",onClick:this.toggleOpen.bind(this)},"Contract"))))}}]),t}(o.a.Component)),E=n(13);var O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={userInput:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({userInput:t})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.props.handleFetch(this.state.userInput)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this._handleSubmit.bind(this)},o.a.createElement("label",{htmlFor:"books-name"},"Name:  "),o.a.createElement("input",{id:"books-name",type:"text",placeholder:"Book's name",onChange:this.handleChange.bind(this),value:this.state.userInput}),o.a.createElement("input",{type:"submit",value:"Search"})))}}]),t}(o.a.Component),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={listIsOpen:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},n.handleFetch=n.handleFetch.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleFetch",value:function(e){var t=this;console.log(this.props);var n=e.split(" ").join("+");fetch("https://www.googleapis.com/books/v1/volumes?q="+n).then(function(e){return e.json()}).then(function(e){console.log(t.props),t.props.changeSearch(e.items)}).then(function(){return t.setState({listIsOpen:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]})})}},{key:"changeIsOpen",value:function(e){var t=this.state.listIsOpen;t[e]=!t[e];for(var n=0;n<10;n++)n!==e&&(t[n]=!1);this.setState({listIsOpen:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"addBooks-container"},o.a.createElement(O,{handleFetch:this.handleFetch}),o.a.createElement("div",{className:"map-bookcard"},this.props.userSearch.map(function(t,n){return o.a.createElement(d,{key:n,bookInfo:t,index:n,state:e.state.listIsOpen[n],changeIsOpen:e.changeIsOpen.bind(e)})})))}}]),t}(o.a.Component);var k=Object(E.b)(function(e){return{userSearch:e.userSearch}},{changeSearch:function(e){return{type:"CHANGE_SEARCH",newSearch:e}}})(I);var g=function(){return o.a.createElement("div",null,"This is the About page")};var j=function(){return o.a.createElement("div",null,"This is the Contact page")},y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"moreInfo"},o.a.createElement("div",null,o.a.createElement("img",{src:this.props.location.state.Info.volumeInfo.imageLinks.thumbnail,alt:"No book cover"})),o.a.createElement("div",{className:"volume-info"},o.a.createElement("h4",null,this.props.location.state.Info.volumeInfo.title),o.a.createElement("span",{className:"volume-author"},"Author: ",this.props.location.state.Info.volumeInfo.authors.join(", ")),o.a.createElement("span",{className:"volume-pages"},"Pages: ",this.props.location.state.Info.volumeInfo.pageCount),o.a.createElement("br",null),o.a.createElement("p",null,"Description: ",this.props.location.state.Info.volumeInfo.description)))}}]),t}(o.a.Component);var N=function(){return o.a.createElement(v.a,null,o.a.createElement(b.a,{exact:!0,path:"/",component:k}),o.a.createElement(b.a,{path:"/about",component:g}),o.a.createElement(b.a,{path:"/contact",component:j}),o.a.createElement(b.a,{path:"/info",component:y}))},w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(N,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(42),C=n(11),_={userSearch:[]};var x=Object(C.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH":return{userSearch:t.newSearch};default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(E.a,{store:x},o.a.createElement(S.a,null,o.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.a8f06080.chunk.js.map