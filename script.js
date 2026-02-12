const menu = document.querySelector('.menu');
const toggle = document.querySelector('.menu-toggle');
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.menu a');

let currentPage = 0;
let cardsPerPage;

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

function getCardsPerPage() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 4;
}

function updateCarousel() {
  cardsPerPage = getCardsPerPage();
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  if (currentPage >= totalPages) {
    currentPage = totalPages - 1;
  }

  const translateX = -(currentPage * 100);
  track.style.transform = `translateX(${translateX}%)`;

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;
}

nextBtn.addEventListener('click', () => {
  currentPage++;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentPage--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

updateCarousel();