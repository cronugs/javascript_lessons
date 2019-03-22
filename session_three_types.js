console.log("Session 3 - Type Conversion");
console.log("\r");

console.log("Type conversion is just that. Converting from one type of data to another\r");
console.log("\r");

console.log(`First we demonstrate the typeof operator. It tellsl you the data type of the object. Imagine that you are working with some
  objects in JavaScript and at some point, you want to be sure whether your object is a string, array or something else. All this coding is
  confusing and you want to be sure if something that looks like a number is a number.`)
console.log("\r");

console.log(`var numberOrString = "12";
console.log(typeof(numberOrString));\r`);
console.log("\r");

var numberOrString = "12";
console.log(typeof(numberOrString));
console.log("\r");

console.log("Arrays to Strings");
console.log("\r");

console.log(`Sometimes you're going to need to convert an array to a string. There are two ways of achieving this. We can call toString()
method on the array you want to convert to a string. That method returns a new array without altering the original one:`);
console.log("\r");

var languages = ["JavaScript", "python", "ruby", "java", "c"];
var languageString = languages.toString();

console.log(languageString);
console.log("\r");

console.log(typeof(languageString));