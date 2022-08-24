"use strict";(self.webpackChunklearngenomics_dev=self.webpackChunklearngenomics_dev||[]).push([[944],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},811:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={title:"Insertions and Deletions",track:"Genomic Variation"},c=void 0,l={unversionedId:"genomic-variation/insertions-and-deletions",id:"genomic-variation/insertions-and-deletions",title:"Insertions and Deletions",description:"Insertions and Deletions are grouped together as a single class of events known",source:"@site/docs/02-genomic-variation/03-insertions-and-deletions.md",sourceDirName:"02-genomic-variation",slug:"/genomic-variation/insertions-and-deletions",permalink:"/learngenomics.dev/docs/genomic-variation/insertions-and-deletions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-genomic-variation/03-insertions-and-deletions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Insertions and Deletions",track:"Genomic Variation"},sidebar:"tutorialSidebar",previous:{title:"Single Nucleotide Variation",permalink:"/learngenomics.dev/docs/genomic-variation/single-nucleotide-variation"},next:{title:"Structural Variation",permalink:"/learngenomics.dev/docs/genomic-variation/structural-variation"}},d={},u=[],p={toc:u};function m(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Insertions and Deletions are grouped together as a single class of events known\nas "',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Indel"},"Indels")),'." They are combined\nbecause, when comparing different genomes, it is not possible to determine\nwhether one genome had an insertion or the other had a deletion. In these\nevents, at least one nucleotide is inserted into or deleted from the genome. For\nexample, assume the sequence "GAT" is inserted into the middle of a section of\nthe genome that normally reads "ACAATA", resulting in the sequence\n"ACA',(0,o.kt)("strong",{parentName:"p"},"GAT"),'ATA".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure depicting the deletion of &#39;GAT&#39; from the string above.",src:t(6326).Z,width:"2439",height:"1126"})),(0,o.kt)("p",null,"As in the case with SNVs, many insertions and deletions may exist within a given\ngenome and discerning the significance of a given Indel will depend on its\nlocation. Indels within coding regions of a gene may result in a frameshift such\nthat the entire protein is altered. Indels in non-coding regions range from\nhaving no observable effect to influencing whether nearby genes are transcribed\nat all."))}m.isMDXComponent=!0},6326:function(e,n,t){n.Z=t.p+"assets/images/2.2-Indels-397dd7c9d5fe00c3f197e4b5247bab49.jpg"}}]);