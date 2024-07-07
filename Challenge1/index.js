//challenge one 

function studentGradeGenerator() {
  let mark = parseInt(prompt("Enter student marks (between 0 and 100): "));

  //The function studentGradeGenerator() is defined and a prompt is displayed to the user asking for their mark.
  // The parseInt() function is used to convert the user's input into an integer.

  if (mark < 0 || mark > 100) {
    alert("Invalid input! Please enter a mark between 0 and 100.");
    return;
  }

  if (mark > 79) {
    alert(`Grade: A`);
  } else if (mark >= 60 && mark <= 79) {
    alert(`Grade: B`);
  } else if (mark >= 49 && mark <= 59) {
    alert(`Grade: C`);
  } else if (mark >= 40 && mark <= 49) {
    alert(`Grade: D`);
  } else {
    alert(`Grade: E`);
  }
}

studentGradeGenerator();

//function uses parseInt to convert the user input to an integer, and isNaN to check if the input is a valid number. 
//It also uses alert to display the grade to the user. 
//You can modify the function to return the grade as a string or use a different output method if needed.