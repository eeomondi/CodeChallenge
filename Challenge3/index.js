function netSalaryCalculator() {
    let basicSalary = parseInt(prompt("Enter your basic salary: "));
    
    if (basicSalary < 0) {
      alert("Invalid input! Please enter a positive number.");
      return;
    }
    
    let payee = 24000;
    let nhifDeductions = 750;
    let nssfDeductions = 7000;
    let grossSalary = 0;
    let netSalary = 0;
    
    payee = basicSalary * 0.15; 
    // assuming a 15% tax
    nhifDeductions = basicSalary * 0.05;
    // assuming a 5% NHIF deduction
    nssfDeductions = basicSalary * 0.05;
    // assuming a 5% NSSF deduction
    
    grossSalary = basicSalary + (basicSalary * 0.15); 
    // adding the payee to the basic salary
    
    netSalary = grossSalary - (nhifDeductions + nssfDeductions);
    
    alert(`Payee: ${payee}, NHIF Deductions: ${nhifDeductions}, NSSF Deductions: ${nssfDeductions}, Gross Salary: ${grossSalary}, Net Salary: ${netSalary}`);
  }
  
  netSalaryCalculator();
