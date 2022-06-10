<template>
  <div style="height:100vh">
    <!-- 插入页面一（命名，选取图片） -->
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

    <!-- 插入页面二 -->
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
                    style="color:#fff;line-height:2.25em;text-align:center;font-size:2.4rem;font-weight:400 ;height:100%;width:100%"
                  >{{item.name}}</p>
                </div>
                <div class="miniCircle" style="margin-right:.55em;background-color:#efefef" v-else>
                  <p
                    style="color:#0f0f0f;line-height:2.25em;text-align:center;font-size:2.4rem;font-weight:400;height:100%;width:100%"
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

      <div class="circleRec" style="margin-top:1.75rem;padding-bottom:.5em">
        <div
          style="width:90wh;display:flex;flex-direction:row;justify-content: space-between
"
          @click="showTargetBoard = true"
        >
          <p style="color:#222;font-size:2.25rem">目标</p>
          <div style="display:flex;display-direction:row;">
            <p style="color:#aaaaaa;font-size:2rem;">{{targetText}}</p>
            <Icon type="ios-arrow-forward" color="#bbbbbb" style="margin-left:.5rem" />
          </div>
        </div>
        <div
          style="width:90wh;display:flex;flex-direction:row;justify-content: space-between;padding-top:3rem;
"
          @click="showSelectDayBoard = true"
        >
          <p style="color:#222;font-size:2.25rem">坚持天数</p>
          <div style="display:flex;display-direction:row;">
            <p style="color:#aaaaaa;font-size:2rem;">{{dayCircle}}</p>
            <Icon type="ios-arrow-forward" color="#bbbbbb" style="margin-left:.5rem" />
          </div>
        </div>
      </div>
      <Button
        type="primary"
        size="large"
        style="position: fixed;bottom:3rem;width:95vw;"
        @click="insertItem()"
      >
        <p style="font-size:2.25rem;">保存</p>
      </Button>
    </div>

    <!-- 选择目标面板 -->
    <Modal
      v-show="!hideTargetBoard"
      v-model="showTargetBoard"
      title="目标"
      @on-ok="confirmSetTarget()"
      @on-cancel="showTargetBoard = false"
    >
      <RadioGroup v-model="targetBoard.type" vertical>
        <Radio label="onceADay">
          <span style="margin-left:1.5rem;font-size:2.2rem;color:#222">当天完成打卡</span>
        </Radio>
        <Radio label="quantityADay">
          <span style="margin-left:1.5rem;font-size:2.2rem;color:#222">当天完成一定量</span>
        </Radio>

        <!-- 选择当天完成一定量时，设定打卡数量的面板 -->
        <div
          v-show="targetBoard.type == 'quantityADay'"
          style="display:flex;flex-display:row;padding-top:2rem;width:90vw;"
        >
          <span style="margin-left:1.5rem;font-size:2.2rem;color:#222;margin-top:.5rem">每天</span>
          <!-- 次数输入框 -->
          <Input v-model="targetBoard.dayTargetCount" style="width:20%;margin-left:8%;" />
          <!-- 单位的选择框 -->
          <i-select
            v-model="targetBoard.countUnit"
            style="width:40%;margin-left:5%"
            @on-change="changeUnit"
          >
            <Option v-for="item in targetBoard.countUnits" :value="item" :key="item">{{ item }}</Option>
          </i-select>
        </div>
      </RadioGroup>
    </Modal>

    <!-- 自定义单位时出现的输入面板 -->
    <Modal
      v-model="showCustomUnit"
      title="自定义单位"
      @on-ok="confirmSetCustomUnit"
      @on-cancel="cancelSetCustomUnit"
    >
      <Input
        placeholder="请输入单位"
        v-model="targetBoard.customUnitInput"
        style="width:50%;margin-left:8%;"
      />
    </Modal>

    <!-- 选择坚持天数面板 -->
    <Modal
      v-model="showSelectDayBoard"
      title="坚持天数"
      @on-cancel="cancelSelectDay()"
      @on-ok="confirmSelectDay()"
    >
      <div style="display:flex;flex-direction:column">
        <RadioGroup v-model="selectDayBoard.dayCircle" vertical @on-change="changeSelectDay">
          <Radio v-for="item in selectDayBoard.daySelects" :label="item" :key="item">
            <span style="margin-left:1.5rem;font-size:2.2rem;color:#222">{{item}}</span>
          </Radio>
        </RadioGroup>

        <!-- 自定义天数 -->
        <InputNumber
          style="margin-top:1.5rem"
          v-show="showCustomDay"
          controls-outside
          :max="365"
          :min="1"
          v-model="selectDayBoard.customDay"
        ></InputNumber>
      </div>
    </Modal>
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
    // 为日期选择栏赋值
    for (var i = 1; i <= 7; i++) {
      this.sevenDays.push(i);
    }

    for (var i = 1; i <= 30; i++) {
      this.thirtyDays.push(i);
    }

  },
  data: function () {
    return {
      // 使用前7个bit代表item应出现的日期,第x位置1代表其应该在七天中的第x天(从周日开始)显示,置0代表其不在第x天显示
      activeDays: 127,
      // 使用v-if与样式绑定, 设true时弹出设置目标的面板
      showTargetBoard: false,
      // 使用v-if与样式绑定, 设true时弹出选择打卡天数的面板，用户可以从预设天数中选择一项
      showSelectDayBoard: false,
      // 与样式绑定，设true时弹出自定义打卡单位（默认为天）的面板
      showCustomUnit: false,
      // 设true时隐藏目标设定面板
      hideTargetBoard: false,
      // 设true时弹出自定义天数的面板，用户可以在合法天数任意设置
      showCustomDay: false,
      // 打卡目标日期
      dayCircle: '永远',
      // 目标类型，可以是当天完成打卡或是当天完成一定量
      targetText: '当天完成打卡',
      // 目标设定面板参数
      targetBoard: {
        //选中的类型
        type: 'onceADay',
        // 当天完成打卡还是当天完成一定量
        onceADay: true,
        quantityADay: false,
        // 当天完成一定量的话，每天完成的次数和单位
        dayTargetCount: 1, // 目标数量
        // 目标单位
        countUnit: '次',
        // 可选单位
        countUnits: ['次', '杯', '毫升', '分钟', '小时', '公里', '页', '自定义'],
        // 用户自定义的单位
        customUnitInput: ''
      },
      // 天数选择面板参数
      selectDayBoard: {
        // 打卡目标日期
        dayCircle: '永远',
        // 可选天数列表
        daySelects: ['永远', '7天', '21天', '30天', '100天', '365天', '自定义'],
        // 用户自定义的天数
        customDay: 1
      },
      // 打卡项名称
      name: '每天进步一点点',
      // 设true时显示第二个界面
      firstStepFinished: false,
      // 激励语
      inspire: '来TimeMaster里简单check每一天',
      // 选中的图标
      currentIconName: "#icon-meizhuang",
      // 影响activatedDays，选中后对应图标置蓝，否则置灰
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
      // 图标列表
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
    // 刷新激励语
    refreshSpireWords() {
      this.inspire = refreshSpireWords();
    },
    // 切换选择的图标
    swapSelectIcon(idx) {
      this.currentIconName = this.icons[idx].name;
    },
    // 跳到上一个页面
    back() {
      if (!this.firstStepFinished) {
        this.$router.back();
      } else {
        this.firstStepFinished = false;
      }
    },
    // 进行插入的下一步
    firstStepFinish() {
      console.log("CHECK");
      this.firstStepFinished = true;
    },
    // 切换选中的日期
    selectDay(idx) {
      this.days[idx].select = !this.days[idx].select;
      if (this.days[idx].select) {
        var temp = this.activeDays;
        this.activeDays = (temp | (1 << idx));
      } else {
        this.activeDays &= ~(1 << idx);
      }
    },
    // 改变选中的单位，如果选中的单位为自定义，呼出自定义单位面板
    changeUnit(val) {
      if (val == '自定义') {
        this.showCustomUnit = true;
        this.hideTargetBoard = true;
        this.targetBoard.customUnitInput = '';
      }
    },
    // 重置自定义单位
    cancelSetCustomUnit() {
      this.showCustomUnit = false;
      this.hideTargetBoard = false;
    }, confirmSetCustomUnit() {
      // 获取自定义单位的输入

      if (this.targetBoard.customUnitInput == '' || this.targetBoard.customUnitInput == '自定义') {
        this.targetBoard.customUnitInput = '烫烫烫';
      }

      var customUnitInput = this.targetBoard.customUnitInput;
      // 插入自定义项
      if (this.targetBoard.countUnits[this.targetBoard.countUnits.length - 1] != '自定义') {
        this.targetBoard.countUnits[this.targetBoard.countUnits.length - 1] = customUnitInput;
      } else {
        this.targetBoard.countUnits.push(customUnitInput);
      }
      // 绑定选中项
      this.targetBoard.countUnit = customUnitInput;
      //关闭窗口
      this.showCustomUnit = false;
      this.hideTargetBoard = false;
    },
    // 完成目标的设定，更新相关参数
    confirmSetTarget() {
      console.log(this.targetBoard.countUnit);

      if (this.targetBoard.type == 'onceADay') {
        this.targetText = '当天完成打卡';
      } else {
        this.targetText = this.targetBoard.dayTargetCount + this.targetBoard.countUnit + "/天";
      }

      // 如果countUnits中留存有自定义项且当前未选中该自定义项，将其删除
      if (this.targetBoard.countUnits[this.targetBoard.countUnits.length - 1] != '自定义') {
        if (this.targetBoard.countUnit != this.targetBoard.countUnits[this.targetBoard.countUnits.length - 1]) {
          this.targetBoard.countUnits.pop();
        }
      }

      this.showTargetBoard = false;
    },
    // 更改选中的天数，如果选中项为自定义，呼出自定义日期面板
    changeSelectDay(val) {
      if (val == '自定义') {
        this.showCustomDay = true;
        this.selectDayBoard.customDay = 1;
      }
    },
    // 关闭选中天数面板
    cancelSelectDay() {
      if (this.selectDayBoard.dayCircle != '自定义') {
        this.showCustomDay = false;
      }
      // reset custom Day
      this.selectDayBoard.customDay = 1;
    },
    // 确认选中天数，更新参数
    confirmSelectDay() {
      if (this.selectDayBoard.dayCircle == '自定义') {
        this.dayCircle = this.selectDayBoard.customDay + "天";
      } else {
        this.showCustomDay = false;
        this.dayCircle = this.selectDayBoard.dayCircle;
      }

      this.showSelectDayBoard = false;
    },
    // 根据设定的参数将item放入store的state中
    insertItem() {
      var item = {};
      item.iconName = this.currentIconName;
      item.title = this.name;
      item.finish = false;
      item.type = this.targetBoard.type;
      item.dayTargetCount = this.targetBoard.dayTargetCount;
      item.countUnit = this.targetBoard.countUnit;
      item.dayCircle = this.selectDayBoard.dayCircle;
      item.inspire = this.inspire;
      item.days = 0;
      item.finishDays = [];

      item.dayLasts = item.dayCircle;
      if (item.dayCircle != "永远") {
        var s = item.dayCircle; var idx = 0; var num = 0;
        while (idx < s.length && s[idx] >= '0' && s[idx] <= '9') {
          num = num * 10 + (s[idx] - '0');
          idx += 1;
        }
        item.dayLasts = num;
      }

      item.startDay = new Date();
      item.activeDays = this.activeDays;

      // console.log(item);
      this.$store.commit('insertIntoDingItem', item);
      this.$router.push('/ding');
      // { iconName: "#icon-youxi", title: "Play", finish: true,type:"onceADay|quantityADay",dayTargetCount:1,
      // countUnit:"次",dayCircle:"永远|X天",title:"每天进步一点点",inspire:"",dayLasts:'',startDay:'',activeDays:(1|2|4|8)},
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
  width: 5.5rem;
  height: 5.5rem;
}
</style>

