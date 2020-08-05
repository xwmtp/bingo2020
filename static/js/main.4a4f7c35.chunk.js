(this.webpackJsonpbingo2020=this.webpackJsonpbingo2020||[]).push([[0],{26:function(n,e,a){n.exports=a(37)},37:function(n,e,a){"use strict";a.r(e);var t=a(0),i=a.n(t),r=a(22),l=a.n(r),o=a(3),s=a(4);function d(){var n=Object(o.a)(['\n    :root {\n        --content-bg: rgb(38,38,38);\n        --yellow: rgb(255,185,22);\n    }\n    \n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html {\n        height: 100%;\n        overflow-y: scroll;\n    }\n  \n    body {\n        height: 100%;\n        width: 100%;\n        background-color: var(--content-bg);\n        color: white;\n        font-family: "PT Sans", sans-serif;\n  }\n\n  #root {\n      display: flex;\n      flex-flow: column;\n      height: 100%;\n  }\n\n']);return d=function(){return n},n}var u=Object(s.a)(d()),m=a(8),c=a(9),w=a(11),f=a(10),p=a(16),h=a(1);function y(){var n=Object(o.a)(["\n        padding: 30px;\n\n        h1 {\n            text-align: center;\n            font-size: 50px;\n            color: var(--yellow);\n        }\n    "]);return y=function(){return n},n}var b=function(n){Object(w.a)(a,n);var e=Object(f.a)(a);function a(){var n;Object(m.a)(this,a);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).StyledHeader=s.b.div(y()),n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(this.StyledHeader,null,i.a.createElement("h1",null,"OoT Bingo Tournament 2020"))}}]),a}(i.a.Component);function g(){var n=Object(o.a)(["\n        font-size: 25px;\n        color: #C8C8C8;\n        text-decoration: none;\n        \n\n    "]);return g=function(){return n},n}function E(){var n=Object(o.a)(["\n        width: 350px;\n        padding: 30px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n\n        .current{\n            font-weight: bold;\n            color: white;\n        }\n\n        @media only screen and (max-width: 800px) {\n            width: 280px;\n        }\n\n    "]);return E=function(){return n},n}var x=function(n){Object(w.a)(a,n);var e=Object(f.a)(a);function a(){var n;Object(m.a)(this,a);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).StyledNavigation=s.b.div(E()),n.StyledLink=Object(s.b)(p.b)(g()),n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(this.StyledNavigation,null,i.a.createElement(this.StyledLink,{to:"/",activeClassName:"current",exact:!0},"Standings"),i.a.createElement(this.StyledLink,{to:"/about",activeClassName:"current"},"About"))}}]),a}(i.a.Component);function v(){var n=Object(o.a)(["\n    \n\ntd img {\n    height: 13px;\n    margin-right: 10px;\n    border-radius: 3px;\n}\n\n.entrant-name {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n}\n\n\n"]);return v=function(){return n},n}var k=s.b.tr(v());var j=function(n){return i.a.createElement(k,null,i.a.createElement("td",null,n.rank),i.a.createElement("td",{className:"entrant-name"},i.a.createElement("img",{src:"https://raw.githubusercontent.com/xwmtp/bingo2020/master/img/flags/".concat(n.nation,".png"),alt:"flag"})," ",n.name),i.a.createElement("td",null,n.points),i.a.createElement("td",null,n.median),i.a.createElement("td",{className:"extra-info"},n.rounds),i.a.createElement("td",{className:"extra-info"},n.dnf))},S={length:54,entrants:{1:{name:"adef",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},2:{name:"Amateseru",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},3:{name:"AverageGreg",nationality:"gb",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},4:{name:"blinkzy",nationality:"de",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},5:{name:"Bonooru_",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},6:{name:"Bou*Frost",nationality:"de",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},7:{name:"Chris7",nationality:"ct",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},8:{name:"chromium_light",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},9:{name:"Cloudike",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},10:{name:"CoffeePot",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},11:{name:"Condor",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},12:{name:"countdown",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},13:{name:"Davpat",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},14:{name:"DiamondFlash27",nationality:"es",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},15:{name:"Exodus",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},16:{name:"FantaTanked",nationality:"gb",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},17:{name:"Fenyan",nationality:"de",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},18:{name:"Fleush",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},19:{name:"gc1",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},20:{name:"Gombill",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},21:{name:"Hapenfors",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},22:{name:"Jake Wright",nationality:"ru",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},23:{name:"jfm",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},24:{name:"juwk",nationality:"be",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},25:{name:"Lake",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},26:{name:"Link11",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},27:{name:"MatttInTheHat",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},28:{name:"Midboss",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},29:{name:"MikamiHero",nationality:"au",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},30:{name:"MikeKatz45",nationality:"mx",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},31:{name:"mkbgnr",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},32:{name:"Moose",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},33:{name:"moosecrap",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},34:{name:"MutantAura",nationality:"gb",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},35:{name:"Myelin",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},36:{name:"Nalle",nationality:"se",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},37:{name:"Noface099",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},38:{name:"Numberplay",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},39:{name:"PhoenixFeather",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},40:{name:"Princess Kayla",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},41:{name:"PsyMarth",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},42:{name:"quickkiran",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},43:{name:"Runnerguy2489",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},44:{name:"scaramanga",nationality:"de",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},45:{name:"shaggy",nationality:"ca",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},46:{name:"Tashman91",nationality:"sct",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},47:{name:"the_consultant",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},48:{name:"Timato",nationality:"gu",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},49:{name:"Titou",nationality:"fr",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},50:{name:"tob3000",nationality:"at",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},51:{name:"Valient",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},52:{name:"Xanra",nationality:"no",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},53:{name:"xwillmarktheplace",nationality:"nl",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0},54:{name:"ZAR",nationality:"us",wins:0,draws:0,median:"-",points:0,dnf:0,rounds:0}}};function O(){var n=Object(o.a)(["\n        max-width: 800px;\n        width: 70%;\n        margin: 30px 0px;\n        border: none;\n        border-spacing: 0px;\n        font-size: 16px;\n\n        tr:nth-child(even) {background-color: #383838;}\n\n        td, th {\n            padding: 5px 30px;\n            border: none;\n            vertical-align: center;\n            text-align: center;\n        }\n\n        #overflow {\n            overflow-x: auto;\n            white-space: nowrap;\n        }\n\n        @media only screen and (max-width: 800px) {\n        .extra-info{\n            display: none;\n        }\n        td, th {\n            padding: 5px 7px;\n        }\n        \n    }\n\n    "]);return O=function(){return n},n}var T=function(n){Object(w.a)(a,n);var e=Object(f.a)(a);function a(){var n;Object(m.a)(this,a);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).StyledTable=s.b.table(O()),n}return Object(c.a)(a,[{key:"render",value:function(){for(var n=S.length,e=function(n){var e=S.entrants[n.toString()];return i.a.createElement(j,{rank:n,name:e.name,key:e.name,nation:e.nationality,points:e.points,median:e.median,rounds:e.rounds,dnf:e.dnf})},a=[],t=1;t<=n;t++)a.push(e(t));return i.a.createElement("div",{id:"overflow"},i.a.createElement(this.StyledTable,null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Rank"),i.a.createElement("th",null,"Player"),i.a.createElement("th",null,"Points"),i.a.createElement("th",null,"Median"),i.a.createElement("th",{className:"extra-info"},"Rounds"),i.a.createElement("th",{className:"extra-info"},"DNF")),a)))}}]),a}(i.a.Component);function C(){var n=Object(o.a)(["\n    max-width: 800px;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    p {\n        text-align: left;\n        padding: 20px 0px;\n    }\n\n    ul ul {\n        text-align: left;\n        padding-left: 50px;\n    }\n\n    h3 {\n        margin: 10px;\n        color: var(--yellow)\n    }\n\n    th, td {\n        padding: 1px 10px;\n    }\n\n\n\n    "]);return C=function(){return n},n}var N=s.b.div(C());var A=function(n){return i.a.createElement(N,null,i.a.createElement("p",null,"After 2.5 years, the Bingo Tournament is back! This is the first JP Bingo tourney. It wil consist of two stages. This site is mostly used for Stage 1."),i.a.createElement("h3",null,"Tournament rules"),i.a.createElement("ul",null,i.a.createElement("li",null,"Standard bingo rules apply"),i.a.createElement("li",null,"Boards must be generated using the latest Japanese bingo version"),i.a.createElement("li",null,"Races must be played on ",i.a.createElement("b",null,"Racetime.gg")),i.a.createElement("li",null,"Races must be announced in the tournament discord as they are about to start"),i.a.createElement("li",null,"SNB and ESNB races may not count as a tournament race")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,"Stage 1 - Swiss rounds"),i.a.createElement("p",null,"During this stage, every week, each player will be paired to another player for a bingo race. This pairing is calculated according to the points you have gathered so far, meaning you will play against people with similar scores. There will be ",i.a.createElement("b",null,"4")," of these rounds."),i.a.createElement("ul",null,i.a.createElement("li",null,"Each rounds starts on a ",i.a.createElement("b",null,"Monday, 4pm UTC")," and lasts one week"),i.a.createElement("li",null,"You get ",i.a.createElement("b",null,"3 points")," for a win, ",i.a.createElement("b",null,"1 point")," for a draw and ",i.a.createElement("b",null,"0")," points for a loss, forfeit or no show"),i.a.createElement("li",null,"The top 16 players after the rounds are over will continue to the next stage"),i.a.createElement("li",null,"Ties are broken as follows, in this order:",i.a.createElement("ul",null,i.a.createElement("li",null,"Players with ",i.a.createElement("b",null,"fewer forfeits")," get priority, then"),i.a.createElement("li",null,"Players with ",i.a.createElement("b",null,"a lower median")," over their tourney times get priority, then"),i.a.createElement("li",null,"Players that are still tied, race a best of three on shorter bingo")))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h3",null,"Stage 2 - Single Elimination Bracket"),i.a.createElement("p",null,"After the Swiss rounds have been played, the top 16 players will continue to a single elimination bracket. Challonge will be used to keep track of progress.  All the races will be ",i.a.createElement("b",null,"best of 1"),", except for the grand finals, which will be ",i.a.createElement("b",null,"best of 3"),"."),i.a.createElement("br",null),i.a.createElement("h3",null,"Schedule"),i.a.createElement("br",null),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Jul 19th"),i.a.createElement("td",null,"Sign up opens")),i.a.createElement("tr",null,i.a.createElement("td",null,"Aug 3rd"),i.a.createElement("td",null,"Sign up closes")),i.a.createElement("tr",null,i.a.createElement("td",null,"Aug 10th"),i.a.createElement("td",null,"Start of Stage 1")),i.a.createElement("tr",null,i.a.createElement("td",null,"Sep 7th"),i.a.createElement("td",null,"Expected end of Stage 1")))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"Join the tourney Discord to enter the tourney or to follow along. Contact Fleush#3233 or xwillmarktheplace#4400 on Discord for more information."))};function B(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;  \n"]);return B=function(){return n},n}var M=s.b.div(B()),P=function(n){Object(w.a)(a,n);var e=Object(f.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var n=window.location.href;return n.endsWith("bingo2020")&&(n+="/",window.location.replace(n)),i.a.createElement(p.a,{basename:"/"},i.a.createElement(M,{id:"page"},i.a.createElement(b,null),i.a.createElement(x,null),i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/",component:T,exact:!0}),i.a.createElement(h.a,{path:"/about",component:A}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null),i.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4a4f7c35.chunk.js.map