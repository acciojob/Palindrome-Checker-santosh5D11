// complete the given function

function palindrome(str){
	const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
	const reversedStr = cleanedStr.split('').reverse().join('');
	return cleanedStr === reversedStr;
}
console.log(palindrome("race a car"))
module.exports = palindrome
