/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here
var frndName=("shailu")
///////////////
function greetings() {
  result="Welcome back: "+frndName+"!" 
  return result
  
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}
