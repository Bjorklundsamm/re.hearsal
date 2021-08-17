/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

 //Use of random or middle elements are not ideal in terms of search optimizing but negating use of them would require implementation of the median of medians algorithim which runs in O(n) or a worst case of O(n^2).

//Do research in to methods of using more optimized pivot without requiring median of median.
var quicksort = (array) => {
  var algorithim = new QuickSortAlgorithm();
  return algorithim.sortArr(array, 0, array.length -1);
}

class QuickSortAlgorithm {
  constructor() {
  }

  partition(array, low, high) {
    let pivot = array[high];
    let i = (low-1)

    for (var n=low; n < high; n++) {
      if (array[n] <= pivot) {
        i++
        let currentValue = array[i];
        array[i] = array[n];
        array[n] = currentValue;
      }
    }
    let currentValue = array[i + 1];
    array[i + 1] = array[high];
    array[high] = currentValue;
    return i+1;
  }

  sortArr(array, low, high) {
    if (low < high) {
      let partIndex = this.partition(array, low, high);

      this.sortArr(array, low, partIndex-1);
      this.sortArr(array, partIndex+1, high);
    }
    return array;
  }
}

