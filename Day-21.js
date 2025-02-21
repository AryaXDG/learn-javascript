
// ============================================
// DAY 21: JSON (JavaScript Object Notation)
// Topics: JSON.stringify, JSON.parse, working with JSON
// ============================================

// JSON - Format for storing and transporting data
// Similar to JavaScript objects but with stricter rules

// JAVASCRIPT OBJECT vs JSON

// JavaScript object
let jsObject = {
  name: "Alice",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding"]
};

// JSON string (must use double quotes!)
let jsonString = '{"name":"Alice","age":25,"isStudent":true,"hobbies":["reading","coding"]}';

// JSON.STRINGIFY() - Convert JavaScript object to JSON string

let person4 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  hobbies: ["reading", "gaming", "coding"]
};

let jsonPerson = JSON.stringify(person4);
console.log("JSON string:", jsonPerson);
console.log("Type:", typeof jsonPerson); // string

// Stringify with formatting (indentation)
let prettyJSON = JSON.stringify(person4, null, 2); // 2 spaces indentation
console.log("Pretty JSON:\n" + prettyJSON);

// JSON.PARSE() - Convert JSON string to JavaScript object

let jsonData = '{"name":"Bob","age":28,"city":"NYC"}';
let parsedObject = JSON.parse(jsonData);

console.log("Parsed object:", parsedObject);
console.log("Name:", parsedObject.name);
console.log("Type:", typeof parsedObject); // object

// WORKING WITH ARRAYS IN JSON

let users2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let jsonArray = JSON.stringify(users2);
console.log("JSON array:", jsonArray);

let parsedArray = JSON.parse(jsonArray);
console.log("First user:", parsedArray[0]);

// NESTED OBJECTS IN JSON

let company = {
  name: "Tech Corp",
  founded: 2020,
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ],
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA"
  }
};

let jsonCompany = JSON.stringify(company, null, 2);
console.log("Company JSON:\n" + jsonCompany);

// SELECTIVE STRINGIFY - Only include specific properties

let user2 = {
  name: "Alice",
  age: 25,
  password: "secret123", // We don't want to include this
  email: "alice@example.com"
};

// Second parameter: array of properties to include
let publicData = JSON.stringify(user2, ["name", "age", "email"]);
console.log("Public data:", publicData);

// REPLACER FUNCTION - Transform values during stringify

let data2 = {
  name: "Product",
  price: 99.99,
  inStock: true,
  secretKey: "abc123"
};

let filtered = JSON.stringify(data2, (key, value) => {
  if (key === "secretKey") {
    return undefined; // Exclude this property
  }
  if (typeof value === "number") {
    return value.toFixed(2); // Format numbers
  }
  return value;
});

console.log("Filtered JSON:", filtered);

// REVIVER FUNCTION - Transform values during parse

let jsonDate = '{"name":"Event","date":"2024-12-25T10:00:00.000Z"}';

let event = JSON.parse(jsonDate, (key, value) => {
  if (key === "date") {
    return new Date(value); // Convert string to Date object
  }
  return value;
});

console.log("Event:", event);
console.log("Date is Date object:", event.date instanceof Date);

// ERROR HANDLING WITH JSON

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("Invalid JSON:", error.message);
    return null;
  }
}

let validJSON2 = '{"name":"Alice"}';
let invalidJSON2 = '{name: "Alice"}'; // Invalid: no quotes around key

console.log(safeParse(validJSON2)); // Works
console.log(safeParse(invalidJSON2)); // Returns null

// JSON LIMITATIONS - What CANNOT be converted to JSON

let withFunctions = {
  name: "Test",
  method: function() { console.log("Hello"); }, // Functions are ignored
  symbol: Symbol("test"), // Symbols are ignored
  undef: undefined, // undefined is ignored
  date: new Date(), // Dates become strings
  regex: /abc/ // RegExp becomes empty object
};

console.log("With functions:", JSON.stringify(withFunctions));
// Only name and date (as string) will be included

// PRACTICAL EXAMPLES

// Local Storage simulation (storing user preferences)
let userPreferences = {
  theme: "dark",
  fontSize: 16,
  notifications: true
};

// Save to "storage" (simulated)
let savedPrefs = JSON.stringify(userPreferences);
console.log("Saved:", savedPrefs);

// Load from "storage"
let loadedPrefs = JSON.parse(savedPrefs);
console.log("Loaded preferences:", loadedPrefs);

// API Response simulation
let apiResponse = {
  status: "success",
  data: {
    users: [
      { id: 1, name: "Alice", active: true },
      { id: 2, name: "Bob", active: false }
    ],
    total: 2
  },
  timestamp: new Date().toISOString()
};

console.log("API Response:\n" + JSON.stringify(apiResponse, null, 2));

// Deep clone object using JSON (simple method, has limitations)
let originalObj = {
  name: "Alice",
  scores: [95, 87, 92]
};

let clonedObj = JSON.parse(JSON.stringify(originalObj));
clonedObj.scores[0] = 100;

console.log("Original:", originalObj.scores); // [95, 87, 92]
console.log("Cloned:", clonedObj.scores); // [100, 87, 92]

// Compare objects by converting to JSON
function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let objA = { name: "Alice", age: 25 };
let objB = { name: "Alice", age: 25 };
let objC = { name: "Bob", age: 30 };

console.log("objA === objB:", objA === objB); // false (different references)
console.log("objectsEqual(objA, objB):", objectsEqual(objA, objB)); // true
console.log("objectsEqual(objA, objC):", objectsEqual(objA, objC)); // false

console.log("Day 21 Complete!");

