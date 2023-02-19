"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{5033:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,o,c,i=t(9439),s=t(3952),u=t(2791),l=t(7689),p=t(168),f=t(1087),d=t(6444),v=d.ZP.button(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding: 8px 10px;\n  margin: 12px 0;\n  font-size: 16px;\n  border: none;\n  border-radius: 4px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n  svg {\n    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover {\n    background-color: orange;\n    color: #ffff;\n    svg {\n      fill: #ffff;\n    }\n  }\n"]))),h=d.ZP.section(a||(a=(0,p.Z)(["\n  padding-left: 24px;\n  margin-bottom: 12px;\n"]))),g=d.ZP.p(o||(o=(0,p.Z)(["\n  font-weight: bold;\n  margin-bottom: 7px;\n"]))),m=(0,d.ZP)(f.OL)(c||(c=(0,p.Z)(["\n  text-decoration: none;\n  color: inherit;\n\n  &.active {\n    color: orange;\n    text-decoration: none;\n  }\n\n  &:hover {\n    color: orange;\n    text-decoration: underline;\n  }\n"]))),x=t(7241),b=t(2483),Z=t(184),k=(0,u.lazy)((function(){return t.e(978).then(t.bind(t,7978))})),y=function(){var n,e,t,r,a=(0,l.UO)().movieId,o=(0,u.useState)(null),c=(0,i.Z)(o,2),p=c[0],f=c[1],d=(0,l.TH)(),y=(0,l.s0)();return(0,u.useEffect)((function(){(0,s.ZJ)(Number(a)).then((function(n){return f(n)}))}),[a]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("section",{children:[(0,Z.jsxs)(v,{onClick:function(){var n,e;return y(null!==(n=null===d||void 0===d||null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:[(0,Z.jsx)(x.WmF,{}),"Go back"]}),p&&(0,Z.jsx)(u.Suspense,{fallback:(0,Z.jsx)(b.a,{}),children:(0,Z.jsx)(k,{movieInfo:p})})]}),(0,Z.jsxs)(h,{children:[(0,Z.jsx)(g,{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(m,{to:"cast",state:{from:null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(m,{to:"reviews",state:{from:null!==(t=null===(r=d.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Reviews"})})]})]}),(0,Z.jsx)(u.Suspense,{fallback:(0,Z.jsx)(b.a,{}),children:(0,Z.jsx)(l.j3,{})})]})}},3952:function(n,e,t){t.d(e,{Df:function(){return i},JS:function(){return h},XC:function(){return d},Y7:function(){return u},ZJ:function(){return p}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1912);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=48b510c2367bfa7530de62f6d3fdcc31");case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=33.7d611f6f.chunk.js.map