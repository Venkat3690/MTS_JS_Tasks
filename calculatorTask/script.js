function addition(){
    let op1=parseFloat(document.getElementById("inputOperandOne").value);
    let op2=parseFloat(document.getElementById("inputOperandTwo").value);
    r=op1+op2;
    document.getElementById("result").innerHTML="The addition of the given two numbers:"+r;
}
function subtraction(){
    let op1=parseFloat(document.getElementById("inputOperandOne").value);
    let op2=parseFloat(document.getElementById("inputOperandTwo").value);
    r=op1-op2;
    document.getElementById("result").innerHTML="The addition of the given two numbers:"+r;
}
function multiplication(){
    let op1=parseFloat(document.getElementById("inputOperandOne").value);
    let op2=parseFloat(document.getElementById("inputOperandTwo").value);
    r=op1*op2;
    document.getElementById("result").innerHTML="The addition of the given two numbers:"+r;
}
function division(){
    let op1=parseFloat(document.getElementById("inputOperandOne").value);
    let op2=parseFloat(document.getElementById("inputOperandTwo").value);
    if(op2===0){
        document.getElementById("result").innerHTML="Division between these two given numbers is undefined";
    }
    else{
        r=op1/op2;
        document.getElementById("result").innerHTML="The addition of the given two numbers:"+r;
    }
    
}
function modulus(){
    let op1=parseFloat(document.getElementById("inputOperandOne").value);
    let op2=parseFloat(document.getElementById("inputOperandTwo").value);
    if(op2===0){
        document.getElementById("result").innerHTML="Division between these two given numbers is undefined";
    }
    else{
        r=op1%op2;
        document.getElementById("result").innerHTML="The addition of the given two numbers:"+r;
    }
    
}