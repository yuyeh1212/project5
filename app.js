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
