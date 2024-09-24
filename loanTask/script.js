const loanInfo=new Object({
    principalAmount:0,
    interestRate:0,
    loanTerm:0,
    emi:0,
    calculateMonthlyPay:function(){
        let principalAmount=this.principalAmount;
        let annualRate=this.interestRate;
        let loanTerm=this.loanTerm;
        let monthlyRate=annualRate/1200;
        let numberOfPayments=loanTerm*12;
        if(monthlyRate===0){
            this.emi=principalAmount/numberOfPayments;
        }
        else{
            this.emi=(principalAmount*monthlyRate*Math.pow(1+monthlyRate,numberOfPayments))/(Math.pow(1+monthlyRate,numberOfPayments)-1);

        }
        return this.emi.toFixed(2);
    },
    checkloanStatus:function(emisPaid){
        let totalEmis=loanInfo.loanTerm * 12;
        let remainingEmis=totalEmis-emisPaid;
        let totalAmountToBePaid=totalEmis*this.emi;
        let amountPaid=this.emi*emisPaid;
        let remainingAmountToBePaid=this.emi*remainingEmis;
        return {
            emisPaid: emisPaid,
            remainingEmis: remainingEmis,
            amountPaid: amountPaid.toFixed(2),
            remainingAmountToBePaid: remainingAmountToBePaid.toFixed(2),
            totalAmountToBePaid: totalAmountToBePaid.toFixed(2)
        };
    }
});
function calculateMonthlyPay(){
    const principalAmount=parseFloat(document.getElementById("inputPrincipalAmount").value);
    const interestRate=parseFloat(document.getElementById("inputInterestRate").value);
    const loanTerm=parseFloat(document.getElementById("inputLoanTerm").value);
    if(principalAmount>0 && interestRate>0 && loanTerm>0){
        loanInfo.principalAmount=principalAmount;
        loanInfo.interestRate=interestRate;
        loanInfo.loanTerm=loanTerm;
        const emi=loanInfo.calculateMonthlyPay();
        document.getElementById("emiResult").innerHTML="The every month installment to be paid is: "+emi;
    }
    else{
        document.getElementById("emiResult").innerHTML="Please enter valid values for principal amount, interest rate and loanTerm";
    }
}
function checkloanStatus(){
    const emisPaid=parseInt(document.getElementById("inputEmisPaid").value);
    if(emisPaid>=0 && emisPaid<=loanInfo.loanTerm * 12){
        const loanDetails=loanInfo.checkloanStatus(emisPaid);
        document.getElementById("loanStatus").innerHTML="EMIs Paid: "+loanDetails.emisPaid+" Remaining EMIs: "+loanDetails.remainingEmis+" Amount Paid: "+loanDetails.amountPaid+" Remaining Amount: "+loanDetails.remainingAmountToBePaid;
    }
    else{
        document.getElementById("loanStatus").innerHTML="Invalid input of EMIs paid, Kindly please enter the EMIs you have paid.";
    }
}