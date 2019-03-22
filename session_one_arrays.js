console.log("Now it's time for some arrays\r");
console.log("\r");

console.log("Arrays can contain any type of data.\nYou simply declare a variable and assign the data in [] brackets\r");
console.log("\r");

console.log('var myArray = [1, 2, "couches", "frogs"];\r');
var myArray = [1, 2, "couches", "frogs"];
console.log('console.log(myArray);\r');
console.log(myArray);
console.log("\r");

console.log("You can also create an array with the Array() constructor");
console.log('var cities = new Array("Brisbane", "Hong Kong", "Lismore", "Amsterdan");\r');
var cities = new Array("Brisbane", "Hong Kong", "Lismore", "Amsterdan");
console.log("console.log(cities);\r");
console.log(cities);
console.log("\r");
console.log("Literal notation is the prefered way of creating arrays");
console.log("\r");

console.log("Arrays are indexed starting from 0\nIf you want to access an item in the array you put it's index number in the brackets");

console.log("console.log(myArray[0]);\r");
console.log(myArray[0]);
console.log("console.log(myArray[3]);\r");
console.log(myArray[3]);
console.log("console.log(cities[3]);\r");
console.log(cities[3]);
console.log("\r");

console.log("We can also get the index of the item we need\r");
console.log(`console.log(newArray.indexOf(1));
console.log(myArray.indexOf(2));
console.log(myArray.indexOf("apple"));
console.log(myArray.indexOf("banana"));`);

console.log(myArray.indexOf(1));
console.log(myArray.indexOf(2));
console.log(myArray.indexOf("couches"));
console.log(myArray.indexOf("frogs"));
console.log("\r");

console.log("Array Methods - Push & Pop\r");
console.log("\r");

console.log("We use push to add a new item to the end of our index\r");
console.log("\r");

console.log('myArray = ["milk", "bread", "chocolate"];\r');
myArray = ["milk", "bread", "chocolate"];
console.log("console.log(myArray)\r");
console.log(myArray);
console.log('myArray.push("juice")\r');
myArray.push("juice");
console.log("console.log(myArray)\r");
console.log(myArray);
console.log("\r");

console.log("the pop method removes the last item from an array\r");
console.log("\r");

console.log("console.log(myArray.pop())\r");
console.log(myArray.pop());
console.log("console.log(myArray);\r");
console.log(myArray);
console.log("\r");

console.log("Array Methods - Shift and Unshift\r");
console.log("\r");

console.log("The shift() method removes the first item from and array while the unshift() method adds an item to the beginning.\r");
console.log("\r");

console.log("myArray.shift();\r");
myArray.shift();
console.log(myArray);
console.log("\r");

console.log('myArray.unshift("flour");\r');
myArray.unshift("flour");
console.log(myArray);
console.log("\r");

console.log("The reverse() method reverses the order of items inthe array. The first iem will be last, the last will be first and so on\r");
console.log("\r");

console.log("console.log(myArray.reverse());\r");
console.log(myArray.reverse());
console.log("\r");

console.log("Array Methods - Slice\r");
console.log("\r");

console.log("The slice() method takes two arguments; the start point and the end point.\nThe end point is not included in the result.\nThese two points represent indices in an array. Don't forget that original array is not changed.\nInstead, slice method returns the result in the form of a new array.\nIt doesn't affect the original one;\r");
console.log("\r");

console.log('var planets = ["Earth", "Mars", "Neptune", "Uranus", "Venus"];\r');
var planets = ["Earth", "Mars", "Neptune", "Uranus", "Venus"];
console.log("\r");

console.log(`var slicedPlanets = planets.slice(2,4);
console.log(slicedPlanets);\r`);
var slicedPlanets = planets.slice(2, 4);
console.log(slicedPlanets);
console.log("\r");

console.log("Array Method - Sort\r");
console.log("\r");

console.log(`The sort() method sorts the items in an array in ascending and alphabetical order.
unicode points are used rather than the Roman/Arabic characters themselves. if you have several
strings, sort method will sort them alphabetically. If there are numbers, they will be sorted from
lowest to highest. However as unicode code points are used, they are ordered by the first character
in the number. This can be seen in the second example below with the number 11\r`);
console.log("\r");

