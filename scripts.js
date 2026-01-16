document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const grid = document.getElementById("projectsGrid");
  const next = document.getElementById("projectsNext");
  const prev = document.getElementById("projectsPrev");

  if (!grid || !next || !prev) {
    console.error("Carrusel: elementos no encontrados");
    return;
  }

  // Flechas
  next.onclick = () =>
    grid.scrollBy({ left: 320, behavior: "smooth" });

  prev.onclick = () =>
    grid.scrollBy({ left: -320, behavior: "smooth" });

  // Drag desktop
  let isDown = false;
  let startX, scrollLeft;

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
    grid.scrollLeft = scrollLeft - (e.pageX - startX);
  });
});
