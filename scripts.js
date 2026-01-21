document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("projectsCarousel");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!carousel || !prev || !next) {
    console.error("Carrusel no encontrado");
    return;
  }

  const scrollAmount = 324;

  /* Flechas */
  next.addEventListener("click", () => {
    carousel.scrollLeft += scrollAmount;
  });

  prev.addEventListener("click", () => {
    carousel.scrollLeft -= scrollAmount;
  });

  /* Drag */
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    carousel.scrollLeft = scrollLeft - (e.pageX - startX);
  });

});
