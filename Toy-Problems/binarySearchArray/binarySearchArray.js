/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  let targetIndex = null;
  let indexes = [...Array(array.length).keys()];

  var splitArr = (arr1, arr2, tar) => {
    let midIndex = Math.floor(arr1.length / 2);
    if (arr1[midIndex] === tar) {
      targetIndex = arr2[midIndex];
      return;
    } else if (arr1[midIndex] < tar) {
      let val = arr1.slice(midIndex, (arr1.length - 1));
      let ind = arr2.slice(midIndex, (arr2.length - 1));
      splitArr(val, ind, tar);
    } else if (arr1[midIndex] > tar) {
      let val = arr1.slice(0, midIndex);
      let ind = arr2.slice(0, midIndex);
      splitArr(val, ind, tar);
    }
  }
  splitArr(array, indexes, target);
  return targetIndex;
};

