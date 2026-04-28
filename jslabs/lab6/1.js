function getMaxDifference(arr) {
  if (arr.length < 2) return 0; 
  return Math.max(...arr) - Math.min(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


function filterDoneObjects(arr) {
  return arr.filter(obj => obj.isDone === true);
}

alert("Максимальная разница: " + getMaxDifference([5, 1, 9, 3]));
alert("Без дублей: " + JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 4])));

const tasks = [
  {id: 1, isDone: true}, 
  {id: 2, isDone: false},
  {id: 3, isDone: true}
];
alert("Выполненные задачи: " + JSON.stringify(filterDoneObjects(tasks)));