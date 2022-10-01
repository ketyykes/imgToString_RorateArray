let originalStr = `111111111111111111111111111111
111111111111111011111111111111
111111111111110000111111111111
111111111111110000111111111111
111111111111110000111111111111
111111111111000000011111111111
111111111111000000011111111111
111111111110000000001111111111
111111111000000000000001111111
111111111000000000000001111111
110000000000000000000000000001
111000000000000000000000000011
111110000000000000000000000111
111110000000000000000000000111
111111000000000000000000011111
111111100000000000000000111111
111111111000000000000001111111
111111111000000000000001111111
111111111000000000000001111111
111111111000000100000001111111
111111111000001110000001111111
111111100000011111100000111111
111111100000011111100000111111
111111100001111111110000111111
111111100011111111111000111111
111111111111111111111111111111
`;

function originalStringToArray(originalStr) {
  const originalStrAry = Array.from(originalStr);
  const zeroOneArray = [];
  let temporaryArray = [];
  originalStrAry.forEach((element) => {
    if (element !== "\n") {
      temporaryArray.push(element);
    } else {
      zeroOneArray.push(temporaryArray);
      temporaryArray = [];
    }
  });
  return zeroOneArray;
}

function main() {
  let zeroOneArray = originalStringToArray(originalStr);
  zeroOneArray = rotateMatrix(zeroOneArray, 3);
  let resultString = zeroOneArrayToString(zeroOneArray);
  console.log(resultString);
}
main();

function zeroOneArrayToString(zeroOneArray) {
  let targetString = "";
  for (let i = 0; i < zeroOneArray.length; i++) {
    for (let j = 0; j < zeroOneArray[i].length; j++) {
      targetString += zeroOneArray[i][j];
    }
    targetString += "\n";
  }
  return targetString;
}

function rotateMatrix(originalArray, number) {
  number = number % 4;
  for (let i = 0; i < number; i++) {
    originalArray = rotateRight90Degree(originalArray);
  }

  function rotateRight90Degree(inputArray) {
    const rotateRight90Array = [];
    for (let i = 0; i < inputArray[0].length; i++) {
      let temArray = [];
      for (let j = 0; j < inputArray.length; j++) {
        temArray.unshift(inputArray[j][i]);
      }
      rotateRight90Array.push(temArray);
    }
    return rotateRight90Array;
  }
  return originalArray;
}
