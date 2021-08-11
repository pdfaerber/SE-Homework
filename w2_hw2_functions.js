/*****************************************************************************************************

Patrick Faerber, Cohort 13, Week 2 - Homework 2, August 6, 2021
  
Please write code that implements various functions, following the requirements in the list below:

1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
5. Write a function that returns the number of arguments passed to the function when called.
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
 

BONUS: 
Convert as many of the functions above into one-line arrow functions (which means no curly brackets and no explicit use of the return keyword)

Example:
Turn...
function sum(num1, num2) {
    return num1 + num2
}
Into...

const sum = (num1, num2) => num1 + num2


*****************************************************************************************************/

/***********Question 1: Max of Two Numbers *****************************
  1. Define a function maxOfTwoNumbers that takes two numbers
     as arguments and returns the largest of them. 
// ************************************************************************/
var input = require("prompt-sync")();
n1 = Number(input("what is your first number? "));
n2 = Number(input("what is your second number? "));

function maxOfTwoNumbers(n1, n2) {
  flag = false;
  if (n1 < n2) {
    let max = 0;
    max = n2;
    return max;
    flag = true;
  } else if (n2 < n1) {
    max = n1;
    return max;
    flag = true;
  }

  if (!flag) {
    return "numbers are equal";
    // console.log(`These 2 numbers are equal: ${n1},${n2}`);
  }
}
 console.log(`The max of your two numbers is: ${maxOfTwoNumbers(n1, n2)}`);

// /********************Question 2: Max of Three Numbers *******************
//  * 2. Define a function maxOfThree that takes three numbers as arguments
//  *    and returns the largest of them.
//  *************************************************************************/
var input = require("prompt-sync")();
n1 = Number(input("what is your first number? "));
n2 = Number(input("what is your second number? "));
n3 = Number(input("what is your third number? "));

function maxOfThreeNumbers(n1,n2,n3){

  flag = false;
  if ((n1 > n2) && (n1 > n3)) {
    let max = 0;
    max = n1;
    return max;
    flag = true;
  }
    else if ((n2 > n1) && (n2 > n3)) {
    max = n2;
    return max;
    flag = true;
  }
  else if ((n3 > n1) && (n3 > n2)) {
    max = n3;
    return max;
    flag = true;
  }
  if (!flag) {
    console.log(`These 3 numbers are equal: ${n1},${n2},${n3}`);
  }
}
console.log(`The 3 numbers you submitted are: ${n1},${n2},${n3}`);
console.log(`The max of your three numbers is: ${maxOfThreeNumbers(n1, n2, n3)}`);

/********************* Question 3: Is Character a Vowel *****************************
  3. Write a function isCharacterAVowel that takes a character 
     (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 ************************************************************************************/

var input = require("prompt-sync")();
myLetter = input("what is your vowel? ");
vowels = ["a", "e", "i", "o", "u"];
flag = false;

function isCharacterAVowel(myLetter) {
  for (i = 0; i < vowels.length; i++) {
    if (myLetter == vowels[i]) {
      return true;
    }
  }
  return false;
}

let isVowel = isCharacterAVowel(myLetter);
if (isVowel) {
  console.log(`Hooray!! The character you entered is a vowel: ${myLetter}`);
} else {
  console.log(`Sorry... The character you entered is not a vowel: ${myLetter}`);
}

/********************* Question 4: Sum Array and Multipy Array Functions************************
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
and multiplyArray([1,2,3,4]) should return 24.
***********************************************************************************************/

const myArray = [1, 2, 3, 4];
let sum = 0;
let prod = 1;

function sumArray(x) {
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}
console.log(`The sum of the numbers in myArray is: ${sumArray(myArray)}`);

function multiplyArray(y) {
  for (let i = 0; i < y.length; i += 1) {
    prod *= y[i];
  }
  return prod;
}
console.log(
  `The product of the numbers in myArray is: ${multiplyArray(myArray)}`
);

/******************** Question 5: Number of Arguments Function ************************
 * 5. Write a function that returns the number of arguments
 *    passed to the function when called.
 **************************************************************************************/
function numArgs(a, b, c, d) {
  return numArgs.length;
}
console.log(numArgs.length);

/*********************** Question 6: Reversal of String ******************************
 * 6. Define a function reverseString that computes the reversal of a string.
 *    For example, reverseString("jag testar") should return the string "ratset gaj".
 * ***********************************************************************************/
myStr = "jag testar";

function reverseString(myStr) {
  let rvrs_str = myStr.split("").reverse().join("");
  return rvrs_str;
}
console.log(reverseString(myStr));

/******************** Question 7: Find the Longest Word in a Given Array ***************
 * 7. Write a function findLongestWord that takes an array of words
 *    and returns the length of the longest one.
 ***************************************************************************************/
mySentence = "Patrick is finally learning how to deconstruct functions.";

function findLongestWord(mySentence) {
  let myWords = mySentence.split(" ");
  let longestWord = myWords[0];

  for (let i = 0; i < myWords.length; i++) {
    if (myWords[i].length > longestWord.length) {
      longestWord = myWords[i];
      //console.log(longestWord);
    }
  }
  return longestWord;
}
let longestWord = findLongestWord(mySentence);
console.log(
  `The longest word is ${longestWord.toUpperCase()} and it is ${
    longestWord.length
  } characters long.`
);

/*************************** Question 8: Filter Long Words ***********************************
 * 8. Write a function filterLongWords that takes an array of words
 *    and a number i, and returns the array of words that are longer than i characters long.
 *  ******************************************************************************************/
strWords = "Peter Paul Mary Simon Garfunkel Lennon McCartney Harrison Starr";
var n1 = 6;

function filterLongWords(wordsArray, n1) {
  wordsArray = strWords.split(" ");
  let longWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    var longestItem = "";
    if (wordsArray[i].length > n1) {
      longestItem = wordsArray[i];
      longWords.push(longestItem);
      }
      return longWords;
  }
}
console.log(filterLongWords())
