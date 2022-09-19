export default function form(calcObj) {
    const forms = document.querySelectorAll("form");
    const uploads = document.querySelectorAll("[name='upload']");

    uploads.forEach(upload => {
        upload.addEventListener("input", () => {
            let fileName = upload.files[0].name.split('.')[0];
            let fileSecond = upload.files[0].name.split('.')[1];
            if (fileName.length > 5) {
                fileName = fileName.substring(0, 6) + "...";
            }
            upload.previousElementSibling.textContent = fileName + fileSecond;
        });
    });

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
            console.log(form.classList.contains("formCalc"));
            if (form.classList.contains("formCalc")) {
                for (let key in calcObj) {
                    formData.append(key, calcObj[key]);
                }
            }
            console.log(calcObj);
            console.log(formData);
            let div = document.createElement("h3");
            div.style.cssText = `
            font-size: 18px;
            margin-bottom: 0;
            text-align: center;`;
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
                            document.body.style.overflow = "";
                            form.style.display = "block";
                            form.style.visibility = "";
                            form.reset();
                            div.remove();
                            uploads.forEach(upload => {
                                upload.previousElementSibling.textContent = "Файл не выбран";
                            });
                            calcObj = {};
                        });
                    }, 3000);


                });

        });
    }



}