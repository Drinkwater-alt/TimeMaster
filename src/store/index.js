import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dingItems: [
      {
        iconName: "#icon-youxi", finish: true, type: "onceADay|quantityADay", dayTargetCount: 1,
        countUnit: "次", dayCircle: "永远|X天", title: "每天进步一点点", inspire: "在TimeMaster里简单check每一天",
        dayLasts:1,startDay:"",activeDays:(1|2|4|8),days:0,finishDays:[],
      }
    ],
  },
  mutations: {
    insertIntoDingItem(state,item) {
      state.dingItems.push(item);
    }, convertFinish(state, info) {
      // info = {idx,date}
      var item = state.dingItems[info.idx];
      var tarIdx = -1;

      for (var i = 0; i < item.finishDays.length; i++){
        if(info.date.getTime() == item.finishDays[i].getTime()){
          tarIdx = i;
          break;
        }
      }

      if (tarIdx != -1) {
        item.finishDays.splice(tarIdx, 1);
      } else {
        item.finishDays.push(info.date);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
