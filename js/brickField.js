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
    init() {
        for (let c = 0; c < this.columnCount; c++) {
          this.bricks[c] = [];
          for (let r = 0; r < this.rowCount; r++) {
            this.bricks[c][r] = { x: 0, y: 0 };
          }
        }
    }

    draw(brick, ctx) {
        for (let c = 0; c < this.columnCount; c++) {
            for (let r = 0; r < this.rowCount; r++) {
                const brickX = c * (brick.width + this.padding) + this.offsetLeft;
                const brickY = r * (brick.height + this.padding) + this.offsetTop;
                this.bricks[c][r].x = brickX;
                this.bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brick.width, brick.height);
                ctx.fillStyle = brick.color;
                ctx.fill();
                ctx.closePath();
            } 
        }
    }

}