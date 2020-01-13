(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1f804384"],{2236:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c}));n("f751");var a=n("fc74"),o=n.n(a),r=n("59a1"),i=n.n(r),s=n("2b0e"),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,e),this.$initial=Object.assign({},t),this.data=Object.assign({},this.$initial),this.$errors=null,this.$loading=!1,this.reset()}return i()(e,[{key:"reset",value:function(){Object.assign(this.data,this.$initial),this.$loading=!1,this.deleteErrors()}},{key:"startProcessing",value:function(){this.$loading=!0,this.deleteErrors()}},{key:"finishProcessing",value:function(){this.$loading=!1,this.deleteErrors()}},{key:"failProcessing",value:function(e,n){this.$loading=!1;var a=t.get(n,"response.data");t.isNil(a)||this.setErrors(e,a)}},{key:"getError",value:function(e){return t.get(this.$errors,e)}},{key:"hasError",value:function(e){var n=this.getError(e);return!t.isNil(n)}},{key:"deleteErrors",value:function(){this.$errors=null}},{key:"deleteError",value:function(t){var e=this.hasError(t);e&&s["a"].delete(this.$errors,t)}},{key:"setErrors",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.validationErrors,o=t.get(a,[e,"attributes"]);this.$errors=o||null}}]),e}()}).call(this,n("2ef0"))},"35bb":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-pa-md"},[n("ContactsTable",{ref:"table"})],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-table",{attrs:{title:"Contacts","row-key":"id","no-data-label":"You don't have any contacts yet","rows-per-page-label":"Contacts per page",data:t.contacts,columns:t.columns,pagination:t.pagination,loading:t.loading,"visible-columns":t.visibleColumns,"rows-per-page-options":t.rowsPerPageOptions},on:{"update:pagination":function(e){t.pagination=e},request:t.paginate},scopedSlots:t._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search for contacts"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("q-btn",{attrs:{color:"primary",icon:"fas fa-plus",round:"",flat:""},on:{click:function(e){t.showContactModal=!0}}},[n("q-tooltip",{attrs:{anchor:"top right",self:"bottom right",offset:[0,5]}},[t._v("Add a new contact")])],1)]},proxy:!0},{key:"body-cell-actions",fn:function(e){return[n("q-td",{attrs:{props:e}},[n("q-btn",{attrs:{icon:"fas fa-trash",color:"red",size:"sm",round:"",flat:"",loading:e.row.deleting},on:{click:function(n){return t.deleteContact(e.row)}}},[n("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[0,5]}},[t._v("Delete contact")])],1),n("q-btn",{attrs:{icon:"fas fa-pen",color:"secondary",size:"sm",round:"",flat:""},on:{click:function(n){return t.updateContact(e.row)}}},[n("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[0,5]}},[t._v("Update contact")])],1)],1)]}}])}),t.showContactModal?n("ContactModal",{attrs:{contact:t.updatingContact},on:{hide:t.onContactModelHide,added:t.onAdded,updated:t.onUpdated}}):t._e()],1)},i=[],s=n("967e"),c=n.n(s),l=(n("96cf"),n("fa84")),u=n.n(l),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{ref:"modal",attrs:{value:!0},on:{hide:t.onHide,show:t.onShow}},[n("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("Add a new contact")])]),n("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[n("div",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}}},[n("q-input",{attrs:{label:"Name",autofocus:"",error:t.form.hasError("name"),"error-message":t.form.getError("name")},on:{input:function(e){return t.form.deleteError("name")}},model:{value:t.form.data.name,callback:function(e){t.$set(t.form.data,"name",e)},expression:"form.data.name"}}),n("q-input",{attrs:{type:"number",label:"Phone",error:t.form.hasError("phone"),"error-message":t.form.getError("phone")},on:{input:function(e){return t.form.deleteError("phone")}},model:{value:t.form.data.phone,callback:function(e){t.$set(t.form.data,"phone",e)},expression:"form.data.phone"}}),n("q-select",{attrs:{label:"Country","emit-value":"","map-options":"",error:t.form.hasError("countryId"),"error-message":t.form.getError("countryId"),options:t.countryOptions},on:{input:function(e){return t.form.deleteError("countryId")},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.stopPropagation()}},model:{value:t.form.data.countryId,callback:function(e){t.$set(t.form.data,"countryId",e)},expression:"form.data.countryId"}}),n("q-input",{attrs:{label:"Street",error:t.form.hasError("street"),"error-message":t.form.getError("street")},on:{input:function(e){return t.form.deleteError("street")}},model:{value:t.form.data.street,callback:function(e){t.$set(t.form.data,"street",e)},expression:"form.data.street"}})],1)]),n("q-card-actions",{attrs:{align:"between"}},[n("q-btn",{attrs:{label:"Cancel",tabindex:"-1",flat:""},on:{click:t.cancel}}),n("q-btn",{attrs:{label:t.contact?"Update":"Add",color:"primary",flat:"",loading:t.form.$loading},on:{click:t.submit}})],1)],1)],1)},f=[],h=n("a284"),p=h["a"],g=n("2877"),m=n("eebe"),b=n.n(m),v=n("24e8"),y=n("f09f"),w=n("a370"),$=n("27f9"),k=n("ddd8"),C=n("4b7e"),x=n("9c40"),E=Object(g["a"])(p,d,f,!1,null,null,null),q=E.exports;b()(E,"components",{QDialog:v["a"],QCard:y["a"],QCardSection:w["a"],QInput:$["a"],QSelect:k["a"],QCardActions:C["a"],QBtn:x["a"]});var P={name:"ContactsTable",components:{ContactModal:q},data:function(){return{filter:"",showContactModal:!1,updatingContact:null,loading:!1,pagination:{page:1,rowsPerPage:10,rowsNumber:1,descending:!1,sortBy:"name"},rowsPerPageOptions:[3,5,10,15,20,30],columns:[{name:"name",label:"Name",align:"left",field:"name",required:!0,sortable:!0},{name:"phone",label:"Phone",align:"left",field:"phone",sortable:!0},{name:"street",label:"Street",align:"left",field:"street",sortable:!0},{name:"countryId",label:"Country",align:"left",field:"countryId"},{label:"",name:"actions",align:"right",required:!0}],contacts:[],visibleColumns:["name","countryId","phone","street"]}},watch:{filter:{handler:function(t){this.$log.debug("watched filter",t),this.paginate()}}},created:function(){this.paginate()},methods:{paginate:function(){var t=u()(c.a.mark((function t(){var e,n,a,o,r,i,s,l=arguments;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:{},n=e.pagination,this.loading=!0,n=n||this.pagination,this.$log.info("paginate contacts"),this.$log.debug("pagination",n),this.$log.debug("filter",this.filter),t.prev=6,t.next=9,this.$api.get("/contacts",{params:{q:this.filter,page:n.page,pageSize:n.rowsPerPage,sortProperty:n.sortBy,sortDirection:n.descending?"DESC":"ASC"}});case 9:a=t.sent,o=a.data,this.$log.debug("fetched contacts",o),r=o.contacts,i=o.meta,s=i.paging,this.contacts=r,this.pagination.page=s.page,this.pagination.rowsPerPage=s.pageSize,this.pagination.rowsNumber=s.total,this.pagination.sortBy=n.sortBy,this.pagination.descending=n.descending,t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](6),this.$log.error("couldnt fetch contacts",t.t0);case 25:this.loading=!1;case 26:case"end":return t.stop()}}),t,this,[[6,22]])})));function e(){return t.apply(this,arguments)}return e}(),deleteContact:function(){var t=u()(c.a.mark((function t(e){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$log.debug("delete contact",e),t.prev=1,this.$set(e,"deleting",!0),t.next=5,this.$api.delete("/contacts/".concat(e.id));case 5:this.$log.info("deleted contact"),this.paginate(),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),this.$log.error("couldnt delete contact",t.t0),this.paginate();case 13:case"end":return t.stop()}}),t,this,[[1,9]])})));function e(e){return t.apply(this,arguments)}return e}(),updateContact:function(){var t=u()(c.a.mark((function t(e){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$log.debug("update contact",e),this.updatingContact=e,this.showContactModal=!0;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onAdded:function(){this.paginate()},onUpdated:function(){this.paginate()},onContactModelHide:function(){this.showContactModal=!1,this.updatingContact=null}}},S=P,_=n("eaac"),I=n("0016"),Q=n("05c0"),O=n("db86"),M=Object(g["a"])(S,r,i,!1,null,null,null),A=M.exports;b()(M,"components",{QTable:_["a"],QInput:$["a"],QIcon:I["a"],QBtn:x["a"],QTooltip:Q["a"],QTd:O["a"]});var j={name:"ContactListPage",components:{ContactsTable:A}},B=j,N=n("9989"),T=Object(g["a"])(B,a,o,!1,null,null,null);e["default"]=T.exports;b()(T,"components",{QPage:N["a"]})},a284:function(t,e,n){"use strict";(function(t){var a=n("967e"),o=n.n(a),r=(n("96cf"),n("fa84")),i=n.n(r),s=(n("7f7f"),n("2236"));e["a"]={name:"ContactAddModal",data:function(){return{form:null,countries:[]}},props:{contact:{type:Object,default:null}},computed:{countryOptions:function(){return this.countries.map((function(t){var e=t.name,n=t.alpha2Code;return{label:e,value:n}}))}},created:function(){this.setForm(),this.getCountries()},methods:{setForm:function(){this.$log.info("contact modal setting form");var e=null;this.contact?(this.$log.debug("fill form from contact",this.contact),e=t.pick(this.contact,["id","name","phone","countryId","street"])):(this.$log.info("Use empty form"),e={name:"",phone:"",countryId:null,street:""}),this.$log.debug("initial form",e),this.form=new s["a"](e)},getCountries:function(){var t=i()(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("https://restcountries.eu/rest/v2/region/europe");case 3:e=t.sent,n=e.data,this.$log.info("fetched countried",n),this.countries=n,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.$log.error("error fetching countries",t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),hide:function(){this.$refs.modal.hide()},onHide:function(){this.$emit("hide")},onShow:function(){this.$emit("show")},cancel:function(){this.$log.info("cancel contact modal"),this.hide(),this.form.reset()},submit:function(){var t=i()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$log.info("submit form",this.form),!this.form.$loading){t.next=3;break}return t.abrupt("return");case 3:if(t.prev=3,this.form.startProcessing(),!this.contact){t.next=10;break}return t.next=8,this.updateContact();case 8:t.next=12;break;case 10:return t.next=12,this.addContact();case 12:this.hide(),this.form.reset(),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](3),this.$log.error("error submitting form",t.t0),this.form.failProcessing("contact",t.t0);case 20:case"end":return t.stop()}}),t,this,[[3,16]])})));function e(){return t.apply(this,arguments)}return e}(),addContact:function(){var t=i()(o.a.mark((function t(){var e;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$log.info("create contact"),t.next=3,this.$api.post("/contacts",{contact:this.form.data});case 3:e=t.sent,this.$log.debug("contact created",e),this.$emit("added");case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateContact:function(){var t=i()(o.a.mark((function t(){var e;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$log.info("update contact"),t.next=3,this.$api.patch("/contacts",{contacts:[this.form.data]});case 3:e=t.sent,this.$log.debug("contact updated",e),this.$emit("updated");case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}}).call(this,n("2ef0"))}}]);