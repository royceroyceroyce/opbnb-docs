"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),h=r,b=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(b,p(p({ref:t},c),{},{components:n})):o.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={},p="Running a testnet node",s={unversionedId:"tutorials/running-a-testnet-node",id:"tutorials/running-a-testnet-node",title:"Running a testnet node",description:"If you're looking to build an app on opBNB you'll need access to an opBNB node.",source:"@site/docs/tutorials/running-a-testnet-node.md",sourceDirName:"tutorials",slug:"/tutorials/running-a-testnet-node",permalink:"/opbnb-docs/docs/tutorials/running-a-testnet-node",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/tutorials/running-a-testnet-node.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Withdraw tokens from opBNB",permalink:"/opbnb-docs/docs/build-on-opbnb/withdraw-from-opbnb"},next:{title:"FAQs",permalink:"/opbnb-docs/docs/faq/opbnb-faq"}},l={},i=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Build op-node and op-geth",id:"build-op-node-and-op-geth",level:2},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Start components",id:"start-components",level:2},{value:"Check status",id:"check-status",level:2}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-testnet-node"},"Running a testnet node"),(0,r.kt)("p",null,"If you're looking to build an app on opBNB you'll need access to an opBNB node.\nYou can simply use the public testnet node at ",(0,r.kt)("a",{parentName:"p",href:"https://opbnb-testnet-rpc.bnbchain.org"},"https://opbnb-testnet-rpc.bnbchain.org")," or run your own."),(0,r.kt)("p",null,"This guide will walk you through setting up your own testnet node."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"Replicas must store the transaction history of opBNB and run Geth. For optimal performance, they should be powerful machines (real or virtual) with at least 16 GB RAM and an SSD drive with 500 GB free space (for production network)."),(0,r.kt)("h2",{id:"build-op-node-and-op-geth"},"Build op-node and op-geth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export OPBNB_WORKSPACE=/tmp/opbnb\nmkdir -p $OPBNB_WORKSPACE\n\ncd $OPBNB_WORKSPACE\ngit clone git@github.com:bnb-chain/opbnb.git\ncd opbnb/op-node\ngit checkout release/testnet\nmake op-node\nmkdir -p $OPBNB_WORKSPACE/op-node-data\ncp ./bin/op-node $OPBNB_WORKSPACE/op-node-data\n\ncd $OPBNB_WORKSPACE\ngit clone git@github.com:bnb-chain/op-geth.git\ncd op-geth\ngit checkout develop\nmake geth\nmkdir -p $OPBNB_WORKSPACE/op-geth-data\ncp ./build/bin/geth $OPBNB_WORKSPACE/op-geth-data/op-geth\n")),(0,r.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $OPBNB_WORKSPACE\ncp $OPBNB_WORKSPACE/opbnb/assets/testnet/genesis.json $OPBNB_WORKSPACE/op-geth-data\ncp $OPBNB_WORKSPACE/opbnb/assets/testnet/rollup.json $OPBNB_WORKSPACE/op-node-data\n\nopenssl rand -hex 32 > jwt.txt\ncp jwt.txt $OPBNB_WORKSPACE/op-geth-data\ncp jwt.txt $OPBNB_WORKSPACE/op-node-data\n\n# init op-geth genesis\ncd $OPBNB_WORKSPACE/op-geth-data\nmkdir datadir\n./op-geth --datadir ./datadir init genesis.json\n")),(0,r.kt)("h2",{id:"start-components"},"Start components"),(0,r.kt)("p",null,"op-geth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#! /usr/bin/bash\ncd $OPBNB_WORKSPACE/op-geth-data\n\nexport CHAIN_ID=5611\nexport L2_RPC=https://opbnb-testnet-rpc.bnbchain.org\n\n./op-geth \\\n  --datadir="./datadir" \\\n  --verbosity=3 \\\n  --http \\\n  --http.corsdomain="*" \\\n  --http.vhosts="*" \\\n  --http.addr=0.0.0.0 \\\n  --http.port=8545 \\\n  --http.api=net,eth,engine \\\n  --ws \\\n  --ws.addr=0.0.0.0 \\\n  --ws.port=8545 \\\n  --ws.origins="*" \\\n  --ws.api=eth,engine \\\n  --syncmode=full \\\n  --maxpeers=10 \\\n  --networkid=$CHAIN_ID \\\n  --miner.gaslimit=150000000 \\\n  --triesInMemory=32 \\\n  --txpool.globalslots=10000 \\\n  --txpool.globalqueue=5000 \\\n  --txpool.accountqueue=200 \\\n  --txpool.accountslots=200 \\\n  --cache 32000 \\\n  --cache.preimages \\\n  --allow-insecure-unlock \\\n  --authrpc.addr="0.0.0.0" \\\n  --authrpc.port="8551" \\\n  --authrpc.vhosts="*" \\\n  --authrpc.jwtsecret=./jwt.txt \\\n  --gcmode=archive \\\n  --metrics \\\n  --metrics.port 6060 \\\n  --metrics.addr 0.0.0.0 \\\n  --rollup.sequencerhttp=$L2_RPC\n')),(0,r.kt)("p",null,"op-node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#! /usr/bin/bash\n\nset -ex\n\ncd op-node-data\n\nexport L2_RPC=http://localhost:8551\n# it\'s better to replace the L1_RPC with your own BSC Testnet RPC Endpoint for stability\nexport L1_RPC=https://data-seed-prebsc-1-s1.binance.org:8545\n# replace the p2p private key with yours\n# you can generate a new one with `openssl rand -hex 32`\nexport P2P_PRIV_KEY=0000000000000000000000000000000000000000000000000000000000000000\nexport P2P_BOOTNODES="enr:-J24QGQBeMsXOaCCaLWtNFSfb2Gv50DjGOKToH2HUTAIn9yXImowlRoMDNuPNhSBZNQGCCE8eAl5O3dsONuuQp5Qix2GAYjB7KHSgmlkgnY0gmlwhDREiqaHb3BzdGFja4PrKwCJc2VjcDI1NmsxoQL4I9wpEVDcUb8bLWu6V8iPoN5w8E8q-GrS5WUCygYUQ4N0Y3CCIyuDdWRwgiMr"\n\n./op-node \\\n  --l1.trustrpc \\\n  --sequencer.l1-confs=15 \\\n  --verifier.l1-confs=15 \\\n  --l1.http-poll-interval 3s \\\n  --l1.epoch-poll-interval 45s \\\n  --l1.rpc-max-batch-size 20 \\\n  --rollup.config=./rollup.json \\\n  --rpc.addr=0.0.0.0 \\\n  --rpc.port=8546 \\\n  --p2p.sync.req-resp \\\n  --p2p.listen.ip=0.0.0.0 \\\n  --p2p.listen.tcp=9003 \\\n  --p2p.listen.udp=9003 \\\n  --snapshotlog.file=./snapshot.log \\\n  --p2p.priv.raw=$P2P_PRIV_KEY \\\n  --p2p.bootnodes=$P2P_BOOTNODES \\\n  --metrics.enabled \\\n  --metrics.addr=0.0.0.0 \\\n  --metrics.port=7300 \\\n  --pprof.enabled \\\n  --rpc.enable-admin \\\n  --l1=${L1_RPC} \\\n  --l2=${L2_RPC} \\\n  --l2.jwt-secret=./jwt.txt \\\n  --log.level=debug\n')),(0,r.kt)("h2",{id:"check-status"},"Check status"),(0,r.kt)("p",null,"Wait for the node to sync. You'll see log in ",(0,r.kt)("inlineCode",{parentName:"p"},"op-geth")," if there's any new block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'INFO [06-14|01:15:02.937] Starting work on payload                 id=0x4e2b62d76dc5f1d3\nINFO [06-14|01:15:02.937] Imported new potential chain segment     number=5580 hash=895199..a87b81 blocks=1 txs=1 mgas=0.047 elapsed="241.25\xb5s"  mgasps=194.508  age=1d9h23m  dirty=0.00B\nINFO [06-14|01:15:02.938] Chain head was updated                   number=5580 hash=895199..a87b81 root=79aad7..99e3bb elapsed="27.333\xb5s"  age=1d9h23m\n')),(0,r.kt)("p",null,"You can also check the block number with curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\' http://localhost:8545\n')),(0,r.kt)("p",null,"If the node is synced, you'll see the non-zero block number in the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","id":1,"result":"0x1a"}\n')),(0,r.kt)("p",null,"You can compare the block with the one requested from ",(0,r.kt)("a",{parentName:"p",href:"https://opbnb-testnet-rpc.bnbchain.org"},"public testnet endpoint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}\' http://localhost:8545\n$ curl -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_getBlockByNumber","id": 1, "params": ["0x1a", false]}\' https://opbnb-testnet-rpc.bnbchain.org\n')))}d.isMDXComponent=!0}}]);