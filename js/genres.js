function toggleMenu() {
    const menu = document.querySelector("#menu");
    
    menu.classList.toggle("open");
    const fadelayer = document.querySelector(".fadelayer");
    fadelayer.classList.toggle("open");
    fadelayer.classList.toggle("visible");
}