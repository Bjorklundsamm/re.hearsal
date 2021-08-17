/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
class Stack {
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }

  // add an item to the top of the stack
    push(value) {
      this.storageSize += 1;
      this.storage[this.storageSize] = value;
    };

  // remove an item from the top of the stack
    pop() {
      var result = this.storage[this.storageSize];
      delete this.storage[this.storageSize];
      this.storageSize -= 1;
      return result;
    };

  // return the number of items in the stack
    size() {
      return this.storageSize;
    };

  // return the minimum value in the stack
    min() {
      var minVal;
      forEach(this.storage, (value) => {
        if (!minVal) {
          minVal = value;
        } else if (value < minVal) {
          minVal = value;
        }
      return minVal;
      });
    };
  };

  var forEach = (collection, callBack) => {
    for (var key in collection) {
      callBack(collection[key], key, collection);
    }
  }



