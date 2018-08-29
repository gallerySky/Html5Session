var can;
var ctx;

var w;
var h;

var padLeft = 100;
var padTop = 100;

var girlWidth = 600;
var girlHeight = 300;

var girlPic = new Image();
var starPic = new Image();

var deltaTime;
var lastTime;

var stars = [];
var num = 60;

var switchy = false;
var opacity = 0;


function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    w = can.width;
    h = can.height;

    girlPic.src = "images/girl.jpg";
    starPic.src = "images/star.png";

    document.addEventListener("mousemove", onMousermove, false)

    for (let index = 0; index < num; index++) {
        stars[index] = new starObj();
        stars[index].init();
    }

    lastTime = Date.now();
    gameLoop();
}

function gameLoop() {
    //requestAnimationFrame方法用于通知浏览器重采样动画
    window.requestAnimationFrame(gameLoop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    fillCanvas();

    drawGirl();

    drawTitle();

    drawStars();

    aliveUpdate();
}

function fillCanvas() {
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, w, h);
}

function drawTitle() {

    let x = padLeft + girlWidth / 2;
    let y = 60
    ctx.textAlign = "center";
    ctx.fillStyle = "#ff0000";
    ctx.font = "30px Arial";
    ctx.fillText("Stars Girl", x, y);
}

function drawGirl() {
    ctx.drawImage(girlPic, padLeft, padTop, girlWidth, girlHeight);
}

function onMousermove(e) {
    if (e.offSetX || e.layerX) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
    }

    if (px > padLeft && px < (padLeft + girlWidth) && py > padTop && py < (padTop + girlHeight)) {
        switchy = true;
    } else {
        switchy = false;
    }

}