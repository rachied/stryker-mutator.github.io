(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(196));const o={slug:"announcing-stryker-0-34",title:"Announcing Stryker 0.34",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i={permalink:"/blog/announcing-stryker-0-34",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-12-24-announcing-stryker-0-34.md",source:"@site/blog/2018-12-24-announcing-stryker-0-34.md",description:"Stryker 0.34 is here. This new version comes with features to help you get started. It's never been this easy to mutation test your JS project!",date:"2018-12-24T00:00:00.000Z",formattedDate:"December 24, 2018",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Announcing Stryker 0.34",readingTime:3.985,truncated:!0,prevItem:{title:"Stryker4s 0.1.0 released",permalink:"/blog/stryker4s-0-1-0-released"},nextItem:{title:"Mutation switching in Stryker4s",permalink:"/blog/mutation-switching"}},s=[{value:"Command test runner",id:"command-test-runner",children:[]},{value:"Zero configuration",id:"zero-configuration",children:[]},{value:"Init presets",id:"init-presets",children:[]},{value:"Web component tester plugin",id:"web-component-tester-plugin",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],c={toc:s};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker 0.34 is here. This new version comes with features to help you get started. It's never been this easy to mutation test your JS project!"),Object(a.b)("p",null,"Install Stryker via the command line:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm i stryker stryker-api --save-dev\n")),Object(a.b)("p",null,"Or run ",Object(a.b)("inlineCode",{parentName:"p"},"stryker init")," in the root of your project:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npx stryker init\n")),Object(a.b)("p",null,"Some features we want to talk about:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#command-test-runner"},"Command test runner")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#zero-configuration"},"Zero configuration")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#init-presets"},"Init presets")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#web-component-tester-test-runner-plugin"},"Web component tester test runner plugin"))),Object(a.b)("h2",{id:"command-test-runner"},"Command test runner"),Object(a.b)("p",null,"Stryker always was and always will be test runner agnostic. It doesn't care which test runner you use.\nHowever, it always required you to install a test runner plugin.\nAre you using Jest? Install the 'stryker-jest-runner'. Want to use mocha? Then the 'stryker-mocha-runner' is just what you need.\nThis works great if the test runner of choice is supported, but what do you do when your test runner isn't supported?\nLike ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/243"},"Ava.js")," or ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/325"},"node-tap"),"\nor ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/430"},"Intern")," or\nmaybe you have a custom ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," command. This is why we've added the ",Object(a.b)("inlineCode",{parentName:"p"},"'command'")," test runner."),Object(a.b)("p",null,"Configure it in your stryker configuration:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// stryker.conf.js\n{\n    testRunner: 'command',\n    // Or leave out testRunner, 'command' is the default test runner\n    commandRunner: {\n        command: 'npm run mocha' // optionally choose a different command to run\n    }\n}\n")),Object(a.b)("p",null,"Stryker ships with the command test runner, so it doesn't need additional plugins. The command test runner will simply run your ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," script.\nIf the exit code is ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", the tests succeeded. If not, they failed."),Object(a.b)("p",null,"Stryker is limited in the ways it can optimize for performance. For example, it starts a fresh node process for each test run.\nSo if your test runner is supported via a test runner plugin, that would still be the way to go."),Object(a.b)("p",null,"The command test runner runs ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," by default. You can configure a different command with the ",Object(a.b)("inlineCode",{parentName:"p"},"commandRunner")," configuration key."),Object(a.b)("p",null,"Special thanks to ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/DiegoRBaquero"},"Diego R.B.")," for inspiring us to implement this."),Object(a.b)("h2",{id:"zero-configuration"},"Zero configuration"),Object(a.b)("p",null,"Stryker now chooses sensible defaults for all settings. Meaning that you can now run Stryker without any configuration.\nIt will look for ","*",".js files to mutate in your ",Object(a.b)("inlineCode",{parentName:"p"},"src")," and ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," directories (excluding obvious test files, like app.spec.js).\nCoverage analysis will be turned off and the ",Object(a.b)("a",{parentName:"p",href:"#command-test-runner"},"command test runner")," is used."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm install --save-dev stryker stryker-api\nnpx stryker run\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," The default mutator Stryker uses will still be the deprecated ",Object(a.b)("inlineCode",{parentName:"p"},"es5")," mutator (comes with Stryker). In time, we'll be migrating this to\nuse the ",Object(a.b)("inlineCode",{parentName:"p"},"'javascript'")," mutator (supporting ESNext)."),Object(a.b)("p",null,"With these defaults in place, it is now also easy to run Stryker without a configuration file if you want just one or two config options\nto change. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npx stryker run --testRunner mocha --mutator javascript\n")),Object(a.b)("p",null,"Again, special thanks to ",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/DiegoRBaquero"},"Diego R.B.")," for inspiring us to implement this."),Object(a.b)("p",null,"With this feature in place, Stryker is now effectively a drop in replacement for ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TheSoftwareDesignLab/mutode"},"mutode"),"."),Object(a.b)("h2",{id:"init-presets"},"Init presets"),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"stryker init")," (either using the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-cli"},"stryker-cli"),", or using ",Object(a.b)("inlineCode",{parentName:"p"},"npx stryker init"),')\nyou can initialize Stryker in your repository. It asks questions via a questionnaire, like "Which test runner do you want to use?" and\n"Which test framework do you want to use?". Sometimes you might not know the answer to those questions. It also might take a lot more\nconfiguration to get you started. This is why we added a ',Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-handbook/tree/master/stryker/guides"},"guides section to the stryker handbook"),".\nWe've now integrated those into the ",Object(a.b)("inlineCode",{parentName:"p"},"stryker init")," command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ stryker init\n? Are you using one of these frameworks? Then select a preset configuration. (Use arrow keys)\n> angular-cli\nreact\nvueJs\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nNone/other\n")),Object(a.b)("p",null,"Choosing for a preset immediately gets you started! It creates the configuration file and installs the correct plugins.\nChoosing ",Object(a.b)("inlineCode",{parentName:"p"},"None/other")," here will still take you to the normal questionnaire."),Object(a.b)("p",null,"Special thanks to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Wmaarts"},"wmaarts")," for adding this feature."),Object(a.b)("h2",{id:"web-component-tester-plugin"},"Web component tester plugin"),Object(a.b)("p",null,"With this release of Stryker, we've also released version 0.1.0 of the stryker-wct-runner. Install it with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ npm install --save-dev stryker-wct-runner\n")),Object(a.b)("p",null,"Configure it with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n  testRunner: 'wct';\n}\n")),Object(a.b)("p",null,"With this plugin, we now support ",Object(a.b)("a",{parentName:"p",href:"https://www.polymer-project.org/"},"Polymer")," cli projects.\nThe ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/web-component-tester"},"web-component-tester")," runs your tests in an actual browser.\nHowever, it doesn't support any of the coverage analysis performance features for now. If you want those to be supported,\nplease open an issue. You're also welcome to take a look at the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Polymer/tools/issues/created_by/nicojs"},"issues we've opened at Polymer side"),".\nAny help there is really appreciated."),Object(a.b)("h2",{id:"whats-next"},"What's next?"),Object(a.b)("p",null,"We're still focussing on getting v1 out of the door. We're reasonably certain it will happen in Q1 of next year.\nV1 will mostly be removing deprecated features. We'll also introduce a more predictable release schedule with\nstrict ",Object(a.b)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning")," policies. Stay tuned."),Object(a.b)("p",null,"Input on these new features or the v1 preparations are welcome!"))}u.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(h,s(s({ref:t},u),{},{components:n})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);