    const cartItemsList = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const totalAmountElement = document.getElementById('totalAmount');
    const clearCartButton = document.getElementById('clearCart');
    const showCheckOut = document.getElementById('footer-display');
    
    const changemessage = document.getElementById('cont')
    

    // Retrieve the cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


 // Function to format price with a comma instead of a decimal
    function formatPrice(price) {
      return new Intl.NumberFormat('en-US').format(price) ;
    }
    //function to calculate the total price

    function calculateTotal(){
      let total = 0;
      cart.forEach(item=>{
        total += item.price;
      });

      return total.toFixed(2);
    }

    

    // Function to display cart items
    function displayCart() {
      cartItemsList.innerHTML = ''; // Clear the list
      if (cart.length > 0) {
        
        emptyCartMessage.style.display = 'none'; // Hide empty message

        clearCartButton.style.display = 'block'// show clear cart button
        changemessage.innerHTML = 'Back to Shopping';

        showCheckOut.style.display = 'block';

        

         //Show back to shopping
        cart.forEach((item, index) => {
          const listItem = document.createElement('li');
          
          listItem.textContent = `${item.name} - #${formatPrice(item.price)}`; // Format price with a comma

          // Create a "Remove" button
          const removeButton = document.createElement('button');
          removeButton.style.backgroundColor = 'none';
          removeButton.style.color = '#d32100';
          removeButton.style.border = 'none';
          removeButton.style.borderRadius = '5PX';
          removeButton.style.width = '60px';
          removeButton.style.marginLeft= '400px';
          removeButton.style.height = '24px'
          removeButton.style.fontSize = '0.8rem'
          removeButton.textContent = 'Remove';
          removeButton.style.marginLeft = '10px';
          removeButton.addEventListener('click', () => {
            removeFromCart(index);
          });

          // Append the item and remove button to the list
          listItem.appendChild(removeButton);
          cartItemsList.appendChild(listItem);
        });

        //Update total price
        totalAmountElement.textContent = formatPrice(calculateTotal());

        showCheckOut.textContent = "Checkout " + ' (#' + formatPrice(calculateTotal()) + ')';
       // Store the total amount in localStorage for use in the payment page
       localStorage.setItem('totalAmount', calculateTotal())
      } else {
        emptyCartMessage.style.display = 'block'; // Show empty message
        totalAmountElement.textContent = '0'; //reset total to 0
      }
    }

     // Event listener for the checkout button
     showCheckOut.addEventListener('click', () => {
      // Save total amount to localStorage
      window.location.href = 'checkout-page.html'; // Navigate to the payment page
    });

    // Function to remove an item from the cart
    function removeFromCart(index) {
      cart.splice(index, 1); // Remove the item at the specified index
      localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
      displayCart(); // Refresh the cart display
    }

    // Clear cart functionality
      clearCartButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear the cart?')) {
        localStorage.removeItem('cart'); // Clear the cart from localStorage
        location.reload(); // Reload the page to reflect the cleared cart
      }
    });

    // Initial display of the cart
    displayCart();

  







    