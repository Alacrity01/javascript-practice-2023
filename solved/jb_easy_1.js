// Easy:
// 1. Write a method that returns an array of every number from 1 to 100. 
function to_100() {
	var nums = new Array();
	for(i = 1; i <= 100; i+=1){
		// console.log(i);
		nums.push(i);
	}
	return nums;
}
// console.log(to_100());

// 2. Write a method that returns an array of every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function every_other() {
	// var nums = new Array();
	var nums = [];
	for (i = 1; i < 100; i+=2){
		nums.push(i);
	}
	return nums;
}
// console.log(every_other());


// 3. Write a method that returns an array of all numbers from 1 to 1000 that are divisible by 3.
function div_by_3() {
	var nums = [];
	for (i = 1; i <= 1000; i++){
		if (i % 3 == 0){
			nums.push(i);
		}
	}
	return nums;
}
// console.log(div_by_3());

// 4. Write a method that accepts one argument - an array of numbers - and returns an array of all numbers from that original array that are greater than 7. For example, if the input is [5, 8, 1, 7, 9, 10], the function should return [8, 9, 10].
function greater_than_7(arr){
	var newArr = [];
	for (i = 0; i < arr.length; i++){
		if (arr[i] > 7){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
// console.log(greater_than_7([5, 8, 1, 7, 9, 10]));

// 5. Write a method that accepts an array of numbers as a parameter, and returns the number of how many 55’s there are in the array. For example, if the input is [55, 4, 7, 55, 9, 1, 55, 2, 3, 55, 0], the output should be 4. NOTE: DO NOT USE RUBY’s built-in “count” method.
function count_55s(arr){
	var count = 0;
	for (i = 0; i < arr.length; i++){
		if (arr[i] == 55){
			count++;
		}
	}
	return count;
}
// console.log(count_55s([55, 4, 7, 55, 9, 1, 55, 2, 3, 55, 0])); 

// 6. Write a method that accepts an array of numbers and returns the sum of the numbers. For example, if the input is [1, 5, 7, 9, 2, 0], the output should be 24. Don’t use any of the built in “sum” methods that Ruby comes with.
function arrSum(arr){
	var sum = 0;
	for (i = 0; i < arr.length; i++){
		sum += arr[i];
	}	
	return sum;
}
console.log(arrSum([1, 5, 7, 9, 2, 0]));
