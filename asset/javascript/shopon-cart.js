        // Get references to the cart items list and clear cart button
        const cartItemsList = document.getElementById('cartItems');
        const clearCartButton = document.getElementById('clearCart');
        const emptyCartMessage = document.getElementById('emptyCartMessage');
    
        // Retrieve the cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Display the cart items
        if(cart.length > 0){
            cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item;
          cartItemsList.appendChild(listItem);
        });
        }else{
          emptyCartMessage.style.display = 'block'
        }
      
    
        // Clear cart functionality
        clearCartButton.addEventListener('click', () => {
          localStorage.removeItem('cart'); // Clear the cart from localStorage
          cartItemsList.innerHTML = '';   // Clear the displayed list
          alert('Cart cleared!');
        });