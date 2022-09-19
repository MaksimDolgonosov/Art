export default function calc(calcObj) {
    let sizeSelector = document.querySelector("#size");
    let materialSelector = document.querySelector("#material");
    let optionsSelector = document.querySelector("#options");
    let promocodeSelector = document.querySelector(".promocode");
    let resultSelector = document.querySelector(".calc-price");
    let sum = 0;


    function calcFunc() {
        sum = +sizeSelector.value * (+materialSelector.value) + (+optionsSelector.value);
        if (sizeSelector.value == "" || materialSelector.value == "") {
            resultSelector.textContent = "Выбирете размер и материал картины";
        } else if (promocodeSelector.value === "IWANTPOPART") {
            resultSelector.textContent = sum * 0.7;
        } else {
            resultSelector.textContent = sum;
        }
        calcObj.size = sizeSelector.value;
        calcObj.material = materialSelector.value;
        calcObj.options = optionsSelector.value;

    }

    sizeSelector.addEventListener("change", calcFunc);
    materialSelector.addEventListener("change", calcFunc);
    optionsSelector.addEventListener("change", calcFunc);
    promocodeSelector.addEventListener("input", calcFunc);


}