(this["webpackJsonpfaq-accordion"]=this["webpackJsonpfaq-accordion"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(10),a=i.n(n),c=i(8),o=i(2),r=i(3),l=i(4),u=i(6),d=i(5),p=(i(9),i(15),i(16),i.p+"static/media/icon-arrow-down.852fa301.svg"),m=i(0),h=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var e=this,t="item__question",i="item__arrow",s="item__answer";return this.props.isActive&&(t+="--active",i+="--active",s+="--active"),Object(m.jsxs)("div",{className:"item",children:[Object(m.jsxs)("p",{className:t,onClick:function(){return e.props.onClick(e.props.list.id)},children:[this.props.list.question,Object(m.jsx)("img",{src:p,alt:"icon-arrow",className:i})]}),Object(m.jsx)("p",{className:s,children:this.props.list.answer})]})}}]),i}(s.Component),b=[{id:1,isActive:!1,question:"How many team members can I invite?",answer:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},{id:2,isActive:!1,question:"What is the maximum file upload size?",answer:"No more than 2GB. All files in your account must fit your allotted storage space."},{id:3,isActive:!1,question:" How do I reset my password?",answer:"Click \u201cForgot password\u201d from the login page or \u201cChange password\u201d from your profile page.A reset link will be emailed to you."},{id:4,isActive:!1,question:"Can I cancel my subscription?",answer:"Yes! Send us a message and we\u2019ll process your request no questions asked."},{id:5,isActive:!1,question:"Do you provide additional support?",answer:"Chat and email support is available 24/7. Phone lines are open during normal business hours."}],j=i.p+"static/media/illustration-box-desktop.ec1ba14b.svg",v=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).state={contents:b},e.handleClick=e.handleClick.bind(Object(l.a)(e)),e}return Object(r.a)(i,[{key:"handleClick",value:function(e){this.setState((function(t){return{contents:t.contents.map((function(t){return t.id==e?Object(c.a)(Object(c.a)({},t),{},{isActive:!t.isActive}):t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.contents.map((function(t){return Object(m.jsx)(h,{list:t,onClick:e.handleClick,isActive:t.isActive},t.question)}));return Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card__hero",children:Object(m.jsx)("img",{src:j,alt:"box"})}),Object(m.jsxs)("div",{className:"card__faq",children:[Object(m.jsx)("h1",{children:"FAQ"}),t]})]})})}}]),i}(s.Component);i(18);a.a.render(Object(m.jsx)(v,{}),document.querySelector("#root"))},9:function(e,t,i){}},[[19,1,2]]]);
//# sourceMappingURL=main.cd55d857.chunk.js.map