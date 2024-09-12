function loginFunctionality(){
    const userName="Admin";
    const passWord="Admin@123"; 
    const inputUserName=document.getElementById("inputUserName").value;
    if(inputUserName===userName){
        const inputPassWord=document.getElementById("inputPassWord").value;
        if(inputPassWord===passWord){
            document.write("Login Success");
        }
        else{
            alert("Incorrect username or password");
        }
    }
    else{
        alert("Incorrect username or password");
    }
}
