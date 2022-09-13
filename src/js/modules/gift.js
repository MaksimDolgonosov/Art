export default function gift() {
    const giftItem = document.querySelector(".fixed-gift");
    const giftModal = document.querySelector(".popup-gift");

    function openGift() {
        giftModal.style.display = "block";
        document.body.style.overflow = "hidden";
        giftItem.remove();
    }

    giftItem.addEventListener("click", openGift);

    giftModal.addEventListener("click", e => {
        if (e.target && (e.target.classList.contains("popup-gift") || e.target.classList.contains("popup-close"))) {
            giftModal.style.display = "none";
            document.body.style.overflow = "";
        }
    });
    document.addEventListener("scroll", () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            giftItem.click();
            giftItem.removeEventListener("click", openGift);
        }
    });


}