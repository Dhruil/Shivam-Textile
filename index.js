document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});

// Handle navbar toggle animation
const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", () => {
    const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    navbarToggler.setAttribute("aria-expanded", !isExpanded);
});