/* 
Write the greet() function
- Pass in the name parameter and return a string with the name argument.
- for ex. functionName(parameter){...}
*/
function greet(name) {
    //your code goes down here
    let result=Greetings
    result=(+name)
    return result;
  }
  
  //open the browser console to check results
  console.log('result: ', greet('Dani'));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = greet;
  }
  