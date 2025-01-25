/* Sign In JS */
document.getElementById('signin-button').onclick = function(event) {
    // Prevent form submission
    event.preventDefault();
    
    const email = document.getElementById('uemail').value.trim();
    const password = document.getElementById('upassword').value;

    // Regular expressions for validation
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Optional: restrict to @gmail.com
    const passwordPattern = /^(?=.*[0-9]).{6,}$/; // At least 6 characters and one number

    // Check for empty fields
    if (!email) {
        alert('Please fill in your Username.');
        document.getElementById('uemail').focus();
        return;
    }

    if (!gmailPattern.test(email)) {
        alert("Email must contain @gmail.com.");
        document.getElementById('uemail').focus();
        return;
    }

    if (!password) {
        alert('Please fill in your password.');
        document.getElementById('upassword').focus();
        return;
    }

    // Validate password constraints
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters long and contain at least one number.");
        document.getElementById('upassword').focus();
        return;
    }

    // If all validations pass
    window.location.href = 'HomePage.html';
};