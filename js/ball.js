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
        // draw the ball
        ctx.beginPath();
        ctx.arc(this.x ,this.y ,this.radius ,this.sAngle , this.eAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath;
    }

    move(canvas, paddle, player) {
        // update the ball's coordinates for the next frame
        // bounce the ball if it touches the edges
        if (this.x + this.dx < this.radius || this.x + this.dx > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.radius ) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > canvas.height - this.radius) {
            // if it is inbetween the x and the width of the paddle, bounce off of it
            if (this.x > paddle.x && this.x < (paddle.x + paddle.width)) {
                this.dy = -this.dy;
            } else {
                // game over if the ball goes to the bottom and reset the game
                player.lives--;
                if (player.lives === 0) {
                    alert("Game Over");
                    document.location.reload();
                } else {
                    // reset the paddle and ball if the game isn't over
                    this.x = canvas.width / 2;
                    this.y = canvas.height - 30;
                    this.dx = 2;
                    this.dy = -2;
                    paddle.x = (canvas.width - paddle.width) / 2;
                }
            }
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}