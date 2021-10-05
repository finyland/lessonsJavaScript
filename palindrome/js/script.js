// Figure out whether number palindrome or not

// 123 - is not palindrome
// 111 - is palindrome

function isPalindrome(numberAsString) {
    numberAsString = String(numberAsString);
    let characters = numberAsString.split('');
    let isPalindrome = true;
    for (let index = 0; index < characters.length/2; index++) {
        const element = characters[index];
        if (element !== characters[characters.length - 1 - index]) {
            return false;
        }
    }
    return isPalindrome;
};

console.log(isPalindrome(1111));
console.log(isPalindrome(true)); //if convert this as Number...
console.log(isPalindrome(2454759415));
console.log(isPalindrome("aaafg")); //... this return true, because is will be boolean type.
console.log(isPalindrome("10001"));
console.log(isPalindrome("12345"));
console.log(isPalindrome("123321"));