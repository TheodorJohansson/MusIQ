/*document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
    const fadeLayer = document.querySelector(".fade-layer");


    // Visa menyn och fade-layer
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("show");
        fadeLayer.classList.toggle("visible");
    });

    // Dölj menyn och fade-layer
    fadeLayer.addEventListener("click", () => {
        menu.classList.remove("show");
        fadeLayer.classList.remove("visible");
    });
}); */

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
}
