let input = prompt("Enter a value:");

let value;

if (input === "null") {
    value = null;
} 
else if (input === "true") {
    value = true;
} 
else if (input === "false") {
    value = false;
} 
else if (input !== "" && !isNaN(input)) {
    value = Number(input);
} 
else {
    value = input;
}

console.log("Value:", value);
console.log("Data Type:", typeof value);