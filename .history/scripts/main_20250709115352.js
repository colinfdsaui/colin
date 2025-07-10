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


document.getElementById('poster-img').addEventListener('click', () => {
  // set the zoomed image src (optional if it's the same)
  const zoomImg = document.getElementById('zoom-img');
  zoomImg.src = document.getElementById('poster-img').src;

  // show the modal
  const modal = document.getElementById('zoom-modal');
  modal.style.display = 'flex';    // assuming your CSS uses flex
});

document.getElementById('zoom-modal').addEventListener('click', () => {
  document.getElementById('zoom-modal').style.display = 'none';
});