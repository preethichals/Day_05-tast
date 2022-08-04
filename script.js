//Do the below program in anonymous function & IIFE
//a. Print odd numbers in an array

	let n1 = function isOdd(arr1) {
		return value % 2 == 1;
	}
	var arr1 = [1,2,3,4,5,6,7,8,9,10];
	console.log(Odd(arr1));

	const isOdd = num => num % 2 == 1;

	//IIFE

	(function isOdd(arr1){
		return value % 2 == 1;
	})();

//b. convert all the strings to title caps in a stiring array

	let n2 = function titleCase(string) {
		var sentence = string.toLowerCase().split(" ");
		for(var i = 0; i< sentence.length; i++){
		sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
		}
		document.write(sentence.join(" "));
		return sentence;
		}
		titleCase("tutorix is one of best e-platforms");

//IIFE
	(function titleCase(string) {
		var sentence = string.toLowerCase().split(" ");
		for(var i = 0; i< sentence.length; i++){
		sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
		}
		document.write(sentence.join(" "));
		return sentence;
	})();	
//c.		sum of all numbers in array

	var get = function sumN(num) {
		let sum =0;
		for(let n of num){
			sum = sum + n;
		}
		return sum;
	}
	//IIFE
	(function sumN(num) {
		let sum =0;
		for(let n of num){
			sum = sum + n;
		}
		return sum;
	})();


	//d.		return all the prime number ina an array
	var prm = function sort_prime(num) {

		var prime_num1 = [],
			prime_num2 = [];
		for (var i = 0; i <= num; i++) {
		  prime_num2.push(true);
		}
		for (var i = 2; i <= num; i++) {
		  if (prime_num2[i]) {
			prime_num1.push(i);
			for (var j = 1; i * j <= num; j++) {
			  prime_num2[i * j] = false;
			}}}
		return prime_num1;
	  }
	  //IFFE
	  (function sort_prime(num) {

		var prime_num1 = [],
			prime_num2 = [];
		for (var i = 0; i <= num; i++) {
		  prime_num2.push(true);
		}
		for (var i = 2; i <= num; i++) {
		  if (prime_num2[i]) {
			prime_num1.push(i);
			for (var j = 1; i * j <= num; j++) {
			  prime_num2[i * j] = false;
			}}}
		return prime_num1;
	  })();
	//e.		return all the palindromes in ana array
	var string4 = function reverse(str)
	{
	  let rev_str = "";
	  for( let i = str.length-1 ;i >= 0 ;i--)
	  {
		rev_str+= str[i];
	  }
	  return rev_str;
	}
	//IIFE
	(function reverse(str)
	{
	  let rev_str = "";
	  for( let i = str.length-1 ;i >= 0 ;i--)
	  {
		rev_str+= str[i];
	  }
	  return rev_str;
	})();
   
	//  function checking string is palindrome or not
	var string2 = function is_palindrome( str )
	{
	  reverse_str = reverse(str);
	  if( reverse_str === str)
	  {
		console.log("string is palindrome ");
	  }
	  else
	  {
		console.log("string is not palindrome")
	  }
	}
	let text1 = "hellolleh";
	is_palindrome(text1);

	//IIFE

	(function is_palindrome(str)
	{
	  reverse_str = reverse(str);
	  if( reverse_str === str)
	  {
		console.log("string is palindrome ");
	  }
	  else
	  {
		console.log("string is not palindrome")
	  }
	})();

	//f.		return median of two sorted arrays of the same size
	const findMedian = function(num1,num2){
		let compare = (i,j) => {
			return i-j;
		}
		let arr = num1.concat(num2).sort(compare);
		if(arr.length % 2 == 0) {
			return (arr[arr.length/2-1]+ arr[arr.lenght/2]) / 2;
		}
		return arr[Math.floor(arr.length/2)];
	}
//IIFE
(function(num1,num2) {
	let compare = (i,j) => {
		return i-j;
	}
	let arr = num1.concat(num2).sort(compare);
	if(arr.length % 2 == 0) {
		return (arr[arr.length/2-1]+ arr[arr.lenght/2]) / 2;
	}
	return arr[Math.floor(arr.length/2)];
})();

	//g.		remove duplicates from an array
	var arr = ["apple", "mango",
	"apple", "orange", "mango", "mango"];

	function removeDuplicates(arr) {
		var unique = arr.reduce(function (acc, curr) {
		if (!acc.includes(curr))
			acc.push(curr);
		return acc;
		}, []);
			return unique;
	}

console.log(removeDuplicates(arr));
//IIFE
	(function removeDuplicates(arr) {
	var unique = arr.reduce(function (acc, curr) {
	if (!acc.includes(curr))
		acc.push(curr);
	return acc;
	}, []);
		return unique;
})();

console.log(removeDuplicates(arr));

	//h.		rotate an array by k times

var rotat = function RightRotate(a, n, k)
{ 
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
            document.write(a[n + i - k] + " "); }
        else {
            document.write((a[i - k]) + " ");}}
    document.write("<br>");
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;

RightRotate(Array,N,K);
//IIFE
(function RightRotate(a, n, k)
{ 
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
            document.write(a[n + i - k] + " "); }
        else {
            document.write((a[i - k]) + " ");}}
    document.write("<br>");
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;)();

	
	//Do the below programs in arrow functions.
			
	//a. Print odd numbers in an array
	
	/*var arr=['1','2','3','4','5','6'];
	for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
    console.log(arr[i]);}*/

	const isOdd = num => num % 2 == 1;

	
	//b.Convert all the string to title caps in a a string array
	const str = titleCase(string) => {
		var sentence = string.toLowerCase().split(" ");
		for(var i = 0; i< sentence.length; i++){
		   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
		}
	 document.write(sentence.join(" "));
	 return sentence;
	 }
	//c.Sum of all numbers in an array

    var arr = [4, 8, 7, 13, 12]
    var sum = 0;
    arr.forEach(x => {
        sum += x;
    });
      console.log(sum);

	//d.Return all the prime numbers in an array

	var prm2 = sort_prime(num) => {

		var prime_num1 = [],
			prime_num2 = [];
		for (var i = 0; i <= num; i++) {
		  prime_num2.push(true);
		}
		for (var i = 2; i <= num; i++) {
		  if (prime_num2[i]) {
			prime_num1.push(i);
			for (var j = 1; i * j <= num; j++) {
			  prime_num2[i * j] = false;
			}}}
	  
		return prime_num1;
	  }

	//e.Return all the palindromes in array
	let checkPalindrome = (stringg) => {
		return stringg === stringg.split("").reverse().join("");
	  };
	   
	  console.log("Is Palindrome? : " + checkPalindrome("madam"));
	  console.log("Is Palindrome?: " + checkPalindrome("orange"));
	  console.log("Is Palindrome?: " + checkPalindrome("asisa"));

