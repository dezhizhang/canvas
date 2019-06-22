class Box{
    constructor(props) {
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.vx = 0;
        this.vy = 0;
        this.strokeStyle = 'rgba(0,0,0,0)';
        this.fillStyle = 'rgb(57,119,224)';
        this.rotation = 0;
        this.lineWidth = 0;
        Object.assign(this,props)
        return this;
    }
    render(ctx) {
        let {x,y,width,height,lineWidth,fillStyle,strokeStyle,rotation } = this;
        ctx.save()
            ctx.translate(x,y);
            ctx.rotate(rotation);
            ctx.lineWidth = lineWidth;
            ctx.fillStyle = fillStyle;
            ctx.strokeStyle = strokeStyle;
            ctx.beginPath();
            ctx.lineTo(0,0);
            ctx.lineTo(width,0);
            ctx.lineTo(width,height);
            ctx.lineTo(0,height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        ctx.restore();
        return this;
    }
    isPoint(mouse) {
        let {x,y} = mouse;
        return (x >=this.x && x<=this.x + this.width && y >=this.y && y<this.y+this.height)
    }
}