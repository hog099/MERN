_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"5XSU":function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),c=t("ODXe"),o=t("q1tI"),a=t.n(o),i=t("g4pe"),l=t.n(i),s=t("YFqc"),u=t.n(s),f=t("WNll"),d=t("S/Bg"),p=t.n(d);n.default=function(){var e=a.a.useState(!1),n=Object(c.a)(e,2),t=n[0],o=n[1],i=a.a.useState(null),s=Object(c.a)(i,2),d=s[0],v=s[1];a.a.useEffect((function(){t||(h(),o(!0))}),[t]);var h=function(){f.a.get("/api/v1/home").then((function(e){v(e.data)})).catch((function(e){console.log("Error!",e)}))};return Object(r.jsxs)("div",{className:p.a.container,children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)("title",{children:"MERN | NextJS"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{className:p.a.main,children:[Object(r.jsx)("h5",{className:p.a.title,children:"Home Client"}),Object(r.jsx)(u.a,{href:"/page02",children:Object(r.jsx)("a",{rel:"noreferrer",className:p.a.buttonlink,children:Object(r.jsx)("p",{children:"P\xe1gina 02"})})}),Object(r.jsx)("div",{children:d&&d.map((function(e,n){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:e.name})},n)}))})]})]})}},"70uq":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t("5XSU")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var o=c(t("q1tI")),a=t("elyg"),i=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),c=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,j=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var g=o.Children.only(v),O=g&&"object"===typeof g&&g.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),E=r(y,2),_=E[0],w=E[1],x=o.default.useCallback((function(e){_(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,_]);(0,o.useEffect)((function(){var e=w&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,c=s[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(t,d,p,{locale:r})}),[p,d,w,m,n,t]);var N={ref:x,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:o,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,b,j,m)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof m?m:t&&t.locale,M=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);N.href=M||(0,a.addBasePath)((0,a.addLocale)(p,L,t&&t.defaultLocale))}return o.default.cloneElement(g,N)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=(0,c.useRef)(),s=(0,c.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=t("q1tI"),o=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["70uq",0,1,2,3]]]);