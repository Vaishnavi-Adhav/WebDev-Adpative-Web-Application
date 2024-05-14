"use strict";
(function () {
    const modal = document.querySelector(".modal");
    const subscribeLink = document.querySelectorAll(".subscribe");
    const cancelButton = document.querySelector(".cancel-button");
    const formcontent = document.querySelector(".registration-form");
    const registerFormEmail = document.querySelector(".register-email-error");
    const reisterformemailMessage = document.querySelector(".register-email-error");
    const registerFormConfirmEmail = document.querySelector(".register-confirm-email-error");
    const inputemail = document.querySelector(".input-email");
    const inputconfirmemail = document.querySelector(".input-confirm-email");
    const dropdowncontent = document.querySelector(".dropdown-content");
    const dropdownbutton = document.querySelector(".dropdown-button");

    dropdownbutton.addEventListener("click", function showDropdown() {
        dropdowncontent.classList.toggle("inactive");
    });

    subscribeLink.forEach(item => {
        item.addEventListener('click', event => {
            modal.showModal();
        })
    })

    cancelButton.addEventListener("click", () => {
        modal.close();
    });

    formcontent.addEventListener('submit', (event) => {
        let isInvalid = false

        if (!inputemail.value) {
            registerFormEmail.innerText = "This field is required";
            inputemail.classList.add('inputemail-invalid-color');
            isInvalid = true;
        }

        if (inputemail.value !== inputconfirmemail.value) {
            registerFormConfirmEmail.innerText = "This field must match provided email address";
            inputconfirmemail.classList.add('inputconfirmemail-invalid-color');
            isInvalid = true;
        }

        if (isInvalid || !inputemail.value.includes("@") || !inputconfirmemail.value.includes("@")) {
            event.preventDefault();
        }
    });

    inputemail.addEventListener("input", function registeremail() {
        registerFormEmail.innerText = "";
        inputemail.classList.remove('inputemail-invalid-color');
    });

    inputemail.addEventListener("input", function registeremail() {
        if (inputemail.value.includes("@")) {
            reisterformemailMessage.innerText = "";
            inputemail.classList.remove('inputemail-invalid-color');
        } else {
            reisterformemailMessage.innerText = "This field can be valid email address including a @";
            inputemail.classList.add('inputemail-invalid-color');
        }
    });

    inputconfirmemail.addEventListener("input", function registerconfirmemail() {
        if (inputemail.value === inputconfirmemail.value) {
            registerFormConfirmEmail.innerText = "";
            inputconfirmemail.classList.remove('inputconfirmemail-invalid-color');
        }
    });
})();
