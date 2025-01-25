// code verification JS
// Get the form and the verification code input field
const form = document.querySelector('form');
const codeInput = document.getElementById('code');  // The input field for the verification code
const submitButton = document.getElementById('submit');

// Function to validate the code input
function validateCode() {
    const code = codeInput.value;
    let errorMessage = '';

    // Check if the code has exactly 6 digits
    if (code.length !== 6) {
        errorMessage = 'The code must be exactly 6 digits.';
    }
    // Check if the code contains only digits
    else if (!/^\d+$/.test(code)) {
        errorMessage = 'The code must contain only numbers.';
    }

    // If there is an error, display a pop-up with the error message
    if (errorMessage) {
        alert(errorMessage);  // Display the error message in a pop-up
        return false;  // Prevent form submission if there's an error
    } else {
        return true;  // If no error, proceed with form submission
    }
}

// Add event listener for the "Next" button to trigger validation
submitButton.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default form submission

    if (validateCode()) {
        // Simulate successful verification (code matching logic would be handled by backend)
        alert("Verification successful. You may proceed to change your password.");
        
        // Redirect to the password change page
        window.location.href = "ChangingPassword.html";  // Replace with the actual next page URL
    }
});

// Restrict code input to only numbers and prevent non-numeric input
codeInput.addEventListener('input', function (e) {
    // Remove any non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');
});