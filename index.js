function hasTargetSum(array, target) {
  const seenNumbers = new Set(); 
  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime : 0(n²)  space : 0(n)
*/

/* 
  create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here

  
This approach tackles the Two Sum problem by using an object to track encountered numbers. It iterates through the array, 
finding complementary numbers that add up to the target. If a match is found in the object, it returns 'true'; otherwise, 
the current number is stored for future checks. If no pairs are found, it returns 'false' at the end of the array. This strategy 
efficiently handles the problem's requirements.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;