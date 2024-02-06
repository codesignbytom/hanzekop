document.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans using SplitType
  const typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  // Function to link timelines to scroll position
  const createScrollTrigger = (triggerElement, timeline) => {
    // Reset timeline when scrolling out of view past the bottom of the screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play timeline when scrolled into view (60% from top of the screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      onEnter: () => timeline.play(),
    });
  };

  document.querySelectorAll("[words-slide-up]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".word"), {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "ease",
      stagger: { amount: 0.5 },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[words-rotate-in]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.set(element.querySelectorAll(".word"), { transformPerspective: 1000 });
    tl.from(element.querySelectorAll(".word"), {
      rotationX: -90,
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[words-slide-from-right]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".word"), {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[letters-slide-up]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), {
      yPercent: 100,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.6 },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[letters-slide-down]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), {
      yPercent: -120,
      duration: 0.3,
      ease: "power1.out",
      stagger: { amount: 0.7 },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[letters-fade-in]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), {
      opacity: 0,
      duration: 0.2,
      ease: "power1.out",
      stagger: { amount: 0.8 },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[letters-fade-in-random]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".char"), {
      opacity: 0,
      duration: 0.05,
      ease: "power1.out",
      stagger: { amount: 0.4, from: "random" },
    });
    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[scrub-each-word]").forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "top center",
        scrub: true,
      },
    });
    tl.from(element.querySelectorAll(".word"), {
      opacity: 0.2,
      duration: 0.2,
      ease: "power1.out",
      stagger: { each: 0.4 },
    });
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });


  document.querySelectorAll(".homes-grid_item").forEach((item, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "top center",
        scrub: true,
      },
    });
    tl.from(item, {
      opacity: 0,
      y: "1em",
      duration: 0.5,
      ease: "power1.out",
      stagger: { amount: 0.5, from: "random" },
    });
  })
});

