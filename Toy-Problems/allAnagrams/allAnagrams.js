/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var generateAnagrams = new AllAnagrams(string);
  return generateAnagrams.result;
};

class AllAnagrams {
  constructor(string) {
    this.characters = string.split('');
    this.result = [];
    this.orderArr(this.characters);
  }

  orderArr(array) {
    for (var value of array) {
      this.combineValues(value)
    }
  }

  combineValues(value) {
    if (value.length === this.characters.length) {
      this.result.push(value);
      return;
    }
    let tempArr = [];
    for (var character of this.characters) {
      var tempVal = value;
      if (tempVal.indexOf(character) < 0) {
        tempVal += character
        tempArr.push(tempVal)
      }
    }
    this.orderArr(tempArr);
  }
}
