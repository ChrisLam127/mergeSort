function mergeSort(array) {
  // base case
  if (array.length < 2) {
    return array;
  }

  // let's get the middle of the array
  let midIndex = Math.floor(array.length / 2);
  let leftArr = array.slice(0, midIndex);
  let rightArr = array.slice(midIndex, array.length);

  // return the recursive call to divide the array to a single element
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([12, 3, 16, 6, 5, 1, 20, 14, 32, 23, 25]));
