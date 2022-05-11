"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[6103],{4118:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(7294),l=n(6010),r=n(3746),o=n(9960),i=n(5999),s="sidebar_TMXw",c="sidebarItemTitle_V4zb",m="sidebarItemList_uHd5",u="sidebarItem_spIe",d="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function p(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(m,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:u},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var f=n(3102);function h(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return a.createElement(f.Zo,{component:h,props:e})}var b=n(7524);function E(e){let{sidebar:t}=e;const n=(0,b.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(v,{sidebar:t}):a.createElement(p,{sidebar:t}):null}function _(e){const{sidebar:t,toc:n,children:o,...i}=e,s=t&&t.items.length>0;return a.createElement(r.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},6244:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7294),l=n(6010),r=n(5999),o=n(9960),i=n(4996),s=n(8824),c=n(8780),m=n(5290),u=n(6753),d="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",f=n(62);function h(e){return e.href?a.createElement(o.Z,e):a.createElement(a.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:n,title:l,url:r,imageURL:o,email:i}=t,s=r||i&&"mailto:"+i||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},o&&a.createElement(h,{href:s,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:o,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(h,{href:s,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),l&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var b="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function N(e){let{authors:t,assets:n}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?E:"row")},t.map(((e,t)=>{var o;return a.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?_:b),key:t},a.createElement(v,{author:{...e,imageURL:null!=(o=n.authorsImageUrls[t])?o:e.imageURL}}))})))}function L(e){var t;const n=function(){const{selectMessage:e}=(0,s.c)();return t=>{const n=Math.ceil(t);return e(n,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}(),{withBaseUrl:h}=(0,i.C)(),{children:v,frontMatter:b,assets:E,metadata:_,truncated:L,isBlogPostPage:k=!1}=e,{date:Z,formattedDate:P,permalink:x,tags:y,readingTime:C,title:H,editUrl:I,authors:w}=_,T=null!=(t=E.image)?t:b.image,A=!k&&L,M=y.length>0,R=k?"h1":"h2";return a.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(R,{className:d,itemProp:"headline"},k?H:a.createElement(o.Z,{itemProp:"url",to:x},H)),a.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},a.createElement("time",{dateTime:Z,itemProp:"datePublished"},P),void 0!==C&&a.createElement(a.Fragment,null," \xb7 ",n(C))),a.createElement(N,{authors:w,assets:E})),T&&a.createElement("meta",{itemProp:"image",content:h(T,{absolute:!0})}),a.createElement("div",{id:k?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(m.Z,null,v)),(M||L)&&a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",k&&p)},M&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":A})},a.createElement(f.Z,{tags:y})),k&&I&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:I})),A&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":M})},a.createElement(o.Z,{to:_.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:H})},a.createElement("b",null,a.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),l=n(4118),r=n(6244),o=n(7462),i=n(5999),s=n(1750);function c(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(s.Z,(0,o.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(s.Z,(0,o.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var m=n(833),u=n(5281),d=n(1575),g=n(6010);function p(e){var t;const{content:n}=e,{assets:l,metadata:r}=n,{title:o,description:i,date:s,tags:c,authors:u,frontMatter:d}=r,{keywords:g}=d,p=null!=(t=l.image)?t:d.image;return a.createElement(m.d,{title:o,description:i,keywords:g,image:p},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),u.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:u.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}function f(e){const{content:t,sidebar:n}=e,{assets:o,metadata:i}=t,{nextItem:s,prevItem:m,frontMatter:u}=i,{hide_table_of_contents:g,toc_min_heading_level:p,toc_max_heading_level:f}=u;return a.createElement(l.Z,{sidebar:n,toc:!g&&t.toc&&t.toc.length>0?a.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:f}):void 0},a.createElement(r.Z,{frontMatter:u,assets:o,metadata:i,isBlogPostPage:!0},a.createElement(t,null)),(s||m)&&a.createElement(c,{nextItem:s,prevItem:m}))}function h(e){return a.createElement(m.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},a.createElement(p,e),a.createElement(f,e))}},1575:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),l=n(7294),r=n(6010),o=n(721),i="tableOfContents_cNA8";function s(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),l=n(7294);function r(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var o=l.memo(r);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}var c=n(6668);function m(e){const t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>m(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=u(i,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:d,...p}=e;const f=(0,c.L)(),h=null!=u?u:f.tableOfContents.minHeadingLevel,v=null!=d?d:f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return g((0,l.useMemo)((()=>{if(r&&m)return{linkClassName:r,linkActiveClassName:m,minHeadingLevel:h,maxHeadingLevel:v}}),[r,m,h,v])),l.createElement(o,(0,a.Z)({toc:b,className:n,linkClassName:r},p))}},8824:function(e,t,n){n.d(t,{c:function(){return c}});var a=n(7294),l=n(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function c(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+a.length+": "+e);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}}}]);