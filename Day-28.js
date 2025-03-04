
// ============================================
// DAY 28: Event Handling
// Topics: addEventListener, click, mouseover, keydown, event object
// ============================================

// EVENTS - Actions that happen in the browser (clicks, key presses, etc.)
// We can "listen" for these events and run code (callbacks) when they happen.

// We need an element to attach the listener to.
// Let's pretend we have a button: <button id="myButton">Click Me</button>
// const button = document.querySelector("#myButton");

// ADD EVENT LISTENER - The recommended way
// Syntax: element.addEventListener("eventName", callbackFunction)

// function handleClick() {
//     console.log("Button was clicked!");
//     // Change the heading text
//     const heading = document.querySelector("#main-heading");
//     if (heading) {
//         heading.textContent = "You clicked the button!";
//     }
// }

// if (button) {
//     button.addEventListener("click", handleClick);
// }

// We can also use an anonymous function or arrow function
// if (button) {
//     button.addEventListener("click", () => {
//         console.log("Anonymous function clicked!");
//     });
// }

// COMMON EVENT TYPES

// mouseover / mouseout - Fired when mouse enters/leaves element
// const heading = document.querySelector("#main-heading");
// if (heading) {
//     heading.addEventListener("mouseover", () => {
//         heading.style.color = "red";
//     });
//     heading.addEventListener("mouseout", () => {
//         heading.style.color = "blue"; // Change it back
//     });
// }

// keydown / keyup - Fired when a key is pressed/released
// Usually added to the whole window or an input field
// document.addEventListener("keydown", (event) => {
//     console.log("Key pressed:", event.key); // 'event' is the event object
//     if (event.key === "Enter") {
//         console.log("You pressed Enter!");
//     }
// });

// submit - Fired when a form is submitted
// <form id="myForm"><input type="text"><button type="submit">Go</button></form>
// const form = document.querySelector("#myForm");
// if (form) {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault(); // Stop the form from reloading the page!
//         console.log("Form submitted!");
//     });
// }

// THE EVENT OBJECT - Contains info about the event
// It's automatically passed as the first argument to the callback

// if (button) {
//     button.addEventListener("click", (event) => {
//         console.log(event); // Logs the full MouseEvent object
//         console.log(event.target); // The element that triggered event (the button)
//         console.log(event.type); // The type of event (e.g., "click")
//         console.log(event.timeStamp); // Time event happened
//     });
// }

// EVENT DELEGATION - Attach one listener to a parent
// Useful for lists where items are added/removed
// const list = document.querySelector("ul");
// if (list) {
//     list.addEventListener("click", (event) => {
//         // Check if the clicked element (event.target) was an <li>
//         if (event.target.tagName === "LI") {
//             console.log("You clicked:", event.target.textContent);
//             event.target.style.textDecoration = "line-through";
//         }
//     });
// }
// This works even for <li> elements added later!

console.log("Day 28 Complete! (Remember to test DOM code in a browser)");

