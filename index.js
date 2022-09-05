function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNums = {};
  for(const number of array){
    let complement = target - number;
    if (seenNums[complement]){
      return true
    }
    seenNums[number] = true;
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  ok so noww its only looping through once and comparing on each
  loop through to an object it's updating so O(n) ?
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  -to save on time, instead of nested loops, we're going to loop
  through the array once, each time figuring out the number
  needed to add to the current integer to reach the target and 
  then add the seen numbers to a data structure outside the loop
  like an object or a set. then on the next loop through, we
  will compare the current complement to the list of seen numbers
  to see if there are any matches, returning true if there are.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 7, -3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4))
}

module.exports = hasTargetSum;
