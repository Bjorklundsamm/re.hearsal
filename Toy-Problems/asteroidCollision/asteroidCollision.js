/*
We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents
its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode.
If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

EXAMPLE: 
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

WHITEBOARDING:
https://docs.google.com/presentation/d/1ht_Y4HTXoZm8Dqs1ck3Dh1kKU8pBHPzIQjkqZMU0lu0/edit?usp=sharing
*/

/*
  @param {number[]} asteroids
  @return {number[]}
*/
/*
  @param {number[]} asteroids
  @return {number[]}
*/
var asteroidCollision = function(asteroids) {
    let arr = asteroids;
    let p1 = 0;
    while (p1 < arr.length) {
        if(arr[p1] > 0 && arr[p1 + 1] < 0) {
            if(Math.abs(arr[p1]) === Math.abs(arr[p1 + 1])) 
            {
                arr.splice(p1, 2)
            }
            else if(Math.abs(arr[p1]) < Math.abs(arr[p1 + 1])) 
            {
                arr.splice(p1, 1)
            } else {
                arr.splice((p1 + 1), 1)
            }
            p1 = 0;
        } else {
            p1++
        }
        console.log(`p1: ${p1}, arr: ${arr}`)
    }
    return arr;
};