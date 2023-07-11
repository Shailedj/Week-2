//Instructions
// - Check the instructions in the summary file and calculate the current year

function current_year(){
  let currentYear=new Date();
  let year=currentYear.getFullYear();

  //console log the result
  console.log('current year result: ', currentYear);

   //should be the value of the currentYear variable
  }
  current_year()
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = currentYear;
  }
