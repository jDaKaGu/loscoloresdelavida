document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-section]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => {
    const name = sec.dataset.section;

    fetch(`content/${name}.json`)
      .then(res => res.json())
      .then(data => {
        renderSection(sec, name, data);
        observer.observe(sec);

        document.dispatchEvent(
          new CustomEvent("sectionLoaded", { detail: name })
        );
      })
      .catch(() => {
        sec.innerHTML = "<p>Error cargando contenido</p>";
      });
  });
});

function renderSection(container, section, data) {

  if (section === "hero") {
    container.innerHTML = `
      <div class="hero">
        <h1>${data.title}</h1>
        <p>${data.subtitle}</p>
        <img src="${data.image}" alt="">
      </div>
    `;
  }

  if (section === "about") {
    container.innerHTML = `
      <div class="about">
        <h2>${data.title}</h2>
        <p>${data.content}</p>
      </div>
    `;
  }

  if (section === "proyectos") {
    container.innerHTML = `
      <div class="proyectos">
        ${data.items.map(item => `
          <div class="proyecto">
            <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (section === "donaciones") {
    container.innerHTML = `
      <div class="donaciones">
        <p>${data.text}</p>
      </div>
    `;
  }

  if (section === "transparencia") {
    container.innerHTML = `
      <div class="transparencia">
        <p>${data.content}</p>
      </div>
    `;
  }

}
