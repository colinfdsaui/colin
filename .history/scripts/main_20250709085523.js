// at the bottom of <body>, after loading your other scripts
<script>
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  // On load, apply saved theme
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

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
</script>
