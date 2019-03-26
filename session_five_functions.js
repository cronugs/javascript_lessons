console.log("Functions allow us to write code once and then resuse it as much as we like.");
console.log("\r");

console.log(`function multiply(a, b) {
  return a * b;
}

multiply(10, 0);`);

function multiply(a, b) {
	return a * b;
}

console.log(multiply(10, 2));
console.log("\r");

console.log("Function Declarations");
console.log("\r");

console.log(`Declaring a function creates a function in memory. To declare a function, first use the function keyword,
then the name of the function, then if needed, any parameters in the parentheses`);
console.log("\r");

console.log(`function functionName(parameters) {
  code to be executed;
}`);
console.log("\r");

console.log(`function hello() {
	console.log("Hello World!... finally");
}

hello();`);

function hello() {
	console.log("Hello World!... finally");
}

hello();
console.log("\r");
console.log("Naming Functions");
console.log("\r");
console.log(`There are specific rules every developer should follow when naming functions. Functions should be named so
that they are easily understood by other developers. When you name your function, try to give it a name that everyone will
immediately know what that function does. When you name your function validateEmail(), that function should only validate email.
Nother else. Don't put other functionality in it. Don't calculate the mass of Mars in it. The name should descrive what the
function does. If you want to calculate the mass of Mars put that code in another function called massOfMars().`);
console.log("\r");

console.log("Parameters");
console.log("\r");

console.log(`Parameters are the values that we can use as a designated placeholder name for values that we wish to pass to the
function. In the below example we define a function that contains two parameters - a and b.`);
console.log("\r");

console.log(`function multiply(a, b) {
	return a * b;
}

multiply(10, 3);`);
console.log("\r");

function multiply(a, b) {
	return a * b;
}

console.log(multiply(10, 3));
console.log("\r");

console.log(`On the first line we define our multiply function, which contains the parameters a and b. These parameters are used
as variable names that can be used inside of this function. We can see this in the return statement. When we call the function, we
pass in the values we wish to use 10 and 3 as arguments to the function; multiply(10, 3);`);
console.log("\r");

console.log("Arguments");
console.log("\r");

console.log("An argument is a loval variable that can be used inside a function. Its value is passed into the function when it is called.");
console.log("\r");
console.log(`A function's parameters are the special variables used by a function to handle this input, whereas the arguments are the
values provided for the parameters when we run the function. in our multiply example the numbers 10 and 3 are the arguments passed in
to the code block: return a * b these are positional arguments so they will be assigned to the parameter variables in the order they
are given.`);
console.log("\r");

function multiply(a, b) {
	console.log("a is: " + a);
	console.log("b is: " + b);
	return a * b;
}

console.log(multiply(10, 2));
console.log("\r");

console.log("Default Parameters");
console.log("\r");

console.log(`All parameters have the value of undefined by default in JS functions. It means that the value will be undefined if
no other value was given to the parameter`);
console.log("\r");

console.log(`Assign a value to the default parameter with the = sign in the parenthesis of the function. Separate it with a with a comma
from other parameters. You should use it when you want to be sure that some parameter will not remain undefined. If you want to make sure
that particular parameter has a specific value if no other values are passed, you should use the default parameters.`);
console.log("\r");

console.log(`function multiply(a, b = 10) {
	return a * b;
}`);
console.log("\r");

function multiply(a, b = 10) {
	return a * b;
}

console.log("multiply(2);");
console.log(multiply(2));
console.log("\r");

console.log(`In this case, we wanted to make sure that b is set to 10 if we don't set it. If we forget to set that parameter in the
function call, it will be set to 10. But you can still set it to whatever you want; you can overwrite it by specifiying a new value
as an argument to the function call`);
console.log("\r");

console.log(`multiply(2, 2);`);
console.log(multiply(2, 2));
console.log("\r");

console.log("Calling a Function");
console.log("\r");

console.log(`You have to call a function to execute it. You do this with the function name followed by parentheses including any
neccessary arguments`);
console.log("\r");

console.log("multiply(2, 0);");
console.log("\r");

console.log("Return");
console.log("\r");

console.log(`Return is a JS keyword that returns a value from the function and stops further execution.`);
console.log("\r");

console.log("Scope");
console.log("\r");

console.log(`Scope is the current context of your code that includes objects, variables and functions and how they can be accessed.
When we start writing our script, we are immediately within the global scope. You might get a referenceError if you want to access
the variable inside the function from outside of the function.`);
console.log("\r");

console.log(`function hello() {
	var greeting = "hello";
}

console.log(greeting);`);
console.log("\r");
console.log(`ReferenceError: greeting is not defined
    at Object.<anonymous> (/home/shade/github/javascript_lessons/session_five_functions.js:157:13)
    at Module._compile (internal/modules/cjs/loader.js:799:30)`);
console.log("\r");

console.log(`The error tells us that the greeting variable is not defined, lathough we apparently defined it. It is not accessible.
We are going to explain the difference between these several scopes in the following lessons.`);
console.log("\r");

console.log("Global Scope");
console.log("\r");

