const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// getConteat() method 會回傳一個 canvas 的 drawing context
// drawing context 可以用來在 canvas 內畫圈

const unit = 20;
const row = canvas.height / unit; // 400 / 20 = 20
const column = canvas.width / unit; // 400 / 20 = 20

let snake = []; // array 中的每個元素，都是一個物件
//物件的工作是，儲存身體的 x, y 座標

snake[0] = {
  x: 80,
  y: 0,
};

snake[1] = {
  x: 60,
  y: 0,
};

snake[2] = {
  x: 40,
  y: 0,
};

snake[3] = {
  x: 20,
  y: 0,
};

let d = "Right";

function draw() {
  //背景全設定為黑色
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //畫出蛇
  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white";
    // x, y, width, height
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }

  //以目前的 d 變數方向，來決定蛇的下一幀要放在哪個座標
  let snakeX = snake[0].x; // snake[0]是物件，但snake[0].x是number
  let snakeY = snake[0].y;
  if (d == "Left") {
    snakeX -= unit;
  } else if (d == "Up") {
    snakeY -= unit;
  } else if (d == "Right") {
    snakeX += unit;
  } else if (d == "Down") {
    snakeY += unit;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  //確認蛇是否吃到果實
  snake.pop();
  snake.unshift(newHead);
}

let myGame = setInterval(draw, 100);
