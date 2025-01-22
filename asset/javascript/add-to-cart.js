
// Get the Add to Cart buttons and cart counter
const addToCartButtons = document.querySelectorAll('.addToCart');

const successMessagesContainer = document.getElementById('successMessages');

const updateCouter = document.getElementById('cartCounter');

//function to update the cart counter
function updateCartCounter(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart.length > 0) {
    updateCouter.textContent = cart.length; // Update counter with the number of items
    updateCouter.style.display = 'block'; // Show the counter

    // Save the updated cart back to localStorage
    // Save the updated cart back to localStorage
    localStorage.setItem('cartCounter', JSON.stringify(cartCounter));
  } else {
    updateCouter.style.display = 'block'; // Hide the counter if no items
  }
}

  // Function to display the success message
  function displaySuccessMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('successful-message');
    messageElement.textContent = message;

    successMessagesContainer.appendChild(messageElement);

    // Remove the message after 3 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 3000);
  }

// Add event listener for each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
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

       // Display success message
       displaySuccessMessage(`${itemName} has been successfully added to the cart!`);

    } else {
      alert('Please select an item before adding to the cart.');
    }
  });
});
    // Initial cart counter update
    updateCartCounter();