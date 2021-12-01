function isPalindrome(word) {
  let reverseStr = word.split('').reverse().join(''); 
  if (reverseStr === word) {
    return true
  } else {
    return false
  }
}


/* 
  create function
    reverse the characters of word
    use if else to return true or false 
      return true if palindrome
      return false if palindrome  
*/

/*
  First, I created a function that takes a string as it's only argument(word).
  Then, I split the string, reversed the letters, joined them back together, and saved them to reverseStr.
  Next, I made an if else statement. If the reverseStr is strictly equal to word, the function will return true. 
  If it is not strictly equal, the function will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
