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

/* ZOOMED IMAGE PROPERTIES */
document.addEventListener('DOMContentLoaded', () => {
  const poster = document.getElementById('poster-img');
  const modal  = document.getElementById('zoom-modal');
  const zoom   = document.getElementById('zoom-img');

  // open
  poster.addEventListener('click', () => {
    zoom.src = poster.src;
    modal.style.display = 'flex';
    // focus so Esc will be caught
    modal.focus();
  });

  // close on click
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});

  poster.addEventListener('click', () => {
    zoom.src = poster.src;
    zoom.style.width = '200%';      // double size
    zoom.style.height = 'auto';
    modal.style.display = 'block';
  });

  /* Dark/Light Mode button configs */
  document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  if (!btn) {
    console.warn("Toggle button not found!");
    return;
  }

  // Load saved theme
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
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

    // Blur the button to prevent it from appearing stuck
    btn.blur();
  });
});

