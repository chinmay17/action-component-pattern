(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(41)},36:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),l=n.n(c),i=n(11),r=n(43),u=n(2),d=(n(36),n(25)),s=n(12),m=n(9),b=n(53),E=n(42),f=n(3),p=n(54),O=n(8),j=n(15),v=n(52),h=n(55),g=function(e){var t=e.todo,n=e.onSubmit,c=e.onCancel,l=e.show,r=e.isWIP,u=o.a.useState(t.value),d=Object(i.a)(u,2),s=d[0],m=d[1],b=Object(a.useCallback)(function(){n(Object(f.a)(Object(f.a)({},t),{},{value:s}))},[s,t,n]);return Object(a.useEffect)(function(){m(t.value)},[t.value,l]),o.a.createElement(p.a,{onClose:c,closeable:!0,isOpen:l,animate:!0,autoFocus:!0,size:O.c.default,role:O.b.dialog},o.a.createElement(j.g,null,"Edit"),o.a.createElement(j.e,null,o.a.createElement(h.a,{disabled:r,value:s,onChange:function(e){return m(e.target.value)},placeholder:"Controlled Input"})),o.a.createElement(j.f,null,o.a.createElement(v.a,{disabled:r,onClick:c},"Cancel"),o.a.createElement(v.a,{disabled:r,onClick:b},"Submit")))},y=function(e){var t=e.onSubmit,n=e.onCancel,a=e.show,c=e.isWIP;return o.a.createElement(p.a,{onClose:n,closeable:!0,isOpen:a,animate:!0,autoFocus:!0,size:O.c.default,role:O.b.dialog},o.a.createElement(j.g,null,"Delete???"),o.a.createElement(j.e,null,"You sure you want to delete?"),o.a.createElement(j.f,null,o.a.createElement(v.a,{disabled:c,onClick:n},"Cancel"),o.a.createElement(v.a,{disabled:c,onClick:t},"Yes, delete!!!!")))};function C(e){return new Promise(function(t){return setTimeout(function(){return t(e)},200+Math.floor(500*Math.random()))})}var k=function(e){var t=e.onSuccess,n=e.onError;return[Object(a.useCallback)(function(e){return C(e).then(function(e){return t(e),e}).catch(n)},[t,n])]},D=function(e){var t=e.children,n=e.todo,c=function(e){var t,n=e.todo,o=e.onUpdate,c=e.onDelete,l=Object(a.useState)({activeAction:null,loading:!1}),r=Object(i.a)(l,2),u=r[0],d=r[1],s=k({onSuccess:function(){},onError:function(){}}),m=Object(i.a)(s,1)[0],b=k({onSuccess:function(){},onError:function(){}}),E=Object(i.a)(b,1)[0],p=Object(a.useMemo)(function(){var e=[];return n.permissions.canEdit&&(e.push({type:"TOGGLE",label:"Toggle Status"}),e.push({type:"EDIT",icon:"\u270e",label:"Edit todo"})),n.permissions.canDelete&&e.push({type:"DELETE",icon:"\ud83d\uddd1",label:"Delete todo"}),e},[n.permissions]),O=Object(a.useCallback)(function(e){switch(e.type){case"DELETE":case"EDIT":d(function(t){return Object(f.a)(Object(f.a)({},t),{},{activeAction:e})});break;case"TOGGLE":d(function(e){return Object(f.a)(Object(f.a)({},e),{},{loading:!0})}),m(Object(f.a)(Object(f.a)({},n),{},{completed:!n.completed})).then(function(e){d(function(e){return Object(f.a)(Object(f.a)({},e),{},{activeAction:null,loading:!1})}),o(e)})}},[m,n,o]),j=Object(a.useCallback)(function(e){switch(d(function(e){return Object(f.a)(Object(f.a)({},e),{},{loading:!0})}),e.type){case"ON_EDIT_SUBMIT":m(e.payload.todo).then(function(e){d(function(e){return Object(f.a)(Object(f.a)({},e),{},{activeAction:null,loading:!1})}),o(e)});break;case"ON_DELETE_SUBMIT":E(e.payload.todo.id).then(function(){d(function(e){return Object(f.a)(Object(f.a)({},e),{},{activeAction:null,loading:!1})}),c(e.payload.todo)})}},[m,E,c,o]),v=Object(a.useCallback)(function(e){return j({type:"ON_EDIT_SUBMIT",payload:{todo:e}})},[j]),h=Object(a.useCallback)(function(){return j({type:"ON_DELETE_SUBMIT",payload:{todo:n}})},[j,n]),g=null===(t=u.activeAction)||void 0===t?void 0:t.type,y=Object(a.useCallback)(function(){d(function(e){return Object(f.a)(Object(f.a)({},e),{},{activeAction:null})})},[]);return{actions:p,state:Object(a.useMemo)(function(){return{selectedActionType:g,loading:u.loading}},[g,u.loading]),onAction:p.length?O:void 0,onEditorSubmit:v,onDeleteSubmit:h,onOverlayCancel:y}}({todo:n,onUpdate:e.onUpdate,onDelete:e.onDelete}),l=c.actions,r=c.state,u=c.onAction,d=c.onEditorSubmit,s=c.onDeleteSubmit,m=c.onOverlayCancel;return o.a.createElement(o.a.Fragment,null,t({actions:l,state:r,onAction:u}),o.a.createElement(g,{show:"EDIT"===r.selectedActionType,todo:n,onSubmit:d,onCancel:m,isWIP:r.loading}),o.a.createElement(y,{show:"DELETE"===r.selectedActionType,onSubmit:s,onCancel:m,isWIP:r.loading}))},T=n(56),S=n(57),A=n(58),w=n(5),I=function(e){var t=e.onChange,n=e.todo,a=e.disabled;return o.a.createElement(A.a,{disabled:a,checked:n.completed,onChange:t,labelPlacement:w.a.right},o.a.createElement(S.a,{$style:n.completed?{textDecoration:"line-through"}:{}},n.value))},x=function(e){var t=e.todo,n=e.actions,c=e.onAction,l=e.state,i=(l.selectedActionType,l.loading),d=n.find(function(e){return"TOGGLE"===e.type}),s=Object(a.useCallback)(function(){c(d)},[c,d]),m=Object(a.useMemo)(function(){return n.filter(function(e){return"TOGGLE"!==e.type})},[n]);return o.a.createElement(T.a,{overrides:i?{Root:{style:{opacity:"0.4",cursor:"not-allowed"}}}:void 0},o.a.createElement(S.a,{display:"flex",alignItems:"center",minWidth:"300px"},o.a.createElement(S.a,{flex:"1"},o.a.createElement(I,{onChange:s,todo:t,disabled:!d})),o.a.createElement(S.a,{marginLeft:"auto",flex:"0 0 auto",display:"flex"},m.map(function(e){return o.a.createElement(S.a,{marginLeft:"10px",flex:"0 0 auto",key:e.type},o.a.createElement(r.a,{shape:u.b.round,disabled:i,onClick:function(){return c(e)}},o.a.createElement(S.a,{height:"20px",width:"20px"},e.icon)))}))))},L=function(e){var t=e.todo,n=e.onUpdate,a=e.onDelete;return o.a.createElement(D,{todo:t,onUpdate:n,onDelete:a},function(e){var n=e.actions,a=e.state,c=e.onAction;return o.a.createElement(x,{todo:t,actions:n,state:a,onAction:c})})},M=new d.a,U=Object(m.a)("div",{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}),G=[{value:"Waking up at 9",id:1,completed:!1,permissions:{canEdit:!1,canDelete:!0}},{value:"Cooking lunch",id:2,completed:!0,permissions:{canDelete:!0,canEdit:!0}},{value:"Enjoying a power nap",id:3,completed:!1,permissions:{canDelete:!1,canEdit:!0}}];function _(){var e=Object(a.useState)(G),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useCallback)(function(e){c(function(t){return t.map(function(t){return t.id===e.id?e:t})})},[c]),d=Object(a.useCallback)(function(e){c(function(t){return t.filter(function(t){return t.id!==e.id})})},[c]);return o.a.createElement(s.a,{value:M},o.a.createElement(b.a,{theme:E.a},o.a.createElement(U,null,o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Action Component in action"),o.a.createElement(r.a,{onClick:function(){return c(G)},kind:u.a.minimal,size:u.c.mini},"Reset"),o.a.createElement("ul",null,n.map(function(e){return o.a.createElement(L,{key:e.id,todo:e,onUpdate:l,onDelete:d})}))))))}var P=document.getElementById("root");l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),P)}},[[31,1,2]]]);
//# sourceMappingURL=main.5ac4ee21.chunk.js.map