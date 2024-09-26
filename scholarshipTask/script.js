function checkEligibility(){
    var studentName=document.getElementById("inputStudentName").value;
    var sgpa=parseFloat(document.getElementById("inputSgpa").value);
    var semester=parseInt(document.getElementById("inputSemester").value);
    if(sgpa>=7.5 && semester<12){
        document.getElementById("result").innerHTML="The student named "+studentName+" studying the semester "+semester+" is eligible to attain scholarship for the next semester i.e., "+(semester+1);
    }
    else{
        if(semester<12){
            document.getElementById("result").innerHTML="The student named "+studentName+" studying the semester "+semester+" is NOT eligible to gain the scholarship for the next semester i.e., "+(semester+1);
        }
        else{
            document.getElementById("result").innerHTML="Enter the valid number of semester studying.";
        }
    }
}