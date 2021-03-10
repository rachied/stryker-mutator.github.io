(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(196));const o={slug:"azure-pipelines-integration",title:"Integrating Stryker.NET in your azure pipelines",author:"Richard Werkman",author_title:"Stryker.NET Team",author_url:"https://github.com/richardwerkman",author_image_url:"https://avatars1.githubusercontent.com/u/14224500?s=460&u=189f6ef9ab6957063d0674f94c014bef39bf4653&v=4",tags:["stryker.net"]},i={permalink:"/blog/azure-pipelines-integration",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-05-15-azure-pipelines-integration.md",source:"@site/blog/2020-05-15-azure-pipelines-integration.md",description:"Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration.",date:"2020-05-15T00:00:00.000Z",formattedDate:"May 15, 2020",tags:[{label:"stryker.net",permalink:"/blog/tags/stryker-net"}],title:"Integrating Stryker.NET in your azure pipelines",readingTime:4.605,truncated:!0,prevItem:{title:"Announcing Stryker 4.0 Beta",permalink:"/blog/announcing-stryker-4-beta-mutation-switching"},nextItem:{title:"Announcing Stryker 100% mode",permalink:"/blog/announcing-100-mode"}},l=[{value:"\ud83d\ude80 Speed",id:"-speed",children:[]},{value:"\ud83d\udd0e Git integration",id:"-git-integration",children:[]},{value:"\u2728 Reporting",id:"-reporting",children:[]},{value:"\u26d4 Forcing test quality",id:"-forcing-test-quality",children:[]},{value:"\ud83c\udf86 Conclusion",id:"-conclusion",children:[]},{value:"\ud83d\udd2e What&#39;s next?",id:"-whats-next",children:[]}],s={toc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Over the past few months we have been working hard to integrate Stryker.NET with azure pipelines. Learn how you can leverage our new features to include mutation testing in your continuous integration."),Object(a.b)("p",null,"When using continuous integration it can be hard to keep track of quality. By integrating Stryker in your build pipelines you can ensure a continued focus on test quality, no matter how many changes your code gets to see."),Object(a.b)("h2",{id:"-speed"},"\ud83d\ude80 Speed"),Object(a.b)("p",null,"Stryker.NET is now faster than ever! This means you can run mutation testing for every pull request without waiting too long for your build to succeed."),Object(a.b)("p",null,"Some performance improvements we have implemented:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Mutation switching",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"We compile all mutants at once using conditional statements around the mutations. When testing the mutants we only have to flip the switch to turn it on \ud83d\udd1b"))),Object(a.b)("li",{parentName:"ul"},"Integration with VSTest",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This is the fastest way to run your tests. And VSTest supports all well known test frameworks."))),Object(a.b)("li",{parentName:"ul"},"Coverage analysis",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"We do not test mutants that are not covered by any test. And we only run the tests that cover the mutant when testing that mutant."))),Object(a.b)("li",{parentName:"ul"},"Testing mutants in parallel",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"We run multiple test sessions at once to test the mutants even faster."))),Object(a.b)("li",{parentName:"ul"},"Using the same test session for non overlapping mutants",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Mutants that are in a different file and have no overlapping covered tests are run in the same test session to remove the overhead of starting a new test session.")))),Object(a.b)("p",null,"By implementing all these performance tweaks we can now proudly say we are fast enough to use in your pipeline! So if performance was holding you back, now is the moment to give Stryker.NET a try! \ud83d\ude80"),Object(a.b)("h2",{id:"-git-integration"},"\ud83d\udd0e Git integration"),Object(a.b)("p",null,"On large projects we can also use git to filter changed files in a pull request. That way only the changed code will be mutated. This helps to use mutation testing in pull request even on the largest projects."),Object(a.b)("p",null,"How does this work? Simply run Stryker.NET with the following command in your PR build:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dotnet stryker --diff\n")),Object(a.b)("p",null,"This will use the master branch as base by default. If you use a different branch as base for your pull requests you can change the base branch like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dotnet stryker --diff --git-source \"coalesce(variables['System.PullRequest.TargetBranch'], variables['Build.SourceBranchName'])\"\n")),Object(a.b)("p",null,"This will get the pull request target branch, or the build source branch if no pull request target branch is available."),Object(a.b)("p",null,"\ud83d\udca1 Tip:\nYou can use this feature locally too, if you want to quickly mutate your new feature."),Object(a.b)("h2",{id:"-reporting"},"\u2728 Reporting"),Object(a.b)("p",null,"Another feature we are proud of is our integration with azure devops."),Object(a.b)("p",null,"You can now display the html report in your azure devops environment using an ",Object(a.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher"},"azure devops extension"),"."),Object(a.b)("p",null,Object(a.b)("img",{src:n(285).default})),Object(a.b)("p",null,Object(a.b)("img",{src:n(286).default})),Object(a.b)("p",null,"The extension will add a new tab to your build result page. This new tab will contain the full html report that is also available locally and on the stryker dashboard."),Object(a.b)("p",null,"How to use the extension:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install the ",Object(a.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher"},"extension")," on your azure devops environment"),Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"dotnet stryker")," in your pipeline."),Object(a.b)("li",{parentName:"ul"},"Make sure the ",Object(a.b)("inlineCode",{parentName:"li"},"html reporter")," is enabled (default)."),Object(a.b)("li",{parentName:"ul"},"Add the ",Object(a.b)("inlineCode",{parentName:"li"},"publish mutation report")," task to your pipeline (after ",Object(a.b)("inlineCode",{parentName:"li"},"dotnet stryker"),")"),Object(a.b)("li",{parentName:"ul"},"Pass the path to the html report")),Object(a.b)("p",null,"Example:\n",Object(a.b)("img",{src:n(287).default})),Object(a.b)("p",null,"\ud83d\udca1 Note: The extension does work for other mutation test frameworks as well. As long as the framework outputs a html report and you provide the location to the task, it will be displayed in your build result tab."),Object(a.b)("h2",{id:"-forcing-test-quality"},"\u26d4 Forcing test quality"),Object(a.b)("p",null,"It's great that it is now possible to monitor the test quality automatically. But if you want to take a step even further towards maintaining your test quality you can set a breaking threshold."),Object(a.b)("p",null,"This will break your pipeline if a minimum mutation score wasn't reached."),Object(a.b)("p",null,"How to use custom thresholds:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"dotnet stryker --threshold-high 90 --threshold-low 75 --threshold-break 60\n")),Object(a.b)("p",null,"or in ",Object(a.b)("inlineCode",{parentName:"p"},"stryker-config.json")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n    "stryker-config":\n    {\n        "threshold-high": 90,\n        "threshold-low": 75,\n        "threshold-break": 60\n    }\n}\n')),Object(a.b)("p",null,"This will make Stryker return a non-zero exit code when the mutation score is below 60."),Object(a.b)("p",null,Object(a.b)("img",{src:n(288).default})),Object(a.b)("p",null,"\ud83d\udca1 Tip:\nIf you think your mutation score is too low, try to increase the threshold every few months to gradually improve your tests."),Object(a.b)("p",null,"\ud83d\udca1 Tip:\nIf you can't seem to kill a mutant, maybe the mutated code is not needed and can be safely removed."),Object(a.b)("h2",{id:"-conclusion"},"\ud83c\udf86 Conclusion"),Object(a.b)("p",null,"With all these features nothing stands in your way to go and add Stryker.NET to your build pipeline."),Object(a.b)("p",null,"If we put all these features together your pipeline could look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"steps:\n- task: UseDotNet@2\ndisplayName: 'Use .Net Core runtime 3.1.x'\ninputs:\n    packageType: runtime\n    version: 3.1.x\n- task: DotNetCoreCLI@2\ndisplayName: 'Install dotnet tools for Stryker.CLI'\ninputs:\n    command: custom\n    custom: 'tool restore'\n    workingDirectory: 'src\\Stryker.CLI\\Stryker.CLI.UnitTest'\n- task: DotNetCoreCLI@2\ndisplayName: 'Run stryker on Stryker.CLI'\ninputs:\n    command: custom\n    custom: 'stryker --reporters \"[''dashboard'', ''html'']\" --threshold-high 90 --threshold-low 75 --threshold-break 60 --diff'\n    workingDirectory: 'src\\Stryker.CLI\\Stryker.CLI.UnitTest'\n- task: stryker-mutator.mutation-report-publisher.publish-mutation-report.publish-mutation-report@0\ndisplayName: 'Publish Mutation Test Report'\ninputs:\n    reportPattern: 'src\\Stryker.CLI\\Stryker.CLI.UnitTest\\**\\mutation-report.html'\n")),Object(a.b)("p",null,"If you run into trouble during installation or running, please let us know so we can improve."),Object(a.b)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next?"),Object(a.b)("p",null,"The upcoming months you can expect even more awesome features and improvements in Stryker.NET."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"git diff")," feature will be greatly improved and result in a full report."),Object(a.b)("li",{parentName:"ul"},"Regex mutator (never seen before in mutation testing)"),Object(a.b)("li",{parentName:"ul"},"Mutating a whole solution at once")),Object(a.b)("p",null,"Want to help make Stryker even better? Check out our ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-net/issues"},"open issues"),". Or help with implementing ",Object(a.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker/issues/1514"},"mutation switching for Stryker (js)")))}u.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(h,l(l({ref:t},u),{},{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/azure-devops-extension1-df924006f9db056386c1272353dee980.png"},286:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/azure-devops-extension3-ae41ccf2157de44828c7dc9bb162c264.png"},287:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/azure-devops-extension2-4efaa064e4738aba5845296c6a82c790.png"},288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/threshold-break-d641499daa8b61067d4f1c6a589c6ce1.png"}}]);