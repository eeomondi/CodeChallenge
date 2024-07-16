//challenge one 

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the student\'s mark (0-100): ', (mark) => {
    let studentMark = parseInt(mark);
    // Rest of your code...
});
//function uses parseInt to convert the user input to an integer, and isNaN to check if the input is a valid number. 
//It also uses alert to display the grade to the user. 
//You can modify the function to return the grade as a string or use a different output method if needed.