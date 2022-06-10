<template>
  <div
    :title="info.inspire"
    style="display:flex;background-color:rgba(0,0,0,0);width:90vw;height:2.5em;"
  >
    <!-- 图标 -->
    <svg
      v-if="!finish"
      @click="convertFinish(info)"
      class="icon svg-icon"
      style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
      aria-hidden="true"
    >
      <use :xlink:href="info.iconName" />
    </svg>
    <svg
      v-else
      @click="convertFinish(info)"
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
      <div v-show="!finishTarget">
        <p style="font-size:15px;font-weight:520;color:#000000">{{resisitDays}}天</p>
        <p style="font-size:10px">共坚持</p>
      </div>
      <div v-show="finishTarget">
        <p style="font-size:10px">共坚持{{resisitDays}}天</p>
        <p style="font-size:15px;font-weight:520;color:#000000">已完成目标</p>
      </div>
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
  mounted: function () {
    this.checkFinishTarget();

  },
  methods: {

  },
  props: ['info'],
  // { iconName: "#icon-youxi", title: "Play", finish: true,type:"onceADay|quantityADay",dayTargetCount:1,
  // countUnit:"次",dayCircle:"永远|X天",title:"每天进步一点点",inspire:"",dayLasts:'',startDay:''},
  data: function () {
    return {
      finishTarget: false,
      //   iconName: "#icon-yishu",
      // title: "你好"
    }
  }, methods: {
    // 翻转打卡完成状态
    convertFinish(info) {
      var idx = info.idx;
      var date = info.dateInfo;
      var param = { idx, date };
      this.$store.commit('convertFinish', param)
      this.checkFinishTarget();
    },
    // 查看目标是否已完成
    checkFinishTarget() {
      console.log("called");
      var item = this.$store.state.dingItems[this.info.idx];
      if (item.dayLasts == "永远") {
        this.finishTarget = false;
      } else if (item.finishDays.length < item.dayLasts) {
        this.finishTarget = false;
      } else {
        this.finishTarget = true;
      }
    }
  }, computed: {
    // 计算目标是否已完成
    finish() {
      var item = this.$store.state.dingItems[this.info.idx];
      var find = false;

      // 遍历完成列表，确认是否完成当天打卡项
      for (var i = 0; i < item.finishDays.length; i++) {
        if (item.finishDays[i].getTime() == this.info.dateInfo.getTime()) {
          find = true;
          break;
        }
      }
      return find;
    },
    // 获取打卡项完成天数
    resisitDays() {
      var item = this.$store.state.dingItems[this.info.idx];

      return item.finishDays.length;
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
