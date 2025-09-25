//   chap 35

function greet(name) {
  return "Hello, " + name + "!";
}

function add(a, b) {
  return a + b;
}

console.log(greet("Gun"));   
console.log(add(5, 10)); 

// chap 36

function greet(name) {
  return "Hello, " + name + "!";
}

function multiply(a, b) {
  return a * b;
}

console.log(greet("Gun"));
console.log(multiply(4, 7));


// chap 37

function square(number) {
  return number * number;
}

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let result1 = square(5);
let result2 = fullName("Gun", "Khan");

console.log(result1);
console.log(result2);


// chap 38

let globalVar = "I am global";

function testVariables() {
  let localVar = "I am local";
  console.log(localVar);
  console.log(globalVar);
}

testVariables();
console.log(globalVar);


// chap 39

let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}


// chap 40

let color = "red";

switch(color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}

// chap 43

let count = 1;

while (count <= 5) {
  console.log("Number:", count);
  count++;
}

// chap 44

let NUM = 1;

do {
  console.log("Value:", NUM);
  NUM++;
} while (NUM <= 5);

// chap 45

let link = document.getElementById("myLink");

link.addEventListener("click", function(event) {
  event.preventDefault(); 
  alert("Link was clicked!");
});