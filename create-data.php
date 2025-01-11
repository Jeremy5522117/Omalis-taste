<?php 
include 'connection.php';


if(isset($_POST['submit'])){
  $firstName=trim($_POST['firstname']);
  $lastName=trim($_POST['lastname']);
  $email=$_POST['email'];
  $password=$_POST['password'];
  $password = md5($password);
  $password2=$_POST['password2'];
  $password2 = md5($password2);

   $checkEmail = "SELECT * From users where email =  '$email'";

  $result = $conn->query($checkEmail);

    $insertQuery="INSERT INTO users(firstName,lastName,email,password) VALUES ('$firstName','$lastName','$email','$password' )";


  $errorEmpty = false;
  
  $errorEmail = false;

  
    
   

  if(empty($firstName)||empty($lastName)||empty($email)||empty($password)||empty($password2)){
    echo"<span class='form-errer'>Fill in all field</span>";
    $errorEmpty = true;
  }
  elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo"<span class='form-errer'>Invalid email Address</span>";
    $errorEmpty = true;
  }
  elseif($result->num_rows>0){
    echo"<span class='form-errer'>Email already exist</span>";
    $errorEmpty = true;
}
  elseif($password !== $password2){
    echo"<span class='form-errer'>Incorrect confirm password</span>";
    $errorEmpty = true;
  }
  else{
     $conn->query($insertQuery);
    echo"<span class='form-succ'>Registeration successful, Please login!</span>";
    $errorEmpty = true;
  }


   
} 


else{
  echo "there was an error";
}

?>    
 <script>
$("#firstName, #lastName, #email, #password, #password2").removeClass("input-error");

  var errorEmpty = "<?php echo $errorEmpty; ?>";
  var errorEmail = "<?php echo $errorEmail; ?>";


  if(errorEmpty == true){
    $("#firstName, #lastName, #email, #password, #password2").addClass("input-error");
  }

  if(errorEmail == true){
    $("#email").addClass("input-error");
  }
  if(errorEmpty == false && errorEmail == false){
    $("#firstName, #lastName, #email, #password, #password2").val("")
  }

 </script>