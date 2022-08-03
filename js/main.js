var siteHeaderbtnEl = document.querySelector(".toggle");
var headerEl = document.querySelector(".header");

siteHeaderbtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("header-open");
});
