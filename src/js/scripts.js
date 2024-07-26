window.addEventListener("scroll", function () {
  document
    .querySelector(".scrollTop")
    .classList.toggle("active", window.scrollY > 450);
});
function backTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
