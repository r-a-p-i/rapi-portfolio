function showPopup(type, message) {
    const modal = document.getElementById("popup-modal");
    const box = document.getElementById("popup-box");
    const icon = document.getElementById("popup-icon");
    const title = document.getElementById("popup-title");
    const msg = document.getElementById("popup-message");

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    setTimeout(() => {
        box.classList.remove("scale-95", "opacity-0");
        box.classList.add("scale-100", "opacity-100");
    }, 50);

    if (type === "success") {
    icon.innerHTML = `<i class="fa-solid fa-circle-check text-green-400"></i>`;
    title.innerHTML = "Success";
    msg.innerHTML = message;
    } 
    else {
        icon.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-400"></i>`;
        title.innerHTML = "Error";
        msg.innerHTML = message;
    }
}

function closePopup() {
    const modal = document.getElementById("popup-modal");
    const box = document.getElementById("popup-box");

    box.classList.remove("scale-100", "opacity-100");
    box.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 300);
}

document.getElementById("popup-close").addEventListener("click", closePopup);