
// Get the Add to Cart buttons and cart counter
const addToCartButtons = document.querySelectorAll('.addToCart');

//function to update the cart counter
function updateCartCounter(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length > 0) {
    cartCounter.textContent = cart.length; // Update counter with the number of items
    cartCounter.style.display = 'block'; // Show the counter
  } else {
    cartCounter.style.display = 'none'; // Hide the counter if no items
  }
}

// Add event listener for each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const group = button.parentElement; // Parent container
    const selectedItem = group.querySelector('input[type="radio"]:checked');

    if (selectedItem) {
      const itemName = selectedItem.value; // Get the item name
      const itemPrice = parseFloat(selectedItem.getAttribute('data-price')); // Get the item price

      // Get existing cart items from localStorage or initialize an empty array
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the selected item to the cart array
      cart.push({ name: itemName, price: itemPrice });

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      //upadate the cart counter
      updateCartCounter();

      alert(`${itemName} (#${new Intl.NumberFormat('en-US').format(itemPrice)}) added to the cart!`);
    } else {
      alert('Please select an item before adding to the cart.');
    }
  });
});
    // Initial cart counter update
    updateCartCounter();