let select = function () {
  let selectHeaders = document.querySelectorAll(".select__header");
  const selectAnimation = document.querySelectorAll(".select__current");
  const selectItems = document.querySelectorAll(".select__body-item");

  selectHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      selectAnimation.forEach((bottom) => {
        bottom.classList.toggle("active");
      });

      const selectBody = header.nextElementSibling;
      selectBody.classList.toggle("active");
    });
  });

  selectItems.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectChoose() {
    let text = this.innerText,
      currentText = this.closest(".select").querySelector(".select__current");

    if (currentText) {
      currentText.innerText = text;
    }

    // Скрываем список после выбора
    this.closest(".select__body").classList.remove("active");
  }
};

select();
