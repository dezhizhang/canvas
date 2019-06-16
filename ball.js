class Ball{
    constructor(props) {
        this.x = 0;
        this.y = 0;
        this.r = 20;
        this.scaleX = 1;
        this.scaleY = 1;
        this.strokeStyle = 'rgba(0,0,0,0)';
        this.fillStyle = 'rgba(57,119,224)';
        this.alpha = 1;
        Object.assign(this,props);
        return this;
    }
    render(ctx) {
        let {x,y,r,scaleX,scaleY,fillStyle,strokeStyle,alpha} = this;
        ctx.save();
            ctx.translate(x,y);
            ctx.scale(scaleX,scaleY);
            ctx.strokeStyle = strokeStyle;
            ctx.fillStyle = fillStyle;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.arc(0,0,r,0,360 * Math.PI/180);
            ctx.fill();
            ctx.stroke()
        ctx.restore();
        return this;

    }
}