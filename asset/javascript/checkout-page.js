   // Retrieve and display the total amount from localStorage
   const totalAmount = parseFloat(localStorage.getItem('totalAmount'));
   const displayTotalElement = document.getElementById('totalItm');
   const deliveryFee  = document.getElementById('deliveryCost')
   const updateCounter = document.getElementById('updateItm');
   const subTotal = document.getElementById('sub-total')

   const deliveryCost = 769;
   const costWithDeliveryFee = totalAmount + deliveryCost;

   displayTotalElement.style.fontSize = '0.9rem';
   deliveryFee.style.fontSize = '0.9rem';
   // Retrieve the cart items from localStorage
   let cart = JSON.parse(localStorage.getItem('cart')) || [];

   if (totalAmount) {
    updateCounter.textContent = cart.length
     const formattedTotal = new Intl.NumberFormat('en-US').format(totalAmount);
     const formattedTo = new Intl.NumberFormat('en-US').format(costWithDeliveryFee);
     displayTotalElement.textContent = ` # ${formattedTotal}`;
     deliveryFee.textContent = `# ${deliveryCost}`
     subTotal.textContent = `# ${formattedTo}`;
     
   } else {
     displayTotalElement.textContent = 'No items in the cart.';
   }


  
      // // Retrieve and display the total amount from localStorage
      //  const totalAmount = parseFloat(localStorage.getItem('totalAmount'));
      //  const displayTotalElement = document.getElementById('totalItm');
      //  const deliveryCost = document.getElementById('deliveryCost');
      //  const subTotal = document.getElementById('sub-total');


      //  const deliveryFee  = 785;
      //  //calculate total with delivery fee
      //  const totalWithDelivery = totalAmount + deliveryFee;
       
      //    function formatPrice(price){
      //     return new Intl.NumberFormat('en-US').format(price);
      //    } 
         
    
      //        // Display the values
      //    displayTotalElement.textContent = `# ${ formatPrice(totalAmount)}`;
      //   deliveryCost.textContent = `# ${formatPrice(deliveryFee)}`
      //   subTotal.textContent = `# ${formatPrice(totalWithDelivery)}`;