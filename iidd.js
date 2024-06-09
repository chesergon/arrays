// Declaration: Declaring variables without assigning a value
let variable1;
let variable2, variable3; // Multiple declarations in one line

// Initialization: Assigning an initial value to variables at the time of declaration
let initializedVariable1 = 10; // Initialize with a value of 10
let initializedVariable2 = "Hello"; // Initialize with a string value
let initializedVariable3 = [1, 2, 3]; // Initialize with an array

// Initialization with var keyword (less recommended due to scope-related issues)
var legacyVariable = "I'm using var"; 

// Declaration and Initialization can be done together
let combinedDeclarationAndInitialization = true;

// Re-assigning values to already declared variables
variable1 = 20;
variable2 = "World";
variable3 = [4, 5, 6];

// Constants: Declaration and Initialization of constants
const PI = 3.14; // Constant for Pi value, cannot be reassigned

// Output the values of variables and constants
console.log("Variable 1:", variable1);
console.log("Variable 2:", variable2);
console.log("Variable 3:", variable3);
console.log("Initialized Variable 1:", initializedVariable1);
console.log("Initialized Variable 2:", initializedVariable2);
console.log("Initialized Variable 3:", initializedVariable3);
console.log("Combined Declaration and Initialization:", combinedDeclarationAndInitialization);
console.log("Legacy Variable (var):", legacyVariable);
console.log("Constant PI:", PI);
