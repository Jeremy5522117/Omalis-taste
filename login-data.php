<?php 
session_start();
require ('connection.php');



  
  $email=$_POST['email'];
  $password=$_POST['password'];
  $password = md5($password);

  $sql = "SELECT * FROM users WHERE email = '$email' and password='$password' ";
  
  $checkEmail = "SELECT * From users where email =  '$email'";
$result = $conn->query($checkEmail);

  $result =$conn->query($sql);


  // $errorEmpty = false;
  
  // $errorEmail = false;
  
    if($result->num_rows>0){

      $row=$result->fetch_assoc();
    $_SESSION['email']=$row['email'];
    echo json_encode(array("status"=>1, "msg"=>"Login successful"));
      
    }
 
    else{
      echo json_encode(array("status"=>0, "msg"=>"Login faield"));
    }


   
 

?>    
 <!-- <script>
$(" #email, #password").removeClass("input-error");

  var errorEmpty = "<?php echo $errorEmpty; ?>";
  var errorEmail = "<?php echo $errorEmail; ?>";


  if(errorEmpty == true){
    $(" #email, #password").addClass("input-error");
  }

  if(errorEmail == true){
    $("#email").addClass("input-error");
  }
  if(errorEmpty == false && errorEmail == false){
    $("#email, #password").val("")
  }

 </script> -->













<?php
// require_once ('connection.php');


//   $firstname=mysqli_real_escape_string($conn, $_POST['firstname']);
//   $lastname=mysqli_real_escape_string($conn, $_POST['lastname']);
//   $email=mysqli_real_escape_string($conn,$_POST['email']);
//   $password=mysqli_real_escape_string($conn, $_POST['password']);
 

//   $insertQuery=mysqli_query($conn, "INSERT INTO users set firstname = '$firstname', lastname = '$lastname, email = '$email', password = '$password'") ;
//   if($insertQuery>0){
//     echo "Registration successfully";
//   }
//   else{
//      echo " Error!";
//   }









?>