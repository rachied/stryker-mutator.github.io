"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7105],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4775:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(7462),i=(t(7294),t(3905));const a={title:"Jasmine Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/jasmine-runner.md"},o=void 0,s={unversionedId:"stryker-js/jasmine-runner",id:"stryker-js/jasmine-runner",title:"Jasmine Runner",description:"A plugin to use Jasmine as a test runner for node in Stryker.",source:"@site/docs/stryker-js/jasmine-runner.md",sourceDirName:"stryker-js",slug:"/stryker-js/jasmine-runner",permalink:"/docs/stryker-js/jasmine-runner",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/jasmine-runner.md",tags:[],version:"current",frontMatter:{title:"Jasmine Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/jasmine-runner.md"},sidebar:"docs",previous:{title:"Cucumber Runner",permalink:"/docs/stryker-js/cucumber-runner"},next:{title:"Jest Runner",permalink:"/docs/stryker-js/jest-runner"}},u={},l=[{value:"Install",id:"install",level:2},{value:"Peer dependencies",id:"peer-dependencies",level:2},{value:"Example",id:"example",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>jasmineConfigFile</code> string",id:"jasmineconfigfile-string",level:3}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A plugin to use Jasmine ",(0,i.kt)("strong",{parentName:"p"},"as a test runner for node")," in Stryker."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Install @stryker-mutator/jasmine-runner locally, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @stryker-mutator/jasmine-runner\n")),(0,i.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jasmine-runner")," is a plugin for ",(0,i.kt)("inlineCode",{parentName:"p"},"stryker")," to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"jasmine")," as a test runner.\nAs such, you should make sure you have the correct versions of its dependencies installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jasmine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/core"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can configure the jasmine test runner in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stryker.conf.js")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"stryker.conf.json"),") file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "coverageAnalysis": "perTest",\n  "testRunner": "jasmine",\n  "jasmineConfigFile": "spec/support/jasmine.json"\n}\n')),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"jasmineconfigfile-string"},(0,i.kt)("inlineCode",{parentName:"h3"},"jasmineConfigFile")," ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"string"),"]"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("p",null,"Specify your ",(0,i.kt)("a",{parentName:"p",href:"https://jasmine.github.io/setup/nodejs.html#configuration"},"jasmine configuration file")," to be loaded.\nLeaving this blank will result in the jasmine defaults, which are undocumented (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js#L10-L38"},"source code here"),")."))}p.isMDXComponent=!0}}]);