// This function checks if a given number is a prime number
function primeNumber(num) { 
	// Loop through numbers starting from 2 up to the square root of the input number
	for (let i = 2; i <= Math.sqrt(num); i++) { 
		// If the input number is divisible evenly by any number other than 1 and itself, it's not a prime number
		if (num % i === 0) { 
			return false; // Return false if the number is not prime
		} 
	} 
	// If the loop completes without finding a divisor, the number is prime, return true
	return num > 1; 
} 

// This function prints prime numbers up to a given number
function printRespectivePrimeNumbers(n) { 
	// Loop through numbers starting from 2 up to the given number
	for (let i = 2; i <= n; i++) { 
		// Check if the current number is prime using the primeNumber function
		if (primeNumber(i)) { 
			// If the number is prime, print it
			console.log(i); 
		} 
	} 
} 

// Call the function to print prime numbers up to 10
printRespectivePrimeNumbers(10);
