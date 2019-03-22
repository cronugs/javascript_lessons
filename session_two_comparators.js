console.log("Comparators compare two values and return the boolean result: true or false\r");
console.log("\r");

console.log(`  <  Less than
  <=  Less than or equal to
  ==  Equal to
  >=  Greater than or equal to
  >   Greater than\r`);
console.log("\r");

console.log(`A boolean is a data type that is either true or false. They are useful in programming languages
when you need something with one or two values; on/off, true/false, yes/no.\r`);
console.log("\r");

var booleanTrue = true;
var booleanFalse = false;

console.log(`var booleanTrue = true;
var booleanFalse = false;

console.log(booleanTrue, booleanFalse);\r`);
console.log("\r");

console.log(booleanTrue, booleanFalse);
console.log("\r");

console.log(`console.log(5 < 10);
console.log(10 < 5);
console.log(1 == 1);
console.log("banana" == "banana");\r`);
console.log("\r");

console.log(5 < 10);
console.log(10 < 5);
console.log(1 == 1);
console.log("banana" == "banana");

console.log(`In a programming labgyage, any value can ultimately be evaluated to true or false. For example,
  if a number is 0, null or an empty string, then it will be false. If a string is not empty or a number is not
  equal to 0 it is considered true. We can use the Boolean function to create a new boolean based on whether or
  not these values are true or false\r`);
console.log("\r");

console.log("Each of these statements will be true;\r");
console.log("\r");

console.log(`console.log(Boolean("banana"));
console.log(Boolean(2));
console.log(Boolean(-1.5));\r`);
console.log(Boolean("banana"));
console.log(Boolean(2));
console.log(Boolean(-1.5));
console.log("\r");

console.log("Each of these statements will be false;\r");
console.log("\r");

console.log(`console.log(Boolean(""));
console.log(Boolean(-0));
console.log(Boolean(null));\r`);
console.log(Boolean(""));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log("\r");

console.log("Conditional Execution\r");
console.log("\r");

console.log(`Conditionals are like directions at a crossroads. They define which way to go. You can fo either right or left,
  either true or false. Their output will determine the direction. Before we jump on the the examples, we should explain the
  basics. Conditional statements control the flow of your program. It means it controls how your code runs under certain
  conditions. Some code blocks will run only if the condition evaluates to true. Whatever is false, will be skipped. It will
  not run. The code block under the condition that evaluates to true will run.\r`);
console.log("\r");

console.log(`var sky = "blue";

if (sky == "blue") {
	console.log("Nice weather");
} else {
	console.log("Not nice weather");
}\r`);

console.log("\r");

var sky = "blue";

if (sky == "blue") {
	console.log("Nice weather");
} else {
	console.log("Not nice weather");
}
console.log("\r");

console.log("Boolean operators\r");
console.log("\r");

console.log(`Double ampersand symbol && means that all conditions have to be true. If you have three conditions, even if one of them is false,
  the whole result will be false. Let's use a simple comparison to clear thingsj out. Remember, both sides need to be TRUE for the final output
  to be TRUE\r`);
console.log("\r");

console.log(`console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true);
console.log((5 > 1) && (3 > 1));
console.log((1 > 5) && (3 > 1));\r`);
console.log("\r");

console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true);
console.log((5 > 1) && (3 > 1));
console.log((1 > 5) && (3 > 1));
console.log("\r");

console.log(`The or operator || only requires one side to be true. In other words, the output will only be false if both sides are false.\r`);
console.log("\r");

console.log(`console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);
console.log((10 < 5) || (1 > 0));\r`);
console.log("\r");

console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);
console.log((10 < 5) || (1 > 0));
console.log("\r");

console.log("The not operator ! negates the output:");
console.log("\r");

console.log(`console.log(!false);
console.log(!true);\r`);
console.log(!false);
console.log(!true);
console.log("\r");

console.log("The next example evaluates to false because the neagtion is applied to the whole comparison\r");
console.log("\r");

console.log("console.log(!((10 > 5) && (5 > 1)));\r");
console.log(!((10 > 5) && (5 > 1)));
console.log("\r");

console.log("If.... Else\r");
console.log("\r");

console.log(`In other words, JavaScript checks to see if condition1 is true, if so it runs the code under the if statement.
  It will not fo to the else statement. And then it exits our of the if/else block. But if the condition in the if statement
  is false, then it runs the code in the else condition. Only one can be executed: either the code in the if or in the else
  statement\r`);
