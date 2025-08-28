
// Variable declarations
let userName = "Alice";
let age = 20;

// Conditionals
if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}

// Output to the webpage
document.getElementById("output").innerText =
  `Hello ${userName}, your age is ${age}.`;

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total: $" + calculateTotal(10, 3));

// Function 2: Format a string
function greetUser(name) {
  return `Welcome, ${name}!`;
}
console.log(greetUser("Alice"))

// Example 1: For loop (countdown)
for (let i = 5; i > 0; i--) {
  console.log("Countdown: " + i);
}

// Example 2: Array iteration with forEach
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit) => {
  console.log("Fruit: " + fruit);
});

// 1. Toggle message on button click
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  let outputDiv = document.getElementById("output");
  if (outputDiv.innerText.includes("Hello")) {
    outputDiv.innerText = "Message hidden!";
  } else {
    outputDiv.innerText = `Hello ${userName}, your age is ${age}.`;
  }
});

// 2. Change background color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  document.body.style.background =
    document.body.style.background === "lightblue" ? "#f9f9f9" : "lightblue";
});

// 3. Add new items to list
const addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.innerText = "New item added!";
  document.getElementById("itemList").appendChild(newItem);
});
