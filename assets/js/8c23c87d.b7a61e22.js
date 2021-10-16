"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7400],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(r),g=a,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(d,i(i({ref:e},c),{},{components:r})):n.createElement(d,i({ref:e},c))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},153:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),a=(r(7294),r(3905));const o={slug:"get-your-mutation-score-badge-now",title:"Get your mutation score badge now!",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["dashboard"]},i=void 0,s={permalink:"/blog/get-your-mutation-score-badge-now",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-02-08-get-your-mutation-score-badge-now.md",source:"@site/blog/2018-02-08-get-your-mutation-score-badge-now.md",title:"Get your mutation score badge now!",description:"We're launching our Stryker Dashboard today.",date:"2018-02-08T00:00:00.000Z",formattedDate:"February 8, 2018",tags:[{label:"dashboard",permalink:"/blog/tags/dashboard"}],readingTime:1.905,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Use git to select files",permalink:"/blog/use-git-to-select-files"},nextItem:{title:"Webpack support is here",permalink:"/blog/webpack-support"}},l={authorsImageUrls:[void 0]},u=[{value:"Tell me how!",id:"tell-me-how",children:[],level:2},{value:"What&#39;s next?",id:"whats-next",children:[],level:2}],c={toc:u};function p({components:t,...e}){return(0,a.kt)("wrapper",(0,n.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're launching our ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.stryker-mutator.io"},"Stryker Dashboard")," today.\nThis will be the home of your test quality in the future.\nThe first feature? A mutation score badge!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/mutation%20score-82.3-green.svg",alt:"badge green"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/mutation%20score-72.3-orange.svg",alt:"badge orange"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/mutation%20score-59.6-red.svg",alt:"badge red"})),(0,a.kt)("h2",{id:"tell-me-how"},"Tell me how!"),(0,a.kt)("p",null,"Take these steps to enable the mutation score badge on your repository."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),": Make sure you can run stryker during a ",(0,a.kt)("a",{parentName:"li",href:"https://travis-ci.org"},"travis")," build (we only support travis at the moment)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),": Go to ",(0,a.kt)("a",{parentName:"li",href:"https://dashboard.stryker-mutator.io"},"https://dashboard.stryker-mutator.io")," and sign with your github account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),": Flip the switch next to your repository:",(0,a.kt)("svg",{"_ngcontent-c6":"",height:"50",width:"250",xmlns:"http://www.w3.org/2000/svg"},(0,a.kt)("g",{"_ngcontent-c6":""},(0,a.kt)("title",{"_ngcontent-c6":""},"background"),(0,a.kt)("rect",{"_ngcontent-c6":"",x:"0",y:"0",width:"250",height:"50",ry:"20",rx:"20",fill:"#fff",r:"50",stroke:"#E7E8E6","stroke-width":"1.5"})),(0,a.kt)("g",{"_ngcontent-c6":""},(0,a.kt)("title",{"_ngcontent-c6":""},"Switch"),(0,a.kt)("text",{"_ngcontent-c6":"","text-anchor":"start",x:"10",y:"30"},"username/reponame"),(0,a.kt)("rect",{"_ngcontent-c6":"",fill:"#E77964",height:"20",rx:"10",ry:"50",width:"45",x:"180",y:"15"}),(0,a.kt)("circle",{"_ngcontent-c6":"",cx:"215",cy:"25",fill:"#b74934",r:"13"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),": Configure your api key in your project. Please make sure you encrypt this variable using the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.travis-ci.com/user/environment-variables/#Encrypting-environment-variables"},"encrypted environment variables"),".\nFor example:",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"$ travis encrypt STRYKER_DASHBOARD_API_KEY=89b99910-04d8-4ffb-9a91-23d709c828b4 --add")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5"),": Configure the dashboard reporter in your stryker.conf.js file (you will need stryker version 0.19.1 or higher):",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"reporter: [ /*...*/ 'dashboard' ]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),": Force a travis build",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"$ git push origin master"))),(0,a.kt)("p",null,"Your badge will be available at: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://badge.stryker-mutator.io/github.com/{username}/{repository_name}/{branch}"),".\n(don't forget to add it to your readme file)"),(0,a.kt)("p",null,"Real life examples of the mutation score badge:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-jest-runner#readme"},"stryker-mutator/stryker-jest-runner")," ",(0,a.kt)("img",{parentName:"li",src:"https://badge.stryker-mutator.io/github.com/stryker-mutator/stryker-jest-runner/master",alt:"badge"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nicojs/node-install-local#readme"},"nicojs/node-install-local")," ",(0,a.kt)("img",{parentName:"li",src:"https://badge.stryker-mutator.io/github.com/nicojs/node-install-local/master",alt:"badge"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nicojs/node-sdedit#readme"},"nicojs/node-sdedit")," ",(0,a.kt)("img",{parentName:"li",src:"https://badge.stryker-mutator.io/github.com/nicojs/node-sdedit/master",alt:"badge"}))),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("p",null,"A mutation score badge sure is nice, but what does the future bring?"),(0,a.kt)("p",null,"First we want to support monorepo style projects (stryker itself is a mono-repo). Every package in your monorepo will have its own badge.\nWe also want to support a cumulative badge for in your main readme file."),(0,a.kt)("p",null,"We would also like to support more build servers and use cases. Are you missing a feature?\nPlease let us know by opening ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-dashboard/issues/new"},"an issue"),"."),(0,a.kt)("p",null,"But the dashboard is more than just badges. We truly want to make this the home of your test quality.\nYou can think of features like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Showing your html mutation report."),(0,a.kt)("li",{parentName:"ul"},"Keep your history and show trend lines."),(0,a.kt)("li",{parentName:"ul"},"Informing you how a pull request changes your mutation score."),(0,a.kt)("li",{parentName:"ul"},"Support mutation testing frameworks for other languages.")),(0,a.kt)("p",null,"We are curious to know what you think."))}p.isMDXComponent=!0}}]);