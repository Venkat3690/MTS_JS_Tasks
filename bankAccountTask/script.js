function bankAccount(){
    const bankAccount=new Object({
        accountNumber:document.getElementById().value,
        accountHolderName:document.getElementById().value,
        accountBalance:0,
        deposit: function(){
            let depositAmount=document.getElementById().value;
            this.accountBalance+=depositAmount;
            document.getElementById().innerHTML="Account Balance after depositing the amount of "+ depositAmount+" is: "+this.accountBalance;
        },
        withdraw: function(){
            let withdrawAmount=document.getElementById().value;
            if(withdrawAmount>this.accountBalance){
                document.getElementById().innerHTML="Sorry for inconvenience, We're unable to withdraw amount because of insufficient balance";
            }
            else{
                this.accountBalance-=withdrawAmount;
                document.getElementById().innerHTML="Account Balance after withdrawing the amount of "+ withdrawAmount +" is: "+this.accountBalance;
            }
        },
        checkBalance: function(){
            document.getElementById().innerHTML="Account Balance is: "+this.accountBalance;
        }

    });
}