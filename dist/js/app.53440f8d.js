(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],A=0,p=[];A<o.length;A++)s=o[A],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"11f4":function(t,e,a){"use strict";var r=a("be22"),n=a.n(r);n.a},4251:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("main",[a("Home")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"home"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"select mx-auto"},[r("form",[r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.valueSelect,expression:"valueSelect"}],staticClass:"form-control",attrs:{id:"valueSelect"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.valueSelect=e.target.multiple?a:a[0]},function(e){return t.getSelect()}]}},[r("option",{attrs:{value:""}},[t._v("Selecione o usuário")]),t._l(t.items,(function(e){return r("option",{key:e.username,domProps:{value:e.username}},[t._v(t._s(e.name))])}))],2)])])]),this.valueSelect?r("div",{ref:"tweet",staticClass:"col-md-12"},[r("div",{staticClass:"tweet mx-auto"},[r("ul",{staticClass:"list-unstyled"},[r("li",{staticClass:"media"},[r("img",{staticClass:"mr-3 photo",attrs:{src:this.profile.photo,alt:"nome"}}),r("div",{staticClass:"media-body"},[r("img",{staticClass:"icon float-right",attrs:{src:a("ea1d"),alt:"ícon bottom"}}),r("h5",{staticClass:"mt-0 mb-0"},[t._v(t._s(this.profile.name)+" "),r("img",{staticClass:"verified-account",attrs:{src:a("6850")}})]),r("h6",{staticClass:"mt-0 mb-0"},[t._v(t._s("@"+this.profile.username))])])]),t._m(0),t._m(1),t._m(2),t._m(3)])])]):t._e(),this.valueSelect?r("div",{staticClass:"select mx-auto mt-3"},[r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary mx-auto d-block",on:{click:t.exportImg}},[t._v("exportar")])])]):t._e()])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"mt-2"},[a("div",{staticClass:"editable",attrs:{contenteditable:"true",placeholder:"Digite aqui...",onkeypress:"return (this.innerText.length <= 280)"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"details-tweet mt-4"},[a("p",{staticClass:"details-tweet"},[t._v("7:55 PM · 11 de fev de 2020 "),a("a",{attrs:{href:"https://help.twitter.com/using-twitter/how-to-tweet#source-labels",rel:"noopener noreferrer",target:"_blank"}},[t._v("Twitter Web App")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"details-tweet ma"},[a("hr"),a("p",[a("strong",[t._v("47 mil")]),t._v(" Retweets "),a("span",{staticClass:"mr-2"}),a("strong",[t._v("72,5 mil")]),t._v(" Curtidas ")]),a("hr")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{staticClass:"icons-details d-block",attrs:{src:a("80ed"),alt:"ícons details"}}),r("hr")])}],c=(a("4160"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),l=a("e0a5"),u=a("70b0"),A=a.n(u),p={name:"Home",data:function(){return{items:[],valueSelect:"",profile:{name:null,username:null,photo:null}}},created:function(){this.renderList()},methods:{renderList:function(){var t=this;l.forEach((function(e){t.items.push(e)}))},getSelect:function(){var t=this;this.items.forEach((function(e){e.username===t.valueSelect&&(t.profile.name=e.name,t.profile.username=e.username,t.profile.photo=e.photo)}))},exportImg:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$refs.tweet,e.next=3,A.a.toPng(a);case 3:r=e.sent,n=document.createElement("a"),document.body.appendChild(n),n.setAttribute("type","hidden"),n.download="".concat(t.profile.username,".png"),n.href=r,n.click();case 10:case"end":return e.stop()}}),e)})))()}}},f=p,m=(a("dbc2"),a("2877")),d=Object(m["a"])(f,s,o,!1,null,null,null),v=d.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("a",{attrs:{href:"https://github.com/oniag/gerador-de-tweets",rel:"noopener noreferrer",target:"_blank"}},[r("img",{staticClass:"float-right",attrs:{src:a("b021")}})])])])])])}],g={name:"Header"},w=g,j=(a("11f4"),Object(m["a"])(w,h,b,!1,null,"731cb3e1",null)),C=j.exports,S={name:"App",components:{Header:C,Home:v}},U=S,V=(a("5c0b"),Object(m["a"])(U,n,i,!1,null,null,null)),y=V.exports;a("4989"),a("ab8b");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},6850:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAACXBIWXMAAAsSAAALEgHS3X78AAAK6ElEQVR4Ae1dfWwU1xGf27vzffgLDI6/AENKHJM0NgkmITUJttNATDFp0qofIFWqImy1qkLiAlFVqdiYpEpVBylVm8YpIlVkXEhFoxjS0tDYDoGoYEhpw4cpWDjUNh/BgL/uw3e3nTmz57N9u/vuvLu3Z3v+2b3dfe/N/O7NvnnzZt4aQId08rqn9dBlz5Lj17zQdssHt1w88MhnHAcw22aA/FlGWJpmhLJs8/r0eG633kQw6ImhfRfd/O8+d/uBZOGLQ+6/PscEP11sabgvxbiOpYwWz+gC1PO3vG9WHnGUn/rSF5HMJMT6HDP8Yqk1y2YydEVUiYKFog5q46UhftMRBwx6Ji5V7kwO3iqyV89P4qomXlvkNUQV1D0X3AioM3LuQ5RMw3fuu0/ZqxckGatC3NbkUtRA/VvHEF/e7PAPQEpLmmE3wIE18WtTbVyj0nWz1GdieUjpZzr6fFWljf2qAEq8dg/ysPGw4308jUqnQSNFe9py1LG1b0jddg93e+GP59xkiWlOiv2TZFse6PAsOdPjhSvYU7oHhkfyNDsHaaiOS+8ykvnTcnWQX7EB1V4LSrEY4GBZ/PpTN7z1//ifB87d9MFVhw++dPCQGGcAek1kIH+FGUYozTZXZMZzdUrwNSFQXV4+c9dZd+fOs24/kEowFM06lqQaYfODlv7CDFPiRPiIGNQPLw/x1ced0NEXFQ2biMyyZZ+aZ4KtS62b5iRwtbIPh3ggIlB3/MvFv3bKFaK6yXNpltUAu0psLQ+mmorClSosUD0+PnHzUWfvny+qPMqEK4VKz1uNAL9dYYOVc81h4RTW6P/qSdeUAZT+J6cX4MctDjjd4w3L3mUG9QBOJ39/2q1Sn9BvtS4EtqJpcA16yopYuWQy/nucvqLCff2sdU665zr6eahpdTahYEyvAaaeiu64pv6p8RoV7RA0jrTf9jJZA7KgXh30rXv73NRT+7Ho+tBy3HHKVTn2eqjfsqC+1z5UT++VaQLYf8kDvW5+iRwWsqAewundNA0j4MHeerjL0yqHhySoNOLROtE0jSDwEUMnkwS17aZ3t3fyzUJHEIrg7HN0GMmRJKjXnHyGXAVT7f419HDJkTSog5EtxMk1Gsv3bzh5oOm6lAySoDrke7pU3ZPyHvVThwdypISTBDUVPTXTNBoBMyKGDu4To6+O/iU5TU3FlclYpJno8f9hbhzcM4OD8xjhQpOXmxjlogTRakK7TEWSoC5MNm7C8r+WqUNXtwnQv5Ta4e6kYSX8RjZA2XwTrP1gAJSYamdjvXKGqqT6z0vkaucnSj6iK0CJmZpHrAFABeYWJnPw7N1m4eeEjsvTJfuhv25ZxB7PRE9tjBAtg6zFXhmKcFEv1OWwr30t3dgtV0i0JbeXT6w77eL3tceGe2oGqv3Ly6yi8h69osx0++f/dGYc6fb0iTaEN0KC2jXgK3/mrwO9Na0uRd5DUgwodW/7w1YQs1YoBuDjLmXsQwrt/N7fBxOqjzl5MXt1nK7Q0sHq/QNryMiNFVpFar9gnCh+9mlwwuANxUX5Ay7LY7Rir9PDZ1nHRBqO6qkX0Qm7/sPBmAI0OQ7gFQm1397qhM4BdTrIx6gBFc2OTnpVBv9rgb/X4eEzSxsHKmOph5Ig2x+xSar97v+qOyZ81OmBX33m6kVWAkZ9oKfiP9p5sTe25vor55rgaQm136yC2gf3SOH8TVwQDR68/KC2YSTzO23q/qMCA0od5dQeF+qgSyW1DyUDRuskCNf9oNZ+5ipX560jNKP8sQbV/i6RaTS96xpUVvuxEp3F4DeKCqfr3HWHr+zgZWVsuLENqfWb1P6bImpPIZpqjPYsstS3DS+Qcoju+7RSGCukN7UPxu3oFQwjHfCt4z5RyCgOrlzN821o5IuqPcryJ43VPlhW6ps4c6vnMCA2+Lquz5/EnKlnRBwjpPZajfZSIP37hg84ljUXqUrCuZeAjqK5CQFzLpyi4Ff7R8Xn9jTaU6x/tOnCbS8EjH81mSFvOc16vrPQ7LeQ29Eefv6wA+hfZaVqVHtK5wlFNK+PptoH83QL0wwCxn/wDaXPf/TVOPjuHUCpbnIg71kVDwUYDs5ClCop5g/Vi9oLcvSjAaAJqMVZ4xUiHi+986RdFlhS+19KqP02DJHXg9oLoCYgv5qA2icS38YCbJWE2reg2u+5oK+ZIC3ncOmY9qI2SUUNSgFbgj38WyKjfa9ORvux2OXMMAL3QArbe21s4XB+kyfn5RPiiRehgE1CS+FVGbWnfC29UR7iyRXhIKAFkScnHGD9ai+iRc2dXtirM7UnDE2o9LimV8yVzjOtpc0ItCBWYF/Ij4NvfyX06iep/ZZPlffkKyH/clwknWnlmjnKNKZ1ca2IBdjKfIsoO9uOOXWbXfjcomG+/aP/Tx6wNGjUWf1gyQErhmgTvpv36jSHK382B0VZ9AK4Y1LlzjSue24RGlgaUrjADqu9shsuKCWuEaF8ZZmtRagvYKdiomsuRXJoSeEAi0vCgBnYWrLH3NbzeRbIm2UsEgoEULSbDW1vP2GvpgAsLYkFWDLJ3tWp2q/JNkHl4tGgBUAlILMTuaqGlfYGMceFWmBLAXsbZ2MvfapPtUfLCXY8Zssai8soUOkm7e/03ur4TYtnqz8pCGaGgKWImGAFd6MT68VPHLpU+4r746Cu2G6wGsdv2SSq6xTSsu24q3eXxolptIMF2aiDmF/TiHlLJ6/rz4m+d5W9+9F0U2Zwpwg+FzVQTZyhr/68iCckuAaFzynFSO9pRriDxb1SYo9T/+CHe2IoniqYb7XPMRciR6oNSVATwts7QKqdSXOPpvTJMjH/kqCKrVpOGoQiEGQ2Q3KJJKiYSHE+gnYndRGWjiYJ6iKcvtKi3TSNIIAzp5EfImeSkFG+0DLc/HWaRhAoYfA/S4JKVT3BUMlIk5P7jHYaXp5hypWTUhZUjAgppuWOaQJ4Ficl8egjkcNCFtQU9GRvwCnZVCcaWzbmWShZT5ZkQaUaNtxnKaCl16lMtD0z6zZ1TKAm4YD1m8dtI0HtUwzdezHH9WcPWWXfpQIsTKDSwysyTQZ0ZAvlpsyRgurqimyvkb+ZVeiwdRrDbPi3zmjvaGEVSMnnKPZgZ4m9e5mERypUe8w9VSiM274bajAUR6tlbaFdrY9z4jEbe3V8XbiAEp9h91RBuGNXPW1Vx5w5/+lhD4cUyur5SIB8/x4zbHnIUjwLLZ9IeI0YVKGxvbit/E58HZzB7AwWIgOaPPpaEWt79BwuMdN60/77U4xlE+FvwqAKjV/q9VV90DG09czN4T2pr9zZ1CbNxvlj9OlbJyVZ5uov+n1bMVVTKKbqkfbCbno6oeAsbgWFMQM5tCf1NdyTmrIaya1JwXkZmLJeiDn8OHMskNvGg5VZxUBlbZCe+8GhQZ4CI9Sm2kKK3sYdvTWmsAcqJfjDaL4KtScTlGsVDUAJn6iAiipX9/pjNqDIDjVoAYa/1xbaitWom6XOqIBKjFHcEQGrtGmWjdkve1baK3CnimYWANR4RqW+ws7qIdza/gVc26egiYkSJWa8scIW9Q9/RR1UApK+pfISfvrjCKYhRkJkDlFww4uLLUlmXFqPpA4ly+gCVEGgg18M8W/gl9NOMAZQ0JbxZfPNsDHfUk0hS0I90T7qClQBDPqSGn7rpLwVAytoBzRK+HJg1ncyuh9pNTMPQ5IexkiWVfPMBeRBE8rp5fh/G6SYjm9NsrkAAAAASUVORK5CYII="},"80ed":function(t,e,a){t.exports=a.p+"img/icons-details.850b0bc3.png"},"9c0c":function(t,e,a){},b021:function(t,e){t.exports="data:image/png;base64,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"},be22:function(t,e,a){},dbc2:function(t,e,a){"use strict";var r=a("4251"),n=a.n(r);n.a},e0a5:function(t){t.exports=JSON.parse('[{"name":"Erick Jacquin","username":"erickjacquin","photo":"https://i.imgur.com/ky9kzFf.jpg"},{"name":"Felipe Neto","username":"felipeneto","photo":"https://i.imgur.com/eUFCIZb.jpg"},{"name":"Jair M. Bolsonaro","username":"jairbolsonaro","photo":"https://i.imgur.com/XPrMtGL.jpg"}]')},ea1d:function(t,e,a){t.exports=a.p+"img/bottom-icon.afeb5023.svg"}});
//# sourceMappingURL=app.53440f8d.js.map