console.log("Iteration");
console.log("\r");

console.log(`Iteration is the repetition of an operation. It runs the same code several times. It commonly uses for loops and while loops`);
console.log("\r");

console.log(`Iterations are performed in loops. We are going to explain each loop in the following lessons. You can think
of iteration as doing the same stop over and over again until a certain condition is met. For example, you can  tell the
computer to take five steps in one direction until it gets home:

step.forward(5) until home;

This means step.forward(5) is going to repeat over and over again until it gets home.`);
console.log("\r");

console.log("For Loops");
console.log("\r");

console.log(`A For loop runs the same code over and over until the condition is met.
* Statement1 will run before the loop even starts.
* Statement2 defines the condition of the loop, when the loop should start or end.
* Statement3 runs after the loop.`);
console.log("\r");

console.log("for (statement1; statement2, statement3) {");
console.log(`       code block to be exectued`);
console.log("}");
console.log("\r");

console.log(`var i;
for (i = 0; i < 10; i++) {
	console.log("I am happy!");
}`);
console.log("\r");

var i;
for (i = 0; i < 10; i++) {
	console.log("I am happy!");
}
console.log("\r");

console.log(`Statement1 sets the start of the loop. This is the point the computer starts to count from`);
console.log("\r");
console.log(`Statement2 checks whether the value of i is less than 10 in each iteration. This sets the number of iterations.`);
console.log("\r");
console.log(`Statement3 increments the value of i in each iteration by one.`);
console.log("\r");
console.log(`We could also step through the for loop two at a time with i = i + 2
We could also count backwards with (var i = 10; i > 0; i--)`);
console.log("\r");

for (var i = 0; i < 10; i++) {
	console.log("i is " + i + " and that is less than 10");
}

console.log("i out of the loop: " + i);
console.log("\r");

for (var i = 0; i < 10; i = i + 2) {
	console.log("i is " + i + " and that is less than 10");
}
console.log("i out of the loop " + i);
console.log("\r");

for (var i = 10; i > 0; i = i - 2) {
	console.log("i is " + i + " and that is more than 0");
}
console.log("i out of the loop " + i);
console.log("\r");

console.log("For loops and arrays");
console.log("\r");

console.log(`The first thing we want to do is create an array that we are going to iterate through. Iteration is
going to display all the items in the array.`);
console.log("\r");

console.log(`var sports = ["starcraft2", "overwatch", "dota2", "hearthstone"];

for (var i = 0; i < sports.length; i++) {
	console.log(sports[i]);
}`);
console.log("\r");

var sports = ["starcraft2", "overwatch", "dota2", "hearthstone"];

for (var i = 0; i < sports.length; i++) {
	console.log(sports[i]);
}
console.log("\r");

console.log(`First we initialise the for loop. Then after declaring the var i and setting it to 0, we check the overall
length of the sports array with sports.length. The iteration will run 4 times since the array contains 4 items.
since i is being incremented every time the loop runs, when we call sports[i], it returns the array item that the current
iteration is up to.`);
console.log("\r");

console.log("For-in loops");
console.log("\r");

console.log("For-in loops are an easier way of iterating through arrays.");
console.log("\r");

console.log(`var sports = ["starcraft2", "overwatch", "dota2", "hearthstone"];

for (var i in sports) {
	console.log(sports[i]);
}`);
console.log("\r");

var sports = ["starcraft2", "overwatch", "dota2", "hearthstone"];

for (var i in sports) {
	console.log(sports[i]);
}
console.log("\r");

console.log("For-of loops and arrays.");
console.log("\r");

console.log(`For-of loops provide an easier way to iterate through arrays and get the elements out.`);
console.log("\r");

console.log(`var sports = ["starcraft2", "overwatch", "dota2", "hearthstone"];

for (var sport of sports) {
	console.log(sport);
}`);
console.log("\r");

var sports = ["starcraft2", "overwatch", "dota2", "hearthstone"];

for (var sport of sports) {
	console.log(sport);
}
console.log("\r");

console.log(`Again, we created an array on the first line and used a kind of for loop. This is simpler than the
regular for loop and allows us to extract the element without needing the index number. This is called a for-of loop
because it uses the keywords for and of inside the parentheses

using the keyword of causes the for loop to extract the value of the element from the array each time. In this example,
the variable we create is called sport. We can call the variables whatever we want. It is convention that a variable containing
an array index number is often called i, but since this variable contains the value, not the index number, we've chosen
a more descriptive name.

for (var sport of sports) is easy to remember, and is good if we want to be able to retrieve and work with the content of each
element in the array. We have looked at three different ways of iterating through arrays using a for loop. Array iteration is a
common task in web development with JavaScript, so practice using these for loops on your own until you feel comfortable with them`);
console.log("\r");

console.log("While Loops");
console.log("\r");

console.log(`A while loop runs the same code over and over until the condition is met. It lets us run out code while the condition
remains true.`);
console.log("\r");

var i = 0;

while (i < 10) {
	console.log("i is: " + i + " and that is less than 10");
	i++;
}
console.log("\r");

console.log("Do While Loops");
console.log("\r");

