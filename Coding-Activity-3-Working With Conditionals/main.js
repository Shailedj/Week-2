/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values

*/
let response;

// Add your code here
function isOldEnoughToVote(age) {
  let result;
  result=response;
  if(age>=18)
  result="you are eligible to vote"
  else
  result="you are not eligible to vote"

  return result
  //your code goes here
  // return true or false based on the age
}

//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));
// Don't edit the code below here
if (typeof module !== 'undefined') {
  module.exports = isOldEnoughToVote;
}
