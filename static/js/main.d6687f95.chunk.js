(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,n){e.exports=n(267)},153:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(21),c=n.n(s),o=n(33),u=n(17),i=n.n(u),l=n(61),m=n(120),p=n.n(m),d=n(274),f=n(36),E=n(42),h=n(121),L=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},y=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/comments"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},b=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},v=Object(E.c)(function(e,t){switch(t.type){case"START_LOAD":return Object(f.a)({},e,{isLoading:!0,hasError:!1});case"HANDLE_SUCCESS":return Object(f.a)({},e,{postsList:t.postsList,isLoading:!0});case"HANDLE_DELETE":return Object(f.a)({},e,{postsList:e.postsList.filter(function(e){return e.id!==t.payload})});case"HANDLE_SEARCH":return Object(f.a)({},e,{mixedPosts:e.postsList.filter(function(e){return(e.title+e.body).toLowerCase().includes(t.value)})});default:return e}},{postsList:[],mixedPosts:null,isLoaded:!1},Object(E.a)(h.a)),w=(n(153),n(276)),j=n(277),x=n(268),g=function(e){var t=e.name,n=e.email,a=e.address;return r.a.createElement("div",null,r.a.createElement("h3",null,"Author: ".concat(t)),r.a.createElement("p",null,"Email: ".concat(n)),r.a.createElement("p",null,"City: ".concat(a.city)))},O=function(e){var t=e.name,n=e.email,a=e.body;return r.a.createElement("div",{className:"comment"},r.a.createElement("h3",{className:"comment__title"},"Comment: ".concat(t)),r.a.createElement("p",{className:"comment__content"},a),r.a.createElement("p",{className:"comment__user-email"},n))},C=function(e){var t=e.list;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e))}))},N=Object(o.b)(function(e){return{postsList:e.postsList}},{handleDelete:function(e){return{type:"HANDLE_DELETE",payload:e}}})(function(e){var t=e.searchedText,n=e.title,a=e.body,s=e.comments,c=e.user,o=e.id,u=e.handleDelete,i=function(e){return t?e.split(new RegExp("(".concat(t,")"),"gi")).map(function(e,n){return r.a.createElement(r.a.Fragment,{key:"".concat(e+n)},e.toLowerCase()===t.toLowerCase()?r.a.createElement("span",null,e):e)}):e};return r.a.createElement(w.a,{className:"posts",color:"yellow"},r.a.createElement(j.a,{as:"h2"},r.a.createElement("span",{className:"post-header"},i(n)),r.a.createElement(x.a,{negative:!0,onClick:function(){return u(o)}},"Delete")),i(a),r.a.createElement(w.a,{color:"blue"},r.a.createElement(g,c),r.a.createElement(C,{list:s})))}),D=function(e){var t=e.posts,n=e.searchedResult;return r.a.createElement("div",{className:"container"},t.map(function(e){return r.a.createElement(N,Object.assign({searchedText:n,key:e.id},e))}))},S=Object(o.b)(function(e){return{postsList:e.postsList,mixedPosts:e.mixedPosts,isLoading:e.isLoading}},{loadPosts:function(){return function(e){var t,n,a,r,s,c;return i.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return e({type:"START_LOAD"}),o.next=3,i.a.awrap(Promise.all([L(),b(),y()]));case 3:t=o.sent,n=Object(l.a)(t,3),a=n[0],r=n[1],s=n[2],c=a.map(function(e){return Object(f.a)({},e,{user:r.find(function(t){return e.userId===t.id}),comments:s.filter(function(t){return e.id===t.postId})})}),e({type:"HANDLE_SUCCESS",postsList:c});case 10:case"end":return o.stop()}})}},handleSearch:function(e){return{type:"HANDLE_SEARCH",value:e}}})(function(e){var t=e.isLoading,n=e.postsList,s=e.mixedPosts,c=Object(a.useState)(""),o=Object(l.a)(c,2),u=o[0],m=o[1],f=p()(function(t){return e.handleSearch(t)},500);return r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"Dynamic list of posts"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{type:"search",icon:"search",placeholder:"Search...",onChange:function(e){var t=e.target.value.toLowerCase().slice(0,37);m(t),f(t)},value:u,className:"search-panel"}),r.a.createElement(D,{posts:s||n,searchedResult:u})):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(e.loadPosts());case 2:case"end":return t.stop()}})}},t?"Loading...":"Load")))});c.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(S,null)),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.d6687f95.chunk.js.map