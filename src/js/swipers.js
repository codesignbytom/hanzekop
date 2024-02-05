document.addEventListener("DOMContentLoaded", function () {
  // Initialization for homesSlider
  const homesSlider = new Swiper(".swiper.is-home-preview", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 800,
    grabCursor: true,
    createElements: true,
    parallax: true,
    navigation: {
      nextEl: ".section_home-previews .swiper-btn-next",
      prevEl: ".section_home-previews .swiper-btn-prev",
    },
    pagination: {
      el: ".section_home-previews .swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      480: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
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
    pagination: {
      el: ".section_testimonials .swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      480: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 1.75,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 1.75,
        spaceBetween: 48,
      },
      1442: {
        slidesPerView: 1.75,
        spaceBetween: 64,
      },
    },
  });
});
