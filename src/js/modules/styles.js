export default function styles() {
    const stylesBtn = document.querySelector(".button-styles");
    const allWorks = document.querySelectorAll("#styles .row > div");

    // stylesBtn.addEventListener("click", () => {
    //     allWorks.forEach(work => {
    //         work.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
    //         work.classList.add("faded", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    //     });
    //     stylesBtn.remove();
    // });

    async function getData(url) {
        let res = await fetch(url);
        return await res.json();
    }


    stylesBtn.addEventListener("click", () => {
        getData("assets/db.json")
            .then(data => {
                data.styles.forEach(obj => {
                    const div = document.createElement("div");
                    div.classList.add("faded", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
                    div.innerHTML = `
                    <div class=styles-block>
						<img src=${obj.src} alt>
						<h4>${obj.title}</h4>
						<a href="${obj.link}">Подробнее</a>
					</div>`;
                    document.querySelector("#styles .row").appendChild(div);
                });
            });

        stylesBtn.remove();
    });


}