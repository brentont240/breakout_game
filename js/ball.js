export class Ball {
    constructor(x, y, radius, sAngle, eAngle, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sAngle = sAngle;
        this.eAngle = eAngle;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx) {
        // draws the ball
        ctx.beginPath();
        ctx.arc(this.x ,this.y ,this.radius ,this.sAngle , this.eAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath;
    }

    move(canvas){
        // update the ball's coordinates for the next frame
        // bounce the ball if it touches the edges
        if (this.y + this.dy < this.radius || this.y + this.dy > canvas.height - this.radius) {
            this.dy = -this.dy;
        }
        if (this.x + this.dx < this.radius || this.x + this.dx > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}