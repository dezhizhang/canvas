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

