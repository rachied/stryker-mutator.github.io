"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[9491],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(n),g=r,k=s["".concat(d,".").concat(g)]||s[g]||m[g]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1716:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var a=n(7462),r=(n(7294),n(3905));const l={title:"Migration guide",sidebar_position:90,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/migration-guide.md"},i="Migration guide",o={unversionedId:"stryker-net/migration-guide",id:"stryker-net/migration-guide",title:"Migration guide",description:"This guide instructs how to update major versions of Stryker.NET.",source:"@site/docs/stryker-net/migration-guide.md",sourceDirName:"stryker-net",slug:"/stryker-net/migration-guide",permalink:"/docs/stryker-net/migration-guide",draft:!1,editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/migration-guide.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Migration guide",sidebar_position:90,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/migration-guide.md"},sidebar:"docs",previous:{title:"Updating",permalink:"/docs/stryker-net/updating"},next:{title:"Introduction",permalink:"/docs/stryker-net/technical-reference/introduction"}},d={},u=[{value:"V0.x --&gt; V1.x",id:"v0x----v1x",level:2},{value:"\u23ed Updated runtime",id:"-updated-runtime",level:3},{value:"\u23ed Options rework",id:"-options-rework",level:3},{value:"Multi value options",id:"multi-value-options",level:4},{value:"Options migration guide",id:"options-migration-guide",level:4}],p={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-guide"},"Migration guide"),(0,r.kt)("p",null,"This guide instructs how to update major versions of Stryker.NET."),(0,r.kt)("h2",{id:"v0x----v1x"},"V0.x --\x3e V1.x"),(0,r.kt)("h3",{id:"-updated-runtime"},"\u23ed Updated runtime"),(0,r.kt)("p",null,"The .NET runtime for Stryker.NET has been updated from 3.1 to 5.0."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/5.0"},"download and install .NET 5.0")," or update your pipeline to support .NET 5."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that you do not have to update your application to use dotnet 5. Dotnet 5 is only a runtime requirement for stryker to be able to run on your system.")),(0,r.kt)("h3",{id:"-options-rework"},"\u23ed Options rework"),(0,r.kt)("p",null,"Almost all options have been renamed or work different. A fundamental difference on the CLI is how multi value options are passed."),(0,r.kt)("h4",{id:"multi-value-options"},"Multi value options"),(0,r.kt)("p",null,"The old annotation for passing multi value options was confusing and not based on any standards. For example this is how multiple reporters were passed \ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet stryker --reporters \"['html', 'progress']\"\n")),(0,r.kt)("p",null,"This now looks like \ud83d\udc4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'dotnet stryker --reporter "html" --reporter "progress"\n')),(0,r.kt)("h4",{id:"options-migration-guide"},"Options migration guide"),(0,r.kt)("p",null,"A lot of options have been renamed. We have also decided that some options either do not belong on the commandline or don't belong in the configuration file. For example an API key should not be stored in the configuration file so that possibility has been removed."),(0,r.kt)("p",null,"Options migration overview:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Old cli"),(0,r.kt)("th",{parentName:"tr",align:null},"New cli"),(0,r.kt)("th",{parentName:"tr",align:null},"Old json"),(0,r.kt)("th",{parentName:"tr",align:null},"New json"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config-file-path"),(0,r.kt)("td",{parentName:"tr",align:null},"f ","|"," config-file"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max-concurrent-testrunners"),(0,r.kt)("td",{parentName:"tr",align:null},"c ","|"," concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"max-concurrent-testrunners"),(0,r.kt)("td",{parentName:"tr",align:null},"concurrency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dev-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"dev-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"dev-mode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"solution-path"),(0,r.kt)("td",{parentName:"tr",align:null},"s ","|"," solution"),(0,r.kt)("td",{parentName:"tr",align:null},"solution-path"),(0,r.kt)("td",{parentName:"tr",align:null},"solution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log-file"),(0,r.kt)("td",{parentName:"tr",align:null},"L ","|"," log-to-file"),(0,r.kt)("td",{parentName:"tr",align:null},"log-file"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log-level"),(0,r.kt)("td",{parentName:"tr",align:null},"V ","|"," verbosity"),(0,r.kt)("td",{parentName:"tr",align:null},"log-level"),(0,r.kt)("td",{parentName:"tr",align:null},"verbosity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutation-level"),(0,r.kt)("td",{parentName:"tr",align:null},"l ","|"," mutation-level"),(0,r.kt)("td",{parentName:"tr",align:null},"mutation-level"),(0,r.kt)("td",{parentName:"tr",align:null},"mutation-level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold-high"),(0,r.kt)("td",{parentName:"tr",align:null},"threshold-high"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.high"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.high")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold-low"),(0,r.kt)("td",{parentName:"tr",align:null},"threshold-low"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.low"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.low")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold-break"),(0,r.kt)("td",{parentName:"tr",align:null},"b ","|"," break-at"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.break"),(0,r.kt)("td",{parentName:"tr",align:null},"thresholds.break")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reporters"),(0,r.kt)("td",{parentName:"tr",align:null},"r ","|"," reporter (flag allowed multiple times)"),(0,r.kt)("td",{parentName:"tr",align:null},"reporters"),(0,r.kt)("td",{parentName:"tr",align:null},"reporters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-file"),(0,r.kt)("td",{parentName:"tr",align:null},"p ","|"," project"),(0,r.kt)("td",{parentName:"tr",align:null},"project-file"),(0,r.kt)("td",{parentName:"tr",align:null},"project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diff"),(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"diff"),(0,r.kt)("td",{parentName:"tr",align:null},"since")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout-ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"timeout-ms"),(0,r.kt)("td",{parentName:"tr",align:null},"additional-timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"excluded-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"excluded-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore-mutations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignore-methods"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore-methods"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore-methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutate"),(0,r.kt)("td",{parentName:"tr",align:null},"m ","|"," mutate"),(0,r.kt)("td",{parentName:"tr",align:null},"mutate"),(0,r.kt)("td",{parentName:"tr",align:null},"mutate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"language-version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"language-version"),(0,r.kt)("td",{parentName:"tr",align:null},"language-version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coverage-analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"coverage-analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"coverage-analysis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort-test-on-fail"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"abort-test-on-fail"),(0,r.kt)("td",{parentName:"tr",align:null},"disable-bail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disable-testing-mix-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"disable-testing-mix-mutations"),(0,r.kt)("td",{parentName:"tr",align:null},"disable-mix-mutants")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"test-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"test-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"test-projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-url"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-api-key"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-api-key"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-api-key"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-project"),(0,r.kt)("td",{parentName:"tr",align:null},"project-info.name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"module-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-module"),(0,r.kt)("td",{parentName:"tr",align:null},"project-info.module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-version"),(0,r.kt)("td",{parentName:"tr",align:null},"v ","|"," version"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-version"),(0,r.kt)("td",{parentName:"tr",align:null},"project-info.version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"diff-ignore-files"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"diff-ignore-files"),(0,r.kt)("td",{parentName:"tr",align:null},"since.ignore-changes-in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-url"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline.azure-fileshare-url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-fallback-version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-fallback-version"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline.fallback-version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"baseline-storage-location"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline-storage-location"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline.provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-compare"),(0,r.kt)("td",{parentName:"tr",align:null},"with-baseline"),(0,r.kt)("td",{parentName:"tr",align:null},"dashboard-compare"),(0,r.kt)("td",{parentName:"tr",align:null},"baseline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git-diff-target"),(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"git-diff-target"),(0,r.kt)("td",{parentName:"tr",align:null},"since.target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-sas"),(0,r.kt)("td",{parentName:"tr",align:null},"azure-fileshare-sas"),(0,r.kt)("td",{parentName:"tr",align:null},"azure-storage-sas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files-to-exclude"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"files-to-exclude"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"test-runner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"test-runner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))))}m.isMDXComponent=!0}}]);