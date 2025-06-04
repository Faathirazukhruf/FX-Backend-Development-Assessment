function findPairs(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`Pair found at ${i} and ${j} (${arr[i]} + ${arr[j]})`);
      }
    }
  }
}

// Test fungsi
const arr = [1, 3, 5, 7, 2, 4];
const target = 8;
findPairs(arr, target);