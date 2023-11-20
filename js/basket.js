document
  .querySelector(".header-user__basket")
  .addEventListener("click", function () {
    document.querySelector(".basket-body").classList.add("active");
  });

document
  .querySelector(".basket-body__top-btn")
  .addEventListener("click", function () {
    document.querySelector(".basket-body").classList.remove("active");
  });

document.querySelectorAll(".product-card__btn-like").forEach((like) => {
  like.addEventListener("click", function () {
    like.classList.toggle("active");
  });
});

document.querySelectorAll(".product-card__btn-basket").forEach((basket) => {
  basket.addEventListener("click", function () {
    basket.classList.toggle("active");
  });
});

// BASKET - LIKE

const basketWrapepr = document.querySelector(".basket-wrapper");

window.addEventListener("click", function (event) {
  if (event.target.dataset.action === "like") {
  }

  if (event.target.dataset.action === "add") {
    const card = event.target.closest(".new-card");

    const cardInfo = {
      imgSrc: card.querySelector(".new-card__top-img").getAttribute("src"),
      subtitle: card.querySelector(".new-card__info-subtitle").innerText,
      title: card.querySelector(".new-card__info-title").innerText,
      price: card.querySelector(".new-card__info-num").innerText,
    };

    console.log(cardInfo);

    const cardItemHtml = `
    <div class="basket-cards">
          <div class="basket-cards__product">
            <div class="basket-cards__product-img">
              <img src="${cardInfo.imgSrc}" alt="" />
            </div>

            <div class="basket-cards__text">
              <div class="basket-cards__info">
                <div class="basket-cards__info-subtitle">Etude House</div>
                <div class="basket-cards__info-title">
                ${cardInfo.title}
                </div>
                <div class="basket-cards__info-muted">
                ${cardInfo.subtitle}
                </div>
              </div>

              <div class="basket-cards__sum">
                <div class="basket-cards__counter">
                  <button
                    class="basket-cards__counter-btn card-counter__minus"
                    data-action="minus"
                  >
                    <img src="./img/minus-icon.svg" alt="" />
                  </button>

                  <span class="basket-cards__counter-counter" data-counter=""
                    >0</span
                  >

                  <button
                    class="basket-cards__counter-btn card-counter__plus"
                    data-action="plus"
                  >
                    <img src="./img/plus-icon.svg" alt="" />
                  </button>
                </div>

                <span class="basket-cards__sub-price" data-base-price="699"
                  >${cardInfo.price} </span
                >
              </div>
            </div>
          </div>
        </div>
    `;

    basketWrapepr.insertAdjacentHTML("beforeend", cardItemHtml);
  }

  if (event.target.classList.contains("card-counter__plus")) {
    const counter = document.querySelector("[data-counter]");
    counter.innerText = parseInt(counter.innerText) + 1;
  }

  if (event.target.classList.contains("card-counter__minus")) {
    const counter = document.querySelector("[data-counter]");
    counter.innerText = parseInt(counter.innerText) - 1;

    if (parseInt(counter.innerText) <= 0) {
      counter.innerText = 0;
    }
  }
});
