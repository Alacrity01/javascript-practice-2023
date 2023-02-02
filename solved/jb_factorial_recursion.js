// Factorial (recursion):  Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
	// Solve via recursion (do not use a loop).

function factorial(x){
	if (x == 0){
		return 1;
	} else {
		return x * factorial(x-1);
	}
}
console.log(factorial(5));
