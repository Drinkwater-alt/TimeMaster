
export { //很关键
    getTaskItems,
    refreshSpireWords,
    items
}

function getTaskItems(year, month, day) {
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
// export default class DataBase{ //很关键
  
// }

// export default class DataBase {

//     // 此处定义数据
//     icons = [];
//     plan = [
//         {
//             date: '123123',
//             title: '下衣服'
//         },
//         {
//             date: '123123',
//             title: 'xxx'
//         }
//     ];
    

    

// }


// 然后在页面文件里面 import DataBase from './data/data.js' 
// 写函数 getIcons 在模拟从数据库获取数据 让代码和数据分离