(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),a=(r(0),r(196));const o={slug:"announcing-stryker-2-0",title:"Announcing Stryker 2.0",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},i={permalink:"/blog/announcing-stryker-2-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-05-17-announcing-stryker-2-0.md",source:"@site/blog/2019-05-17-announcing-stryker-2-0.md",description:"A new major version of Stryker for JavaScript and TypeScript has been released: version 2.0.0.",date:"2019-05-17T00:00:00.000Z",formattedDate:"May 17, 2019",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Announcing Stryker 2.0",readingTime:2.08,truncated:!0,prevItem:{title:"Host your mutation testing report",permalink:"/blog/stryker-dashboard-host-your-mutation-testing-report"},nextItem:{title:"Announcing Stryker.NET 0.10 with .NET Framework support",permalink:"/blog/announcing-dotnet-framework-support"}},s=[{value:"\ud83d\ude80 Migration",id:"-migration",children:[]},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",children:[]},{value:"\u2728 What&#39;s new",id:"-whats-new",children:[]},{value:"\ud83d\udc74 Deprecations",id:"-deprecations",children:[]},{value:"\ud83d\udcc5 Release schedule",id:"-release-schedule",children:[]}],l={toc:s};function c({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A new major version of Stryker for JavaScript and TypeScript has been released: version 2.0.0.\nThis blog post will cover some of the changes. For a full list of changes, please read ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/CHANGELOG.md#200-2019-05-17"},"our changelog"),"."),Object(a.b)("p",null,"If you run into any issues using the latest version of Stryker, please let us know!"),Object(a.b)("h2",{id:"-migration"},"\ud83d\ude80 Migration"),Object(a.b)("p",null,"Migrating to the latest major version is easy! Just update all ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator")," dependencies to at least version 2.0.0. If you are still using version 0.x.x, then please look at ",Object(a.b)("a",{parentName:"p",href:"https://stryker-mutator.io/blog/2019-02-13/announcing-stryker-1-0"},"our blog post regarding stryker v1"),"."),Object(a.b)("p",null,"If you're new to Stryker, please see ",Object(a.b)("a",{parentName:"p",href:"/stryker/quickstart"},"our quickstart"),". Have fun with mutation testing!"),Object(a.b)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"),Object(a.b)("p",null,"This major release comes with some breaking changes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"NodeJS version 8 or higher is now required to run Stryker"),Object(a.b)("li",{parentName:"ol"},"The code of Stryker is now es2017 code instead of es5")),Object(a.b)("h2",{id:"-whats-new"},"\u2728 What's new"),Object(a.b)("p",null,"Not a big list of new features this time around. Mainly housekeeping and other optimizations. Here you'll find a list of small improvements."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Prettier has been removed as a direct dependency. We use prettier when initially writing your stryker.conf.js to disk (with ",Object(a.b)("inlineCode",{parentName:"li"},"stryker init"),").\nWe now run prettier using the npx command instead of packaging it with Stryker, keeping Stryker lean and mean."),Object(a.b)("li",{parentName:"ul"},"We've updated our source-map dependency to enable lazy loading. This ensures that coverage data is only mapped when (and if) it's required."),Object(a.b)("li",{parentName:"ul"},"VueJS files are only mutated when they contain ",Object(a.b)("inlineCode",{parentName:"li"},"<script>")," blocks.")),Object(a.b)("h2",{id:"-deprecations"},"\ud83d\udc74 Deprecations"),Object(a.b)("p",null,"Since Stryker v1, we've introduced a deprecation policy. This means that we'll support features for one major release after we've deprecated them.\nThis is a (small) list of stuff we've deprecated. You'll also get a warning if you still use them in your setup."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The use of mocha version 5 and below is deprecated. This is mainly because of big changes the way you configure mocha.\nPlease upgrade to mocha 6 or above. See ",Object(a.b)("a",{parentName:"li",href:"https://github.com/mochajs/mocha/blob/master/CHANGELOG.md#600--2019-02-18"},"their changelog")," for more information about upgrading.\nSupport for mocha version 5 and below will be removed in the future (with Stryker v3 probably)."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"onScoreCalculated")," internal reporter event is deprecated. Please use ",Object(a.b)("inlineCode",{parentName:"li"},"onMutationTestReportReady")," and calculate the score using ",Object(a.b)("a",{parentName:"li",href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-metrics#readme"},"mutation-testing-metrics"),".\nAll reporters maintained by the Stryker team are already migrated.")),Object(a.b)("h2",{id:"-release-schedule"},"\ud83d\udcc5 Release schedule"),Object(a.b)("p",null,"We'll keep improving Stryker by fixing nasty bugs, improving code (and test) quality and by adding new features.\nThe next major release of Stryker will probably be at the start of 2020 due to the LTS support of NodeJS version 8 ending."))}c.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);