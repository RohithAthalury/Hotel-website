// If using Formspree, you don't need the alert. You can leave this file empty or remove it.
// If you prefer to keep a thank-you message, you can use the following code:

document.getElementById('form').addEventListener('submit', function(event) {
    // Optional: Add custom behavior after form submission
    // For example, show a thank-you message
    alert('Thank you for your booking! We will contact you shortly.');
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from submitting the usual way

    // Display a success message
    document.getElementById('success-message').style.display = 'block';

    // Optionally, clear the form fields
    document.getElementById('form').reset();
});
