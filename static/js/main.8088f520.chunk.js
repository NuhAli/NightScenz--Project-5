(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],Array(18).concat([function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/video-1.229f5279.mp4"},,,function(e,t,a){e.exports=a.p+"static/media/img-1.45febb11.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-2.9cc98e36.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-3.54b89ee1.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-4.02453f10.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-5.b076545c.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-6.2943ea15.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-7.fab4c69a.jpg"},,function(e,t,a){e.exports=a(50)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),c=a(20),r=a.n(c),m=a(32),i=a(10),s=(a(18),a(2));function o(){var e=Object(s.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}a(43);var u=a(7),d=["btn--form","btn--outline"],E=["btn--medium","btn--large"],p=function(e){var t=e.children,a=e.type,l=e.onClick,c=e.buttonStyle,r=e.buttonSize,m=d.includes(c)?c:d[0],i=E.includes(r)?r:E[0];return n.a.createElement(u.b,{to:"/gallery",className:"btn-mobile"},n.a.createElement("button",{className:"btn ".concat(m," ").concat(i),onClick:l,type:a},t))},f=(a(44),a(22)),N=a.n(f),g=function(){return n.a.createElement("div",{className:"hero"},n.a.createElement("video",{src:N.a,autoPlay:!0,loop:!0,muted:!0}),n.a.createElement("h1",null,"Capturing Perfection"),n.a.createElement("p",null,"Specialist Night Photographer"),n.a.createElement("div",{className:"hero-btns"},n.a.createElement(p,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"My Work")))},b=(a(45),function(){return n.a.createElement("section",{className:"newsletter"},n.a.createElement("div",{className:"newsletter-wrapper"},n.a.createElement("form",{action:"#",className:"sign-up"},n.a.createElement("h4",null,"Sign up for my weekly newsletter"),n.a.createElement("h6",null,"You can cancel at any time"),n.a.createElement("div",{className:"email-area"},n.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email..."}),n.a.createElement(p,{buttonStyle:"btn-form",children:"Subscribe"})))))}),v=(a(46),a(8)),h=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"footer-wrapper"},n.a.createElement("div",{className:"list"},n.a.createElement("h6",null,"About"),n.a.createElement("ul",null,n.a.createElement("li",null,"Company"),n.a.createElement("li",null,"Testimonials"),n.a.createElement("li",null,"Licensing"))),n.a.createElement("div",{className:"list"},n.a.createElement("h6",null,"Instructions"),n.a.createElement("ul",null,n.a.createElement("li",null,"Resources"),n.a.createElement("li",null,"Guidebooks"))),n.a.createElement("div",{className:"list social"},n.a.createElement("h6",null,"Social Media"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(v.c,null)),n.a.createElement("li",null,n.a.createElement(v.d,null)),n.a.createElement("li",null,n.a.createElement(v.g,null))))))},y=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement(b,null),n.a.createElement(h,null))},k=a(23),S=(a(47),function(e){var t=Object(l.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],m=function(){r(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement(u.b,{to:"/NightScenz--Project-5",className:"navbar-logo",onClick:m},"Night Scen-z",n.a.createElement(k.a,{className:"icon"})),n.a.createElement("div",{className:"menu-icon",onClick:function(){r(!c)}},c?n.a.createElement(v.f,{className:"fa-times"}):n.a.createElement(v.a,{className:"fa-bars"})),n.a.createElement("ul",{className:c?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/NightScenz--Project-5",className:"nav-links",onClick:m},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(u.b,{to:"/gallery",className:"nav-links",onClick:m},"Gallery")),n.a.createElement("li",{id:"cart",className:"nav-item"},n.a.createElement(u.b,{to:"/cart",className:"nav-links",onClick:m},n.a.createElement(v.e,null)),n.a.createElement("div",{className:"cart-quant",style:{color:"white"}},e.cartQuantity))))))}),x=a(24),I=function(e){var t=Object(l.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],m={key:e.id,text:e.text,label:e.label,price:e.cost},s=localStorage.getItem("state".concat(e.id));return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"cards-item"},n.a.createElement("div",{className:"cards-item-link",to:e.path},n.a.createElement("figure",{className:"cards-item-pic-wrap","data-category":e.label},n.a.createElement("img",{src:e.src,alt:e.label,className:"cards-item-img"}),s?n.a.createElement(x.a,{id:"cards-item-remove",onClick:function(){localStorage.removeItem("selectedItem"),localStorage.removeItem("state".concat(e.id)),r(!1),e.deleteFromCart(m)}}):n.a.createElement(v.b,{id:"cards-item-addcart",onClick:function(){localStorage.setItem("selectedItem",JSON.stringify(m)),r(!0),localStorage.setItem("state".concat(e.id),!c),e.addToCart(m)}})),n.a.createElement("div",{className:"cards-item-info"},n.a.createElement("h5",{className:"cards-item-text"},e.text)))))},j=(a(48),a(25)),C=a.n(j),w=a(26),O=a.n(w),T=a(27),A=a.n(T),P=a(28),F=a.n(P),J=a(29),z=a.n(J),G=a(30),Y=a.n(G),M=a(31),Q=a.n(M),V=[{src:C.a,text:"Night sky over the Grand Canyon",label:"America",id:1,price:"150.00"},{src:O.a,text:"Night sky over The Sahra ",label:"Egypt",id:2,price:"150.00"},{src:A.a,text:"Night sky over Namib National Park",label:"Nambia",id:3,price:"150.00"},{src:F.a,text:"Night sky over The Empty Quarter",label:"Arabia",id:4,price:"150.00"},{src:z.a,text:"Night sky over The Atacama Desert",label:"Chilie",id:5,price:"150.00"},{src:Y.a,text:"Night sky over The Alps",label:"Austria",id:6,price:"150.00"},{src:Q.a,text:"Night sky over the Yellowstone National Park",label:"Wyoming, US",id:7,price:"150.00"}],W=function(e){var t=V.map((function(t){return n.a.createElement(I,{key:t.id,id:t.id,cost:t.price,src:t.src,text:t.text,label:t.label,addToCart:e.addItem,deleteFromCart:e.deleteItem})}));return n.a.createElement("div",{className:"cards"},n.a.createElement("h1",null," Purchase my collection of galleries! "),n.a.createElement("div",{className:"cards-container"},n.a.createElement("div",{className:"cards-wrapper"},n.a.createElement("ul",{className:"cards-items"},t))))},q=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(W,{addItem:e.addItem,deleteItem:e.deleteItem}),n.a.createElement(b,null),n.a.createElement(h,null))},B=(a(49),function(e){var t,a,l=localStorage.getItem("cart"),c=JSON.parse(l),r=[];return null===c?(a=0,t=[]):c.length>0&&(t=c.map((function(e){return n.a.createElement("tr",{className:"item-row",key:e.id},n.a.createElement("td",{className:"text-cell"},n.a.createElement("h4",null,e.text)),n.a.createElement("td",{className:"price-cell"},n.a.createElement("h4",null,e.price)))}))),c.length>=1&&(c.forEach((function(e){return r.push(Number(e.price))})),a=r.reduce((function(e,t){return e+t}))),n.a.createElement("div",{className:"cart-area"},n.a.createElement("div",{className:"cart-area-wrapper"},n.a.createElement("div",{className:"cart-area-title"},n.a.createElement("h1",null,"Your Cart")),n.a.createElement("div",{className:"cart-area-items"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",{className:"headings"},n.a.createElement("th",null,"Gallery name"),n.a.createElement("th",null,"Price"))),n.a.createElement("tbody",null,t),n.a.createElement("tfoot",{className:"totals-area"},n.a.createElement("tr",{className:"total"},n.a.createElement("td",null,a?"Total (ex 20% VAT) : \xa3 ".concat(a):"Total (ex 20% VAT) : \xa3 0 ")))))))}),D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(B,null),n.a.createElement(h,null))},H=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=localStorage.getItem("cart"),u=function(e){var t=V.find((function(t){return t.id===e.key})),l=[].concat(Object(m.a)(a),[t]);c(l),localStorage.setItem("cart",JSON.stringify(l))},d=function(e){var t=JSON.parse(r).filter((function(t){return t.id!==e.key}));c(t),localStorage.setItem("cart",JSON.stringify(t))};return n.a.createElement("div",{className:"App"},n.a.createElement(o,null),n.a.createElement(S,{addItem:u,deleteItem:d}),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/NightScenz--Project-5"},n.a.createElement(y,{addItem:u,deleteItem:d})),n.a.createElement(s.a,{path:"/gallery"},n.a.createElement(q,{addItem:u,deleteItem:d})),n.a.createElement(s.a,{path:"/cart"},n.a.createElement(D,{addItem:u,deleteItem:d}))))};r.a.render(n.a.createElement(u.a,null,n.a.createElement(H,null)),document.getElementById("root"))}]),[[33,1,2]]]);
//# sourceMappingURL=main.8088f520.chunk.js.map