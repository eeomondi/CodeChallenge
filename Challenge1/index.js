//challenge one 

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter student marks (between 0 and 100): ', (mark) => {
    let studentMark = parseInt(mark);
    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        console.log('Invalid mark. Please enter a number between 0 and 100.');
        rl.close();
    } else {
        let grade = getStudentGrade(studentMark);
        console.log(`The student\'s grade is ${grade}.`);
        rl.close();
    }
});

function getStudentGrade(mark) {
    if (mark >= 80) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

//function uses parseInt to convert the user input to an integer, and isNaN to check if the input is a valid number. 
//It also uses alert to display the grade to the user. 
//You can modify the function to return the grade as a string or use a different output method if needed.