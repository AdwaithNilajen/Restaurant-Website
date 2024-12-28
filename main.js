let cart = [];

// Function to add items to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const item = this.getAttribute('data-item');
        const price = parseFloat(this.getAttribute('data-price'));

        // Add item to cart
        cart.push({ item, price });

        // Update cart count in the UI
        updateCartCount();
    });
});

// Function to update the cart count
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;

    // Optional: You can also add functionality to show cart details or implement checkout functionality.
}

// Example function to view cart items (optional)
function viewCart() {
    const cartDetails = cart.map(item => `${item.item} - $${item.price.toFixed(2)}`).join('<br>');
    alert(`Cart Contents:\n\n${cartDetails}`);
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear all items in the cart
    updateCartCount(); // Update the cart count
    alert('Your cart has been cleared!'); // Show a confirmation message
}

// Cart button click event listener (optional functionality)
document.getElementById('cart-btn').addEventListener('click', function () {
    viewCart();
});

// Optional: You can also add a "clear cart" button functionality
document.getElementById('clear-cart-btn').addEventListener('click', function () {
    clearCart();
});

document.querySelector('.reservation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const partySize = document.getElementById('party-size').value;
    const date = document.getElementById('reservation-date').value;
    const time = document.getElementById('reservation-time').value;

    alert(`Reservation Details:\nParty Size: ${partySize}\nDate: ${date}\nTime: ${time}`);
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with ${email}!`);
    document.getElementById('contact-form').reset();
});

// JavaScript for Scroll-to-Top Functionality

// document.querySelector('.back-to-top').addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // Smooth scrolling
//     });
// });