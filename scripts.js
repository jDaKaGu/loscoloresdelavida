document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.querySelector(".projects-carousel");
  const track = document.querySelector(".projects-track");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!carousel || !track || !prev || !next) {
    console.error("Carrusel de proyectos: elementos no encontrados");
    return;
  }

  /* ==========================
     CONFIGURACIÓN
  ========================== */

  const cardWidth = track.querySelector(".project-card").offsetWidth + 24;
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  carousel.style.cursor = "grab";

  /* ==========================
     CLONADO PARA INFINITO
  ========================== */

  track.innerHTML += track.innerHTML;

  /* ==========================
     FLECHAS
  ========================== */

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  /* ==========================
     DRAG (DESKTOP)
  ========================== */

  carousel.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.pageX;
    scrollStart = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDragging) return;
    e.preventDefault();
    const walk = e.pageX - startX;
    carousel.scrollLeft = scrollStart - walk;
  });

  /* ==========================
     SCROLL INFINITO
  ========================== */

  carousel.addEventListener("scroll", () => {
    const half = track.scrollWidth / 2;

    if (carousel.scrollLeft >= half) {
      carousel.scrollLeft -= half;
    }

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += half;
    }
  });

});

