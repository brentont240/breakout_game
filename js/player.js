export class Player {
    constructor(lives) {
        this.lives = lives;
        this.score = 0;
    }

    drawScore(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`Score: ${this.score}`, 8, 20);
    }

    drawLives(ctx, canvas) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`Lives: ${this.lives}`, canvas.width - 65, 20);
    }
}