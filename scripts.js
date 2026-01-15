document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.querySelector(".menu-overlay");

  const links = document.querySelectorAll(".side-menu a");

  function openMenu() {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  }

  function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  links.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById('projectsGrid');
  const nextBtn = document.getElementById('projectsNext');

  if (!grid || !nextBtn) return;

  // Flecha
  nextBtn.addEventListener('click', () => {
    grid.scrollBy({ left: 320, behavior: 'smooth' });
  });

  // Drag con mouse
  let isDown = false;
  let startX;
  let scrollLeft;

  grid.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
  });

  ['mouseleave', 'mouseup'].forEach(evt =>
    grid.addEventListener(evt, () => isDown = false)
  );

  grid.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 1.5;
    grid.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("sectionLoaded", (e) => {
  if (e.detail !== "proyectos") return;

  const grid = document.getElementById("projectsGrid");
  const nextBtn = document.getElementById("projectsNext");

  if (!grid || !nextBtn) return;

  // Flecha
  nextBtn.addEventListener("click", () => {
    grid.scrollBy({ left: 320, behavior: "smooth" });
  });

  // Drag con mouse
  let isDown = false;
  let startX;
  let scrollLeft;

  grid.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
    grid.style.cursor = "grabbing";
  });

  ["mouseleave", "mouseup"].forEach(evt =>
    grid.addEventListener(evt, () => {
      isDown = false;
      grid.style.cursor = "grab";
    })
  );

  grid.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 1.5;
    grid.scrollLeft = scrollLeft - walk;
  });
});
