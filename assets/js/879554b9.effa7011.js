"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[4338],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Introduction",title:"What is mutation testing?",slug:"/",sidebar_position:1},i=void 0,u={unversionedId:"General/introduction",id:"General/introduction",title:"What is mutation testing?",description:"Bugs, or mutants, are automatically inserted into your production code. Your tests are run for each mutant. If your tests fail then the mutant is killed. If your tests passed, the mutant survived. The higher the percentage of mutants killed, the more effective your tests are.",source:"@site/docs/General/introduction.mdx",sourceDirName:"General",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/docs/General/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",title:"What is mutation testing?",slug:"/",sidebar_position:1},sidebar:"docs",next:{title:"An example",permalink:"/docs/General/example"}},s={},l=[{value:"But wait, what about code coverage?",id:"but-wait-what-about-code-coverage",level:2},{value:"Meet: Stryker",id:"meet-stryker",level:2},{value:"An example",id:"an-example",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bugs, or ",(0,a.kt)("em",{parentName:"p"},"mutants"),", are automatically inserted into your production code. Your tests are run for each mutant. If your tests ",(0,a.kt)("em",{parentName:"p"},"fail")," then the mutant is ",(0,a.kt)("em",{parentName:"p"},"killed"),". If your tests passed, the mutant ",(0,a.kt)("em",{parentName:"p"},"survived"),". The higher the percentage of mutants killed, the more ",(0,a.kt)("em",{parentName:"p"},"effective")," your tests are."),(0,a.kt)("p",null,"It's that simple."),(0,a.kt)("p",null,"Are you still confused? Why not take a look at our ",(0,a.kt)("a",{parentName:"p",href:"/docs/General/example"},"example page")," and try it out yourself?"),(0,a.kt)("h2",{id:"but-wait-what-about-code-coverage"},"But wait, what about code coverage?"),(0,a.kt)("p",null,"Well... code coverage doesn't tell you everything about the effectiveness of your tests. Think about it, when was the last time you saw a test without an assertion, purely to increase the code coverage?"),(0,a.kt)("p",null,"Imagine a sandwich covered with paste. Code coverage would tell you the bread is 80% covered with paste. Mutation testing, on the other hand, would tell you it is actually ",(0,a.kt)("em",{parentName:"p"},"chocolate")," paste and not... well... something else."),(0,a.kt)("h2",{id:"meet-stryker"},"Meet: Stryker"),(0,a.kt)("p",null,"Sounds complicated? Don't worry! Stryker has your back. It uses one design mentality to implement mutation testing on three platforms. It's ",(0,a.kt)("em",{parentName:"p"},"easy to use")," and ",(0,a.kt)("em",{parentName:"p"},"fast to run"),". Stryker will only mutate ",(0,a.kt)("em",{parentName:"p"},"your source code"),", making sure there are no false positives."),(0,a.kt)("h2",{id:"an-example"},"An example"),(0,a.kt)("p",null,"Say you're building an online casino.\nUsers can only enter the casino when they're over 18. So you write the following piece of code to check if someone is allowed to use the website:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function isUserOldEnough(user) {\n  return user.age >= 18;\n}\n")),(0,a.kt)("p",null,"Stryker will find the return statement and decide to change it in several ways:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* 1 */ return user.age > 18;\n/* 2 */ return user.age < 18;\n/* 3 */ return false;\n/* 4 */ return true;\n")),(0,a.kt)("p",null,"We call those modifications mutants. After the mutants have been found, they are applied one by one, and your tests are executed against them.\nIf at least one of your tests fail, we say the mutant is ",(0,a.kt)("em",{parentName:"p"},"killed"),". That's what we want! If no test fails, it ",(0,a.kt)("em",{parentName:"p"},"survived"),".\nThe better your tests, the fewer mutants survive."),(0,a.kt)("p",null,"Stryker will output the results in various different formats. One of the easiest to read is the clear text reporter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"  Mutant killed: /yourPath/yourFile.js: line 10:27\n  Mutator: BinaryOperator\n  -                 return user.age >= 18;\n  +                 return user.age > 18;\n\n  Mutant survived: /yourPath/yourFile.js: line 10:27\n  Mutator: RemoveConditionals\n  -                 return user.age >= 18;\n  +                 return true;\n")),(0,a.kt)("p",null,"The clear text reporter will output how exactly your code was modified and which mutator was used. It will then tell us if a mutant was killed, meaning that at least one test failed, or if it survived. The second mutation in this example is marked as a survivor. This means there is probably a test missing that explicitly tests for age lower than 18."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For someone who hates mutants... you certainly keep some strange company.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"- Professor X")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Oh, they serve their purpose... as long as they can be controlled.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"- William Stryker")))}p.isMDXComponent=!0}}]);