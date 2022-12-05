function distributeGifts(packOfGifts, reindeers) {
  let packOfGiftsSize = packOfGifts.reduce(
    (acc, gift) => (acc += gift.length),
    0
  );
  let reindeersSize = reindeers.reduce(
    (acc, reinder) => (acc += reinder.length * 2),
    0
  );

  return Math.floor(reindeersSize / packOfGiftsSize);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers); // 2

console.log(distributeGifts(packOfGifts, reindeers));