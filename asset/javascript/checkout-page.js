   // Retrieve and display the total amount from localStorage
   const totalAmount = localStorage.getItem('totalAmount');
   const displayTotalElement = document.getElementById('totalItm');
   const subTotal = document.getElementById('sub-total')

   if (totalAmount) {
     const formattedTotal = new Intl.NumberFormat('en-US').format(totalAmount);
     displayTotalElement.textContent = ` #${formattedTotal}`;
     subTotal.textContent = `#${formattedTotal}`
   } else {
     displayTotalElement.textContent = 'No items in the cart.';
   }