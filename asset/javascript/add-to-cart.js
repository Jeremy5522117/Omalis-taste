function fn1(){

  let rd1 = document.getElementById("option-1");
  let rd2 = document.getElementById("option-2");
  let rd3 = document.getElementById("option-3");
  let rd4 = document.getElementById("option-4");

  if(rd1.checked==true)
    {console.log(rd1.value + " is added to cart");}
  else if(rd2.checked==true)
    {alert(rd2.value +" is added to cart");}
  else if(rd3.checked==true)
    {alert(rd3.value +" is added to cart");}
  else if(rd4.checked==true)
    {alert(rd4.value +" is added to cart");}

  else{
    alert("Value is empty")
  }
  
}