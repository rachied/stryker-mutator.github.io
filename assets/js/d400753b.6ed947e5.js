"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[3015],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2871:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});r(7294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i={title:"Usage",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/usage.md"},a=void 0,s={unversionedId:"stryker-js/usage",id:"stryker-js/usage",title:"Usage",description:"The main command for Stryker is run, which kicks off mutation testing.",source:"@site/docs/stryker-js/usage.md",sourceDirName:"stryker-js",slug:"/stryker-js/usage",permalink:"/docs/stryker-js/usage",draft:!1,editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/usage.md",tags:[],version:"current",frontMatter:{title:"Usage",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/usage.md"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/stryker-js/getting-started"},next:{title:"Config file",permalink:"/docs/stryker-js/config-file"}},c={},u=[],l={toc:u};function f({components:e,...t}){return(0,n.kt)("wrapper",o({},l,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npx stryker <command> [options] [configFile]\n")),(0,n.kt)("p",null,"The main ",(0,n.kt)("inlineCode",{parentName:"p"},"command")," for Stryker is ",(0,n.kt)("inlineCode",{parentName:"p"},"run"),", which kicks off mutation testing."),(0,n.kt)("p",null,"By default, Stryker will look for a ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker.conf.js")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," file in the current working directory (if it exists). This can be overridden by specifying a different file as the last argument."),(0,n.kt)("p",null,"Before your first run, we recommend you try the ",(0,n.kt)("inlineCode",{parentName:"p"},"init")," command, which helps you to set up this config file and install any missing packages needed for your specific configuration. We recommend you verify the contents of the configuration file after this initialization, to make sure everything is setup correctly. Of course, you can still make changes to it, before you run Stryker for the first time."))}f.isMDXComponent=!0}}]);