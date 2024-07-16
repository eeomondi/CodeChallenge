//challenge one 

function getStudentGrade() {
  let studentMark = parseInt(prompt("Enter the student's mark (0-100):"));

  if (studentMark < 0 || studentMark > 100) {
    alert("Invalid mark. Please enter a mark between 0 and 100.");
    getStudentGrade();
  } else if (studentMark >= 80) {
    console.log(`The student's grade is: A`);
  } else if (studentMark >= 60 && studentMark < 80) {
    console.log(`The student's grade is: B`);
  } else if (studentMark >= 50 && studentMark < 60) {
    console.log(`The student's grade is: C`);
  } else if (studentMark >= 40 && studentMark < 50) {
    console.log(`The student's grade is: D`);
  } else {
    console.log(`The student's grade is: E`);
  }
}

getStudentGrade();

//function uses parseInt to convert the user input to an integer, and isNaN to check if the input is a valid number. 
//It also uses alert to display the grade to the user. 
//You can modify the function to return the grade as a string or use a different output method if needed.