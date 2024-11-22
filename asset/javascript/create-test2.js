
function validation(){
  const form = document.getElementById('form');
const firstname = document.getElementById('firstName').value;
const lastname = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const password2 = document.getElementById('password2').value;


if (firstname ===""){
document.getElementById('fisnam').innerHTML = "Firstname is required"; 
return false;

}
else if (!isNaN(firstname)){
  document.getElementById('fisnam').innerHTML="Only characters are allowed";
  return false;
}
else if ((firstname.length <= 2) || (firstname.length > 15)){
  document.getElementById('fisnam').innerHTML = "Firstname lenght must be between 3 to 15";
  return false;
}
else{
  document.getElementById('fisnam').innerHTML = "";  
}

if (lastname ===""){
  document.getElementById('lasnam').innerHTML = "Lastname is required";
  return false;
  }
  else if (!isNaN(lastname)){
    document.getElementById('lasnam').innerHTML="Only characters are allowed";
    return false;
  }
  else if ((lastname.length < 2) || (firstname.length > 15)){
    document.getElementById('lasnam').innerHTML = "Lastname lenght must be between 3 and 15";
    return false;
  }
  else{
    document.getElementById('lasnam').innerHTML = "";
  }
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




























