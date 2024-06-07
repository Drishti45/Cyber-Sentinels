document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    if (username === 'Drishti' && password === 'password') {
        window.location.href = 'admin.html';
    } else {
        loginMessage.textContent = 'Incorrect username or password. Please try again.';
        loginMessage.style.color = 'red';
    }
});
