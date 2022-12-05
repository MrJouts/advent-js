function createXmasTree(height) {
  let tree = ""

  for (let i = 1; i <= height; i++) {
    tree += "_".repeat(height - i) + "*".repeat(i * 2 - 1) + "_".repeat(height - i) + "\n"
  }

  tree += "_".repeat(height - 1) + "#".repeat(1) + "_".repeat(height - 1) + "\n"
  tree += "_".repeat(height - 1) + "#".repeat(1) + "_".repeat(height - 1) 

  return tree
}

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

// __*__
// _***_
// *****
// __#__
// __#__

console.log(createXmasTree(5));
