import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dingItems: [
            {
                iconName: "#icon-youxi", finish: true, type: "onceADay|quantityADay", dayTargetCount: 1,
                countUnit: "次", dayCircle: "永远|X天", title: "每天进步一点点", inspire: "在TimeMaster里简单check每一天",
                dayLasts: 1, startDay: "", activeDays: (1 | 2 | 4 | 8), days: 0, finishDays: [],
            }
        ],
        countDownInfo: {
            interval: "",
            now: 1500,
            set: 1500,
            start: true,
            progress: false,
            pause: false
        }
    },
    mutations: {
        insertIntoDingItem(state, item) {
            state.dingItems.push(item);
        },
        convertFinish(state, info) {
            // info = {idx,date}
            var item = state.dingItems[info.idx];
            var tarIdx = -1;

            for (var i = 0; i < item.finishDays.length; i++) {
                if (info.date.getTime() == item.finishDays[i].getTime()) {
                    tarIdx = i;
                    break;
                }
            }

            if (tarIdx != -1) {
                item.finishDays.splice(tarIdx, 1);
            } else {
                item.finishDays.push(info.date);
            }
        },
        setTime(state, set) {
            state.countDownInfo.set = set;
            state.countDownInfo.now = set;
        },
        countDown(state) {
            state.countDownInfo.now -= 1;
        },
        setCountDownInterval(state, interval) {
            state.countDownInfo.interval = interval;
        },
        switchStart(state,flag) {
            state.countDownInfo.start = flag
        },
        switchProgress(state,flag) {
            state.countDownInfo.progress = flag
        },
        switchPause(state,flag) {
            state.countDownInfo.pause = flag
        }

    },
    actions: {
    },
    modules: {
    }
})
