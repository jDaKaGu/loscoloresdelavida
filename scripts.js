// Rediseño: scripts.js — mejora y adaptación del script original


if (menuBtn && navMenu) {
menuBtn.addEventListener('click', () => {
const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
menuBtn.setAttribute('aria-expanded', String(!expanded));
navMenu.classList.toggle('active');
menuBtn.classList.toggle('open');
});


// Cerrar el menú al hacer click en un link (UX móvil)
navMenu.querySelectorAll('a').forEach(a => {
a.addEventListener('click', () => {
if (navMenu.classList.contains('active')) {
navMenu.classList.remove('active');
menuBtn.setAttribute('aria-expanded','false');
}
});
});
}


// ====== FADE-IN AL HACER SCROLL (IntersectionObserver) ======
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add('visible');
});
}, {threshold: 0.12});


document.querySelectorAll('.hero, .card, .hero-copy').forEach(el => {
observer.observe(el);
});


// ====== SMOOTH SCROLL SUAVE para anclas internas ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
const targetId = this.getAttribute('href');
if (targetId && targetId !== '#') {
const target = document.querySelector(targetId);
if (target) {
e.preventDefault();
target.scrollIntoView({behavior: 'smooth'});
}
}
});
});


// ====== FORMULARIO (UX on submit) ======
const form = document.querySelector('form');
const submitBtn = document.querySelector("button[type='submit']");
if (form) {
form.addEventListener('submit', () => {
if (submitBtn) { submitBtn.disabled = true; submitBtn.innerText = 'Enviando...'; }
});
}


// ====== Footer: año automático ======
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
});


/* FIN scripts.js */
