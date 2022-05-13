<template>
  <div style="display:flex;background-color:rgba(0,0,0,0);width:90vw;height:2.5em;">
    <!-- 图标 -->
    <svg
      v-if="!info.finish"
      @click="convertFinish(info.idx)"
      class="icon svg-icon"
      style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
      aria-hidden="true"
    >
      <use :xlink:href="info.iconName" />
    </svg>
    <svg
      v-else
      @click="convertFinish(info.idx)"
      class="miniIcon svg-icon"
      style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
      aria-hidden="true"
    >
      <use xlink:href="#icon-duigou" />
    </svg>

    <!-- 任务内容-->
    <p
      style="top:0;bottom:0;margin:auto;margin-left:2.7vw;font-size:15px;color:#000000"
    >{{info.title}}</p>

    <!-- 右侧信息 -->
    <div style="display:block;margin-top:1vh;bottom:0;margin-right:4vw;">
      <p style="font-size:15px;font-weight:520;color:#000000">{{info.days}}天</p>
      <p style="font-size:10px">共坚持</p>
    </div>
  </div>

  <!-- <div class="layout" style="width:95vw;">
      <svg class="icon svg-icon" style="margin-left:2.5vw;margin-top:0.45em;" aria-hidden="true">
        <use :xlink:href="iconName" />
      </svg>
      <p slot="extra">{{title}}</p>
      
  </div>-->
</template>

<script>
import { items } from '../data/data.js';

export default {
  methods: {

  },
  props: ['info'],// { iconName: "#icon-youxi", title: "Play", finish: true, },
  data: function () {
    return {
      //   iconName: "#icon-yishu",
      // title: "你好"
    }
  }, methods: {
    convertFinish(idx) {
      items[idx].finish = !items[idx].finish;
    }
  }
};

</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.circleRec {
  border-radius: 1rem;
  background-color: #fdfdfd;
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: 0.5em;
  padding-bottom: 1em;
  box-shadow: 1.5px 1.5px 5px rgba(0, 0, 0, 0.2);
}
</style>