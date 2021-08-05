/******************************************************************************************************************
 * Patrick Faerber, Cohort 13, Week 2-Homework 3, August 3, 2021
 * Create an array of at least 10 values.
 * Take an input from the user to look for in the array
 * Find and display the total number of occurrences of the user input value in the array
 * Also, display the positions in which they occur.      HINT: Create another array for keeping track of positions
 ********************************************************************************************************************/

//creating a variable 'input' that stores the user input value
var input = require("prompt-sync")();

//ask the user to input a value for which to search
var s = input("What is your search value? ");

//converting string user input to num datatype
s = Number(s);

//Available number range in array: -5 occurs a few times
var array = [-5, -4, -3, 3, -2, -1, 0, -5, 1, 2, 3, 4, -5];
var pos_arr = [];

//assigning a boolean value to flag the
flag = false;

for (let i = 0; i < array.length; i++) {
  if (s == array[i]) {
    pos_arr.push(i + 1);
    console.log("Your value is found in position: " + (i + 1));
    flag = true;
    //break;
    continue;
  }
}
if (!flag) {
  console.log("Your number is not found. Please ask again. ");
}
//print positon array values
console.log(pos_arr);
console.log(`Your number occurs ${pos_arr.length} times in the array`);
