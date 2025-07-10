document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const btn  = document.getElementById('theme-toggle');
  const poster = document.getElementById('poster-img');
  const modal  = document.getElementById('zoom-modal');
  const zoom   = document.getElementById('zoom-img');

  // --- Theme Toggle ---
  if (localStorage.getItem('theme') === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (btn) btn.textContent = '☀️';
  }

  if (btn) {
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

      // Optional pressed effect
      btn.classList.add('active');
      setTimeout(() => {
        btn.classList.remove('active');
      }, 200);

      // Prevent the "clicked" look staying stuck
      setTimeout(() => btn.blur(), 1);
    });
  }

  // --- Zoom Modal ---
  if (poster && modal && zoom) {
    poster.addEventListener('click', () => {
      zoom.src = poster.src;
      zoom.style.width = '200%';  // or whatever zoom level
      zoom.style.height = 'auto';
      modal.style.display = 'flex';
      modal.focus();
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  }
});
