"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1071],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,g=m["".concat(u,".").concat(k)]||m[k]||p[k]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5798:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),a=(t(7294),t(3905));const i={title:"Karma Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/karma-runner.md"},o=void 0,l={unversionedId:"stryker-js/karma-runner",id:"stryker-js/karma-runner",title:"Karma Runner",description:"Installation",source:"@site/docs/stryker-js/karma-runner.md",sourceDirName:"stryker-js",slug:"/stryker-js/karma-runner",permalink:"/docs/stryker-js/karma-runner",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/karma-runner.md",tags:[],version:"current",frontMatter:{title:"Karma Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/karma-runner.md"},sidebar:"docs",previous:{title:"Jest Runner",permalink:"/docs/stryker-js/jest-runner"},next:{title:"Mocha Runner",permalink:"/docs/stryker-js/mocha-runner"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Install",id:"install",level:2},{value:"Bring your own test runner",id:"bring-your-own-test-runner",level:2},{value:"Configuring",id:"configuring",level:2},{value:'<code>karma.projectType</code> "custom" | "angular-cli"',id:"karmaprojecttype-custom--angular-cli",level:3},{value:"<code>karma.configFile</code> string",id:"karmaconfigfile-string",level:3},{value:"<code>karma.config</code> object",id:"karmaconfig-object",level:3},{value:"<code>karma.ngConfig.testArguments</code> object",id:"karmangconfigtestarguments-object",level:3},{value:"Non overridable options",id:"non-overridable-options",level:2},{value:"Configure angular cli",id:"configure-angular-cli",level:2},{value:"Debugging",id:"debugging",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"A plugin to use the karma test runner (or ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@angular/cli"},"@angular/cli"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"ng test"),") in Stryker."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Install @stryker-mutator/karma-runner locally within your project folder, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @stryker-mutator/karma-runner\n")),(0,a.kt)("h2",{id:"bring-your-own-test-runner"},"Bring your own test runner"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," is a plugin for ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker")," to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"karma")," as a test runner.\nHowever, it does ",(0,a.kt)("em",{parentName:"p"},"not")," come packaged with it's own version of ",(0,a.kt)("inlineCode",{parentName:"p"},"karma"),", instead it\nuses ",(0,a.kt)("em",{parentName:"p"},"your very own karma")," version. It can also work with ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular/cli"),", see ",(0,a.kt)("a",{parentName:"p",href:"#configuring"},"Configuring")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," karma v2.0.3 has a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/karma-runner/karma/issues/3057"},"known issue")," which makes it impossible to use it with Stryker. please upgrade to 2.0.4 or higher."),(0,a.kt)("h2",{id:"configuring"},"Configuring"),(0,a.kt)("p",null,"You can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.json"),") config file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "karma",\n  "karma": {\n    "projectType": "custom",\n    "configFile": "path/to/karma.conf.js",\n    "config": {\n      "browsers": ["ChromeHeadless"]\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"karmaprojecttype-custom--angular-cli"},(0,a.kt)("inlineCode",{parentName:"h3"},"karma.projectType")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},'"custom"')," | ",(0,a.kt)("inlineCode",{parentName:"h3"},'"angular-cli"'),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},'"custom"')),(0,a.kt)("p",null,"Specify which kind of project you're using. This determines which command is used to start karma"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},'"custom"')),": configure @stryker-mutator/karma-runner to use ",(0,a.kt)("inlineCode",{parentName:"li"},"karma start"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},'"angular-cli"')),": configure @stryker-mutator/karma-runner to use ",(0,a.kt)("inlineCode",{parentName:"li"},"ng test")," (see ",(0,a.kt)("a",{parentName:"li",href:"#configure-angular-cli"},"configuring for angular-cli"),").")),(0,a.kt)("h3",{id:"karmaconfigfile-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"karma.configFile")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"string"),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,"Specify a ",(0,a.kt)("a",{parentName:"p",href:"http://karma-runner.github.io/2.0/config/configuration-file.html"},"'karma.conf.js' file")," to be loaded.\nOptions specified directly in your stryker.conf.js file using ",(0,a.kt)("inlineCode",{parentName:"p"},"karma.config")," will overrule options in your karma.conf.js file."),(0,a.kt)("h3",{id:"karmaconfig-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"karma.config")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,"Specify ",(0,a.kt)("a",{parentName:"p",href:"http://karma-runner.github.io/2.0/config/configuration-file.html"},"karma configuration options")," directly.\nOptions specified here will overrule any options in your karma.conf.js file."),(0,a.kt)("h3",{id:"karmangconfigtestarguments-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"karma.ngConfig.testArguments")," ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),"]"),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,"Add ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/angular/angular-cli/wiki/test#options"},"ng test arguments"),". For example, specify an alternative project with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "karma": {\n    "projectType": "angular-cli",\n      "ngConfig": {\n        "testArguments": {\n          "project": "my-lib"\n        }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This will run ng test with ",(0,a.kt)("inlineCode",{parentName:"p"},"--project")," argument: ",(0,a.kt)("inlineCode",{parentName:"p"},"ng test --project=my-lib"),"."),(0,a.kt)("h2",{id:"non-overridable-options"},"Non overridable options"),(0,a.kt)("p",null,"The browser's life cycle is determined by ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/karma-runner"),". I.e. these settings cannot be overridden. You configuration settings for these will be ignored."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  browserNoActivityTimeout: 1000000,\n  autoWatch: false,\n  singleRun: false,\n  detached: false\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"coverage")," plugin will also be removed (not needed for mutation testing)."),(0,a.kt)("h2",{id:"configure-angular-cli"},"Configure angular cli"),(0,a.kt)("p",null,"Please follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/stryker-js/guides/angular"},"angular guide"),"."),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"As Stryker runs karma in its own process, its logging output will be consumed by Stryker."),(0,a.kt)("p",null,"To see all logging from karma, set the log level to ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker.conf.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "logLevel": "trace"\n}\n')))}p.isMDXComponent=!0}}]);