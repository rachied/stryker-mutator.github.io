"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8827],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,g=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=(n(7294),n(3905));const a={slug:"one-mutation-testing-html-report",title:"One mutation testing HTML report",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker","stryker4s","stryker.net","mutation testing elements"]},i=void 0,s={permalink:"/blog/one-mutation-testing-html-report",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-04-03-one-mutation-testing-html-report.md",source:"@site/blog/2019-04-03-one-mutation-testing-html-report.md",title:"One mutation testing HTML report",description:"If you've used Stryker before, you'll know that it produces a gorgeous report you can view in the browser.",date:"2019-04-03T00:00:00.000Z",formattedDate:"April 3, 2019",tags:[{label:"stryker",permalink:"/blog/tags/stryker"},{label:"stryker4s",permalink:"/blog/tags/stryker-4-s"},{label:"stryker.net",permalink:"/blog/tags/stryker-net"},{label:"mutation testing elements",permalink:"/blog/tags/mutation-testing-elements"}],readingTime:2.85,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Announcing Stryker.NET 0.10 with .NET Framework support",permalink:"/blog/announcing-dotnet-framework-support"},nextItem:{title:"Announcing Stryker 1.0",permalink:"/blog/announcing-stryker-1-0"}},l={authorsImageUrls:[void 0]},p=[{value:"\ud83d\udc77\u200d Usage",id:"-usage",children:[],level:2},{value:"\ud83d\udcb8 Show me the money",id:"-show-me-the-money",children:[],level:2},{value:"\ud83d\udcad How it works",id:"-how-it-works",children:[],level:2},{value:"\ud83d\udcaa Call to action",id:"-call-to-action",children:[],level:2},{value:"\ud83d\udd2e What&#39;s next?",id:"-whats-next",children:[],level:2}],u={toc:p};function m({components:e,...t}){return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you've used Stryker before, you'll know that it produces a gorgeous report you can view in the browser.\nIt works by generating HTML files based on the events raised by Stryker.\nDuring development of Stryker4s and Stryker.NET, we realized that producing the same report would be a lot of\nwork."),(0,o.kt)("p",null,"Instead of a new HTML reporter implementation for each Stryker framework, we've decided to move the logic of presenting the report to your browser.\nThat way, any framework can support an HTML report simply by producing a JSON file."),(0,o.kt)("p",null,"We call it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements#readme"},"mutation testing elements")," and\nit is implemented using the mature\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/components-intro/"},"web components suite of features"),".\nYou can now use it in Stryker, Stryker.NET and Stryker4s"),(0,o.kt)("h2",{id:"-usage"},"\ud83d\udc77\u200d Usage"),(0,o.kt)("p",null,"To enable the new HTML reporter, simply update to the latest Stryker release and\nenable the HTML reporter in the implementation of your choice."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stryker")," (since v1.2)",(0,o.kt)("br",{parentName:"li"}),"Enable by adding ",(0,o.kt)("inlineCode",{parentName:"li"},"'html'")," to your ",(0,o.kt)("inlineCode",{parentName:"li"},"reporters")," in your ",(0,o.kt)("inlineCode",{parentName:"li"},"stryker.conf.js")," file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stryker4s")," (since v0.3.1)",(0,o.kt)("br",{parentName:"li"}),"Enable by adding ",(0,o.kt)("inlineCode",{parentName:"li"},'"html"')," to your ",(0,o.kt)("inlineCode",{parentName:"li"},"reporters")," in your ",(0,o.kt)("inlineCode",{parentName:"li"},"stryker4s.conf")," file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stryker.NET")," (since v0.9)",(0,o.kt)("br",{parentName:"li"}),"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},'"html"')," as reporter in your ",(0,o.kt)("inlineCode",{parentName:"li"},"stryker-config.json")," file.")),(0,o.kt)("p",null,"Upgrading should be painless."),(0,o.kt)("h2",{id:"-show-me-the-money"},"\ud83d\udcb8 Show me the money"),(0,o.kt)("p",null,"See two screenshots taken from a mutation testing report of Stryker itself \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Directory",src:n(1787).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"File",src:n(171).Z})),(0,o.kt)("p",null,"Mutation testing elements comes with batteries included:"),(0,o.kt)("p",null,"\ud83d\udcca Calculates and displays the mutation score and other metrics",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udcc1 Group results into directories",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udc53 Show mutants directly in your source code",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\ude0e Highlight code with embedded ",(0,o.kt)("a",{parentName:"p",href:"https://highlightjs.org/"},"highlightjs"),(0,o.kt)("br",{parentName:"p"}),"\n","\ud83e\uddd9\u200d Filter mutants based on the outcome",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 Deep linking using anchors (uses fragment, so path will not be contaminated)",(0,o.kt)("br",{parentName:"p"}),"\n","\u2728 A nice (yet basic) UI with embedded ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com"},"bootstrap")," css",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83c\udf93 Adheres to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/web-components/best-practices"},"custom element best practices")),(0,o.kt)("h2",{id:"-how-it-works"},"\ud83d\udcad How it works"),(0,o.kt)("p",null,"Using mutation testing elements is as simple as loading the JavaScript bundle and adding\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"mutation-test-report-app")," to your page, pointing the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," to a json file that contains the\nmutation testing results to be displayed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <script src="https://www.unpkg.com/mutation-testing-elements@1.0.2/dist/mutation-test-elements.js"><\/script>\n  <mutation-test-report-app src="mutation-report.json">\n    Your browser does not support custom elements. Please use a modern browser.\n  </mutation-test-report-app>\n</body>\n')),(0,o.kt)("p",null,"Loading from an external source (using ",(0,o.kt)("inlineCode",{parentName:"p"},'src="..."'),") only works if you serve the HTML file from a server.\nUse property binding to also support opening your HTML report from disk directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.querySelector('mutation-test-report-app').report = {\n  /*... report data ...*/\n};\n")),(0,o.kt)("p",null,"The report json should adhere to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-report-schema#readme"},"mutation testing report json schema"),",\nwe've designed it with this specific goal in mind."),(0,o.kt)("p",null,"For more information on how to use it, as well as where to find the JavaScript implementation, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements/tree/master/packages/mutation-testing-elements#readme"},"readme of mutation testing elements"),"\non github. Want to contribute or suggest changes? Feel free to do so in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements"},"mutation testing elements mono repo"),"."),(0,o.kt)("h2",{id:"-call-to-action"},"\ud83d\udcaa Call to action"),(0,o.kt)("p",null,"Mutation testing elements is here to help out all mutation testing frameworks.\nWe've contacted the guys over at ",(0,o.kt)("a",{parentName:"p",href:"https://infection.github.io/"},"Infection")," (PHP)\nand they will ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infection/infection/issues/340#issuecomment-477148001"},"support it in the future"),"."),(0,o.kt)("p",null,"If your mutation testing framework isn't supported, why not open up an issue at their side.\nOr better yet, implement it in a pull request. Most of them are open source after all.\nSpread the word \ud83d\udc96 to help us grow \ud83c\udf33."),(0,o.kt)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next?"),(0,o.kt)("p",null,"We're planning to upgrade the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.stryker-mutator.io"},"Stryker dashboard"),".\nRight now it already supports ",(0,o.kt)("a",{parentName:"p",href:"/blog/2018-02-08/get-your-mutation-score-badge-now"},"showing a mutation score badge"),".\nIn the future, you will be able to host your entire mutation testing report there. Stay tuned."),(0,o.kt)("p",null,"Happy mutation testing!"))}m.isMDXComponent=!0},1787:function(e,t,n){t.Z=n.p+"assets/images/mutation-testing-elements-directory-f919eca129ceb16039516b419252d0e2.png"},171:function(e,t,n){t.Z=n.p+"assets/images/mutation-testing-elements-file-2d576e8094884654c30afabce2975b69.png"}}]);