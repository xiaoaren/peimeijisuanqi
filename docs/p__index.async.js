"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{22417:function(te,j,a){a.r(j),a.d(j,{default:function(){return z}});var P=a(19632),H=a.n(P),N=a(5574),l=a.n(N),J=a(24969),C=a(71967),V=a(68872),S=a(14726),T=a(71114),W=a(72003),c={editTableBox:"editTableBox___p9DaB",editTable:"editTable___WvHyk",totalTable:"totalTable___M97Vf",btnBox:"btnBox___cPVze"},o=a(67294),e=a(85893);function z(){var d=["\u70ED\u91CF","\u7164\u6BD4\u4F8B","\u7070\u5206","\u6325\u53D1","\u78B3","\u53EF\u78E8","\u6C34\u5206"],ne=C.Z.Column,ae=C.Z.ColumnGroup,G=localStorage.getItem("columnList")?JSON.parse(localStorage.getItem("columnList")||""):["\u4E2D\u534E\u7164","\u9AD8\u5E73\u7164","\u9AD8\u786B\u7164","\u6CE5\u7164","\u5170\u70AD\u7164","\u8499\u7164"],I=(0,o.useState)(G),p=l()(I,2),v=p[0],R=p[1],$=(0,o.useState)({}),y=l()($,2),s=y[0],se=y[1],k=(0,o.useState)({}),B=l()(k,2),h=B[0],E=B[1],Q=(0,o.useState)(!1),M=l()(Q,2),U=M[0],m=M[1],X=(0,o.useState)(""),O=l()(X,2),g=O[0],Z=O[1],f=(0,o.useRef)(null),Y=V.ZP.useMessage(),b=l()(Y,2),K=b[0],w=b[1],q=function(){for(var n=0;n<d.length;n++){var u=d[n];if(u!="\u7164\u6BD4\u4F8B"){var r=s.\u7164\u6BD4\u4F8B,D=s[u]||{},i=0,A=0;for(var F in r){var x=r[F],L=D[F];x&&L&&(i+=x*L,A+=Number(x))}h[u]=i/A,E(JSON.parse(JSON.stringify(h)))}}},_=function(){if(g){var n=H()(v);n.push(g),localStorage.setItem("columnList",JSON.stringify(n)),R(n),m(!1),Z(""),setTimeout(function(){f.current.scrollTo(f.current.scrollWidth-f.current.offsetWidth,0)},0)}else K.open({type:"warning",content:"\u8BF7\u586B\u5199\u5185\u5BB9",duration:3})},ee=function(){m(!1)};return(0,e.jsxs)("div",{children:[w,(0,e.jsx)("div",{ref:f,className:c.editTableBox,children:(0,e.jsxs)("table",{className:c.editTable,style:{width:(v.length+2)*20+5+"vw"},border:"1",children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"\u79CD\u7C7B"}),v.map(function(t,n){return(0,e.jsx)("td",{style:{textAlign:"center"},onClick:function(){},children:t},"column_"+n)}),(0,e.jsx)("td",{style:{textAlign:"center"},children:(0,e.jsx)(S.ZP,{type:"primary",icon:(0,e.jsx)(J.Z,{}),onClick:function(){m(!0)},children:"\u6DFB\u52A0"})})]}),d.map(function(t,n){return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t}),v.map(function(u,r){return(0,e.jsx)("td",{children:(0,e.jsx)(T.Z,{bordered:!1,onChange:function(i){s[""+t]||(s[""+t]={}),s[""+t][""+r]=i.currentTarget.value,console.log(s),q()}})},"lie_"+r+"_"+n)}),(0,e.jsx)("td",{})]},"lie_"+n)})]})}),(0,e.jsxs)("table",{className:c.totalTable,children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"\u6307\u6807\u9879"}),(0,e.jsx)("td",{children:"\u914D\u540E\u6307\u6807"})]}),d.map(function(t,n){return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t}),(0,e.jsx)("td",{children:h[t]})]},"lie2_"+n)})]}),(0,e.jsx)(W.Z,{title:"\u586B\u5199\u540D\u79F0",open:U,onOk:_,onCancel:ee,children:(0,e.jsx)(T.Z,{size:"large",value:g,onBlur:function(){},onChange:function(n){Z(n.currentTarget.value)},placeholder:"\u8BF7\u586B\u5199\u6DFB\u52A0\u7684\u540D\u79F0"})}),(0,e.jsx)("div",{className:c.btnBox,children:(0,e.jsx)(S.ZP,{type:"primary",onClick:function(){localStorage.removeItem("columnList"),window.location.reload()},children:"\u8FD8\u539F\u8868\u5934"})})]})}}}]);
