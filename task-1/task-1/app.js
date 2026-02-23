const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filters.forEach(button => {
  button.addEventListener('click', () => {

    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    cards.forEach(card => {
      if (filterValue === 'all') {
        card.style.display = 'flex';
      } 
      else if (filterValue === 'active') {
        card.style.display = card.classList.contains('active') ? 'flex' : 'none';
      } 
      else if (filterValue === 'inactive') {
        card.style.display = card.classList.contains('inactive') ? 'flex' : 'none';
      }
    });
  });
});


document.querySelectorAll('.switch input').forEach(toggle => {
  toggle.addEventListener('change', function() {
    const card = this.closest('.card');
    if (this.checked) {
      card.classList.remove('inactive');
      card.classList.add('active');
    } else {
      card.classList.remove('active');
      card.classList.add('inactive');
    }
  });
});

document.querySelectorAll('.remove').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.card').remove();
  });
});

const settingsBtn = document.querySelector('.settings');

const THEME_KEY = 'theme';

function updateThemeUI(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    settingsBtn.style.background = "url('/task-1/assets/images/icon-sun.svg')";
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    settingsBtn.style.background = "url('/task-1/assets/images/icon-moon.svg')";
  }
}


const saved = localStorage.getItem(THEME_KEY);
const initialDark = saved ? saved === 'dark' : false;
updateThemeUI(initialDark);

settingsBtn.addEventListener('click', () => {
  const nowDark = !document.body.classList.contains('dark-mode');
  updateThemeUI(nowDark);
  localStorage.setItem(THEME_KEY, nowDark ? 'dark' : 'light');
});
