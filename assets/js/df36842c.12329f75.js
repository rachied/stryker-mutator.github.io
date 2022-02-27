"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[271],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},182:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=(r(7294),r(3905));const i={title:"Introduction",sidebar_position:10,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/introduction.md"},a=void 0,c={unversionedId:"stryker-net/technical-reference/introduction",id:"stryker-net/technical-reference/introduction",title:"Introduction",description:"Welcome to the Stryker.NET technical references! In this wiki you will find background knowledge about Stryker.NET and some technical details.",source:"@site/docs/stryker-net/technical-reference/introduction.md",sourceDirName:"stryker-net/technical-reference",slug:"/stryker-net/technical-reference/introduction",permalink:"/docs/stryker-net/technical-reference/introduction",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Introduction",sidebar_position:10,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/introduction.md"},sidebar:"docs",previous:{title:"Migration guide",permalink:"/docs/stryker-net/migration-guide"},next:{title:"Research",permalink:"/docs/stryker-net/technical-reference/research"}},l={},u=[{value:"Why Stryker.NET",id:"why-strykernet",level:3},{value:"Goals",id:"goals",level:3},{value:"Background",id:"background",level:3}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the Stryker.NET technical references! In this wiki you will find background knowledge about Stryker.NET and some technical details."),(0,o.kt)("h3",{id:"why-strykernet"},"Why Stryker.NET"),(0,o.kt)("p",null,"Before Stryker moved to .NET there already were some mutation testing tools available for mutantion testing C# code. None seemed to be able to mutate .NET Core projects. With Stryker.NET we wanted to broaden the mutation test landscape. "),(0,o.kt)("h3",{id:"goals"},"Goals"),(0,o.kt)("p",null,"Our long term goals are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offer broad support for .NET projects",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},".NET Framework 4.6+ "),(0,o.kt)("li",{parentName:"ul"},".NET Core 1.0+"),(0,o.kt)("li",{parentName:"ul"},".NET 5+"),(0,o.kt)("li",{parentName:"ul"},"C#"),(0,o.kt)("li",{parentName:"ul"},"F#"))),(0,o.kt)("li",{parentName:"ul"},"Be a blazing fast mutation test framework"),(0,o.kt)("li",{parentName:"ul"},"Have the most detailed reporting experience for tracking down bugs")),(0,o.kt)("h3",{id:"background"},"Background"),(0,o.kt)("p",null,"Stryker.NET is the result of an internship and became open-source in July 2018."))}d.isMDXComponent=!0}}]);