// Select Elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Open Login Popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close Login Popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Switch to Register Form
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
});

// Switch to Login Form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});