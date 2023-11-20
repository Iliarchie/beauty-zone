function toggleButtonState(button) {
  button.classList.toggle("active");
  // Добавьте здесь логику для кнопки, если она различается
}

function setupButtonClickHandlers(likeButtons, basketButtons) {
  likeButtons.forEach((like) => {
    like.addEventListener("click", function () {
      toggleButtonState(like);
    });
  });

  basketButtons.forEach((basket) => {
    basket.addEventListener("click", function () {
      toggleButtonState(basket);
    });
  });
}

const btnLike = document.querySelectorAll(".new-card__like");
const btnBasket = document.querySelectorAll(".new-card__basket");
setupButtonClickHandlers(btnLike, btnBasket);

const btnLikeSale = document.querySelectorAll(".sales-card__like");
const btnBasketSale = document.querySelectorAll(".sales-card__basket");
setupButtonClickHandlers(btnLikeSale, btnBasketSale);

// const swiperNews = new Swiper(".swiper-news", {
//   direction: "horizontal",
//   loop: false,
//   spaceBetween: 30,
//   slidesPerView: 2,

//   navigation: {
//     nextEl: ".swiper-news__next",
//     prevEl: ".swiper-news__prev",
//   },

//   scrollbar: {
//     el: ".swiper-news__scrollbar",
//   },

//   breakpoints: {
//     460: {
//       slidesPerView: 2,
//     },
//     1000: {
//       slidesPerView: 2,
//     },
//     1001: {
//       slidesPerView: 3,
//     },
//   },
// });

// const swiperSale = new Swiper(".swiper-sales", {
//   direction: "horizontal",
//   loop: false,
//   spaceBetween: 30,
//   slidesPerView: 2,

//   navigation: {
//     nextEl: ".swiper-sales__next1",
//     prevEl: ".swiper-sales__prev2",
//   },

//   scrollbar: {
//     el: ".swiper-sales__scrollbar",
//   },

//   breakpoints: {
//     460: {
//       slidesPerView: 2,
//     },
//     1000: {
//       slidesPerView: 2,
//     },
//     1001: {
//       slidesPerView: 3,
//     },
//   },
// });
