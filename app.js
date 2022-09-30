function validation(){
    
    var user = document.getElementById('user').value;
    var last = document.getElementById('last').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
    var emails = document.getElementById('emails').value;


    if(user == ""){
        document.getElementById('firstname').innerHTML =" ** Please fill the first name field"
        return false;
    }
    if((user.lenght <=2) || (user.lenght>10)){
        document.getElementById('firstname').innerHTML =" ** user lenght must be between 2 and 10"
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('firstname').innerHTML ="** only characters are allowed "
        return false;
    }
    if(last == ""){
        document.getElementById('lastname').innerHTML =" ** Please fill the last name field"
        return false;
    }
    if((last.lenght <=2) || (user.lenght>20)){
        document.getElementById('lastname').innerHTML =" ** user lenght must be between 2 and 20"
        return false;
    }
    if(!isNaN(last)){
        document.getElementById('lastname').innerHTML ="** only characters are allowed "
        return false;
    }
    if(mobilenumber == ""){
        document.getElementById('mobileno').innerHTML =" ** Please fill the first name field"
        return false;
    }
    if(isNaN(mobilenumber)){
        document.getElementById('mobileno').innerHTML =" ** user must be write digits only not characters"
        return false;
    }
    if(mobilenumber.lenght!=10){
        document.getElementById('mobileno').innerHTML =" ** Mobile number must be 10 digits only"
        return false;
    }
    if(emails == ""){
        document.getElementById('emailids').innerHTML =" ** Please fill the first name field"
        return false;   
    }
    if(emails.indexOf('@')<=0){
        document.getElementById('emailids').innerHTML =" ** @ invalid position"
        return false;
    }
    if((emails.chartAt(emails.lenght-4)!='.') && (emails.chartAt(emails.lenght-3)!='.')){
        document.getElementById('emailids').innerHTML =" ** . invalid position"
        return false;
    }
}