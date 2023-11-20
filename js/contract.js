const tabBtn = document.querySelectorAll(".contract-tabs__list-title");

tabBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const tabDrop = btn.nextElementSibling;

    tabDrop.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

const quesTab = document.querySelectorAll(".contract-question__tabs-item");

quesTab.forEach((tabQues) => {
  tabQues.addEventListener("click", function () {
    const quesDrop = tabQues.nextElementSibling;
    const quesTabTitle = tabQues.querySelector(
      ".contract-question__tabs-title"
    );

    tabQues.classList.toggle("active");
    quesDrop.classList.toggle("active");
    quesTabTitle.classList.toggle("active");
  });
});
