"use strict";(self["webpackChunkvuex_test"]=self["webpackChunkvuex_test"]||[]).push([[562],{7784:function(t,e,o){o.r(e),o.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("글을 작성하는 공간입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],attrs:{id:"",cols:"30",rows:"10"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}}),t._v(" "),o("br"),o("button",{on:{click:t.addmemoMutation}},[t._v("완료")])])},n=[],m={data:function(){return{title:"",memo:""}},methods:{addmemo:function(){var t=this.$store.state.board.length+1;this.$store.state.board.push({id:t,title:this.title,memo:this.memo})},addmemoMutation:function(){this.$store.commit("addmemo",this.title,this.memo),this.$router.push("/")}}},s=m,a=o(1001),r=(0,a.Z)(s,i,n,!1,null,null,null),u=r.exports}}]);
//# sourceMappingURL=write-legacy.da6d69d5.js.map