console.log(`The outermost scope. All top level variables, functions and objects are considered to be in the global scope. When you
begin coding in JS, you are within global scope. Whatever you declare outside a function or object, is in the global scope. If we
declare a variable, it is immediately in the global scope, and we can access it from within the function. Global scope lives as long
as your application. However, local scope only lives as long as the function execution.`);
console.log("\r");

console.log(`var myVar = 1;

function myFunction() {
	console.log(myVar);
}

console.log(myFunction());`);
console.log("\r");

var myVar = 1;

function myFunction() {
	console.log(myVar);
}

console.log(myFunction());
console.log("\r");

console.log(`The global scope has global variables. They are accessible anywhere in the code. In our example above we have a global
variable named myVar which is accessible from within myFunction().`);
console.log("\r");

console.log("Local Scope");
console.log("\r");

console.log(`The scope of a function. It allows us to define variables that are only available from within the function.`);
console.log("\r");

console.log(`function myFunction() {
	var insideFunction = 0;
}

console.log(insideFunction);`);
console.log("\r");

function myFunction() {
	var insideFunction = 0;
}

console.log(`ReferenceError: greeting is not defined
    at Object.<anonymous> (/home/shade/github/javascript_lessons/session_five_functions.js:157:13)
    at Module._compile (internal/modules/cjs/loader.js:799:30)`);
console.log("\r");

console.log(`Here we defined a variable inside myFunction() and tried to access it from the global scope, resulting in a referenceError`);
console.log("\r");

console.log("The Let Keyword");
console.log("\r");
console.log(`Let is a type of variable. The let keyword vreates a variable and holds the value of that variable. It works much the same
as the var keyword, but there are some subtle differences`);
console.log("\r");

console.log(`let language = "JavaScript";
console.log(language);`);

let language = "JavaScript";
console.log(language);
console.log("\r");

console.log(`One of the main differences is that the let keyword won't allow us to redeclare a variable. Therefore we have a variable called
myVariable that we created using the let keyword. Then we won't be able to redeclare myVariable with a different value.`);
console.log("\r");

console.log(`let banana = "banana";
let banana = "apple";`);
console.log("\r");
console.log(`SyntaxError: Identifier 'banana' has already been declared
    at Module._compile (internal/modules/cjs/loader.js:743:23)`);
console.log("\r");

console.log("The Const Keyword");
console.log("\r");

console.log(`Once a value has been assigned to a const, it can't be changed. Ever. Const is short for constant, after all.`);
console.log("\r");

console.log(`const language = "JavaScript";

language = "ruby";`);
console.log("\r");

console.log(`SyntaxError: Identifier 'language' has already been declared
    at Module._compile (internal/modules/cjs/loader.js:743:23)`);
console.log("\r");

console.log("Block Statements");
console.log(`Block statements are blocks of code that define a scope by enclosing a block of code inside an if statement or a loop.
Some languages create a scope for blocks of code, but JS only does this when let or const are used.`);

console.log(`if (true) {
	let a = "Inside the if!";
	const b = "another one from the if";
}

a;
b;`);


if (true) {
	let a = "Inside the if!";
	const b = "another one from the if";
}
console.log("\r");

console.log(`ReferenceError: a is not defined
    at Object.<anonymous> (/home/shade/github/javascript_lessons/session_five_functions.js:273:1)
    at Module._compile (internal/modules/cjs/loader.js:799:30)`);
console.log("\r");

console.log("Callbacks");
console.log("\r");

console.log(`A callback function is a function that gets passed to a function as an argument. Which is then invoked inside the outer
function to complete some kind of routine or action. Here is an example`);
console.log("\r");

console.log(`function ask(question, good, bad) {
	if (confirm(question)) {
		good();
	} else {
		bad();
	}
}

function yes() {
	console.log("Glad to hear that!");
}

function no() {
	console.log("Sorry to hear that");
}

ask("Are you ok?", yes, no);`);

console.log("\r");
console.log(`We'll go through this line by line. On the first line, we declared a function called ask which takes three parameters named
question, good and bad.

Within the body of the ask function we have an if else block. The confirm() function takes one argument, the text shown in the dialog box.

On the second line, we are calling the confirm function with a question as an argument. The question argument is going to be passed from the
question parameter in the ask function. The confirm function returns either true or booleanFalse

If the result is true, the code block in the if statement will run, that is the good argument that will run a function.

Otherwise, the code in the else block will be executed, that is the bad argument that will run another function.

Notice that good and bad arguments in parentheses have to have the same name as the good() and bad() calls in the code blocks.

Moving on, we defined two more functions, yes and no. Both of them use the alert method.

on the 18th line of code, we called the ask function. We passed the "are you ok" string as a question argument for confirm in the second line
of the if statement. When we call ask("are you ok") string "are you ok" is going to be an argument for the confirm function.

If the user presses "ok" in the dialog, the confirm function returns true and the code block in the if statement is executed.

good();
The good argument got its value from the good parameter, and in this case it is the yes function.

If the user presses cancel in the dialog box, confirm will return false and the code block in the else statement will be executed:

bad();
The bad argument got its value from the bad parameter, and in this case, it is the no function.`);