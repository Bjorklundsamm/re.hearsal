/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var result = true;

  var checkKeys = (obj1, obj2) => {
    for (var key in obj1) {
      if(!obj2[key]) {
        result = false;
      }
      if(typeof obj1[key] === 'object') {
        checkKeys(obj1[key], obj2[key])
      } else if(obj1[key] !== obj2[key]) {
        result = false;
      }
    }
  }
  checkKeys(apple, orange);
  return result;
};
