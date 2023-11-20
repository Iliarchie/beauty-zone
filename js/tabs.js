document.querySelectorAll(".basket-card").forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.toggle("active");
  });
});

const userTabs = document.querySelectorAll(".user-tab__tab-title");
const tabContents = document.querySelectorAll(".content-tab");
const tabContentClose = document.querySelectorAll(".user-content__btn-close");

tabContentClose.forEach((btnClose) => {
  btnClose.addEventListener("click", function () {
    const tabCloseContent = btnClose.closest(".content-tab");

    tabCloseContent.classList.add("hidden");
  });
});

userTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Убираем активный класс у всех заголовков табов
    userTabs.forEach((el) => {
      el.classList.remove("active");
    });

    document.querySelector(".user-tab:first-child").classList.toggle("active");

    // Скрываем все блоки контента
    tabContents.forEach((contentTab) => {
      contentTab.classList.add("hidden");
    });

    // Показываем текущий блок контента
    const tabContentId = tab.dataset.tab;
    const currentTabContent = document.querySelector("#" + tabContentId);

    if (currentTabContent) {
      currentTabContent.classList.remove("hidden");
    }

    // Определяем элемент tabDrop
    const tabDrop = tab.nextElementSibling;

    // Переключаем класс "active" для текущего и следующего элемента
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
      tabDrop.classList.remove("active");
    } else {
      tab.classList.add("active");
      tabDrop.classList.add("active");
    }
  });
});

const tabDropItem = document.querySelectorAll(".user-tab__box-item");

tabDropItem.forEach((dropItem) => {
  dropItem.addEventListener("click", function () {
    tabDropItem.forEach((itemRemove) => {
      itemRemove.classList.remove("active");
    });

    dropItem.classList.add("active");
  });
});

document
  .querySelector(".wishlist-content__top")
  .addEventListener("click", function () {
    document.querySelector(".wishlist-content").classList.toggle("active");
  });
