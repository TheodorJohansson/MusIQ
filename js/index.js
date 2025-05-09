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
    const menu = document.querySelector("#menu");
    
    menu.classList.toggle("open");
    const fadelayer = document.querySelector(".fadelayer");
    fadelayer.classList.toggle("open");
    fadelayer.classList.toggle("visible");

    // if (menu.classList.contains("open")){
    //     menu.style.display = "block";
    //     fadelayer.style.display = "block";
    // } else {
    //     menu.style.display = "none";
    //     fadelayer.style.display = "none";
    // }

}
