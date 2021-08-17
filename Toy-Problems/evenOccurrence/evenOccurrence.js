/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var occurrences, result;
  result = null;
  occurrences = {};
  for (var i = 0; i < arr.length; i++) {
    var currentKey = arr[i];
    if (!occurrences[currentKey]) {
    occurrences[currentKey] = 1;
    } else {
      occurrences[currentKey] += 1;
    }
  }
  forEach(occurrences, function(value, key) {
    if(!result && isEven(value)) { result = key }
  });
  return result;
};

var forEach = (collection, callback) => {
  for (var key in collection) {
    callback(collection[key], key, collection);
  }
}

var isEven = (value) => (value % 2 === 0 ? true : false);