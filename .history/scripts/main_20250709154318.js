document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const btn  = document.getElementById('theme-toggle');
  const poster = document.getElementById('poster-img');
  const modal  = document.getElementById('zoom-modal');
  const zoom   = document.getElementById('zoom-img');
  const zoomContent = document.getElementById('zoom-content');
  const pdfLink     = document.getElementById('pdf-link');

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
      setTimeout(() => btn.blur(), 100);
    });
  }

  // --- Zoom Modal ---
  if (poster && modal && zoom) {
    poster.addEventListener('click', () => {
      zoom.src = poster.src;
      zoom.style.transform = 'scale(2)';
      zoom.style.transformOrigin = 'top left';
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
  // Click on PDF preview
  pdfLink.addEventListener('click', e => {
    e.preventDefault();
    const pdfUrl = pdfLink.getAttribute('href');

    // Inject an iframe for the full PDF
    zoomContent.innerHTML = `<iframe src="${pdfUrl}#view=FitH" allowfullscreen></iframe>`;

    modal.style.display = 'block';
    modal.focus();
  });

  // Close on click outside content
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      zoomContent.innerHTML = '';  // remove iframe
    }
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      zoomContent.innerHTML = '';
    }
  });
});
