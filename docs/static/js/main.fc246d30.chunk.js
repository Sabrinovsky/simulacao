(this.webpackJsonplavacar=this.webpackJsonplavacar||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),o=t.n(l),c=(t(13),t(2)),i=(t(14),t(1)),m=t(7);function u(e){var a=e.horas,t=e.chegadaDeterministica,n=e.expressaoChegada,r=e.media,l=e.variancia,o=e.tempoServicoDeterministico,c=e.exponencial,u=60*a,s=[],d=[],f={fila:[],atendendo:null};function v(){if(t)return parseInt(t);if("normal"===n){var e=Math.random(),a=Math.random(),o=Math.sqrt(-2*Math.log(e))*Math.sin(2*Math.PI*a);return Math.abs(Math.round(parseFloat(r)+parseFloat(l)*o))}}function p(){return o?parseInt(o):c?Math.round(-c*Math.log(Math.random()))||1:void 0}for(var g=v(),h=void 0,E=0;E<=u;E++)f.atendendo&&E===h&&N(E),E==g&&(g+=v(),b({id:E},E)),d.push(f.fila.length);function b(e,a){if(f.atendendo){var t=[].concat(Object(m.a)(f.fila),[e]);f=Object(i.a)(Object(i.a)({},f),{},{fila:t}),s[a]={id:a,entradaFila:a}}else f=Object(i.a)(Object(i.a)({},f),{},{atendendo:e}),h=p()+a,s[a]=Object(i.a)(Object(i.a)({},s[a]),{},{id:a,entradaFila:0,entradaAtendimento:a})}console.log(f),console.log(s);for(var j=0,O=0;O<d.length;O++)j+=d[O];function N(e){if(s[f.atendendo.id]=Object(i.a)(Object(i.a)({},s[f.atendendo.id]),{},{saidaAtendimento:e}),f.fila.length>0){var a=f.fila.filter((function(e,a){return 0!==a}));s[f.fila[0].id]=Object(i.a)(Object(i.a)({},s[f.fila[0].id]),{},{entradaAtendimento:e}),f=Object(i.a)(Object(i.a)({},f),{},{atendendo:f.fila[0],fila:a}),h=p()+e}else f=Object(i.a)(Object(i.a)({},f),{},{atendendo:!1})}j/=d.length,console.log("M\xe9dia de entidades na fila: ",j)}var s=function(){var e=r.a.useState(2),a=Object(c.a)(e,2),t=a[0],n=a[1],l=r.a.useState("fixed"),o=Object(c.a)(l,2),i=o[0],m=o[1],s=r.a.useState(0),d=Object(c.a)(s,2),f=d[0],v=d[1],p=r.a.useState("fixed"),g=Object(c.a)(p,2),h=g[0],E=g[1],b=r.a.useState(0),j=Object(c.a)(b,2),O=j[0],N=j[1],x=r.a.useState(),M=Object(c.a)(x,2),S=M[0],C=M[1],w=r.a.useState(),D=Object(c.a)(w,2),A=D[0],k=D[1],F=r.a.useState(),I=Object(c.a)(F,2),V=I[0],T=I[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Horas"),r.a.createElement("input",{defaultValue:"2",className:"form-control",onChange:function(e){var a=e.target;return n(a.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Tempo entre chegadas"),r.a.createElement("select",{defaultValue:"fixed",className:"form-control",onChange:function(e){var a=e.target;return m(a.value)}},r.a.createElement("option",{value:"normal"},"Aleat\xf3rio normal"),r.a.createElement("option",{value:"fixed"},"Determin\xedstico"))),"fixed"===i&&r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Intervalo de chegada"),r.a.createElement("input",{className:"form-control",onChange:function(e){var a=e.target;return v(a.value)}})),"normal"===i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"M\xe9dia"),r.a.createElement("input",{className:"form-control",onChange:function(e){var a=e.target;return C(a.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Vari\xe2ncia"),r.a.createElement("input",{className:"form-control",onChange:function(e){var a=e.target;return k(a.value)}}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Tempo de servi\xe7o"),r.a.createElement("select",{defaultValue:"fixed",className:"form-control",onChange:function(e){var a=e.target;E(a.value),T(0),N(0)}},r.a.createElement("option",{value:"expo"},"Aleat\xf3rio exponencial"),r.a.createElement("option",{value:"fixed"},"Determin\xedstico"))),"fixed"===h&&r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Tempo de servi\xe7o"),r.a.createElement("input",{className:"form-control",onChange:function(e){var a=e.target;return N(a.value)}})),"expo"===h&&r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Media Exponencial"),r.a.createElement("input",{className:"form-control",onChange:function(e){var a=e.target;return T(a.value)}})),r.a.createElement("button",{onClick:function(){u("normal"===i?{horas:t,expressaoChegada:i,media:S,variancia:A,tempoServicoDeterministico:O,exponencial:V}:{horas:t,chegadaDeterministica:f,tempoServicoDeterministico:O,exponencial:V})}},"Simular")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc246d30.chunk.js.map