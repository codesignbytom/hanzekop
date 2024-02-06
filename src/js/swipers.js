document.addEventListener("DOMContentLoaded", function () {
  // Initialization for homesSlider
  const homesSlider = new Swiper(".swiper.is-home-preview", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    speed: 800,
    grabCursor: true,
    createElements: true,
    parallax: true,
    navigation: {
      nextEl: ".section_home-previews .swiper-btn-next",
      prevEl: ".section_home-previews .swiper-btn-prev",
    },
  });

  // Initialization for testimonialSlider
  const testimonialSlider = new Swiper(".swiper.is-testimonial", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    createElements: true,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: ".section_testimonials .swiper-btn-next",
      prevEl: ".section_testimonials .swiper-btn-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.75,
      },
      992: {
        slidesPerView: 1.75,
      },
      1442: {
        slidesPerView: 1.75,
      },
    },
  });
});
