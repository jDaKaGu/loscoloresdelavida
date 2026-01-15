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

document.getElementById('projectsNext')?.addEventListener('click', () => {
  document.getElementById('projectsTrack')
    .scrollBy({ left: 320, behavior: 'smooth' });
});

  const grid = document.getElementById('projectsGrid');
  const nextBtn = document.getElementById('projectsNext');

  nextBtn.addEventListener('click', () => {
    grid.scrollBy({
      left: 320,
      behavior: 'smooth'
    });
  });
 const slider = document.getElementById('projectsGrid');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => isDown = false);
  slider.addEventListener('mouseup', () => isDown = false);

  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });
