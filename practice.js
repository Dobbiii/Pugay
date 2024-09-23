// Dark Mode Toggle
const checkbox = document.getElementById("checkbox");
const checkboxMobile = document.getElementById("checkbox-mobile");

// Check for saved dark mode preference in localStorage
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
  document.body.classList.add('dark');
  if (checkbox) checkbox.checked = true;
  if (checkboxMobile) checkboxMobile.checked = true;
}

// Function to toggle dark mode and save preference
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Synchronize the state of dark mode toggles
if (checkbox) {
  checkbox.addEventListener("change", () => {
    toggleDarkMode();
    if (checkboxMobile) checkboxMobile.checked = checkbox.checked;
  });
}

if (checkboxMobile) {
  checkboxMobile.addEventListener("change", () => {
    toggleDarkMode();
    if (checkbox) checkbox.checked = checkboxMobile.checked;
  });
}

// Scroll Down Button
const scrollDownBtn = document.getElementById('scroll-down');
if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', function() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth' // Smooth scrolling
    });
  });
}

// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // Apply dark mode styling to the mobile menu if dark mode is enabled
  if (document.body.classList.contains("dark")) {
    mobileMenu.classList.add("dark");
  } else {
    mobileMenu.classList.remove("dark");
  }
});
