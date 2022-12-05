function fitsInOneBox(boxes) {
  let fitInBox = true;
  let newArr = boxes
    .map((box) => box)
    .sort((a, b) => (a && b && a.l + a.w + a.h > b.l + b.w + b.h ? 1 : -1))

  for (let i = 1; i < newArr.length; i++) {
    let prevBox = newArr[i-1]
    let currentBox = newArr[i]
    fitInBox = fitInBox && currentBox.l > prevBox.l && currentBox.w > prevBox.w && currentBox.h > prevBox.h
  }

  return fitInBox;
}

console.log("new");

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];


console.log(fitsInOneBox(boxes));
