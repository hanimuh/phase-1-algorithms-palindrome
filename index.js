function isPalindrome(word) {
  // make a reversed copy of the word and compare it to the original
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  split the word into an array and reverse it then join it. 
  compare the reversed word to the original word.
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
