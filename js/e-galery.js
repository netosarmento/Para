
// CARROSEL

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide"); // Seleciona os slides
  const prevButton = document.querySelector(".nav-button-prev");
  const nextButton = document.querySelector(".nav-button-next");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  // Função para atualizar o slide ativo e o indicador
  const updateCarousel = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index); // Alterna a visibilidade dos slides
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index); // Alterna o estado dos indicadores
    });
  };

  // Event listener para o botão "próximo"
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  });

  // Event listener para o botão "anterior"
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
  });

  // Event listeners para os indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
  });

  // Inicializa o carrossel
  updateCarousel(currentIndex);
});