$(".user-login__number-login").mask("+38 (999) 999 - 99 - 99");
$(".user-data__content-login").mask("+38 (999) 999 - 99 - 99");
$(".contact-form__input-number").mask("+38 (999) 999 - 99 - 99");

const inpitActive = document.querySelectorAll(".contact-form__boxinput");

inpitActive.forEach((input) => {
  input.addEventListener("input", function () {
    input.classList.add("active");
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validation(this)) {
      alert("yes");
    }
  });

function validation(form) {
  let result = true;
  form.querySelectorAll(".contact-form__input").forEach((input) => {
    const errorElement = input.nextElementSibling;

    input.addEventListener("input", function () {
      input.style.borderColor = "#648864";
      errorElement.classList.remove("active");
    });

    if (input.value.trim() === "") {
      errorElement.textContent = "Обов'язково поле";
      errorElement.classList.add("active");
      input.style.borderColor = "#ca3f3f";
      result = false;
    } else {
      errorElement.textContent = "";
      errorElement.classList.remove("active");
      input.style.borderColor = "#648864";
    }
  });

  return result;
}
