const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');


  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
});


burger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();  // Evita scroll por la barra espaciadora
    burger.click(); // Dispara el mismo evento click
  }
});
