/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/
function isString(x1,x2,x3){
let ans1=typeof(x1)
let ans2=typeof(x2)
let ans3=typeof(x3)
if ((ans1==='string') && (ans2==='string') && (ans3==='string'))
return "String"
else
return "not String"
}
//Write your code here
  
  //open the browser console to check results
  console.log('results: ', isString('a', 25, 'c'));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = isString;
  }
  