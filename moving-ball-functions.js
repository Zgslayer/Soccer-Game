Ball.prototype.draw = function () {
    ball.bounce(this.x, this.y, currentDirection);

    if (this.x === 1) {
        this.directionChanged = true;
        ball.setDirection("stop");
        ball.setDirection("left");
    } else if (this.x === 799) {
        this.directionChanged = true;
        ball.setDirection("stop");
        ball.setDirection("right");
    }
    if (this.y === 1) {
        this.directionChanged = true;
        ball.setDirection("stop");
        ball.setDirection("up");
    } else if (this.y === 999) {
        this.directionChanged = true;
        ball.setDirection("stop");
        ball.setDirection("down");
    }
    circle(this.x, this.y, 10, true);
};
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2, false); if (fillCircle) {
        ctx.fill();
    } else { ctx.stroke(); }

};