// complete the given function

function palindrome(str){
	const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');

	let left = 0;
    let right = cleanedStr.length - 1;
    
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; 
        }
        left++;
        right--;
    }
    
    return true; 
	
}
console.log(palindrome("race a car"))
module.exports = palindrome

