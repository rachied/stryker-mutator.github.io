(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(194)),o={custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/Configuration.md"},i={unversionedId:"stryker-net/Configuration",id:"stryker-net/Configuration",isDocsHomePage:!1,title:"Configuration",description:"For .NET Core projects Stryker.NET can be run without any configuration. On .NET Framework projects the solution path is required.",source:"@site/docs/stryker-net/Configuration.md",slug:"/stryker-net/Configuration",permalink:"/docs/stryker-net/Configuration",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/Configuration.md",version:"current",sidebar:"docs",previous:{title:"Getting-started",permalink:"/docs/stryker-net/Getting-started"},next:{title:"Mutators",permalink:"/docs/stryker-net/Mutators"}},c=[{value:"Use a config file",id:"use-a-config-file",children:[]},{value:"Solution path",id:"solution-path",children:[]},{value:"Project file",id:"project-file",children:[]},{value:"Mutation level",id:"mutation-level",children:[]},{value:"Specify testrunner",id:"specify-testrunner",children:[]},{value:"Timeout time",id:"timeout-time",children:[]},{value:"Reporters",id:"reporters",children:[]},{value:"Test projects",id:"test-projects",children:[]},{value:"Logging to console",id:"logging-to-console",children:[]},{value:"Logging to a file",id:"logging-to-a-file",children:[]},{value:"Maximum concurrent test runners",id:"maximum-concurrent-test-runners",children:[]},{value:"Custom thresholds",id:"custom-thresholds",children:[]},{value:"Excluding mutations",id:"excluding-mutations",children:[]},{value:"Excluding files",id:"excluding-files",children:[]},{value:"Mutate",id:"mutate",children:[{value:"Example:",id:"example",children:[]}]},{value:"Ignore methods",id:"ignore-methods",children:[]},{value:"Config file location",id:"config-file-location",children:[]},{value:"Coverage analysis",id:"coverage-analysis",children:[{value:"Notes on coverage analysis",id:"notes-on-coverage-analysis",children:[]}]},{value:"Abort test on fail",id:"abort-test-on-fail",children:[]},{value:"Diff",id:"diff",children:[]},{value:"Diff",id:"diff-1",children:[]},{value:"Git source",id:"git-source",children:[]},{value:"EXPERIMENTAL: Dashboard Compare",id:"experimental-dashboard-compare",children:[]},{value:"Fallback version",id:"fallback-version",children:[]},{value:"Baseline Storage location",id:"baseline-storage-location",children:[]},{value:"Configurating Dashboard location",id:"configurating-dashboard-location",children:[]},{value:"Configuring Azure File Storage",id:"configuring-azure-file-storage",children:[{value:"Azure File Storage URL",id:"azure-file-storage-url",children:[]},{value:"Shared Access Signature (SAS)",id:"shared-access-signature-sas",children:[]}]},{value:"Using dashboard compare in a pull request pipeline",id:"using-dashboard-compare-in-a-pull-request-pipeline",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"For .NET Core projects Stryker.NET can be run without any configuration. On .NET Framework projects the solution path is required."),Object(l.b)("h2",{id:"use-a-config-file"},"Use a config file"),Object(l.b)("p",null,"When using Stryker in a team we recomend using a config file. This way you ensure all team members use the same settings to run Stryker. The settings will also be picked up in pipelines. To use a config file create a file called ",Object(l.b)("inlineCode",{parentName:"p"},"stryker-config.json")," in the folder you run Stryker and add a configuration section called stryker-config. Then you can add the options you want to configure to the file."),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"stryker-config.json")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "stryker-config":\n    {\n        "reporters": [\n            "progress",\n            "html"\n        ],\n        "log-level": "info",\n        "log-file":true,\n        "timeout-ms": 10000,\n        "project-file": "ExampleProject.csproj",\n        "max-concurrent-test-runners": 4,\n        "threshold-high": 80,\n        "threshold-low": 70,\n        "threshold-break": 60,\n        "mutation-level": "Standard",\n        "mutate": [\n            "!ExampleClass.cs",\n            "!Migrations/*.*",\n            "!ExampleDirectory\\\\ExampleClass2.cs"\n        ],\n        "excluded-mutations": [\n            "string",\n            "Logical operators"\n        ],\n        "ignore-methods": [\n            "*Log*",\n            "ToString",\n            "*HashCode*"\n        ],\n        "dashboard-compare": true,\n        "baseline-storage-location": "AzureFileStorage",\n        "azure-storage-url": "https://storageaccount.file.core.windows.net/sharename",\n        "azure-storage-sas": "<SAS>"\n    }\n}\n')),Object(l.b)("h2",{id:"solution-path"},"Solution path"),Object(l.b)("p",null,"On .NET Framework projects Stryker needs your ",Object(l.b)("inlineCode",{parentName:"p"},".sln")," file path."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'dotnet stryker --solution-path "..\\\\ExampleProject.sln"\ndotnet stryker -s "..\\\\ExampleProject.sln"\n')),Object(l.b)("p",null,"Stryker.NET needs the path to execute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'nuget restore "*.sln"\n')),Object(l.b)("p",null,"and "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'MSBuild.exe "*.sln"\n')),Object(l.b)("h2",{id:"project-file"},"Project file"),Object(l.b)("p",null,"When Stryker finds two or more project references inside your test project, it needs to know which project should be mutated. Pass the name of this project using:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --project-file SomeProjectName.csproj\ndotnet stryker -p SomeProjectName.csproj\n")),Object(l.b)("h2",{id:"mutation-level"},"Mutation level"),Object(l.b)("p",null,"Stryker support multiple mutation levels. Each level comes with a specific set of mutations. Each level contains the mutations of the levels below it. By setting the level to ",Object(l.b)("inlineCode",{parentName:"p"},"Complete")," you will get all possible mutations and the best mutation testing experience. This comes at the price of longer runtime, as more mutations have to be tested at higher levels. "),Object(l.b)("p",null,"The levels are as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Basic"),Object(l.b)("li",{parentName:"ul"},"Standard (Default)"),Object(l.b)("li",{parentName:"ul"},"Advanced"),Object(l.b)("li",{parentName:"ul"},"Complete")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mutations"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Level"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arithmetic Operators"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Basic")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Block (not yet implemented)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Basic")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Equality Operators"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean Literals"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Assignment statements"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Collection initializer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unary Operators"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Update Operators"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String Literals and Constants"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bitwise Operators"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Linq Methods"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Checked Statements"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Standard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Regex"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Advanced")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Advanced Linq Methods (not yet implemented)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Complete")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Advanced Regex (not yet implemented)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Complete")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --mutation-level Advanced\ndotnet stryker -level Advanced\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"Standard"')),Object(l.b)("h2",{id:"specify-testrunner"},"Specify testrunner"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u26a0 This parameter is deprecated. This option will be removed in version 1.0.  Please submit an issue if you have a use case that requires Dotnet test. ")),Object(l.b)("p",null,"Stryker supports ",Object(l.b)("inlineCode",{parentName:"p"},"dotnet test"),", the commandline testrunner and ",Object(l.b)("inlineCode",{parentName:"p"},"VsTest"),", the visual studio testrunner.\nVsTest is the default because it offers tight integration with all test frameworks (MsTest, xUnit, NUnit etc).\nDotnet test can be used if VsTest causes issues for some reason. Please also submit an issue with us if you experience difficulties with VsTest."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --test-runner dotnettest\ndotnet stryker -tr dotnettest\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"vstest"')),Object(l.b)("h2",{id:"timeout-time"},"Timeout time"),Object(l.b)("p",null,"Some mutations can create endless loops inside your code. To detect and stop these loops, Stryker cancels a unit test run after a set time.\nUsing this parameter you can increase or decrease the time before a test will time out."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --timeout-ms 1000\ndotnet stryker -t 1000\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"5000"')),Object(l.b)("h2",{id:"reporters"},"Reporters"),Object(l.b)("p",null,"During a mutation testrun one or more reporters can be enabled. A reporter will produce some kind of output during or after the mutation testrun."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --reporters \"['html', 'progress']\"\ndotnet stryker -r \"['html', 'progress']\"\n")),Object(l.b)("p",null,"You can find a list of all available reporters and what output they produce in the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stryker-net/Reporters"}),"reporter docs")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"\"['html', 'progress']\"")),Object(l.b)("h2",{id:"test-projects"},"Test projects"),Object(l.b)("p",null,"Stryker can also be run from the directory containing the project under test. If you pass a list of test projects that reference the project under test, the tests of all projects will be run while testing the mutants."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --test-projects \"['../MyProject.UnitTests/MyProject.UnitTests.csproj', '../MyProject.SpecFlow/MyProject.SpecFlow.csproj']\"\ndotnet stryker -tp \"['../MyProject.UnitTests/MyProject.UnitTests.csproj', '../MyProject.SpecFlow/MyProject.SpecFlow.csproj']\"\n")),Object(l.b)("p",null,"When running from a test project directory this option is not required."),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"null")),Object(l.b)("h2",{id:"logging-to-console"},"Logging to console"),Object(l.b)("p",null,"To gain more insight in what Stryker does during a mutation testrun you can lower your loglevel."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'dotnet stryker --log-level "debug"\ndotnet stryker -l "debug"\n')),Object(l.b)("p",null,"All available loglevels are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"error"),Object(l.b)("li",{parentName:"ul"},"warning"),Object(l.b)("li",{parentName:"ul"},"info"),Object(l.b)("li",{parentName:"ul"},"debug"),Object(l.b)("li",{parentName:"ul"},"trace")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"info"')),Object(l.b)("h2",{id:"logging-to-a-file"},"Logging to a file"),Object(l.b)("p",null,"When creating an issue for Stryker.NET on github you can include a logfile. File logging always uses loglevel ",Object(l.b)("inlineCode",{parentName:"p"},"trace"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --log-file\ndotnet stryker -f\n\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"off")),Object(l.b)("h2",{id:"maximum-concurrent-test-runners"},"Maximum concurrent test runners"),Object(l.b)("p",null,"By default Stryker.NET will use as much CPU power as you allow it to use during a mutation testrun. You can lower this setting to lower your CPU usage."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --max-concurrent-test-runners 4\ndotnet stryker -c 4\n")),Object(l.b)("p",null,"This setting can also be used to disable parallel testing. This can be useful if your test project cannot handle parallel testruns."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker -c 1\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"your number of logical processors / 2"),"*"),Object(l.b)("p",null,"*"," This usually equals your physical processor count"),Object(l.b)("h2",{id:"custom-thresholds"},"Custom thresholds"),Object(l.b)("p",null,"If you want to decide on your own mutation score thresholds, you can configure this with extra parameters."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --threshold-high 90 --threshold-low 75 --threshold-break 50\ndotnet stryker -th 90 -tl 75 -tb 50\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mutation score > threshold-high"),": ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Awesome! Your reporters will color this green and happy."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"threshold-high > mutation score > threshold-low"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Warning! Your reporters will display yellow/orange colors, watch out!"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"threshold-low < mutation score > threshold-break"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Danger! Your reporters will display red colors, you're in the danger zone now."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"threshold-break > mutation score"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Error! The application will exit with exit code 1.")))),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"80"),", ",Object(l.b)("inlineCode",{parentName:"p"},"60"),", ",Object(l.b)("inlineCode",{parentName:"p"},"0")),Object(l.b)("h2",{id:"excluding-mutations"},"Excluding mutations"),Object(l.b)("p",null,"If you deem some mutations unwanted for your project you can disable mutations. "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --excluded-mutations \"['string', 'logical']\"\ndotnet stryker -em \"['string', 'logical']\"\n")),Object(l.b)("p",null,"The mutations of these kinds will be skipped and not be shown in your reports. This can also speed up your performance on large projects. But don't get too exited, skipping mutations doesn't improve your mutation score ;)"),Object(l.b)("h2",{id:"excluding-files"},"Excluding files"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u26a0 This parameter is deprecated. Use ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#mutate"}),"Mutate")," instead.")),Object(l.b)("p",null,"If you decide to exclude files for unit testing, you can configure this with the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --files-to-exclude \"['./ExampleClass.cs', './ExampleDirectory', './ExampleDirectory/ExampleClass2.cs']\"\ndotnet stryker -fte \"['./ExampleClass.cs', './ExampleDirectory', './ExampleDirectory/ExampleClass2.cs']\"\n")),Object(l.b)("p",null,"We recommend to use relative paths. Relative paths are automatically resolved. Absolute paths break easily on different devices. However it is also possible to use absolute paths."),Object(l.b)("p",null,"When you want to exclude a large set of files, it is advised to use the stryker configuration file because it is easier to handle multiple files."),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"[]")),Object(l.b)("h2",{id:"mutate"},"Mutate"),Object(l.b)("p",null,"To specify which files should be mutated you can use file pattern to in- or excluded files or even only parts of a files. By default all files are included."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --mutate \"['C:/Repos/MyProject/MyFile.cs']\"\ndotnet stryker -m \"['C:/Repos/MyProject/MyFile.cs']\"\n")),Object(l.b)("p",null,"The patterns support ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Glob_(programming)"}),"globbing syntax")," to allow wildcards."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --mutate \"['**/*Services.cs']\"\ndotnet stryker -m \"['**/*Services.cs']\"\n")),Object(l.b)("p",null,"You can add an ",Object(l.b)("inlineCode",{parentName:"p"},"!")," in front of the pattern to exclude all files that match the pattern."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --mutate \"['!**/*Factory.cs']\"\ndotnet stryker -m \"['!**/*Factory.cs']\"\n")),Object(l.b)("p",null,"When only exclude patterns are provided, all files will be included that do not match any exclude pattern. If both, include and exclude patterns, are provided, only the files that match an include pattern but not also an exclude pattern will be included. The order of the patterns is irrelevant."),Object(l.b)("h3",{id:"example"},"Example:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Patterns"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Will be mutated"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[]"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyFactory.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[]"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyService.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"['","*","*","/","*",".","*","']"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyFactory.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"['","*","*","/","*",".","*","']"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyService.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"['!","*","*","/MyFactory.cs']"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyFactory.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"['!","*","*","/MyFactory.cs']"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyService.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"['!","*","*","/MyFactory.cs', '","*","*","/My","*",".cs']"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyFactory.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"['!","*","*","/MyFactory.cs', '","*","*","/My","*",".cs']"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MyFolder/MyService.cs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("p",null,"To allow more fine grained filtering you can also specify the span of text that should be in- or excluded. A span is defined by the indices of the first character and the last character."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --mutate \"['MyFolder/MyService.cs{10..100}']\"\ndotnet stryker -m \"['MyFolder/MyService.cs{10..100}']\"\n")),Object(l.b)("h2",{id:"ignore-methods"},"Ignore methods"),Object(l.b)("p",null,"If you would like to ignore some mutations that are passed as method parameters, you can do so by specifying which methods to ignore:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --ignore-methods \"['ToString', 'ConfigureAwait', '*Exception.ctor']\"\ndotnet stryker -im \"['ToString', 'ConfigureAwait', '*Exception.ctor']\"\n")),Object(l.b)("p",null,"Ignore methods will only affect mutations in directly passed parameters."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"// This mutation will be skipped;\nConfigureAwait(true); \n\n// This mutation won't\nvar t = true;\nConfigureAwait(t); \n")),Object(l.b)("p",null,"You can also ignore constructors by specifying the type and adding the ",Object(l.b)("inlineCode",{parentName:"p"},".ctor")," suffix."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dotnet stryker -im \"['NotImplementedException.ctor']\"")),Object(l.b)("p",null,"Both, method names and constructor names, support wildcards."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dotnet stryker -im \"['*Log']\" // Ignores all methods ending with log"),"\n",Object(l.b)("inlineCode",{parentName:"p"},"dotnet stryker -im \"['*Exception.ctor']\" // Ignores all exception constructors")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"[]")),Object(l.b)("h2",{id:"config-file-location"},"Config file location"),Object(l.b)("p",null,"If you want to integrate these settings in your existing settings json, make sure the section is called stryker-config and run stryker with the command"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --config-file-path <relativePathToFile>\ndotnet stryker -cp <relativePathToFile>\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"./stryker-config.json"')),Object(l.b)("h2",{id:"coverage-analysis"},"Coverage analysis"),Object(l.b)("p",null,"Use coverage info to speed up execution. Possible values are: off, perTest, all, perIsolatedTest."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"off"),": coverage data is not captured."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"perTest"),": capture the list of mutants covered by each test. For every mutant that has tests, only the tests that cover a the mutant are tested. Fastest option."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"all"),": capture the list of mutants covered by each test. Test only these mutants. Non covered mutants are assumed as survivors. Fast option."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"perTestInIsolation"),": like 'perTest', but running each test in an isolated run. This results in more accurate\ncoverage information for some mutants (see below), at the expense of a longer startup time.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --coverage-analysis perTest\ndotnet stryker -ca perTest\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"perTest"')),Object(l.b)("h3",{id:"notes-on-coverage-analysis"},"Notes on coverage analysis"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The 'dotnet test' runner only supports ",Object(l.b)("inlineCode",{parentName:"li"},"all")," mode. This is due to dotnet test limitation"),Object(l.b)("li",{parentName:"ul"},"Results are not impacted by coverage analysis. If you identify a suspicious survivor, run\nStryker again without coverage analysis and report an issue if this mutant is killed by this run."),Object(l.b)("li",{parentName:"ul"},"when using ",Object(l.b)("inlineCode",{parentName:"li"},"perTest")," mode, mutants that are executed as part as some static constructor/initializer\nare run against all tests, as Stryker can not reliably capture coverage for those. This is a consequence of static\nconstructors/initialisers being called only once during tests. This heuristic is not needed when using\n",Object(l.b)("inlineCode",{parentName:"li"},"perTestInIsolation")," due to test being run one by one.")),Object(l.b)("h2",{id:"abort-test-on-fail"},"Abort test on fail"),Object(l.b)("p",null,"Abort unit testrun as soon as any one unit test fails. This can reduce the overall running time."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --abort-test-on-fail\ndotnet stryker -atof\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},'"on"')),Object(l.b)("h2",{id:"diff"},"Diff"),Object(l.b)("p",null,"Enables the diff feature. It makes sure to only mutate changed files. Gets the diff from git by default."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --diff\ndotnet stryker -diff\n")),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("h2",{id:"diff-1"},"Diff"),Object(l.b)("p",null,"Allows to specify an array of C# files which should be ignored if present in the diff.\nAny not ignored files will trigger all mutants to be tested because we cannot determine what mutants are affected by these files.\nThis feature is only recommended when you are sure these files will not affect results, or when you are prepared to sacrifice accuracy for performance."),Object(l.b)("p",null,"Use glob syntax for wildcards: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Glob_(programming)"}),"https://en.wikipedia.org/wiki/Glob_(programming)"),"\nExample: ","['",Object(l.b)("strong",{parentName:"p"},"/*Assets.json','"),"/favicon.ico']"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --diff-ignore-files ['**/*.ts']\ndotnet stryker -diff-ignore-files ['**/*.ts']\n")),Object(l.b)("p",null,"Default: ``"),Object(l.b)("h2",{id:"git-source"},"Git source"),Object(l.b)("p",null,"Sets the source branch to compare with the current code on file system, used for calculating the difference when --diff is enabled."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'dotnet stryker --git-source "development"\ndotnet stryker -gs "development"\n')),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"master")),Object(l.b)("p",null,"This feature works based on file diffs, which means that only changed files will be mutated."),Object(l.b)("p",null,"Also note that for changes on test files all mutants covered by tests in that file will be mutated."),Object(l.b)("h2",{id:"experimental-dashboard-compare"},"EXPERIMENTAL: Dashboard Compare"),Object(l.b)("p",null,"Enabling the dashboard compare feature saves reports and re-uses the result when a mutant or it's tests are unchanged."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --dashboard-compare\ndotnet stryker -compare\n")),Object(l.b)("p",null,"Default ",Object(l.b)("inlineCode",{parentName:"p"},'"off"')),Object(l.b)("p",null,"This feature automatically enables the --diff feature."),Object(l.b)("p",null,"This feature is experimental. Results can contain slight false postives and false negatives."),Object(l.b)("h2",{id:"fallback-version"},"Fallback version"),Object(l.b)("p",null,"When enabling the --dashboard-compare feature you can provide a fallback version. This version will be used to pull a baseline when we cannot find a baseline for your current branch. When we are still unable to provide a baseline we will start a complete testrun to create a complete baseline."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --dashboard-compare --dashboard-fallback-version master\ndotnet stryker -compare -fallback-version master\n")),Object(l.b)("p",null,"Default: value provided to --git-source or null"),Object(l.b)("h2",{id:"baseline-storage-location"},"Baseline Storage location"),Object(l.b)("p",null,"Sets the storage location for the baseline used by --dashboard-compare. By default this is set to disk, when the dashboard reporter is enabled this is automatically set to Stryker Dashboard."),Object(l.b)("p",null,"Supported storage locations are:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Storage location"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disk"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disk"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Saves the baseline to the ",Object(l.b)("inlineCode",{parentName:"td"},"StrykerOutput")," folder")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stryker Dashboard"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dashboard"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Saves the baseline to Stryker Dashboard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Azure File Storage"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AzureFileStorage"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Saves the baseline to Azure File Storage")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --dashboard-compare --baseline-storage-location disk\ndotnet stryker -compare -bsl disk\n")),Object(l.b)("p",null,"Defaut ",Object(l.b)("inlineCode",{parentName:"p"},'"disk"')),Object(l.b)("h2",{id:"configurating-dashboard-location"},"Configurating Dashboard location"),Object(l.b)("p",null,"See: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stryker-net/Reporters#dashboard-reporter"}),"Dashboard Reporter Settings")),Object(l.b)("h2",{id:"configuring-azure-file-storage"},"Configuring Azure File Storage"),Object(l.b)("p",null,"When using Azure File Storage as baseline storage location you are required to provide the following values."),Object(l.b)("h3",{id:"azure-file-storage-url"},"Azure File Storage URL"),Object(l.b)("p",null,"This is the url to your Azure File Storage. The URL should look something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"https://STORAGE_NAME.file.core.windows.net/FILE_SHARE/(optional)SUBFOLDER\n")),Object(l.b)("p",null,"Providing a subfolder is optional, we store the baseline in a ",Object(l.b)("inlineCode",{parentName:"p"},"StrykerOutput")," subfolder."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"-storage url https://STORAGE_NAME.file.core.windows.net/FILE_SHARE/(optional)SUBFOLDER\n--azure-storage-url https://STORAGE_NAME.file.core.windows.net/FILE_SHARE/(optional)SUBFOLDER\n")),Object(l.b)("h3",{id:"shared-access-signature-sas"},"Shared Access Signature (SAS)"),Object(l.b)("p",null,"For authentication we support Shared Access Signatures. For more information on how to configure a SAS check the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview"}),"Azure documentation"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"-storage-sas <STORAGE_SAS>\n--azure-storage-sas <STORAGE_SAS>\n")),Object(l.b)("p",null,"The complete configuration would look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet stryker --dashboard-compare --baseline-storage-location AzureFileStorage --azure-storage-url https://STORAGE_NAME.file.core.windows.net/FILE_SHARE/(optional)SUBFOLDER --azure-storage-sas STORAGE_SAS\n\nor\n\ndotnet stryker -compare -bsl AzureFileStorage -storage-url https://STORAGE_NAME.file.core.windows.net/FILE_SHARE/(optional)SUBFOLDER -sas STORAGE_SAS\n")),Object(l.b)("h2",{id:"using-dashboard-compare-in-a-pull-request-pipeline"},"Using dashboard compare in a pull request pipeline"),Object(l.b)("p",null,"See: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stryker-net/Stryker-in-pipeline"}),"Using stryker in pipelines")))}s.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,j=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return n?r.a.createElement(j,i(i({ref:t},b),{},{components:n})):r.a.createElement(j,i({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);