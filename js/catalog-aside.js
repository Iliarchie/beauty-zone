const filterTab = document.querySelectorAll(".aside-filter__list-title");

filterTab.forEach((filter) => {
  filter.addEventListener("click", () => {
    const filterTabWrapper = filter.nextElementSibling;
    filter.classList.toggle("active");

    filterTabWrapper.classList.toggle("active");
  });
});

const filterButtonOpen = document.querySelector(".filter-btn__left-filter");
const filterButtonClose = document.querySelector(".aside-filter__mobile-btn");

filterButtonOpen.addEventListener("click", function () {
  document.querySelector(".aside-filter").classList.add("active");
  document.querySelector(".catalog-content").classList.add("active");
  document.querySelector(".footer").classList.add("active");
});

filterButtonClose.addEventListener("click", function () {
  document.querySelector(".aside-filter").classList.remove("active");
  document.querySelector(".catalog-content").classList.remove("active");
  document.querySelector(".footer").classList.remove("active");
});

$("#range-name").ionRangeSlider({
  type: "double",
  grid: true,
  min: 0,
  max: 30000,
  from: 1000,
  to: 20000,
  prefix: "",
});

$(".contact-form__input-number").mask("+38 (999) 999 - 99 - 99");
