const checkBox = document.querySelector(".modal-check");
const phone = document.querySelector(".input-phone");
const email = document.querySelector(".input-email");

checkBox.addEventListener("click", checked);

function checked() {
    if (checkBox.checked) {
        phone.setAttribute("required", "false");
        email.setAttribute("required", "true");
    }

    else {
        phone.setAttribute("required", "true");
        email.setAttribute("required", "false");
    }
}


