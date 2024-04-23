document.addEventListener("DOMContentLoaded", function () {
  // Initialization for homesSlider
  const homesSlider = new Swiper(".swiper.is-listing-prev", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    speed: 800,
    grabCursor: true,
    createElements: true,
    parallax: true,
    navigation: {
      nextEl: ".listing-prevs_wrap .swiper-btn-next",
      prevEl: ".listing-prevs_wrap .swiper-btn-prev",
    },
  });
});
