// Cargar secciones dinámicamente
document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("[data-section]");
 
  // Observer para animación fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => {
    const name = sec.getAttribute("data-section");

    fetch(`sections/${name}.html`)
      .then(res => res.text())
      .then(html => {
        sec.innerHTML = "";
        sec.insertAdjacentHTML("beforeend", html);
        observer.observe(sec);
      })
      .catch(err => console.error("Error cargando sección:", name, err));
  });
});
