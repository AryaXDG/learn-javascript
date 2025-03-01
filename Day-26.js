
// ============================================
// DAY 26: DOM Manipulation - Changing Content & Style
// Topics: textContent, innerHTML, setAttribute, style
// ============================================

// We'll assume we have the elements from Day 25 (requires HTML file)

// const mainHeading = document.querySelector("#main-heading");
// const contentParas = document.querySelectorAll(".content");

// CHANGING TEXT CONTENT

// textContent - Changes only the text (safer)
// if (mainHeading) {
//     mainHeading.textContent = "Welcome to JavaScript!";
// }
// console.log(mainHeading.textContent); // Output: Welcome to JavaScript!

// innerHTML - Changes the HTML inside the element (can be insecure)
// if (contentParas[0]) {
//     contentParas[0].innerHTML = "<strong>This is bold text!</strong>";
// }
// The first paragraph now shows bold text.
// Use innerHTML only when you trust the source of the HTML.

// CHANGING ATTRIBUTES

// setAttribute() - Change or add an attribute
// const link = document.createElement("a"); // (We'll learn this tomorrow)
// link.textContent = "Google";
// link.setAttribute("href", "https://www.google.com");
// link.setAttribute("target", "_blank"); // Open in new tab
// console.log(link); // <a href="https://www.google.com" target="_blank">Google</a>

// getAttribute() - Read an attribute value
// console.log(link.getAttribute("href")); // Output: https://www.google.com

// removeAttribute() - Remove an attribute
// link.removeAttribute("target");
// console.log(link); // <a href="https://www.google.com">Google</a>

// CHANGING STYLES (CSS)

// .style property - Access inline styles
// Note: CSS properties with dashes (e.g., background-color) become camelCase (backgroundColor)

// if (mainHeading) {
//     mainHeading.style.color = "blue";
//     mainHeading.style.backgroundColor = "yellow";
//     mainHeading.style.fontSize = "3rem";
//     mainHeading.style.border = "2px solid red";
// }

// WORKING WITH CSS CLASSES

// classList - A better way to manage classes

// if (contentParas[1]) {
//     // Add a class
//     contentParas[1].classList.add("highlight");

//     // Remove a class
//     contentParas[1].classList.remove("content");

//     // Toggle a class (add if not present, remove if present)
//     contentParas[1].classList.toggle("active"); // Adds 'active'
//     contentParas[1].classList.toggle("active"); // Removes 'active'

//     // Check if class exists
//     console.log(contentParas[1].classList.contains("highlight")); // Output: true
// }

console.log("Day 26 Complete! (Remember to test DOM code in a browser)");

