export const drawCanvas = (min1, min2, min3) => {
  let canvas1 = document.getElementById('canvas1');
  if (canvas1) {
    let ctx1 = canvas1.getContext('2d');
    ctx1.clearRect(0, 0, 500, 500);
    drawCircle(ctx1);
    drawMinute(min1, ctx1);
  }

  let canvas2 = document.getElementById('canvas2');
  if (canvas2) {
    let ctx2 = canvas2.getContext('2d');
    ctx2.clearRect(0, 0, 500, 500);
    drawCircle(ctx2);
    drawMinute(min2, ctx2);
  }
  let canvas3 = document.getElementById('canvas3');
  if (canvas3) {
    let ctx3 = canvas3.getContext('2d');
    ctx3.clearRect(0, 0, 500, 500);
    drawCircle(ctx3);
    drawMinute(min3, ctx3);
  }
};

const drawCircle = (context) => {
  context.beginPath();
  context.arc(42.5, 42.5, 40, 0, 2*Math.PI);
  context.strokeStyle = "#cccccc";
  context.stroke();
};

const drawMinute = (min, context) => {
  const percentage = min/60;
  const radian = 2 * Math.PI * percentage;
  context.beginPath();

  //Canvas arc note:
  //It draws clockwise as default.
  //The starting radian is based on the drawing direction.
  //Ex: If it draws clockwise and starting radian is Pi/2:
  //The starting position will be at 6'o clock.
  //For this one: we start at 3Pi/2 (12 o'clock position)
  const startingRad = 3/2 * Math.PI;
  const endingRad = startingRad + radian;
  context.arc(42.5, 42.5, 40, startingRad, endingRad);
  context.strokeStyle="#ffd11a";
  context.lineWidth *= 2.5; // double line width
  context.stroke();
};
