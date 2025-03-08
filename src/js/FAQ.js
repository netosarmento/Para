console.log("JavaScript carregado!");

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



// FAQ


document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item) => {
      const button = item.querySelector(".accordion-button");
  
      button.addEventListener("click", () => {
        // Fecha todas as respostas antes de abrir a clicada
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
  
        // Abre ou fecha a resposta clicada
        item.classList.toggle("active");
      });
    });
  });