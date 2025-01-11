// Function to initialize the Add to Cart functionality
function initializeAddToCart() {
  // Get all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.addToCart');

  // Add event listeners to each button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Find the selected radio button in the same group as the clicked button
      const group = button.parentElement; // Parent container
      const selectedItem = group.querySelector('input[type="radio"]:checked');

      if (selectedItem) {
        // Get the value of the selected item
        const itemValue = selectedItem.value;

        // Get existing cart items from localStorage or initialize an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the selected item to the cart array
        cart.push(itemValue);

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${itemValue} added to the cart!`);
      } else {
        alert('Please select an item before adding to the cart.');
      }
    });
  });
}

// Initialize the Add to Cart functionality
initializeAddToCart();