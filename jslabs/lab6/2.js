function filterGreaterThan(arr, threshold) {
  return arr.filter(num => num > threshold);
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}

alert("Элементы больше 2: " + JSON.stringify(filterGreaterThan([1, 4, 6, 3, 2], 2)));

const nested = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
alert("Плоский массив: " + JSON.stringify(flattenArray(nested)));
