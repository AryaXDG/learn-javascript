
// ============================================
// DAY 25: Intro to DOM - Selecting Elements
// Topics: Document Object Model, getElementById, getElementsByClassName, querySelector
// ============================================

// THE DOM (Document Object Model)
// The browser creates a tree of objects representing your HTML document.
// JavaScript can interact with this DOM to change the webpage.
// We cannot run DOM code in this console-only file, but we'll show the commands.
// To test this code, create an index.html file and link this script.

/* Example HTML (index.html):
<!DOCTYPE html>
<html>
<head>
    <title>JS DOM</title>
</head>
<body>
    <h1 id="main-heading">Hello World!</h1>
    <p class="content">This is a paragraph.</p>
    <p class="content">This is another paragraph.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <script src="your-script-file.js"></script>
</body>
</html>
*/

// NOTE: The following lines will cause "ReferenceError: document is not defined"
// if run outside a browser. This is expected.

// GETELEMENTBYID - Select one element by its unique ID
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading); // Output: <h1 id="main-heading">Hello World!</h1>

// GETELEMENTSBYTAGNAME - Select elements by tag name
// Returns an HTMLCollection (like an array)
// const listItems = document.getElementsByTagName("li");
// console.log(listItems); // Output: [<li>Item 1</li>, <li>Item 2</li>]
// console.log(listItems[0]); // Access first item

// GETELEMENTSBYCLASSNAME - Select elements by class name
// Returns an HTMLCollection
// const contentParas = document.getElementsByClassName("content");
// console.log(contentParas); // Output: [<p class="content">...</p>, <p class="content">...</p>]

// QUERYSELECTOR - Modern, powerful selector (uses CSS selectors)
// Selects the FIRST matching element

// Select by ID
// const mainHeadingQuery = document.querySelector("#main-heading");
// console.log(mainHeadingQuery);

// Select by class
// const firstContent = document.querySelector(".content");
// console.log(firstContent); // Only selects the first <p>

// Select by tag
// const firstLi = document.querySelector("li");
// console.log(firstLi);

// QUERYSELECTORALL - Selects ALL matching elements
// Returns a NodeList (like an array, but with differences)

// Select all by class
// const allContent = document.querySelectorAll(".content");
// console.log(allContent); // Output: NodeList[<p class="content">...</p>, <p class="content">...</p>]

// Select all by tag
// const allLi = document.querySelectorAll("li");
// console.log(allLi);

// You can loop through a NodeList with forEach
// allLi.forEach(item => {
//     console.log(item);
// });

console.log("Day 25 Complete! (Remember to test DOM code in a browser)");

