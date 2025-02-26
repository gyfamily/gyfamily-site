document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("menu-btn");

    document.querySelector("header").prepend(toggleButton);

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});
