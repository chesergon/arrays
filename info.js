// Creating a two-dimensional array to represent a grid or matrix
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

// Length of the grid (number of rows)
console.log(grid.length); // Output: 3 (Number of rows)

// Iterating through the grid
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]); // Output: All elements in the grid
    }
}

// Adding a new row to the grid
grid.push([11, 12, 13]); // Adds a new row [11, 12, 13] at the end

// After addition, the grid becomes a 4x3 matrix

// Removing a row from the grid
grid.pop(); // Removes the last row

// After removal, the grid becomes a 3x3 matrix again

// Displaying the updated grid
console.log(grid);