// main.js

document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // On load, apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    root.setAttribute('data-theme', 'dark');
    btn.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.removeItem('theme');
      btn.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      btn.textContent = '☀️';
    }
  });
});
