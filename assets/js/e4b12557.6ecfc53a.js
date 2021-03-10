(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(196));const i={title:"Config file",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/config-file.md"},a={unversionedId:"stryker/config-file",id:"stryker/config-file",isDocsHomePage:!1,title:"Config file",description:"Although a config file is not mandatory, it is recommended. You can define your Stryker configuration in either a .js or .json file. If you use a .js file, it should contain a NodeJS module that exports the configuration object. Autocompletion is supported using JSON schema or using @type JS docs.",source:"@site/docs/stryker/config-file.md",slug:"/stryker/config-file",permalink:"/docs/stryker/config-file",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/config-file.md",version:"current",sidebar:"docs",previous:{title:"Usage",permalink:"/docs/stryker/usage"},next:{title:"Configuration",permalink:"/docs/stryker/configuration"}},c=[{value:"Configuration options",id:"configuration-options",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Glob patterns",id:"glob-patterns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Although a config file is not mandatory, it is recommended. You can define your Stryker configuration in either a ",Object(o.b)("inlineCode",{parentName:"p"},".js")," or ",Object(o.b)("inlineCode",{parentName:"p"},".json")," file. If you use a ",Object(o.b)("inlineCode",{parentName:"p"},".js")," file, it should contain a NodeJS module that exports the configuration object. Autocompletion is supported using JSON schema or using ",Object(o.b)("a",{parentName:"p",href:"https://jsdoc.app/"},Object(o.b)("inlineCode",{parentName:"a"},"@type")," JS docs"),"."),Object(o.b)("h2",{id:"configuration-options"},"Configuration options"),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/stryker/configuration"},"configuration")," for a list of available options."),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"With a ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "_comment": "Comments can be put inside `xxx_comment` properties."\n}\n')),Object(o.b)("p",null,"Or as ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/**\n* @type {import('@stryker-mutator/api/core').StrykerOptions}\n*/\nmodule.exports = {\n  // Your config here\n};\n")),Object(o.b)("p",null,"You can use your editor's autocompletion to help you author your configuration file."),Object(o.b)("p",null,Object(o.b)("img",{alt:"config file autocompletion",src:n(301).default})),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,'By default, Stryker will look for a "stryker.conf.js" or "stryker.conf.json" file in the current working directory (cwd). You can also use a different configuration file with a second argument to the ',Object(o.b)("inlineCode",{parentName:"p"},"run")," command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'# Use "stryker.conf.js" or "stryker.conf.json" in the cwd\nnpx stryker run\n# Use "alternative-stryker.conf.json"\nnpx stryker run alternative-stryker.conf.json\n')),Object(o.b)("h2",{id:"glob-patterns"},"Glob patterns"),Object(o.b)("p",null,"Some options allow for a glob pattern to be defined. These glob patterns are defined relative to the cwd. "),Object(o.b)("p",null,"For example, using ",Object(o.b)("inlineCode",{parentName:"p"},'"mutate": [ "src/components/**/*.component.js" ]'),' will make sure only files ending with ".component.js" in the "src/components" directory are mutated.'),Object(o.b)("p",null,"We suggest using ",Object(o.b)("a",{parentName:"p",href:"https://globster.xyz/"},"https://globster.xyz/")," when auditing more complex glob expressions; it can help you get them just right."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The following is an example ",Object(o.b)("inlineCode",{parentName:"p"},"stryker.conf.json")," file. It specifies running mocha tests with the mocha test runner."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "testRunner": "mocha",\n  "coverageAnalysis": "perTest"\n}\n')))}l.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},301:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/config-file-autocompletion-41622b4a7ef06603ae14a26f9913c09e.gif"}}]);