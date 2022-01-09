(this["webpackJsonpaudio-browser-api-playground"]=this["webpackJsonpaudio-browser-api-playground"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(8),c=n.n(a),i=(n(15),n(16),n(10)),s=n(4),u=n.n(s),l=n(7),d=n(2),f=n(9),b=n.n(f),j=n(0),h=function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(),c=Object(d.a)(a,2),s=c[0],f=c[1],h=Object(o.useState)("stopped"),p=Object(d.a)(h,2),v=p[0],O=p[1],g=Object(o.useState)(),x=Object(d.a)(g,2),w=x[0],k=x[1],m=Object(o.useState)(),y=Object(d.a)(m,2),S=y[0],C=y[1],M=Object(o.useState)(),R=Object(d.a)(M,2),T=R[0],P=R[1],A=Object(o.useState)(100),B=Object(d.a)(A,1)[0],H=Object(o.useRef)(null),N=Object(o.useRef)(null),D=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=navigator.mediaDevices.getUserMedia({audio:!0}),e.next=3,t;case 3:n=e.sent,C(new MediaRecorder(n)),k(new AudioContext);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(null),P(void 0),S){e.next=8;break}return console.error("Recorder not init"),e.next=6,D();case 6:if(S){e.next=8;break}return e.abrupt("return");case 8:S.ondataavailable=function(e){if("inactive"===S.state){var t=[];t.push(e.data);var n=new Blob(t,{type:e.data.type});if(r(URL.createObjectURL(n)),f(e.data.type),!w)return void console.log("No AudioContext");n.arrayBuffer().then((function(e){return w.decodeAudioData(e)})).then((function(e){console.log({audioBuffer:e}),F(e)}))}},console.log("START recording..."),S.start(),O("recording");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e){if(e){for(var t=e.getChannelData(0),n=Math.floor(t.length/B),o=[],r=0;r<B;r++){for(var a=n*r,c=0,i=0;i<n;i++)c+=Math.abs(t[a+i]);o.push(c/n)}console.log({filteredData:o}),P(o),setTimeout((function(){return I(o)}),0)}else console.error("No AudioBuffer")},I=function(e){if(null===N||void 0===N?void 0:N.current)if(e){var t=N.current,n=window.devicePixelRatio||1;t.width=t.offsetWidth*n,t.height=(t.offsetHeight+40)*n;var o=t.getContext("2d");if(o){o.scale(n,n),o.translate(0,t.offsetHeight/2+20),e=function(e){var t=Math.pow(Math.max.apply(Math,Object(i.a)(e)),-1);return e.map((function(e){return e*t}))}(e);for(var r=t.offsetWidth/e.length,a=0;a<e.length;a++){var c=r*a,s=e[a]*t.offsetHeight-20;s<0?s=0:s>t.offsetHeight/2&&(s=t.offsetHeight/2),W(o,c,s,r,!!((a+1)%2))}}else console.error("No canvas context")}else console.error("No audio data");else console.error("No canvas HTML element")},W=function(e,t,n,o,r){e.lineWidth=1,e.strokeStyle="#fff",e.beginPath(),n=r?n:-n,e.moveTo(t,0),e.lineTo(t,n),e.arc(t+o/2,n,o/2,Math.PI,0,r),e.lineTo(t+o,0),e.stroke()};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Welcome to Audio Browser API Playground"}),!S&&Object(j.jsx)("button",{onClick:D,children:"Activate recorder"}),S&&Object(j.jsxs)("div",{children:["stopped"===v&&Object(j.jsx)("button",{onClick:L,children:"Rec"}),"recording"===v&&Object(j.jsx)("button",{onClick:function(){S&&(S.pause(),O("paused"))},children:"Pause"}),"paused"===v&&Object(j.jsx)("button",{onClick:function(){S&&(S.resume(),O("recording"))},children:"Resume"}),("recording"===v||"paused"===v)&&Object(j.jsx)("button",{onClick:function(){console.log("STOP recording..."),S&&(S.stop(),O("stopped"))},children:"Stop"}),"\xa0",Object(j.jsxs)("span",{children:[" Status: ",v]})]}),n&&Object(j.jsx)("div",{children:Object(j.jsx)("audio",{ref:H,controls:!0,children:Object(j.jsx)("source",{src:n,type:s})})}),T&&Object(j.jsx)("canvas",{ref:N,className:b.a.canvas})]})};var p=function(){return Object(j.jsx)(h,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()},9:function(e,t,n){e.exports={canvas:"styles_canvas__2Mk7O"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d85ba217.chunk.js.map