const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

// Evento click tradicional
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');

  // Actualizamos aria-expanded
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
});

// Agregamos accesibilidad por teclado
burger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();  // Evita scroll por la barra espaciadora
    burger.click(); // Dispara el mismo evento click
  }
});
