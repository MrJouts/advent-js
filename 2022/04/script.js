function fitsInOneBox(boxes) {
  return boxes
    .map((box) => box)
    .sort((a, b) => (a && b && a.l + a.w + a.h > b.l + b.w + b.h ? 1 : -1))
    .reduce((acc, currentBox, index, arr) => {
      let prevBox = arr[index-1];
      if(prevBox) {
        return acc && currentBox.l > prevBox.l && currentBox.w > prevBox.w && currentBox.h > prevBox.h
      } else {
        return true
      }
    }, true)
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

console.log(fitsInOneBox(boxes));

console.log(boxes)