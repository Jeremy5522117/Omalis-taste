
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="asset/css/create-acc.css" />
    <title>Form Validator</title>
    
  </head>
  <body>
    <div class="container" id="signUp">
      <form id="form" class="form" action="create.php" 
      name="myForm" method="post" onsubmit="return validation()">
        <div class="img-log"><img src="asset/images/WhatsApp Image 2024-10-10 at 12.00.19_61691304.jpg" alt="">
        </div>
        
        <h2 class="heading">Create <span>Account</span> </h2>

        <div class="form-control">
          <input type="text" id="firstName" placeholder="First name" name="firstName" />
          <small>Error Message</small>
          <span id="fisnam" class="text-danger font-weight-bold"></span>
         
          
        </div>
        <div class="form-control">
          <input type="text" id="lastName" placeholder="Last name" name="lastName" />
          <small>Error Message</small>
          <span id="lasnam" class="text-danger font-weight-bold"></span>
         
        </div>
       

        <div class="form-control">
          <input type="text" id="email" placeholder="Enter email" name="email" />
          <small>Error Message</small>
          <span id="emal" class="text-danger font-weight-bold">
           
          </span>

       
        </div>

        <div class="form-control">
          <input type="password" id="password" placeholder="Enter password" name="password" />
          <small>Error Message</small>
          <span id="pass1" class="text-danger font-weight-bold"></span>
         
        </div>

        <div class="form-control">
          <input
            type="password"
            id="password2"
            placeholder="Confirm password" name="password2"
          />
          <small>Error Message</small>
          <span id="pass2" class="text-danger font-weight-bold"></span>
         
        </div>


        <button type="submit" class="sign-up" name="signUp" value="sign up" id="submit"> Sign up</button>
       
        <div class="already">Already have an account?<a href="index.php">Login</a></div>
        
      </form>
    </div>

  </body>
  
     <script src="asset/javascript/create-test2.js"></script>  
    <!-- <script src="asset/javascript/create-acc.js"></script>   -->
</html>
