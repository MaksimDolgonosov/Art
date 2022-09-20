export default function burger() {
    const burgerBtn = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burger-menu");



    burgerBtn.addEventListener("click", () => {
        if (window.screen.availWidth < 992 && burgerMenu.style.display == "none") {
            burgerMenu.style.display = "block";
        } else {
            burgerMenu.style.display = "none";
        }


    });



}