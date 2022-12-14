function countTime(leds) {
    let countSeconds = 0;

    let newArr = [...leds];
    let secondArr = [...leds];

    while (newArr.includes(0)) {
        for (let index = 0; index < newArr.length; index++) {
            if (
                index == 0 &&
                newArr[index] == 0 &&
                newArr[newArr.length - 1] == 1
            ) {
                secondArr[index] = 1;
            }

            if (index != 0 && newArr[index] == 0 && newArr[index - 1] == 1) {
                secondArr[index] = 1;
            }
        }

        countSeconds += 7;
        newArr = [...secondArr];
    }

    return countSeconds;
}

const leds = [0, 1, 1, 0, 1];
console.log(countTime(leds)); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
