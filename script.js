const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const cards = document.querySelectorAll('.card');
const cardsPerPage = 4;
const totalPages = Math.ceil(cards.length / cardsPerPage);

let currentPage = 0;

function updateCarousel() {
  const translateX = -(currentPage * 100);
  track.style.transform = `translateX(${translateX}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateCarousel();
  }
});
