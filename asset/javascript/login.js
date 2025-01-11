
function validations(){
  const form = document.getElementById('form');

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


  if (email === ""){
    document.getElementById('emal').innerHTML = "Email is required";
    return false;
  }
  else if (email.indexOf('@') <= 0){
    document.getElementById('emal').innerHTML = "@ Invalid email"
    return false;
  }
  else if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!= '.')){
    document.getElementById('emal').innerHTML = ". Invalid email";
    return false;  
  }
  else{
    document.getElementById('emal').innerHTML = "";
  }
 
  if(password === ''){
    document.getElementById('pass1').innerHTML = "Password is required";
    return false;
  }
  else if(password.length < 6){
    document.getElementById('pass1').innerHTML = "Password must be at least 6 characters";
    return false;
  }
  else{
    document.getElementById('pass1').innerHTML = "";
  }
   if(password2 !==password){
    document.getElementById('pass2').innerHTML = "Password do not match";
    return false;
  }
  else{
  
      document.getElementById('pass2').innerHTML = "";
  }
  

};



//pass1
//pass2




























