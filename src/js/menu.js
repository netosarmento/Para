document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropdown-toggle");

        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que o clique feche imediatamente

            // Fecha todos os outros dropdowns antes de abrir o atual
            dropdowns.forEach((d) => {
                if (d !== dropdown) {
                    d.classList.remove("open");
                }
            });

            // Alterna o dropdown atual
            dropdown.classList.toggle("open");
        });
    });

    // Fecha o dropdown ao clicar fora dele
    document.addEventListener("click", function () {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });
    });
});

// CARROSEL

// Seleciona elementos do DOM
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.arrow-button[aria-label="Previous slide"]');
const nextButton = document.querySelector('.arrow-button[aria-label="Next slide"]');

let currentSlide = 0; // Índice do slide atual

// Função para mostrar um slide específico
function showSlide(index) {
    // Esconde todos os slides
    slides.forEach((slide) => slide.classList.remove('active'));
    // Remove a classe 'active' de todos os dots
    dots.forEach((dot) => dot.classList.remove('active'));

    // Mostra o slide e marca o dot correspondente como ativo
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Volta ao início se chegar ao final
    showSlide(currentSlide);
}

// Função para voltar ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Volta ao final se chegar ao início
    showSlide(currentSlide);
}

// Adiciona eventos de clique nas setas
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Adiciona eventos de clique nos dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Mostra o primeiro slide ao carregar a página
showSlide(currentSlide);



// FAQ


