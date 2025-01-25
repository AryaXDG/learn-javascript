
// ============================================
// DAY 7: Switch Statements
// Topics: switch, case, break, default
// ============================================

// SWITCH STATEMENT - Alternative to multiple if-else statements
// Best used when comparing the same variable to many different values

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break; // Exit the switch statement
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // This will execute
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default: // Executes if no case matches
    console.log("Invalid day");
}

// BREAK KEYWORD - Stops the switch from continuing
// Without break, it will "fall through" to the next case!

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!"); // This will execute
    break; // Without this, it would also execute case "C"
  case "C":
    console.log("Passed");
    break;
  case "D":
    console.log("Needs improvement");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
    console.log("Invalid grade");
}

// FALL-THROUGH BEHAVIOR - Intentionally omitting break
// Sometimes useful when multiple cases should do the same thing

let month = "January";

switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("Winter"); // This will execute
    break; // Break after all winter months
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  default:
    console.log("Invalid month");
}

// SWITCH WITH EXPRESSIONS
let operation = "add";
let a = 10;
let b = 5;
let result1;

switch (operation) {
  case "add":
    result1 = a + b;
    console.log("Result:", result1); // Output: 15
    break;
  case "subtract":
    result1 = a - b;
    console.log("Result:", result1);
    break;
  case "multiply":
    result1 = a * b;
    console.log("Result:", result1);
    break;
  case "divide":
    result1 = a / b;
    console.log("Result:", result1);
    break;
  default:
    console.log("Unknown operation");
}

// WHEN TO USE SWITCH vs IF-ELSE:
// Use switch when: Checking one variable against many specific values
// Use if-else when: Complex conditions, ranges, multiple variables

console.log("Day 7 Complete!");

