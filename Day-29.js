
// ============================================
// DAY 29: Asynchronous JavaScript - Timers
// Topics: Synchronous vs Asynchronous, setTimeout, setInterval
// ============================================

// SYNCHRONOUS - Code executes line by line, one at a time.
console.log("Start (Sync)"); // 1st
console.log("Processing... (Sync)"); // 2nd
console.log("End (Sync)"); // 3rd

// ASYNCHRONOUS - Code that runs in the background
// JavaScript engine doesn't wait for it to finish.
// It moves on to the next line.

// SETTIMEOUT - Run a function ONCE after a specified delay (in milliseconds)
// Syntax: setTimeout(callback, delayInMs)

console.log("Before setTimeout (Async)"); // 1st

setTimeout(() => {
    console.log("Inside setTimeout (Async) - 2 seconds later"); // 3rd
}, 2000); // 2000 ms = 2 seconds

console.log("After setTimeout (Async)"); // 2nd

// Output order:
// 1. Before setTimeout (Async)
// 2. After setTimeout (Async)
// 3. Inside setTimeout (Async) - 2 seconds later

// CLEARTIMEOUT - Cancel a setTimeout before it runs
let timerId = setTimeout(() => {
    console.log("This should NOT run!");
}, 5000);

console.log("Timer scheduled with ID:", timerId);

// We can cancel it
clearTimeout(timerId);
console.log("Timer cancelled!");

// SETINTERVAL - Run a function REPEATEDLY at a specified interval
// Syntax: setInterval(callback, intervalInMs)

console.log("Starting interval...");
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Interval tick: ${count}`);
    
    // We must stop it, or it runs forever
    if (count >= 5) {
        // CLEARINTERVAL - Stop the interval
        clearInterval(intervalId);
        console.log("Interval stopped!");
    }
}, 1000); // Runs every 1 second

// CALLBACKS - The foundation of async JS
// A callback is a function passed into another function as an argument,
// which is then invoked inside the outer function.
// setTimeout and setInterval both use callbacks.

// Example of a custom function that uses a callback
function fetchData(callback) {
    // Simulate fetching data (takes 2 seconds)
    setTimeout(() => {
        let data = { name: "Alice", age: 30 };
        callback(data); // Call the callback function with the data
    }, 2000);
}

// Call fetchData and provide a callback function
console.log("Fetching data...");
fetchData((data) => {
    console.log("Data received:", data);
});

// "Callback Hell" - Nested callbacks (can get messy)
setTimeout(() => {
    console.log("Step 1 done");
    setTimeout(() => {
        console.log("Step 2 done");
        setTimeout(() => {
            console.log("Step 3 done");
            // This is "callback hell". Promises (Day 30) solve this.
        }, 1000);
    }, 1000);
}, 1000);

console.log("Day 29 Complete!");

