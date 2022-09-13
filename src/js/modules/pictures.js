export default function pictures() {
    const picturesWrapper = document.querySelector(".sizes-wrapper");
    const pictureBlock = picturesWrapper.querySelectorAll(".sizes-block");
    

    pictureBlock.forEach(block => {
        block.addEventListener("mousemove", e => {
            console.log(block);
        });
    });
}