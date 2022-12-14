import sliderVertical from "./modules/sliderVertical";
import feedbackSlider from "./modules/feedbackSlider";
import gift from "./modules/gift";
import tabs from "./modules/tabs";
import pictures from "./modules/pictures";
import styles from "./modules/styles";
import accordion from "./modules/accordion";
import modal from "./modules/modal";
import form from "./modules/form";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import calc from "./modules/calc";
import burger from "./modules/burger";
import scroll from "./modules/scroll";
import drag from "./modules/drag";

let timeout = setTimeout(() => {
    document.querySelectorAll("[data-modal]").forEach(modal => {
        if (getComputedStyle(modal).display == "block") {
            clearTimeout(timeout);
        } else {
            document.querySelector(".popup-consultation").style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

}, 60000);
export { timeout };

window.addEventListener("DOMContentLoaded", () => {
    let calcObj = {};


    new WOW().init();
    sliderVertical(3000);
    feedbackSlider(2000);
    gift();
    tabs();
    pictures();
    styles();
    accordion();
    modal(".button-design", ".popup-design");
    modal(".button-consultation", ".popup-consultation");
    form(calcObj);
    mask("[name='phone']");
    checkTextInputs("[name='name']");
    checkTextInputs("[name='message']");
    calc(calcObj);
    burger();
    scroll();
    drag();    
});

