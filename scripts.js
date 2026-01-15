/* =========================================================
   MENÚ LATERAL
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".menu-overlay");
  const links = document.querySelectorAll(".side-menu a");

  if (!menuBtn || !sideMenu || !overlay) return;

  const openMenu = () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  };

  const closeMenu = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  };

  menuBtn.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});


/* =========================================================
   PROYECTOS — SLIDER HORIZONTAL
   (se inicializa SOLO cuando la sección se carga)
========================================================= */
document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const slider = document.getElementById("projectsGrid");
  const nextBtn = document.getElementById("projectsNext");

  if (!slider || !nextBtn) {
    console.warn("Slider de proyectos no encontrado");
    return;
  }

  /* ---------- Flecha ---------- */
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  });

  /* ---------- Drag con mouse ---------- */
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  slider.style.cursor = "grab";

  slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  ["mouseleave", "mouseup"].forEach(evt => {
    slider.addEventListener(evt, () => {
      isDown = false;
      slider.style.cursor = "grab";
    });
  });

  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  /* ---------- Touch (móvil / tablet) ---------- */
  let touchStartX = 0;
  let touchScrollLeft = 0;

  slider.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = slider.scrollLeft;
  }, { passive: true });

  slider.addEventListener("touchmove", e => {
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 1.2;
    slider.scrollLeft = touchScrollLeft - walk;
  }, { passive: true });
});
