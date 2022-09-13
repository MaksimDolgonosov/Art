import sliderVertical from "./modules/sliderVertical";
import feedbackSlider from "./modules/feedbackSlider";
import gift from "./modules/gift";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
    new WOW().init();
    sliderVertical(3000);
    feedbackSlider(2000);
    gift();
    tabs();
});