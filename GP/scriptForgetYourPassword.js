//script forget password
// Get the form and phone input field
const form = document.querySelector('form');
const phoneInput = document.getElementById('Phone');
const submitButton = document.getElementById('submit');

// Function to validate phone number
function validatePhoneNumber() {
    const phone = phoneInput.value;
    let errorMessage = '';
    
    // Check if the phone number has exactly 11 digits
    if (phone.length !== 11) {
        errorMessage = 'Phone number must be exactly 11 digits.';
    }
    // Check if the phone number contains only digits
    else if (!/^\d+$/.test(phone)) {
        errorMessage = 'Phone number must contain only numbers.';
    }
    // Check if the phone number starts with one of the allowed prefixes
    else if (!/^010|011|012|015/.test(phone)) {
        errorMessage = 'Phone number must start with 010, 011, 012, or 015.';
    }

    // If there is an error, display a pop-up with the error message
    if (errorMessage) {
        alert(errorMessage);  // Display the error message in a pop-up
        return false;  // Prevent form submission if there's an error
    } else {
        return true;  // If no error, proceed with form submission
    }
}

// Add event listener for the "Next" button to trigger validation and navigate
submitButton.addEventListener('click', function () {
    if (validatePhoneNumber()) {
        // Show a pop-up message that the code was sent to the phone number
        alert('Verification code sent to your phone. Please check your SMS.');

        // Redirect to the next page after showing the pop-up message
        window.location.href = "verifyingCode.html";  // Redirect to the verifying code page
    }
});

// Restrict input to only numbers and prevent non-numeric input
phoneInput.addEventListener('input', function (e) {
    // Remove any non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');
});