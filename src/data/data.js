export default class  DataBase {

    // 此处定义数据
    icons = [];
    plan = [
        {
            date: '123123',
            title:'下衣服'
        },
        {
            date: '123123',
            title:'xxx'
        }
    ]

}

// 然后在页面文件里面 import DataBase from './data/data.js' 
// 写函数 getIcons 在模拟从数据库获取数据 让代码和数据分离