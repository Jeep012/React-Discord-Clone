(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a(143)},108:function(e,t,a){},140:function(e,t){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(108),a(12)),i=a(26),l=a(47),u=a.n(l),m=a(90),v=a.n(m),d=a(175),E=a(192),p=a(179),f=a(181),b=a(51),g=a(182),O=a(183),h=a(188),y=a(191),N=function(e){return{type:"SEND_MESSAGE",payload:e}},j=function(e){return{type:"CHANGE_SERVER",payload:e}},S=function(e){return{type:"CHANGE_TOPIC",payload:e}};function k(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,c=(t.activeTopic,Object(o.c)(function(e){return e.user})),s=Object(o.b)(),l=Object(n.useState)(c.userName),m=Object(i.a)(l,2),N=m[0],k=m[1],C=Object(n.useState)(!1),T=Object(i.a)(C,2),I=T[0],_=T[1],w=Object(n.useState)(""),A=Object(i.a)(w,2),G=A[0],M=A[1],D=e.topics,H=e.servers;return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"servers-container"},r.a.createElement(d.a,null,H.map(function(e){return r.a.createElement(E.a,{title:e,key:e,placement:"right",className:"server-tooltip"},r.a.createElement(p.a,{className:"server-icon"},r.a.createElement(v.a,{onClick:function(){return s(j(e))}})))}))),r.a.createElement("div",{className:"topics-container"},r.a.createElement(d.a,{className:"topic-list"},r.a.createElement(f.a,{className:"title-container"},a),D.map(function(e){return r.a.createElement(f.a,{onClick:function(t){return s(S(e))},key:e,button:!0},r.a.createElement("i",{style:{verticalAlign:"text-bottom",fontWeight:"bold"},className:"topic-hashtag"},"#"),r.a.createElement(b.a,{variant:"body1"},e))})),r.a.createElement("div",{className:"user-options"},r.a.createElement(f.a,{className:"user-info"},r.a.createElement(g.a,null,r.a.createElement(O.a,null,r.a.createElement(u.a,null))),r.a.createElement(h.a,{id:"user-name",value:N,onChange:function(e){return k(e.target.value)},onKeyPress:function(e){return function(e){console.log("fired"),"Enter"===e.key&&(s({type:"SIGN_IN",payload:{userId:"1",userName:N}}),M("Name changed to : ".concat(N)),_(!0),setTimeout(function(){return _(!1)},2e3))}(e)}})),r.a.createElement(y.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:I,message:G}))))}var C=a(184);function T(e){var t,a=Object(o.c)(function(e){return e.chat}),c=a.activeServer,s=a.activeTopic;return Object(n.useEffect)(function(){t.scrollIntoView()}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"topic-title"},s)),r.a.createElement("div",{className:"messages-container"},r.a.createElement(d.a,null,a.servers[c][s].map(function(e,t){return r.a.createElement(f.a,{className:"message",key:t},r.a.createElement(g.a,null,r.a.createElement(O.a,null,r.a.createElement(u.a,null))),r.a.createElement(C.a,{primary:e.from,secondary:e.msg,className:"message-text"}))})),r.a.createElement("div",{ref:function(e){return t=e}})))}function I(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,c=t.activeTopic,s=Object(o.c)(function(e){return e.user}).userName,l=Object(o.b)(),u=Object(n.useState)(""),m=Object(i.a)(u,2),v=m[0],d=m[1];function E(e){"Enter"===e.key&&(l(N({server:a,topic:c,from:s,msg:v})),d(""))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"send-message-border"}),r.a.createElement("div",{className:"send-message-container"},r.a.createElement(h.a,{autoComplete:"off",color:"blue",id:"filled-name",className:"message-input",label:"Message # ".concat(c),value:v,onChange:function(e){return d(e.target.value)},onKeyPress:function(e){return E(e)}})))}var _=a(185),w=a(186),A=a(92),G=a.n(A),M=a(189);function D(e){var t=Object(o.c)(function(e){return e.chat}),a=(t.activeServer,t.activeTopic,Object(n.useState)(!1)),c=Object(i.a)(a,2),s=c[0],l=c[1],u=e.topics,m=e.servers;return r.a.createElement(_.a,{position:"static"},r.a.createElement(w.a,{className:"navbar"},r.a.createElement(p.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button"},r.a.createElement(G.a,{onClick:function(){return l(!0)}})),r.a.createElement(M.a,{anchor:"left",open:s,onClose:function(){return l(!1)}},r.a.createElement(k,{topics:u,servers:m})),r.a.createElement(b.a,{variant:"h5"},"Simple Discord")))}function H(){var e=Object(o.c)(function(e){return e.chat}),t=Object.keys(e.servers),a=Object.keys(e.servers[e.activeServer]);return r.a.createElement("div",null,r.a.createElement(D,{topics:a,servers:t}),r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"sidebar-grid"},r.a.createElement(k,{topics:a,servers:t})),r.a.createElement("div",{className:"messages-grid"},r.a.createElement(T,{topics:a})),r.a.createElement("div",{className:"send-messages-grid"},r.a.createElement(I,null))))}var P=a(95),R=a(187),x=Object(P.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"16px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#202225",color:"white"}}},palette:{type:"dark",primary:{main:"#7289da"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});var U,V=function(){return r.a.createElement(R.a,{theme:x},r.a.createElement(H,null))},W=a(25),z=a(93),F=a(94),J=a.n(F),K=a(33),L=a(50),X=a(21),B={servers:{"programming haven":{general:[],react:[],vue:[],php:[],node:[]},"game land":{HOTS:[],Overwatch:[],Diablo:[],PoE:[],CSGO:[]}},activeServer:"",activeTopic:""},q={isSignedIn:!1,isAdmin:!1,userId:null,userName:"anonymous"+Math.floor(100*Math.random(0))},Q=Object(W.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(console.log("hit reducer"),t.type){case"UPDATE_CHAT":var a=t.payload,n=a.server,r=a.topic,c=a.from,s=a.msg;return console.log(t),Object(X.a)({},e,{servers:Object(X.a)({},e.servers,Object(K.a)({},n,Object(X.a)({},e.servers[n],Object(K.a)({},r,[].concat(Object(L.a)(e.servers[n][r]),[{from:c,msg:s}])))))});case"CHANGE_SERVER":return Object(X.a)({},e,{activeServer:t.payload,activeTopic:Object.keys(e.servers[t.payload])[0]});case"CHANGE_TOPIC":return Object(X.a)({},e,{activeTopic:t.payload});default:return Object(X.a)({},e,{activeServer:Object.keys(e.servers)[0],activeTopic:Object.keys(e.servers[Object.keys(e.servers)[0]])[0]})}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SIGN_IN":return Object(X.a)({},e,{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName});case"SIGN_OUT":return Object(X.a)({},e,{isSignedIn:!1,userId:null,userName:"anonymous"+100*Math.random(0)});default:return e}}}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,Z=Object(W.e)(Q,Y(Object(W.a)(z.a,(U="https://simple-chat-apix.herokuapp.com/",function(e){var t=J()(U);return t.on("simple-chat",function(t){e.dispatch({type:"UPDATE_CHAT",payload:t})}),function(e){return function(a){if("SEND_MESSAGE"!==a.type)return e(a);t.emit("simple-chat",a.payload)}}}))));s.a.render(r.a.createElement(o.a,{store:Z},r.a.createElement(V,null)),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.c6e6c47a.chunk.js.map