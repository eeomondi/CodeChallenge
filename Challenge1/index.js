//challenge one 

function studentGradeGenerator() {
    let mark = parseInt(prompt("Enter student marks (between 0 and 100): "));
  
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
  