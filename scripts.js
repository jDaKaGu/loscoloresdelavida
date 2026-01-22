document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const carousel = document.querySelector(".projects-carousel");
  const track = document.getElementById("projectsTrack");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!carousel || !track) {
    console.error("Carrusel de proyectos no encontrado");
    return;
  }

  /* ===============================
     CONFIGURACIÓN
  ================================ */

  const gap = 24;
  const card = track.querySelector(".project-card");
  const cardWidth = card.offsetWidth + gap;
  let autoScrollInterval;
  let isInteracting = false;

  /* ===============================
     FLECHAS
  ================================ */

  next?.addEventListener("click", () => {
    pauseAutoScroll();
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  prev?.addEventListener("click", () => {
    pauseAutoScroll();
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  /* ===============================
     DRAG DESKTOP
  ================================ */

  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.style.cursor = "grab";

  carousel.addEventListener("mousedown", e => {
    isDown = true;
    isInteracting = true;
    pauseAutoScroll();
    startX = e.pageX;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    carousel.style.cursor = "grab";
    resumeAutoScroll();
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    carousel.scrollLeft = scrollLeft - (e.pageX - startX);
  });

  /* ===============================
     TOUCH / MÓVIL
  ================================ */

  carousel.addEventListener("touchstart", () => {
    isInteracting = true;
    pauseAutoScroll();
  });

  carousel.addEventListener("touchend", () => {
    resumeAutoScroll();
  });

  /* ===============================
     AUTOSCROLL
  ================================ */

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (isInteracting) return;

      const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 5) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000);
  }

  function pauseAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function resumeAutoScroll() {
    isInteracting = false;
    pauseAutoScroll();
    startAutoScroll();
  }

  startAutoScroll();
});
