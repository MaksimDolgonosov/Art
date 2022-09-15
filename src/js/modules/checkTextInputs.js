export default function checkTextInputs(selector) {
    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/[a-z]/gi, "");
        });
        
    });


}