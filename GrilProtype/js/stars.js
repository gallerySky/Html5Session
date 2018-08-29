//定义一个stars类
var starObj = function() {
    this.x;
    this.y;

    this.picNo;
    this.timer;

    this.xSpd;
    this.ySpd;

    this.beta;
}

starObj.prototype.init = function() {
    this.x = Math.random() * 600 + 100;
    this.y = Math.random() * 300 + 100;

    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;

    this.xSpd = Math.random() * 3 - 1.5;
    this.ySpd = Math.random() * 3 - 1.5;

    this.beta = Math.random() * Math.PI * 0.5;
}

starObj.prototype.update = function() {
    this.x += this.xSpd * deltaTime * 0.004;
    this.y += this.xSpd * deltaTime * 0.004;

    if (this.x < 100 || this.x > 700) {
        this.init();
        return;
    }

    if (this.y < 100 || this.y > 400) {
        this.init();
        return;
    }

    this.timer += deltaTime;
    if (this.timer > 50) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
}

starObj.prototype.draw = function() {
    this.beta += deltaTime * 0.005;
    //Canvas use Stack to save status
    ctx.save();
    //adjust the opacity if life always greater than 1
    ctx.globalAlpha = Math.sin(this.beta) * opacity;
    ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
    ctx.restore();
}

function drawStars() {
    for (let index = 0; index < num; index++) {
        stars[index].update();
        stars[index].draw();
    }
}

function aliveUpdate() {
    if (switchy) {
        opacity += deltaTime * 0.05;
        if (opacity > 1) {
            opacity = 1;
        }
    } else {
        opacity -= deltaTime * 0.05;
        if (opacity < 0) {
            opacity = 0;
        }
    }
}