
// ============================================
// DAY 19: Date & Time
// Topics: Date object, getting/setting dates, formatting
// ============================================

// DATE OBJECT - Working with dates and times

// CREATING DATES

// Current date and time
let now = new Date();
console.log("Current date:", now);

// Specific date (year, month, day, hour, minute, second, millisecond)
// NOTE: Month is 0-indexed (0 = January, 11 = December)
let specificDate = new Date(2024, 0, 15); // January 15, 2024
console.log("Specific date:", specificDate);

let fullDate = new Date(2024, 11, 25, 10, 30, 0); // Dec 25, 2024, 10:30:00
console.log("Full date:", fullDate);

// From string
let dateFromString = new Date("2024-12-25");
console.log("From string:", dateFromString);

let dateFromString2 = new Date("December 25, 2024");
console.log("From string 2:", dateFromString2);

// From timestamp (milliseconds since Jan 1, 1970)
let dateFromTimestamp = new Date(1703462400000);
console.log("From timestamp:", dateFromTimestamp);

// GETTING DATE COMPONENTS

let date = new Date();

// Get year
console.log("Year:", date.getFullYear()); // e.g., 2025

// Get month (0-11, so add 1 for human-readable)
console.log("Month:", date.getMonth()); // 0 = January
console.log("Month (readable):", date.getMonth() + 1);

// Get day of month (1-31)
console.log("Day:", date.getDate());

// Get day of week (0-6, 0 = Sunday)
console.log("Day of week:", date.getDay()); // 0 = Sunday, 1 = Monday, etc.

// Get hours (0-23)
console.log("Hours:", date.getHours());

// Get minutes (0-59)
console.log("Minutes:", date.getMinutes());

// Get seconds (0-59)
console.log("Seconds:", date.getSeconds());

// Get milliseconds (0-999)
console.log("Milliseconds:", date.getMilliseconds());

// Get timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", date.getTime());

// SETTING DATE COMPONENTS

let myDate = new Date();

// Set year
myDate.setFullYear(2026);
console.log("After setFullYear:", myDate);

// Set month (0-11)
myDate.setMonth(5); // June
console.log("After setMonth:", myDate);

// Set day
myDate.setDate(15);
console.log("After setDate:", myDate);

// Set hours
myDate.setHours(14);
console.log("After setHours:", myDate);

// Set minutes
myDate.setMinutes(30);
console.log("After setMinutes:", myDate);

// FORMATTING DATES

let today = new Date();

// toDateString() - Readable date string
console.log("toDateString:", today.toDateString());

// toTimeString() - Readable time string
console.log("toTimeString:", today.toTimeString());

// toLocaleDateString() - Localized date
console.log("toLocaleDateString:", today.toLocaleDateString());

// toLocaleTimeString() - Localized time
console.log("toLocaleTimeString:", today.toLocaleTimeString());

// toLocaleString() - Localized date and time
console.log("toLocaleString:", today.toLocaleString());

// toISOString() - ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log("toISOString:", today.toISOString());

// DATE ARITHMETIC

// Add days to a date
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Add 7 days
console.log("7 days from now:", futureDate.toDateString());

// Subtract days
let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 7); // Subtract 7 days
console.log("7 days ago:", pastDate.toDateString());

// COMPARING DATES

let date1 = new Date("2024-01-01");
let date2 = new Date("2024-12-31");

console.log("date1 < date2:", date1 < date2); // Output: true
console.log("date1 > date2:", date1 > date2); // Output: false

// Calculate difference in days
let diffInMs = date2 - date1; // Difference in milliseconds
let diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert to days
console.log("Difference in days:", diffInDays);

// PRACTICAL EXAMPLES

// Get day name
function getDayName(date) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

console.log("Today is:", getDayName(new Date()));

// Get month name
function getMonthName(date) {
  let months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()];
}

console.log("Current month:", getMonthName(new Date()));

// Format date as MM/DD/YYYY
function formatDate(date) {
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

console.log("Formatted date:", formatDate(new Date()));

// Calculate age
function calculateAge(birthDate) {
  let today = new Date();
  let birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  let monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

console.log("Age:", calculateAge("2000-05-15")); // Calculate age for someone born on May 15, 2000

// Check if date is weekend
function isWeekend(date) {
  let day = date.getDay();
  return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
}

console.log("Is today weekend?", isWeekend(new Date()));

console.log("Day 19 Complete!");

