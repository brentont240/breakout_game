export class Paddle {
    constructor(canvas, width, height, color, dx) {
        this.width = width;
        this.height = height;
        this.x = (canvas.width - this.width) / 2;
        this.y = (canvas.height - this.height);
        this.color = color;
        this.dx = dx;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(canvas) {
        // Using Math.min & Math.max to make sure the paddle can't leave the canvas boundaries
        if (this.rightPressed) {
            this.x = Math.min(this.x + this.dx, (canvas.width - this.width));
        } else if (this.leftPressed) {
            this.x = Math.max(this.x - this.dx, 0);
        }
    }
    
    keyDownHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    }

   keyUpHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }
}