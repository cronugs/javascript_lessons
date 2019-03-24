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

console.log(`console.log(languageString);\r`);
console.log("\r");
console.log(languageString);
console.log("\r");

console.log(`console.log(typeof(languageString));\r`);
console.log("\r");
console.log(typeof(languageString));
console.log("\r");

console.log(`We can convert the same array to a string with join method. That method takes separator as a argument. It is a character
  that will separate items in the newly created string. It can be a comma, dot or even a word or a number`);
console.log("\r");

console.log(`var languages =['JavaScript', 'python', 'ruby', 'java', 'c#'];

var noDelimiter = languages.join("");
var withComma = languages.join(",");
var withSpace = languages.join(" ");
var withNumber = languages.join("1");
var withWord = languages.join("and");\r`);
console.log("\r");

var languages =['JavaScript', 'python', 'ruby', 'java', 'c#'];

var noDelimiter = languages.join("");
var withComma = languages.join(",");
var withSpace = languages.join(" ");
var withNumber = languages.join("1");
var withWord = languages.join("and");

console.log(`console.log("without delimiter: " + noDelimiter);
console.log("with comma: " + withComma);
console.log("with space " + withSpace);
console.log("with number " + withNumber);
console.log("with word " + withWord);`);
console.log("\r");

console.log("without delimiter: " + noDelimiter);
console.log("with comma: " + withComma);
console.log("with space " + withSpace);
console.log("with number " + withNumber);
console.log("with word " + withWord);
console.log("\r");

console.log(`console.log(languages);\r`);
console.log(languages);
console.log("\r");

console.log("Strings To Arrays");
console.log("\r")
console.log(`If you want to convert a string to an array, you should start with the split() method. The split() method takes separator and limit as arguments.
The separator sets the character to use to separate the string. It sets the place where the split will happen. Limit sets the limit for how many
times should split be repeated:`);
console.log("\r");

console.log(`Example 1. Each character will be split.

var string1 = "String to array";
var array1 = string1.split("");`);
console.log("\r");

var string1 = "String to array";
var array1 = string1.split("");

console.log(`console.log(array1);`);
console.log(array1);
console.log("\r");

console.log(`Example 2. Split will happen after each space.

var string2 = "string string, string";
var array2 = string2.split(" ");`);
console.log("\r");

var string2 = "string string, string";
var array2 = string2.split(" ");

console.log(`console.log(array2);`);
console.log(array2);
console.log("\r");

console.log(`Example 3. Split will happen after each comma.

var string3 = "string, string, string";
var array3 = string3.split(",");`);
console.log("\r");

var string3 = "string, string, string";
var array3 = string3.split(",");

console.log(`console.log(array3);`);
console.log(array3);
console.log("\r");

console.log(`Example 4. Split will stop after forth split.

var string4 = "string, string, string, string, string";
var array4 = string4.split(",", 4);`);
console.log("\r");

var string4 = "string, string, string";
var array4 = string4.split(",", 4);

console.log(`console.log(array4);`);
console.log(array4);
console.log("\r");

console.log(`Example 5. Will split after each 'and' and stop after forth split.

var string5 = "string and string and string and string";
var array5 = string5.split("and", 4);`);
console.log("\r");

var string5 = "string and string and string and string";
var array5 = string5.split("and", 4);

console.log(`console.log(array5);`);
console.log(array5);
console.log("\r");

console.log("Using split");
console.log("\r");
console.log(`With ES6 we can convert a string into an array with from() method called on the array object.
You can read is as "create an array from a string":`);
console.log("\r");

console.log(`var string = "Cool string";
Array.from(string);`);
var string = "Cool string";
console.log(Array.from(string));
console.log("\r");
