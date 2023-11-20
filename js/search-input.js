document.addEventListener("DOMContentLoaded", function () {
  const inputSearch = document.querySelector(".header-start__input");
  const inputSearchMob = document.querySelector(".menu-mobile__input-input");
  const searchWrapper = document.querySelector(".search-product");
  const searchWrapperClose = document.querySelector(
    ".search-product-card_top-close"
  );

  inputSearch.addEventListener("focusin", function () {
    searchWrapper.style.opacity = "1";
    searchWrapper.style.pointerEvents = "inherit";
  });

  inputSearch.addEventListener("focusout", function () {
    searchWrapper.style.opacity = "0";
    searchWrapper.style.pointerEvents = "none";
  });

  inputSearchMob.addEventListener("focusin", function () {
    searchWrapper.style.opacity = "1";
    searchWrapper.style.pointerEvents = "inherit";
  });

  inputSearchMob.addEventListener("focusout", function () {
    searchWrapper.style.opacity = "0";
    searchWrapper.style.pointerEvents = "none";
  });

  searchWrapperClose.addEventListener("click", function () {
    searchWrapper.style.opacity = "0";
  });
});
