// app.js

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // You can perform additional actions upon successful login
    })
    .catch(error => console.error('Error:', error));
}

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // You can perform additional actions upon successful signup
    })
    .catch(error => console.error('Error:', error));
}
// app.js

function navigateTo(page) {
    window.location.href = page;
}

function login() {
    // Existing login function
}

function signup() {
    // Existing signup function
}
