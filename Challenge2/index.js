//Challenge 2

function speedDetector() {
    let speed = parseInt(prompt("Enter the car's speed: "));
    
    if (speed < 60) {
      alert("Invalid input! Please enter a positive number.");
      return;
    }
    
    let demeritPoints = 0;
    
    if (speed >= 70) {
      demeritPoints = Math.floor((speed - 70) / 5);
    }
    
    if (demeritPoints > 12) {
      alert("License suspended");
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
  
  speedDetector();