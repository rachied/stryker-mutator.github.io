(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=(n(0),n(196));const i={slug:"announcing-stryker-4-beta-mutation-switching",title:"Announcing Stryker 4.0 Beta",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},o={permalink:"/blog/announcing-stryker-4-beta-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",source:"@site/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",description:"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-07-13T00:00:00.000Z",formattedDate:"July 13, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Announcing Stryker 4.0 Beta",readingTime:6.36,truncated:!0,prevItem:{title:"Announcing Stryker 4.0 - Mutation Switching",permalink:"/blog/announcing-stryker-4-mutation-switching"},nextItem:{title:"Integrating Stryker.NET in your azure pipelines",permalink:"/blog/azure-pipelines-integration"}},l=[{value:"\ud83d\udc7d Mutation switching",id:"-mutation-switching",children:[]},{value:"\ud83d\udc20 Instrumentation with Babel",id:"-instrumentation-with-babel",children:[]},{value:"\ud83d\udc77\u200d\u200d Build command support",id:"-build-command-support",children:[]},{value:"\u2705 Checker plugin",id:"-checker-plugin",children:[]},{value:"\u2614 More coverage analysis",id:"-more-coverage-analysis",children:[]},{value:"\ud83e\uddf9 Other changes",id:"\ud83e\uddf9-other-changes",children:[]},{value:"\ud83d\udd2e What&#39;s next",id:"-whats-next",children:[]}],s={toc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),Object(a.b)("p",null,'This beta is a huge milestone because it means a fundamental shift in the way Stryker works internally. It now uses "Mutation switching", a technique that can improve performance.'),Object(a.b)("p",null,"This, unfortunately, couldn't be done without breaking changes. These changes are mostly limited to the internal plugin API's except for the changes highlighted in this blog article."),Object(a.b)("p",null,"To get started using the beta, update your Stryker dependencies using npm or yarn."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/core@next\n")),Object(a.b)("p",null,"Don't forget to update Stryker plugins. For example, when using mocha:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/mocha-runner@next\n")),Object(a.b)("p",null,"This beta is released early, in order to get community feedback. We've not yet updated the docs with the changes specified in this blog article. At this moment, the jest-runner and the command test runner ",Object(a.b)("em",{parentName:"p"},"still need to be migrated and will not work as expected"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: Since beta version ",Object(a.b)("inlineCode",{parentName:"em"},"4.0.0-beta.2"),", both the command test runner and the jest test runner are supported. However, the command test runner does have some ",Object(a.b)("a",{parentName:"em",href:"https://github.com/stryker-mutator/stryker/pull/2345"},"limitations"))),Object(a.b)("p",null,"If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at ",Object(a.b)("a",{parentName:"p",href:"/example"},"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to make sure your code is thoroughly tested."),Object(a.b)("h2",{id:"-mutation-switching"},"\ud83d\udc7d Mutation switching"),Object(a.b)("p",null,"Mutation switching is a way to simultaneously put all mutants into your code while making sure only one mutant is active at the same time. Let's take a look at an example."),Object(a.b)("p",null,"Let's take this."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  return a + b;\n}\n")),Object(a.b)("p",null,"When you feed this code to Stryker, it will generate two mutants:"),Object(a.b)("p",null,"\ud83d\udc7d ",Object(a.b)("inlineCode",{parentName:"p"},"function add(a, b) { return a - b }"),Object(a.b)("br",{parentName:"p"}),"\n","\ud83d\udc7e ",Object(a.b)("inlineCode",{parentName:"p"},"function add(a, b) {}")),Object(a.b)("p",null,"Previous versions of Stryker would make two copies of the source code. One for each mutant. This changes with Stryker 4.0. Both mutants will be placed into the code ",Object(a.b)("em",{parentName:"p"},"at the same time"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  if (global.activeMutant === 0) {\n  } else {\n    return global.activeMutant === 1 ? a - b : a + b;\n  }\n}\n")),Object(a.b)("p",null,"(simplified example)"),Object(a.b)("p",null,"Stryker can now run your tests twice while changing which mutant is active in the process. Mutation switching can improve performance dramatically, depending on the type of project. For example, when you bundle your code with webpack before running the tests, then webpack only needs to run once. The same goes for TypeScript projects where you compile your code before testing."),Object(a.b)("h2",{id:"-instrumentation-with-babel"},"\ud83d\udc20 Instrumentation with Babel"),Object(a.b)("p",null,"Mutation Switching is a significant performance improvement, but it means that Stryker is required to perform some complex transformations of the ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"Abstract Syntax Tree (AST)"),"."),Object(a.b)("p",null,"Doing this ",Object(a.b)("em",{parentName:"p"},"instrumentation")," means visiting each node of the AST to collect and place mutants. This instrumentation is implemented with the ",Object(a.b)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," parser and now ships with ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/core"),". We're taking advantage of Babel 7's support to parse and print any type of JavaScript, including TypeScript code."),Object(a.b)("p",null,"This means that it is ",Object(a.b)("em",{parentName:"p"},"no longer needed to configure the ",Object(a.b)("inlineCode",{parentName:"em"},"mutator"))," in your Stryker configuration. Stryker will always use the new mutation instrumenter. It supports TypeScript, JavaScript, Flow, and JSX. It even supports mutating script tags in ",Object(a.b)("inlineCode",{parentName:"p"},".html")," or ",Object(a.b)("inlineCode",{parentName:"p"},".vue")," files. It also picks up your babel configuration out-of-the-box, so no custom configuration is needed."),Object(a.b)("h2",{id:"-build-command-support"},"\ud83d\udc77\u200d\u200d Build command support"),Object(a.b)("p",null,"With mutation switching, all mutants are placed in the code at the same time. This also means that it only has to be built (transpiled or bundled) once."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: not all projects need building. Simple projects might deploy JS code as is, or the test runner might take care of this step for you. For example, running your tests with ",Object(a.b)("inlineCode",{parentName:"em"},"ts-node")," or ",Object(a.b)("inlineCode",{parentName:"em"},"babel/register")," or running it with ",Object(a.b)("inlineCode",{parentName:"em"},"Jest")," or ",Object(a.b)("inlineCode",{parentName:"em"},"Karma")," with the ",Object(a.b)("a",{parentName:"em",href:"https://github.com/webpack-contrib/karma-webpack"},"webpack plugin"),".")),Object(a.b)("p",null,"Before mutation switching, this would be the job of the ",Object(a.b)("inlineCode",{parentName:"p"},"transpiler")," plugin type. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"transpiler: ['babel']")," would mean that all files would be transpiled with the ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/babel-transpiler")," plugin. It was a bit complex to create a transpiler plugin, and since every mutant needed to transpiled, it was slow. Every transpiler/bundler needed its a transpiler plugin."),Object(a.b)("p",null,"Stryker 4.0 will no longer support the ",Object(a.b)("inlineCode",{parentName:"p"},"transpiler")," plugins. Instead, it allows you to configure a ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand")," yourself. A build command can be any command. Some examples include ",Object(a.b)("inlineCode",{parentName:"p"},"npm run build"),", ",Object(a.b)("inlineCode",{parentName:"p"},"tsc -b")," or ",Object(a.b)("inlineCode",{parentName:"p"},"webpack --config webpack.config"),". This means that the available plugins do not limit you."),Object(a.b)("p",null,"The following dependencies are therefore no longer needed, and you can simply remove them:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@stryker-mutator/babel-transpiler")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@stryker-mutator/webpack-transpiler")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@stryker-mutator/typescript"))),Object(a.b)("h2",{id:"-checker-plugin"},"\u2705 Checker plugin"),Object(a.b)("p",null,"You might know that the old ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript")," transpiler not only transpiled your code but also filtered out mutants that resulted in type errors, marking them with ",Object(a.b)("inlineCode",{parentName:"p"},"compile error")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"transpile error"),') in your report. Mutants with this status are marked as "invalid" and do not influence your mutation score.'),Object(a.b)("p",null,"Since Stryker 4.0 ",Object(a.b)("a",{parentName:"p",href:"#build-command-support"},"removes the transpiler plugin type")," we needed a new plugin that can perform this type checking. Introducing the ",Object(a.b)("inlineCode",{parentName:"p"},"Checker")," plugin type. In the Stryker 4 release, we will include one such checkers, the ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker"),"."),Object(a.b)("p",null,"Install it with ",Object(a.b)("inlineCode",{parentName:"p"},"npm install @stryker-mutator/typescript-checker@next")),Object(a.b)("p",null,"Configure it with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),Object(a.b)("p",null,'(tsconfig.json is the default setting for "tsconfigFile").'),Object(a.b)("p",null,"Please see ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/tree/epic/mutation-switching/packages/typescript-checker#readme"},"the TypeScript checker's readme for more details")),Object(a.b)("h2",{id:"-more-coverage-analysis"},"\u2614 More coverage analysis"),Object(a.b)("p",null,"Coverage analysis is a way to speed up mutation testing. Stryker always came with three flavors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'"off": No coverage analysis'),Object(a.b)("li",{parentName:"ul"},'"all": Coverage is measured for the entire test suite. Mutants that are not covered by even one test are marked with "NoCoverage"'),Object(a.b)("li",{parentName:"ul"},'"perTest": Coverage is measured per test. Only tests that cover a specific mutant are run for that mutant.')),Object(a.b)("p",null,'Running with "perTest" coverage yields a significant performance improvement (usually between 40% and 60%). However, most projects were unable to take advantage of it because Stryker relied on a complex mechanism of ',Object(a.b)("a",{parentName:"p",href:"https://istanbul.js.org/"},"istanbul")," code coverage combined with hooks in the test runner. It only worked in scenarios without complicated transpiling or bundling."),Object(a.b)("p",null,"With the introduction of mutation switching, the instrumenter is responsible for inserting coverage instrumentation into the code. This means that Stryker can measure mutant coverage, ",Object(a.b)("em",{parentName:"p"},"regardless of which bundler/transpiler you are using"),". The only requirement is that Stryker needs to be able to hook into the test runner. This is currently supported for ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/mocha-runner"),", ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/jasmine-runner"),". Support for ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/issues/2316"},Object(a.b)("inlineCode",{parentName:"a"},"@stryker-mutator/jest-runner")," is planned"),"."),Object(a.b)("h2",{id:"\ud83e\uddf9-other-changes"},"\ud83e\uddf9 Other changes"),Object(a.b)("p",null,"We also decided to take this opportunity to improve the maintainability of the Stryker code further. That's why we've decided to drop support for two more plugin types."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"TestFramework")," plugin type is removed",Object(a.b)("br",{parentName:"li"}),"A test framework plugin used to be responsible for allowing Stryker to hook into the test framework to implement test filtering and perTest coverage analysis. In practice, this was often tightly coupled to the test runner itself. That's why we've decided to drop this plugin type and make the Test Runner plugin responsible for hooking into the test framework directly. Therefore the following dependencies can simply be removed: ",Object(a.b)("inlineCode",{parentName:"li"},"@stryker-mutator/mocha-framework")," and ",Object(a.b)("inlineCode",{parentName:"li"},"@stryker-mutator/jasmine-framework"),"."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"OptionsEditor")," plugin type is removed",Object(a.b)("br",{parentName:"li"}),"Options editors provided a way for plugins to edit the Stryker options directly. In practice, this was used to load plugin-specific options and attach them to the StrykerOptions object for later use. Plugins are now expected to load their options in their life cycle.")),Object(a.b)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next"),Object(a.b)("p",null,"We'll be focussing on getting Stryker 4.0 released. For that to happen, we would appreciate your feedback. Feel free to report any ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/issues/new"},"issues")," you have with this beta release."))}c.isMDXComponent=!0}}]);