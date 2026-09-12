function generateUsername() {

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let number = document.getElementById("number").value;

    // Remove extra spaces
    firstName = firstName.trim();
    lastName = lastName.trim();

    // Convert to lowercase
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    // Generate random number
    let randomNumber = Math.floor(Math.random() * 100);

    // Different username styles
    let usernames = [
        firstName + "_" + lastName,
        firstName + "." + lastName + number,
        lastName + "_" + firstName + "_" + randomNumber,
        firstName + "_" + randomNumber,
        firstName + "_" + lastName + "_" + randomNumber
    ];

    // Select random username
    let randomIndex = Math.floor(Math.random() * usernames.length);

    let username = usernames[randomIndex];

    // Display username
    document.getElementById("username").textContent = username;
}