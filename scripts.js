const hamburger = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
  });
});


// ====== SMOOTH SCROLL SUAVE ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId !== "#") {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ====== FORMULARIO (Formspree) ======
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector("button[type='submit']");

  if (!form) return;

  form.addEventListener("submit", () => {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Enviando...";
    }
  });
});

// ====== FADE-IN AL HACER SCROLL ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach((elem) => {
  observer.observe(elem);
});
