(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{182:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return u}));var n=t(3),o=(t(0),t(196));const i={sidebar_label:"Versioning",title:"Versioning strategy",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/versioning.md"},s={unversionedId:"stryker4s/versioning",id:"stryker4s/versioning",isDocsHomePage:!1,title:"Versioning strategy",description:"This document describes how versioning is managed for the Stryker4s project.",source:"@site/docs/stryker4s/versioning.md",slug:"/stryker4s/versioning",permalink:"/docs/stryker4s/versioning",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/versioning.md",version:"current",sidebar_label:"Versioning",sidebar:"docs",previous:{title:"Contribute to Stryker4s",permalink:"/docs/stryker4s/contributing"}},a=[{value:"The strategy",id:"the-strategy",children:[]},{value:"Versioning",id:"versioning",children:[]}],c={toc:a};function u({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document describes how versioning is managed for the Stryker4s project."),Object(o.b)("h2",{id:"the-strategy"},"The strategy"),Object(o.b)("p",null,"We choose to have one version for the complete project. The main reason for this is because Stryker4s\nwill mainly be used as a plugin for your specific used build tool. When using one specific version\nwe will be able to make changes in the core module and release everything at once. This also makes it\neasier for us to avoid backward compatibility and versions conflict issues which would be very hard to test."),Object(o.b)("h2",{id:"versioning"},"Versioning"),Object(o.b)("p",null,"For the actual versioning, we will be applying the standard semver guidelines.\nDon't know the semver guidelines? You can find information about it ",Object(o.b)("a",{parentName:"p",href:"https://semver.org/"},"here"),"."))}u.isMDXComponent=!0},196:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return t?o.a.createElement(f,a(a({ref:r},u),{},{components:t})):o.a.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=b;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);