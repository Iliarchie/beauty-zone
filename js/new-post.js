const inputBox = document.querySelectorAll(".new-shipping-address__box-input");
const inputWrapper = document.querySelectorAll(".new-shipping-address__input");
const adressBody = document.querySelector(".new-shipping-address");
const btnOpen = document.querySelector(".user-address__start-btn");
const btnClose = document.querySelector(".new-shipping-address__btn-close");

btnOpen.addEventListener("click", function () {
  adressBody.classList.toggle("active");
});

btnClose.addEventListener("click", function () {
  adressBody.classList.remove("active");
});

inputWrapper.forEach((inputwrapper) => {
  inputwrapper.addEventListener("input", function () {
    const inputwrapperHover = inputwrapper.nextElementSibling;

    inputwrapperHover.classList.add("active");
  });
});