console.log('var styles = ["metal", "grunge", "hiphop", "downtempo"];\r');
var styles = ["metal", "grunge", "hiphop", "downtempo"];
console.log('console.log(styles.sort());\r');
console.log(styles.sort());
console.log("\r");

console.log("var numbers = [4, 6, 2, 7, 8, 1, 9, 11];\r");
var numbers = [4, 6, 2, 7, 8, 1, 9, 11];
console.log("console.log(numbers.sort());\r");
console.log(numbers.sort());
console.log("\r");

console.log("Array Methods - Fill\r");
console.log("\r");

console.log(`Let's look again at our grocery list. We had milk, bread and chocolate. But what if you wanted to add banana instead of milk?
It would be silly first to shift milk and then unshift banana, right? It's just too much work. And what if we wanted to replace something
else? How can we get to the item that is neither at the beginning nor at the end of an array? Brace yourself for a much simpler way. We
simply select an item with th appropriate index and replace it with the data we want!\r`);
console.log("\r");

console.log('var myArray = ["milk", "bread", "chocolate"];\r');
var myArray = ["milk", "bread", "chocolate"];
console.log('myArray[0] = "banana";\r');
myArray[0] = "banana";
console.log("console.log(myArray);\r");
console.log(myArray);
console.log("\r");

console.log(`With the ES6, the newest version of JavaScript, there is one more way to alternate the content of the current array.
Meet the fill() method. It can take three arguments. The first one is the value that we want to put in the array, the secone is
where to start filling and the last is where to stop filling:\r`);
console.log("\r");

console.log("If given only one argument, fill will replace all items in an array with the provided data\r");
console.log('var array1 = ["milk", "bread", "chocolate", "lemon", "banana"];\r');
var array1 = ["milk", "bread", "chocolate", "lemon", "banana"];
console.log('console.log(array1.fill("a"));\r');
console.log(array1.fill("a"));
console.log("\r");

console.log("or we provide all three args. In this example we are replacing the second and third items with 'a'.\r");
console.log("\r");

console.log('var array2 = ["one", "three", "four", "five", "six"];\r');
var array2 = ["one", "three", "four", "five", "six"];
console.log('console.log(array2.fill("a", 1, 3));\r');
console.log(array2.fill("a", 1, 3));
console.log("\r");

console.log("Concatenating arrays\r");
console.log(`Just like concatenating strings we can also concatenate arrays. We call the same concat() method. It does not change the original
arrays. It creates a new array\r`);
console.log("\r");

var firstLetters = ["a", "b", "c"];
var secondLetters = ["x", "y", "z"];
console.log(`var firstLetters = ["a", "b", "c"];
var secondLetters = ["x", "y", "z"];\r`);
console.log("\r");

var newArray1 = firstLetters.concat(secondLetters);
var newArray2 = secondLetters.concat(firstLetters);
console.log(`var newArray1 = firstLetters.concat(secondLetters);\r`);
console.log(`var newArray2 = secondLetters.concat(firstLetters);\r`);
console.log("\r");

console.log("console.log(newArray1);\r");
console.log("console.log(newArray2);\r");
console.log("\r");

console.log(newArray1);
console.log(newArray2);
console.log("\r");

console.log("Multidimensional Arrays\r");
console.log("\r");

console.log(`var myArray = [ [val1, val2, val3], [val4, val5, val6] ]; We can see that myArray
  has only two values, that are two subarrays. It means that myArray[0] will return the first subarray:
  [val1, val2, val3], while myArray[1] will return the second subarray [val4, val5, val6]. Each subarray has
  three values. If we want to select items in subarrays, then we nees to add one more set of brackets
  with an index as shown in the example below:\r`);
console.log("\r");

var twoDimensionalArray = [
	["a", "b", "c"],
	["d", "e", "f"],
	["g", "h", "i"]
];
console.log(`var twoDimensionalArray = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];\r`);
console.log("\r");

console.log("console.log(twoDimensionalArray);\r");
console.log("\r");

console.log(twoDimensionalArray);
console.log("\r");

console.log("console.log(twoDimensionalArray[0][2]);\r");
console.log("\r");
console.log(twoDimensionalArray[0][2]);