import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";
import { Brick } from "./brick.js";
import { BrickField } from "./brickField.js";
import { Player } from "./player.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball((canvas.width / 2), (canvas.height - 30), 10, 0, (Math.PI * 2), "blue", 2, -2);
const paddle = new Paddle(canvas, 75, 10, "red", 7)
const brick = new Brick(0, 0, 1, 75, 20, "green");
const brickField = new BrickField(10, 3, 5, 30, 30);
const player  = new Player(3);

// Fill the brickfield with bricks
brickField.init(brick);

function draw() {
    // clears the canvas so the objects don't leave a trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the brick field at the top
    brickField.draw(ctx);

    // update movement for the ball and paddle
    ball.draw(ctx);
    ball.move(canvas, paddle, player);

    paddle.draw(ctx);
    paddle.move(canvas);

    player.drawScore(ctx);
    player.drawLives(ctx, canvas);

    brickField.collisionDetection(ball, player);

    // smoother than using set interval
    requestAnimationFrame(draw);
}

// Need to add bind or it will not work
document.addEventListener("keydown", paddle.keyDownHandler.bind(paddle), false);
document.addEventListener("keyup", paddle.keyUpHandler.bind(paddle), false);

draw();