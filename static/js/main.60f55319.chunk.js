(this["webpackJsonpaudio-browser-api-playground"]=this["webpackJsonpaudio-browser-api-playground"]||[]).push([[0],{50:function(e,t,n){e.exports={canvas:"styles_canvas__2Mk7O"}},61:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),o=n(30),i=n.n(o),s=(n(61),n(62),n(27)),u=n(43),l=n(15),d=n(17),b=n(75),j=n(74),f=n(25),O=n(21),p=Object(d.b)("counter/increment"),h=Object(d.b)("counter/decrement"),v=Object(d.b)("counter/reset"),g={value:0},x=Object(d.c)(g,(c={},Object(f.a)(c,p.type,(function(e,t){var n=t.payload.value;return Object(O.a)(Object(O.a)({},e),{},{value:e.value+n})})),Object(f.a)(c,h.type,(function(e,t){var n=t.payload.value;return Object(O.a)(Object(O.a)({},e),{},{value:e.value-n})})),Object(f.a)(c,v.type,(function(e){return Object(O.a)(Object(O.a)({},e),{},{value:g.value})})),c)),y=n(76),m=n(72),w=n(73),k=[function(e){return e.pipe(Object(y.a)(p.type),Object(m.a)((function(e){e.type,e.payload;return console.log("This log is triggered only by increment action thanks to epics :)")})),Object(w.a)())}],S=Object(l.b)({counter:x}),C=b.a.apply(void 0,Object(u.a)(k)),T=Object(j.a)(),M=Object(d.a)({reducer:S,devTools:!1,middleware:[T]});T.run(C);s.c;var R=n(52),P=n(2),A=n(29),B=n.n(A),H=n(47),N=n(8),D=n(50),F=n.n(D),L=n(4),I=function(){var e=Object(r.useState)(null),t=Object(N.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),o=Object(N.a)(a,2),i=o[0],s=o[1],l=Object(r.useState)("stopped"),d=Object(N.a)(l,2),b=d[0],j=d[1],f=Object(r.useState)(),O=Object(N.a)(f,2),p=O[0],h=O[1],v=Object(r.useState)(),g=Object(N.a)(v,2),x=g[0],y=g[1],m=Object(r.useState)(),w=Object(N.a)(m,2),k=w[0],S=w[1],C=Object(r.useState)(100),T=Object(N.a)(C,1)[0],M=Object(r.useRef)(null),R=Object(r.useRef)(null),P=function(){var e=Object(H.a)(B.a.mark((function e(){var t,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=navigator.mediaDevices.getUserMedia({audio:!0}),e.next=3,t;case 3:n=e.sent,y(new MediaRecorder(n)),h(new AudioContext);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(H.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(null),S(void 0),x){e.next=8;break}return console.error("Recorder not init"),e.next=6,P();case 6:if(x){e.next=8;break}return e.abrupt("return");case 8:x.ondataavailable=function(e){if("inactive"===x.state){var t=[];t.push(e.data);var n=new Blob(t,{type:e.data.type});if(c(URL.createObjectURL(n)),s(e.data.type),!p)return void console.log("No AudioContext");n.arrayBuffer().then((function(e){return p.decodeAudioData(e)})).then((function(e){console.log({audioBuffer:e}),D(e)}))}},console.log("START recording..."),x.start(),j("recording");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){if(e){for(var t=e.getChannelData(0),n=Math.floor(t.length/T),c=[],r=0;r<T;r++){for(var a=n*r,o=0,i=0;i<n;i++)o+=Math.abs(t[a+i]);c.push(o/n)}console.log({filteredData:c}),S(c),setTimeout((function(){return I(c)}),0)}else console.error("No AudioBuffer")},I=function(e){if(null===R||void 0===R?void 0:R.current)if(e){var t=R.current,n=window.devicePixelRatio||1;t.width=t.offsetWidth*n,t.height=(t.offsetHeight+40)*n;var c=t.getContext("2d");if(c){c.scale(n,n),c.translate(0,t.offsetHeight/2+20),e=function(e){var t=Math.pow(Math.max.apply(Math,Object(u.a)(e)),-1);return e.map((function(e){return e*t}))}(e);for(var r=t.offsetWidth/e.length,a=0;a<e.length;a++){var o=r*a,i=e[a]*t.offsetHeight-20;i<0?i=0:i>t.offsetHeight/2&&(i=t.offsetHeight/2),W(c,o,i,r,!!((a+1)%2))}}else console.error("No canvas context")}else console.error("No audio data");else console.error("No canvas HTML element")},W=function(e,t,n,c,r){e.lineWidth=1,e.strokeStyle="#fff",e.beginPath(),n=r?n:-n,e.moveTo(t,0),e.lineTo(t,n),e.arc(t+c/2,n,c/2,Math.PI,0,r),e.lineTo(t+c,0),e.stroke()};return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:"Welcome to Audio Browser API Playground"}),!x&&Object(L.jsx)("button",{onClick:P,children:"Activate recorder"}),x&&Object(L.jsxs)("div",{children:["stopped"===b&&Object(L.jsx)("button",{onClick:A,children:"Rec"}),"recording"===b&&Object(L.jsx)("button",{onClick:function(){x&&(x.pause(),j("paused"))},children:"Pause"}),"paused"===b&&Object(L.jsx)("button",{onClick:function(){x&&(x.resume(),j("recording"))},children:"Resume"}),("recording"===b||"paused"===b)&&Object(L.jsx)("button",{onClick:function(){console.log("STOP recording..."),x&&(x.stop(),j("stopped"))},children:"Stop"}),"\xa0",Object(L.jsxs)("span",{children:[" Status: ",b]})]}),n&&Object(L.jsx)("div",{children:Object(L.jsx)("audio",{ref:M,controls:!0,children:Object(L.jsx)("source",{src:n,type:i})})}),k&&Object(L.jsx)("canvas",{ref:R,className:F.a.canvas})]})},W=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(I,{})})};var U=function(){return Object(L.jsx)(s.a,{store:M,children:Object(L.jsx)(R.a,{children:Object(L.jsx)(P.c,{children:Object(L.jsx)(P.a,{path:"/",element:Object(L.jsx)(W,{})})})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(U,{})}),document.getElementById("root")),_()}},[[71,1,2]]]);
//# sourceMappingURL=main.60f55319.chunk.js.map