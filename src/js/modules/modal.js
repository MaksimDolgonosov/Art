import { timeout } from "../main";

export default function modal(triggerSelector, modalSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modalWindow = document.querySelector(modalSelector);
    const allModals = document.querySelectorAll("[data-modal]");

    function openModal() {
        modalWindow.style.display = "block";
        document.body.style.overflow = "hidden";
        clearTimeout(timeout);
    }

    function closeModal() {
        allModals.forEach(modal => {
            modal.style.display = "none";
        });
        // modalWindow.style.display = "none";
        document.body.style.overflow = "";
    }

    trigger.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    modalWindow.addEventListener("click", e => {
        if (e.target && (e.target.classList.contains(modalSelector.replace(/\./, "")) || e.target.classList.contains("popup-close"))) {
            closeModal();
        }
    });

}

