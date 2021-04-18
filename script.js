// Toggle light vs dark mode
// Sauce: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});