<template>
  <div>
    <div class="titlebar">
      <span>打卡</span>
    </div>
    <div class="datebar">
      <div class="date" v-for="dayItem in dayItems ">
        <span>{{dayItem.dayText}}</span>
        <span class="day">{{dayItem.dayNum}}</span>
      </div>
      <!-- <div class="date">
        <span>一</span>
        <span class="day">25</span>
      </div>
      <div class="date">
        <span>二</span>
        <span class="day">26</span>
      </div>
      <div class="date">
        <span>三</span>
        <span class="day">27</span>
      </div>
      <div class="date">
        <span>四</span>
        <span class="day">28</span>
      </div>
      <div class="date">
        <span>五</span>
        <span class="day">29</span>
      </div>
      <div class="date">
        <span>六</span>
        <span class="day">30</span>
      </div>
      <div class="date">
        <span>日</span>
        <div class="circle">
          <span>今天</span>
        </div>
      </div>-->
    </div>

    <div style="width:10vw;height:10vh;">
      <div v-for="item in items">
        <dailyItem :info="item"></dailyItem>
      </div>
    </div>
    <div class="cardsbar"></div>
  </div>
</template>

<script>
import "../assets/icon_custom/iconfont.js";

import dailyItem from "@/views/DailyItem.vue";

export default {
  components: {
    dailyItem
  },
  mounted: function () {
    for (var i = 6; i >= 0; i--) {
      this.dayItems.push(this.getDayInfo(i));
    }
    console.log(this.dayItems);
  },
  data: function () {
    return {
      items: [
        { idx: 0, iconName: "#icon-youxi", title: "Play", finish: true, days: 0, },
        { idx: 1, iconName: "#icon-qingjie", title: "洗脸", finish: false, days: 1 },
      ],
      year: 2022,
      month: 5,
      day: 6,
      days: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayItems: []
    }
  }, methods: {
    convertFinish(idx) {
      this.items[idx].finish = !this.items[idx].finish;
    },
    getDayText(year, month, day) {
      // 返回对应日期是星期几
      return "一";
    },
    getDayInfo(idx) {
      var info = {};
      var year = this.year; var month = this.month; var day = this.day;
      day -= idx;
      if (day <= 0) {
        month -= 1;
      }
      if (month <= 0) {
        year -= 1;
      }

      if (month <= 0) {
        month = 12 - month;
      }

      if (day <= 0) {
        day = this.days[month - 1] - day;
      }
      info.dayNum = day;
      info.dayText = this.getDayText(year, month, day);

      return info;
    }
  }
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