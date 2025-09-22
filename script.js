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
// /////////
// Select elements
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(){
  slides.style.transform = `translateX(-${index*100}%)`;
}
next.addEventListener("click",()=>{
  index=(index+1)%slideCount;
  showSlide();
});
prev.addEventListener("click",()=>{
  index=(index-1+slideCount)%slideCount;
  showSlide();
});

// Load More functionality
document.addEventListener('DOMContentLoaded', function () {
    const products = Array.from(document.querySelectorAll('.product-card'));
    const btn = document.getElementById('loadMore');
    const batchSize = 4;          // change karna ho to yahan number badal do
    let currentIndex = 0;

    console.log('Total products found:', products.length);

    // show next batch
    function showNextBatch() {
      const nextIndex = Math.min(currentIndex + batchSize, products.length);
      console.log('Showing items', currentIndex, 'to', nextIndex - 1);
      for (let i = currentIndex; i < nextIndex; i++) {
        // remove bootstrap d-none and add a simple animation class
        products[i].classList.remove('d-none');
        products[i].classList.add('fade-in');
      }
      currentIndex = nextIndex;

      // hide button if all shown
      if (currentIndex >= products.length) {
        btn.style.display = 'none';
        console.log('All products shown, hiding button.');
      }
    }

    // initial show
    showNextBatch();

    // click handler
    btn.addEventListener('click', showNextBatch);
  });
