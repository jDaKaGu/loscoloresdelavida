document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-section]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(sec => {
    const name = sec.dataset.section;

    fetch(`sections/${name}.html`)
      .then(res => {
        if (!res.ok) throw new Error(`No se pudo cargar ${name}`);
        return res.text();
      })
      .then(html => {
        sec.innerHTML = html;
        observer.observe(sec);

        document.dispatchEvent(
          new CustomEvent("sectionLoaded", { detail: name })
        );
      })
      .catch(err => {
        console.error(err);
        sec.innerHTML = "<p>Error cargando contenido.</p>";
      });
  });
});
