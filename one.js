// Creating an empty one-dimensional array
let myArray = [];

// Adding elements to the array
myArray.push(10); // Adding 10 at index 0
myArray.push(20); // Adding 20 at index 1
myArray.push(30); // Adding 30 at index 2

// Accessing elements in the array
console.log(myArray[0]); // Output: 10
console.log(myArray[1]); // Output: 20
console.log(myArray[2]); // Output: 30

// Modifying elements in the array
myArray[1] = 50; // Modifying element at index 1 to 50

// Length of the array
console.log(myArray.length); // Output: 3

// Iterating through the array
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Removing elements from the array
myArray.pop(); // Removes the last element (30)

// After removal, the array becomes: [10, 50]
console.log(myArray);
``