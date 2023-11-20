const swiperNews = new Swiper(".swiper-news", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 30,
  slidesPerView: 2,

  navigation: {
    nextEl: ".swiper-button__news-next",
    prevEl: ".swiper-button__news-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    460: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
  },
});

const swiperSale = new Swiper(".swiper-sales", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 30,
  slidesPerView: 2,

  navigation: {
    nextEl: ".swiper-button__sale-next",
    prevEl: ".swiper-button__sale-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    460: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
  },
});
