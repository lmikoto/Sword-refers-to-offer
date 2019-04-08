// 遍历
// function Find(target, array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let k = 0; k < array[i].length; k++) {
//       if (array[i][k] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function Find(target, array) {
  let row = 0;
  let col = array[0].length - 1;
  while (row < array.length && col >= 0) {
    if (target === array[row][col]) {
      return true;
    }
    if (target > array[row][col]) {
      row++;
      continue;
    }

    col--;
  }

  return false;
}

let target = 7;
let array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
console.log(Find(target, array));
