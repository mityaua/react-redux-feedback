(this["webpackJsonpreact-redux-feedback"]=this["webpackJsonpreact-redux-feedback"]||[]).push([[0],{13:function(e,t,c){e.exports={section:"Section_section__cEcRn",title:"Section_title__dwThv"}},2:function(e,t,c){e.exports={list:"Statistics_list__3r8OG",item:"Statistics_item__1jHUK",value:"Statistics_value__pMYpV"}},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(6),i=c.n(n),r=c(3),l=c(14),o=c(7),j=c(11),d="counter/onLeaveFeedback",b={good:0,neutral:0,bad:0},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case d:return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},a,e[a]+=1));default:return e}},O=Object(r.combineReducers)({feedback:u}),h=Object(r.createStore)(O,Object(l.composeWithDevTools)()),x=c(4),m=c(13),p=c.n(m),f=c(0),v=function(e){var t=e.title,c=e.children;return Object(f.jsxs)("section",{className:p.a.section,children:[Object(f.jsx)("h1",{className:p.a.title,children:t}),c]})};v.defaultProps={title:"",children:[]};var _=v,k=c(8),N=c.n(k),g=Object(x.b)((function(e){return{feedback:e.feedback}}),(function(e){return{onLeaveFeedback:function(t){return e((c=t.target.textContent,{type:d,payload:c}));var c}}}))((function(e){var t=e.feedback,c=e.onLeaveFeedback;return Object(f.jsx)("ul",{className:N.a.list,children:Object.keys(t).map((function(e){return Object(f.jsx)("li",{className:N.a.item,children:Object(f.jsx)("button",{className:N.a.button,type:"button",onClick:c,children:e})},e)}))})})),S=c(5),F=c.n(S),y=function(e){var t=e.total,c=e.percent;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:F.a.item,children:["Total: ",Object(f.jsx)("span",{className:F.a.value,children:t})]}),Object(f.jsxs)("p",{className:F.a.item,children:["Positive feedback: ",Object(f.jsxs)("span",{className:F.a.value,children:[c,"%"]})]})]})},w=function(e){var t=e.message;return Object(f.jsx)("p",{children:t})};w.defaultProps={message:""};var T=w,P=c(2),E=c.n(P),L=Object(x.b)((function(e){return{feedback:e.feedback}}))((function(e){var t=e.feedback,c=Object.keys(t).reduce((function(e,c){return e+t[c]}),0),a=Math.round(t.good/c*100||null);return Object(f.jsx)(f.Fragment,{children:c?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("ul",{className:E.a.list,children:[Object(f.jsx)("li",{className:E.a.item,children:Object(f.jsxs)("p",{children:["Good: ",Object(f.jsx)("span",{className:E.a.value,children:t.good})]})}),Object(f.jsx)("li",{className:E.a.item,children:Object(f.jsxs)("p",{children:["Neutral:"," ",Object(f.jsx)("span",{className:E.a.value,children:t.neutral})]})}),Object(f.jsx)("li",{className:E.a.item,children:Object(f.jsxs)("p",{children:["Bad: ",Object(f.jsx)("span",{className:E.a.value,children:t.bad})]})})]}),Object(f.jsx)(y,{total:c,percent:a})]}):Object(f.jsx)(T,{message:"No feedback given"})})})),M=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_,{title:"Please leave feedback",children:Object(f.jsx)(g,{})}),Object(f.jsx)(_,{title:"Statistics",children:Object(f.jsx)(L,{})})]})};c(30),c(31);i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(x.a,{store:h,children:Object(f.jsx)(M,{})})}),document.getElementById("root"))},5:function(e,t,c){e.exports={item:"StatisticsTotal_item__11qEi",value:"StatisticsTotal_value__2vwFS"}},8:function(e,t,c){e.exports={list:"FeedbackOptions_list__1WW5d",item:"FeedbackOptions_item__2hr5z",button:"FeedbackOptions_button__3VQV5"}}},[[32,1,2]]]);
//# sourceMappingURL=main.6f5cd5e8.chunk.js.map