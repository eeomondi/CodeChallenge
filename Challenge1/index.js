//challenge one 

function studentGradeGenerator() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter student marks (between 0 and 100): ', (answer) => {
    let mark = parseInt(answer);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      console.log('Invalid input. Please enter a number between 0 and 100.');
      rl.close();
    } else if (mark > 79) {
      console.log(`The student gets an A grade.`);
    } else if (mark >= 60) {
      console.log(`The student gets a B grade.`);
    } else if (mark >= 50) {
      console.log(`The student gets a C grade.`);
    } else if (mark >= 40) {
      console.log(`The student gets a D grade.`);
    } else {
      console.log(`The student gets an E grade.`);
    }
    rl.close();
  });
}

studentGradeGenerator();