// Defined a function called changeCase that takes a string as input
function changeCase(fox) {
    // Initialized an empty string variable called 'change' to store the modified string
    let change = ('');
    
    // Loop through each character of the input string
    for (let i = 0; i < fox.length; i++) {
        // Check if the current character is uppercase
        if (fox[i] === fox[i].toUpperCase()) {
            // If it is uppercase, append its lowercase equivalent to the 'change' string
            change += fox[i].toLowerCase();
        } else {
            // If it is not uppercase (i.e., it is lowercase), append its uppercase equivalent to the 'change' string
            change += fox[i].toUpperCase();
        }
    }
    
    // Return the modified string
    return change;
}

// Call the function with the input string 'The Quick Brown Fox' and print the result to the console
console.log(changeCase('The Quick Brown Fox'));

