let C = {};

C.getOffset = function(ele) {
    let mouse = {x:0,y:0}
    ele.addEventListener('mousemove',(e) => {
        let {x,y} = C.eventWrapper(e);
        mouse.x = x;
        mouse.y = y;
    });
    return mouse;
}
//坐标系转换
C.eventWrapper = function(ev) {
    let {pageX,pageY,target} = ev;
    let {left,top} = target.getBoundingClientRect();
    return {x:pageX-left,y:pageY-top}
}
//用度转弧度
C.toRed = function(angle) {
    return angle * Math.PI / 180;
}
//孤度转角度
C.toAngle = function(red) {
    return red * 180 / Math.PI
}
//生成随机数
C.rp = function(arr,int) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let num = Math.random() * (max - min) + min;
    return int ? Math.round(num):num
}
//生成随机颜色
C.createColor = function() {
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    let c4 = Math.random();
    return `rgba(${c1},${c2},${c3},${c4})`
}
//检测
C.rectDuang = function(rect1,rect2) {

}
//求两点间的距离
C.getDist = function(x1,y1,x2,y2) {
   return Math.sqrt((x2-x1)**2+(y2-y1)**2);
}




