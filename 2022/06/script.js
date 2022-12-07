function createCube(size) {
    let top = "";
    let bottom = "";

    for (let i = 1; i <= size; i++) {
        top +=
            " ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n";
        bottom +=
            " ".repeat(i - 1) +
            "\\/".repeat(size - i + 1) +
            "_/".repeat(size) +
            "\n";
    }

    return (top + bottom).slice(0, -1);
}

const cubeOfOne = createCube(1);
console.log(cubeOfOne);
// /\_\
// \/_/

const cubeOfTwo = createCube(2);
console.log(cubeOfTwo);
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/

const cube = createCube(3);
console.log(cube);
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
