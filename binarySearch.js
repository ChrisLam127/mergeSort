function binarySearch(arr, low, high, target) {
  // base Condition
  if (low > high) {
    return false;
  }
  // lets get the middle of the array
  let midIndex = Math.floor((low + high) / 2);

  // check if the value in the middle of the array is equal to the target
  if (arr[midIndex] === target) {
    return true;
  }
  // If the center is not equal to the target, then check whether the target is > or < than the midIndex
  if (arr[midIndex] > target) {
    return binarySearch(arr, low, midIndex - 1, target);
  } else {
    return binarySearch(arr, midIndex + 1, high, target);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 8, 16));
