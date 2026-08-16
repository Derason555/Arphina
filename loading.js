window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(function () {
    loadingScreen.classList.add("fade-out");
  }, 3000); // <-- Change this to 3000 to hold it for 3 seconds on refresh!
});
// Force loading screen to stay visible for 4 seconds so you can see it
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");

  if (loadingScreen) {
    // Reset opacity and display just in case
    loadingScreen.style.opacity = "1";
    loadingScreen.style.display = "flex";

    setTimeout(function () {
      loadingScreen.classList.add("fade-out");
    }, 4000); // 4 seconds delay
  }
});
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    // Open Menu
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.add("show-menu");
        });
    }

    // Close Menu
    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener("click", function () {
            mobileMenu.classList.remove("show-menu");
        });
    }
});