console.log("\r");

console.log(`if (2 > 3) {
  console.log("Two is greater than three");
} else {
  console.log("Two is not greater than three");
}\r`);
console.log("\r");

if (2 > 3) {
	console.log("Two is greater than three");
} else {
	console.log("Two is not greater than three");
}
console.log("\r");

console.log(`if (2 < 3) {
	console.log("Two is less than three");
} else {
	console.log("Two is not less than three");
}\r`);
console.log("\r");

if (2 < 3) {
	console.log("Two is less than three");
} else {
	console.log("Two is not less than three");
}
console.log("\r");

console.log(`Else... If is a conditional statement that checks whether the condition is true after the if statement
  was evaluated to false.\r`);
console.log("\r");

console.log("Let's break it down\r");
console.log(`if (condition1) {block of code is executed if condition1 is true}

else if (condition2) {block of code is executed if condition21 is false, but condition2 is true}

else {block of code is executed if condition21 and condition2 are both false}\r`);
console.log("\r");

console.log("Here is an example\r");
console.log("\r");

console.log(`if (2 > 1) {
  console.log("If statement was executed");
} else if (2 > 1) {
  console.log("else if statement was executed");
} else {
  console.log("else statement was executed");
}\r`);
console.log("\r");

if (2 > 1) {
	console.log("If statement was executed");
} else if (2 > 1) {
	console.log("else if statement was executed");
} else {
	console.log("else statement was executed");
}
console.log("\r");

console.log(`if (2 > 5) {
	console.log("If statement was exectued!");
} else if (2 > 1) {
	console.log("else if statement was exectued");
} else {
	console.log("else statement was exectued");
}\r`);
console.log("\r");

if (2 > 5) {
	console.log("If statement was exectued!");
} else if (2 > 1) {
	console.log("else if statement was exectued");
} else {
	console.log("else statement was exectued");
}
console.log("\r");

console.log(`if (2 > 5) {
	console.log("If statement was executed!");
} else if (2 > 8) {
	console.log("else if statement was executed");
} else {
	console.log("else statement was executed");
}\r`);
console.log("\r");

if (2 > 5) {
	console.log("If statement was executed!");
} else if (2 > 8) {
	console.log("else if statement was executed");
} else {
	console.log("else statement was executed");
}
console.log("\r");

console.log(`You can have more than one else if statement. JaveScript will move on the the next else if statement
  until it finds one that is true. If there is no else if statement that is true, then the code will move on to the
  else statement\r`);
console.log("\r");

console.log(`if (2 > 5) {
  console.log("If statement was executed");
} else if (2 > 8) {
  console.log("else if statement was executed");
} else if (2 > 100) {
  console.log("second else if statement was executed");
} else if (2 > 10) {
  console.log("third else if statement was executed");
} else {
  console.log("else statement was executed");
}\r`);
console.log("\r");

if (2 > 5) {
	console.log("If statement was executed");
} else if (2 > 8) {
	console.log("else if statement was executed");
} else if (2 > 100) {
	console.log("second else if statement was executed");
} else if (2 > 10) {
	console.log("third else if statement was executed");
} else {
	console.log("else statement was executed");
}
console.log("\r");

console.log("Boolean Operators and Conditionals");
console.log("\r");

console.log("Let's get our operators and conditionals in the mix together");
console.log("\r");

console.log(`var fruit1 = "apple";
var fruit2 = "peach";

if (fruit1 == "apple" && fruit2 == "peach") {
	console.log("Yummy!");
}\r`);

var fruit1 = "apple";
var fruit2 = "peach";

if (fruit1 == "apple" && fruit2 == "peach") {
	console.log("Yummy!");
}
console.log("\r");

console.log(`if (fruit1 == "apple" || fruit2 == "banana") {
	console.log("Yummy, but not as yummy as apples and peaches");
}\r`);
console.log("\r");

if (fruit1 == "apple" || fruit2 == "banana") {
	console.log("Yummy, but not as yummy as apples and peaches");
}
console.log("\r");

console.log(`The important thing ro notice is that the || operator requires only one of the expressions to be true.
  In this case only fruit1 == "apple" results in true. Even though fruit2 == "peach" is not true, the code block will
  be executed. On the other hand, the && operator requires both expressions to be true./r`);
