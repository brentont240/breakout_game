import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// let x = canvas.width / 2;
// let y = canvas.height - 30;

const ball = new Ball((canvas.width / 2), (canvas.height - 30), 10, 0, (Math.PI * 2), "blue", 2, 2);
const paddle = new Paddle(canvas, 75, 10, "red", 7)


// function drawBall(){
//     // draw the ball
//     ctx.beginPath();
//     ctx.arc(ball.x ,ball.y ,ball.radius ,ball.sAngle , ball.eAngle);
//     ctx.fillStyle = ball.color;
//     ctx.fill();
//     ctx.closePath;
// }

function draw() {
    // clears the canvas so the objects don't leave a trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw(ctx);
    ball.move(canvas);
    paddle.draw(ctx);
    paddle.move(canvas);
    // ball.x += dx;
    // ball.y += dy;
}

// console.log(ball);
// console.log(paddle);

// need to add bind or it will not work
document.addEventListener("keydown", paddle.keyDownHandler.bind(paddle), false);
document.addEventListener("keyup", paddle.keyUpHandler.bind(paddle), false);

setInterval(draw, 10);







// code from lesson 1:

// makes a square
// ctx.beginPath();
// // coordinates of top left corner, width, height
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// // makes a circle
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();


// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();
// console.log("hi!")
