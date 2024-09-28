// Get the navbar
const navbar = document.getElementById("navbar");

// Function to change the navbar style when scrolling
window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
