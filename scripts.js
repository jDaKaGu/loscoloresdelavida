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

document.addEventListener("sectionLoaded", e => {
  if (e.detail !== "proyectos") return;

  const grid = document.querySelector(".projects-grid");
  const prev = document.getElementById("projectsPrev");
  const next = document.getElementById("projectsNext");

  if (!grid) {
    console.error("projects-grid no existe en el DOM");
    return;
  }

  /* ==========================
     DRAG CON MOUSE (DESKTOP)
  ========================== */

  let isDown = false;
  let startX;
  let scrollLeft;

  grid.addEventListener("mousedown", e => {
    isDown = true;
    grid.classList.add("dragging");
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
    grid.classList.remove("dragging");
  });

  grid.addEventListener("mouseleave", () => {
    isDown = false;
    grid.classList.remove("dragging");
  });

  grid.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 1.5;
    grid.scrollLeft = scrollLeft - walk;
  });

  /* ==========================
     FLECHAS
  ========================== */

  const scrollAmount = 320;

  next?.addEventListener("click", () => {
    grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prev?.addEventListener("click", () => {
    grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});

const carousel = document.querySelector('.projects-carousel');
const track = document.getElementById('projectsTrack');
const prev = document.getElementById('projectsPrev');
const next = document.getElementById('projectsNext');


const cardWidth = 344;


/* Flechas */
next.onclick = () => carousel.scrollBy({ left: cardWidth, behavior:'smooth' });
prev.onclick = () => carousel.scrollBy({ left: -cardWidth, behavior:'smooth' });


/* Drag */
let isDown = false, startX, scrollLeft;


carousel.addEventListener('mousedown', e => {
isDown = true;
startX = e.pageX;
scrollLeft = carousel.scrollLeft;
carousel.style.cursor='grabbing';
});


window.addEventListener('mouseup', () => {
isDown=false;
carousel.style.cursor='grab';
});


carousel.addEventListener('mousemove', e => {
if(!isDown) return;
e.preventDefault();
carousel.scrollLeft = scrollLeft - (e.pageX - startX);
});


/* Infinito */
track.innerHTML += track.innerHTML;


carousel.addEventListener('scroll', () => {
if(carousel.scrollLeft >= track.scrollWidth / 2){
carousel.scrollLeft = 0;
}
});
