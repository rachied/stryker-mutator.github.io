"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2297],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,h=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5560:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return i},toc:function(){return l},default:function(){return p}});var n=r(7462),a=(r(7294),r(3905));const o={title:"Current state",sidebar_position:20,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/current-state.md"},s=void 0,c={unversionedId:"stryker-net/technical-reference/fsharp/current-state",id:"stryker-net/technical-reference/fsharp/current-state",title:"Current state",description:"The following have been added to secure Fsharp support in the future:",source:"@site/docs/stryker-net/technical-reference/fsharp/current-state.md",sourceDirName:"stryker-net/technical-reference/fsharp",slug:"/stryker-net/technical-reference/fsharp/current-state",permalink:"/docs/stryker-net/technical-reference/fsharp/current-state",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/current-state.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Current state",sidebar_position:20,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/fsharp/current-state.md"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/stryker-net/technical-reference/fsharp/classes"},next:{title:"Packages",permalink:"/docs/stryker-net/technical-reference/fsharp/packages"}},i={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following have been added to secure Fsharp support in the future:"),(0,a.kt)("p",null,"Code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FsharpCompilingProcess.cs",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"used to compile fsharp SyntaxTrees")),(0,a.kt)("li",{parentName:"ul"},"Fsharp variant of the ProjectComponents",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"used to simulate a file structure in Stryker, and keep track of files in general")),(0,a.kt)("li",{parentName:"ul"},"FsharpProjectComponentsBuilder.cs",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"used to instantiate the ProjectComponents for F#")),(0,a.kt)("li",{parentName:"ul"},"a set of classes to create Orchestrators for F# SyntaxTrees (ParsedInput)",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"used to iterate over a given SyntaxTree")),(0,a.kt)("li",{parentName:"ul"},"FsharpMutationProcess.cs\n",(0,a.kt)("em",{parentName:"li"},"added to connect the different processes")),(0,a.kt)("li",{parentName:"ul"},"MutationTestProcess.cs\n",(0,a.kt)("em",{parentName:"li"},"used to start the FsharpMutationProcess.cs"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FSharp.Compiler.Service"),(0,a.kt)("li",{parentName:"ul"},"Microsoft.FSharp"),(0,a.kt)("li",{parentName:"ul"},"FSharp.Core")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Other:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a .fs file to  use for the creation of tests for the F#-components"),(0,a.kt)("li",{parentName:"ul"},"a test project writen in F# to use as input for Stryker.net"),(0,a.kt)("li",{parentName:"ul"},"a C# project use to test the process of iterating on a SyntaxTree in F#"),(0,a.kt)("li",{parentName:"ul"},"general cleanup of existing code")))}p.isMDXComponent=!0}}]);