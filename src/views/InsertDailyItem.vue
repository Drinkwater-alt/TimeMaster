<template>
  <div style="height:100vh">
    <div
      style="display:flex;flex-direction:column;margin-left:.5em;margin-right:.5em"
      v-if="!firstStepFinished"
    >
      <div style="display:flex;flex-direction:row;margin-top:1em">
        <Icon type="md-arrow-back" @click="back()" />
        <div class="titlebar" style="margin-left:2.5rem">
          <span>新习惯</span>
        </div>
      </div>

      <div class="circleRec" style="margin-top:1.75rem;">
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
        <div style="margin-top:1rem;position:flex;flex-direction:row">
          <svg
            class="largeIcon svg-icon"
            style="top:0;bottom:0;margin:auto;margin-right:0vw;"
            aria-hidden="true"
          >
            <use :xlink:href="currentIconName" />
          </svg>
        </div>

        <div style="display:flex;flex-directino:row;flex-wrap:wrap;margin-top:0.3em;">
          <div v-for="(icon,index) in icons">
            <svg
              @click="swapSelectIcon(index)"
              class="midIcon svg-icon"
              style="top:0;bottom:0;margin:auto;margin-right:0vw;"
              aria-hidden="true"
            >
              <use :xlink:href="icon.name" />
            </svg>
          </div>
        </div>
      </div>

      <div class="circleRec" style="margin-top:1.75rem">
        <div style="display:flex;flex-direction:row;width:88vw">
          <p style="color:#222;font-size:2.25rem;">鼓励语</p>
          <Icon
            type="md-refresh"
            size="20"
            color="blue"
            style=" margin-left: 70vw; "
            @click="refreshSpireWords()"
          />
        </div>

        <Input
          class="inputBox"
          icon="ios-close"
          size="large"
          style="margin-top:.5em;"
          v-model="inspire"
        />
      </div>
      <Button
        type="primary"
        size="large"
        style="position: fixed;bottom:3rem;width:95vw;"
        @click="firstStepFinish()"
      >
        <p style="font-size:2.25rem;">下一步</p>
      </Button>
    </div>

    <div style="display:flex;flex-direction:column;margin-left:.5em;margin-right:.5em" v-else>
      <div style="display:flex;flex-direction:row;margin-top:1em">
        <Icon type="md-arrow-back" @click="back()" />
        <div class="titlebar" style="margin-left:2.5rem">
          <span>新习惯</span>
        </div>
      </div>

      <div class="circleRec" style="margin-top:1.75rem;">
        <p style="color:#222;font-size:2.25rem">频率</p>
        <Tabs size="small" value="name1">
          <TabPane label="按天" name="name1">
            <div style="display:flex;flex-direction:row;margin-bottom:.5rem">
              <div v-for="(item,index) in days" @click="selectDay(index)">
                <div class="miniCircle" style="margin-right:.55em" v-if="item.select">
                  <p
                    style="color:#fff;line-height:2.25em;text-align:center;font-size:.9em;height:100%;width:100%"
                  >{{item.name}}</p>
                </div>
                <div class="miniCircle" style="margin-right:.55em;background-color:#efefef" v-else>
                  <p
                    style="color:#0f0f0f;line-height:2.25em;text-align:center;font-size:.9em;height:100%;width:100%"
                  >{{item.name}}</p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane label="按周" name="name2">
            <Alert type="warning" show-icon style="font-size:.5em">
              <p style="font-size:.75em">会员内容</p>
            </Alert>
          </TabPane>
          <TabPane label="按时间间隔" name="name3">
            <Alert type="warning" show-icon style="font-size:.5em">
              <p style="font-size:.75em">会员内容</p>
            </Alert>
          </TabPane>
        </Tabs>
      </div>

      <div class="circleRec" style="margin-top:1.75rem;">
        <p style="color:#222;font-size:2.25rem">目标</p>
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
    for (var i = 1; i <= 7; i++) {
      this.sevenDays.push(i);
    }

    for (var i = 1; i <= 30; i++) {
      this.thirtyDays.push(i);
    }

  },
  data: function () {
    return {
      name: '每天进步一点点',
      firstStepFinished: true,
      inspire: '来TimeMaster里简单check每一天',
      currentIconName: "#icon-meizhuang",
      days: [
        { name: '日', select: true },
        { name: '一', select: true },
        { name: '二', select: true },
        { name: '三', select: true },
        { name: '四', select: true },
        { name: '五', select: true },
        { name: '六', select: true }
      ],
      sevenDays: [],
      thirtyDays: [],
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
    }, back() {
      if (!this.firstStepFinished) {
        this.$router.back();
      } else {
        this.firstStepFinished = false;
      }
    }, firstStepFinish() {
      console.log("CHECK");
      this.firstStepFinished = true;
    }, selectDay(idx) {
      this.days[idx].select = !this.days[idx].select;
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
  font-size: 1em;
  font-weight: 920;
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

.miniCircle {
  background-color: rgb(56, 87, 245);
  border-radius: 50%;
  width: 2em;
  height: 2em;
}
</style>