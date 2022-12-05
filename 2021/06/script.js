function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    const n1 = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      const n2 = numbers[j];
      if (i !== j && n1 + n2 === result) return [n1, n2];
    }
  }

  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
