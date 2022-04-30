!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VuetomUI=t(e.Vue)}(this,(function(e){"use strict";const t=e.defineComponent({name:"VtAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(e){return-1!==["light","dark"].indexOf(e)}}},emits:{close:null},setup(t,{emit:o}){const n=e.reactive({visible:!0});return{state:n,close:e=>{n.visible=!1,o("close",e)}}},computed:{typeClass(){return`vt-alert--${this.type}`},iconClass(){return{success:"vt-icon-success",warning:"vt-icon-warning",error:"vt-icon-error"}[this.type]||"vt-icon-info"},isBigIcon(){return this.description||this.$slots.default?"is-big":""},isBoldTitle(){return this.description||this.$slots.default?"is-bold":""}}}),o={class:"vt-alert__content"},n={key:1,class:"vt-alert__description"},l={key:2,class:"vt-alert__description"};t.render=function(t,i,s,a,r,c){return e.openBlock(),e.createBlock(e.Transition,{name:"vt-alert-fade"},{default:e.withCtx((()=>[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(["vt-alert",t.typeClass,t.center?"is-center":"","is-"+t.effect]),role:"alert"},[t.showIcon?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass([[t.iconClass,t.isBigIcon],"vt-alert__icon"])},null,2)):e.createCommentVNode("v-if",!0),e.createElementVNode("div",o,[t.title||t.$slots.title?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass([[t.isBoldTitle],"vt-alert__title"])},[e.renderSlot(t.$slots,"title",{},(()=>[e.createTextVNode(e.toDisplayString(t.title),1)]))],2)):e.createCommentVNode("v-if",!0),t.$slots.default&&!t.description?(e.openBlock(),e.createElementBlock("p",n,[e.renderSlot(t.$slots,"default")])):e.createCommentVNode("v-if",!0),t.description&&!t.$slots.default?(e.openBlock(),e.createElementBlock("p",l,e.toDisplayString(t.description),1)):e.createCommentVNode("v-if",!0),e.withDirectives(e.createElementVNode("i",{class:e.normalizeClass([{"is-customed":""!==t.closeText,"vt-icon-close":""===t.closeText},"vt-alert__closebtn"]),onClick:i[0]||(i[0]=e=>t.close())},e.toDisplayString(t.closeText),3),[[e.vShow,t.closable]])])],2),[[e.vShow,t.state.visible]])])),_:3})},t.__file="src/components/alert/src/alert.vue",t.install=function(e){e.component(t.name,t)};var i=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;const d={name:"VtButton",props:{type:{type:String,default:"default"},size:{type:String,default:"large"},icon:String,nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,shadow:Boolean,text:Boolean},emits:{click:null},setup:(t,o)=>((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&c(e,o,t[o]);if(s)for(var o of s(t))r.call(t,o)&&c(e,o,t[o]);return e})({},{vtButton:e.ref(null)}),mounted(){this.circle&&(this.vtButton.style.height=`${this.vtButton.offsetWidth}px`)},methods:{handleClick(e){this.$emit("click",e)}},computed:{_alFormItemSize(){return(this.alFormItem||{}).alFormItemSize},buttonSize(){return this.size||this._alFormItemSize||(window.VuetomUI.$ELEMENT||{}).size},buttonDisabled(){return this.disabled||(this.alForm||{}).disabled}}},u=["disabled","autofocus","type"],p={key:0,class:"vt-icon-loading"},m={key:2};d.render=function(t,o,n,l,i,s){return e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["vt-button",[t.type?"vt-button--"+t.type:"",t.buttonSize?"vt-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle,"is-shadows":t.shadow,"is-text":t.text}]]),ref:"vtButton",onClick:o[0]||(o[0]=(...e)=>t.handleClick&&t.handleClick(...e)),disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},[t.loading?(e.openBlock(),e.createElementBlock("i",p)):e.createCommentVNode("v-if",!0),t.icon&&!t.loading?(e.openBlock(),e.createElementBlock("i",{key:1,class:e.normalizeClass(["vuetom-icon ",t.icon])},null,2)):e.createCommentVNode("v-if",!0),t.$slots.default?(e.openBlock(),e.createElementBlock("span",m,[e.renderSlot(t.$slots,"default")])):e.createCommentVNode("v-if",!0)],10,u)},d.__file="src/components/button/src/button.vue",d.install=function(e){e.component(d.name,d)};var f=e.defineComponent({name:"VtCard",props:{header:{type:String,default:""},bodyStyle:{type:String,default:""},shadow:{type:String,default:""},bgcolor:{type:String,default:"#FFF"}}});const v={key:0,class:"vt-card__header"};f.render=function(t,o,n,l,i,s){return e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle({"background-color":t.bgcolor}),class:e.normalizeClass(["vt-card",t.shadow?"is-"+t.shadow+"-shadow":"is-always-shadow"])},[t.$slots.header||t.header?(e.openBlock(),e.createElementBlock("div",v,[e.renderSlot(t.$slots,"header",{},(()=>[e.createTextVNode(e.toDisplayString(t.header),1)]))])):e.createCommentVNode("v-if",!0),e.createElementVNode("div",{class:"vt-card__body",style:e.normalizeStyle(t.bodyStyle)},[e.renderSlot(t.$slots,"default")],4)],6)},f.__file="src/components/card/src/card.vue",f.install=function(e){e.component(f.name,f)};var y=e.defineComponent({name:"VtIcon",props:{name:String}});y.render=function(t,o,n,l,i,s){return e.openBlock(),e.createElementBlock("i",{class:e.normalizeClass("vuetom-icon vt-icon-"+t.name)},null,2)},y.__file="src/components/icon/src/icon.vue",y.install=function(e){e.component(y.name,y)};var g=e.defineComponent({name:"VtLink",props:{type:{type:String,default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:String,icon:String},setup:(e,{emit:t})=>({handleClick:o=>{e.disabled||e.href||t("click",o)}})});const b=["href"],h={key:1,class:"vt-link--inner"};g.render=function(t,o,n,l,i,s){return e.openBlock(),e.createElementBlock("a",e.mergeProps({class:["vt-link",t.type?`vt-link--${t.type}`:"",t.disabled&&"is-disabled",t.underline&&!t.disabled&&"is-underline"],href:t.disabled?null:t.href},t.$attrs,{onClick:o[0]||(o[0]=(...e)=>t.handleClick&&t.handleClick(...e))}),[t.icon?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(t.icon)},null,2)):e.createCommentVNode("v-if",!0),t.$slots.default?(e.openBlock(),e.createElementBlock("span",h,[e.renderSlot(t.$slots,"default")])):e.createCommentVNode("v-if",!0),t.$slots.icon?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[t.$slots.icon?e.renderSlot(t.$slots,"icon",{key:0}):e.createCommentVNode("v-if",!0)],2112)):e.createCommentVNode("v-if",!0)],16,b)},g.__file="src/components/link/src/link.vue",g.install=function(e){e.component(g.name,g)};var k=e.defineComponent({name:"VtRow",componentName:"VtRow",props:{tag:{type:String,default:"div"},gutter:Number,type:{type:String,default:""},justify:{type:String,default:"start"},align:{type:String,default:"top"}},setup(t,{slots:o}){const n=e.computed((()=>{const e={};return t.gutter&&(e.marginLeft=`-${t.gutter/2}px`,e.marginRight=e.marginLeft),e}));return e.provide("gutter",t.gutter),()=>e.h(t.tag,{class:["vt-row","start"!==t.justify?`is-justify-${t.justify}`:"","top"!==t.align?`is-align-${t.align}`:"",{"vt-row--flex":"flex"===t.type}],style:n},o)}});k.install=function(e){e.component(k.name,k)};var B=e.defineComponent({name:"VtCol",componentName:"VtCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object]},setup(t,{slots:o}){const n=e.computed((()=>e.inject("gutter",0))),l=[],i={paddingLeft:"",paddingRight:""};return n&&(i.paddingLeft=n.value/2+"px",i.paddingRight=i.paddingLeft),["span","offset","pull","push"].forEach((e=>{(t[e]||0===t[e])&&l.push("span"!==e?`vt-col-${e}-${t[e]}`:`vt-col-${t[e]}`)})),["xs","sm","md","lg","xl"].forEach((e=>{if("number"==typeof t[e])l.push(`vt-col-${e}-${t[e]}`);else if("object"==typeof t[e]){const o=t[e];Object.keys(o).forEach((t=>{l.push("span"!==t?`vt-col-${e}-${t}-${o[t]}`:`vt-col-${e}-${o[t]}`)}))}})),()=>e.h(t.tag,{class:["vt-col",l],style:i},o)}});B.install=function(e){e.component(B.name,B)};const C={class:"vt-div"};var S=e.defineComponent({setup(t){const o=e.ref(1);return(t,n)=>(e.openBlock(),e.createElementBlock("div",C,e.toDisplayString(o.value),1))}});S.__file="src/components/div/div.vue";const V=[t,d,f,y,g,k,B,S];return{name:"VuetomUI",version:"2.3.0",install:function(e,t={}){V.forEach((t=>{e.component(t.name,t)}))},VtAlert:t,VtButton:d,VtCard:f,VtIcon:y,VtLink:g,VtRow:k,VtCol:B,VtDiv:S}}));
