export default function form() {
    const forms = document.querySelectorAll("form");
    console.log(forms);

    forms.forEach(form => {
        bindForm(form);
    });

    const message = {
        loading: "Идет отправка...",
        sucsess: "Отправлено! Спасибо, мы скоро с вами свяжемся!",
        error: "Ошибка, что то пошло не так! Попробуйте позже."
    };

    async function postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }

    function bindForm(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            let formData = new FormData(form);
            let div = document.createElement("h3");
            div.style.cssText = `
            font-size: 18px;
            margin-bottom: 0;`;
            div.textContent = message.loading;
            form.insertAdjacentElement("afterend", div);
            postData("assets/server.php", formData)
                .then(data => {
                    console.log(data);
                    form.style.display = "none";
                    form.style.visibility = "hidden";
                    div.textContent = message.sucsess;
                })
                .catch(() => {
                    form.style.display = "none";
                    form.style.visibility = "hidden";
                    div.textContent = message.error;
                })
                .finally(() => {
                    setTimeout(() => {
                        document.querySelectorAll('[data-modal]').forEach(modal => {
                            modal.style.display = "none";
                            document.body.overflow = "";
                            form.style.display = "block";
                            form.style.visibility = "";
                            form.reset();
                            div.remove();
                        });
                    }, 3000);


                });

        });
    }



}