console.log("\r");

console.log("Ternary Operator/r");
console.log("\r");

console.log(`The ternary operator is a one-line shorthand for the if else statement. It checks if the condition is true or false.
  If the condition is true, then the expression1 will run, otherwise expression2. This is the same as;
  if (condition) { expression1 } else { expression2 }\r`);
console.log("\r");

var age = 25;

(age > 18) ? console.log("You are soooo mature"): console.log("You are still a child");
console.log("\r");

console.log("Nested Conditions");
console.log("\r");

console.log(`Conditional statements inside conditional statements. Let's see an example\r`);
console.log("\r");

console.log(`if (2 > 1) {
  console.log("If condition is executed");

  if (1 > 0) {
    console.log("Nested if condition is executed");
  }
}\r`);
console.log("\r");

if (2 > 1) {
	console.log("If condition is executed");

	if (1 > 0) {
		console.log("Nested if condition is executed");
	}
}
console.log("\r");

console.log(`if (1 > 3) {
  console.log("if statement is executed");

  if (1 > 0) {
    console.log("Nested if statement is executed");
  }
} else {
  console.log("Else statement is executed");
}/r`);
console.log("\r");

if (1 > 3) {
	console.log("if statement is executed");

	if (1 > 0) {
		console.log("Nested if statement is executed");
	}
} else {
	console.log("Else statement is executed");
}
console.log("\r");

console.log(`Let's examine these results. The first condition is false, so we skip to the else statement. The nested statement is skipped entirely.\r`);
console.log("\r");

console.log(`if (5 > 2) {
  console.log("If statement here!");

  if (1 > 3) {
    console.log("Nested if statement!");
  } else {
    console.log("Nested else statement");
  }
} else {
  console.log("Regular else statement");
}\r`);
console.log("\r");

if (5 > 2) {
	console.log("If statement here!");

	if (1 > 3) {
		console.log("Nested if statement!");
	} else {
		console.log("Nested else statement");
	}
} else {
	console.log("Regular else statement");
}
console.log("\r");

console.log("Switch\r");
console.log("\r");

console.log("Switch compares each case to the value of the expression. It is useful when there are many cases to be checked\r");
console.log("\r");

console.log(`var fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;

  case "lemon":
    console.log("This is a lemon");
    break;

  case "strawberry":
    console.log("This is a strawberry");
    break;

  case "banana":
    console.log("Now that's a banana");
    break;

  default:
    console.log("this is the default value when none of the cases were true");
}\r`);
console.log("\r");

var fruit = "banana";

switch (fruit) {
	case "apple":
		console.log("This is an apple");
		break;

	case "lemon":
		console.log("This is a lemon");
		break;

	case "strawberry":
		console.log("This is a strawberry");
		break;

	case "banana":
		console.log("Now that's a banana");
		break;

	default:
		console.log("this is the default value when none of the cases were true");
}
console.log("\r");

console.log(`There are a lot of new keywords in the previous example. You will notice that we first declared a variable
  fruit and assigned a string "banana" to it. Now we want to check whether some other strings are "banana". In this case
  we have many such strings, so we are going to need a switch statement.

  First, we write a switch that has an expression. This expression is what we want to compare cases to. We compare "apple"
  to the fruit variable, that is the string "banana". All of the cases, as well as the default keyword, need to be wrapped
  in curly brackets {}.

  Now we get the case keyword. Each case is compared to the expression until the correct value is found. If the match is
  now found, then the code in default condition will be executed. In the next example, if we remove the case for "banana",
  the code from the default statement will show up:\r`);
console.log("\r");

console.log(`switch (fruit) {
  case "apple":
    console.log("That is an apple");
    break;

  case "lemon":
    console.log("ffs bro, you can do better than that... at least it's yellow I guess.");
    break;

  case "strawberry":
    console.log("Jesus fuck! You were closer with the lemon.");
    break;

  default:
    console.log("This is the default value, we will settle on your mediocrity");
}`)

switch (fruit) {
	case "apple":
		console.log("That is an apple");
		break;

	case "lemon":
		console.log("ffs bro, you can do better than that... at least it's yellow I guess.");
		break;

	case "strawberry":
		console.log("Jesus fuck! You were closer with the lemon.");
		break;

	default:
		console.log("This is the default value, we will settle on your mediocrity");
}
console.log("\r");