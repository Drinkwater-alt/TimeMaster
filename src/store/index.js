import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dingItems: [
      {
        iconName: "#icon-youxi", finish: true, type: "onceADay|quantityADay", dayTargetCount: 1,
        countUnit: "次", dayCircle: "永远|X天", title: "每天进步一点点", inspire: "在TimeMaster里简单check每一天",
        dayLasts:1,startDay:"",activeDays:(1|2|4|8),
      }
    ],
  },
  mutations: {
    insertIntoDingItem(item) {
      dingItems.push(item);
    },
    getDingItems(year,month,day) {
      var d = new Date(year, month, day);
      var items;
      dingItems.forEach(item => {
        if (item.activeDays & (1 << d.getDay())){
          items.push(item);
        }
      });
      return items;
    }
  },
  actions: {
  },
  modules: {
  }
})
