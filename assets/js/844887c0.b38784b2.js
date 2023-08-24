"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[8951],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>b});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),h=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=h(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),c=h(n),u=r,b=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(b,i(i({ref:e},l),{},{components:n})):a.createElement(b,i({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65649:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Run Node With Snapshot",description:"Guide to running opBNB Node with snapshot"},i="Running the Node with Snapshot",p={unversionedId:"tutorials/running-node-with-snapshot",id:"tutorials/running-node-with-snapshot",title:"Running the Node with Snapshot",description:"Guide to running opBNB Node with snapshot",source:"@site/docs/tutorials/running-node-with-snapshot.md",sourceDirName:"tutorials",slug:"/tutorials/running-node-with-snapshot",permalink:"/opbnb-docs/docs/tutorials/running-node-with-snapshot",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/tutorials/running-node-with-snapshot.md",tags:[],version:"current",frontMatter:{sidebar_label:"Run Node With Snapshot",description:"Guide to running opBNB Node with snapshot"}},s={},h=[{value:"usage",id:"usage",level:2},{value:"Step 1: Download the snapshot and decompress it.",id:"step-1-download-the-snapshot-and-decompress-it",level:3},{value:"Step 2: Replace the data.",id:"step-2-replace-the-data",level:3}],l={toc:h};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-the-node-with-snapshot"},"Running the Node with Snapshot"),(0,r.kt)("p",null,"To improve the synchronization speed of the node, you can utilize snapshots to initialize it. Daily snapshots are created and kept for a period of 7 days."),(0,r.kt)("p",null,"An example of the snapshot's URL is as follows:\n",(0,r.kt)("a",{parentName:"p",href:"https://opbnb-snapshot-testnet.bnbchain.org/geth-20230723.tar.gz"},"https://opbnb-snapshot-testnet.bnbchain.org/geth-20230723.tar.gz")),(0,r.kt)("p",null,"Modify the domain and date to obtain the desired snapshot."),(0,r.kt)("p",null,"Domains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Testnet: ",(0,r.kt)("a",{parentName:"li",href:"http://opbnb-snapshot-testnet.bnbchain.org"},"http://opbnb-snapshot-testnet.bnbchain.org")),(0,r.kt)("li",{parentName:"ul"},"Mainnet: ",(0,r.kt)("a",{parentName:"li",href:"http://opbnb-snapshot-mainnet.bnbchain.org"},"http://opbnb-snapshot-mainnet.bnbchain.org"))),(0,r.kt)("h2",{id:"usage"},"usage"),(0,r.kt)("h3",{id:"step-1-download-the-snapshot-and-decompress-it"},"Step 1: Download the snapshot and decompress it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q -O - https://opbnb-snapshot-testnet.bnbchain.org/geth-20230723.tar.gz | tar -xvf -\n")),(0,r.kt)("h3",{id:"step-2-replace-the-data"},"Step 2: Replace the data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the running ",(0,r.kt)("inlineCode",{parentName:"li"},"op-geth")," client, ensuring that it has completely shut down."),(0,r.kt)("li",{parentName:"ol"},"To back up the original data, execute the following commands:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mv ${OPGeth_DataDir}/geth/chaindata ${OPGeth_DataDir}/geth/chaindata_backup\nmv ${OPGeth_DataDir}/geth/triecache ${OPGeth_DataDir}/geth/triecache_backup\n"))),(0,r.kt)("li",{parentName:"ol"},"Replace the data with the snapshot by running:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mv ./geth/chaindata ${OPGeth_DataDir}/geth/chaindata\nmv ./geth/triecache ${OPGeth_DataDir}/geth/triecache\n"))),(0,r.kt)("li",{parentName:"ol"},"Restart the ",(0,r.kt)("inlineCode",{parentName:"li"},"op-geth")," client and verify the logs.")))}c.isMDXComponent=!0}}]);