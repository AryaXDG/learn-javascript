
// ============================================
// DAY 20: Error Handling
// Topics: try, catch, finally, throw, Error types
// ============================================

// ERROR HANDLING - Deal with errors gracefully

// TRY-CATCH - Handle errors without crashing program

try {
  // Code that might cause an error
  let result = 10 / 0; // This is infinity, not an error
  console.log(result);
  
  // This WILL cause an error
  let x = y + 5; // y is not defined
  
  console.log("This won't execute");
} catch (error) {
  // Code to handle the error
  console.log("An error occurred!");
  console.log("Error message:", error.message);
  console.log("Error name:", error.name);
}

console.log("Program continues after error handling");

// TRY-CATCH-FINALLY - Finally always executes

try {
  console.log("Trying to execute code...");
  let data = JSON.parse('{"name": "John"}'); // Valid JSON
  console.log("Data:", data);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Finally block always executes!");
}

// THROWING ERRORS - Create custom errors

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // This will throw error
} catch (error) {
  console.log("Caught error:", error.message);
}

// DIFFERENT ERROR TYPES

// ReferenceError - Variable not defined
try {
  console.log(nonExistentVariable);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// TypeError - Wrong type
try {
  let num = 5;
  num.toUpperCase(); // Numbers don't have toUpperCase method
} catch (error) {
  console.log("TypeError:", error.message);
}

// SyntaxError - Invalid syntax (usually caught before runtime)
try {
  eval("let x = ;"); // Invalid syntax
} catch (error) {
  console.log("SyntaxError:", error.message);
}

// RangeError - Number outside valid range
try {
  let arr = new Array(-1); // Array length can't be negative
} catch (error) {
  console.log("RangeError:", error.message);
}

// CUSTOM ERROR CLASSES

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative");
  }
  if (age > 150) {
    throw new ValidationError("Age is unrealistic");
  }
  return "Valid age";
}

try {
  console.log(validateAge(25)); // Valid
  console.log(validateAge(-5)); // Invalid
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// NESTED TRY-CATCH

try {
  console.log("Outer try block");
  
  try {
    console.log("Inner try block");
    throw new Error("Inner error");
  } catch (innerError) {
    console.log("Inner catch:", innerError.message);
    throw new Error("Re-throwing from inner catch");
  }
  
} catch (outerError) {
  console.log("Outer catch:", outerError.message);
}

// PRACTICAL EXAMPLES

// Safe JSON parsing
function safeJSONParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("Invalid JSON:", error.message);
    return null;
  }
}

let validJSON = '{"name": "Alice", "age": 30}';
let invalidJSON = '{name: Alice}'; // Missing quotes

console.log("Valid:", safeJSONParse(validJSON));
console.log("Invalid:", safeJSONParse(invalidJSON));

// Safe array access
function safeArrayAccess(array, index) {
  try {
    if (!Array.isArray(array)) {
      throw new TypeError("First argument must be an array");
    }
    if (index < 0 || index >= array.length) {
      throw new RangeError("Index out of bounds");
    }
    return array[index];
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return undefined;
  }
}

let myArray = [1, 2, 3, 4, 5];
console.log(safeArrayAccess(myArray, 2)); // Output: 3
console.log(safeArrayAccess(myArray, 10)); // Out of bounds
console.log(safeArrayAccess("not an array", 0)); // Not an array

// Form validation with error handling
function validateForm(userData) {
  try {
    if (!userData.name || userData.name.trim() === "") {
      throw new ValidationError("Name is required");
    }
    
    if (!userData.email || !userData.email.includes("@")) {
      throw new ValidationError("Valid email is required");
    }
    
    if (!userData.age || userData.age < 18) {
      throw new ValidationError("Must be 18 or older");
    }
    
    console.log("Form is valid!");
    return true;
    
  } catch (error) {
    console.log(`Validation failed: ${error.message}`);
    return false;
  }
}

validateForm({ name: "John", email: "john@example.com", age: 25 });
validateForm({ name: "", email: "john@example.com", age: 25 });
validateForm({ name: "John", email: "invalid-email", age: 25 });

// Resource cleanup with finally
function processFile(filename) {
  console.log(`Opening file: ${filename}`);
  
  try {
    if (filename === "") {
      throw new Error("Filename cannot be empty");
    }
    console.log("Processing file...");
    // Simulate file processing
    return "File processed successfully";
  } catch (error) {
    console.log("Error processing file:", error.message);
    return null;
  } finally {
    console.log(`Closing file: ${filename}`);
    // Cleanup code (like closing file) always runs
  }
}

processFile("data.txt");
processFile("");

console.log("Day 20 Complete!");

