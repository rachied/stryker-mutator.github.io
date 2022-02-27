"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[301],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2265:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return c}});var n=a(7462),r=(a(7294),a(3905));const i={slug:"typescript-coverage-analysis-support",title:"TypeScript coverage analysis support",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},o=void 0,s={permalink:"/blog/typescript-coverage-analysis-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-01-10-typescript-coverage-analysis-support.md",source:"@site/blog/2018-01-10-typescript-coverage-analysis-support.md",title:"TypeScript coverage analysis support",description:"Let's start this new year strong. Stryker 0.18 adds coverage analysis support for transpilers, starting with the TypeScript transpiler.",date:"2018-01-10T00:00:00.000Z",formattedDate:"January 10, 2018",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:4.62,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"typescript-coverage-analysis-support",title:"TypeScript coverage analysis support",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},prevItem:{title:"Webpack support is here",permalink:"/blog/webpack-support"},nextItem:{title:"Stryker adds Babel support",permalink:"/blog/babel-support"}},l={authorsImageUrls:[void 0]},u=[{value:"Coverage analysis",id:"coverage-analysis",level:2},{value:"Coverage analysis: &#39;all&#39;",id:"coverage-analysis-all",level:3},{value:"Coverage analysis: &#39;perTest&#39;",id:"coverage-analysis-pertest",level:3},{value:"The challenge with transpiled code",id:"the-challenge-with-transpiled-code",level:2},{value:"Bridging the gap",id:"bridging-the-gap",level:2},{value:"Show me the numbers",id:"show-me-the-numbers",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's start this new year strong. Stryker 0.18 adds coverage analysis support for transpilers, starting with the TypeScript transpiler."),(0,r.kt)("p",null,"This article first explains the basics of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_coverage"},"(code) coverage")," analysis for mutation testing in general, before focussing on the new feature."),(0,r.kt)("p",null,"See the original PR for even more details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/559"},"feat(coverage analysis): Support transpiled code #559"))),(0,r.kt)("h2",{id:"coverage-analysis"},"Coverage analysis"),(0,r.kt)("p",null,"It might not sound particularly sexy, but (code) coverage analysis is an important feature of any mutation testing framework.\nMutation testing takes a long time. The most effective way to save time, is to do less work."),(0,r.kt)("p",null,"Take this small piece of JavaScript code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Source code:\nfunction sum(a, b) {\n  return a + b;\n}\n\nfunction product(a, b) {\n  return a * b;\n}\n\nfunction difference(a, b) {\n  return a - b;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// The tests:\ndescribe('Math', () => {\n  it('should give 3 for sum(1, 2)', () => {\n    expect(sum(1, 2)).to.eq(3);\n  });\n\n  it('should give 12 for product(3, 4)', () => {\n    expect(product(3, 4)).to.eq(12);\n  });\n});\n")),(0,r.kt)("h3",{id:"coverage-analysis-all"},"Coverage analysis: 'all'"),(0,r.kt)("p",null,"As you can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"product")," functions are reasonably well tested, but the the ",(0,r.kt)("inlineCode",{parentName:"p"},"difference")," function isn't tested at all."),(0,r.kt)("p",null,"For example: what would the result be for the mutant that changes ",(0,r.kt)("inlineCode",{parentName:"p"},"a - b")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"a + b"),"? It doesn't even make sense to test it,\nanyone can see it will survive anyway."),(0,r.kt)("p",null,"If you set coverage analysis to ",(0,r.kt)("inlineCode",{parentName:"p"},"'all'")," inside your stryker.conf.js file, this is exactly what happens. Stryker will automatically\ncollect code coverage results during the initial test run phase","*",". If a mutant mutates code that is not tested,\nit will be marked as ",(0,r.kt)("em",{parentName:"p"},"'no coverage'")," (which translates to ",(0,r.kt)("em",{parentName:"p"},"survived")," during the score calculation) without ever testing it.\nThis can safe minutes on larger code bases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Coverage analysis is not supported for Jest yet.")),(0,r.kt)("h3",{id:"coverage-analysis-pertest"},"Coverage analysis: 'perTest'"),(0,r.kt)("p",null,"Nice! We're already saving time by analyzing a simple code coverage result. But if we take a closer look, we see that we can save even more time."),(0,r.kt)("p",null,"Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"product")," function for example: we want to test the mutant that changes ",(0,r.kt)("inlineCode",{parentName:"p"},"a * b")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"a / b"),". We see that it is covered by a test, so\nwe cannot skip the actual testing of this mutant. However, we can save time by only running the one test that covers this mutant."),(0,r.kt)("p",null,"If you set coverage analysis to ",(0,r.kt)("inlineCode",{parentName:"p"},"'perTest'")," inside your stryker.conf.js file, this is exactly what happens. Stryker will automatically\ncollect code coverage results ",(0,r.kt)("em",{parentName:"p"},"per test")," during the initial test run phase. Next, it will select only those tests that actually cover\na mutant to run for that mutant (again, not supported for Jest yet). This might seem like a small improvements,\nbut in big projects with 100s of tests, it quickly adds up to minutes."),(0,r.kt)("p",null,"It is important to realize that this does not influence the quality of the resulting report at all. It simply less work to reach the same conclusion."),(0,r.kt)("h2",{id:"the-challenge-with-transpiled-code"},"The challenge with transpiled code"),(0,r.kt)("p",null,"Now that we have a firm understanding of coverage analysis and why it is important, lets dive into the new stuff.\nAfter all, coverage analysis is nothing new for Stryker, it has been there for a long time.\nHowever, it gets more complicated when you add a transpiler to the (delicious) mutation testing mix."),(0,r.kt)("p",null,"Please read ",(0,r.kt)("a",{parentName:"p",href:"/blog/typescript-support"},"our blog article on transpiling code")," if your interested in the details on how transpilers are implemented in Stryker.\nFor now it is is enough that you understand that Stryker mutates your ",(0,r.kt)("em",{parentName:"p"},"source")," code, while running the ",(0,r.kt)("em",{parentName:"p"},"transpiled")," code in the test runner.\nAny coverage analysis we collect will only tell us about the ",(0,r.kt)("em",{parentName:"p"},"transpiled")," covered code, while the mutants only work on your ",(0,r.kt)("em",{parentName:"p"},"source")," code."),(0,r.kt)("p",null,"Take this small piece of TypeScript code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// TypeScript: before transpiling\nclass Math {\n  static sum(a: number, b: number) {\n    return a + b;\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// JavaScript: after transpiling (target: es5)\nvar Math = /** @class */ (function () {\n  function Math() {}\n  Math.sum = function (a, b) {\n    return a + b;\n  };\n  return Math;\n})();\n")),(0,r.kt)("p",null,"Even with this small example, you can already see that the location of ",(0,r.kt)("inlineCode",{parentName:"p"},"a + b")," in source code vs transpiled code is totally different.\nWe need to translate the location of a mutant to the actual transpiled location somehow."),(0,r.kt)("h2",{id:"bridging-the-gap"},"Bridging the gap"),(0,r.kt)("p",null,"Luckily, any respectable transpiler can produce ",(0,r.kt)("a",{parentName:"p",href:"https://www.thecssninja.com/javascript/source-mapping"},"source maps"),".\nThey are used by code editors and browsers to debug source code while executing transpiled/minified/bundled code.\nAnd, as of now, this is what is used by Stryker to calculate the transpiled location."),(0,r.kt)("p",null,"So if you select coverage analysis 'all' or 'perTest' while transpiling using typescript, the stryker-typescript transpiler\nplugin will produce source maps during the initial test run. Stryker will use those source maps to translate the transpiled location\nof all mutants."),(0,r.kt)("h2",{id:"show-me-the-numbers"},"Show me the numbers"),(0,r.kt)("p",null,"Unfortunately, we do not have a good performance testing mechanism for Stryker yet (PRs and ideas are welcome!),\nbut the results for mutation testing on Stryker itself are very promising, shaving off about 6 minutes for single run,\nabout a 50% performance increase."),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Next up we'll work on getting this performance increase to all supported transpilers.\nWe're also working behind the scenes on a transpiler plugin for webpack. Which you can also expect\nwithin the next couple of weeks."),(0,r.kt)("p",null,"In the meantime: have fun with this feature. Are you using it? Please let is know what you think! We're always\ninterested to know what we can improve further."),(0,r.kt)("p",null,"Have fun."))}c.isMDXComponent=!0}}]);