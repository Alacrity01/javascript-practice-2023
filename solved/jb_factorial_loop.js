// Factorial (loop):  Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// Do not use recursion.

function factorial(n){
	var x = 1;
	while (n > 1){
		x *= n;
		n -= 1;
	}
	return x;
}
console.log(factorial(5));
