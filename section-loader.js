// Carga secciones desde /sections/*.html automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-section]");

  sections.forEach(sec => {
    const name = sec.getAttribute("data-section");

    fetch(`sections/${name}.html`)
      .then(res => res.text())
      .then(html => {
        // Limpia completamente el contenido previo
        sec.innerHTML = "";

        // Inserta el HTML correctamente
        sec.insertAdjacentHTML("beforeend", html);

        // Fade-in
        sec.classList.add("fade");
        observer.observe(sec);
      })
      .catch(err => console.error("Error cargando sección:", name, err));
  });
});
