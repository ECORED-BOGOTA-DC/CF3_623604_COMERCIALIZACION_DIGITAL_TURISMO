(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69444b4c"],{2267:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"img-infografica"},[t("div",{ref:"img-ref-"+e.mainId,staticClass:"img-infografica__img"},[e._t("imagen")],2),e.elements.length?t("div",{staticClass:"img-infografica__content"},[e._l(e.elements,(function(i,s){return t("div",{key:"img-infografica-btn-"+i.id,staticClass:"img-infografica__item",style:[{top:i.y},{left:i.x}],on:{mouseover:function(t){e.selected=i.id},mouseleave:function(t){e.selected=0}}},[t("div",{staticClass:"img-infografica__item__dot"}),i.hasOwnProperty("numero")?t("div",{staticClass:"img-infografica__item__numero"},[e._v(e._s(i.numero))]):e._e()])})),e._l(e.elements,(function(i){return t("div",{directives:[{name:"child",rawName:"v-child",value:i.elm,expression:"item.elm"}],key:"img-infografica-card-"+i.id,ref:"card-ref-"+i.id,refInFor:!0,staticClass:"img-infografica__card",class:{"img-infografica__card--selected":e.selected===i.id},style:e.getCardCords(i.id),on:{mouseover:function(t){e.selected=i.id},mouseleave:function(t){e.selected=0}}})})),e.firstElement&&e.showIndicator?t("div",{staticClass:"img-infografica__indicador",style:[{top:e.firstElement.y},{left:e.firstElement.x}]},[t("div",{staticClass:"indicador--hover"})]):e._e()],2):e._e(),t("div",{staticClass:"hidden-slot"},[e._t("default")],2)])},n=[],a=i("ab14"),r={name:"ImagenInfografica",mixins:[a["a"]],data:()=>({firstSelection:!1,showIndicator:!0}),computed:{firstElement(){return this.elements.length&&this.elements[0]}},watch:{selected(){this.showIndicator&&(this.showIndicator=!1)}},methods:{getCardCords(e){const t="card-ref-"+e;if(!(t in this.$refs))return[{top:0},{left:0}];const i=this.elements.find(t=>t.id===e),s=this.$refs["img-ref-"+this.mainId],n={w:s.clientWidth,h:s.clientHeight},a=this.$refs[t][0],r={x:parseInt(i.x,10),y:parseInt(i.y,10),w:a.clientWidth,h:a.clientHeight},d=r.y/100*n.h,o=r.x/100*n.w,c=[];return d+r.h>n.h?c.push({bottom:0}):c.push({top:i.y}),o+r.w>n.w?c.push({right:0}):c.push({left:i.x}),c}}},d=r,o=i("2877"),c=Object(o["a"])(d,s,n,!1,null,null,null);t["default"]=c.exports},ab14:function(e,t,i){"use strict";t["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);if(t<0)return{};const i={};return 0===t?i.next=e[t+1]:(t+1===e.length||(i.next=e[t+1]),i.back=e[t-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((e,t)=>{const i=e.data&&e.data.attrs?e.data.attrs:[];return{id:this.mainId+t+1,elm:e.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(e=>e.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}}}]);
//# sourceMappingURL=chunk-69444b4c.d6a81a3f.js.map