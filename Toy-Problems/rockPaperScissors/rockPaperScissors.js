/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

//Make a tree
//Each branch should have an array of children
//Each child is a possible combination of R P and S
//It should take a rounds argument the discerns the size of each child
//It should then create all all the children less than or equal to the amount of rounds
//It should then push all the children with a length equal to the rounds argument and return the array

var rockPaperScissors = function (rounds) {
  var treeOfResults = new rpsTree(rounds);
  return treeOfResults.retrieveCombos(rounds);
};

class rpsTree {
  constructor (rounds) {
    this.rounds = rounds
    this.value = undefined;
    this.children = [];
  }

  newLayer(value, rounds) {
    var moves = ['R', 'P', 'S']
    if (this.value === undefined) {
      for (var n = 0; n < moves.length; n++) {
        this.children.push(new rpsTree(moves[n], this.rounds))
      }
    } else {
      for (var i = 0; i < moves.length; i++) {
        this.children.push(new rpsTree((this.value + moves[i]), this.rounds))
      }
    }
  }

  retrieveCombos(rounds) {
    var result = [];
    var searchBranch = function (node) {
      for (var i = 0; i < node.length; i++) {
        if ( node[i].value.length === this.rounds ) {
          result.push(node[i].value)
        }
        if (node[i].children.length > 0) {
          searchBranch(node[i].children);
        }
      }
    };
    searchBranch(this.children);
    return result;
  }
}

