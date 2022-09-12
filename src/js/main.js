import sliderVertical from "./modules/sliderVertical";
import feedbackSlider from "./modules/feedbackSlider";


window.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    sliderVertical(3000);
    feedbackSlider(2000);
});