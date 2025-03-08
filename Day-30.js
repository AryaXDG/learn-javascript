
// ============================================
// DAY 30: Asynchronous JavaScript - Promises & Fetch
// Topics: Promises, .then(), .catch(), Fetch API
// ============================================

// PROMISES - A modern solution for async operations.
// A Promise is an object representing the eventual completion (or failure)
// of an asynchronous operation.

// A promise has 3 states:
// 1. Pending: Initial state, operation hasn't completed
// 2. Fulfilled (Resolved): Operation completed successfully
// 3. Rejected: Operation failed

// CREATING A PROMISE (for demonstration)
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Operation was successful!"); // Send back data
        } else {
            reject("Operation failed!"); // Send back error
        }
    }, 2000);
});

// CONSUMING A PROMISE - Using .then() and .catch()

console.log("Promise started...");

myPromise
    .then((successMessage) => {
        // This runs if the promise is resolved (success)
        console.log(successMessage); // Output: Operation was successful!
    })
    .catch((errorMessage) => {
        // This runs if the promise is rejected (failure)
        console.log(errorMessage);
    });

// PROMISE CHAINING - Solves "callback hell"
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 done");
            resolve("Result from Step 1");
        }, 1000);
    });
}

function step2(dataFromStep1) {
    return new Promise((resolve) => {
        console.log("Using:", dataFromStep1);
        setTimeout(() => {
            console.log("Step 2 done");
            resolve("Result from Step 2");
        }, 1000);
    });
}

function step3(dataFromStep2) {
    return new Promise((resolve) => {
        console.log("Using:", dataFromStep2);
        setTimeout(() => {
            console.log("Step 3 done");
            resolve("All steps complete!");
        }, 1000);
    });
}

// Chain the promises
step1()
    .then(step2) // step2 receives "Result from Step 1"
    .then(step3) // step3 receives "Result from Step 2"
    .then((finalResult) => {
        console.log(finalResult); // Output: All steps complete!
    })
    .catch((error) => {
        console.log("An error occurred:", error);
    });

// FETCH API - Modern way to make network requests (returns a Promise)
// This must be run in a browser or environment with 'fetch' (like Node.js)

// We'll use a public test API
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// console.log("Fetching data from API...");
// fetch(apiUrl)
//     .then(response => {
//         // The first .then() gets the HTTP response
//         // We need to convert it to JSON (which also returns a promise)
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     })
//     .then(data => {
//         // The second .then() gets the actual JSON data
//         console.log("Fetched data:", data);
//     })
//     .catch(error => {
//         // .catch() handles errors from fetch() or .then()
//         console.error("Fetch error:", error);
//     });

// ASYNC/AWAIT - Modern syntax for handling Promises (ES7)
// Makes async code look synchronous

// async function fetchDataAsync() {
//     console.log("Async/Await: Fetching data...");
//     try {
//         // 'await' pauses the function until the promise resolves
//         const response = await fetch(apiUrl);
        
//         if (!response.ok) {
//             throw new Error("Network error");
//         }
        
//         const data = await response.json();
//         console.log("Async/Await data:", data);
//         return data;
        
//     } catch (error) {
//         console.error("Async/Await error:", error);
//     }
// }

// fetchDataAsync();

console.log("Day 30 Complete! Congratulations!");
