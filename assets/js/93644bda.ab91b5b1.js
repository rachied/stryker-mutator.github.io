"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8948],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,g=p["".concat(s,".").concat(k)]||p[k]||m[k]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7224:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},assets:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),r=(n(7294),n(3905));const l={slug:"2021-30-10-announcing-stryker-net-1.md",title:"Announcing Stryker.NET 1.0",author:"Richard Werkman",author_title:"Stryker Team",author_url:"https://github.com/richardwerkman",author_image_url:"https://avatars.githubusercontent.com/u/14224500?v=4",tags:["stryker.net","release","mutation testing","stryker mutator","stryker"]},i="Announcing Stryker.NET 1.0 - No more beta!",o={permalink:"/blog/2021-30-10-announcing-stryker-net-1.md",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2021-10-30-announcing-stryker-net-1.md",source:"@site/blog/2021-10-30-announcing-stryker-net-1.md",title:"Announcing Stryker.NET 1.0",description:"We're proud to announce the first major release of Stryker.NET: 1.0. It comes with exciting new features and an overhaul of how you interact with the Stryker CLI. With the release of Stryker 1.0, we wanted to create a cohesive and intuitive user experience.",date:"2021-10-30T00:00:00.000Z",formattedDate:"October 30, 2021",tags:[{label:"stryker.net",permalink:"/blog/tags/stryker-net"},{label:"release",permalink:"/blog/tags/release"},{label:"mutation testing",permalink:"/blog/tags/mutation-testing"},{label:"stryker mutator",permalink:"/blog/tags/stryker-mutator"},{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:8.285,truncated:!0,authors:[{name:"Richard Werkman",title:"Stryker Team",url:"https://github.com/richardwerkman",imageURL:"https://avatars.githubusercontent.com/u/14224500?v=4"}],nextItem:{title:"Stryker4s: from 40 minutes to 40 seconds",permalink:"/blog/stryker4s-40-minutes-to-40-seconds"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\udca5 Breaking changes",id:"-breaking-changes",children:[{value:"\u23ed Updated runtime",id:"-updated-runtime",children:[],level:3},{value:"\u23ed Options rework",id:"-options-rework",children:[{value:"Multi value options",id:"multi-value-options",children:[],level:4},{value:"Options migration guide",id:"options-migration-guide",children:[],level:4}],level:3}],level:2},{value:"\ud83d\ude80 What&#39;s new?",id:"-whats-new",children:[{value:"Statement removal mutator",id:"statement-removal-mutator",children:[],level:3},{value:"Allow failing tests",id:"allow-failing-tests",children:[],level:3},{value:"Mutant filtering",id:"mutant-filtering",children:[],level:3},{value:"Ignore mutations",id:"ignore-mutations",children:[],level:3},{value:"MsBuild path option",id:"msbuild-path-option",children:[],level:3},{value:"Target framework",id:"target-framework",children:[],level:3},{value:"Filter test cases",id:"filter-test-cases",children:[],level:3},{value:"Use Source Link for dashboard reporter",id:"use-source-link-for-dashboard-reporter",children:[],level:3},{value:"Block removal mutations",id:"block-removal-mutations",children:[],level:3}],level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",children:[{value:"No more mutated assembly on disk after Stryker run",id:"no-more-mutated-assembly-on-disk-after-stryker-run",children:[],level:3}],level:2},{value:"\ud83d\udc6a Team expansion",id:"-team-expansion",children:[],level:2},{value:"\ud83c\udf89 Thank you",id:"-thank-you",children:[],level:2}],d={toc:u};function m({components:t,...e}){return(0,r.kt)("wrapper",(0,a.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're proud to announce the first major release of Stryker.NET: 1.0. It comes with exciting new features and an overhaul of how you interact with the Stryker CLI. With the release of Stryker 1.0, we wanted to create a cohesive and intuitive user experience."),(0,r.kt)("p",null,"If you're new to mutation testing, it's a way to measure your tests' effectiveness. A mutation testing framework will make small changes, called ",(0,r.kt)("em",{parentName:"p"},"mutants"),', one by one in your source code. Then it will run your tests to see if one of them fails. If so, you just "killed" that mutant; if not, it "survived". If too many mutants survive, you probably want to improve your tests. The mutation testing report will give you insides into the test cases you may have missed. If this all sounds complicated, please take a look at ',(0,r.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/example"},"our RoboBar \ud83e\udd16\ud83c\udf77 example"),"."),(0,r.kt)("p",null,"If you're new to Stryker.NET, please follow our ",(0,r.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/docs/stryker-net/getting-started/"},"Getting started guide"),". Are you already using Stryker.NET? Update to the latest version with the following command:"),(0,r.kt)("p",null,"Global install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet tool update dotnet-stryker --global\n")),(0,r.kt)("p",null,"Project install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet tool update dotnet-stryker --local\n")),(0,r.kt)("p",null,"With that out of the way, let's dive into the new stuff!"),(0,r.kt)("h2",{id:"-breaking-changes"},"\ud83d\udca5 Breaking changes"),(0,r.kt)("h3",{id:"-updated-runtime"},"\u23ed Updated runtime"),(0,r.kt)("p",null,"The .NET runtime for Stryker.NET has been updated from 3.1 to 5.0."),(0,r.kt)("p",null,"This update should have some performance benefits, and it will help with developing Stryker.NET in the future."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/5.0"},"download and install .NET 5.0")," or update your pipeline to support .NET 5."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that you do not have to update your application to use dotnet 5. Dotnet 5 is only a runtime requirement for Stryker to be able to run on your system.")),(0,r.kt)("h3",{id:"-options-rework"},"\u23ed Options rework"),(0,r.kt)("p",null,"Most options have been renamed or work differently."),(0,r.kt)("p",null,"A fundamental difference is how you pass multi-value options from the command line."),(0,r.kt)("h4",{id:"multi-value-options"},"Multi value options"),(0,r.kt)("p",null,"The old annotation for passing multi-value options was confusing and not based on any standards. For example, this is how you provided multiple reporters pre 1.0 \ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet stryker --reporters \"['html', 'progress']\"\n")),(0,r.kt)("p",null,"From 1.0 onward, this now looks like \ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'dotnet stryker --reporter "html" --reporter "progress"\n')),(0,r.kt)("h4",{id:"options-migration-guide"},"Options migration guide"),(0,r.kt)("p",null,"Most options have a new name. We have also decided that some options either don't belong on the commandline or don't belong in the configuration file. For example, an API key should not be stored in the configuration file so that possibility has been removed."),(0,r.kt)("p",null,"Options migration overview:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Old cli"),(0,r.kt)("th",{parentName:"tr",align:null},"New cli"),(0,r.kt)("th",{parentName:"tr",align:null},"Old json"),(0,r.kt)("th",{parentName:"tr",align:null},"New json"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config-file-path"),(0,r.kt)("td",{parentName:"tr",align:null},"f ","|"," config-file"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max-concurrent-testrunners"),(0,r.kt)("td",{parentName:"tr",align:null},"c ","|"," concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"max-concurrent-testrunners"),(0,r.kt)("td",{parentName:"tr",align:null},"concurrency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"dev-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"dev-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"solution-path"),(0,r.kt)("td",{parentName:"tr",align:null},"s ","|"," solution"),(0,r.kt)("td",{parentName:"tr",align:null},"solution-path"),(0,r.kt)("td",{parentName:"tr",align:null},"solution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log-file"),(0,r.kt)("td",{parentName:"tr",align:null},"L ","|"," log-to-file"),(0,r.kt)("td",{parentName:"tr",align:null},"log-file"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log-level"),(0,r.kt)("td",{parentName:"tr",align:null},"V ","|"," verbosity"),(0,r.kt)("td",{parentName:"tr",align:null},"log-level"),(0,r.kt)("td",{parentName:"tr",align:null},"verbosity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutation-level"),(0,r.kt)("td",{parentName:"tr",align:null},"l ","|"," mutation-level"),(0,r.kt)("td",{parentName:"tr",align:null},"mutation-level"),(0,r.kt)("td",{parentName:"tr",align:null},"mutation-level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold-high"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.high"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.high")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold-low"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.low"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.low")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold-break"),(0,r.kt)("td",{parentName:"tr",align:null},"b ","|"," break-at"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.break"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.break")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reporters"),(0,r.kt)("td",{parentName:"tr",align:null},"r ","|"," reporter (flag allowed multiple times)"),(0,r.kt)("td",{parentName:"tr",align:null},"reporters"),(0,r.kt)("td",{parentName:"tr",align:null},"reporters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-file"),(0,r.kt)("td",{parentName:"tr",align:null},"p ","|"," project"),(0,r.kt)("td",{parentName:"tr",align:null},"project-file"),(0,r.kt)("td",{parentName:"tr",align:null},"project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diff"),(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"diff"),(0,r.kt)("td",{parentName:"tr",align:null},"since")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout-ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"timeout-ms"),(0,r.kt)("td",{parentName:"tr",align:null},"additional-timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"excluded-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"excluded-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore-mutations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignore-methods"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore-methods"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore-methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutate"),(0,r.kt)("td",{parentName:"tr",align:null},"m ","|"," mutate"),(0,r.kt)("td",{parentName:"tr",align:null},"mutate"),(0,r.kt)("td",{parentName:"tr",align:null},"mutate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"language-version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"language-version"),(0,r.kt)("td",{parentName:"tr",align:null},"language-version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coverage-analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"coverage-analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"coverage-analysis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort-test-on-fail"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"abort-test-on-fail"),(0,r.kt)("td",{parentName:"tr",align:null},"disable-bail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disable-testing-mix-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"disable-testing-mix-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"disable-mix-mutants")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"test-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"test-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"test-projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-url"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-api-key"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-api-key"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-api-key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-project"),(0,r.kt)("td",{parentName:"tr",align:null},"project-info.name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"module-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-module"),(0,r.kt)("td",{parentName:"tr",align:null},"project-info.module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-version"),(0,r.kt)("td",{parentName:"tr",align:null},"v ","|"," version"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-version"),(0,r.kt)("td",{parentName:"tr",align:null},"project-info.version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diff-ignore-files"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"diff-ignore-files"),(0,r.kt)("td",{parentName:"tr",align:null},"since.ignore-changes-in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-url"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline.azure-fileshare-url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-fallback-version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-fallback-version"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline.fallback-version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseline-storage-location"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline-storage-location"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline.provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-compare"),(0,r.kt)("td",{parentName:"tr",align:null},"with-baseline"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-compare"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git-diff-target"),(0,r.kt)("td",{parentName:"tr",align:null},"-","-since ..."),(0,r.kt)("td",{parentName:"tr",align:null},"git-diff-target"),(0,r.kt)("td",{parentName:"tr",align:null},"since.target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-sas"),(0,r.kt)("td",{parentName:"tr",align:null},"azure-fileshare-sas"),(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-sas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files-to-exclude"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"test-runner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("p",null,"\u274c means the option has been removed."),(0,r.kt)("h2",{id:"-whats-new"},"\ud83d\ude80 What's new?"),(0,r.kt)("p",null,"This release comes packed with new features! Let's walk through them all:"),(0,r.kt)("h3",{id:"statement-removal-mutator"},"Statement removal mutator"),(0,r.kt)("p",null,"We introduced a new mutator that removes statements that otherwise would have been untouched by other mutators."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6576).Z})),(0,r.kt)("p",null,"The mutator will remove the following statements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"return")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"break")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"continue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"throw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yield return")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yield break")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expression"))),(0,r.kt)("h3",{id:"allow-failing-tests"},"Allow failing tests"),(0,r.kt)("p",null,"It's now allowed to start a mutation test run even with failing tests. Stryker will try to make the best of the situation by marking mutants covered by ",(0,r.kt)("inlineCode",{parentName:"p"},"initially failing tests")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"survived"),"."),(0,r.kt)("h3",{id:"mutant-filtering"},"Mutant filtering"),(0,r.kt)("p",null,"It's now possible to filter mutants at the source code level using special comments. This filtering gives the most fine-grained level of control."),(0,r.kt)("p",null,"The syntax for the comments is: ",(0,r.kt)("inlineCode",{parentName:"p"},"Stryker [disable|restore][once][all| mutator list][: reason for disabling]")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"// Stryker disable all")," Disables all mutants from that line on."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"// Stryker restore all")," re-enables all mutants from that line on."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"// Stryker disable once all")," will only disable mutants on the next line."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"// Stryker disable once Arithmetic,Update")," will only disable Arithmetic and Update mutants on the next line"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var i = 0;\nvar y = 10;\n// Stryker disable all : for explanatory reasons\ni++; // won't be mutated\ny++; // won't be mutated\n// Stryker restore all\ni--; // will be mutated\n// Stryker disable once all\ny--; // won't be mutated\ni++; // will be mutated\n// Stryker disable once Arithmetic\ny++; // will be mutated\n// Stryker disable once Arithmetic,Update\ni--; // won't be mutated\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that this feature is scope aware. If you disable mutators inside a method, the scope will not leak outside the method, even if there is more code below.")),(0,r.kt)("h3",{id:"ignore-mutations"},"Ignore mutations"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore-mutations")," option now offers more fine-grained control. Before v1.0 it was possible to ignore complete mutators. Now it's possible to ignore specific mutants inside these mutators as well."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"stryker-config": {\n    "ignore-mutations": [\n        "linq.First",\n        "linq.Sum"\n    ]\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this only works for Linq mutations for now, but we plan to bring this functionality to all mutations.")),(0,r.kt)("h3",{id:"msbuild-path-option"},"MsBuild path option"),(0,r.kt)("p",null,"By default Stryker tries to auto-discover MSBuild on your system. However, if Stryker fails to discover the correct MSBuild, you may manually supply the path with this option."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'--msbuild-path "c://MsBuild/MsBuild.exe"\n')),(0,r.kt)("h3",{id:"target-framework"},"Target framework"),(0,r.kt)("p",null,"If the project targets multiple frameworks, it is now possible to specify the particular framework to build against. If you set a non-existent target, Stryker will build the project against a random one (or the only one if so)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stryker-config": {\n    "target-framework": "netcoreapp3.1"\n  }\n}\n')),(0,r.kt)("h3",{id:"filter-test-cases"},"Filter test cases"),(0,r.kt)("p",null,"A long-awaited feature has finally found its way into Stryker! It is now possible to exclude some test cases. So, for example, if you have long-running integration tests in your unit test project, they can be disabled for Stryker, improving the performance."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stryker-config": {\n    "test-case-filter": "(FullyQualifiedName~UnitTest1&TestCategory=CategoryA)|Priority=1"\n  }\n}\n')),(0,r.kt)("p",null,"Uses ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet test --filter")," option syntax, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests"},"detailed here"),"."),(0,r.kt)("h3",{id:"use-source-link-for-dashboard-reporter"},"Use Source Link for dashboard reporter"),(0,r.kt)("p",null,"Filling all settings to use the dashboard reporter could be a bit of a hassle. However, thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotnet/sourcelink#readme"},"Source Link"),", the repository URL and the full version (including the git SHA1) of a project can be included in the produced assembly."),(0,r.kt)("p",null,"Stryker now uses the information computed by SourceLink to automatically retrieve the project name (github.com/organization/project) and project version, both of which are requirements for the dashboard reporter."),(0,r.kt)("p",null,"Enable this by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  <ItemGroup>\n    <PackageReference Include="DotNet.ReproducibleBuilds" Version="0.1.66" PrivateAssets="All"/>\n  </ItemGroup>\n')),(0,r.kt)("p",null,"For more information on SourceLink and ReproducibleBuilds see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotnet/sourcelink"},"SourceLink")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotnet/reproducible-builds"},"Dotnet.ReproducibleBuilds")),(0,r.kt)("h3",{id:"block-removal-mutations"},"Block removal mutations"),(0,r.kt)("p",null,'Finally the last missing "common" mutation is added to Stryker.NET! Block removal mutations empty every block statement in your code. This means method bodies or statement bodies (if, while, for). With this mutation Stryker will have improved coverage on your complete codebase. Every method will have at least one mutation and thus should have at least one test.'),(0,r.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,r.kt)("h3",{id:"no-more-mutated-assembly-on-disk-after-stryker-run"},"No more mutated assembly on disk after Stryker run"),(0,r.kt)("p",null,"During mutation testing, Stryker replaces your system under test assembly on disk. Up till now, the mutated assembly stayed in place after mutation testing was done. This had some unintended side effects. For example, code coverage results could be incorrect until you rebuild your project, and there was the risk of accidentally releasing/publishing the mutated assembly instead of the original if you did not rebuild your project after mutation testing in your pipelines. We now copy your original assembly before we modify it and place it back after mutation testing. No more rebuild required!"),(0,r.kt)("h2",{id:"-team-expansion"},"\ud83d\udc6a Team expansion"),(0,r.kt)("p",null,"We welcome ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dupdob"},"Cyrille DUPUYDAUBY")," to the team! They have supported us with feedback, testing, and development since 2018. It was long past due that we officially recognized their contributions to the project!"),(0,r.kt)("h2",{id:"-thank-you"},"\ud83c\udf89 Thank you"),(0,r.kt)("p",null,"Special thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dupdob"},"Cyrille DUPUYDAUBY"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/psfinaki"},"Peter Semkin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/philrowan-mtb"},"Philip Rowan"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/corentinaltepe"},"Corentin Altepe"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xced"},"C\xe9dric Luthi"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grbell-ms"},"Gregory Bell"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JohnMcGlynnMSFT"},"John McGlynn"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Bforslund"},"Beatrice Forslund"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dukedagmor"},"dukedagmor")," and anyone else we may have missed for their efforts to make this release happen \ud83d\udc4f We truly appreciate all the help and feedback we receive!"))}m.isMDXComponent=!0},6576:function(t,e,n){e.Z=n.p+"assets/images/statement-mutation-387a81c3bb0575513489078eeb6c4ee0.png"}}]);