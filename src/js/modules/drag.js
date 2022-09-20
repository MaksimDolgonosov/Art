export default function drag() {
    const inputsDrag = document.querySelectorAll("[name='upload']");

    inputsDrag.forEach(item => {
        item.addEventListener("dragover", stopPropagation);
        item.addEventListener("dragenter", stopPropagation);
        item.addEventListener("dragleave", stopPropagation);
        item.addEventListener("drop", stopPropagation);
    });

    function stopPropagation(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    inputsDrag.forEach(item => {
        item.addEventListener("dragover", () => highlight(item));
        // item.addEventListener("dragenter", () => highlight(item));
        item.addEventListener("dragleave", () => nohighlight(item));
        item.addEventListener("drop", (e) => {
            item.files = e.dataTransfer.files;

            if (item.closest(".main")) {
                const formData = new FormData();
                formData.append("image", item.files[0]);
                fetch("assets/server.php", {
                    method: "POST",
                    body: formData
                }).then(data => data.text()).
                then(response=> console.log(response));
                nohighlight(item);
            } else {
                let fileName = item.files[0].name.split('.')[0];
                let fileSecond = item.files[0].name.split('.')[1];
                if (fileName.length > 5) {
                    fileName = fileName.substring(0, 6) + "...";
                }
                item.previousElementSibling.textContent = fileName + fileSecond;
                nohighlight(item);
            }


        });

    });

    function highlight(element) {
        element.closest(".file_upload").style.border = "2px solid green";
        element.closest(".file_upload").style.backgroundColor = "red";
    }

    function nohighlight(element) {
        element.closest(".file_upload").style.border = "none";
        if (element.closest(".formCalc")) {
            element.closest(".file_upload").style.backgroundColor = "white";
        } else if (element.closest(".main")) {
            element.closest(".file_upload").style.backgroundColor = "#f7e7e6";
        } else {
            element.closest(".file_upload").style.backgroundColor = "#ededed";
        }
    }



}