const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const sub = document.getElementById('submit');

//show error function
function showError (input, message){
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}

//show success
function showSuccess(input){
formControl = input.parentElement;
formControl.className = 'form-control success';
}
function checkEmail(input){
  const re = /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
  if(re.test(input.value.trim())){
    showSuccess(input)
  }else{
    showError(input, "Email is not valid")
  }
}

//check required function
function checkRequired(inputArr){
  inputArr.forEach(function (input){
   if (input.value.trim() === ''){
    showError(input, `${getFieldName(input)} is Required`);
   }
   else{
    showSuccess(input);
  }
  });
}


//check input length

function checkLength(input, min, max){
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
}

//check password matcch
function checkPasswordMatch(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, "Password do not match")
  }
  
}

//get field name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listenetrs
form.addEventListener('submit', function (e) {
   e.preventDefault();
  //SHORT CUT
checkRequired([firstname, lastname, email, password,password2])
// checkLength(username, 5, 15 );
checkLength(password,6,25);
checkEmail(email);
checkPasswordMatch(password, password2);

if (username.value === ''){
    showError(username, 'username is required');
    
  }
else {
  showSuccess(username)

};

if (email.value === ''){
  showError(email, 'Email is required');
}
else if (!isValidEmail(email.value)){
  showError(email, 'Email is not valid')
}
else {
showSuccess(email)
}

if (password.value === ''){
  showError(password, 'Password is required');
}
else {
showSuccess(password)
}


if (password2.value === ''){
  showError(password2, 'Password2 is required');
}
else {
showSuccess(password2)
}
})

