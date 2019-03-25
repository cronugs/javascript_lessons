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