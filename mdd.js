// Define a two-dimensional array to represent a grid or matrix
let grid = [
    [1, 2, 3],   // Row 1
    [4, 5, 6],   // Row 2
    [7, 8, 9]    // Row 3
];

// Accessing elements in the grid
console.log(grid[0][0]); // Output: 1 (Element at row 0, column 0)
console.log(grid[1][2]); // Output: 6 (Element at row 1, column 2)
console.log(grid[2][1]); // Output: 8 (Element at row 2, column 1)

// Modifying elements in the grid
grid[1][1] = 10; // Modifying element at row 1, column 1 to 10

// Determine the number of rows in the grid
const numRows = grid.length;

// Iterate through the grid to perform an operation on each element
for (let i = 0; i < numRows; i++) {
    const numCols = grid[i].length; // Determine the number of columns in each row
    for (let j = 0; j < numCols; j++) {
        // Perform some operation on each element, for example, doubling its value
        grid[i][j] *= 2;
    }
}

// Display the updated grid after performing the operation
console.log("Updated Grid:");
console.log(grid);

// Adding a new row to the grid
grid.push([11, 12, 13]); // Adds a new row [11, 12, 13] at the end

// Removing the last row from the grid
grid.pop(); // Removes the last row

// Displaying the updated grid
console.log("Grid after adding and removing a row:");
console.log(grid);
