(this.webpackJsonpprototype=this.webpackJsonpprototype||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},122:function(e,t,a){},184:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a(24),n=a.n(o),c=(a(108),a(109),a(110),a(35)),i=a(12),s=a(25),d=a(26),l=a(29),h=a(28),u=a(53),j=a.n(u),p=a(196),b=a(197),O=a(42),v=a(33),x=a(200),m=a(199),C=a(54),f=a.n(C),g=(a(85),a(122),a(2)),I=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var r,o=e.report,n=o.id,c=o.lab,i=o.protocol,d=o.sendDate,l=o.labId,h=o.period;return Object(s.a)(this,a),(r=t.call(this)).handleInputChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,o=t.name,n=Object(v.a)({},r.state[o]);n.correct=""!==a.trim(),n.touched=!0,n.value=a,r.setState(Object(O.a)({},o,n))},r.handleSubmit=function(e){e.preventDefault();var t={id:r.state.id,lab:r.state.lab.value,protocol:r.state.protocol.value,sendDate:r.state.sendDate.value,labId:r.state.labId.value,period:r.state.period.value};r.props.onSubmit(t),r.props.closeModal()},r.state={id:n,lab:{value:c,correct:!1,touched:!1},protocol:{value:i,correct:!1,touched:!1},sendDate:{value:d,correct:!1,touched:!1},labId:{value:l,correct:!1,touched:!1},period:{value:h,correct:!1,touched:!1}},r}return Object(d.a)(a,[{key:"InputDateChange",value:function(e){var t=Object(v.a)(Object(v.a)({},this.state.sendDate),{},{value:e,correct:null!=e,touched:!0});this.setState({sendDate:t})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Agregar Reporte de Laboratorio"}),Object(g.jsxs)(x.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(x.a.Group,{controlId:"formBasicLabo",children:[Object(g.jsx)(x.a.Label,{children:"Laboratorio"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"Laboratorio",value:this.state.lab.value,onChange:this.handleInputChange,name:"lab"}),Object(g.jsx)(m.a,{show:!this.state.lab.correct&&this.state.lab.touched,variant:"danger",children:"Laboratorio no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicProtocol",children:[Object(g.jsx)(x.a.Label,{children:"Protocolo"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"#",value:this.state.protocol.value,onChange:this.handleInputChange,name:"protocol"}),Object(g.jsx)(m.a,{show:!this.state.protocol.correct&&this.state.protocol.touched,variant:"danger",children:"Protocolo no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicSendDate",children:[Object(g.jsx)(x.a.Label,{children:"Fecha de env\xedo al comit\xe9"}),Object(g.jsx)("div",{}),Object(g.jsx)(f.a,{selected:this.state.sendDate.value,onChange:function(t){return e.InputDateChange(t)},dateFormat:"dd/MM/yyyy",isClearable:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0}),Object(g.jsx)(m.a,{show:!this.state.sendDate.correct&&this.state.sendDate.touched,variant:"danger",children:"Fecha no puede ser vac\xeda"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicLabId",children:[Object(g.jsx)(x.a.Label,{children:"Identificador del estudio"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"------",value:this.state.labId.value,onChange:this.handleInputChange,name:"labId"}),Object(g.jsx)(m.a,{show:!this.state.labId.correct&&this.state.labId.touched,variant:"danger",children:"Identificador del estudio no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicPeriod",children:[Object(g.jsx)(x.a.Label,{children:"Periodo del estudio"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"dd/mm/aa => dd/mm/aa",value:this.state.period.value,onChange:this.handleInputChange,name:"period"}),Object(g.jsx)(m.a,{show:!this.state.period.correct&&this.state.period.touched,variant:"danger",children:"Periodo no puede ser vac\xedo"})]}),Object(g.jsx)("div",{className:"saveDiv",children:Object(g.jsx)(p.a,{variant:"primary",type:"submit",children:"Guardar"})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.report.id!==t.id){var a=e.report,r=a.id,o=a.lab,n=a.protocol,c=a.sendDate,i=a.labId,s=a.period;return console.log("Date form: "+c),{id:r,lab:{value:o,correct:!1,touched:!1},protocol:{value:n,correct:!1,touched:!1},sendDate:{value:c,correct:!1,touched:!1},labId:{value:i,correct:!1,touched:!1},period:{value:s,correct:!1,touched:!1}}}return null}}]),a}(r.Component),y=a(79);a(194);y.a.initializeApp({apiKey:"AIzaSyCa2sbQ0HRxelXKBUPApHc_FMacDvl4F5o",authDomain:"report-prototype.firebaseapp.com",projectId:"report-prototype",storageBucket:"report-prototype.appspot.com",messagingSenderId:"1022968365167",appId:"1:1022968365167:web:0de10bec101858f3cb4d9a"});var S=y.a,D=(a(184),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getReports=function(){var t=[];e.state.db.collection("reporte").get().then((function(a){a.forEach((function(e){t.push(e.data())})),t.forEach((function(e){return e.sendDate=new Date(1e3*e.sendDate.seconds)})),e.setState({reports:t})}))},e.InvertOpenModal=function(){var t=e.state.modalOpen;e.setState({modalOpen:!t})},e.handleOnSubmit=function(t){if(""===t.id){var a=parseInt(e.getId())+1;t.id=a+""}e.state.db.collection("reporte").doc(t.id).set(t),e.getReports()},e.onEdit=function(t){e.setState({report:t}),e.InvertOpenModal(),e.getReports()},e.onDelete=function(t){var a=[];e.state.db.collection("reporte").doc(t.id+"").collection("sintomas").get().then((function(r){r.forEach((function(e){a.push(e.data())})),0!==a.length&&a.forEach((function(a){return e.state.db.collection("reporte").doc(t.id+"").collection("sintomas").doc(""+a.id).delete()}))})),e.state.db.collection("reporte").doc(t.id+"").delete(),e.getReports()},e.getId=function(){var t=e.state.reports;return t.length>0?t.reduce((function(e,t){return e<t.id?t.id:e}),e.state.reports[0].id):0},e.addReportHandler=function(){e.setState({report:e.state.baseReport}),e.InvertOpenModal()},e.state={reports:[],report:{id:"",lab:"",protocol:"",sendDate:null,labId:"",period:""},modalOpen:!1,db:S.firestore(),baseReport:{id:"",lab:"",protocol:"",sendDate:null,labId:"",period:""}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getReports()}},{key:"renderReports",value:function(){var e=this;return this.state.reports.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.id}),Object(g.jsx)("td",{children:t.lab}),Object(g.jsx)("td",{children:t.labId}),Object(g.jsxs)("td",{children:[Object(g.jsx)(p.a,{className:"actionBtn",variant:"warning",onClick:function(){return e.onEdit(t)},children:"Editar"}),Object(g.jsx)(p.a,{className:"actionBtn",variant:"danger",onClick:function(){return e.onDelete(t)},children:"Eliminar"})]}),Object(g.jsx)("td",{children:Object(g.jsx)(c.b,{to:"/report/".concat(t.id),children:Object(g.jsx)(p.a,{variant:"info",children:"CIOMS"})})})]},t.id)}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"Laboratorio"}),Object(g.jsx)("th",{children:"Identificador estudio"}),Object(g.jsx)("th",{children:"Report actions"}),Object(g.jsx)("th",{children:"CIOMS"})]})}),Object(g.jsx)("tbody",{children:this.renderReports()})]}),Object(g.jsx)(p.a,{onClick:this.addReportHandler,variant:"primary",children:"Add Report"}),Object(g.jsxs)(j.a,{style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},isOpen:this.state.modalOpen,ariaHideApp:!1,children:[Object(g.jsx)(I,{report:this.state.report,closeModal:this.InvertOpenModal,onSubmit:this.handleOnSubmit}),Object(g.jsx)("div",{className:"closeDiv",children:Object(g.jsx)(p.a,{className:"closeBtn",onClick:this.InvertOpenModal,variant:"primary",children:"Cerrar"})})]})]})}}]),a}(r.Component)),M=(r.Component,a(201)),k=a(198),R=a(96),w=(a(187),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var r,o=e.CIOM,n=o.id,c=o.cod,i=o.reportCountry,d=o.reportYear,l=o.event,h=o.ciomState,u=o.notiDate;return Object(s.a)(this,a),(r=t.call(this)).handleInputChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,o=t.name,n=Object(v.a)({},r.state[o]);n.correct=""!==a.trim(),n.touched=!0,n.value=a,r.setState(Object(O.a)({},o,n))},r.handleSubmit=function(e){e.preventDefault();var t={id:r.state.id,cod:r.state.cod.value,reportCountry:r.state.reportCountry.value,reportYear:r.state.reportYear.value,event:r.state.event.value,ciomState:r.state.ciomState.value,notiDate:r.state.notiDate.value};r.props.onSubmit(t),r.props.closeModal()},r.state={id:n,cod:{value:c,correct:!1,touched:!1},reportCountry:{value:i,correct:!1,touched:!1},reportYear:{value:d,correct:!1,touched:!1},event:{value:l,correct:!1,touched:!1},ciomState:{value:h,correct:!1,touched:!1},notiDate:{value:u,correct:!1,touched:!1}},r}return Object(d.a)(a,[{key:"InputDateChange",value:function(e){var t=Object(v.a)(Object(v.a)({},this.state.notiDate),{},{value:e,correct:null!=e,touched:!0});this.setState({notiDate:t})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Agregar CIOM al Reporte"}),Object(g.jsxs)(x.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(x.a.Group,{controlId:"formBasicCod",children:[Object(g.jsx)(x.a.Label,{children:"C\xf3digo del paciente"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"c\xf3digo",value:this.state.cod.value,onChange:this.handleInputChange,name:"cod"}),Object(g.jsx)(m.a,{show:!this.state.cod.correct&&this.state.cod.touched,variant:"danger",children:"C\xf3digo no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicRepoCountry",children:[Object(g.jsx)(x.a.Label,{children:"Pa\xeds del reporte"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"pa\xeds",value:this.state.reportCountry.value,onChange:this.handleInputChange,name:"reportCountry"}),Object(g.jsx)(m.a,{show:!this.state.reportCountry.correct&&this.state.reportCountry.touched,variant:"danger",children:"Pa\xeds no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicReportYear",children:[Object(g.jsx)(x.a.Label,{children:"A\xf1o del reporte"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"a\xf1o",value:this.state.reportYear.value,onChange:this.handleInputChange,name:"reportYear"}),Object(g.jsx)(m.a,{show:!this.state.reportYear.correct&&this.state.reportYear.touched,variant:"danger",children:"A\xf1o del reporte no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicEvent",children:[Object(g.jsx)(x.a.Label,{children:"Evento presentado"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"---",value:this.state.event.value,onChange:this.handleInputChange,name:"event"}),Object(g.jsx)(m.a,{show:!this.state.event.correct&&this.state.event.touched,variant:"danger",children:"Evento no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicCiomState",children:[Object(g.jsx)(x.a.Label,{children:"Estado del CIOM"}),Object(g.jsx)(x.a.Control,{type:"text",placeholder:"estado",value:this.state.ciomState.value,onChange:this.handleInputChange,name:"ciomState"}),Object(g.jsx)(m.a,{show:!this.state.ciomState.correct&&this.state.ciomState.touched,variant:"danger",children:"Estado no puede ser vac\xedo"})]}),Object(g.jsxs)(x.a.Group,{controlId:"formBasicNotiDate",children:[Object(g.jsx)(x.a.Label,{children:"Fecha de notificaci\xf3n"}),Object(g.jsx)("div",{}),Object(g.jsx)(f.a,{selected:this.state.notiDate.value,onChange:function(t){return e.InputDateChange(t)},dateFormat:"dd/MM/yyyy",isClearable:!0,showYearDropdown:!0,scrollableMonthYearDropdown:!0}),Object(g.jsx)(m.a,{show:!this.state.notiDate.correct&&this.state.notiDate.touched,variant:"danger",children:"Fecha no puede ser vac\xeda"})]}),Object(g.jsx)("div",{className:"saveDiv",children:Object(g.jsx)(p.a,{disabled:!1,variant:"primary",type:"submit",children:"Guardar"})})]})]})}},{key:"checkAllCorrect",value:function(){this.state.correctCOD&&this.state.correctRepoCountry&&this.state.correctRepoYear&&this.state.correctEvent&&this.state.correctCIOMState&&this.state.correctNotiDate?this.setState({allCorrectToSave:!0}):this.setState({allCorrectToSave:!1})}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.CIOM.id!==t.id){var a=e.CIOM;return{id:a.id,cod:{value:a.cod,correct:!1,touched:!1},reportCountry:{value:a.reportCountry,correct:!1,touched:!1},reportYear:{value:a.reportYear,correct:!1,touched:!1},event:{value:a.event,correct:!1,touched:!1},ciomState:{value:a.ciomState,correct:!1,touched:!1},notiDate:{value:a.notiDate,correct:!1,touched:!1}}}return null}}]),a}(r.Component)),B=(a(188),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getId=function(){var t=e.state.CIOMS;return t.length>0?t.reduce((function(e,t){return e<t.id?t.id:e}),e.state.CIOMS[0].id):0},e.InvertOpenModal=function(){var t=e.state.modalOpen;e.setState({modalOpen:!t})},e.handleOnSubmit=function(t){if(console.log(t),""===t.id){var a=parseInt(e.getId())+1;t.id=a+""}e.state.db.collection("reporte").doc(e.state.report.id).collection("sintomas").doc(t.id).set(t),e.setVariablesOriginalValues(),e.getReportAndCIOMS()},e.onEdit=function(t){e.setState({CIOM:t}),e.InvertOpenModal(),e.getReportAndCIOMS()},e.onDelete=function(t){e.state.db.collection("reporte").doc(e.state.report.id).collection("sintomas").doc(""+t.id).delete(),e.getReportAndCIOMS()},e.addCIOMHandler=function(){e.setState({CIOM:e.state.baseCIOM}),e.InvertOpenModal()},e.state={report:{id:"",lab:"",protocol:"",sendDate:"",labId:"",period:""},CIOMS:[],CIOM:{id:"",cod:"",reportCountry:"",reportYear:"",event:"",ciomState:"",notiDate:null},db:S.firestore(),modalOpen:!1,baseCIOM:{id:"",cod:"",reportCountry:"",reportYear:"",event:"",ciomState:"",notiDate:null}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getReportAndCIOMS()}},{key:"getReportAndCIOMS",value:function(){var e=this,t=this.props.match.params.id;this.state.db.collection("reporte").doc(""+t).get().then((function(a){if(a.exists){var r=a.data();r.sendDate=new Date(1e3*r.sendDate.seconds),console.log("date try: "+r.sendDate.getDate()),e.setState({report:r}),console.log("voy a buscar cioms");var o=[];e.state.db.collection("reporte").doc(t).collection("sintomas").get().then((function(t){t.forEach((function(e){console.log(e.data()),o.push(e.data())})),o.forEach((function(e){return e.notiDate=new Date(1e3*e.notiDate.seconds)})),e.setState({CIOMS:o})}))}else console.log("No such document!")})).catch((function(e){console.log("error")}))}},{key:"renderCIOMS",value:function(){var e=this;return this.state.CIOMS.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.id}),Object(g.jsx)("td",{children:t.cod}),Object(g.jsx)("td",{children:t.reportCountry}),Object(g.jsx)("td",{children:t.reportYear}),Object(g.jsx)("td",{children:t.event}),Object(g.jsx)("td",{children:t.ciomState}),Object(g.jsx)("td",{children:t.notiDate+""}),Object(g.jsxs)("td",{children:[Object(g.jsx)(p.a,{className:"actionBtn",variant:"warning",onClick:function(){return e.onEdit(t)},children:"Editar"}),Object(g.jsx)(p.a,{className:"actionBtn",variant:"danger",onClick:function(){return e.onDelete(t)},children:"Eliminar"})]})]},t.id)}))}},{key:"setVariablesOriginalValues",value:function(){this.setState({id:"",cod:"",reportCountry:"",reportYear:"",event:"",ciomState:"",notiDate:null})}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"RepContainer",children:[Object(g.jsx)(c.b,{to:"/",children:Object(g.jsx)("p",{children:"Back to home"})}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)(M.a.Header,{children:["Laboratorio ",Object(g.jsx)("span",{className:"titleSpan",children:this.state.report.lab})]}),Object(g.jsxs)(M.a.Body,{children:[Object(g.jsxs)(k.a,{size:"sm",className:"mb-3",children:[Object(g.jsx)(k.a.Prepend,{children:Object(g.jsx)(k.a.Text,{id:"inputGroup-sizing-sm",children:"Identificador Estudio"})}),Object(g.jsx)(R.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",value:this.state.report.labId,disabled:!0})]}),Object(g.jsxs)(k.a,{size:"sm",className:"mb-3",children:[Object(g.jsx)(k.a.Prepend,{children:Object(g.jsx)(k.a.Text,{id:"inputGroup-sizing-sm",children:"Protocolo"})}),Object(g.jsx)(R.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",value:this.state.report.protocol,disabled:!0})]}),Object(g.jsxs)(k.a,{size:"sm",className:"mb-3",children:[Object(g.jsx)(k.a.Prepend,{children:Object(g.jsx)(k.a.Text,{id:"inputGroup-sizing-sm",children:"Fecha de env\xedo al comit\xe9"})}),Object(g.jsx)(R.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",value:this.state.report.sendDate,disabled:!0})]}),Object(g.jsxs)(k.a,{size:"sm",className:"mb-3",children:[Object(g.jsx)(k.a.Prepend,{children:Object(g.jsx)(k.a.Text,{id:"inputGroup-sizing-sm",children:"Periodo"})}),Object(g.jsx)(R.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",value:this.state.report.period,disabled:!0})]})]}),Object(g.jsx)(M.a.Header,{children:"Reportes de CIOMS"}),Object(g.jsx)(M.a.Body,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"C\xf3digo paciente"}),Object(g.jsx)("th",{children:"Pa\xeds reporte"}),Object(g.jsx)("th",{children:"A\xf1o reporte"}),Object(g.jsx)("th",{children:"Evento"}),Object(g.jsx)("th",{children:"Estado"}),Object(g.jsx)("th",{children:"Fecha notificaci\xf3n"}),Object(g.jsx)("th",{children:"CIOMS actions"})]})}),Object(g.jsx)("tbody",{children:this.renderCIOMS()})]}),Object(g.jsx)(p.a,{onClick:this.addCIOMHandler,variant:"primary",children:"Add CIOM"}),Object(g.jsxs)(j.a,{style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},isOpen:this.state.modalOpen,ariaHideApp:!1,children:[Object(g.jsx)(w,{CIOM:this.state.CIOM,closeModal:this.InvertOpenModal,onSubmit:this.handleOnSubmit}),Object(g.jsx)("div",{className:"closeDiv",children:Object(g.jsx)(p.a,{className:"closeBtn",onClick:this.InvertOpenModal,variant:"primary",children:"Cerrar"})})]})]})})]})]})}}]),a}(r.Component)),E=Object(i.f)(B),N=Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/",children:Object(g.jsx)(D,{})}),Object(g.jsx)(i.a,{exact:!0,path:"/report/:id",children:Object(g.jsx)(E,{})})]});var G=function(){return Object(g.jsx)(c.a,{children:Object(g.jsx)("div",{className:"App",children:N})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,202)).then((function(t){var a=t.getCLS,r=t.getFID,o=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),o(e),n(e),c(e)}))};n.a.render(Object(g.jsx)(G,{}),document.getElementById("root")),L()}},[[189,1,2]]]);
//# sourceMappingURL=main.1aa994fa.chunk.js.map