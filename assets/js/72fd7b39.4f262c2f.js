"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1919],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return i},assets:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(7462),a=(n(7294),n(3905));const s={title:"Jest Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/jest-runner.md"},o=void 0,i={unversionedId:"stryker-js/jest-runner",id:"stryker-js/jest-runner",title:"Jest Runner",description:"Installation",source:"@site/docs/stryker-js/jest-runner.md",sourceDirName:"stryker-js",slug:"/stryker-js/jest-runner",permalink:"/docs/stryker-js/jest-runner",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/jest-runner.md",tags:[],version:"current",frontMatter:{title:"Jest Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/jest-runner.md"},sidebar:"docs",previous:{title:"Jasmine Runner",permalink:"/docs/stryker-js/jasmine-runner"},next:{title:"Karma Runner",permalink:"/docs/stryker-js/karma-runner"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Peer dependencies",id:"peer-dependencies",level:2},{value:"Configuration",id:"configuration",level:2},{value:'<code>jest.projectType</code> "string"',id:"jestprojecttype-string",level:3},{value:"<code>jest.configFile</code> string",id:"jestconfigfile-string",level:3},{value:"<code>jest.config</code> object",id:"jestconfig-object",level:3},{value:"<code>jest.enableFindRelatedTests</code> boolean",id:"jestenablefindrelatedtests-boolean",level:3},{value:"Coverage analysis",id:"coverage-analysis",level:2},{value:"Coverage reporting",id:"coverage-reporting",level:3},{value:"Test filtering",id:"test-filtering",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install @stryker-mutator/jest-runner locally within your project folder, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @stryker-mutator/jest-runner\n# OR\nyarn add --dev @stryker-mutator/jest-runner\n")),(0,a.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,a.kt)("p",null,"The @stryker-mutator/jest-runner is a plugin for Stryker to enable Jest as a test runner. As such, you should make sure you have the correct versions of its dependencies installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jest"),(0,a.kt)("li",{parentName:"ul"},"@stryker-mutator/core")),(0,a.kt)("p",null,"For the minimum supported versions, see the peerDependencies section in the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/stryker-mutator/stryker/master/packages/jest-runner/package.json"},"package.json"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Make sure you set the ",(0,a.kt)("inlineCode",{parentName:"p"},"testRunner"),' option to "jest".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "jest"\n}\n')),(0,a.kt)("p",null,"The @stryker-mutator/jest-runner also provides a couple of configurable options using the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," property in your Stryker config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jest": {\n    "projectType": "custom",\n    "configFile": "path/to/your/custom/jestConfig.js",\n    "config": {\n      "testEnvironment": "jest-environment-jsdom-sixteen"\n    },\n    "enableFindRelatedTests": true,\n  }\n}\n')),(0,a.kt)("h3",{id:"jestprojecttype-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"jest.projectType")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},'"string"'),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},'"custom"')),(0,a.kt)("p",null,"Configure where jest should get its configuration from."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"custom"'),": use the ",(0,a.kt)("a",{parentName:"li",href:"#jestconfig-object"},(0,a.kt)("inlineCode",{parentName:"a"},"jest.config")," custom configuration"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"create-react-app"'),": use ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-scripts"},"react-scripts"),", for projects created with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app"},"create-react-app"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"create-react-app-ts"'),": ",(0,a.kt)("strong",{parentName:"li"},"DEPRECATED")," use ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-scripts-ts"},"react-scripts-ts"),", for projects created with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wmonk/create-react-app-typescript"},"create-react-app-typescript"),". DEPRECATED, please ",(0,a.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/adding-typescript/"},"follow the migration guide")," and move to ",(0,a.kt)("inlineCode",{parentName:"li"},"create-react-app"),".")),(0,a.kt)("h3",{id:"jestconfigfile-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"jest.configFile")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"string"),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,"The path to your Jest config file of package.json file containing in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"jest"'),' key. By default, the @stryker-mutator/jest-runner will try to look for "jest.conf.js" or "package.json" in the current working directory.'),(0,a.kt)("h3",{id:"jestconfig-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"jest.config")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,"Custom Jest config. This will override file-based config."),(0,a.kt)("h3",{id:"jestenablefindrelatedtests-boolean"},(0,a.kt)("inlineCode",{parentName:"h3"},"jest.enableFindRelatedTests")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"boolean"),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"Whether to run jest with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--findRelatedTests")," flag. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", Jest will only run tests related to the mutated file per test. (See ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/cli.html#--findrelatedtests-spaceseparatedlistofsourcefiles"},(0,a.kt)("em",{parentName:"a"},"--findRelatedTests")),")."),(0,a.kt)("h2",{id:"coverage-analysis"},"Coverage analysis"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," plugin supports coverage analysis and test filtering, meaning you can run with ",(0,a.kt)("inlineCode",{parentName:"p"},"--coverageAnalysis perTest")," for optimal performance."),(0,a.kt)("h3",{id:"coverage-reporting"},"Coverage reporting"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},'"all"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"perTest"')," coverage analysis, this plugin reports mutant coverage by hooking into the ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"},"jest's test environment"),". The test environment setting in your configuration file is overridden by default and you won't have to do anything here."),(0,a.kt)("p",null,"However, if you choose to override the jest-environment on a file-by-file basis using ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"},"jest's ",(0,a.kt)("inlineCode",{parentName:"a"},"@jest-environment")," docblock"),", you will have to do the work. "),(0,a.kt)("p",null,"This:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @jest-environment jsdom\n */\n")),(0,a.kt)("p",null,"Becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @jest-environment @stryker-mutator/jest-runner/jest-env/jsom \n */\n")),(0,a.kt)("p",null,"This is the list of jest environments that are shipped with @stryker-mutator/jest-runner."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Jest test environment"),(0,a.kt)("th",{parentName:"tr",align:null},"@stryker-mutator/jest-runner override"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"node"),(0,a.kt)("td",{parentName:"tr",align:null},"@stryker-mutator/jest-runner/jest-env/node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsdom"),(0,a.kt)("td",{parentName:"tr",align:null},"@stryker-mutator/jest-runner/jest-env/jsom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jest-environment-jsdom-sixteen"),(0,a.kt)("td",{parentName:"tr",align:null},"@stryker-mutator/jest-runner/jest-env/jsom-sixteen")))),(0,a.kt)("p",null,"Don't worry; using Stryker's alternative is harmless during regular unit testing."),(0,a.kt)("p",null,"If you're using a custom test environment, you'll need to mixin the Stryker functionality yourself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// my-custom-jest-environment.js\nconst { mixinJestEnvironment} = require('@stryker-mutator/jest-runner');\nconst NodeEnvironment = require('jest-environment-node');\n\nclass MyCustomTestEnvironment extends NodeEnvironment {\n  // custom magic here \u2728\n}\n\nmodule.exports = mixinJestEnvironment(MyCustomTestEnvironment);\n")),(0,a.kt)("h3",{id:"test-filtering"},"Test filtering"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},'"perTest"')," coverage analysis, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," will hook into the ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html#testrunner-string"},"jest test runner"),". Both ",(0,a.kt)("inlineCode",{parentName:"p"},'"jasmine2"')," as well as ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest-circus"},(0,a.kt)("inlineCode",{parentName:"a"},"jest-circus"))," (default) are supported here. "),(0,a.kt)("p",null,"If you're using a different test runner, you're out of luck. Please downgrade to using ",(0,a.kt)("inlineCode",{parentName:"p"},'"all"')," coverage analysis. If you think we should support your test runner, please let us know by opening an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/new?assignees=&labels=%F0%9F%9A%80+Feature+request&template=feature_request.md&title="},"issue"),", or by joining our ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"slack channel"),"."))}c.isMDXComponent=!0}}]);