(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{682:function(e,a,o){"use strict";o.r(a);var t=o(0),r=o.n(t),n=o(150),i=o(108),c=o(670),d=o(671),l=o(749),p=o(813);a.default=function(){var e=Object(i.useFirebase)(),a=Object(n.c)((function(e){return e.firebase.auth})),o=Object(l.a)(a);return r.a.createElement(d.a,null,r.a.createElement(c.a,{title:"Mi cuenta"}),r.a.createElement("p",null,o),r.a.createElement("p",null,"Work in progress"),r.a.createElement(p.a,{onClick:function(){return e.logout()},variant:"contained",color:"secondary",size:"large"},"Cerrar sesión"))}},749:function(e,a,o){"use strict";a.a=function(e){if(e)return e.isAnonymous?"Anonimo":e.phoneNumber?e.phoneNumber:e.email}},813:function(e,a,o){"use strict";var t=o(9),r=o(1),n=o(0),i=o.n(n),c=(o(16),o(19)),d=o(26),l=o(81),p=o(409),s=o(49),b=i.a.forwardRef((function(e,a){var o=e.children,n=e.classes,d=e.className,l=e.color,b=void 0===l?"default":l,u=e.component,m=void 0===u?"button":u,h=e.disabled,g=void 0!==h&&h,y=e.disableFocusRipple,x=void 0!==y&&y,f=e.endIcon,v=e.focusVisibleClassName,S=e.fullWidth,k=void 0!==S&&S,C=e.size,z=void 0===C?"medium":C,O=e.startIcon,j=e.type,w=void 0===j?"button":j,R=e.variant,I=void 0===R?"text":R,N=Object(t.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),E=O&&i.a.createElement("span",{className:Object(c.a)(n.startIcon,n["iconSize".concat(Object(s.a)(z))])},O),T=f&&i.a.createElement("span",{className:Object(c.a)(n.endIcon,n["iconSize".concat(Object(s.a)(z))])},f);return i.a.createElement(p.a,Object(r.a)({className:Object(c.a)(n.root,n[I],d,"inherit"===b?n.colorInherit:"default"!==b&&n["".concat(I).concat(Object(s.a)(b))],"medium"!==z&&[n["".concat(I,"Size").concat(Object(s.a)(z))],n["size".concat(Object(s.a)(z))]],g&&n.disabled,k&&n.fullWidth),component:m,disabled:g,focusRipple:!x,focusVisibleClassName:Object(c.a)(n.focusVisible,v),ref:a,type:w},N),i.a.createElement("span",{className:n.label},E,o,T))}));a.a=Object(d.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4},endIcon:{display:"inherit",marginRight:-4,marginLeft:8},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(b)}}]);
//# sourceMappingURL=component---src-pages-me-js-6c8675a8bb903baaceff.js.map