(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n.n(i),s=n(3),c=n(4),r=n(6),o=n(5),l=n(1),h=n.n(l),u=(n(14),n(8)),m=n(2),j=(n(15),n(0)),p=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={itemWidth:130,frameSize:2,step:2,currentPosition:0,animationDuration:1e3,disabledValue:!1,infinite:!1},e.newPosition=0,e.moveLeft=function(){var t=e.state,n=t.itemWidth,i=t.step,a=t.currentPosition,s=t.frameSize,c=t.infinite;return e.newPosition=a+n*i,e.newPosition>0&&(e.newPosition=0,c&&(e.newPosition=-(e.props.images.length-s)*n)),e.setState({currentPosition:e.newPosition})},e.moveRight=function(){var t=e.state,n=t.itemWidth,i=t.step,a=t.currentPosition,s=t.frameSize,c=t.infinite;return e.newPosition=a-n*i,e.newPosition<-(e.props.images.length-s)*n&&(e.newPosition=-(e.props.images.length-s)*n,c&&(e.newPosition=0)),e.setState({currentPosition:e.newPosition})},e.changeValue=function(t){return"infinite"===t.target.name?e.setState(Object(m.a)({},t.target.name,t.currentTarget.checked)):e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},t.target.name,+t.target.value))}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.images,t=this.state,n=t.itemWidth,i=t.frameSize,a=t.step,s=t.currentPosition,c=t.animationDuration,r=t.infinite;return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*i,"px")},children:e.map((function(e){return Object(j.jsx)("li",{className:"Carousel__list__item",children:Object(j.jsx)("img",{src:e,alt:e,className:"Carousel__list__item__img",style:{width:"".concat(n,"px"),height:"".concat(n,"px"),transition:"transform ".concat(c,"ms"),transform:"translateX(".concat(s,"px)")}})},e[6]+e[7])}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",onClick:this.moveLeft,disabled:!r&&0===this.newPosition,children:"Prev"}),Object(j.jsx)("button",{"data-cy":"next",type:"button",onClick:this.moveRight,disabled:!r&&this.newPosition===-(e.length-i)*n,children:"Next"})]}),Object(j.jsxs)("div",{className:"panel",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Change size:"}),Object(j.jsx)("input",{type:"number",name:"itemWidth",value:n,min:"50",onChange:this.changeValue})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Show icon:"}),Object(j.jsx)("input",{type:"number",name:"frameSize",value:i,min:"1",max:"5",onChange:this.changeValue})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Animations speed:"}),Object(j.jsx)("input",{type:"number",name:"animationDuration",value:c,min:"0",onChange:this.changeValue})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Step:"}),Object(j.jsx)("input",{type:"number",name:"step",value:a,min:"0",max:"10",onChange:this.changeValue})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"infinite:"}),Object(j.jsx)("input",{type:"checkbox",name:"infinite",checked:r,onChange:this.changeValue})]})]})]})}}]),n}(l.Component),b=p,g=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(j.jsx)(b,{images:e})]})}}]),n}(h.a.Component),d=g;a.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eb76dd5e.chunk.js.map