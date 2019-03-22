console.log(Math.trunc(15.2));

var a = 10;

console.log(a);

console.log("A is: " + a);

var a = 15;

console.log("Now it is: " + a);

// Multiple variables can be defined by a single line; you don't have to declare each variable on a sepatate line.

var a = 10;
var b = 20;
var c = 30;

console.log(a, b, c);


var myString = "Call me a mad lad ";

console.log("result of indexOf() on the string 'call me a mad lad'\r");

console.log(myString.indexOf('c'));

console.log("result of lastIndexOf() on the same string\r");

console.log(myString.lastIndexOf('c'));

console.log("slice() returns a substring based on the start and end index\r");

console.log(myString.slice(14, 18));

console.log("we can convert the string to all lower case\r");

var lowerCasedString = myString.toLowerCase();

console.log(lowerCasedString);

console.log("we can convert the string to all upper case\r");

var upperCasedString = myString.toUpperCase();

console.log(upperCasedString);

console.log("we can measure the length of a string with length (including spaces)\r");

console.log("myString is " + myString.length + " characters long");

console.log("we can use repeat to repeat a string a number of times\r");

console.log(myString.repeat(3));

console.log("We can concatinate strings with the '+' operator\r");

console.log("myString.toLowerCase() + myString.toUpperCase gives us:\r");

console.log(myString.toLowerCase() + myString.toUpperCase());

console.log("we can also asign this to a new variable\r");

console.log("var concatinatedString = myString.toLowerCase() + myString.toUpperCase();");

var concatinatedString = myString.toLowerCase() + myString.toUpperCase();
console.log(concatinatedString);

console.log("We can also concatinate by calling the concat method on our first string and provide the strings to be concatinated as args to concat()\r");

console.log("var str1 = 'You ';\nvar str2 = 'mad ';\nvar str3 = 'lad! ';\n");

console.log("str1.concat(str2, str3);\r");

var str1 = "You ";
var str2 = "mad ";
var str3 = "lad! ";

console.log(str1.concat(str2, str3));

console.log("There is a better way to concatinate using ES6 or ECMAScript 6 and string literals:\r");

console.log("var str1 = 'Holy ';\nvar str2 = 'hell!';\n");

var firstString = "Holy ";
var secondString = "hell!";

console.log("`${firstString + secondString}`");

console.log(`${firstString + secondString}`);

console.log("String interpolation (inserting values from other objects into a string) used to be done only with '+' concatination, like so;\r");

console.log("'Left side is equal to ' + leftSide + ' and right side is equal to ' + rightSide\r");

var leftSide = 10;
var rightSide = 20;

console.log("Left side is equal to " + leftSide + " and right side is equal to " + rightSide);

console.log("Now we can inject the values directly into template literals using the same ${textGoesHere} syntax as used for concatination");

console.log("var leftSide = 10;\nvar rightSide = 20;\n");

console.log("console.log(`Left side is equal to ${leftSide} and right side is equal to ${rightSide}.`)\r");

console.log(`Left side is equal to ${leftSide} and right side is equal to ${rightSide}.`);