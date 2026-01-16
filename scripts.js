document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".menu-overlay");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }
});

/* === PROYECTOS (CUANDO YA EXISTEN) === */
document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const grid = document.getElementById("projectsGrid");
  const nextBtn = document.getElementById("projectsNext");

  if (!grid || !nextBtn) {
    console.warn("Projects grid no encontrado");
    return;
  }

  /* Flecha */
  nextBtn.addEventListener("click", () => {
    grid.scrollBy({ left: 320, behavior: "smooth" });
  });

  /* Drag mouse */
  let isDown = false;
  let startX;
  let scrollLeft;

  grid.style.cursor = "grab";

  grid.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = grid.scrollLeft;
    grid.style.cursor = "grabbing";
  });

  ["mouseup", "mouseleave"].forEach(evt =>
    grid.addEventListener(evt, () => {
      isDown = false;
      grid.style.cursor = "grab";
    })
  );

  grid.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 1.2;
    grid.scrollLeft = scrollLeft - walk;
  });

  /* Touch (Android) */
  let touchStartX = 0;
  let touchScrollLeft = 0;

  grid.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = grid.scrollLeft;
  });

  grid.addEventListener("touchmove", e => {
    const x = e.touches[0].pageX;
    const walk = x - touchStartX;
    grid.scrollLeft = touchScrollLeft - walk;
  });
});
