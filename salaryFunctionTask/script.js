function calculateSalary(){
    const fixedSalary=25000;
    let inputDeductions=document.getElementById("inputDeductions").value;
    let deductionAmount=parseFloat(inputDeductions);
    let paySalary=fixedSalary-deductionAmount;
    document.getElementById("result").innerHTML="The Amount of salary has to be paid to the employee is: "+paySalary;
}