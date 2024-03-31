function rangeBetween(start, end) {
    // Initialized an empty array to store the range of numbers
    let arr = [];
    
    // Iterated over the range of numbers from 'start' to 'end'
    for(let i=start; i<=end; i++) {
        // Push each number to the array
        arr.push(i);
    }
    
    // Return the array containing the range of numbers
    return arr;
}

// Test the function with different input ranges and log the results
console.log(rangeBetween(4, 7)); // Should output: [4, 5, 6, 7]
console.log(rangeBetween(-4, 7)); // Should output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]