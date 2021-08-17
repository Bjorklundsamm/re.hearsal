/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.head = null;
  this.nodes = [];
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  let newNode = { value };
  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.tail.value;
    this.nodes.push(this.tail);
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let result = this.head.value;
  if (!this.nodes[0]) {
    this.head = null;
    this.tail = null;
  } else {
    this.nodes.shift();
    this.head.value = this.nodes[0].value;
  }
  return result;
};

LinkedList.prototype.contains = function(val) {
  if(this.head.value === val || this.tail.value === val) {
    return true;
  }
  for (var node of this.nodes) {
    if(node.value === val) {
      return true;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(value, index) {
  let newNode = {value};
  this.nodes[index].next = val;
  newNode.next = this.nodes[index - 1].value;
  this.nodes.splice(index, 0, newNode);
};
