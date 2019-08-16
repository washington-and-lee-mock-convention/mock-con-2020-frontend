// When the user scrolls the page, execute myFunction
window.onscroll = function() {navbarStyles()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
/*var sticky = navbar.offsetTop;*/

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarStyles() {
  if (window.pageYOffset >= 400) {
    navbar.classList.add("sticky");
    navbar.style.color.add("white");
  } else {
    navbar.classList.remove("sticky");
  }
}
