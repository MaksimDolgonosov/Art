export default function checkTextInputs(selector) {
    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.search(/[a-z]/) >= 0) {
                input.style.border = "1px solid red";
                
                input.value = input.value.replace(/[a-z]/gi, "");
            } else {
                // input.value = input.value.replace(/[a-z]/gi, "");
                input.style.border = "none";
            }
           
        });

    });


}