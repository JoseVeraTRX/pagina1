document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector("header").style.backgroundColor = "#007bff";
        });
    });
});
