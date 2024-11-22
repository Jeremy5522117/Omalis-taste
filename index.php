<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="asset/css/login.css" />
    <title>Form Validator</title>
  </head>
  <body>
    <div class="container" id=""signUp>
      <form id="form" class="form" method="post" action="create.php"  onsubmit="return validations()">
        <div class="img-log"><img src="asset/images/WhatsApp Image 2024-10-10 at 12.00.19_61691304.jpg" alt="">
        </div>
        
        <h2 class="heading">Login</h2>

      
       
        <div class="form-control">
          <input type="email" id="email" name="email" placeholder="Enter email" />
          <small>Error Message</small>
          <span>
          
          </span>
        </div>

        <div class="form-control">
          <input type="password" id="password" name="password" placeholder="Enter password" />
          <small>Error Message</small>
          <span id="pass1" class="text-danger font-weight-bold"></span>
        </div>

        <button type="submit" class="sign-up" name="signIn" sigIn> Login</button>
        <div class="already">Don't have an account?<a href="create-acc.php" id="signUpButton">Sign Up</a></div>
        
      </form>
    </div>

    
  </body>
 <!-- <script src="asset/javascript/create-test2.js"></script>   -->
</html>





<!--  PHP CLASS LESSON ONLINE -->
 
 <?php
//session_start();
?> 

 <!--<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="asset/css/login.css" />
    <title>Form Validator</title>
  </head>
  <body>
    <div class="container" id=""signUp>
      <form id="form" class="form" method="post" action="create2.php"  onsubmit="return validations()">
        <div class="img-log"><img src="asset/images/WhatsApp Image 2024-10-10 at 12.00.19_61691304.jpg" alt="">
        </div>
        
        <h2 class="heading">Login </h2>

      
       
        <div class="form-control">
          <input type="email" id="email" name="email" placeholder="Enter email" />
          <small>Error Message</small>
          <span>
          
          </span>
        </div>

        <div class="form-control">
          <input type="password" id="password" name="password" placeholder="Enter password" />
          <small>Error Message</small>
          <span id="pass1" class="text-danger font-weight-bold"></span>
        </div>

        <button type="submit" class="sign-up" name="signIn" sigIn> Login</button>
        <div class="already">Don't have an account?<a href="create-acc.php" id="signUpButton">Sign Up</a></div>
        
      </form>
    </div>

    
  </body>  -->
 <!-- <script src="asset/javascript/create-test2.js"></script>  
</html>
 -->
