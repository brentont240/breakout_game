import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball((canvas.width / 2), (canvas.height - 30), 10, 0, (Math.PI * 2), "blue", 2, 2);
const paddle = new Paddle(canvas, 75, 10, "red", 7)

const interval = setInterval(draw, 10);

function draw() {
    // clears the canvas so the objects don't leave a trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // update movement for the ball and paddle
    ball.draw(ctx);
    ball.move(canvas, interval, paddle);

    paddle.draw(ctx);
    paddle.move(canvas);
}

// need to add bind or it will not work
document.addEventListener("keydown", paddle.keyDownHandler.bind(paddle), false);
document.addEventListener("keyup", paddle.keyUpHandler.bind(paddle), false);