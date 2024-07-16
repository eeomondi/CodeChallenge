//Challenge 2
//In this program, we define a function speedDetector that takes the speed as an argument. it logs "Ok" to the console.
  // Otherwise, it calculates the number of demerit points by subtracting 70 from the speed and then dividing by 5 using the Math.
  //floor function (to get an integer). It then logs the number of demerit points to the console. If the demerit points exceed 12,
  // it also logs "License suspended" to the console.
  //Finally, we use the prompt function to ask the user to input their speed and call the speedDetector function with the input speed.

 // tried to use the readline command to run js and get the terminal response since node js has no prompt to do so.
const readline = require('readline');

function speedDetector() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the car\'s speed: ', (speed) => {
    let parsedSpeed = parseInt(speed);

    if (isNaN(parsedSpeed) || parsedSpeed < 0) {
      console.log("Invalid input! Please enter a positive number.");
      rl.close();
      return;
    }

    let demeritPoints = 0;

    if (parsedSpeed >= 70) {
      demeritPoints = Math.floor((parsedSpeed - 70) / 5);
    }

    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }

    rl.close();
  });
}

speedDetector();