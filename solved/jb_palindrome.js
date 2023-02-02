// Write a method that accepts a string and returns whether it’s a palindrome. (without using the reverse method)
// Hint: Palindromes are not case sensitive. ("Radar" is a palindrome.)

function palindrome(word){
	// var word = testWord.toLowercase;
	// console.log(word);
	var rWord = "";
	for (i = word.length - 1; i >= 0; i--){
		// console.log(rWord);
		rWord += word[i];
	}
	if (rWord.toLowerCase == word.toLowerCase) {
		console.log(word + " is a palindrome.");
		return true;
	} else {
		console.log(word + " is not a palindrome.");
		return false;
	}
}
console.log(palindrome("Radar"));
