const themeMap = {
  light: {
    body: '#F3F4F6',
    panel: '#FFFFFF',
    panelBorder: '#D1D5DB',
    border: '#D1D5DB',
    header: '#D1D5DB',
    text: '#111827',
    mutedText: '#374151',
    footer: '#E2E8F0',
    input: '#FFFFFF'
  },
  dark: {
    body: '#0F172A',
    panel: '#1E293B',
    panelBorder: '#334155',
    border: '#334155',
    header: '#334155',
    text: '#E5E7EB',
    mutedText: '#CBD5E1',
    footer: '#111827',
    input: '#0F172A'
  }
};

function applyTheme(themeName) {
  const theme = themeMap[themeName] || themeMap.light;
  const body = document.body;
  const header = document.getElementById('header');
  const searchArea = document.getElementById('search-area');
  const searchAreaContainer = document.getElementById('search-area-container');
  const searchInput = document.getElementById('search-input-box');
  const footer = document.querySelector('footer');
  const themeButtons = document.querySelectorAll('button.bg-sky-200');
  const resultCards = document.querySelectorAll('.search-result-country-info, .search-result-country-weather');

  body.style.backgroundColor = theme.body;
  body.style.color = theme.text;

  if (header) {
    header.style.borderBottomColor = theme.border;
    header.style.color = theme.text;
  }

  if (searchArea) {
    searchArea.style.borderBottomColor = theme.border;
    searchArea.style.color = theme.text;
  }

  if (searchAreaContainer) {
    searchAreaContainer.style.borderColor = theme.border;
    searchAreaContainer.style.color = theme.text;
  }

  if (searchInput) {
    searchInput.style.backgroundColor = theme.input;
    searchInput.style.color = theme.text;
    searchInput.style.outline = 'none';
  }

  if (footer) {
    footer.style.backgroundColor = theme.footer;
    footer.style.color = theme.text;
  }

  themeButtons.forEach((button) => {
    button.style.color = '#0F172A';
  });

  resultCards.forEach((card) => {
    card.style.backgroundColor = theme.panel;
    card.style.borderColor = theme.panelBorder;
    card.style.color = theme.text;

    card.querySelectorAll('p').forEach((paragraph) => {
      if (!paragraph.classList.contains('text-green-500') && !paragraph.classList.contains('text-red-300')) {
        paragraph.style.color = theme.text;
      }
    });

    card.querySelectorAll('.bg-gray-300').forEach((sectionHeader) => {
      sectionHeader.style.backgroundColor = theme.header;
      sectionHeader.style.color = theme.text;
    });

    card.querySelectorAll('.border-gray-200').forEach((line) => {
      line.style.borderColor = theme.panelBorder;
    });
  });
}

function darkmodetoggle() {
  const currentTheme = document.body.dataset.theme === 'dark' ? 'dark' : 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  localStorage.setItem('climasphere-theme', nextTheme);
  applyTheme(nextTheme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('climasphere-theme');
  const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = initialTheme;
  applyTheme(initialTheme);
}

initializeTheme();
window.darkmodetoggle = darkmodetoggle;
