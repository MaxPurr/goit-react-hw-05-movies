"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[158],{185:function(t,n,e){e.d(n,{v:function(){return o}});var r,a=e(168),o=e(444).ZP.p(r||(r=(0,a.Z)(["\n  color: #b0b4c3;\n  margin: 40px auto;\n  font-size: 24px;\n"])))},874:function(t,n,e){e.d(n,{O:function(){return g}});var r,a,o,i,c,u=e(168),s=e(444),p=e(87),f=s.ZP.ul(r||(r=(0,u.Z)(["\n  margin-top: 30px;\n  grid-template-columns: repeat(auto-fill, 300px);\n  grid-auto-rows: 520px;\n  display: grid;\n  list-style-type: none;\n  grid-column-gap: 30px;\n  grid-row-gap: 20px;\n  width: 100%;\n  justify-content: center;\n"]))),d=(0,s.ZP)(p.OL)(a||(a=(0,u.Z)(["\n  text-decoration: none;\n"]))),h=s.ZP.li(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),l=s.ZP.div(i||(i=(0,u.Z)(["\n  overflow: hidden;\n  border-radius: 10px;\n  width: 300px;\n  height: 450px;\n  background: #707793;\n"]))),v=s.ZP.div(c||(c=(0,u.Z)(["\n  padding: 10px 5px;\n  > p {\n    font-size: 18px;\n    color: #b0b4c3;\n    text-transform: uppercase;\n    font-weight: 500;\n  }\n"]))),x=e(184),g=function(t){var n=t.movies,e=t.from;return(0,x.jsx)(f,{children:n.map((function(t){var n=t.title,r=t.id,a=t.poster;return(0,x.jsx)(h,{children:(0,x.jsxs)(d,{to:"/movies/"+r.toString(),state:{from:e},children:[(0,x.jsx)(l,{children:(0,x.jsx)("img",{src:a,alt:n})}),(0,x.jsx)(v,{children:(0,x.jsx)("p",{children:n})})]})},r)}))})}},158:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var r,a,o,i=e(861),c=e(439),u=e(757),s=e.n(u),p=e(689),f=e(87),d=e(390),h=e(791),l=e(874),v=e(168),x=e(444),g=x.ZP.form(r||(r=(0,v.Z)(["\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 600px;\n  height: 50px;\n"]))),m=x.ZP.input(a||(a=(0,v.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 30px;\n  background: #fff;\n  padding: 15px 20px;\n  font-size: 24px;\n  outline: none;\n  color: #2e3047;\n\n  &::placeholder {\n    color: #707793;\n    opacity: 1;\n  }\n"]))),b=x.ZP.button(o||(o=(0,v.Z)(["\n  font-size: 20px;\n  border: none;\n  position: absolute;\n  top: 0;\n  right: -1px;\n  height: 100%;\n  padding: 10px 26px;\n  background: #3bba9c;\n  border-radius: 30px;\n  color: #fff;\n"]))),w=e(185),_=e(184),Z=function(){var t,n=(0,p.TH)(),e=(0,h.useState)([]),r=(0,c.Z)(e,2),a=r[0],o=r[1],u=(0,f.lr)(),v=(0,c.Z)(u,2),x=v[0],Z=v[1],y=null!==(t=x.get("query"))&&void 0!==t?t:"";(0,h.useEffect)((function(){var t=function(){var t=(0,i.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=o,t.next=4,(0,d.z1)(y);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.log(t.t2.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[y]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(g,{onSubmit:function(t){t.preventDefault();var n=t.target.elements.search_query.value,e=n.replaceAll(" ","")?{query:n}:{};Z(e)},children:[(0,_.jsx)(m,{name:"search_query",type:"text",placeholder:"Search for a movie..."}),(0,_.jsx)(b,{type:"submit",children:"Search"})]}),0===a.length&&y?(0,_.jsx)(w.v,{children:'No result for the query "'.concat(y,'" ;(')}):(0,_.jsx)(l.O,{movies:a,from:n.pathname+n.search})]})}},390:function(t,n,e){e.d(n,{Hg:function(){return s},M1:function(){return f},TP:function(){return p},tx:function(){return d},z1:function(){return h}});var r=e(861),a=e(757),o=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="a319e917b3467e05f7f58bcf403053f1",u=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r,a=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=a.length>1&&void 0!==a[1]?a[1]:{}).api_key=c,e.language="en-US",t.next=5,i.Z.get(n,{params:e});case 5:if(200===(r=t.sent).status){t.next=8;break}throw new Error(r.status);case 8:return t.abrupt("return",r.data);case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u("trending/movie/day");case 3:return n=t.sent,e=n.results.map((function(t){return{title:t.title,id:t.id,poster:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+t.poster_path}})),t.abrupt("return",e);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u("movie/".concat(n));case 3:return e=t.sent,r={poster:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+e.poster_path,title:e.title,userScore:Math.round(10*e.vote_average),overview:e.overview,genres:e.genres.map((function(t){return t.name}))},t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u("movie/".concat(n,"/credits"));case 3:return e=t.sent,r=e.cast.map((function(t){return{id:t.id,character:t.character,name:t.name,profile:t.profile_path?"https://image.tmdb.org/t/p/w138_and_h175_face/".concat(t.profile_path):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"}})),t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u("movie/".concat(n,"/reviews"),{page:1});case 3:return e=t.sent,r=e.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})),t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(o().mark((function t(n){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u("search/movie",{page:1,include_adult:!1,query:n});case 3:return e=t.sent,r=e.results.map((function(t){return{title:t.title,id:t.id,poster:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+t.poster_path}})),t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=158.49359938.chunk.js.map