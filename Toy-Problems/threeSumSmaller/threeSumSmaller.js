/*
Given an array of n integers nums and an integer target,
find the number of index triplets i, j, k with 0 <= i < j < k < n
that satisfy the condition nums[i] + nums[j] + nums[k] < target.

EXAMPLE:
Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]

WHITEBOARD:
https://docs.google.com/presentation/d/1fhiE0-LvpJJWQpdsp2HKSPcRrN_zHvuvpwzg83ErJ3M/edit?usp=sharing
*/

/*
 @param {number[]} nums
 @param {number} target
 @return {number}
 */
var threeSumSmaller = function(nums, target) {
  let arr = nums.sort();
  let output = 0;
  for(var i = 0; i <= arr.length - 3; i++) {
    let sum1 = arr[i];
    if(sum1 < target || target < 0) {
    for(var j = i + 1; j <= arr.length - 2; j++) {
      let sum2 = sum1 + arr[j];
      if(sum2 < target || target < 0) {
      for(var k = j + 1; k <= arr.length - 1; k++) {
        let sum3 = sum2 + arr[k];
        if(sum3 < target) output += 1;
      }
    }
}
    }
  }
  return output;
};