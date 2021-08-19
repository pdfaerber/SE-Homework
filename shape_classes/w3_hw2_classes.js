/*********************************************************************************
 * Parick D. Faerber, Cohort 13, Week 3 - Homework - Object Classes,  August 18, 2021
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 *   OOP: Classes
 *
 *
/************ Question 1: Circle Class********************************************
 * Define a new class called Circle with appropriate attributes and instantiate a 
 * few Circle objects.
 * Write a function called circle_area that returns the area of the object. 
 * Write a function total_sides that returns the number of sides of the object.
 * *******************************************************************************/
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  circle_area = () => Math.round(Math.PI * Math.pow(this.radius, 2));
  circumference = () => Math.round(2 * Math.PI * this.radius);
} //close Circle class

/*
This function takes user input and creates an instance of the 
Circle class, calculates the area and circumference of a circle and 
returns output to the browser via DOM Elements  
*/
function circ_calc() {
  let radius_input = document.getElementById("radius_input");
  let circle_out = document.getElementById("p2");
  const circle_1 = new Circle(radius_input.value);
  area = circle_1.circle_area();
  circumference = circle_1.circumference();
  circle_out.innerHTML = `The area of your circle is: ${area} and \n
The circumference of your circle is: ${circumference}`;
} //close circ_calc function

/************ Question 2: Rectangle Class ******************************************
1. Define a new class called Rectangle with appropriate attributes and 
   instantiate a few Rectangle objects.
2. Write a function called rectangle_area that returns the area of the given object.
3. Write a function total_sides that returns the number of sides of the object.
************************************************************************************/

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  rectangle_area = () => this.length * this.width;
  rectangle_perimeter = () => 2 * this.length + 2 * this.width;
} //close Rectangle class

/*
This function takes user input and creates an instance of the 
Rectangle class, calculates the area and perimeter of a rectangle and 
returns output to the browser via DOM Elements  
*/
function rec_calc() {
  let length_input = document.getElementById("length_input");
  let width_input = document.getElementById("width_input");
  let rectangle_out = document.getElementById("p1");
  const rec_1 = new Rectangle(length_input.value, width_input.value);
  area = rec_1.rectangle_area();
  perimeter = rec_1.rectangle_perimeter();
  rectangle_out.innerHTML = `The area of your rectangle is: ${area} \n
   and the perimeter of your rectangle is: ${perimeter}`;
}//close rec_calc function

/************ Question 3: Square Class ******************************************
1. Define a new class called Square with appropriate attributes and 
   instantiate a few Square objects.
2. Write a function called square_area that returns the area of the given object.
3. Write a function total_sides that returns the number of sides of the object.
************************************************************************************/

class Square {
  constructor(side) {
    this.side = side;
  }
  square_area = () => Math.pow(this.side, 2);
  total_sides = () => this.side * 4;
} // close Square class

/*
This function takes user input and creates an instance of the 
Square class, calculates the area and perimeter of a Square and 
returns output to the browser via DOM Elements  
*/
function square_calc() {
  let side_input = document.getElementById("side_input"); // create variable to store user input
  let square_out = document.getElementById("p3"); //creates variable to return function output

  const square_1 = new Square(side_input.value); // creates and instance of Square
  square_area = square_1.square_area();
  square_perimeter = square_1.total_sides();
  square_out.innerHTML = `The area of your square is: ${square_area} and \n 
  the perimeter of your square is: ${square_perimeter} `; //browser output
} //close square_calc function
