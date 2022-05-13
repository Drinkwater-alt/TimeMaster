<template>
  <div>
    <div class="titlebar">
      <span>新习惯</span>
    </div>

    <div style="display:flex;flex-direction:column;margin-left:.5em;margin-right:.5em">
      <div class="circleRec">
        <p style="color:#222;font-size:2.25rem">习惯名称</p>
        <Input
          class="inputBox"
          icon="ios-close"
          size="large"
          style="margin-top:.5em;"
          v-model="name"
        />
      </div>

      <div class="circleRec" style="margin-top:1.75rem;">
        <p style="color:#222;font-size:2.25rem">图标</p>
        <svg
          class="icon svg-icon"
          style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
          aria-hidden="true"
        >
          <use :xlink:href="currentIconName" />
        </svg>
        <div style="display:flex;flex-directino:row;margin-top:0.3em;">
          <div v-for="(icon,index) in icons">
            <svg
              @click="swapSelectIcon(index)"
              v-if="index < 5"
              class="icon svg-icon"
              style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
              aria-hidden="true"
            >
              <use :xlink:href="icon.name" />
            </svg>
            <svg
              class="miniIcon svg-icon"
              style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
              aria-hidden="true"
            >
              <use xlink:href="#icon-duigou" />
            </svg>
          </div>
        </div>
      </div>

      <div class="circleRec" style="margin-top:1.75rem">
        <div style="display:flex;flex-direction:row">
          <p style="color:#222;font-size:2.25rem">鼓励语</p>
        </div>
        <Icon
          type="refresh"
          size="50"
          color="black"
          style="width:5vw;"
          @click="refreshSpireWords()"
        />
        <Icon type="arrow-right-c"></Icon>
        <Input
          class="inputBox"
          icon="ios-close"
          size="large"
          style="margin-top:.5em;"
          v-model="inspire"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/icon_custom/iconfont.js";

import dailyItem from "../components/DailyItem.vue";
import { refreshSpireWords } from '../data/data.js'

export default {
  components: {
    dailyItem
  },
  mounted: function () {

  },
  data: function () {
    return {
      name: '每天进步一点点',
      inspire: '来TimeMaster里简单check每一天',
      currentIconName: "#icon-meizhuang",
      icons: [
        { name: '#icon-meizhuang' },
        { name: '#icon-jiadian' },
        { name: '#icon-shuma' },
        { name: '#icon-diannao' },
        { name: '#icon-jiaju' },
        { name: '#icon-yinliao' },
        { name: '#icon-fuzhuang' },
        { name: '#icon-xiezi' },
        { name: '#icon-ershouche' },
        { name: '#icon-jiayou' },
        { name: '#icon-huiyuan' },
        { name: '#icon-yishu' },
        { name: '#icon-bofang' },
        { name: '#icon-tupian' },
        { name: '#icon-xiangpian' },
        { name: '#icon-lianxu' },
        { name: '#icon-bianji' },
        { name: '#icon-shipin' },
        { name: '#icon-muying' },
        { name: '#icon-qingjie' },
        { name: '#icon-bangong' },
        { name: '#icon-xiangbao' },
        { name: '#icon-chuju' },
        { name: '#icon-meishi' },
        { name: '#icon-shipin1' },
        { name: '#icon-jiushui' },
        { name: '#icon-shengxian' },
        { name: '#icon-huwai' },
        { name: '#icon-fangchan' },
        { name: '#icon-jinrong' },
        { name: '#icon-xianhua' },
        { name: '#icon-lvhua' },
        { name: '#icon-dianpu' },
        { name: '#icon-pinpai' },
        { name: '#icon-wode' },
        { name: '#icon-kanjia' },
        { name: '#icon-jiazhuang' },
        { name: '#icon-chongwu' },
        { name: '#icon-rili' },
        { name: '#icon-yule' },
        { name: '#icon-yiliao' },
        { name: '#icon-jianshen' },
        { name: '#icon-jipiao' },
        { name: '#icon-baoxian' },
        { name: '#icon-anzhuang' },
        { name: '#icon-weixiu' },
        { name: '#icon-ershou' },
        { name: '#icon-dianying' },
        { name: '#icon-jiudian' },
        { name: '#icon-kefu' },
        { name: '#icon-youxi' },
        { name: '#icon-gouwuche' },
      ]

    }
  }, methods: {
    refreshSpireWords() {
      this.inspire = refreshSpireWords();
    }, swapSelectIcon(idx) {
      this.currentIconName = this.icons[idx].name;
    }
  },

};
</script>

<style scoped>
@import "../assets/icon_custom/iconfont.css";
.titlebar {
  height: 5%;
}
.titlebar span {
  font-size: 0.8em;
  font-weight: 900;
  color: black;
}
.datebar {
  height: 10%;
  padding-top: 0.5em;
  display: flex;
  justify-content: space-between;
}
.datebar span {
  font-size: 0.6em;
  display: block;
  text-align: center;
}
.date {
  width: 8%;
  position: relative;
}
.day {
  color: black;
  margin-top: 0.6em;
}
.circle {
  background-color: rgb(56, 87, 245);
  width: 2em;
  height: 1.6em;
  border-radius: 45%;
  text-align: center;
  line-height: 1.6em;
  position: absolute;
  left: -0.23em;
}
.circle span {
  color: white;
  font-size: 0.6em;
}
.cardsbar {
  height: 85%;
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
.inputBox {
  /* border-radius: 0.8rem; */
  font-size: 2.25rem;
  width: 88vw;
  /* padding: 0.66em; */
  /* padding-left: 0.9em; */
  background-color: #ededed;
  border: none;
  outline: medium;
}
</style>