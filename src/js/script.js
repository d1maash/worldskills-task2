const ACTIVE_CLASS = "block--active";
const TRANSITION_CLASS = "block--transition";

document.addEventListener("DOMContentLoaded", function (event) {
  var fadeInElements = document.querySelectorAll(".fade-in");

  function fadeIn() {
    fadeInElements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("active");
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", fadeIn);
  window.addEventListener("resize", fadeIn);
  window.addEventListener("load", fadeIn);
});
