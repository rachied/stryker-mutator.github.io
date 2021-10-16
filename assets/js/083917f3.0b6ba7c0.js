"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[5308],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4347:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),a=(n(7294),n(3905));const i={slug:"announcing-stryker-4-beta-mutation-switching",title:"Announcing Stryker 4.0 Beta",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},o=void 0,l={permalink:"/blog/announcing-stryker-4-beta-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",source:"@site/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",title:"Announcing Stryker 4.0 Beta",description:"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-07-13T00:00:00.000Z",formattedDate:"July 13, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:6.36,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Announcing Stryker 4.0 - Mutation Switching",permalink:"/blog/announcing-stryker-4-mutation-switching"},nextItem:{title:"Integrating Stryker.NET in your azure pipelines",permalink:"/blog/azure-pipelines-integration"}},s={authorsImageUrls:[void 0]},p=[{value:"\ud83d\udc7d Mutation switching",id:"-mutation-switching",children:[],level:2},{value:"\ud83d\udc20 Instrumentation with Babel",id:"-instrumentation-with-babel",children:[],level:2},{value:"\ud83d\udc77\u200d\u200d Build command support",id:"-build-command-support",children:[],level:2},{value:"\u2705 Checker plugin",id:"-checker-plugin",children:[],level:2},{value:"\u2614 More coverage analysis",id:"-more-coverage-analysis",children:[],level:2},{value:"\ud83e\uddf9 Other changes",id:"-other-changes",children:[],level:2},{value:"\ud83d\udd2e What&#39;s next",id:"-whats-next",children:[],level:2}],u={toc:p};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),(0,a.kt)("p",null,'This beta is a huge milestone because it means a fundamental shift in the way Stryker works internally. It now uses "Mutation switching", a technique that can improve performance.'),(0,a.kt)("p",null,"This, unfortunately, couldn't be done without breaking changes. These changes are mostly limited to the internal plugin API's except for the changes highlighted in this blog article."),(0,a.kt)("p",null,"To get started using the beta, update your Stryker dependencies using npm or yarn."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/core@next\n")),(0,a.kt)("p",null,"Don't forget to update Stryker plugins. For example, when using mocha:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/mocha-runner@next\n")),(0,a.kt)("p",null,"This beta is released early, in order to get community feedback. We've not yet updated the docs with the changes specified in this blog article. At this moment, the jest-runner and the command test runner ",(0,a.kt)("em",{parentName:"p"},"still need to be migrated and will not work as expected"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: Since beta version ",(0,a.kt)("inlineCode",{parentName:"em"},"4.0.0-beta.2"),", both the command test runner and the jest test runner are supported. However, the command test runner does have some ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/stryker-mutator/stryker-js/pull/2345"},"limitations"))),(0,a.kt)("p",null,"If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at ",(0,a.kt)("a",{parentName:"p",href:"/example"},"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to make sure your code is thoroughly tested."),(0,a.kt)("h2",{id:"-mutation-switching"},"\ud83d\udc7d Mutation switching"),(0,a.kt)("p",null,"Mutation switching is a way to simultaneously put all mutants into your code while making sure only one mutant is active at the same time. Let's take a look at an example."),(0,a.kt)("p",null,"Let's take this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  return a + b;\n}\n")),(0,a.kt)("p",null,"When you feed this code to Stryker, it will generate two mutants:"),(0,a.kt)("p",null,"\ud83d\udc7d ",(0,a.kt)("inlineCode",{parentName:"p"},"function add(a, b) { return a - b }"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udc7e ",(0,a.kt)("inlineCode",{parentName:"p"},"function add(a, b) {}")),(0,a.kt)("p",null,"Previous versions of Stryker would make two copies of the source code. One for each mutant. This changes with Stryker 4.0. Both mutants will be placed into the code ",(0,a.kt)("em",{parentName:"p"},"at the same time"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  if (global.activeMutant === 0) {\n  } else {\n    return global.activeMutant === 1 ? a - b : a + b;\n  }\n}\n")),(0,a.kt)("p",null,"(simplified example)"),(0,a.kt)("p",null,"Stryker can now run your tests twice while changing which mutant is active in the process. Mutation switching can improve performance dramatically, depending on the type of project. For example, when you bundle your code with webpack before running the tests, then webpack only needs to run once. The same goes for TypeScript projects where you compile your code before testing."),(0,a.kt)("h2",{id:"-instrumentation-with-babel"},"\ud83d\udc20 Instrumentation with Babel"),(0,a.kt)("p",null,"Mutation Switching is a significant performance improvement, but it means that Stryker is required to perform some complex transformations of the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"Abstract Syntax Tree (AST)"),"."),(0,a.kt)("p",null,"Doing this ",(0,a.kt)("em",{parentName:"p"},"instrumentation")," means visiting each node of the AST to collect and place mutants. This instrumentation is implemented with the ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," parser and now ships with ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/core"),". We're taking advantage of Babel 7's support to parse and print any type of JavaScript, including TypeScript code."),(0,a.kt)("p",null,"This means that it is ",(0,a.kt)("em",{parentName:"p"},"no longer needed to configure the ",(0,a.kt)("inlineCode",{parentName:"em"},"mutator"))," in your Stryker configuration. Stryker will always use the new mutation instrumenter. It supports TypeScript, JavaScript, Flow, and JSX. It even supports mutating script tags in ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".vue")," files. It also picks up your babel configuration out-of-the-box, so no custom configuration is needed."),(0,a.kt)("h2",{id:"-build-command-support"},"\ud83d\udc77\u200d\u200d Build command support"),(0,a.kt)("p",null,"With mutation switching, all mutants are placed in the code at the same time. This also means that it only has to be built (transpiled or bundled) once."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: not all projects need building. Simple projects might deploy JS code as is, or the test runner might take care of this step for you. For example, running your tests with ",(0,a.kt)("inlineCode",{parentName:"em"},"ts-node")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"babel/register")," or running it with ",(0,a.kt)("inlineCode",{parentName:"em"},"Jest")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"Karma")," with the ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/webpack-contrib/karma-webpack"},"webpack plugin"),".")),(0,a.kt)("p",null,"Before mutation switching, this would be the job of the ",(0,a.kt)("inlineCode",{parentName:"p"},"transpiler")," plugin type. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"transpiler: ['babel']")," would mean that all files would be transpiled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/babel-transpiler")," plugin. It was a bit complex to create a transpiler plugin, and since every mutant needed to transpiled, it was slow. Every transpiler/bundler needed its a transpiler plugin."),(0,a.kt)("p",null,"Stryker 4.0 will no longer support the ",(0,a.kt)("inlineCode",{parentName:"p"},"transpiler")," plugins. Instead, it allows you to configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"buildCommand")," yourself. A build command can be any command. Some examples include ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc -b")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack --config webpack.config"),". This means that the available plugins do not limit you."),(0,a.kt)("p",null,"The following dependencies are therefore no longer needed, and you can simply remove them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/babel-transpiler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/webpack-transpiler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/typescript"))),(0,a.kt)("h2",{id:"-checker-plugin"},"\u2705 Checker plugin"),(0,a.kt)("p",null,"You might know that the old ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript")," transpiler not only transpiled your code but also filtered out mutants that resulted in type errors, marking them with ",(0,a.kt)("inlineCode",{parentName:"p"},"compile error")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"transpile error"),') in your report. Mutants with this status are marked as "invalid" and do not influence your mutation score.'),(0,a.kt)("p",null,"Since Stryker 4.0 ",(0,a.kt)("a",{parentName:"p",href:"#build-command-support"},"removes the transpiler plugin type")," we needed a new plugin that can perform this type checking. Introducing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Checker")," plugin type. In the Stryker 4 release, we will include one such checkers, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker"),"."),(0,a.kt)("p",null,"Install it with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @stryker-mutator/typescript-checker@next")),(0,a.kt)("p",null,"Configure it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),(0,a.kt)("p",null,'(tsconfig.json is the default setting for "tsconfigFile").'),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/epic/mutation-switching/packages/typescript-checker#readme"},"the TypeScript checker's readme for more details")),(0,a.kt)("h2",{id:"-more-coverage-analysis"},"\u2614 More coverage analysis"),(0,a.kt)("p",null,"Coverage analysis is a way to speed up mutation testing. Stryker always came with three flavors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"off": No coverage analysis'),(0,a.kt)("li",{parentName:"ul"},'"all": Coverage is measured for the entire test suite. Mutants that are not covered by even one test are marked with "NoCoverage"'),(0,a.kt)("li",{parentName:"ul"},'"perTest": Coverage is measured per test. Only tests that cover a specific mutant are run for that mutant.')),(0,a.kt)("p",null,'Running with "perTest" coverage yields a significant performance improvement (usually between 40% and 60%). However, most projects were unable to take advantage of it because Stryker relied on a complex mechanism of ',(0,a.kt)("a",{parentName:"p",href:"https://istanbul.js.org/"},"istanbul")," code coverage combined with hooks in the test runner. It only worked in scenarios without complicated transpiling or bundling."),(0,a.kt)("p",null,"With the introduction of mutation switching, the instrumenter is responsible for inserting coverage instrumentation into the code. This means that Stryker can measure mutant coverage, ",(0,a.kt)("em",{parentName:"p"},"regardless of which bundler/transpiler you are using"),". The only requirement is that Stryker needs to be able to hook into the test runner. This is currently supported for ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/mocha-runner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jasmine-runner"),". Support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/2316"},(0,a.kt)("inlineCode",{parentName:"a"},"@stryker-mutator/jest-runner")," is planned"),"."),(0,a.kt)("h2",{id:"-other-changes"},"\ud83e\uddf9 Other changes"),(0,a.kt)("p",null,"We also decided to take this opportunity to improve the maintainability of the Stryker code further. That's why we've decided to drop support for two more plugin types."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"TestFramework")," plugin type is removed",(0,a.kt)("br",{parentName:"li"}),"A test framework plugin used to be responsible for allowing Stryker to hook into the test framework to implement test filtering and perTest coverage analysis. In practice, this was often tightly coupled to the test runner itself. That's why we've decided to drop this plugin type and make the Test Runner plugin responsible for hooking into the test framework directly. Therefore the following dependencies can simply be removed: ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/mocha-framework")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/jasmine-framework"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"OptionsEditor")," plugin type is removed",(0,a.kt)("br",{parentName:"li"}),"Options editors provided a way for plugins to edit the Stryker options directly. In practice, this was used to load plugin-specific options and attach them to the StrykerOptions object for later use. Plugins are now expected to load their options in their life cycle.")),(0,a.kt)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next"),(0,a.kt)("p",null,"We'll be focussing on getting Stryker 4.0 released. For that to happen, we would appreciate your feedback. Feel free to report any ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/new"},"issues")," you have with this beta release."))}c.isMDXComponent=!0}}]);