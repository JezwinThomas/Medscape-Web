// scripts.js
function handleLogin()
{
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;


    const predefinedUsername = "admin";    
    const predefinedPassword = "1234";

    if (username === predefinedUsername && password === predefinedPassword) {
        window.location.href = "home.html";
    } else {
        alert('Invalid username or password');
    }
}

document.querySelector('.login__submit').addEventListener('click', function(event) {
    event.preventDefault();
    handleLogin();
});
document.querySelector('.login').addEventListener('keydown', function(event) {
    if (event.key === "Enter")
    {    
        event.preventDefault();
        handleLogin();
    }    
});
