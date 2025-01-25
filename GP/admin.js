const toggleButton = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

toggleButton.addEventListener("click", () => {
    // Toggle the sidebar visibility
    sidebar.classList.toggle("open");

    // Toggle the main content's shift to the left
    mainContent.classList.toggle("shifted");
});

// Update profile with dynamic data from localStorage
window.onload = function() {
  const username = localStorage.getItem("username"); // Get username from localStorage
  const role = localStorage.getItem("role"); // Get role from localStorage

  // If both values are available, update the profile information
  if (username && role) {
      document.querySelector('.profile-info h3').textContent = username; // Update profile name
      document.querySelector('.profile-info p').textContent = role; // Update role
  } else {
      // If no data found, fallback to default values
      document.querySelector('.profile-info h3').textContent = "Guest User"; 
      document.querySelector('.profile-info p').textContent = "Guest"; 
  }
};


//search
// Get elements
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('#search-input');

// Add event listener to search container to toggle 'open' class on focus
searchInput.addEventListener('focus', () => {
  searchContainer.classList.add('open');
});

// Add event listener to remove 'open' class when input is blurred (search box unfocused)
searchInput.addEventListener('blur', () => {
  if (!searchInput.value) { // Only collapse if the input is empty
    searchContainer.classList.remove('open');
  }
});

// Optional: Allow the search bar to open when the icon is clicked (in case user doesn't focus on input)
document.querySelector('.search-icon').addEventListener('click', () => {
  searchInput.focus();
});
