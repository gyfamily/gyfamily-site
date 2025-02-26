document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("menu-btn");

    document.querySelector("header").prepend(toggleButton);

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    // Анимации при скролле
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
