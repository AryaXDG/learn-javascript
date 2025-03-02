
// ============================================
// DAY 27: DOM Manipulation - Creating & Removing
// Topics: createElement, appendChild, remove, insertBefore
// ============================================

// We assume we have an HTML file with a <body> and <ul>

// const list = document.querySelector("ul");
// const body = document.querySelector("body");

// CREATEELEMENT - Create a new element in memory
// const newLi = document.createElement("li");
// newLi.textContent = "Item 3";
// console.log(newLi); // Output: <li>Item 3</li> (not yet on the page)

// APPENDCHILD - Add an element as the last child of a parent
// if (list) {
//     list.appendChild(newLi);
// }
// The <ul> in the HTML now has "Item 3" at the end.

// APPEND - Modern way to add elements (can add multiple)
// const newLi4 = document.createElement("li");
// newLi4.textContent = "Item 4";
// const newLi5 = document.createElement("li");
// newLi5.textContent = "Item 5";
// if (list) {
//     list.append(newLi4, newLi5);
// }

// PREPEND - Add an element as the first child
// const firstItem = document.createElement("li");
// firstItem.textContent = "Item 0";
// if (list) {
//     list.prepend(firstItem);
// }

// INSERTBEFORE - Insert an element before another specific element
// Syntax: parent.insertBefore(newNode, referenceNode)
// const newItem = document.createElement("li");
// newItem.textContent = "Item 1.5";
// const item2 = document.querySelector("li:nth-child(2)"); // Get "Item 1"
// if (list && item2) {
//     list.insertBefore(newItem, item2);
// }

// REMOVING ELEMENTS

// removeChild() - Remove a child element (older way)
// const itemToRemove = document.querySelector("li"); // Get "Item 0"
// if (list && itemToRemove) {
//     list.removeChild(itemToRemove);
// }

// remove() - Remove the element itself (modern way)
// const item2ToRemove = document.querySelector("li:nth-child(2)"); // Get "Item 1.5"
// if (item2ToRemove) {
//     item2ToRemove.remove();
// }

// PRACTICAL EXAMPLE - Create and add 5 paragraphs
// if (body) {
//     for (let i = 1; i <= 5; i++) {
//         const newP = document.createElement("p");
//         newP.textContent = `This is paragraph ${i}`;
//         body.appendChild(newP);
//     }
// }

// CLONING NODES
// const originalLi = document.querySelector("li");
// if (originalLi) {
//     // Clone the node (true = deep clone, includes children)
//     const clonedLi = originalLi.cloneNode(true);
//     clonedLi.textContent = "Cloned Item";
//     list.appendChild(clonedLi);
// }

console.log("Day 27 Complete! (Remember to test DOM code in a browser)");

