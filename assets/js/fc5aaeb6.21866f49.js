"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1290],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});n(7294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o={slug:"announcing-incremental-mode",title:"Announcing StrykerJS incremental mode",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker-js"]},i=void 0,s={permalink:"/blog/announcing-incremental-mode",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2022-09-06-announcing-incremental-mode.md",source:"@site/blog/2022-09-06-announcing-incremental-mode.md",title:"Announcing StrykerJS incremental mode",description:"We're excited to announce StrykerJS 6.2. Of course, this release comes with some bug fixes, but in this article, we want to focus on a popular new feature: incremental mutation testing.",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"stryker-js",permalink:"/blog/tags/stryker-js"}],readingTime:6.645,hasTruncateMarker:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"announcing-incremental-mode",title:"Announcing StrykerJS incremental mode",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker-js"]},nextItem:{title:"Connect PIT to Stryker Dashboard",permalink:"/blog/connect-pit-to-stryker-dashboard"}},l={authorsImageUrls:[void 0]},u=[{value:"\u23e9 Incremental mode",id:"-incremental-mode",level:2},{value:"\ud83e\udd62 Limitations",id:"-limitations",level:2},{value:"\ud83d\udd28 Forcing reruns",id:"-forcing-reruns",level:2},{value:"\ud83d\udd01 Continuous Integration (CI)",id:"-continuous-integration-ci",level:2},{value:"\ud83d\udd2e What&#39;s next",id:"-whats-next",level:2}],m={toc:u};function c({components:e,...t}){return(0,r.kt)("wrapper",a({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're excited to announce StrykerJS 6.2. Of course, this release comes with ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/releases/tag/v6.2.0"}),"some bug fixes"),", but in this article, we want to focus on a popular new feature: incremental mutation testing."),(0,r.kt)("p",null,"Incremental mutation testing is ideal for Continuous Integration (CI) scenarios or if you want a faster feedback cycle locally. Indeed, many users seem to be interested in this since ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/issues/2753"}),"it was our most upvoted issue ever"),"."),(0,r.kt)("p",null,"While in 'incremental mode', StrykerJS will track the changes you make to your code and tests and only runs mutation testing on the changed code; while still providing a full mutation testing report at the end!"),(0,r.kt)("p",null,"To update to the latest version of StrykerJS, install ",(0,r.kt)("inlineCode",{parentName:"p"},"@latest")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev @stryker-mutator/core@latest\n# OR\nyarn add --dev @stryker-mutator/core@latest\n")),(0,r.kt)("p",null,"Don't forget to update Stryker plugins. For example, when using the mocha runner:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"npm install --save-dev @stryker-mutator/mocha-runner@latest\n# OR\nyarn add --dev @stryker-mutator/mocha-runner@latest\n")),(0,r.kt)("p",null,"If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please take a look at ",(0,r.kt)("a",a({parentName:"p"},{href:"https://stryker-mutator.io/example"}),"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to know if your tests are any good."),(0,r.kt)("p",null,"Now, let's dive into incremental mode! \ud83c\udfca\u200d\u2642\ufe0f"),(0,r.kt)("h2",a({},{id:"-incremental-mode"}),"\u23e9 Incremental mode"),(0,r.kt)("p",null,"You enable incremental mode with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--incremental")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npx stryker run --incremental\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:")," Setting ",(0,r.kt)("inlineCode",{parentName:"em"},'"incremental": true')," in your stryker.conf.json file is also supported")),(0,r.kt)("p",null,"The first time you do an incremental run, StrykerJS will do an entire run as usual, except it will write the JSON result to a ",(0,r.kt)("inlineCode",{parentName:"p"},"reports/stryker-incremental.json")," file at the end. The next time you run StrykerJS incrementally, it will read this JSON file and try to reuse as much of it as possible."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:")," You can change the file's location with the ",(0,r.kt)("inlineCode",{parentName:"em"},"--incrementalFile")," option.")),(0,r.kt)("p",null,"Reuse of a mutant result is possible when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'That mutant was "Killed"; the culprit test still exists and didn\'t change'),(0,r.kt)("li",{parentName:"ul"},'Or, that mutant was not "Killed"; no new test covers it, and no covering tests changed.')),(0,r.kt)("p",null,"Stryker uses a file diff algorithm to determine which mutants or tests changed. It does this using google's ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/google/diff-match-patch"}),"diff match patch")," library, a small dependency with excellent diffing performance!"),(0,r.kt)("p",null,"You can see the statistics of the incremental analysis in your console. It appears just after the dry run and looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"        Mutants:        1 files changed (+2 -2)\n        Tests:          2 files changed (+22 -21)\n        Result:         3731 of 3965 mutant result(s).\n")),(0,r.kt)("p",null,"Here you can see that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One file with mutants changed (2 mutants added, 2 mutants removed)"),(0,r.kt)("li",{parentName:"ul"},"Two test files changed (22 tests added and 21 tests removed)"),(0,r.kt)("li",{parentName:"ul"},"In total, Stryker reuses 3731 mutant results, meaning only 234 mutants need to run this time.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:"),' Stryker.NET has a similar feature called: "baseline". See ',(0,r.kt)("a",a({parentName:"em"},{href:"https://github.com/stryker-mutator/stryker-js/pull/3609#issuecomment-1170009387"}),"the PR for a detailed comparison"),".")),(0,r.kt)("h2",a({},{id:"-limitations"}),"\ud83e\udd62 Limitations"),(0,r.kt)("p",null,"When in incremental mode, Stryker will do its best to produce an accurate mutation testing report. But, due to the complex nature of mutation testing, there are inherent limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stryker will not detect any changes you've made in files other than mutated files and test files."),(0,r.kt)("li",{parentName:"ul"},"Detecting test changes is only supported when the test runner plugin reports the necessary test details."),(0,r.kt)("li",{parentName:"ul"},"Other changes to your environment are not detected, such as updates to other files, updated (dev) dependencies, changes to environment variables, changes to ",(0,r.kt)("inlineCode",{parentName:"li"},".snap")," files, readme files, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"../../docs/mutation-testing-elements/static-mutants/"}),"Static mutants")," don't have test coverage; thus, Stryker won't detect test changes for them.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",a({parentName:"p"},{href:"../../docs/stryker-js/incremental/#limitations"}),"incremental limitations")," for more details."),(0,r.kt)("h2",a({},{id:"-forcing-reruns"}),"\ud83d\udd28 Forcing reruns"),(0,r.kt)("p",null,"With these inherent limitations in mind, you can probably imagine a scenario where you want to force specific mutants to run while using incremental mode. You can do this with ",(0,r.kt)("inlineCode",{parentName:"p"},"--force"),". With it, you tell StrykerJS to rerun all mutants in scope, regardless of the previous result found in the incremental file."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," is especially beneficial when combined with a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"--mutate")," pattern. I.e., if you only want to rerun the mutants in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.js"),", you use:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npx stryker run --incremental --force --mutate src/app.js\n")),(0,r.kt)("p",null,"You can even specify individual lines to mutate:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npx stryker run --incremental --force --mutate src/app.js:5-7\n")),(0,r.kt)("p",null,"In this example, you tell Stryker to only run mutation testing for lines 5 through 7 in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.js")," file and update the incremental report."),(0,r.kt)("p",null,"Using the combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"--incremental")," with a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"--mutate")," pattern, StrykerJS will not remove mutants that are not in scope and still report them as part of the full mutation report!"),(0,r.kt)("h2",a({},{id:"-continuous-integration-ci"}),"\ud83d\udd01 Continuous Integration (CI)"),(0,r.kt)("p",null,"Incremental mutation testing is ideal for CI scenarios! For example, when you open a Pull/Merge Request against your main branch, you probably don't need an entire mutation testing run; you are just interested in ",(0,r.kt)("em",{parentName:"p"},"changes since the last run on the main branch"),"."),(0,r.kt)("p",null,"For this to work, you need the ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker-incremental.json")," file. You could 'check in' this file into source control, but it changes a lot, and you should not treat it as source code anyway. Instead, it is better to treat it as an artifact."),(0,r.kt)("p",null,"The CI process for mutation testing looks as follows."),(0,r.kt)("mermaid",a({},{value:"graph TD; A(1. Download stryker-incremental.json artifact)--\x3eB(2. Run `stryker --incremental`)\nB--\x3eC(3. Upload `stryker-incremental.json` artifact)"})),(0,r.kt)("p",null,"Your preferred implementation of steps 1 and 3 will depend on your CI provider. Besides artifact storage provided by your CI provider, you can also opt for cloud storage. If you are using AWS, it might make sense to use an S3 bucket here. You probably want to opt for Azure blob storage when using Azure DevOps."),(0,r.kt)("p",null,"Is your project open-source? Then you're in luck with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://dashboard.stryker-mutator.io"}),"Stryker Dashboard"),", free to use for open-source projects. The JSON file format StrykerJS uses for its incremental mode is the same as the Stryker Dashboard's report file. So downloading this JSON report (step 1) is as easy as using a cURL request. Furthermore, since it already updates the report, you get 'step 3' for free when using the ",(0,r.kt)("a",a({parentName:"p"},{href:"../../docs/General/dashboard/"}),"dashboard reporter"),"."),(0,r.kt)("p",null,"For example, to download the report for the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch for a project called ",(0,r.kt)("inlineCode",{parentName:"p"},"my-org/my-repo"),", you can use this cURL request:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"curl --silent --create-dirs --output reports/stryker-incremental.json https://dashboard.stryker-mutator.io/api/reports/github.com/my-org/my-repo/main\n")),(0,r.kt)("p",null,"In an actual CI scenario, where you might push multiple changes to a particular PR, you might want to download the report for the current branch first and fall back to the main branch if it didn't exist. If so, you can use this script (assuming the ",(0,r.kt)("inlineCode",{parentName:"p"},"$BRANCH_NAME")," environment variable contains the current branch name)."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),'curl --dump-header .header.out --silent --create-dirs --output reports/stryker-incremental.json https://dashboard.stryker-mutator.io/api/reports/github.com/my-org/my-repo/$BRANCH_NAME\nif cat .header.out | grep HTTP | grep 404\nthen\n    echo "- falling back to main branch.."\n    curl -s --create-dirs -o reports/stryker-incremental.json https://dashboard.stryker-mutator.io/api/reports/github.com/my-org/my-repo/main\nfi\nrm .header.out\n')),(0,r.kt)("p",null,"If you only ever run Stryker with incremental mode, you might fear that the mutation report slowly 'drifts' from reality because of ",(0,r.kt)("a",a({parentName:"p"},{href:"#-limitations"}),"said limitations"),". We recommend doing a full mutation testing run now and then to prevent this, either with ",(0,r.kt)("a",a({parentName:"p"},{href:"#-forcing-reruns"}),(0,r.kt)("inlineCode",{parentName:"a"},"--force"))," or using the dashboard reporter. We do this in CI to develop StrykerJS itself. Our complete CI process looks like this:"),(0,r.kt)("mermaid",a({},{value:"flowchart TB;\n    A(1. Download JSON report from dashboard)--\x3eB(2. Run stryker incremental)\n    B--\x3eC(3. Upload JSON report to dashboard)\n    C--Merge to main branch--\x3eD(4. Full mutation testing run)\n    D--\x3eE(5. Upload new JSON report to dashboard)"})),(0,r.kt)("h2",a({},{id:"-whats-next"}),"\ud83d\udd2e What's next"),(0,r.kt)("p",null,"Please try out incremental mode and let us know what you think. We would love to hear from you! You can take a look at the ",(0,r.kt)("a",a({parentName:"p"},{href:"../../docs/stryker-js/incremental"}),"incremental documentation page"),". Also, look at the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/releases/tag/v6.2.0"}),"6.2 release notes")," to see the complete list of changes in 6.2."),(0,r.kt)("p",null,"In the medium term, we'll be working on supporting more test runners and implementing performance improvements in the typescript checker. We maintain a ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/wiki/Roadmap"}),"\ud83d\udee3 roadmap on github"),", so you can always see what we're actively working on."),(0,r.kt)("p",null,"In the meantime, we would love to hear from you! So please voice your feedback in the comment section below \ud83d\udc47, on ",(0,r.kt)("a",a({parentName:"p"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"our slack channel")," or by sending a ",(0,r.kt)("a",a({parentName:"p"},{href:"https://twitter.com/stryker_mutator/"}),"tweet"),"."))}c.isMDXComponent=!0}}]);