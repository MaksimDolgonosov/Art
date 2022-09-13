export default function tabs() {
    const portfolioMenu = document.querySelector(".portfolio-menu");
    const portfolioMenuItems = document.querySelectorAll(".portfolio-menu li");
    const portfolioWrapper = document.querySelector(".portfolio-wrapper");
    const all = portfolioWrapper.querySelectorAll(".all");
    const noPorfolio = document.querySelector(".portfolio-no");

    // all.forEach(picture => {
    //     picture.classList.add("animated", "fadeIn");
    // });
    showPictureByClass("all");
    function removeActiveClass() {
        portfolioMenuItems.forEach(item => {
            item.classList.remove("active");
        });
    }

    function removeAllPictures() {
        all.forEach(picture => {
            picture.style.display = "none";
            picture.classList.remove("animated", "fadeIn");
            picture.classList.add("animated", "fadeOut");

        });
        noPorfolio.style.display = "none";
    }

    function showPictureByClass(classSelector) {
        if (classSelector == "grandmother" || classSelector == "granddad") {
            noPorfolio.style.display = "block";
        } else {
            portfolioWrapper.querySelectorAll(`.${classSelector}`).forEach(item => {
                item.classList.remove("animated", "fadeOut");
                item.classList.add("animated", "fadeIn");
                item.style.display = "block";
            });
        }

    }

    portfolioMenu.addEventListener("click", e => {
        portfolioMenuItems.forEach((item, i) => {
            if (e.target && e.target == item) {
                removeActiveClass();
                portfolioMenuItems[i].classList.add("active");
                removeAllPictures();
                showPictureByClass(e.target.classList.item(0));
            }
        });
    });

}