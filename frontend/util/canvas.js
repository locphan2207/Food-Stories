const drawCircle = () => {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(42.5, 42.5, 40, 0, 2*Math.PI);
    ctx.stroke();
  }
};

export default drawCircle;
