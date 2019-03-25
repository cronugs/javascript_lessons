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