(this["webpackJsonptron-dapp-react"]=this["webpackJsonptron-dapp-react"]||[]).push([[1],{480:function(t,e,n){},482:function(t,e,n){},501:function(t,e,n){"use strict";n.r(e);var a,r,c,s,o=n(5),i=n(6),l=n(7),u=n(8),p=n(0),d=n.n(p),j=n(108),b=n(2),O=n(19),m=(n(204),n(32)),h=n.n(m),f=n(494),x=n(475),g=n(44),v=(n(480),n.p,n.p,n.p,n.p,n.p,n.p,n(17)),k=(f.a.Option,x.a.SubMenu,Object(j.b)("network")(a=Object(j.c)(a=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.instantActions&&this.props.instantActions(),this.props.network.isConnected?this.props.mountedActions&&this.props.mountedActions():this.props.network.initTronLinkWallet((function(){t.props.mountedActions&&t.props.mountedActions()}),(function(){t.props.unmountedActions&&t.props.unmountedActions()})),this.props.network.listenTronLink()}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{})}}]),n}(d.a.Component))||a)||a),w=n(30),y=(n(482),n(458)),A=n(500),C=n(502),T=n(491),S=Object(j.b)("network")(r=Object(j.b)("dapp")(r=Object(j.b)("system")(r=Object(j.c)(r=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).openTransferModal=function(){a.setState({modalVisible:!0})},a.closeTransferModal=function(){a.setState({modalVisible:!1})},a.transfer=Object(O.a)(Object(b.a)().mark((function t(){var e,n,r,c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.state,n=e.to,r=e.amount,c=Object(g.a)(r).times(Object(g.a)(10).pow(w.a.defaultDecimal))._toHex(),t.next=4,a.props.system.transferToken(n,c);case 4:case"end":return t.stop()}}),t)}))),a.changeTo=function(t){var e=t.target.value;a.setState({to:e})},a.changeAmount=function(t){var e=t.target.value;a.setState({amount:e})},a.getColumns=function(){var t=a.state.lang;return[{title:h.a.get("table.symbol"),dataIndex:"tokenSymbol",key:"1",render:function(e,n){return Object(v.jsx)("a",{href:"".concat(w.a.justSwap,"?lang=").concat(t,"#/home?tokenAddress=").concat(n.tokenAddress,"&type=swap"),target:"justswap",children:Object(v.jsxs)("div",{className:"collateralSymbol",children:[Object(v.jsx)("img",{src:n.tokenLogoUrl,onError:function(t){t.target.onerror=null}}),Object(v.jsxs)("div",{className:"tokenDetail",children:[Object(v.jsx)("div",{className:"token-names fw500",children:e}),Object(v.jsx)("div",{className:"description",children:n.tokenName})]})]})})}},{title:h.a.get("table.address"),dataIndex:"tokenAddress",key:"2",render:function(e,n){return Object(v.jsx)("a",{href:"".concat(w.a.justSwap,"?lang=").concat(t,"#/home?tokenAddress=").concat(n.tokenAddress,"&type=swap"),target:"justswap",children:e})}},{title:h.a.get("table.balance"),dataIndex:"balance",key:"3",render:function(t,e){return Object(v.jsxs)("span",{children:[" ",isNaN(t)?"--":Object(g.d)({text:t})]})}},{title:h.a.get("table.transfer"),dataIndex:"operation",key:"4",render:function(t,e){return Object(v.jsx)(y.a,{type:"primary",onClick:a.openTransferModal,children:h.a.get("table.transfer")})}}]},a.state={lang:window.localStorage.getItem("lang")||h.a.options.currentLocale,modalVisible:!1,to:"",amount:""},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.modalVisible,n=t.to,a=t.amount,r=this.props.dapp.userList;return Object(v.jsx)(v.Fragment,{children:r&&Object(v.jsxs)("div",{className:"user-list",children:[Object(v.jsx)(A.a,{columns:this.getColumns(r),dataSource:r,pagination:!1,locale:{emptyText:g.c}}),Object(v.jsx)(C.a,{title:h.a.get("transfer.title"),footer:null,onCancel:this.closeTransferModal,className:"custom-modal",visible:e,children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:h.a.get("transfer.to")}),Object(v.jsx)(T.a,{value:n,placeholder:"please input the recieve address",onChange:this.changeTo}),Object(v.jsx)("div",{style:{marginTop:"20px"},children:h.a.get("transfer.amount")}),Object(v.jsx)(T.a,{value:a,placeholder:"please input the transfer amount",onChange:this.changeAmount}),Object(v.jsx)("div",{className:"footer",style:{textAlign:"center",marginTop:"20px"},children:Object(v.jsx)(y.a,{onClick:this.transfer,children:h.a.get("transfer.confirm")})})]})})]})})}}]),n}(d.a.Component))||r)||r)||r)||r,N=Object(j.b)("dapp")(c=Object(j.c)(c=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).componentDidMount=Object(O.a)(Object(b.a)().mark((function t(){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),a.mountedActions=Object(O.a)(Object(b.a)().mark((function t(){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.props.dapp.getUserList();case 2:case"end":return t.stop()}}),t)}))),a.state={},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{mountedActions:this.mountedActions}),Object(v.jsx)(S,{})]})}}]),n}(d.a.Component))||c)||c,M=Object(j.b)("network")(s=Object(j.c)(s=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)(N,{})}}]),n}(d.a.Component))||s)||s;e.default=M}}]);