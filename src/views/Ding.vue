<template>
  <div>
    <div class="titlebar">
      <span>打卡</span>
    </div>
    <div class="datebar">
      <div
        class="date"
        v-for="(dayItem,index) in dayItems "
        @click="swapSelect(index,{year:dayItem.year,month:dayItem.month,day:dayItem.day})"
      >
        <span>{{dayItem.dayText}}</span>
        <div v-if="index == selected" class="circle">
          <span>{{dayItem.dayNum}}</span>
        </div>
        <div v-else>
          <span class="day">{{dayItem.dayNum}}</span>
        </div>
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
    var d = new Date();
    this.year = d.getFullYear(); //获取年 
    this.month = d.getMonth();//获取月  
    this.day = d.getDate(); //获取当日
    this.dayIdx = d.getDay();

    for (var i = 6; i >= 0; i--) {
      this.dayItems.push(this.getDayInfo(i));
    }

    this.items = this.getTaskItems(this.year, this.month, this.day);
  },
  data: function () {
    return {
      items: [
        { idx: 0, iconName: "#icon-youxi", title: "Play", finish: true, days: 0, },
        { idx: 1, iconName: "#icon-qingjie", title: "洗脸", finish: false, days: 1 },
      ],
      testItem: [
        { idx: 2, iconName: "#icon-dianpu", title: "4S店", finish: false, days: 0, },
        { idx: 2, iconName: "#icon-shipin1", title: "吃东西", finish: false, days: 0, },
        { idx: 2, iconName: "#icon-fangchan", title: "买房", finish: false, days: 0, },
        { idx: 2, iconName: "#icon-jipiao", title: "起飞", finish: false, days: 0, },
        { idx: 2, iconName: "#icon-lianxu", title: "分身", finish: false, days: 0, },
        { idx: 2, iconName: "#icon-diannao", title: "电脑", finish: false, days: 0, },
        { idx: 2, iconName: "#icon-jiaju", title: "沙发", finish: false, days: 0, },
      ],
      year: 1,
      month: 1,
      day: 1,
      dayIdx: 6,
      dayName: ['日', '一', '二', '三', '四', '五', '六'],
      days: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayItems: [],
      selected: 6
    }
  }, methods: {
    convertFinish(idx) {
      this.items[idx].finish = !this.items[idx].finish;
    },
    getDayInfo(idx) {
      // 获取比今天早idx天的日期数据
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

      var dayIdx = ((this.dayIdx - idx) + 7) % 7;
      console.log(idx + " " + dayIdx);
      info.dayNum = day;
      if (day == this.day) {
        info.dayNum = "今天";
      }
      info.dayText = this.dayName[dayIdx];
      info.year = year; info.month = month; info.day = day;

      return info;
    }, getTaskItems(year, month, day) {
      var items = [
        { idx: 0, iconName: "#icon-youxi", title: "Play", finish: true, days: 0, },
        { idx: 1, iconName: "#icon-qingjie", title: "洗脸", finish: false, days: 1 },
      ];
      items.push(this.testItem[day % 7]);

      return items;
    }, swapSelect(idx, dayInfo) {
      this.selected = idx;
      this.items = this.getTaskItems(dayInfo.year, dayInfo.month, dayInfo.day);
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