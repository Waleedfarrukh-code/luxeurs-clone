document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide-text");
  let index = 0;

  function showSlide() {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  // Change slide every 3 seconds
  setInterval(showSlide, 3000);
});
