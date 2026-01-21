/* =====================================================
   CARRUSEL DE PROYECTOS (AJAX / section-loader)
===================================================== */

document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const carousel = document.querySelector(".projects-carousel");
  const track = document.getElementById("projectsTrack");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!carousel || !track || !prev || !next) {
    console.error("Carrusel: elementos no encontrados");
    return;
  }

  /* ================= FLECHAS ================= */

  const card = track.querySelector(".project-card");
  const gap = 24;
  const cardWidth = card.offsetWidth + gap;

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  /* ================= DRAG ================= */

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

  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    carousel.scrollLeft = scrollLeft - (e.pageX - startX);
  });

  /* ================= INFINITO ================= */

  track.innerHTML += track.innerHTML;

  carousel.addEventListener("scroll", () => {
    if (carousel.scrollLeft >= track.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    }
  });
});

