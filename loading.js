document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // 1. LOADING SCREEN LOGIC
  // ==========================================
  const loadingScreen = document.getElementById("loading-screen");
  
  if (loadingScreen) {
    // Force the loader to be visible initially
    loadingScreen.style.display = "flex";
    loadingScreen.style.opacity = "1";

    // Wait 3 seconds, then trigger the fade-out
    setTimeout(function () {
      loadingScreen.classList.add("fade-out");
      
      // Completely hide it after transition finishes so it doesn't block clicks
      setTimeout(function () {
        loadingScreen.style.display = "none";
      }, 800); // 800ms matches the CSS fade transition time
    }, 3000); // 3 seconds delay
  } else {
    console.error("Bug Alert: #loading-screen element was not found in HTML!");
  }

  // ==========================================
  // 2. MOBILE MENU LOGIC
  // ==========================================
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