console.log(`Do while loop will run the block code at least once even thought the condition is false. It means that block code runs
before the condition is checked. The condition comes after the block code. This loop is used if you want to run block code at least
once no matter what. Do while loop will stop iteration when the condition is false.`);
console.log("\r");

console.log(`var i = 0;
do {
	console.log("I am happy!");
	i++;
} while (i < 10);`);
console.log("\r");

var i = 0;
do {
	console.log("i is " + i + " and that is less than 10");
	i++;
} while (i < 10);
console.log("\r");

console.log(`We set the variable i to 0 first, then the code block runs. Then in the same block, i was incremented by 1. Only after that,
the condition will be checked (i < 10). So it doesn't check if 0 is less than 10. Variable i was incremented by one before the condition.
The first time iteration came to the condition, i was already 1. When it bacame 9, code was executed, i was incremented by 1, it became
10, which is not less than 10, the condition was false and the loop stopped. But notice that if we set the variable i at the beginning
of the iteration to any number higher than 10, code block will run once.`);
console.log("\r");

console.log(`var i = 10;
do {
	console.log("i is " + i);
} while (i < 10);`);
console.log("\r");

var i = 10;
do {
	console.log("i is " + i);
} while (i < 10);
console.log("\r");

console.log("Break");
console.log("\r");

console.log(`The keyword break stops the iteration and exits the loop no matter which step the iteration is currently on.`);
console.log("\r");

console.log(`var i;
for (i = 0; i < 5; i++) {
	if (i == 3) {
		break;
	}
	console.log("i: " + i);
}`);
console.log("\r");

var i;
for (i = 0; i < 5; i++) {
	if (i == 3) {
		break;
	}
	console.log("i: " + i);
}
console.log("\r");

console.log("Continue");
console.log("\r");

console.log(`The continue keyword skips one iteration and continues on with the next one. It does not break or exit the loop. Notice
in the next example that there is no three. It was skipped because of the continue keyword.`);
console.log("\r");

console.log(`var i;
for (i = 0; i < 10; i++) {
	if (i == 3) {
		continue;
	}
	console.log(i);
}`);
console.log("\r");

var i;
for (i = 0; i < 10; i++) {
	if (i == 3) {
		continue;
	}
	console.log(i);
}
console.log("\r");

console.log("Nested loops - Part One");
console.log("\r");

console.log(`Nested loops are loops within loops. They run an interation within an iteration.`);
console.log("\r");

console.log(`for (statement1; statement2; statement3;) {
  code block to be executed;
  for (statement4; statement5, statement6) {
    code block to be executed;
  }
}`);
console.log("\r");

console.log(`First we will create a two-dimsional array`);
console.log("\r");

console.log(`var arr = [[1,2], [3,4], [5,6], [7,8]];`);

var arr = [
	[1, 2],
	[3, 4],
	[5, 6],
	[7, 8]
];
console.log("\r");

console.log(`console.log
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}`);
console.log("\r");

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

console.log(`
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
`);
console.log("\r");

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
console.log("\r");

console.log(`
First we create an array and begin out loop by initialising i and setting it to 0. Then we used the
for keyword to create a for loop. In the parenthesis, we set the i variable to 0. Therefore counting
will start at 0. The next statement is conditional:

	i < arr.length;

This means;
iterate as long as the variable i is less than the length of arr, in our
case four.Therefore the loop will run
until the variable i is no longer less than 4.

The next satement;
i++is the incrementor.

On the next line we access items in the array by their index.The result of the arr[0] is going to be the first nested.The
next one will be arr[1] and it will
return the second nested array.
`)
console.log("\r");

console.log("Nested Loops - Part Two");

console.log(`We need another loop to access items in the subarray, a loop that will iterate through arrays
that are nested in the first array

array[index][index];

For that, we need another incrementor and another loop, the nested loop. We called it j and set it to 0. We
need to make sure that this nested loop stops when there are no other items in the subarray, meaning when the
incrementor, this time called j, is less than the length of each subarray. All of our subarrays have only two
items which mean that j will need to be less than 2. When it goes to 2, the nested loop will stop. The incrementor,
j variable, in this case, will be either 0 or 1`);
console.log("\r");

console.log(`var arr = [
	[1, 2],
	[3, 4],
	[5, 6],
	[7, 8]
];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		console.log(j);
	}
}`);
console.log("\r");

var arr = [
	[1, 2],
	[3, 4],
	[5, 6],
	[7, 8]
];

for (var i = 0; i < arr.length; i++) {

	for (var j = 0; j < arr[i].length; j++) {
		console.log(j);
	}
}
console.log("\r");

console.log(`Now we are going to get the item that is positioned at each index 0 and 1.`);
console.log("\r");

for (var i = 0; i < arr.length; i++) {

	for (var j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
console.log("\r");

console.log("Infinite Loops");
console.log("\r");

console.log(`Infinite loops usually happen by mistake due to some bug in your code. It will run the block code an Infinite
number of times and probably crash your brower or app. Let's crank an example.`);
console.log("\r");

console.log(`var i = 0;

for (i; i < 1; i--) {
	console.log(i);
}`);
console.log("\r");
console.log(`This code will run forever because it ends when i is greater than 1, but because i is decrimented every 
iteration it never reaches 1 and the loop continues infinitely`);