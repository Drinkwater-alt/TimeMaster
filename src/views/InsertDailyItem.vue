<template>
  <div>
    <div class="titlebar">
      <span>新习惯</span>
    </div>

    <div style="display:flex;flex-direction:column">
      <div>
        <p>习惯名称：</p>
        <input v-model="name" />
      </div>

      <div style="margin-top:0.8em;">
        <p>图标</p>
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
          </div>
        </div>
      </div>

      <div style="margin-top:0.5em">
        <div style="display:flex;flex-direction:row">
          <p>鼓励语</p>
          <button @click="refreshSpireWords()">刷新</button>
        </div>

        <input
          style="font-size:0.5em;padding:1em;width:35em;background-color:#eaeaea;border:none"
          v-model="inspire"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/icon_custom/iconfont.js";

import dailyItem from "../components/DailyItem.vue";

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
      inspireWords: [
        '来TimeMaster里简单check每一天',
        '每一天都变得更好',
        '始终保持激情',
        '更好的事会一起到来',
        '坚持就是胜利',
        '时间不等人',
        '生命由每个时刻构成',
        '你所愿得都终将实现',
        '认真对待一切'
      ],
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
      this.inspire = this.inspireWords[Math.floor(Math.random() * this.inspireWords.length)];
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
</style>