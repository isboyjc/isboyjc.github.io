webpackJsonp([8],{ewVl:function(t,e){},ouKB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"AcrossHistogram-cantainer"},[e("div",{ref:"echarts",style:{width:"100%",height:"100%"}})])},staticRenderFns:[]};var i=a("VU/8")({props:["dataAcrossHistogram"],data:function(){return{}},mounted:function(){this.drawPie()},methods:{drawPie:function(){this.$echarts.init(this.$refs.echarts).setOption({title:{text:this.dataAcrossHistogram.tit,padding:[20,0,0,20],textStyle:{color:"#fff",fontSize:16,fontWeight:"normal"}},tooltip:{trigger:"item",formatter:"{c}%"},legend:{data:["课堂1","课堂2"],top:20,left:220,textStyle:{color:"#fff"}},xAxis:{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{type:"solid",color:"#4093F6",width:"1"}},axisLabel:{textStyle:{color:"#fff"}}},yAxis:{type:"category",splitLine:{show:!1},axisLine:{lineStyle:{type:"solid",color:"#4093F6",width:"1"}},axisLabel:{textStyle:{color:"#fff"}}},series:[{name:"课堂1",type:"bar",data:this.dataAcrossHistogram.data[0],barWidth:16,itemStyle:{emphasis:{barBorderRadius:8},normal:{barBorderRadius:8,color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(234, 63, 164, 0)"},{offset:1,color:"rgba(234, 63, 164, 1)"}])}}},{name:"课堂2",type:"bar",data:this.dataAcrossHistogram.data[1],barWidth:16,itemStyle:{emphasis:{barBorderRadius:8},normal:{barBorderRadius:8,color:new this.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(40, 177, 255, 0)"},{offset:1,color:"rgba(40, 177, 255, 1)"}])}}}]})}}},r,!1,function(t){a("ewVl")},"data-v-723c4c91",null);e.default=i.exports}});
//# sourceMappingURL=8.dc03c77068c891ce026e.js.map