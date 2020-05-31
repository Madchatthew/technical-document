var navbarToggle = document.querySelector("#navbarToggle");
var nav = document.querySelector("nav");
var navShow = document.querySelector(".navShow");

navbarToggle.addEventListener("click", function() {
    nav.classList.toggle("navShow");
});

// This is here to make the menu disappear after clickin on one of the links in the menu.

nav.addEventListener("click", function() {
    nav.classList.remove("navShow");
});