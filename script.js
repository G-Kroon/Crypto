// script.js
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate email and password
    // If valid, redirect to dashboard
    window.location.href = 'dashboard.html';
});

// Signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate name, email, and password
    // If valid, register user and redirect to dashboard
    window.location.href = 'dashboard.html';
});
