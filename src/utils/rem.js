let x = document.documentElement.clientWidth;
let y = document.documentElement.clientHeight;
let htmlDom = document.getElementsByTagName('html')[0];
//初始化rem
setRem()

//用于计算rem
function setRem() {
    htmlDom.style.fontSize = `${x / 60}px`;
}



//改变窗口大小时重新设置rem
window.onresize = function () {
    x = document.documentElement.clientWidth;
    y = document.documentElement.clientHeight;
    setRem();
}