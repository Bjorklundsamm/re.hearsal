/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  //create method for retrieving items from storage
  result.get = (index) => {
    if (!this.storage[index]) {
      return false;
    }
    return this.storage[index];
  }
  //create method for altering storage
  result.set = (index, value) => {
    this.storage[index] = value;
  }
  // //generate an index based on current storageLimit and a value
  // result.getIndex = (value) => { return getIndexBelowMaxForKey(value, this.storageLimit) };

  result.checkSize = () => {
    if (this.size >= Math.floor(this.storageLimit * .75)) { this.storageLimit = this.storageLimit * 2; }
    if (this.size <= Math.floor(this.storageLimit * .25)) { this.storageLimit = Math.floor(this.storageLimit * .5); }
  }

  result.insert = function(key, value) {
    this.size += 1;
    this.checkSize();
    var index = getIndexBelowMaxForKey(value, this.storageLimit);

    let pair = {};
    pair[key] = value;

    if (!this.get(index)) {
      this.set(index, pair);
    }
    if (this.get(index)) {
      let bucket = this.get(index);
      if (bucket[key]) {
        this.set(index, pair)
      } else {
        bucket[key] = value
        this.set(index, bucket)
      }
    }
  };

  result.retrieve = function(key, value) {
    var index = getIndexBelowMaxForKey(value, this.storageLimit);
    var bucket = this.get(index);
    return bucket;
  };

  result.remove = function(key, value) {
    this.size -= 1;
    this.checkSize();

    var index = getIndexBelowMaxForKey(value, this.storageLimit);
    var bucket = this.get(index);
    if (bucket[key]) { delete bucket[key] };
    this.set(index, bucket);
  };

  return result;
};







