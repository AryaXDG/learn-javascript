
// ============================================
// DAY 13: Arrays - Advanced Methods
// Topics: slice, splice, concat, join, reverse
// ============================================

// More powerful array methods!

let animals = ["dog", "cat", "bird", "fish", "rabbit"];
console.log("Original array:", animals);

// SLICE - Extract portion of array (doesn't modify original)
// Syntax: array.slice(start, end) - end is NOT included
let somePets = animals.slice(1, 3);
console.log("Sliced (1, 3):", somePets); // Output: ["cat", "bird"]
console.log("Original unchanged:", animals);

// Slice from index to end
let lastTwo = animals.slice(3);
console.log("Last two:", lastTwo); // Output: ["fish", "rabbit"]

// Slice with negative index (count from end)
let lastOne = animals.slice(-1);
console.log("Last element:", lastOne); // Output: ["rabbit"]

// SPLICE - Add/remove elements at any position (MODIFIES original)
// Syntax: array.splice(start, deleteCount, item1, item2, ...)

let colors = ["red", "blue", "green", "yellow"];
console.log("Original:", colors);

// Remove 2 elements starting at index 1
let removed = colors.splice(1, 2);
console.log("Removed:", removed); // Output: ["blue", "green"]
console.log("After removal:", colors); // Output: ["red", "yellow"]

// Add elements at index 1 (delete 0 elements)
colors.splice(1, 0, "purple", "orange");
console.log("After adding:", colors); // Output: ["red", "purple", "orange", "yellow"]

// Replace element (remove 1, add 1)
colors.splice(2, 1, "pink");
console.log("After replacing:", colors); // Output: ["red", "purple", "pink", "yellow"]

// CONCAT - Combine arrays (doesn't modify originals)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log("Combined:", combined); // Output: [1, 2, 3, 4, 5, 6]

// Concat multiple arrays
let arr3 = [7, 8];
let allCombined = arr1.concat(arr2, arr3);
console.log("All combined:", allCombined); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// JOIN - Convert array to string
let words = ["Hello", "World", "from", "JavaScript"];
let sentence = words.join(" "); // Join with space
console.log(sentence); // Output: Hello World from JavaScript

let csvFormat = words.join(","); // Join with comma
console.log(csvFormat); // Output: Hello,World,from,JavaScript

// REVERSE - Reverse array order (MODIFIES original)
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log("Reversed:", nums); // Output: [5, 4, 3, 2, 1]

// SORT - Sort array (MODIFIES original)
let unsorted = ["banana", "apple", "cherry", "date"];
unsorted.sort();
console.log("Sorted:", unsorted); // Output: ["apple", "banana", "cherry", "date"]

// Sorting numbers requires a compare function!
let numbers2 = [40, 100, 1, 5, 25];
numbers2.sort(); // WARNING: Sorts as strings!
console.log("Wrong sort:", numbers2); // Output: [1, 100, 25, 40, 5]

// Correct way to sort numbers
numbers2.sort((a, b) => a - b); // Ascending order
console.log("Correct sort:", numbers2); // Output: [1, 5, 25, 40, 100]

// Descending order
numbers2.sort((a, b) => b - a);
console.log("Descending:", numbers2); // Output: [100, 40, 25, 5, 1]

// FILL - Fill array with static value
let zeroes = new Array(5).fill(0);
console.log("Filled with zeroes:", zeroes); // Output: [0, 0, 0, 0, 0]

// FLAT - Flatten nested arrays
let nested = [1, 2, [3, 4, [5, 6]]];
let flattened = nested.flat(2); // Flatten 2 levels deep
console.log("Flattened:", flattened); // Output: [1, 2, 3, 4, 5, 6]

console.log("Day 13 Complete!");

