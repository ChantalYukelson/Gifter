let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slideIndex = (index + slides.length) % slides.length;
  document.querySelector('.carousel-slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Inicializar el carrusel
showSlide(slideIndex);
