// Write a method that accepts an array and returns it as a hash. For example, [“a”, “b”, “c] should turn into {0 => “a”, 1 => “b”, 2 => “c”}
function arrToHash(arr) {
	var hash1 = {};
	var i = 0;
	for (i = 0; i < arr.length; i++){
		hash1[i] = arr[i];
	}
	// console.log(hash1);
	return hash1;
}

var arr = ['a', 'b', 'c']
console.log(arrToHash(arr));

