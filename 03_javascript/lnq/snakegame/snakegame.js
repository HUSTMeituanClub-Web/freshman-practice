function tanchishe(options) {
    this.canvas = options.canvas;
    this.span_score = options.span_score;
    this.context = this.canvas.getContext('2d');
    this.snake = new Array(); //蛇身数组
    this.snakeLength = 1; //蛇身长度
    this.direct = options.direct || 37; //移动方向
    this.food_x; //食物的坐标   可以改为object对象
    this.food_y;
    this.score = 0; // 得分
    this.timer; //setInterval


    var defaults = {
        maxNumber: 630, // 最大长宽，这里的画布是正方形
        stride: 15, //每个小方块的长宽，
        speed: 300 // 移动速度
    }
    this.settings(options, defaults);
    this.init();
    this.update();


    var self = this;
    document.onkeydown = function(event) {
        console.log(self.direct)
        var event = event || window.event;
        clearInterval(self.timer);
        // 37:左 38:上 39:右  40:下
        var newDir = (event.keyCode > 36 && event.keyCode < 41) ? event.keyCode : 40;
        // 处理反方向
        if (Math.abs(self.direct - newDir) == 2) {
            alert("头碰到身体了，Game over!");
        } else {
            self.direct = newDir;
            self.update();
        }
    }
}


// 将配置参数和默认参数合并
tanchishe.prototype.settings = function(options, defaults) {
    this.ops = options || {};


    for (var i in defaults) {
        if (typeof options[i] === 'undefined') {
            options[i] = defaults[i];
        } else if (typeof options[i] === 'object') {
            for (var deepDef in defaults[i]) {
                if (typeof options[i][j] === 'undefined') {
                    options[i][j] = defaults[i][j];
                }
            }
        }
    }
}


// 随机生成食物
tanchishe.prototype.randFood = function() {
    // 保证生成的食物会在小方格里
    // 小方格的个数
    var shang = this.ops.maxNumber / this.ops.stride;
    // 小方格个数的整数部分
    var zheng = shang / 10;
    // 小方格的个位
    var yu = shang % 10;
    do {
        this.food_x = Math.ceil(Math.random() * zheng + yu) * this.ops.stride + 1;
        this.food_y = Math.ceil(Math.random() * zheng + yu) * this.ops.stride + 1;
    } while (this.isBody(this.food_x, this.food_y));


}


// 判断食物是否在蛇的身体上
tanchishe.prototype.isBody = function(param_x, param_y) {
    // 判断蛇头是否碰到了蛇身
    for (var i = 0; i < this.snakeLength - 1; i++) {
        if (this.snake[i].x === param_x && this.snake[i].y === param_y) {
            return true;
        }
    }
    // 判断食物是否在蛇的身体上
    var snakeLast = this.snake[this.snakeLength - 1];
    if (snakeLast) {
        if (snakeLast.x === param_x && snakeLast.y === param_y) {
            return true;
        }
    }
    return false;
}


// 定时更新画面
tanchishe.prototype.update = function() {
    var self = this;
    self.timer = setInterval(function() {
        // 到达边界
        if (self.snake[0].x < 1 || self.snake[0].y < 1 || self.snake[0].x > self.ops.maxNumber || self.snake[0].y > self.ops.maxNumber) {
            clearInterval(self.timer);
            alert('出边界了，Game over!');
        } else {
            // 重新绘制贪吃蛇
            self.drawSnake();


            // 检测是否吃到食物
            self.checkFood();
        }
    }, self.ops.speed)
}


// 绘制贪吃蛇
tanchishe.prototype.drawSnake = function() {
    // 擦出蛇尾巴
    var snakeLast = this.snake[this.snakeLength - 1],
        snakeHead = this.snake[0];
    this.clear(snakeLast.x, snakeLast.y);


    // 删除尾巴
    this.snake.pop();
    // 增加头
    this.addHead(snakeHead.x, snakeHead.y);
}


// 增加头
tanchishe.prototype.addHead = function(param_x, param_y) {
    var newX, newY;
    // 37:左 38:上 39:右  40:下
    switch (this.direct) {
        case 37:
            newX = param_x - this.ops.stride;
            newY = param_y;
            break;
        case 38:
            newY = param_y - this.ops.stride;
            newX = param_x;
            break;
        case 39:
            newX = param_x + this.ops.stride;
            newY = param_y;
            break;
        case 40:
            newY = param_y + this.ops.stride;
            newX = param_x;
            break;
    }


    // 增加蛇头
    // 检测头是否 碰到身体
    if (this.snakeLength > 3 && this.isBody(newX, newY)) {
        clearInterval(this.timer);
        alert("头碰到身体了，Game over!");
    } else {
        this.snake.unshift({
            x: newX,
            y: newY
        });
        this.draw(this.snake[0].x, this.snake[0].y);
    }
}


// 检测是否吃到食物
tanchishe.prototype.checkFood = function() {
    if (this.snake[0].x === this.food_x && this.snake[0].y === this.food_y) {
        // 增加头
        this.snakeLength += 1;
        this.addHead(this.food_x, this.food_y);
        // 改变分数
        this.score += 10;
        this.span_score.innerHTML = this.score;
        // 改变速度
        this.speed = (this.speed > 100) ? (this.speed - 20) : this.speed;
        this.randFood();
        console.log(this.snake)
        console.log(this.food_x)
        console.log(this.food_y)
        this.draw(this.food_x, this.food_y);
    }
}


// 清除
tanchishe.prototype.clear = function(param_x, param_y) {
    this.context.clearRect(param_x, param_y, this.ops.stride - 2, this.ops.stride - 2);
}


// 画小方块
tanchishe.prototype.draw = function(param_x, param_y) {
    this.context.fillRect(param_x, param_y, this.ops.stride - 2, this.ops.stride - 2);
}


// 初始化函数
tanchishe.prototype.init = function() {
    this.canvas.width = this.ops.maxNumber;
    this.canvas.height = this.ops.maxNumber;
    this.context.lineWidth = 1;
    this.context.fillStyle = '#69D69E';
    this.context.strokeStyle = "#ef343e";
    var i = 0;
    while (i <= this.ops.maxNumber) {
        this.context.moveTo(0, i);
        this.context.lineTo(this.ops.maxNumber, i);
        this.context.stroke();


        this.context.moveTo(i, 0);
        this.context.lineTo(i, this.ops.maxNumber);
        this.context.stroke();
        i += this.ops.stride;
    }
    this.snake.push({
        x: 31,
        y: 61
    });
    this.randFood();
    this.draw(this.food_x, this.food_y);
    this.draw(this.snake[0].x, this.snake[0].y);
}


function tcs(options) {
    return new tanchishe(options);
}
window.onload=function(){
    tcs({
        canvas : document.getElementById('myCanvas'),
        span_score : document.getElementById('score'),
        maxNumber : 630, // 最大长宽，这里的画布是正方形
        stride : 30, //每个小方块的长宽，
        speed : 300 // 移动速度
    });
}