// main.js

document.addEventListener('DOMContentLoaded', () => {
  const root       = document.documentElement;
  const btn        = document.getElementById('theme-toggle');

  // PDF elements
  const pdfLink    = document.getElementById('pdf-link');
  const pdfModal   = document.getElementById('pdf-modal');
  const pdfContent = document.getElementById('pdf-content');

  // Image elements
  const poster     = document.getElementById('poster-img');
  const imageModal = document.getElementById('image-modal');
  const zoomImg    = document.getElementById('img-zoom');

  // --- Theme Toggle (unchanged) ---
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
      // pressed effect + blur
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 200);
      setTimeout(() => btn.blur(), 100);
    });
  }

  // --- PDF Modal Handlers ---
  if (pdfLink && pdfModal && pdfContent) {
    pdfLink.addEventListener('click', e => {
      e.preventDefault();
      const url = pdfLink.href;
      pdfContent.innerHTML = `<iframe src="${url}#view=FitH" allowfullscreen></iframe>`;
      pdfModal.style.display = 'block';
      pdfModal.focus();
    });

    // close on outside click
    pdfModal.addEventListener('click', e => {
      if (e.target === pdfModal) {
        pdfModal.style.display = 'none';
        pdfContent.innerHTML = '';
      }
    });
  }

  // --- Image Modal Handlers ---
  if (poster && imageModal && zoomImg) {
    poster.addEventListener('click', () => {
      zoomImg.src = poster.src;
      zoomImg.style.transform = 'scale(2)';
      zoomImg.style.transformOrigin = 'top left';
      imageModal.style.display = 'flex';
      imageModal.focus();
    });

    imageModal.addEventListener('click', () => {
      imageModal.style.display = 'none';
      // reset transform so next time starts fresh
      zoomImg.style.transform = '';
    });
  }

  // --- Global Escape Key to Close Either Modal ---
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (pdfModal && pdfModal.style.display === 'block') {
        pdfModal.style.display = 'none';
        pdfContent.innerHTML = '';
      }
      if (imageModal && imageModal.style.display === 'flex') {
        imageModal.style.display = 'none';
        zoomImg.style.transform = '';
      }
    }
  });
});
