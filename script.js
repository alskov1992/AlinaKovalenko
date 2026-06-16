const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const filterButtons = document.querySelectorAll('.filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    portfolioItems.forEach(item => {
      const show = selected === 'all' || item.dataset.category === selected;
      item.classList.toggle('hidden', !show);
    });
  });
});
