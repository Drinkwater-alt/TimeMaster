
export { //很关键
    getTaskItems,
    refreshSpireWords,
    items
}

function getTaskItems(year, month, day) {
    return this.$store.state.dingItems;
      items = [
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
      ];
      items.push(testItem[day % 7]);

      return items;
};

function refreshSpireWords() {
      return inspireWords[Math.floor(Math.random() * inspireWords.length)];
};


var items =  [
    {
        idx: 0,
        iconName: "#icon-youxi",
        title: "Play",
        finish: true,
        days: 0,
        inspire:'Hello'
    },
    {
        idx: 1,
        iconName: "#icon-qingjie",
        title: "洗脸",
        finish: false,
        days: 1,
    },
];
var testItem =  [
    {
        idx: 2,
        iconName: "#icon-dianpu",
        title: "4S店",
        finish: false,
        days: 0,
    },
    {
        idx: 2,
        iconName: "#icon-shipin1",
        title: "吃东西",
        finish: false,
        days: 0,
    },
    {
        idx: 2,
        iconName: "#icon-fangchan",
        title: "买房",
        finish: false,
        days: 0,
    },
    {
        idx: 2,
        iconName: "#icon-jipiao",
        title: "起飞",
        finish: false,
        days: 0,
    },
    {
        idx: 2,
        iconName: "#icon-lianxu",
        title: "分身",
        finish: false,
        days: 0,
    },
    {
        idx: 2,
        iconName: "#icon-diannao",
        title: "电脑",
        finish: false,
        days: 0,
    },
    {
        idx: 2,
        iconName: "#icon-jiaju",
        title: "沙发",
        finish: false,
        days: 0,
    },
];

var inspireWords = [
    '来TimeMaster里简单check每一天',
    '每一天都变得更好',
    '始终保持激情',
    '更好的事会一起到来',
    '坚持就是胜利',
    '时间不等人',
    '生命由每个时刻构成',
    '你所愿得都终将实现',
    '认真对待一切'
];


export default class DataBase {

    // 此处定义数据
    static plan=[
        {
            id:1,
            content: "整理",
            date: "2022-05-13",
        },
        {
            id:2,
            content: "数据分离",
            date: "2022-05-13",
        },
        {
            id:3,
            content: "功能实现",
            date: "2022-05-13",
        },
        {
            id:4,
            content: "α测试",
            date: "2022-05-13",
        },
        {
            id:5,
            content: "β测试",
            date: "2022-05-13",
        },
    ]
    static completed = [
        {
            id:6,
            content: "Ding总体布局",
            date: "2022-05-15",
        },
        {
            id:7,
            content: "Pomodoro总体布局",
            date: "2022-05-14",
        },
        {
            id:8,
            content: "TODOLIST总体布局",
            date: "2022-05-14",
        },
        {
            id:9,
            content: "TimeMaster总体布局",
            date: "2022-05-13",
        },
    ]
    

}


// 然后在页面文件里面 import DataBase from './data/data.js' 
// 写函数 getIcons 在模拟从数据库获取数据 让代码和数据分离