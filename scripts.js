document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.querySelector(".projects-carousel");
  const track = document.querySelector(".projects-track");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!carousel || !track || !prev || !next) {
    console.error("Carrusel: estructura no encontrada");
    return;
  }

  /* ===============================
     SCROLL CON FLECHAS
  =============================== */

  const card = track.querySelector(".project-card");
  const gap = 24;
  const scrollAmount = card.offsetWidth + gap;

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  /* ===============================
     DRAG (DESKTOP)
  =============================== */

  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.style.cursor = "grab";

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

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const walk = e.pageX - startX;
    carousel.scrollLeft = scrollLeft - walk;
  });

});
