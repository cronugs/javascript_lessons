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

var languages = ['JavaScript', 'python', 'ruby', 'java', 'c#'];

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

console.log("Numbers to Strings");
console.log("\r");

console.log(`Coverting numbers to strings is straightforward with toString() method on a number with an argument in patenthesis that specifies the numeral
system. When we say number, of course, we do not just mean the decimal (base-10) number system. It equally applies to other standard number ststems such as
base-16 (hexadecimal), base-8 (octal), and base-2 (binary)`);
console.log("\r");

console.log(`var a = 12;
var b = 13;
var c = 22;
var d = 15;`);
console.log("\r");

var a = 12;
var b = 13;
var c = 22;
var d = 15;

console.log("Regular number to string");
console.log("\r");
console.log("var num1 = a.toString();");
var num1 = a.toString();
console.log(num1);
console.log("\r");

console.log("To binary");
console.log("\r");
console.log("var num2 = b.toString(2);");
var num2 = b.toString(2);
console.log(num2);
console.log("\r");

console.log("To octal");
console.log("\r");
console.log("var num3 = c.toString(8);");
var num3 = c.toString(8);
console.log(num3);
console.log("\r");

console.log("To Hexadecimal");
console.log("\r");
console.log("var num4 = d.toString(16);");
var num4 = d.toString(16);
console.log(num4);
console.log("\r");

console.log("Strings to Numbers");
console.log("\r");
console.log(`You can also take a numeric string and convert it back to numbers.`);
console.log("\r");

console.log(`var string1 = "12";

var number1 = parseInt(string1);
var number2 = Number(string1);

var string2 = "3.41";
var number3 = parseFloat(string2);
`);

var string1 = "12";

var number1 = parseInt(string1);
var number2 = Number(string1);

var string2 = "3.41";
var number3 = parseFloat(string2);

console.log(number1, number2, number3);
console.log("\r");
console.log("and check if they are numbers");
console.log("\r");
console.log(`console.log(typeof(number1));
console.log(typeof(number2));
console.log(typeof(number3));`);

console.log(typeof(number1));
console.log(typeof(number2));
console.log(typeof(number3));
console.log("\r");

console.log("Boolean Conversion");
console.log("\r");

console.log(`It depends on what you want to convert your boolean to. We can use toString() method again to convert boolean to a string.
If you're going to convert a boolean value to a number, then use Number() function.`);
console.log("\r");

console.log(`var string = true.toString();
var number1 = Number(true);
var number2 = Number(false);`);
console.log("\r");

var string = true.toString();
var number1 = Number(true);
var number2 = Number(false);

console.log(`console.log(string, number1, number2);
console.log(typeof(string));`);
console.log("\r");

console.log(string, number1, number2);
console.log(typeof(string));
console.log("\r");

console.log(`Unary and binary operators convert boolean to a number. Therefore we can perfom arithmetic operations with boolean values.
These operators convert true to a number and false to a 0.`);
console.log("\r");

console.log(`These operators convert true to 1 and false to 0`);
console.log("\r");
console.log("Unary operators");
console.log("\r");
console.log(`console.log(+true);
console.log(+false);`);
console.log("\r");

console.log(+true);
console.log(+false);
console.log("\r");

console.log("Binary operators");
console.log("\r");
console.log(`console.log(true / 1);
console.log(false * 1);
console.log(false - false);
console.log(false + true);
console.log(true / true);`);
console.log("\r");

console.log(true / 1);
console.log(false * 1);
console.log(false - false);
console.log(false + true);
console.log(true / true);
console.log("\r");

console.log("Implicit Type Conversion");
console.log("\r");
console.log("Sometimes a data type will get changes automatically, like in the cause of an int being added to a string");
console.log("\r");

console.log("Example 1 - Add a boolean to a string");
console.log("\r");
console.log(`In this example we add a string and a boolean. JavaScript converts the boolean to a string and concatinates it.`);
console.log("\r");

console.log(`var stringBoolean = ("true" + true);
console.log(typeof(stringBoolean));`);
console.log("\r");

var stringBoolean = ("true" + true);
console.log(stringBoolean);
console.log(typeof(stringBoolean));
console.log("\r");

console.log("Example 2 - Add a number to a string");
console.log("\r");
console.log(`In this example JavaScript converts the int to a sting and concatinates it.`);
console.log("\r");

console.log(`var stringNumber = ("banana" + 2);
console.log(typeof(stringNumber));`);
console.log("\r");

var stringNumber = ("banana" + 2);
console.log(stringNumber);
console.log(typeof(stringNumber));
console.log("\r");

console.log("Example 3 - Multiply a boolean");
console.log("\r");
console.log(`In this example we see that when we multiply a boolean, it is first converted to an int, then it is multiplied.`)
console.log("\r");

console.log(`var numberBoolean = (2 * true);
console.log(typeof(numberBoolean));`);
console.log("\r");

var numberBoolean = (2 * true);
console.log(numberBoolean);
console.log(typeof(numberBoolean));
console.log("\r");

console.log("Example 4 - Add a number to a string containing a numeral");
console.log("\r");
console.log(`In this example we have a string containing a numeral and an int. The int is converted to a string and concatinated.`);
console.log("\r");

console.log(`var stringNumber2 = ("2" + 5);
console.log(typeof(stringNumber2));`);
console.log("\r");

var stringNumber2 = ("2" + 5);
console.log(stringNumber2);
console.log(typeof(stringNumber2));
console.log("\r");

console.log("Example 5 - Multiply a string");
console.log("\r");
console.log(`In this example we see that you cannot multiply a string by a number. The result is NaN`);
console.log("\r");

console.log(`var stringMultiplied = ("string" * 3);
console.log(typeof(stringMultiplied));`);
console.log("\r");

var stringMultiplied = ("string" * 3);
console.log(stringMultiplied);
console.log(typeof(stringMultiplied));
console.log("\r");