//script change password
// Get the password and re-password input fields
const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('re-password');
const submitButton = document.getElementById('submit');

// Function to validate password
function validatePassword() {
    const password = passwordInput.value;
    let errorMessage = '';

    // Check if the password is empty
    if (!password) {
        errorMessage = 'Password field cannot be empty.';
    }
    // Check if password is at least 6 characters long
    else if (password.length < 6) {
        errorMessage = 'Password must be at least 6 characters long.';
    }
    // Check if password contains at least one number
    else if (!/\d/.test(password)) {
        errorMessage = 'Password must contain at least one number.';
    }

    if (errorMessage) {
        alert(errorMessage);  // Show an error message if password is invalid
        return false;  // Prevent form submission
    }

    return true;  // Password is valid
}

// Function to validate re-enter password
function validateRePassword() {
    const password = passwordInput.value;
    const rePassword = rePasswordInput.value;
    let errorMessage = '';

    // Check if re-password is empty
    if (!rePassword) {
        errorMessage = 'Re-enter password field cannot be empty.';
    }
    // Check if re-entered password matches the password
    else if (password !== rePassword) {
        errorMessage = 'The passwords do not match. Please enter the same password.';
    }

    if (errorMessage) {
        alert(errorMessage);  // Show an error message if re-password is invalid
        return false;  // Prevent form submission
    }

    return true;  // Re-entered password is valid
}

// Add event listener for the "submit" button
submitButton.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default form submission

    if (validatePassword() && validateRePassword()) {
        // If both password and re-password are valid, show success message (you can customize this)
        alert('You have changed your password sucessfully!');
        // Proceed with form submission or page redirection
         window.location.href = "HomePage.html";  // Redirect to next page after successful validation
    }
});