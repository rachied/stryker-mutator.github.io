"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[9196],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6238:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(7462),o=(r(7294),r(3905));const a={title:"React",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/react.md"},s=void 0,i={unversionedId:"stryker-js/guides/react",id:"stryker-js/guides/react",title:"React",description:"Stryker supports React projects using Jest with both JSX and TSX code.",source:"@site/docs/stryker-js/guides/react.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/react",permalink:"/docs/stryker-js/guides/react",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/react.md",tags:[],version:"current",frontMatter:{title:"React",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/react.md"},sidebar:"docs",previous:{title:"Angular",permalink:"/docs/stryker-js/guides/angular"},next:{title:"VueJS",permalink:"/docs/stryker-js/guides/vuejs"}},c={},u=[{value:"JSX project",id:"jsx-project",level:2},{value:"Configuration",id:"configuration",level:3},{value:"TSX projects",id:"tsx-projects",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stryker supports React projects using Jest with both JSX and TSX code."),(0,o.kt)("h2",{id:"jsx-project"},"JSX project"),(0,o.kt)("p",null,"Recommended stryker packages: ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i -D @stryker-mutator/core @stryker-mutator/jest-runner")),(0,o.kt)("p",null,"Recommended other packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"jest 23.0.0 or higher")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After installing the recommended packages, create the ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," file in your repository.\nThe configuration below contains a good starting point for React projects.\nYou may have to change some paths like the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/configuration#mutate-string"},"mutate")," array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "jest",\n  "jest": {\n    "projectType": "create-react-app"\n  }\n}\n')),(0,o.kt)("h2",{id:"tsx-projects"},"TSX projects"),(0,o.kt)("p",null,"For projects using TypeScript and TSX, you can follow the JSX guide but with a few differences:"),(0,o.kt)("p",null,"Recommended stryker packages: ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i -D @stryker-mutator/core @stryker-mutator/jest-runner @stryker-mutator/typescript-checker")),(0,o.kt)("p",null,"Configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "jest",\n  "jest": {\n    "projectType": "create-react-app"\n  },\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Please take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/troubleshooting"},"troubleshooting page")," when you run into any problems setting up StrykerJS."))}l.isMDXComponent=!0}}]);