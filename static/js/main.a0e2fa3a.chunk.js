(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{33:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var r,c,i,a,o,d,s,u,l,p,m,b,h,j=t(0),g=t.n(j),x=t(25),f=t.n(x),O=(t(33),t(6)),w=t(5),v=t(11),k=t.n(v),S=Object(j.createContext)(),y=t.p+"static/media/logo.a066a007.svg",C=t(2),E=t(3),F=E.a.form(r||(r=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border: 1px solid black;\n"]))),M=E.a.input(c||(c=Object(C.a)(["  \n  width: 80%;\n  border: none;\n  height: 2rem;\n  padding: 0 0.5rem;\n"]))),P=E.a.input(i||(i=Object(C.a)(["\n  cursor: pointer;\n  outline: 1px solid black;\n  border: none;\n  max-width: 20%:\n  height: 2rem;\n  padding: 0.5rem;\n  background-color: white;\n  border-radius: 0;\n  box-shadow: none;\n  \n  :hover, :active {\n    color: white;\n    background-color: black;\n  }\n"]))),T=t(1),_=function(){var n=Object(j.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1],c=Object(j.useContext)(S),i=c.setPeople,a=c.setErrorMsg,o=function(n){k.a.get(n).then((function(n){d(n.data)})).catch((function(n){return a("Server error, data not loading.")}))},d=function(n){n.results<1&&a("No data found"),i((function(e){return[].concat(Object(O.a)(e),Object(O.a)(n.results))})),n.next&&o(n.next)};return Object(T.jsxs)(F,{onSubmit:function(n){n.preventDefault(),i([]);var e="https://swapi.dev/api/people/?search=".concat(t);o(e)},children:[Object(T.jsx)(M,{type:"text",value:t,onChange:function(n){r(n.target.value)},placeholder:"Enter name"}),Object(T.jsx)(P,{type:"submit",value:"SEARCH"})]})},B=E.a.button(a||(a=Object(C.a)(["\n  cursor: pointer;\n  width: 100%;\n  min-height: 2rem;\n  background-color: white;\n  border: 1px solid black;\n  margin-bottom: 1rem;\n  text-align: left;\n  padding: 0.5rem;\n\n  :hover, :active {\n    background-color: black;\n    color: white;\n  }\n\n  @media screen and (max-width: 640px){\n  }\n\n  @media screen and (min-width: 641px){\n  }\n\n  @media screen and (min-width: 1008px){\n  }\n"]))),H=function(n){var e=n.props,t=Object(j.useContext)(S).setFocused;return Object(T.jsx)(B,{type:"button",onClick:function(){t(e)},children:e.name})},L=Object(E.b)(o||(o=Object(C.a)(["\n  from {\n    height: 0;\n  }\n  to {\n    height: 100%;\n  }\n"]))),z=Object(E.b)(d||(d=Object(C.a)(["\n  from {\n    height: 100%;\n  }\n  to {\n    height: 0;\n  }\n"]))),D=E.a.div(s||(s=Object(C.a)(["\n  width: 100vw;\n  height: 100vh;\n  padding: 2rem;\n  background-color: black;\n  animation: "," 0.5s linear;\n\n  @media screen and (min-width: 641px) and (max-width: 1007px){\n    padding: 2rem 1rem;\n  };\n"])),(function(n){return n.open?L:z})),I=E.a.div(u||(u=Object(C.a)(["\n  display: ",";\n\n  p {\n    color: white;\n  }\n"])),(function(n){return n.open?"inherit":"none"})),J=E.a.button(l||(l=Object(C.a)(["\n  position: fixed;\n  cursor: pointer;\n  display: ",";\n  top: 1.5rem;\n  right: 2rem;\n  border: none;\n  color: white;\n  background-color: black;\n  font-size: 1.5rem;\n"])),(function(n){return n.open?"initial":"none"})),A=function(n){var e=n.props,t=Object(j.useState)([]),r=Object(w.a)(t,2),c=r[0],i=r[1],a=Object(j.useState)([]),o=Object(w.a)(a,2),d=o[0],s=o[1],u=Object(j.useState)(!0),l=Object(w.a)(u,2),p=l[0],m=l[1],b=Object(j.useContext)(S).setFocused;Object(j.useEffect)((function(){s(["\u2502","\u251c\u2500 Height : ".concat(e.height),"\u251c\u2500 Mass : ".concat(e.mass),"\u251c\u2500 Hair color : ".concat(e.hair_color),"\u251c\u2500 Skin color : ".concat(e.skin_color),"\u251c\u2500 Eye color : ".concat(e.eye_color),"\u251c\u2500 Birth year : ".concat(e.birth_year),"\u2514\u2500 Gender : ".concat(e.gender)])}),[e]),Object(j.useEffect)((function(){i([]),d.map((function(n,e){return setTimeout((function(){i((function(e){return[].concat(Object(O.a)(e),[n])}))}),100*e)}))}),[d]);return Object(T.jsxs)(D,{open:p,children:[Object(T.jsx)(J,{open:p,onClick:function(n){m(!1),setTimeout((function(){b(null)}),490)},children:"x"}),Object(T.jsxs)(I,{open:p,children:[Object(T.jsx)("p",{children:e.name}),c&&c.map((function(n,e){return Object(T.jsx)("p",{children:n},e)}))]})]})},G=E.a.div(p||(p=Object(C.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  overflow: hidden;\n\n  @media screen and (max-width: 640px){\n    grid-template-columns: 1rem 1fr 1rem;\n  }\n\n  @media screen and (min-width: 641px){\n    grid-template-columns: 1fr 2fr;\n    grid-column-gap: 1rem;\n    padding-left: 1rem;\n  }\n\n  @media screen and (min-width: 1008px){\n    grid-template-columns: 1fr 1fr 50%;\n    grid-column-gap: 2rem;\n    padding-left: 2rem;\n  }\n"]))),N=E.a.div(m||(m=Object(C.a)(["\n  margin-top: 2rem;\n\n  @media screen and (max-width: 640px){\n    grid-column: 2;\n  }\n\n  @media screen and (min-width: 641px){\n    grid-column: 1;\n  }\n\n  @media screen and (min-width: 1008px){\n    grid-column: 1;\n  }\n\n  img {\n    min-width: 100%;\n  }\n"]))),R=E.a.div(b||(b=Object(C.a)(["\n  padding: 2rem 0 2rem 0;\n  overflow: scroll;\n  margin-left: 2px;\n  text-align: center;\n    \n  @media screen and (max-width: 640px){\n    grid-column: 2;\n  }\n\n  @media screen and (min-width: 641px){\n    grid-column: 1;\n  }\n\n  @media screen and (min-width: 1008px){\n    grid-column: 2;\n    margin: 0;\n    text-align: left;\n  }\n"]))),q=E.a.div(h||(h=Object(C.a)(["\n  @media screen and (max-width: 640px){\n    position: fixed;\n    width: 100%;\n    height: 100%;\n\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n  \n  @media screen and (min-width: 641px){\n    grid-column: 2;\n    grid-row: 1/3;\n  }\n  \n  @media screen and (min-width: 1008px){\n    grid-column: 3;\n    grid-row: 1;\n  }\n"])));var K=function(){var n=Object(j.useState)([]),e=Object(w.a)(n,2),t=e[0],r=e[1],c=Object(j.useState)(null),i=Object(w.a)(c,2),a=i[0],o=i[1],d=Object(j.useState)("Loading..."),s=Object(w.a)(d,2),u=s[0],l=s[1],p={people:t,setPeople:r,focused:a,setFocused:o,errorMsg:u,setErrorMsg:l};return Object(j.useEffect)((function(){r([]);var n=function(n){k.a.get(n).then((function(n){e(n.data)})).catch((function(n){return l("Server error, data not loading.")}))},e=function(e){r((function(n){return[].concat(Object(O.a)(n),Object(O.a)(e.results))})),e.next&&n(e.next)};n("https://swapi.dev/api/people")}),[]),Object(T.jsx)(G,{children:Object(T.jsxs)(S.Provider,{value:p,children:[Object(T.jsxs)(N,{children:[Object(T.jsx)("a",{href:"/star-wars-app/",children:Object(T.jsx)("img",{src:y,alt:"logo"})}),Object(T.jsx)(_,{})]}),Object(T.jsx)(R,{children:t.length>0?t.map((function(n,e){return Object(T.jsx)(H,{props:n},e)})):Object(T.jsx)("p",{children:u})}),a&&Object(T.jsx)(q,{children:Object(T.jsx)(A,{props:a})})]})})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};f.a.render(Object(T.jsx)(g.a.StrictMode,{children:Object(T.jsx)(K,{})}),document.getElementById("root")),Q()}},[[55,1,2]]]);
//# sourceMappingURL=main.a0e2fa3a.chunk.js.map