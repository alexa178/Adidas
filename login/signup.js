document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve existing users from local storage or initialize an empty array
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    var existingUser = existingUsers.find(function(user) {
        return user.username === username;
    });

    if (existingUser) {
        alert('Username already exists. Please choose another username.');
    } else {
        // Create a new user object and add it to the existing users
        var newUser = { username: username, password: password };
        existingUsers.push(newUser);

        // Store the updated users array in local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        alert('Account created successfully!');
        // Redirect to login page
        window.location.href = "../login/login.html";
    }
});