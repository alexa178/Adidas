document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can add logic to check username and password against a database or any other authentication method
    // For this example, let's just check if both fields are filled
    if (username && password) {
        alert('Login successful!');
        // Redirect to another page or perform other actions after successful login
        window.location.href="/index/index.html";
    } else {
        alert('Please enter both username and password.');
    }
});
