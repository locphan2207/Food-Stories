export const handleBigImg = () => {
  const bigImages = document.getElementsByClassName('post-header'); //get all big images
  for (let i = 0; i < bigImages.length; i++) {
    let w = bigImages[i].width;
    let h = bigImages[i].height;
    if (w === 0 || h === 0) return; // need this or it freezes
    if (w > 860 && h > 484) {
      while (w/1.01 > 860 && h/1.01 > 484) { //check result before doing
        w /= 1.01;
        h /= 1.01;
      }
    }
    if (w < 860 || h < 484) {
      while (w < 860 || h < 484) {
        w *= 1.01;
        h *= 1.01;
      }
    }
    //also move to center:
    bigImages[i].style =
      `height:${h}px;width:${w}px;transform:translate(-${(w-860)/2}px,-${(h-484)/2}px)`;
  }
};
