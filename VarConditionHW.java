package varConditionHW;

import java.util.Scanner;

public class VarConditionHW {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		
		System.out.println("Enter your score for a letter grade:");
		int n = scan.nextInt();
		grade(n);
		
		System.out.println("Enter a number between 1 and 7:");
		int dayNum = scan.nextInt();
		weekday(dayNum);
		
		System.out.println("Enter a number between 1 and 20:");
		int coolNum = scan.nextInt();
		coolControl(coolNum);
		/*closing scanner*/
		scan.close();

	};// end main

	/********* Problem 1: Grading Method ****************/
	public static void grade(int n) {
		if (n >= 90) {
			System.out.println("Your grade of " + n + " is an A.");
		} else if (n >= 80) {
			System.out.println("Your grade of " + n + " is an B.");
		} else if (n >= 70) {
			System.out.println("Your grade of " + n + " is an C.");
		} else if (n >= 55) {
			System.out.println("Your grade of " + n + " is an D.");
		} else {
			System.out.println("Your grade of " + n + " is Failing.");
		}
	};// end grade

	/********* Problem 2: Day of the Week Method ****************/
	public static void weekday(int dayNum) {
		
		String dayString;
		switch (dayNum) {
		case 1:
			dayString = "Monday";
			break;
		case 2:
			dayString = "Tuesday";
			break;
		case 3:
			dayString = "Wednesday";
			break;
		case 4:
			dayString = "Thursday";
			break;
		case 5:
			dayString = "Friday";
			break;
		case 6:
			dayString = "Saturday";
			break;
		case 7:
			dayString = "Sunday";
			break;
		default:
			dayString = "Invalid Input";
			break;
		}
		System.out.println(dayString);
	}//end weekday
	
	/********* Problem 3: Cool/NotCool ****************/
	public static void coolControl(int coolNum) {
		
	if (coolNum % 2 != 0) {
		System.out.println("Cool");
	}
	else if ((coolNum % 2 == 0) && (coolNum >=2 && coolNum <=5)){
		System.out.println("Not Cool");
	}
	else if ((coolNum % 2 == 0) && (coolNum >=6 && coolNum <=20)){
		System.out.println("Cool");
	}
	else if ((coolNum % 2 == 0) && (coolNum > 20)){
		System.out.println("Not Cool");
	}
		
	}//end coolControl

};// end class

/****************************************************************************
 * Continue with variables and conditions:
 * 
 * 1. Write an if/else statement for the following requirements: If student gets
 * 90 * or higher: console log A If students get 80 or above: console log B If
 * students get 70 or above: console log C If students get 55 or above: console
 * log D Any grade lower than 55 is F
 * 
 * 2. Using switch case, do the following: a. Store a number between 1-7 If the
 * number is 1, display a message "Monday", 2 for "Tuesday", 3 for "Wednesday"
 * etc. Anything other than 1-7 would default to "Invalid Input"
 * 
 * 3. Store a number in a variable called num and write an if statement: If num
 * is odd, display "Cool" If num is even and between 2-5, display "Not Cool" If
 * num is even and between 6-20, display "Cool" If num is even and greater than
 * 20, display "Not Cool
 * 
 ****************************************************************************/