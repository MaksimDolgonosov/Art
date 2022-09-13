export default function pictures() {
    const picturesWrapper = document.querySelector(".sizes-wrapper");
    const pictureBlock = picturesWrapper.querySelectorAll(".sizes-block");


    pictureBlock.forEach(block => {

        block.addEventListener("mouseover", e => {
            let src = block.querySelector("img").getAttribute("src");
            block.querySelector("img").setAttribute("src", src.substr(0, (src.length - 4)) + "-1.png");
            block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
                p.style.visibility = "hidden";
            });

        });
        block.addEventListener("mouseout", e => {
            let src = block.querySelector("img").getAttribute("src");
            block.querySelector("img").setAttribute("src", src.substr(0, (src.length - 6)) + ".png");
            block.querySelectorAll("p").forEach(p => {
                p.style.visibility = "visible";
            });
        });
    });
}