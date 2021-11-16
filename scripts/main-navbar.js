const menuBars = document.querySelector(".menu-bars");
const exitMenuBtn = document.querySelector(".exit-menu");
const navbarContainer = document.querySelector(".navbar-container");

const toggleMenu = () => {

    const overlay = navbarContainer.style.height;
    
    if (overlay === "0%" || overlay === ""){
        navbarContainer.style.height = "100%";      
    } else {
        navbarContainer.style.height = "0%";   
    }
};

menuBars.addEventListener("click", toggleMenu);
exitMenuBtn.addEventListener("click", toggleMenu);