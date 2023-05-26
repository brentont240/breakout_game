import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";
import { Brick } from "./brick.js";
import { BrickField } from "./brickField.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball((canvas.width / 2), (canvas.height - 30), 10, 0, (Math.PI * 2), "blue", 2, 2);
const paddle = new Paddle(canvas, 75, 10, "red", 7)
const brick = new Brick(75, 20, "green");
const brickField = new BrickField(10, 3, 5, 30, 30);

brickField.init();

const interval = setInterval(draw, 10);

function draw() {
    // clears the canvas so the objects don't leave a trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the brick field at the top
    brickField.draw(brick, ctx);

    // update movement for the ball and paddle
    ball.draw(ctx);
    ball.move(canvas, interval, paddle);

    paddle.draw(ctx);
    paddle.move(canvas);
}

// need to add bind or it will not work
document.addEventListener("keydown", paddle.keyDownHandler.bind(paddle), false);
document.addEventListener("keyup", paddle.keyUpHandler.bind(paddle), false);