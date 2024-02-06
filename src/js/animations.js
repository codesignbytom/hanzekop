const openMenuButton = document.querySelectorAll(".open-menu-button");
const closeMenuButton = document.querySelector(".close-menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const menuUnderlay = document.querySelector(".menu-underlay");

// Set transition styles once, outside the functions
menuUnderlay.style.transition =
  "opacity 0.5s cubic-bezier(0.32, 0, 0.67, 1), backdrop-filter 0.5s cubic-bezier(0.32, 0, 0.67, 1)";

function setMenuUnderlayStyles({ opacity, top, bottom, left, right }) {
  menuUnderlay.style.opacity = opacity;
  menuUnderlay.style.top = top;
  menuUnderlay.style.bottom = bottom;
  menuUnderlay.style.left = left;
  menuUnderlay.style.right = right;
}

function openMenu() {
  menuOverlay.style.transform = "translate(0%)";
  setMenuUnderlayStyles({
    opacity: "1",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  });
}

function closeMenu() {
  menuOverlay.style.transform = "translate(100%)";
  menuUnderlay.style.opacity = "0";
  // Reintroduce setTimeout to delay the reset of the positioning styles until after the transition completes
  setTimeout(() => {
    setMenuUnderlayStyles({
      opacity: "0",
      top: "auto",
      bottom: "auto",
      left: "auto",
      right: "auto",
    });
  }, 500); // Match the timeout to the transition duration
}

openMenuButton.forEach((button) => button.addEventListener("click", openMenu));
closeMenuButton.addEventListener("click", closeMenu);

function closeMenuOnOverlayClickOrEscape(event) {
  if (
    event.target === menuUnderlay ||
    (event.key === "Escape" && document.activeElement !== closeMenuButton)
  ) {
    closeMenu();
  }
}

// Consolidate event listeners for closing the menu
document.addEventListener("click", closeMenuOnOverlayClickOrEscape);
document.addEventListener("keydown", closeMenuOnOverlayClickOrEscape);

const homesGridItems = document.querySelectorAll(".homes-grid_item");

// foreach item in homesGridItems, slide in from bottom and fade in with stagger delay
homesGridItems.forEach((item) => {
  item.style.visibility = "hidden";
  const tl = gsap.timeline({ paused: true });
  tl.from(item, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "power1.out",
    stagger: { amount: 0.5, from: "random" },
    onComplete: () => { item.style.visibility = "visible"; },
  });
  createScrollTrigger(item, tl);
})
