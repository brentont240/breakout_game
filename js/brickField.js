import { Brick } from "./brick.js";
export class BrickField {
    constructor(padding, rowCount, columnCount, offsetTop, offsetLeft) {
        this.padding = padding;
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
        this.bricks = [];
    }

    // loads the bricks into the bricks array
    init(brick) {
        for (let c = 0; c < this.columnCount; c++) {
          this.bricks[c] = [];
          for (let r = 0; r < this.rowCount; r++) {
            // Todo: see if there is a way to import an array to have bricks of different colors, etc.
            this.bricks[c][r] = new Brick(brick.x, brick.y, brick.status, brick.width, brick.height, brick.color);
          }
        }
    }

    draw(ctx) {
        for (let c = 0; c < this.columnCount; c++) {
            for (let r = 0; r < this.rowCount; r++) {
                const brick = this.bricks[c][r];
                // Only draw the bricks if their status is 1
                if (brick.status === 1) {
                    const brickX = c * (brick.width + this.padding) + this.offsetLeft;
                    const brickY = r * (brick.height + this.padding) + this.offsetTop;
                    brick.x = brickX;
                    brick.y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brick.width, brick.height);
                    ctx.fillStyle = brick.color;
                    ctx.fill();
                    ctx.closePath();
                }
            } 
        }
    }

    collisionDetection(ball, player) {
        for (let c = 0; c < this.columnCount; c++) {
          for (let r = 0; r < this.rowCount; r++) {
            const brick = this.bricks[c][r];
            // Only have colision for bricks that have status of 1
            if (brick.status === 1) {
              if (
                ball.x > brick.x &&
                ball.x < brick.x + brick.width &&
                ball.y > brick.y &&
                ball.y < brick.y + brick.height
              ) {
                ball.dy = -ball.dy;
                brick.status = 0;
                player.score++;
                // if the score = the number of bricks, the player wins and the game reloads
                if (player.score === this.rowCount * this.columnCount) {
                    alert("You win!");
                    document.location.reload();
                }
              }
            }
          }
        }
    }
}