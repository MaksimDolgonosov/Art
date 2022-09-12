export default function feedbackSlider(time) {
    const slider = document.querySelector(".feedback-slider");
    const nextBtn = document.querySelector(".main-next-btn");
    const prevBtn = document.querySelector(".main-prev-btn");
    const slides = document.querySelectorAll(".feedback-slider-item");
    let slideNumber = 0;

    slides.forEach(slide => {
        slide.style.display = "none";
        slide.classList.add("animated");
    });
    showSlide(slideNumber);

    function closeSlides() {
        slides.forEach(slide => {
            slide.style.display = "none";
            slide.classList.remove("slideInRight");
            slide.classList.remove("slideInLeft");
        });
    }

    function showSlide(i) {
        slides[i].style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
        if (slideNumber >= (slides.length - 1)) {
            slideNumber = 0;
        } else {
            slideNumber++;
        }
        closeSlides();
        slides[slideNumber].classList.add("slideInLeft");
        showSlide(slideNumber);
    });
    prevBtn.addEventListener("click", () => {
        if (slideNumber <= 0) {
            slideNumber = slides.length - 1;
        } else {
            slideNumber--;
        }
        closeSlides();
        slides[slideNumber].classList.add("slideInRight");
        showSlide(slideNumber);
    });

    let interval = setInterval(() => nextBtn.click(), time);


    slider.addEventListener("mouseover", () => {
        clearInterval(interval);
    });

    slider.addEventListener("mouseout", () => {
        interval = setInterval(() => nextBtn.click(), time);
    });


}