// 思考環節
// const matrix = [
//   [1, 2],
//   [4, 5],
//   [7, 8],
// ];

// //期望陣列形式
// const afterMatrix = [
//   [7, 4, 1],
//   [8, 5, 2],
// ];
/*
        matrix[0].length = 2
        matrix.length = 3
        let array = [7,4,1];
  
      [0][0]=>[0][2] 1
      [1][0]=>[0][1] 4
      [2][0]=>[0][0] 7


      let array = []

      [0][1]=>[1][0] 2
      [1][1]=>[1][1] 5
      [2][1]=>[1][2] 8
        */

// 方法一要先創建一個空陣列
//     const matrix = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];
//     const afterMatrix = [
//       [7, 4, 1],
//       [8, 5, 2],
//       [9, 6, 3],
//     ];
//   const afterMatrix2 = [[], [], []];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       afterMatrix2[i][matrix[0].length - 1 - j] = matrix[j][i];
//       console.log(matrix[j][i]);
//     }
//   }
//   console.log(afterMatrix2);
/*
        [0][0]=>[0][2] 1

        [0][1]=>[1][2] 2

        [0][2]=>[2][2] 3

        [1][0]=>[0][1] 4

        [1][1]=>[1][1] 5

        [1][2]=>[2][1] 6

        [2][0]=>[0][0] 7

        [2][1]=>[1][1] 8

        [2][2]=>[2][0] 9
      */

// 方法二使用unshift
// const matrix = [
//   [1, 2],
//   [4, 5],
//   [7, 8],
// ];
//期望陣列形式
// const afterMatrix = [
//   [7, 4, 1],
//   [8, 5, 2],
// ];
// const afterMatrix2 = [];
// const afterMatrix2 = [
//   [1, 4, 7],
//   [2, 5, 8],
// ];
// for (let i = 0; i < matrix[0].length; i++) {
//   let array = [];
//   for (let j = 0; j < matrix.length; j++) {
//     console.log(matrix[j][i]);
//     // array.unshift(matrix[j][i]);
//   }
//   afterMatrix2.push(array);
// }
// console.log(afterMatrix2);

// 方法三 用兩個map
//   let array = matrix[0].map((val, index) =>
//     matrix.map((row) => row[index]).reverse()
//   );
//   console.log(array);

// 方法四 使用純for迴圈
// const array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const afterArray = [
//   [5, 3, 1],
//   [6, 4, 2],
// ];
// const answerArray = [];
// let arrayRowLength = array[0].length;
// let arrayColLength = array.length;

// for (let row = 0; row < arrayRowLength; row++) {
//   const tempArray = [];
//   for (let col = 0; col < arrayColLength; col++) {
//     console.log(array[col][row]);
//     tempArray[arrayRowLength - col] = array[col][row];
//   }
//   answerArray[row] = tempArray;
// }
// console.log(answerArray);

// 方法五 使用reverse搭配push
// const array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const afterArray = [
//   [5, 3, 1],
//   [6, 4, 2],
// ];
// const answerArray = [];
// let arrayRowLength = array[0].length;
// let arrayColLength = array.length;

// for (let row = 0; row < arrayRowLength; row++) {
//   const tempArray = [];
//   for (let col = 0; col < arrayColLength; col++) {
//     tempArray.push(array[col][row]);
//   }
//   tempArray.reverse();
//   answerArray.push(tempArray);
// }
// console.log(answerArray);
