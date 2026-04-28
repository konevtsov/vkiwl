function countZeroPairs(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  let pairs = 0;
  if (counts[0]) pairs += Math.floor(counts[0] / 2);

  for (const key in counts) {
    const num = Number(key);
    if (num > 0 && counts[-num] !== undefined) {
      pairs += Math.min(counts[num], counts[-num]);
    }
  }
  return pairs;
}

function countZeroTriples(arr) {
  let count = 0;
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

alert("Пары (1): " + countZeroPairs([-7, 12, 4, 6, -4, -12, 0]));
alert("Пары (2): " + countZeroPairs([-1, 2, 4, 7, -4, 1, -2]));
alert("Пары (3): " + countZeroPairs([-1, 1, 0, 1]));
alert("Пары (4): " + countZeroPairs([-1, 1, -1, 1]));
alert("Пары (5): " + countZeroPairs([1, 1, 1, 0, -1]));
alert("Пары (6): " + countZeroPairs([0, 0]));
alert("Пары (7): " + countZeroPairs([]));

alert("Тройки с суммой 0: " + countZeroTriples([-1, 0, 1, 2, -2, -1]));