// LOGIN

document
  .querySelector(".header-user__user")
  .addEventListener("click", function () {
    document.querySelector(".user-login__inner").classList.add("active");
  });

document
  .querySelector(".btn-login__close")
  .addEventListener("click", function () {
    document.querySelector(".user-login__inner").classList.remove("active");
  });

// REG

document
  .querySelector(".user-login__reg-reg")
  .addEventListener("click", function () {
    document.querySelector(".user-reg").classList.add("active");
    document.querySelector(".user-login__inner").classList.remove("active");
  });

document
  .querySelector(".user-reg__login-btn")
  .addEventListener("click", function () {
    document.querySelector(".user-reg").classList.remove("active");
    document.querySelector(".user-login__inner").classList.add("active");
  });

document
  .querySelector(".btn-reg__close")
  .addEventListener("click", function () {
    document.querySelector(".user-reg").classList.remove("active");
  });

const pageBody = document.querySelector(".page__body");

const menuMobileOpen = document.querySelector(".header-start__btn-menu");
const menuMobileClose = document.querySelector(".menu-mobile__close-btn");
const menu = document.querySelector(".menu-mobile");

const menuBtn = document.querySelectorAll(".menu-mobile__list-link");

menuMobileOpen.addEventListener("click", function () {
  menu.classList.add("active");
  pageBody.classList.add("active");
});

menuMobileClose.addEventListener("click", function () {
  menu.classList.remove("active");
  pageBody.classList.remove("active");
});

menuBtn.forEach((linkTab) => {
  linkTab.addEventListener("click", function () {
    const menuBtnTab = linkTab.nextElementSibling;
    menuBtnTab.classList.toggle("active");
  });
});

const catalogLink = document.querySelectorAll(".menu-catalog__list-item");

catalogLink.forEach((link) => {
  link.addEventListener("click", function () {
    const linkTab = link.nextElementSibling;

    linkTab.classList.toggle("active");
  });
});

const linkList = document.querySelectorAll(".menu-list__link");
const menuCatalog = document.querySelector(".menu-catalog");

let timeoutId;

menuCatalog.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId);
  menuCatalog.classList.add("active");
});

menuCatalog.addEventListener("mouseleave", function () {
  timeoutId = setTimeout(function () {
    menuCatalog.classList.remove("active");
  }, 500);
});

menuCatalog.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId);
});

menuCatalog.addEventListener("mouseleave", function (event) {
  if (!menuCatalog.contains(event.relatedTarget)) {
    menuCatalog.classList.remove("active");
  }
});

linkList.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
    menuCatalog.classList.add("active");
  });

  link.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      menuCatalog.classList.remove("active");
    }, 500);
  });
});

function updatePrice(selectElement) {
  const selectedValue =
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-value"
    );
  const priceElement = selectElement
    .closest(".new-card__price")
    .querySelector(".new-card__info-num");

  if (selectedValue === "200") {
    priceElement.textContent = "1122 грн";
  } else if (selectedValue === "300") {
    priceElement.textContent = "1569 грн";
  } else {
    priceElement.textContent = "699 грн";
  }
}

const selectElement = document.getElementById("yourSelectElementId");
selectElement.addEventListener("change", function () {
  updatePrice(this);
});

selectElement.addEventListener("touchend", function () {
  if (this.selectedIndex !== this.lastSelectedIndex) {
    updatePrice(this);
    this.lastSelectedIndex = this.selectedIndex;
  }
});

selectElement.lastSelectedIndex = selectElement.selectedIndex;
