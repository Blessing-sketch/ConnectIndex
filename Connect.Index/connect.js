/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Selecting the buttons by their classes
const loginButton = document.querySelector('.login-btn');
const signupButton = document.querySelector('.signup-btn');

// Adding event listeners to handle button clicks
loginButton.addEventListener('click', function() {
    alert("Login button clicked!");
    // Here you can redirect the user to the login page
    // window.location.href = "/login"; // Uncomment if you have a login page
});

signupButton.addEventListener('click', function() {
    alert("Sign Up button clicked!");
    // Redirect the user to the signup page
    // window.location.href = "/signup"; // Uncomment if you have a signup page
});

// Smooth scrolling to sections
    document.querySelectorAll('.dropdown-content a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Scroll to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });