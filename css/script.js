// Show a welcome message
alert("Welcome to SUIGENERIS Online Store!");

// Example of DOM manipulation
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.style.color = "#007bff";
        heading.innerText = "Welcome to SUIGENERIS Store - Enjoy Your Shopping!";
    }
});
