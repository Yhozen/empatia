(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{648:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),c=t(642),i=t(668);n.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{title:"Authentication"}),u.a.createElement(i.a,null))}},668:function(e,n,t){"use strict";var a=t(0),u=t.n(a),c=t(111),i=t(118),l=function(){return u.a.createElement("div",null,"Loading...")},r=u.a.lazy((function(){return t.e(9).then(t.t.bind(null,676,7))}));n.a=function(){var e=Object(a.useState)(!1),n=e[0],s=e[1],o=Object(c.useFirebase)(),f="undefined"==typeof window;return Object(a.useEffect)((function(){t.e(10).then(t.bind(null,677)).then((function(e){s(e.default)}))}),[]),u.a.createElement(u.a.Fragment,null,!f&&n&&u.a.createElement(u.a.Suspense,{fallback:u.a.createElement(l,null)},u.a.createElement(r,{uiConfig:{signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:function(){return Object(i.navigate)("/")}},signInOptions:n},firebaseAuth:o.auth()})))}}}]);
//# sourceMappingURL=component---src-pages-chat-js-14093b1251f840962b13.js.map