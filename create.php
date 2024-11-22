 <?php 
include 'connection.php';


if(isset($_POST['signUp'])){
  $firstName=trim($_POST['firstName']);
  $lastName=trim($_POST['lastName']);
  $email=$_POST['email'];
  $password=$_POST['password'];
  $password=md5($password);
   

 $checkEmail = "SELECT * From users where email =  '$email'";
$result = $conn->query($checkEmail);


 
  $insertQuery="INSERT INTO users(firstName,lastName,email,password) VALUES ('$firstName','$lastName','$email','$password' )";
  
  if($result->num_rows>0){

     '<script> alert("Welcome to goat")</script>';
    return false;
 }
  if($conn->query($insertQuery)==TRUE){
    header("location: index.php");
  }
  else{
    echo "Error:" .$conn->error;
  };
 
  
}






if (isset($_POST['signIn'])){

  $email=$_POST['email'];
  $password=$_POST['password'];
  $password=md5($password);


  $sql = "SELECT * FROM users WHERE email = '$email' and password='$password' ";
  
  $checkEmail = "SELECT * From users where email =  '$email'";
$result = $conn->query($checkEmail);

  $result =$conn->query($sql);

  if($result->num_rows>0){
    session_start();
    $row=$result->fetch_assoc();
    $_SESSION['email']=$row['email'];
    header("Location: homepage.php");
    exit();
  }
  else if($email === ""){
    echo "Invalid email";
   }
 
 else if($email === $result->num_rows){
    // echo "Invalid email";
    echo  "Can't find user with this email";
    
   }
  
   else if ((empty($_POST['password'])) || ($_POST['password']=='') ||
  ($_POST['password']===null) ) {
 
  // echo "Password is required";
  echo "password is required";
  }
  else{
    echo "Incorrect email or password";
  }
  
   
} 







































//I used javascript instead of this php validation, the code above is the one for saver connection

// if(isset($_POST['signUp'])){
//   $firstName=trim($_POST['firstName']);
//   $lastName=trim($_POST['lastName']);
//   $email=$_POST['email'];
//   $password=$_POST['password'];
//   $password=md5($password);
  


//   // $firstnameErr ="";
//   // $lastnameErr = "";
//   // $emailErr = "";
//   // $password1Err ="";
//   //  $password2Err = "";
//  $checkEmail = "SELECT * From users where email =  '$email'";
//  $result = $conn->query($checkEmail);
 
//  if(!preg_replace('/\s+/', ' ', $firstName) || !preg_match("/^[a-zA-Z ]*$/", $firstName)){
//    $firstnameErr =  "Firstname is required ";
//  }
//   if(!preg_replace('/\s+/', ' ', $lastName) || !preg_match("/^[a-zA-Z ]*$/", $lastName)){
//    $lastnameErr =  "Lastname is required ";
//  }
 
//  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
//       $emailErr =   "Invalid email format ";
//      }
 
//  if($result->num_rows>0){
//    $emailErr = "Email Address Already Exists !";
//  }
 
  
//   if ((empty($_POST['password'])) || ($_POST['password']=='') ||
//   ($_POST['password']===null) ) {
 
//   $password1Err = "Password id required";
//   }
//  else{
//    $insertQuery="INSERT INTO users(firstName,lastName,email,password) VALUES ('$firstName','$lastName','$email','$password' )";
//    if($conn->query($insertQuery)==TRUE){
//      header("location: index.php");
//    }
//    else{
//      echo "Error:" .$conn->error;
//    }
//  };
// }


// if (isset($_POST['signIn'])){

//   $email=$_POST['email'];
//   $password=$_POST['password'];
//   $password=md5($password);

//   $sql = "SELECT * FROM users WHERE email = '$email' and password='$password' ";

//   $result =$conn->query($sql);
//   if($result->num_rows>0){
//     session_start();
//     $row=$result->fetch_assoc();
//     $_SESSION['email']=$row['email'];
//     header("Location: homepage.php");
//     exit();
//   }

//   else {
//     echo "Not Found, Incorrect Email or Password";
//   }
// }


?>  