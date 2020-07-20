(this.webpackJsonpbingo2020=this.webpackJsonpbingo2020||[]).push([[0],{26:function(n,t,e){n.exports=e(38)},37:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a),r=e(22),o=e.n(r),s=e(3),l=e(4);function d(){var n=Object(s.a)(['\n    :root {\n        --content-bg: rgb(38,38,38)\n    }\n    \n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html {\n        height: 100%;\n        overflow-y: scroll;\n    }\n  \n    body {\n        height: 100%;\n        width: 100%;\n        background-color: var(--content-bg);\n        color: white;\n        font-family: "PT Sans", sans-serif;\n  }\n\n  #root {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n  }\n\n']);return d=function(){return n},n}var u=Object(l.a)(d()),c=e(16),m=e(1),f=e(9),p=e(10),w=e(12),y=e(11);function h(){var n=Object(s.a)(["\n        padding: 30px;\n\n        h1 {\n            font-size: 50px;\n            color: #ffb916;\n        }\n    "]);return h=function(){return n},n}var g=function(n){Object(w.a)(e,n);var t=Object(y.a)(e);function e(){var n;Object(f.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))).StyledHeader=l.b.div(h()),n}return Object(p.a)(e,[{key:"render",value:function(){return i.a.createElement(this.StyledHeader,null,i.a.createElement("h1",null,"OoT Bingo Tournament 2020"))}}]),e}(i.a.Component);function b(){var n=Object(s.a)(["\n        font-size: 25px;\n        color: #C8C8C8;\n        text-decoration: none;\n        \n\n    "]);return b=function(){return n},n}function v(){var n=Object(s.a)(["\n        width: 400px;\n        padding: 30px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n        .current{\n            font-weight: bold;\n            color: white;\n        }\n    "]);return v=function(){return n},n}var x=function(n){Object(w.a)(e,n);var t=Object(y.a)(e);function e(){var n;Object(f.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))).StyledNavigation=l.b.div(v()),n.StyledLink=Object(l.b)(c.b)(b()),n}return Object(p.a)(e,[{key:"render",value:function(){return i.a.createElement(this.StyledNavigation,null,i.a.createElement(this.StyledLink,{to:"/bingo2020/",activeClassName:"current",exact:!0},"Standings"),i.a.createElement(this.StyledLink,{to:"/bingo2020/about",activeClassName:"current"},"About"))}}]),e}(i.a.Component);function E(){var n=Object(s.a)(["\n\n    td img {\n        height: 13px;\n        margin-right: 10px;\n        border-radius: 3px;\n    }\n\n    .entrant-name {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: left;\n    }\n"]);return E=function(){return n},n}var j=function(n){var t=l.b.tr(E());return i.a.createElement(t,null,i.a.createElement("td",null,n.rank),i.a.createElement("td",{className:"entrant-name"},i.a.createElement("img",{src:"https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/".concat(n.nation,".png"),alt:"flag"})," ",n.name),i.a.createElement("td",null,n.points),i.a.createElement("td",null,n.median),i.a.createElement("td",null,n.rounds),i.a.createElement("td",null,n.dnf))},k={length:35,entrants:{1:{name:"Amateseru",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},2:{name:"andy",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},3:{name:"AverageGreg",nationality:"gb",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},4:{name:"Bonooru_",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},5:{name:"Bou*Frost",nationality:"de",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},6:{name:"Chris7",nationality:"ct",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},7:{name:"chromium_light",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},8:{name:"CoffeePot",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},9:{name:"Davpat",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},10:{name:"Exodus",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},11:{name:"Fenyan",nationality:"de",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},12:{name:"Fleush",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},13:{name:"Hapenfors",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},14:{name:"Jake Wright",nationality:"ru",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},15:{name:"jenslang",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},16:{name:"jfm",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},17:{name:"juwk",nationality:"be",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},18:{name:"Lake",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},19:{name:"Link11",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},20:{name:"MatttInTheHat",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},21:{name:"mkbgnr",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},22:{name:"Moose",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},23:{name:"MutantAura",nationality:"gb",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},24:{name:"Noface099",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},25:{name:"Numberplay",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},26:{name:"peatsheep",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},27:{name:"quickkiran",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},28:{name:"Runnerguy2489",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},29:{name:"shaggy",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},30:{name:"Tashman91",nationality:"gb",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},31:{name:"Timato",nationality:"gu",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},32:{name:"Titou",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},33:{name:"tob3000",nationality:"at",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},34:{name:"Xanra",nationality:"no",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},35:{name:"xwillmarktheplace",nationality:"nl",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0}}};function O(){var n=Object(s.a)(["\n        padding: 30px;\n        border: none;\n        border-spacing: 0px;\n        font-size: 16px;\n\n\n        th {\n            text-align: center;\n        }\n\n        tr:nth-child(even) {background-color: #383838;}\n\n        td, th {\n            padding: 5px 30px;\n            border: none;\n            vertical-align: center;\n            text-align: center;\n        }\n\n        .entrant-name {\n            text-align: left\n\n        }\n\n    "]);return O=function(){return n},n}var S=function(n){Object(w.a)(e,n);var t=Object(y.a)(e);function e(){var n;Object(f.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))).StyledTable=l.b.table(O()),n}return Object(p.a)(e,[{key:"render",value:function(){for(var n=k.length,t=function(n){var t=k.entrants[n.toString()];return i.a.createElement(j,{rank:n,name:t.name,key:t.name,nation:t.nationality,points:t.points,median:t.median,rounds:t.rounds,dnf:t.dnf})},e=[],a=1;a<=n;a++)e.push(t(a));return i.a.createElement(this.StyledTable,null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Rank"),i.a.createElement("th",null,"Player"),i.a.createElement("th",null,"Points"),i.a.createElement("th",null,"Median"),i.a.createElement("th",null,"Rounds"),i.a.createElement("th",null,"DNF")),e))}}]),e}(i.a.Component);function T(){var n=Object(s.a)(["\n    width: 800px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n    p {\n        text-align: center;\n        padding: 20px 0px;\n    }\n    "]);return T=function(){return n},n}var C=function(n){var t=l.b.div(T());return i.a.createElement(t,null,i.a.createElement("p",null,"After 2.5 years, the Bingo Tournament is back! This tourney will consist of two stages. This site is mostly used for Stage 1, the Swiss rounds."),i.a.createElement("p",null,"To enter the tourney, contact Fleush#3233 or xwillmarktheplace#4400 on Discord."))};e(37);function A(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  \n"]);return A=function(){return n},n}var N=l.b.div(A());var B=function(){return i.a.createElement(c.a,null,i.a.createElement(N,null,i.a.createElement(g,null),i.a.createElement(x,null),i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/bingo2020/",component:S,exact:!0}),i.a.createElement(m.a,{path:"/bingo2020/about",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null),i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.56a330ca.chunk.js.map