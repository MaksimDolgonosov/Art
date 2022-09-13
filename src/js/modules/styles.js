export default function styles() {
    const stylesBtn = document.querySelector(".button-styles");
    const allWorks = document.querySelectorAll("#styles .row > div");

    stylesBtn.addEventListener("click", () => {
        allWorks.forEach(work => {
            work.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
            work.classList.add("faded", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        });
        stylesBtn.remove();
    });
}