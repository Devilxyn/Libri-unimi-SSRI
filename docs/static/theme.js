/* Gestisce il salvataggio/ripristino del tema */
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');

/* Applica preferenza salvata o del sistema */
if (saved) {
  document.documentElement.setAttribute('data-theme', saved);
  toggle.checked = saved === 'dark';
} else if (matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggle.checked = true;
}

/* Toggle ↔ salva in localStorage */
toggle.addEventListener('change', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}
// Chiudi sidebar quando clicchi fuori (opzionale)
document.addEventListener('click', function (e) {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  if (sidebar.classList.contains('open') &&
    !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});
