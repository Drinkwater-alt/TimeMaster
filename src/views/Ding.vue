
<style scoped>
@import "../assets/icon_custom/iconfont.css";

.zero {
  opacity: 0;
  transform: translateX(-100%);
}
.one {
  opacity: 1;
  transform: translateX(0);
}
.active {
  transition: all 0.5s ease;
  position: absolute;
}

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
  /* height: 82%; */
  margin-top: 0.5em;
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); */
  box-shadow: 1.5px 1.5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  background-color: #ffffff;
}
.add {
  position: absolute;
  right: 0.2em;
  bottom: 0.5em;
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
<template>
  <div>
    <div class="titlebar">
      <span>打卡</span>
    </div>
    <div class="datebar">
      <div
        class="date"
        v-for="(dayItem, index) in dayItems"
        @click="
                    swapSelect(index, {
                        year: dayItem.year,
                        month: dayItem.month,
                        day: dayItem.day,
                    })
                "
      >
        <span>{{ dayItem.dayText }}</span>
        <div v-if="index == selected" class="circle">
          <span>{{ dayItem.dayNum }}</span>
        </div>
        <div v-else>
          <span class="day">{{ dayItem.dayNum }}</span>
        </div>
      </div>
    </div>

    <Cards class="cardsbar">
      <transition
        name="ding"
        enter-class="zero"
        enter-active-class="active"
        enter-to-class="one"
        leave-from-class="one"
        leave-active-class="active"
        leave-to-class="zero"
      >
        <!-- <div v-if="show">ni shi tuo shi</div> -->
        <div style="width: 10vw; height: 10vh" v-if="show">
          <div v-for="(item, index) in items" :key="index">
            <dailyItem :info="item"></dailyItem>
          </div>
        </div>
      </transition>
    </Cards>

    <div @click="toInsertDailyItem()">
      <add-button class="add"></add-button>
    </div>
  </div>
</template>

<script>
import "../assets/icon_custom/iconfont.js";

import dailyItem from "../components/DailyItem.vue";
import { getTaskItems } from "../data/data.js";
import AddButton from '../components/AddButton'

export default {
  components: {
    dailyItem, AddButton
  },
  mounted: function () {
    var d = new Date();
    this.year = d.getFullYear(); //获取年
    this.month = d.getMonth(); //获取月
    this.day = d.getDate(); //获取当日
    this.dayIdx = d.getDay();

    for (var i = 6; i >= 0; i--) {
      this.dayItems.push(this.getDayInfo(i));
    }

    this.items = getTaskItems(this.year, this.month, this.day);
  },
  data: function () {
    return {
      show: true,
      items: [
        {
          idx: 0,
          iconName: "#icon-youxi",
          title: "Play",
          finish: true,
          days: 0,
        },
        {
          idx: 1,
          iconName: "#icon-qingjie",
          title: "洗脸",
          finish: false,
          days: 1,
        },
      ],
      year: 1,
      month: 1,
      day: 1,
      dayIdx: 6,
      dayName: ["日", "一", "二", "三", "四", "五", "六"],
      days: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      dayItems: [],
      selected: 6,
    };
  },
  methods: {
    convertFinish(idx) {
      this.items[idx].finish = !this.items[idx].finish;
    },
    getDayInfo(idx) {
      var info = {};
      var year = this.year;
      var month = this.month;
      var day = this.day;
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

      var dayIdx = (this.dayIdx - idx + 7) % 7;
      console.log(idx + " " + dayIdx);
      info.dayNum = day;
      if (day == this.day) {
        info.dayNum = "今天";
      }
      info.dayText = this.dayName[dayIdx];
      info.year = year;
      info.month = month;
      info.day = day;

      return info;
    },
    swapSelect(idx, dayInfo) {
      this.show = false;
      console.log(this.show);
      this.selected = idx;
      this.items = getTaskItems(dayInfo.year, dayInfo.month, dayInfo.day);
      setTimeout(() => {
        this.show = true;
        console.log(this.show);
      }, 500);
    },
    toInsertDailyItem() {
      console.log("CHECK")
      this.$router.push('/InsertDailyItem');
    }
  },
};
</script>
