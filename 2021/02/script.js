function listGifts(letter) {
  return letter
    .trim()
    .split(/\s+/)
    .filter((gift) => gift.charAt(0) != "_")
    .reduce((acc, n) => {
      acc[n] = !acc[n] ? 1 : ++acc[n];
      return acc;
    }, {});
}

const carta = "bici coche balón _playstation bici coche peluche";

const regalos = listGifts(carta);

console.log(regalos);

/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
