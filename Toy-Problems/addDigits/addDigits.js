/* 
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

WHITEBOARD:
https://docs.google.com/presentation/d/1YRTXPSoiiTUiIOGnr1bV3Iac4sJgNm3slVGtx3RJWcw/edit?usp=sharing
*/

/*
 @param {number} num
 @return {number}
*/
var addDigits = function(num) {
  let digits = num.toString();
  
  while(digits.length > 1) {
    let sum = 0;
    for(var i = 0; i < digits.length; i++) {
      sum += Number(digits[i])
    }
    digits = sum.toString();
  }
  return Number(digits);
};