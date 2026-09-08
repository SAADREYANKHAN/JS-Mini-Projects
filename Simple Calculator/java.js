let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let currentValue = "";
let firstValue = "";
let operator = "";


// Handle all buttons
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.textContent;


        // Numbers and decimal
        if (
            value === "0" ||
            value === "1" ||
            value === "2" ||
            value === "3" ||
            value === "4" ||
            value === "5" ||
            value === "6" ||
            value === "7" ||
            value === "8" ||
            value === "9" ||
            value === "."
        ) {

            currentValue += value;

            display.value = currentValue;
        }


        // Operators
        else if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/" ||
            value === "%"
        ) {

            firstValue = Number(currentValue);

            operator = value;

            currentValue = "";
        }


        // Equal
        else if (value === "=") {

            let secondValue = Number(currentValue);

            let result;


            if (operator === "+") {
                result = firstValue + secondValue;
            }

            else if (operator === "-") {
                result = firstValue - secondValue;
            }

            else if (operator === "*") {
                result = firstValue * secondValue;
            }

            else if (operator === "/") {

                if (secondValue === 0) {
                    display.value = "Error";
                    return;
                }

                result = firstValue / secondValue;
            }

            else if (operator === "%") {
                result = firstValue % secondValue;
            }


            display.value = result;

            currentValue = result.toString();
        }


        // Clear
        else if (value === "AC") {

            currentValue = "";
            firstValue = "";
            operator = "";

            display.value = "";
        }


        // Delete
        else if (value === "DEL") {

            currentValue = currentValue.slice(0, -1);

            display.value = currentValue;
        }

    });

});