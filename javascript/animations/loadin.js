const logo = document.getElementById('logo');
const container = document.getElementById('logo-container');
const mainUI = document.getElementById('main-ui');

// Fade in the logo
logo.style.opacity = 1;

setTimeout(() => {
    container.classList.add('opacity-0');
}, 5000);

setTimeout(() => {
    container.classList.add('hidden');
    
}, 10000);


mainUI.classList.remove('hidden');
mainUI.classList.remove('opacity-0');