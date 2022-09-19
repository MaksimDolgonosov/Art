export default function burger() {
    const burgerBtn = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burger-menu");
    console.log(window.innerWidth);

    if (window.innerWidth < 992) {
        burgerMenu.style.display = "block";
    } else {
        burgerMenu.style.display = "none";
    }

}