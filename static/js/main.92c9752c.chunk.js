(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/origami elephant cropped.8ae59f43.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/suzanne on fire.2238462e.png"},44:function(e,t,a){e.exports=a.p+"static/media/02_doughnut_end_of_lvl_2.7d8c2eab.png"},46:function(e,t,a){e.exports=a(61)},51:function(e,t,a){},52:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),i=(a(51),a(52),a(17)),s=a(6),o=a(3),m=a(16),u=a(26),h=a(8);function d(e){return r.a.createElement(h.a,Object.assign({},e,{className:"justify-content-md-center "+e.className,style:Object(u.a)(Object(u.a)({},e.style),{},{minHeight:"calc(100vh - 56px)",padding:"25px 0 25px 0"})}),e.children)}var p=a(41),g=a.n(p),E=a(42),f=a.n(E);function b(){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(d,null,r.a.createElement(o.a,{md:5,lg:4,className:"my-auto"},r.a.createElement("h1",null,"Hi, I'm Rikin"),r.a.createElement("p",null,"I'm a computer science and mathematics undergrad at University of Toronto. I'm interested in computer graphics, music production, topology, video games, Rubik's cubes, and cycling.")),r.a.createElement(o.a,{md:5,lg:4,className:"my-auto",style:{textAlign:"center"}},r.a.createElement("img",{src:g.a,alt:"elephant",style:{width:"80%"}}))),r.a.createElement(d,{style:{backgroundColor:"#FFEEEE"}},r.a.createElement(o.a,{md:5,lg:4,className:"my-auto",style:{textAlign:"center"}},r.a.createElement("img",{src:f.a,style:{width:"80%"},alt:"image goes here"})),r.a.createElement(o.a,{md:5,lg:4,className:"my-auto"},r.a.createElement("h2",null,"What I'm up to"),r.a.createElement("p",null,"Usually, I'm organizing UTCG events, setting monkeys on fire in Blender, making beats, creating physics simulations, learning abstract algebra, and implementing geometry processing algorithms.",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/projects",push:!0},"Check out my projects!")))))}var y=a(21);function w(e){return r.a.createElement(h.a,Object.assign({},e,{className:"justify-content-md-center "+e.className,style:Object(u.a)(Object(u.a)({},e.style),{},{minHeight:"30vh"})}),e.children)}for(var v=a(11),k=a(38),C=a(9),j=a(10),x=a(14),N=a(15),A=a(45),O=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"equals",value:function(e){if(this.size!=e.size)return!1;var t,a=Object(v.a)(this);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(!e.has(n))return!1}}catch(i){a.e(i)}finally{a.f()}var r,l=Object(v.a)(e);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(!this.has(c))return!1}}catch(i){l.e(i)}finally{l.f()}return!0}},{key:"union",value:function(e){return new a([].concat(Object(k.a)(this),Object(k.a)(e)))}},{key:"addAll",value:function(e){var t=this;e.forEach((function(e){return t.add(e)}))}}]),a}(Object(A.a)(Set)),S=function(){function e(t,a,n){Object(C.a)(this,e),this.name=t,this.transitionDict=a,this.accepting=n}return Object(j.a)(e,[{key:"transition",value:function(e){return e in this.transitionDict||(this.transitionDict[e]=new O),this.transitionDict[e]}},{key:"result",value:function(){return this.accepting}},{key:"addTransition",value:function(e,t){e in this.transitionDict?this.transitionDict[e].add(t):this.transitionDict[e]=new O([t])}}]),e}(),I=function(){function e(t,a){Object(C.a)(this,e),this.start=t,this.states=a}return Object(j.a)(e,[{key:"checkString",value:function(t){var a=new O([this.start]);a=e.doAllEpsilonTransitions(a);for(var n=new O,r=0;r<t.length;r+=1)n=e.transitionStates(a,t[r]),a=n=e.doAllEpsilonTransitions(n);var l=!1;return a.forEach((function(e){e.result()&&(l=!0)})),l}},{key:"getStateNames",value:function(){return e.stateNames(this.states)}},{key:"getAcceptingStates",value:function(){var e,t=new O,a=Object(v.a)(this.states);try{for(a.s();!(e=a.n()).done;){var n=e.value;n.result()&&t.add(n)}}catch(r){a.e(r)}finally{a.f()}return t}},{key:"append",value:function(e){this.getAcceptingStates().forEach((function(t){t.accepting=!1,t.addTransition("",e.start)})),this.states.addAll(e.states)}}],[{key:"transitionStates",value:function(e,t){var a=new O;return e.forEach((function(e){return a.addAll(e.transition(t))})),a}},{key:"doAllEpsilonTransitions",value:function(t){for(var a=new O;!a.equals(t);)a=t,t=t.union(e.transitionStates(t,""));return t}},{key:"stateNames",value:function(e){var t=new O;return e.forEach((function(e){return t.add(e.name)})),t}}]),e}(),T=function(){function e(){Object(C.a)(this,e)}return Object(j.a)(e,[{key:"getNFA",value:function(){throw new Error("Not implemented!")}}]),e}(),_=0,F=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(e){var n;if(Object(C.a)(this,a),n=t.call(this),1!=e.length)throw Error("Not a symbol!");return n.symbol=e,n}return Object(j.a)(a,[{key:"getNFA",value:function(){var e=new S(this.symbol+"0"+_++,{},!1),t=new S(this.symbol+"1"+_++,{},!0);e.addTransition(this.symbol,t);var a=new O([e,t]);return new I(e,a)}}]),a}(T),D=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this)).subs=e,n}return Object(j.a)(a,[{key:"getNFA",value:function(){var e,t=new S("start_concat",{},!0),a=new I(t,new O([t])),n=Object(v.a)(this.subs);try{for(n.s();!(e=n.n()).done;){var r=e.value;a.append(r.getNFA())}}catch(l){n.e(l)}finally{n.f()}return a}}]),a}(T),M=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(e,n,r){var l;return Object(C.a)(this,a),(l=t.call(this)).inside=e,l.minNum=n,l.maxNum=r,l}return Object(j.a)(a,[{key:"getNFA",value:function(){for(var e=[],t=this.minNum;t<=this.maxNum;t+=1){for(var a=[],n=0;n<t;n+=1)a.push(this.inside);e.push(new D(a))}return new H(e).getNFA()}}]),a}(T),z=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this)).inside=e,n}return Object(j.a)(a,[{key:"getNFA",value:function(){var e,t=new S("*start",{},!0),a=new I(t,new O([t])),n=this.inside.getNFA(),r=Object(v.a)(n.getAcceptingStates());try{for(r.s();!(e=r.n()).done;){e.value.addTransition("",n.start)}}catch(l){r.e(l)}finally{r.f()}return a.append(n),t.accepting=!0,a}}]),a}(T),H=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this)).subs=e,n}return Object(j.a)(a,[{key:"getNFA",value:function(){var e,t=new S("orstart",{},!1),a=new O([t]),n=Object(v.a)(this.subs);try{for(n.s();!(e=n.n()).done;){var r=e.value.getNFA();t.addTransition("",r.start),a.addAll(r.states)}}catch(l){n.e(l)}finally{n.f()}return new I(t,a)}}]),a}(T),P=(new M(new F("a"),2,3).getNFA(),new O(".{}[]()?+*|^$\\")),R=new O("1234567890"),B=[],G=32;G<=127;G++)B.push(new F(String.fromCharCode(G)));var W,U=new H(B),q=[],L=Object(v.a)("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890");try{for(L.s();!(W=L.n()).done;){var V=W.value;q.push(new F(V))}}catch(de){L.e(de)}finally{L.f()}for(var J=new H(q),Y=[],K=0;K<=9;K++)Y.push(new F(""+K));var X,$=new H(Y);!function(e){e[e.Symbol=0]="Symbol",e[e.Curly=1]="Curly",e[e.Square=2]="Square",e[e.SquareComp=3]="SquareComp",e[e.Paren=4]="Paren",e[e.Repeat=5]="Repeat",e[e.Star=6]="Star",e[e.Or=7]="Or",e[e.And=8]="And",e[e.Caret=9]="Caret",e[e.End=10]="End",e[e.Escape=11]="Escape"}(X||(X={}));X.Curly,X.Curly,X.Square,X.Square,X.Paren,X.Paren,X.Repeat,X.Repeat,X.Star,X.Or,X.Caret,X.End,X.Escape;var Q=new O(["{","}","[","[^","]","(",")"]),Z=new O(["{","[","[^","("]),ee={"{":"}","[":"]","[^":"]","(":")"};var te=new O(["0","1","2","3","4","5","6","7","8","9"]);var ae=a(44),ne=a.n(ae),re={fontSize:"10px",color:"#cccccc",lineBreak:"anywhere",wordBreak:"normal",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:"Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans -serif",fontWeight:"100"};function le(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{style:e.style},r.a.createElement("span",{onClick:function(){return c(!l)},style:{cursor:"pointer",textDecoration:"underline"}},e.inside," ",l?"-":"+"),r.a.createElement("div",{hidden:!l},e.children))}var ce=a(29),ie=a(33),se=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={bgAlpha:0},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){var t=window.scrollY<400?window.scrollY/400:1;e.setState({bgAlpha:t}),console.log(t)}))}},{key:"render",value:function(){return r.a.createElement(ce.a,{sticky:"top",expand:"lg",style:{backgroundColor:"rgba(255, 255, 255, 1"}},r.a.createElement(ce.a.Brand,{as:i.b,to:"/",push:!0},"Rikin"),r.a.createElement(ce.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ce.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ie.a,{className:"ml-auto"},r.a.createElement(ie.a.Link,{as:i.b,to:"/",push:!0},"Home"),this.props.sitePages.map((function(e){return r.a.createElement(ie.a.Link,{as:i.b,to:"/"+e.path,push:!0,key:e.path},e.name)})))))}}]),a}(n.Component);function oe(e){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(h.a,{className:"justify-content-md-center ",style:{minHeight:"30vh",backgroundColor:"#EEEEEE"}},r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h2",null,"Contact")),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("a",{href:"https://github.com/rikingurditta"},r.a.createElement("svg",{className:"octicon octicon-mark-github v-align-middle",width:"64",height:"64",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))),"\t",r.a.createElement("a",{href:"https://www.linkedin.com/in/rikin-gurditta/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64","data-supported-dps":"64x64",viewBox:"0 0 50 50",focusable:"false"},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("rect",{className:"bug-text-color",fill:"#FFF",x:"1",y:"1",width:"64",height:"64",rx:"4"}),r.a.createElement("path",{d:"M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",className:"background",fill:"#0077B5"}))))),r.a.createElement("p",{style:{fontSize:"12px",textAlign:"center"}},"Personal email: ",r.a.createElement("a",{href:"mailto:rikingurditta@gmail.com"},"rikingurditta@gmail.com"),r.a.createElement("br",null),"School email: ",r.a.createElement("a",{href:"mailto:rikin.gurditta@mail.utoronto.ca"},"rikin.gurditta@mail.utoronto.ca"),r.a.createElement("br",null),"I use he/him pronouns"))))}function me(){var e=Object(s.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ue=[{name:"Projects",path:"projects",component:function(e){var t="\\w(i)([dgiknru]| ){8}\\1t{2}a+.*!?",a=Object(n.useState)(!0),l=Object(y.a)(a,2),c=l[0],i=l[1],s=Object(n.useState)(""),u=Object(y.a)(s,2),h=u[0],p=u[1],g=Object(n.useState)(t),E=Object(y.a)(g,2),f=E[0],b=E[1],k=Object(n.useState)("rikin gurditta is cool!"),C=Object(y.a)(k,2),j=C[0],x=C[1];function N(e,t){if(""===e||""===t)p("");else if(function(e){var t,a=!1,n=Object(v.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(a&&"}"==r&&(a=!1),a&&!te.has(r)&&","!=r)return!1;a||"{"!=r||(a=!0)}}catch(de){n.e(de)}finally{n.f()}var l,c=[],i=Object(v.a)(e);try{for(i.s();!(l=i.n()).done;){var s=l.value;if(Q.has(s))if(Z.has(s))c.push(ee[s]);else if(c.pop()!=s)return!1}}catch(de){i.e(de)}finally{i.f()}return 0==c.length}(e)){console.log("regex:",e),console.log("string:",t);var a=function e(t){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[[]],r=n[0],l=!1,c=0;c<t.length;c++){var i=t.charAt(c);if(l)R.has(i)?0<parseInt(i)&&parseInt(i)-1<a.length&&r.push(a[parseInt(i)-1]):"w"==i?r.push(J):"d"==i?r.push($):r.push(new F(i)),l=!1;else{if("\\"==i&&(l=!0),"."==i&&r.push(U),P.has(i)||r.push(new F(i)),"["==i){var s=[],o=!1;for("^"==t.charAt(c+1)&&(o=!0,c++);"]"!=t.charAt(c);c++)s.push(new F(t.charAt(c)));o||r.push(new H(s))}if("{"==i){for(var m=c+1;"}"!=t.charAt(c);c++);var u=t.substring(m,c).split(","),h=parseInt(u[0]),d=parseInt(u[0]);2==u.length&&(d=parseInt(u[1]));var p=r.pop();r.push(new M(p,h,d))}if("?"==i){var g=r.pop();r.push(new M(g,0,1))}if("+"==i){var E=r.pop();r.push(new D([E,new z(E)]))}if("*"==i&&r.push(new z(r.pop())),"|"==i&&(n.push([]),r=n[n.length-1]),"("==i){for(var f=1,b=c+1;0!=f;)"("==t.charAt(b)&&f++,")"==t.charAt(b)&&f--,b++;b--;var y=e(t.substring(c+1,b),a);r.push(y),a.push(y),c=b}}}for(var w=[],v=0,k=n;v<k.length;v++){var C=k[v];w.push(new D(C))}return new H(w)}(e).getNFA();console.log(a),p(""+a.checkString(t))}else p("invalid regex")}return c&&(N(t,"rikin gurditta is cool!"),i(!1)),r.a.createElement(m.a,{fluid:!0},r.a.createElement(w,{style:{backgroundColor:"#DDDDFF"}},r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h1",null,"Projects")),r.a.createElement(o.a,{md:4})),r.a.createElement(d,null,r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h2",null,"Regular Expression Compiler"),r.a.createElement("p",null,"My theory of computation class briefly mentioned ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Thompson%27s_construction",target:"_blank"},"Thompson's algorithm"),". It seemed interesting, so I decided to implement it as a compiler for a subset of Perl RegEx. It supports quantifiers with ",r.a.createElement("code",null,"re{m,n}","?+*"),", character groups with ",r.a.createElement("code",null,"[chars]"),", union with ",r.a.createElement("code",null,"a|b"),", the wildcards ",r.a.createElement("code",null,".\\w\\d"),", and capture groups with ",r.a.createElement("code",null,"(parentheses)"),"."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/rikingurditta/TSRegex",target:"_blank"},"Here's")," the GitHub repo!")),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h4",null,"Try it out!"),r.a.createElement("p",null,"Regex:",r.a.createElement("br",null),r.a.createElement("input",{value:f,onChange:function(e){var t=e.target.value;t!==f&&N(t,j),b(t)},style:{width:"100%",fontFamily:"monospace"}})),r.a.createElement("p",null,"Text:",r.a.createElement("br",null),r.a.createElement("input",{value:j,onChange:function(e){x(e.target.value),N(f,e.target.value)},style:{width:"100%"}})),r.a.createElement("p",null,"Accepted: ",r.a.createElement("b",null,r.a.createElement("span",{style:{color:"true"===h?"#11DD11":"#FF1111"}},h))))),r.a.createElement(d,{style:{backgroundColor:"#EEEEFF"}},r.a.createElement(o.a,{md:4,className:"my-auto",style:{textAlign:"center"}},r.a.createElement("iframe",{width:"100%",height:"315px",src:"https://www.youtube.com/embed/PJKzzpyJ2fo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h2",null,"Bomberman"),r.a.createElement("p",null,"For my CSC207 - Software Design project, my group made three Android games that allowed for customization and online syncing. Within the group, my partner and I made a clone of Bomberman."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/rikingurditta/csc207",target:"_blank"},"Here's")," the GitHub repo!"))),r.a.createElement(d,null,r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h2",null,"Music"),r.a.createElement("p",null,"I've been producing electronic music and hip hop for a really long time. Here's something I dropped a couple years ago, it samples Nas's verses from ",r.a.createElement("i",null,"The World Is Yours")," as well as clips of Brian Kernighan and DJ Premier."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://soundcloud.com/chocolate-milk-music",target:"_blank"},"Here's")," my SoundCloud!")),r.a.createElement(o.a,{md:4,className:"my-auto",style:{textAlign:"center"}},r.a.createElement("iframe",{width:"80%",height:"350px",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/487898616&color=%236c4149&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}),r.a.createElement("div",{style:re},r.a.createElement("a",{href:"https://soundcloud.com/chocolate-milk-music",title:"Chocolate Milk",target:"_blank",style:{color:"#cccccc",textDecoration:"none"}},"Chocolate Milk")," \xb7 ",r.a.createElement("a",{href:"https://soundcloud.com/chocolate-milk-music/presidents",title:"Presidents",target:"_blank",style:{color:"#cccccc",textDecoration:"none"}},"Presidents")))),r.a.createElement(d,{style:{backgroundColor:"#EEEEFF"}},r.a.createElement(o.a,{md:4,className:"my-auto",style:{textAlign:"center"}},r.a.createElement("img",{src:ne.a,style:{width:"80%"}})),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h2",null,"3D Modelling"),r.a.createElement("p",null,"I'm currently learning how to create and texture 3D models with Blender. I'm currently following Blender Guru's tutorials, but I'll be starting my own project soon! I'll update this page when I do."))))}},{name:"Experience",path:"experience",component:function(){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(w,{style:{backgroundColor:"#FFDDDD"}},r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h1",null,"My experience")),r.a.createElement(o.a,{md:4})),r.a.createElement(h.a,{className:"justify-content-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"Centivizer"),r.a.createElement("p",null,"Game/frontend development",r.a.createElement("br",null),"Summer 2019, Summer 2020")),r.a.createElement(o.a,{md:4},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.centivizer.com/",target:"_blank"},"Centivizer")," is a startup based in UofT's ",r.a.createElement("a",{href:"https://imedia.mie.utoronto.ca/",target:"_blank"},"Interactive Media Lab"),"."),r.a.createElement("p",null,"In 2019, I worked on a 3D driving simulator game for the ",r.a.createElement("i",null,"Experiential Centivizer")," project. I worked on:"),r.a.createElement("ul",null,r.a.createElement("li",null,"3D game code"),r.a.createElement("li",null,"3D assets (some modelling and texturing)"),r.a.createElement("li",null,"UX and senior-oriented design")),r.a.createElement("p",null,"In 2020, I worked on ",r.a.createElement("i",null,"Cognitive Centivizer"),", a suite of whack-a-mole games meant to assess different aspects of cognitive ability. I worked on:"),r.a.createElement("ul",null,r.a.createElement("li",null,"implementing new versions of the games"),r.a.createElement("li",null,"caching and other performance/stability concerns"),r.a.createElement("li",null,"planning, designing, and implementing full rewrite of the codebase with React.js"),r.a.createElement("li",null,"the ",r.a.createElement("a",{href:"https://clyp.it/sdjwuirh",target:"_blank"},"music")," and sound design for the game")))),r.a.createElement(h.a,{className:"justify-content-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"NATIONAL"),r.a.createElement("p",null,"Research and strategy",r.a.createElement("br",null),"Summer 2019")),r.a.createElement(o.a,{md:4},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.national.ca/en/",target:"_blank"},"NATIONAL Public Relations")," is a large Canadian public relations company. I was an intern for the Research and Strategy team at their Toronto office."),r.a.createElement("p",null,"I worked on:"),r.a.createElement("ul",null,r.a.createElement("li",null,"media monitoring"),r.a.createElement("li",null,"data processing and analysis in Excel (as well as automation of these tasks with macros and scripts)"),r.a.createElement("li",null,"automating report generation based on Excel sheets of data"),r.a.createElement("li",null,"developing web scraping scripts, bug testing large-scale web scraping services")))),r.a.createElement(h.a,{className:"justify-content-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"UofT Computer Graphics Club"),r.a.createElement("p",null,"Executive Member, VP External",r.a.createElement("br",null),"2019 - Now")),r.a.createElement(o.a,{md:4},r.a.createElement("p",null,r.a.createElement("a",{href:"https://utcg.club",target:"_blank"},"UTCG")," organizes workshops/tutorials, research talks, industry events, field trips, and social events for computer graphics enthusiasts at UofT."),r.a.createElement("p",null,"As an exec/VP, I've:"),r.a.createElement("ul",null,r.a.createElement("li",null,"worked on (and currently update) the club's ",r.a.createElement("a",{href:"https://utcg.club",target:"_blank"},"website")),r.a.createElement("li",null,"organized the Rapid Fire Research Talks event, where ",r.a.createElement("a",{href:"https://www.dgp.toronto.edu/",target:"_blank"},"DGP")," researchers presented their own work so that students could see research happening at UofT"),r.a.createElement("li",null,"contributed to organizing UTCG Projects, an initiative to help students create projects in computer graphics during the online school year")))))}},{name:"Academics",path:"academics",component:function(){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(w,{style:{backgroundColor:"#DDFFDD"}},r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("h1",null,"Academics")),r.a.createElement(o.a,{md:4})),r.a.createElement(h.a,{className:"justify-content-md-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"Teaching")),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("p",null,"This fall semester I'm a TA for MAT135 - Calculus 1. This is my first time as a TA, but it's going well so far!"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://forms.gle/WoSfM34xCnz4NRma7",target:"_blank"},"Here's")," a link to my anonymous feedback form."))),r.a.createElement(h.a,{className:"justify-content-md-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"Computer Science")),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("p",null,"I'm focusing in computer graphics, and I hope to one day work in the field, either doing research or working on cool stuff like VR tech or movie rendering. This year I'm the VP External for ",r.a.createElement("a",{href:"https://utcg.club/",target:"_blank"},"UofT Computer Graphics Club"),", and I was a student volunteer for a huge computer graphics conference called ",r.a.createElement("a",{target:"_blank",href:"https://s2020.siggraph.org/"},"SIGGRAPH"),"."),r.a.createElement(le,{inside:r.a.createElement("span",null,"Courses I'm taking this year")},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"CSC373 - Algorithm design, analysis, and complexity (Fall)")},r.a.createElement("p",{className:"expand-text"},r.a.createElement("a",{href:"https://rikingurditta.github.io/csc373/",target:"_blank"},"Here")," are my notes for the course (in-progress)."))),r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"CSC417 - Physics-based animation (Fall)")},r.a.createElement("p",{className:"expand-text"},r.a.createElement("a",{href:"https://rikingurditta.github.io/csc417/",target:"_blank"},"Here")," are my notes for the course (in-progress)."))),r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"CSC419 - Geometry processing (Fall)")},r.a.createElement("p",{className:"expand-text"},r.a.createElement("a",{href:"https://rikingurditta.github.io/csc419/",target:"_blank"},"Here")," are my notes for the course (in-progress)."))),r.a.createElement("li",null,"CSC317 - Computer graphics (Winter)"),r.a.createElement("li",null,"CSC343 - Intro to databases (Winter)"))),r.a.createElement("br",null),r.a.createElement(le,{inside:r.a.createElement("span",null,"Courses I've taken")},r.a.createElement("ul",null,r.a.createElement("li",null,"CSC108 - Intro to programming"),r.a.createElement("li",null,"CSC148 - Intro to computer science"),r.a.createElement("li",null,"CSC165 - Mathematical expression and reasoning for CS"),r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"CSC207 - Software design")},r.a.createElement("p",{className:"expand-text"},"This course was pretty fun. The course project was to design and implement games for Android in teams. Within my team of 6, my friend and I made Bomberman. It was a lot of fun not only designing the software architecture, but also implementing it as well as creating all the assets.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/rikingurditta/csc207",target:"_blank"},"Here")," is my course project. (Yes, almost all the ",r.a.createElement("i",null,"beautiful")," art for Bomberman was done by me.)"))),r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"CSC209 - Systems programming")},r.a.createElement("p",{className:"expand-text"},"I enjoyed this course. It wasn't very difficult, had relatively low workload, and the assingments were kinda cool. On top of learning the basics of C and systems programming, we also learned a tiny bit about how we deal with messages being broken up as they're sent over a network. We used this to implement a command line-based message board. Fun stuff."))),r.a.createElement("li",null,"CSC236 - Intro to the theory of computation"),r.a.createElement("li",null,r.a.createElement(le,{inside:"CSC258 - Computer organization"},r.a.createElement("p",{className:"expand-text"},"This course sucked."))),r.a.createElement("li",null,r.a.createElement(le,{inside:"CSC263 - Data structures and analysis"},r.a.createElement("p",{className:"expand-text"},"I enjoyed this course! It was cool seeing how data structures I've been using actually work under the hood, the cool stuff you can do with algorithms like DFS, and cool analysis techniques like decision trees.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://rikingurditta.github.io/csc263/",target:"_blank"},"Here")," are my notes for the course."))),r.a.createElement("li",null,r.a.createElement(le,{inside:"CSC369 - Operating systems"},r.a.createElement("p",{className:"expand-text"},"This course had some pretty interesting and important material, and the first assignment (design and implement your own file system) was pretty fun. But it was not organized very well, and it was ",r.a.createElement("i",null,"a lot")," of work.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://rikingurditta.github.io/csc369/",target:"_blank"},"Here")," are my notes for the course."))))))),r.a.createElement(h.a,{className:"justify-content-md-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"Mathematics")),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("p",null,"My second major is in math, mainly because I like math."),r.a.createElement(le,{inside:r.a.createElement("span",null,"Courses I'm taking this year")},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"MAT347 - Groups, rings, and fields (Fall-Winter)")},r.a.createElement("p",{className:"expand-text"},r.a.createElement("a",{href:"https://rikingurditta.github.io/mat347/",target:"_blank"},"Here")," are my notes for the course (in-progress)."))),r.a.createElement("li",null,"MAT357 - Foundations of real analysis (Winter)"))),r.a.createElement("br",null),r.a.createElement(le,{inside:r.a.createElement("span",null,"Courses I've taken")},r.a.createElement("ul",null,r.a.createElement("li",null,"MAT157 - Analysis 1"),r.a.createElement("li",null,"MAT223 - Linear algebra 1"),r.a.createElement("li",null,"MAT237 - Multivariable calculus"),r.a.createElement("li",null,"MAT244 - Intro to ordinary differential equations"),r.a.createElement("li",null,"MAT247 - Algebra 2"),r.a.createElement("li",null,r.a.createElement(le,{inside:r.a.createElement("span",null,"MAT327 - Intro to topology")},r.a.createElement("p",{className:"expand-text"},"This course was great! I learned a lot about point-set topology, and got a nice taste of algebraic topology. The professor, ",r.a.createElement("a",{href:"https://malors.com/",target:"_blank"},"Malors"),", was tough on us but he really cared about our learning.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://rikingurditta.github.io/mat327/",target:"_blank"},"Here")," are my notes for the course."))))))),r.a.createElement(h.a,{className:"justify-content-md-center text-content"},r.a.createElement(o.a,{md:4},r.a.createElement("h2",null,"Course Notes")),r.a.createElement(o.a,{md:4,className:"my-auto"},r.a.createElement("p",null,"Here are all of the course notes that I've typed up nicely and uploaded!"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/csc263/",target:"_blank"},"CSC263 - Data structures and analysis")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/csc369/",target:"_blank"},"CSC369 - Operating systems")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/csc373/",target:"_blank"},"CSC373 - Algorithm design, analysis, and complexity")," (in progress)"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/mat327/",target:"_blank"},"MAT327 - Intro to topology")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/mat347/",target:"_blank"},"MAT347 - Groups, fields, and rings")," (in progress)"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/csc417/",target:"_blank"},"CSC417 - Physics-based animation")," (in progress)"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://rikingurditta.github.io/csc419/",target:"_blank"},"CSC419 - Geometry processing")," (in progress)")))))}}];var he=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(se,{sitePages:ue}),r.a.createElement(me,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:b}),ue.map((function(e){return r.a.createElement(s.a,{path:"/"+e.path,component:e.component,key:e.path})}))),r.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.92c9752c.chunk.js.map