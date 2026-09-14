// ===============================
// ATM ACCOUNT
// ===============================

let balance = 50000;

const correctPIN = "12345";


// ===============================
// GET SCREENS
// ===============================

const screens = document.querySelectorAll(".screen-content");


// ===============================
// FUNCTION TO SHOW SCREEN
// ===============================

function showScreen(screenId) {

    screens.forEach(function(screen) {
        screen.classList.add("hidden");
    });

    document.getElementById(screenId).classList.remove("hidden");
}


// ===============================
// FORMAT MONEY
// ===============================

function formatMoney(amount) {

    return amount.toLocaleString("en-PK");
}


// ===============================
// INSERT CARD
// ===============================

const insertCardBtn =
    document.getElementById("insertCardBtn");

insertCardBtn.addEventListener("click", function() {

    showScreen("pinScreen");

    document.getElementById("pinInput").focus();

});


// ===============================
// PIN SYSTEM
// ===============================

const pinSubmitBtn =
    document.getElementById("pinSubmitBtn");

const pinInput =
    document.getElementById("pinInput");

const pinMessage =
    document.getElementById("pinMessage");


pinSubmitBtn.addEventListener("click", function() {

    let enteredPIN = pinInput.value;

    if (enteredPIN === "") {

        pinMessage.textContent =
            "Please enter your PIN.";

        return;
    }


    if (enteredPIN.length !== 5) {

        pinMessage.textContent =
            "PIN must contain 5 digits.";

        return;
    }


    if (enteredPIN === correctPIN) {

        pinMessage.textContent = "";

        pinInput.value = "";

        showScreen("menuScreen");

    } else {

        pinMessage.textContent =
            "Incorrect PIN. Try again.";

        pinInput.value = "";

        pinInput.focus();
    }

});


// ===============================
// PIN CANCEL
// ===============================

document
    .getElementById("pinCancelBtn")
    .addEventListener("click", function() {

        pinInput.value = "";

        pinMessage.textContent = "";

        showScreen("welcomeScreen");

    });


// ===============================
// BALANCE BUTTON
// ===============================

document
    .getElementById("balanceBtn")
    .addEventListener("click", function() {

        document.getElementById("balanceDisplay")
            .textContent = formatMoney(balance);

        showScreen("balanceScreen");

    });


// ===============================
// BALANCE BACK
// ===============================

document
    .getElementById("balanceBackBtn")
    .addEventListener("click", function() {

        showScreen("menuScreen");

    });


// ===============================
// WITHDRAW BUTTON
// ===============================

document
    .getElementById("withdrawBtn")
    .addEventListener("click", function() {

        document.getElementById("withdrawMessage")
            .textContent = "";

        document.getElementById("customAmount")
            .value = "";

        showScreen("withdrawScreen");

    });


// ===============================
// WITHDRAW FUNCTION
// ===============================

function withdrawMoney(amount) {

    const message =
        document.getElementById("withdrawMessage");


    // YOUR ORIGINAL LOGIC

    if (amount <= 0) {

        message.textContent =
            "Invalid withdrawal amount.";

        return;

    }


    else if (amount > balance) {

        message.textContent =
            "Insufficient balance.";

        return;

    }


    else if (amount % 500 !== 0) {

        message.textContent =
            "Amount must be a multiple of 500.";

        return;

    }


    else {

        balance = balance - amount;


        document.getElementById("withdrawnDisplay")
            .textContent =
            "PKR " + formatMoney(amount);


        document.getElementById("remainingDisplay")
            .textContent =
            "PKR " + formatMoney(balance);


        message.textContent = "";


        showScreen("successScreen");

    }

}


// ===============================
// QUICK WITHDRAW BUTTONS
// ===============================

const amountButtons =
    document.querySelectorAll(".amount-button");


amountButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const amount =
            Number(button.dataset.amount);

        withdrawMoney(amount);

    });

});


// ===============================
// CUSTOM WITHDRAW
// ===============================

document
    .getElementById("customWithdrawBtn")
    .addEventListener("click", function() {

        const customAmount =
            Number(
                document.getElementById("customAmount").value
            );

        withdrawMoney(customAmount);

    });


// ===============================
// WITHDRAW BACK
// ===============================

document
    .getElementById("withdrawBackBtn")
    .addEventListener("click", function() {

        showScreen("menuScreen");

    });


// ===============================
// SUCCESS BACK
// ===============================

document
    .getElementById("successBackBtn")
    .addEventListener("click", function() {

        showScreen("menuScreen");

    });


// ===============================
// DEPOSIT SCREEN
// ===============================

document
    .getElementById("depositBtn")
    .addEventListener("click", function() {

        document.getElementById("depositAmount")
            .value = "";

        document.getElementById("depositMessage")
            .textContent = "";

        showScreen("depositScreen");

    });


// ===============================
// DEPOSIT
// ===============================

document
    .getElementById("depositBtnSubmit")
    .addEventListener("click", function() {

        const amount =
            Number(
                document.getElementById("depositAmount").value
            );

        const message =
            document.getElementById("depositMessage");


        if (amount <= 0) {

            message.textContent =
                "Enter a valid deposit amount.";

            return;
        }


        if (amount % 500 !== 0) {

            message.textContent =
                "Deposit must be a multiple of 500.";

            return;
        }


        balance = balance + amount;


        message.textContent =
            "Deposit successful!";


        document.getElementById("depositAmount")
            .value = "";

    });


// ===============================
// DEPOSIT BACK
// ===============================

document
    .getElementById("depositBackBtn")
    .addEventListener("click", function() {

        showScreen("menuScreen");

    });


// ===============================
// LOGOUT
// ===============================

document
    .getElementById("logoutBtn")
    .addEventListener("click", function() {

        showScreen("goodbyeScreen");

    });


// ===============================
// RESTART ATM
// ===============================

document
    .getElementById("restartBtn")
    .addEventListener("click", function() {

        showScreen("welcomeScreen");

    });