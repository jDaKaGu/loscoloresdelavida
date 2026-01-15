/* =========================
   MENÚ LATERAL
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".menu-overlay");

  if (!menuBtn || !sideMenu) return;

  const closeMenu = () => {
    sideMenu.classList.remove("active");
    overlay?.classList.remove("active");
  };

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay?.classList.add("active");
  });

  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);
});


/* =========================
   PROYECTOS (SCROLL + DRAG)
========================= */
document.addEventListener("sectionLoaded", (e) => {
  if (e.detail !== "proyectos") return;

  const grid = document.getElementById("projectsGrid");
  const nextBtn = document.getElementById("projectsNext");

  if (!grid) {
    console.warn("projectsGrid no encontrado");
    return;
  }

  /* --- Flecha --- */
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      grid.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  /* --- Drag desktop --- */
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  grid.style.cursor = "grab";

  grid.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = grid.scrollLeft;
    grid.style.cursor = "grabbing";
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    grid.style.cursor = "grab";
  });

  grid.addEventListener("mouseleave", () => {
    isDown = false;
    grid.style.cursor = "grab";
  });

  grid.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - startX);
    grid.scrollLeft = scrollLeft - walk;
  });

});
