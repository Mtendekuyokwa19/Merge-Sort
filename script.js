function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let length = Math.floor(array.length / 2);

  let leftArray = copy(array, 0, length);
  let rightArray = copy(array, length, array.length);

  let sortedLeftArray = mergeSort(leftArray);
  let sortedRightArray = mergeSort(rightArray);

  console.log("=>", sortedLeftArray, sortedRightArray);
  let mergedArray = merge(sortedLeftArray, sortedRightArray);
  return mergedArray;
}

function merge(firstArray, secondArray) {
  let newArray = [];
  while (!(firstArray[0] === undefined || secondArray[0] === undefined)) {
    if (firstArray[0] > secondArray[0]) {
      newArray[newArray.length] = secondArray[0];
      secondArray.splice(0, 1);
    } else if (firstArray[0] === secondArray[0]) {
      newArray[newArray.length] = secondArray[0];
      newArray[newArray.length] = firstArray[0];
      firstArray.splice(0, 1);
      secondArray.splice(0, 1);
    } else {
      newArray[newArray.length] = firstArray[0];

      firstArray.splice(0, 1);
    }
  }

  if (firstArray.length > 0) {
    firstArray.forEach((element) => {
      newArray[newArray.length] = element;
    });
  } else if (secondArray.length > 0) {
    secondArray.forEach((element) => {
      newArray[newArray.length] = element;
    });
  }

  return newArray;
}

function split(array) {
  if (array.length == 1) {
    return array;
  }
  let length = Math.floor(array.length / 2);
  let leftArray = copy(array, 0, length);
  let rightArray = copy(array, length, array.length);

  return [leftArray, rightArray];
}

console.log(split([1, 2, 3, 4, 545, 6, 7]));

function copy(array, start, end) {
  let newArray = [];

  for (let i = start; i < end; i++) {
    newArray[newArray.length] = array[i];
  }

  return newArray;
}
