export default function sliderVertical(time) {
    let mainSlider = document.querySelector(".main-slider");
    // let mainSliderWrapper = document.querySelector(".main-slider-wrapper");
    let mainSliderItems = document.querySelectorAll(".main-slider-item");
    let interval;
    let positionSlide = 0;

    showNextSlide(positionSlide);

    function showNextSlide(i) {
        mainSliderItems.forEach(item => {
            mainSliderItems[i].classList.add("animated");
            item.style.display = "none";
            mainSliderItems[i].classList.add("slideInDown");
        });
        mainSliderItems[i].style.display = "block";
    }


    function showSlide() {
        positionSlide++;
        if (positionSlide > (mainSliderItems.length - 1)) {
            positionSlide = 0;
        }
        showNextSlide(positionSlide);
    }
    interval = setInterval(showSlide, time);


mainSlider.addEventListener("mouseover", ()=>{
    clearInterval(interval);
});
mainSlider.addEventListener("mouseout", ()=>{
    interval = setInterval(showSlide, time);
});

    // let mainSlider = document.querySelector(".main-slider");
    // let mainSliderWrapper = document.querySelector(".main-slider-wrapper");
    // let mainSliderItem = document.querySelector(".main-slider-item");
    // let mainSliderItems = document.querySelectorAll(".main-slider-item");
    // let height = window.getComputedStyle(mainSliderItem).height;
    // let offset = 0;

    // mainSlider.style.height = window.getComputedStyle(mainSliderItem).height;
    // mainSlider.style.overflow = "hidden";
    // mainSliderWrapper.style.transition = "0.5s all";


    // function nextSlider() {
    //     if (offset == +height.replace(/\D/gi, "") * (mainSliderItems.length-1)) {
    //         offset = 0;
    //     } else {
    //         offset += +height.replace(/\D/gi, "");
    //     }
    //     console.log(offset);
    //     mainSliderWrapper.style.transform = `translateY(-${offset}px)`;
    // }

    // setInterval(nextSlider, time);




}