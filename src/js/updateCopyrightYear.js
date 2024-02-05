function updateCopyrightYear() {
  const yearText = document.querySelector(".copyright_current-year");
  const year = new Date().getFullYear();
  if (yearText) {
    // Ensure the element exists before trying to update it
    yearText.innerHTML = year;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // This ensures the DOM is fully loaded before attempting to update the copyright year
  updateCopyrightYear();
});
