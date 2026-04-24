var menuToggle = document.querySelector("#menuToggle")
var navLinks = document.querySelector("#navLinks")

menuToggle.addEventListener (
 "click" ,
 function () {
  navLinks.classList.toggle("active");
 }
)

// footer
document.querySelector("#year").innerText = new Date().getFullYear();