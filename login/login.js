// Define the hardcoded users
var hardcodedUsers = [
    { username: "amongus", password: "sugoma" },
    { username: "mert", password: "1234" }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve users from local storage
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user in the existing users array from local storage
    var user = existingUsers.find(function(user) {
        return user.username === username && user.password === password;
    });

    // Check if the user exists in local storage
    if (user) {
        alert('Login successful!');
        // Redirect to another page after successful login
        window.location.href = "../index/index.html";
    } else {
        // Check if the entered credentials match any hardcoded user's credentials
        var isHardcodedUser = hardcodedUsers.some(function(user) {
            return user.username === username && user.password === password;
        });
        
        if (isHardcodedUser) {
            alert('Login successful!');
            // Redirect to another page after successful login
            window.location.href = "../index/index.html";
        } else {
            alert('Invalid username or password.');
        }
    }
});
