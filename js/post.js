
// CARROSEL

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-image");
  const prevButton = document.querySelector(".nav-button-prev");
  const nextButton = document.querySelector(".nav-button-next");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  // Function to update the active image and indicator
  const updateCarousel = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  };

  // Event listener for the next button
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
  });

  // Event listener for the previous button
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
  });

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
  });

  // Initialize the carousel
  updateCarousel(currentIndex);
});

//  RATING STARS ANIMATION

document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
      star.addEventListener('click', function() {
          const value = this.getAttribute('data-value');
          highlightStars(value);
      });

      star.addEventListener('mouseover', function() {
          const value = this.getAttribute('data-value');
          highlightStars(value);
      });

      star.addEventListener('mouseout', function() {
          const selected = document.querySelector('.star.active');
          if (selected) {
              highlightStars(selected.getAttribute('data-value'));
          } else {
              resetStars();
          }
      });
  });

  function highlightStars(value) {
      stars.forEach(star => {
          if (star.getAttribute('data-value') <= value) {
              star.classList.add('active');
          } else {
              star.classList.remove('active');
          }
      });
  }

  function resetStars() {
      stars.forEach(star => star.classList.remove('active'));
  }
});