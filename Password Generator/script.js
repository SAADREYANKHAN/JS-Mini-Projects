class PasswordGenerator {

    constructor(length) {
        this.length = length;

        this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lowercase = "abcdefghijklmnopqrstuvwxyz";
        this.numbers = "0123456789";
        this.symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    generatePassword(options) {

        let characters = "";

        if (options.uppercase) {
            characters += this.uppercase;
        }

        if (options.lowercase) {
            characters += this.lowercase;
        }

        if (options.numbers) {
            characters += this.numbers;
        }

        if (options.symbols) {
            characters += this.symbols;
        }

        if (characters.length === 0) {
            return "";
        }

        let password = "";

        for (let i = 0; i < this.length; i++) {

            let randomIndex = Math.floor(
                Math.random() * characters.length
            );

            password += characters[randomIndex];
        }

        return password;
    }

    getStrength(options) {

        let score = 0;

        if (this.length >= 8) {
            score++;
        }

        if (this.length >= 12) {
            score++;
        }

        if (this.length >= 16) {
            score++;
        }

        if (options.uppercase) {
            score++;
        }

        if (options.lowercase) {
            score++;
        }

        if (options.numbers) {
            score++;
        }

        if (options.symbols) {
            score++;
        }

        if (score <= 2) {
            return {
                text: "Weak",
                width: "30%"
            };
        }

        if (score <= 4) {
            return {
                text: "Medium",
                width: "60%"
            };
        }

        return {
            text: "Strong",
            width: "100%"
        };
    }
}


// ==========================================
// HTML ELEMENTS
// ==========================================

const passwordInput = document.getElementById("password");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");

const lengthSlider = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

const uppercaseCheckbox = document.getElementById("uppercase");

const lowercaseCheckbox = document.getElementById("lowercase");

const numbersCheckbox = document.getElementById("numbers");

const symbolsCheckbox = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");

const strengthProgress = document.getElementById("strengthProgress");


// ==========================================
// CREATE OBJECT
// ==========================================

let generator = new PasswordGenerator(
    Number(lengthSlider.value)
);


// ==========================================
// GET OPTIONS
// ==========================================

function getOptions() {

    return {
        uppercase: uppercaseCheckbox.checked,
        lowercase: lowercaseCheckbox.checked,
        numbers: numbersCheckbox.checked,
        symbols: symbolsCheckbox.checked
    };
}


// ==========================================
// GENERATE PASSWORD
// ==========================================

function createPassword() {

    generator.length = Number(lengthSlider.value);

    let options = getOptions();

    let password = generator.generatePassword(options);

    if (password === "") {

        passwordInput.value =
            "Select at least one option";

        strengthText.textContent = "Weak";

        strengthProgress.style.width = "10%";

        return;
    }

    passwordInput.value = password;

    updateStrength(options);
}


// ==========================================
// UPDATE STRENGTH
// ==========================================

function updateStrength(options) {

    let strength = generator.getStrength(options);

    strengthText.textContent = strength.text;

    strengthProgress.style.width = strength.width;
}


// ==========================================
// LENGTH SLIDER
// ==========================================

lengthSlider.addEventListener("input", function () {

    lengthValue.textContent = this.value;

    generator.length = Number(this.value);

    updateStrength(getOptions());
});


// ==========================================
// GENERATE BUTTON
// ==========================================

generateBtn.addEventListener("click", function () {

    createPassword();

});


// ==========================================
// COPY BUTTON
// ==========================================

copyBtn.addEventListener("click", function () {

    let password = passwordInput.value;

    if (
        password === "" ||
        password === "Select at least one option"
    ) {
        return;
    }

    navigator.clipboard.writeText(password)
        .then(function () {

            copyBtn.textContent = "✓";

            setTimeout(function () {
                copyBtn.textContent = "📋";
            }, 1500);

        })
        .catch(function () {

            passwordInput.select();

            document.execCommand("copy");

            copyBtn.textContent = "✓";

            setTimeout(function () {
                copyBtn.textContent = "📋";
            }, 1500);

        });
});


// ==========================================
// CHECKBOX EVENTS
// ==========================================

uppercaseCheckbox.addEventListener("change", function () {
    updateStrength(getOptions());
});

lowercaseCheckbox.addEventListener("change", function () {
    updateStrength(getOptions());
});

numbersCheckbox.addEventListener("change", function () {
    updateStrength(getOptions());
});

symbolsCheckbox.addEventListener("change", function () {
    updateStrength(getOptions());
});


// ==========================================
// GENERATE PASSWORD WHEN PAGE LOADS
// ==========================================

createPassword();