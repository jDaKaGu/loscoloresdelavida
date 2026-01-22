document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const carousel = document.querySelector(".projects-carousel");
  const track = document.getElementById("projectsTrack");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!carousel || !track) return;

  /* ===============================
     CONFIG
  ================================ */

  const gap = 24;
  const card = track.querySelector(".project-card");
  const cardWidth = card.offsetWidth + gap;
  let autoScrollTimer;
  let isInteracting = false;

  /* ===============================
     INFINITO (CLONADO)
  ================================ */

  track.innerHTML += track.innerHTML;

  // esperar a que el DOM pinte
  requestAnimationFrame(() => {
    carousel.scrollLeft = track.scrollWidth / 2;
  });

  function normalizeScroll() {
    const half = track.scrollWidth / 2;

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += half;
    } else if (carousel.scrollLeft >= half * 2) {
      carousel.scrollLeft -= half;
    }
  }

  carousel.addEventListener("scroll", normalizeScroll);

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
  let startX, scrollStart;

  carousel.style.cursor = "grab";

  carousel.addEventListener("mousedown", e => {
    isDown = true;
    isInteracting = true;
    pauseAutoScroll();
    startX = e.pageX;
    scrollStart = carousel.scrollLeft;
    carousel.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    carousel.style.cursor = "grab";
    resumeAutoScroll();
  });

  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    carousel.scrollLeft = scrollStart - (e.pageX - startX);
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
    autoScrollTimer = setInterval(() => {
      if (isInteracting) return;
      carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, 4000);
  }

  function pauseAutoScroll() {
    clearInterval(autoScrollTimer);
  }

  function resumeAutoScroll() {
    isInteracting = false;
    pauseAutoScroll();
    startAutoScroll();
  }

  startAutoScroll();
});
