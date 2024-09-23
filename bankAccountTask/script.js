const bankAccount=new Object({
    accountNumber:"SBI00369565",
    accountHolderName:"Venkat",
    accountBalance:999,
    deposit: function(depositAmount){
        if(depositAmount>0){
            this.accountBalance+=depositAmount;
            this.displayDetails();
            document.getElementById("result").innerHTML="Account Balance after depositing the amount of "+ depositAmount+" is: "+this.accountBalance;
        }else{
            document.getElementById("result").innerHTML="Invalid deposit amount, Please enter the correct input of amount to be deposited";
        }
    },
    withdraw: function(withdrawAmount){
        if(withdrawAmount>0 && withdrawAmount<=this.accountBalance){
            this.accountBalance-=withdrawAmount;
            this.displayDetails();
            document.getElementById("result").innerHTML="Account Balance after withdrawing the amount of "+ withdrawAmount +" is: "+this.accountBalance;
        }
        else{
            document.getElementById("result").innerHTML="Sorry for inconvenience, We're unable to withdraw amount because of insufficient balance";
        }
    },
    checkBalance: function(){
        document.getElementById("result").innerHTML="Account Balance is "+this.accountBalance;
    },
    displayDetails: function(){
        document.getElementById("accountNumber").innerHTML=this.accountNumber;
        document.getElementById("accountHolderName").innerHTML=this.accountHolderName;
        document.getElementById("accountBalance").innerHTML=this.accountBalance;
    }
});
bankAccount.displayDetails();
function deposit(){
    let depositAmount=parseFloat(document.getElementById("inputAmount").value);
    bankAccount.deposit(depositAmount);
    document.getElementById("inputAmount").value = '';
}
function withdraw(){
    let withdrawAmount=parseFloat(document.getElementById("inputAmount").value);
    bankAccount.withdraw(withdrawAmount);
    document.getElementById("inputAmount").value = '';
}
function checkBalance(){
    bankAccount.checkBalance();
}