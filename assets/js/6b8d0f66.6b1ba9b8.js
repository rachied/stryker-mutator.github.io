"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[4060],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=(n(7294),n(3905));const o={title:"Project components",sidebar_position:40,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/project-components.md"},i=void 0,l={unversionedId:"stryker-net/technical-reference/project-components",id:"stryker-net/technical-reference/project-components",title:"Project components",description:"Stryker.NET uses custom classes to keep track of folders and files. These classes are based on the composite pattern.",source:"@site/docs/stryker-net/technical-reference/project-components.md",sourceDirName:"stryker-net/technical-reference",slug:"/stryker-net/technical-reference/project-components",permalink:"/docs/stryker-net/technical-reference/project-components",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/project-components.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Project components",sidebar_position:40,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/project-components.md"},sidebar:"docs",previous:{title:"Mutant schemata",permalink:"/docs/stryker-net/technical-reference/mutant-schemata"},next:{title:"Testing frameworks",permalink:"/docs/stryker-net/technical-reference/testing-framework"}},s={},p=[{value:"UML of the classes in the namespace Stryker.Core.ProjectComponents",id:"uml-of-the-classes-in-the-namespace-strykercoreprojectcomponents",level:3},{value:"Old Design",id:"old-design",level:3},{value:"New Design",id:"new-design",level:3},{value:"ReadOnly variants",id:"readonly-variants",level:3},{value:"Note",id:"note",level:5}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker.NET uses custom classes to keep track of folders and files. These classes are based on the composite pattern."),(0,a.kt)("p",null,"These FolderComposite and FileLeafs have readonly variants, this is done to ensure the mutated sourcecode and Mutants are not changed after the mutation is placed."),(0,a.kt)("h3",{id:"uml-of-the-classes-in-the-namespace-strykercoreprojectcomponents"},"UML of the classes in the namespace Stryker.Core.ProjectComponents"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Folder Components",src:n(4361).Z,width:"2951",height:"901"})),(0,a.kt)("h3",{id:"old-design"},"Old Design"),(0,a.kt)("p",null,"The global structure was as follows: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FolderComposite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FileLeaf"))),(0,a.kt)("p",null,"With the abstract class they both implement:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ProjectComponent"))),(0,a.kt)("h3",{id:"new-design"},"New Design"),(0,a.kt)("p",null,"When implementing F# the old structure showed it's disadvantages since F# uses a different type to indicate syntaxtrees."),(0,a.kt)("p",null,"To solve this ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectComponent")," was made generic ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectComponent<T>"),"."),(0,a.kt)("p",null,"However many parts of stryker use ",(0,a.kt)("inlineCode",{parentName:"p"},"FolderComposite")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FileLeaf")," without needing access to the syntaxtrees or to know what language is used.\nFor this purpose the Interface IProjectComponent is used."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IFolderComposite")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileLeaf")," are implemented for the same reason.\nThis enables code to ask for an ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileLeaf")," so It can access the elements that do not depend on the language, that being all except the syntaxtrees."),(0,a.kt)("p",null,"For applications that do need access to the syntaxtrees ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectComponent<T>")," can be used or the specific type, being:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CsharpFolderComposite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CsharpFileLeaf"))),(0,a.kt)("p",null,"OR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FsharpFolderComposite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FsharpFileLeaf"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IFileLeaf<T>")," is needed to have languageagnostic notation for the syntaxtrees."),(0,a.kt)("h3",{id:"readonly-variants"},"ReadOnly variants"),(0,a.kt)("p",null,"Not al code is created equaly, and not all parts of stryker need write access to the ProjectComponents.\nThis is why a IReadOnyProjectcomponent was created."),(0,a.kt)("p",null,"When expanding into F# we found the implementation lacking and expanded upon it.\nThere are ReadOnly variants of ",(0,a.kt)("inlineCode",{parentName:"p"},"FolderComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FileLeaf"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReadOnlyFolderComponent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReadOnlyFileLeaf"))),(0,a.kt)("p",null,"The readonly variants do not need access to the syntaxtrees so they are languageagnostic which improves the expandability of Stryker.NET"),(0,a.kt)("p",null,"The variant of ",(0,a.kt)("inlineCode",{parentName:"p"},"FolderComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FileLeaf")," all contain the functions ",(0,a.kt)("inlineCode",{parentName:"p"},"ToReadOnly()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ToReadOnlyInputComponent()"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ToReadOnly()")," returns the ReadOnly varient of said type. ",(0,a.kt)("inlineCode",{parentName:"p"},"ToReadOnlyInputComponent()")," does the same, just casted to ",(0,a.kt)("inlineCode",{parentName:"p"},"IReadOnlyProjectComponent"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ToReadOnly()")," takes the interfaces ",(0,a.kt)("inlineCode",{parentName:"p"},"IParentComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IFileLeaf")," as input so the readonly variants do not need to distinguish between ",(0,a.kt)("inlineCode",{parentName:"p"},"CsharpFileLeaf")," and FsharpFileLeaf for example. "),(0,a.kt)("h5",{id:"note"},"Note"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FolderComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FileLeaf")," are NOT classes that exist in Stryker.NET only the languagespecific implementations exist!"))}d.isMDXComponent=!0},4361:function(e,t,n){t.Z=n.p+"assets/images/ProjectComponents-81f99ffe693d231584109f171fa95aae.png"}}]);