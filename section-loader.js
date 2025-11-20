// Carga secciones desde /sections/*.html automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-section]");

  sections.forEach(sec => {
    const name = sec.getAttribute("data-section");
    fetch(`sections/${name}.html`)
      .then(res => res.text())
      .then(html => {
        sec.innerHTML = html;
        sec.classList.add("fade");

        // Activa animación fade-in
        observer.observe(sec);
      })
      .catch(err => console.error("Error cargando sección:", name, err));
  });
});

// Fade-in al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
