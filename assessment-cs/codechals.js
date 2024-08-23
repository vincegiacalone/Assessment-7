const perf = require("execution-time")();

// SUM ZERO:
let array = [0, 1, 2, 3, 4, 5];

perf.start();
let isSumZero = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        isSumZero = true;
      }
    }
  }
}

let resultsSumZero = perf.stop();
console.log("Sum Zero", resultsSumZero.preciseWords);
// Runtime: 55.2 μs, O(n)


// UNIQUE CHARACTERS:
perf.start();

function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  console.log(uniqueChars);
  return uniqueChars.size === word.length;
}

let resultsUniqueChars = perf.stop();
console.log("Unique Chars", resultsUniqueChars.preciseWords);
// Runtime: 4.9 μs, O(n)


// PANGRAMS:
perf.start();

function isPangram(str) {
  let strArr = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}
let resultsPangram = perf.stop();
console.log("Pangram", resultsPangram.preciseWords);
// Runtime: 3.5 μs, O(n)


// LONGEST WORD:
perf.start();

function findLongestWord(str) {
  let splitStr = str.split(" ");
  let longestWord = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWord) {
      longestWord = splitStr[i].length;
    }
  }

  return longestWord;
}
let resultsLongestWord = perf.stop();
console.log("Longest Word", resultsLongestWord.preciseWords);
// Runtime: 3.3 μs, O(n)

