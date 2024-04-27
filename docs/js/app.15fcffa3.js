(function(){"use strict";var e={677:function(e,l,t){var n=t(9242),a=t(3396),r=t(7139);const i=(0,a._)("h1",null,"ハイスピを固定しつつ白数字を変えたときの緑数字を出すやつ",-1),s=(0,a._)("label",{class:"subtitle"},"現在のハイスピ設定",-1),o={key:0},u=(0,a._)("br",null,null,-1),c=(0,a._)("p",null,"初期値を保存しました",-1),p=(0,a._)("br",null,null,-1),d=(0,a._)("label",{class:"subtitle"},"新しいハイスピ設定",-1);function v(e,l,t,n,v,b){const m=(0,a.up)("HispeedCalculator"),f=(0,a.up)("GreenCalculator");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,s,(0,a.Wm)(m,{bpm:e.bpm,"onUpdate:bpm":l[0]||(l[0]=l=>e.bpm=l),white:e.white,"onUpdate:white":l[1]||(l[1]=l=>e.white=l),sud:e.sud,"onUpdate:sud":l[2]||(l[2]=l=>e.sud=l),lift:e.lift,"onUpdate:lift":l[3]||(l[3]=l=>e.lift=l),green:e.green,"onUpdate:green":l[4]||(l[4]=l=>e.green=l)},null,8,["bpm","white","sud","lift","green"]),(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:l[5]||(l[5]=(...e)=>b.saveToCookies&&b.saveToCookies(...e))},"Save"),e.isMessageVisible?((0,a.wg)(),(0,a.iD)("div",o,[u,c,(0,a._)("p",null,"BPM:"+(0,r.zw)(this.bpm)+" SUD+:"+(0,r.zw)(this.sud)+" LIFT:"+(0,r.zw)(this.lift)+" 緑数字:"+(0,r.zw)(this.green),1)])):(0,a.kq)("",!0),p,d,(0,a.Wm)(f,{bpm:e.bpm,"onUpdate:bpm":l[6]||(l[6]=l=>e.bpm=l)},null,8,["bpm"])],64)}const b=e=>((0,a.dD)("data-v-412ce14e"),e=e(),(0,a.Cn)(),e),m={class:"container mt-4"},f={class:"row justify-content-center"},h={class:"col-md-2 mb-3"},w=b((()=>(0,a._)("label",{for:"bpm"},"BPM:",-1))),g={class:"row justify-content-center"},_={for:"white"},y={class:"row justify-content-center"},P={class:"col-md-2 mb-3"},F=b((()=>(0,a._)("label",{for:"sud"},"SUD+:",-1))),H={class:"col-md-2 mb-3"},U=b((()=>(0,a._)("label",{for:"lift"},"LIFT:",-1))),M={class:"row justify-content-center"},Y={class:"col-md-2 mb-3"},j=b((()=>(0,a._)("label",{for:"green"},"緑数字:",-1))),C={class:"row justify-content-center"},D={class:"col-md-3 mb-3"},I=b((()=>(0,a._)("label",{for:"hispeed"},"☆計算したHiSpeed:",-1))),k={class:"big-bold"};function V(e,l,t,i,s,o){const u=(0,a.up)("DetailInfo");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",m,[(0,a._)("div",f,[(0,a._)("div",h,[w,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"bpm","onUpdate:modelValue":l[0]||(l[0]=e=>i.localBpm=e)},null,512),[[n.nr,i.localBpm]])])]),(0,a._)("div",g,[(0,a._)("label",_,"白数字:"+(0,r.zw)(i.localWhite),1)]),(0,a._)("div",y,[(0,a._)("div",P,[F,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"sud","onUpdate:modelValue":l[1]||(l[1]=e=>i.localSud=e)},null,512),[[n.nr,i.localSud]])]),(0,a._)("div",H,[U,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"lift","onUpdate:modelValue":l[2]||(l[2]=e=>i.localLift=e),min:"0"},null,512),[[n.nr,i.localLift]])])]),(0,a._)("div",M,[(0,a._)("div",Y,[j,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"green","onUpdate:modelValue":l[3]||(l[3]=e=>i.localGreen=e)},null,512),[[n.nr,i.localGreen]])])]),(0,a._)("div",C,[(0,a._)("div",D,[I,(0,a._)("label",k,(0,r.zw)(this.hispeed),1)])]),(0,a.Wm)(u,{green:i.localGreen,"onUpdate:green":l[4]||(l[4]=e=>i.localGreen=e),white:i.localWhite,"onUpdate:white":l[5]||(l[5]=e=>i.localWhite=e)},null,8,["green","white"])])])}var Z=t(4870);function x(e,l,t,n,i,s){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,"ノーツ表示時間:"+(0,r.zw)(this.blue)+"s ノーツ表示範囲:"+(0,r.zw)(this.length)+"cm",1)])}var O={props:{green:{type:Number,required:!0},white:{type:Number,required:!0}},setup(e){const l=(0,Z.iH)(0),t=(0,Z.iH)(0);function n(e){var l=.01666*parseFloat(e)/10;return parseFloat(l.toFixed(3))}function r(e){var l=.35*parseFloat(e)/10;return parseFloat(l.toFixed(2))}return(0,a.YP)((()=>e.green),(e=>{l.value=n(e)})),(0,a.YP)((()=>e.white),(e=>{t.value=r(e)})),(0,a.bv)((()=>{t.value=r(e.white),l.value=n(e.green)})),{blue:l,length:t}}},z=t(89);const B=(0,z.Z)(O,[["render",x]]);var S=B,q={components:{DetailInfo:S},props:{bpm:{type:Number,required:!0},white:{type:Number,required:!0},lift:{type:Number,required:!0},sud:{type:Number,required:!0},green:{type:Number,required:!0}},setup(e,{emit:l}){const t=(0,Z.iH)(e.bpm),n=(0,Z.iH)(e.sud),r=(0,Z.iH)(e.lift),i=(0,Z.iH)(e.white),s=(0,Z.iH)(e.green),o=(0,Z.iH)(0),u=(0,Z.iH)(0);function c(e,l,t){var n=(1e3-parseFloat(e))/1e3*174800/(parseFloat(l)*parseFloat(t));return n=Math.ceil(100*n),n/=100,n}function p(e){var l=.01666*parseFloat(e)/10;return parseFloat(l.toFixed(3))}return(0,a.YP)(t,(e=>{l("update:bpm",e)})),(0,a.YP)(i,(e=>{l("update:white",e)})),(0,a.YP)(n,(e=>{l("update:sud",e)})),(0,a.YP)(r,(e=>{l("update:lift",e)})),(0,a.YP)(s,(e=>{l("update:green",e)})),(0,a.YP)((()=>e.bpm),(e=>{t.value=e,o.value=c(i.value,t.value,s.value)})),(0,a.YP)((()=>e.white),(e=>{i.value=e,o.value=c(i.value,t.value,s.value)})),(0,a.YP)((()=>e.sud),(e=>{n.value=e,i.value=e+r.value})),(0,a.YP)((()=>e.lift),(e=>{r.value=e,i.value=n.value+e})),(0,a.YP)((()=>e.green),(e=>{s.value=e,o.value=c(i.value,t.value,s.value),u.value=p(s.value)})),(0,a.bv)((()=>{o.value=c(i.value,t.value,s.value),u.value=p(s.value)})),{localBpm:t,localWhite:i,localGreen:s,localSud:n,localLift:r,hispeed:o,blue:u}}};const N=(0,z.Z)(q,[["render",V],["__scopeId","data-v-412ce14e"]]);var T=N;const W=e=>((0,a.dD)("data-v-7893d6d8"),e=e(),(0,a.Cn)(),e),G={class:"container mt-4"},L=W((()=>(0,a._)("span",{class:"nowrap",for:"bpm"},"BPM:必ず上で入力したものと同じ値を入れてください",-1))),A=W((()=>(0,a._)("br",null,null,-1))),E=W((()=>(0,a._)("span",{class:"nowrap",for:"bpm"},"白数字:自由に入力してください",-1))),J=W((()=>(0,a._)("br",null,null,-1))),K=W((()=>(0,a._)("span",{class:"nowrap",for:"bpm"},"HiSpeed:上で計算した値を入れてください",-1))),Q=W((()=>(0,a._)("br",null,null,-1))),R=W((()=>(0,a._)("br",null,null,-1))),X={class:"row justify-content-center nowrap"},$={class:"col-md-2 mb-3"},ee=W((()=>(0,a._)("label",{for:"bpm"},"BPM:",-1))),le={class:"row justify-content-center"},te={for:"white"},ne={class:"row justify-content-center"},ae={class:"col-md-2 mb-3"},re=W((()=>(0,a._)("label",{for:"sud"},"SUD+:",-1))),ie={class:"col-md-2 mb-3"},se=W((()=>(0,a._)("label",{for:"lift"},"LIFT:",-1))),oe={class:"row justify-content-center"},ue={class:"col-md-2 mb-3"},ce=W((()=>(0,a._)("label",{for:"hispeed"},"☆HiSpeed:",-1))),pe={class:"row justify-content-center"},de={class:"col-md-3 mb-3"},ve=W((()=>(0,a._)("label",{for:"green"},"☆計算した緑数字:",-1))),be={class:"big-bold-green"};function me(e,l,t,i,s,o){const u=(0,a.up)("DetailInfo");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",G,[L,A,E,J,K,Q,R,(0,a._)("div",X,[(0,a._)("div",$,[ee,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"bpm","onUpdate:modelValue":l[0]||(l[0]=e=>i.localBpm=e),disabled:""},null,512),[[n.nr,i.localBpm]])])]),(0,a._)("div",le,[(0,a._)("label",te,"白数字:"+(0,r.zw)(i.white),1)]),(0,a._)("div",ne,[(0,a._)("div",ae,[re,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"sud","onUpdate:modelValue":l[1]||(l[1]=e=>i.sud=e)},null,512),[[n.nr,i.sud]])]),(0,a._)("div",ie,[se,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"lift","onUpdate:modelValue":l[2]||(l[2]=e=>i.lift=e),min:"0"},null,512),[[n.nr,i.lift]])])]),(0,a._)("div",oe,[(0,a._)("div",ue,[ce,(0,a.wy)((0,a._)("input",{type:"number",step:"0.01",class:"form-control",id:"hispeed","onUpdate:modelValue":l[3]||(l[3]=e=>i.hispeed=e)},null,512),[[n.nr,i.hispeed]])])]),(0,a._)("div",pe,[(0,a._)("div",de,[ve,(0,a._)("label",be,(0,r.zw)(Math.ceil(this.green)),1)])]),(0,a.Wm)(u,{green:i.green,"onUpdate:green":l[4]||(l[4]=e=>i.green=e),white:i.white,"onUpdate:white":l[5]||(l[5]=e=>i.white=e)},null,8,["green","white"])])])}var fe={components:{DetailInfo:S},props:{bpm:{type:Number,required:!0}},setup(e,{emit:l}){const t=(0,Z.iH)(e.bpm),n=(0,Z.iH)(0),r=(0,Z.iH)(0),i=(0,Z.iH)(0),s=(0,Z.iH)(0),o=(0,Z.iH)(0);function u(e,l,t){var n=(1e3-parseFloat(e))/1e3*174800/(parseFloat(l)*parseFloat(t));return n}return(0,a.YP)(t,(e=>{l("update:bpm",e)})),(0,a.YP)((()=>e.bpm),(e=>{t.value=e,n.value=u(i.value,t.value,r.value)})),(0,a.YP)((()=>r.value),(e=>{r.value=e,n.value=u(i.value,t.value,r.value)})),(0,a.YP)((()=>i.value),(e=>{i.value=e,n.value=u(i.value,t.value,r.value)})),(0,a.YP)((()=>o.value),(e=>{o.value=e,i.value=e+s.value})),(0,a.YP)((()=>s.value),(e=>{s.value=e,i.value=o.value+e})),(0,a.bv)((()=>{i.value=455,r.value=2.11,o.value=220,s.value=240,n.value=u(i.value,t.value,r.value)})),{localBpm:t,green:n,hispeed:r,white:i,lift:s,sud:o}}};const he=(0,z.Z)(fe,[["render",me],["__scopeId","data-v-7893d6d8"]]);var we=he,ge=t(680),_e={name:"App",components:{HispeedCalculator:T,GreenCalculator:we},data:function(){return{bpm:160,sud:220,lift:240,white:460,green:280,isMessageVisible:!1}},methods:{saveToCookies(){ge.Z.set("bpm",this.bpm,{expires:30}),ge.Z.set("sud",this.sud,{expires:30}),ge.Z.set("lift",this.lift,{expires:30}),ge.Z.set("green",this.green,{expires:30}),this.showMessage()},loadFromCookies(){const e=ge.Z.get("bpm"),l=ge.Z.get("sud"),t=ge.Z.get("lift"),n=ge.Z.get("white"),a=ge.Z.get("green");void 0!==e&&(this.bpm=parseInt(e)),void 0!==l&&(this.sud=parseInt(l)),void 0!==t&&(this.lift=parseInt(t)),void 0!==n&&(this.white=parseInt(n)),void 0!==a&&(this.green=parseInt(a))},showMessage(){this.isMessageVisible=!0},closeMessage(){this.isMessageVisible&&(this.isMessageVisible=!1)}},watch:{bpm:"closeMessage",sud:"closeMessage",lift:"closeMessage",white:"closeMessage",green:"closeMessage"},mounted(){this.loadFromCookies()}};const ye=(0,z.Z)(_e,[["render",v]]);var Pe=ye;(0,n.ri)(Pe).mount("#app")}},l={};function t(n){var a=l[n];if(void 0!==a)return a.exports;var r=l[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(l,n,a,r){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,o=0;o<n.length;o++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[o])}))?n.splice(o--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var u=a();void 0!==u&&(l=u)}}return l}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var n in l)t.o(l,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={143:0};t.O.j=function(l){return 0===e[l]};var l=function(l,n){var a,r,i=n[0],s=n[1],o=n[2],u=0;if(i.some((function(l){return 0!==e[l]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(o)var c=o(t)}for(l&&l(n);u<i.length;u++)r=i[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},n=self["webpackChunkhispeed_calc"]=self["webpackChunkhispeed_calc"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(677)}));n=t.O(n)})();
//# sourceMappingURL=app.15fcffa3.js.map