(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{682:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(808);t.default=function(){return r.a.createElement(o.a,{type:"offered"})}},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(41),a(5),a(4),a(1),a(7),a(16),a(14);function n(e,t){return e===t}function r(e,t,a){if(null===t||null===a||t.length!==a.length)return!1;for(var n=t.length,r=0;r<n;r++)if(!e(t[r],a[r]))return!1;return!0}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var a=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+a+"]")}return t}var i=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=0,c=n.pop(),l=o(n),s=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(a)),u=e((function(){for(var e=[],t=l.length,a=0;a<t;a++)e.push(l[a].apply(null,arguments));return s.apply(null,e)}));return u.resultFunc=c,u.dependencies=l,u.recomputations=function(){return i},u.resetRecomputations=function(){return i=0},u}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a=null,o=null;return function(){return r(t,a,arguments)||(o=e.apply(null,arguments)),a=arguments,o}}))},806:function(e,t,a){"use strict";var n=a(2),r=a(13),o=a(0),i=a.n(o),c=a(25),l=(a(17),a(33)),s=i.a.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,u=e.disableAnimate,d=void 0!==u&&u,m=e.height,f=e.variant,p=void 0===f?"text":f,b=e.width,v=Object(r.a)(e,["classes","className","component","disableAnimate","height","variant","width"]);return i.a.createElement(s,Object(n.a)({ref:t,className:Object(c.a)(a.root,a[p],o,!d&&a.animate)},v,{style:Object(n.a)({width:b,height:m},v.style)}))}));t.a=Object(l.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:"0.8em",marginBottom:"0.8em",borderRadius:e.shape.borderRadius},rect:{},circle:{borderRadius:"50%"},animate:{animation:"$animate 1.5s ease-in-out infinite"},"@keyframes animate":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}}}}),{name:"MuiSkeleton"})(s)},808:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(149),i=a(107),c=a(733),l=a(2),s=a(13),u=(a(17),a(25)),d=a(701),m=a(33),f=r.a.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.raised,i=void 0!==o&&o,c=Object(s.a)(e,["classes","className","raised"]);return r.a.createElement(d.a,Object(l.a)({className:Object(u.a)(a.root,n),elevation:i?8:1,ref:t},c))})),p=Object(m.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f),b=r.a.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,i=void 0===o?"div":o,c=Object(s.a)(e,["classes","className","component"]);return r.a.createElement(i,Object(l.a)({className:Object(u.a)(a.root,n),ref:t},c))})),v=Object(m.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(b),h=a(704),g=a(669),y=a(668),j=(a(266),a(269)),O=a(806),w=a(699),E=Object(w.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},card:{minWidth:275,margin:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})),N=Object(c.a)((function(e){return e.firestore.ordered.detailedNeed}),(function(e){return e&&1===e.length?e[0]:null}));t.a=function(e){var t=e.type,a=E(),c=Object(o.c)(j.a);Object(i.useFirestoreConnect)([{collection:t,doc:c,storeAs:"detailedNeed"}]);var l=Object(o.c)(N),s="needed"===t?{title:"Necesito: ",subtitle:"Se necesita"}:{title:"Ofrezco: ",subtitle:"Se ofrece"};return Object(i.isLoaded)(l)?(Object(n.useEffect)((function(){Object(i.isEmpty)(l)&&navigate("./"+t+"-listed")}),[l]),r.a.createElement(g.a,null,r.a.createElement(y.a,{title:s.title+l.title}),r.a.createElement(p,{className:a.card},r.a.createElement(v,null,r.a.createElement(h.a,{className:a.title,color:"textSecondary",gutterBottom:!0},s.subtitle),r.a.createElement(h.a,{variant:"h5",component:"h2"},l.title),r.a.createElement(h.a,{className:a.pos,color:"textSecondary"},l.location," | ",l.displayName),r.a.createElement(h.a,{variant:"body2",component:"p"},l.desc))))):r.a.createElement(O.a,{variant:"rect",width:210,height:118})}}}]);
//# sourceMappingURL=component---src-pages-offered-detail-js-525c46d69d5626682b2d.js.map