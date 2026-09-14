let loginForm = document.getElementById("loginForm");

let usernameInput = document.getElementById("username");

let passwordInput = document.getElementById("password");

let message = document.getElementById("message");


let correctUsername = "saad";

let correctPassword = "12345";


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let username = usernameInput.value.trim();

    let password = passwordInput.value;


    // Empty fields

    if (username === "" || password === "") {

        message.textContent = "Please enter username and password.";

        message.style.color = "red";

        return;
    }


    // Check username

    if (username !== correctUsername) {

        message.textContent = "Username not found.";

        message.style.color = "red";

        passwordInput.value = "";

        return;
    }


    // Check password

    if (password !== correctPassword) {

        message.textContent = "Incorrect password.";

        message.style.color = "red";

        passwordInput.value = "";

        return;
    }


    // Correct username AND password

    message.textContent = "Login successful! 🎉";

    message.style.color = "green";

});