/* ===== MOBILE NAVIGATION ===== */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create a menu button for mobile screens
const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.className = "menu-button";
menuButton.setAttribute("aria-label", "Toggle navigation");
menuButton.setAttribute("aria-expanded", "false");

navbar.insertBefore(menuButton, navLinks);

// Toggle the navigation menu
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

/* ===== AUTOMATIC COPYRIGHT YEAR ===== */

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Dinesh S. All rights reserved.`;
}

console.log("Dinesh's portfolio JavaScript loaded successfully!");
