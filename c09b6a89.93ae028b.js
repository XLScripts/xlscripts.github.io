(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(131)),i={id:"structure",title:"Theme Directory Structure",sidebar_label:"Structure"},c={id:"themes/structure",isDocsHomePage:!1,title:"Theme Directory Structure",description:"XL Scripts Framework requires you to follow a Pre-defined Structure for your themes. We want to make sure that the Code Quality is clean &amp; Easy for anyone to understand. This will make your themes:",source:"@site/docs\\themes\\structure.md",permalink:"/docs/themes/structure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/themes/structure.md",sidebar_label:"Structure",sidebar:"someSidebar",previous:{title:"Theme Development",permalink:"/docs/themes/introduction"},next:{title:"The Manifest File",permalink:"/docs/themes/manifest"}},u=[],s={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"XL Scripts Framework requires you to follow a ",Object(o.b)("strong",{parentName:"p"},"Pre-defined Structure")," for your themes. We want to make sure that the Code Quality is clean ","&"," Easy for anyone to understand. This will make your themes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Organized."),Object(o.b)("li",{parentName:"ul"},"Encapsulated."),Object(o.b)("li",{parentName:"ul"},"Easily Customizable."),Object(o.b)("li",{parentName:"ul"},"Easily Distributable.")),Object(o.b)("p",null,"To achieve this, We recommend using the following Structure for your Theme directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u251c\u2500\u2500 img\n\u2502   \u2514\u2500\u2500 js\n\u251c\u2500\u2500 includes\n\u2502   \u251c\u2500\u2500 file_to_include_1.php\n\u2502   \u251c\u2500\u2500 header.php\n\u2502   \u2514\u2500\u2500 example.php\n\u251c\u2500\u2500 top_level_view.php\n\u251c\u2500\u2500 main.php\n\u251c\u2500\u2500 example.php\n\u2514\u2500\u2500 manifest.json\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you look at the ",Object(o.b)("strong",{parentName:"p"},"Default")," theme inside any XL Scripts Product, you will see this structure being followed."),Object(o.b)("p",{parentName:"div"},"We recommend using the ",Object(o.b)("strong",{parentName:"p"},"Default")," theme as a guideline for theme development."))))}l.isMDXComponent=!0},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);