export default function accordion() {
    const accordionHeadings = document.querySelectorAll("#accordion .accordion-heading");
    const accordionBlocks = document.querySelectorAll("#accordion .accordion-block");

    accordionHeadings.forEach(heading => {
        heading.addEventListener("click", (e) => {
            if (heading.classList.contains("accordion-heading")) {
                heading.classList.remove("accordion-heading");
                heading.classList.add("accordion-heading-active");
                heading.nextElementSibling.classList.remove("accordion-block");
                heading.nextElementSibling.classList.add("accordion-block-active");
            } else {
                heading.classList.remove("accordion-heading-active");
                heading.classList.add("accordion-heading");
                heading.nextElementSibling.classList.remove("accordion-block-active");
                heading.nextElementSibling.classList.add("accordion-block");
            }

        });


    });

}