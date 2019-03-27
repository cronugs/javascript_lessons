console.log(`Objext oriented principles are based on objects, instead of the actions and data.
It allows us to model the real world using onjects.`);
console.log("\r");

console.log(`The first thing you need to know about the objects is that they are essential. If you want
to build apps with JaveScript, you must know objects perfectly. You cannot be a JavaScript developer
without using objects. Almost everthing in JavaScript is an object whether you see it immediately or not.
As we are going to show you, objects have data stored in key-value pairs. Objects are used to minic
things in the real world. You see something in the real world, and you want to code in JavaScript.
Well, you better use objects!`);
console.log('\r');

console.log(`var car = {
	owner: "me",
	name: "speedy",
	year: 1917,
	wheels: 3
};`);
console.log("\r");

console.log(`This is known as an Object Literal and is the easiest way to create an object in JS.
Each object can process data, receive and send messages. Onjects are like self-contained
pieces of code that can be reused to build apps. They are independent, but still part of a more important
mechanism. You should use object-oriented principles (OOP) all the time, a general paradigm in many
popular programming languages.`);
console.log("\r");

console.log(`Objects are a collection of related data, they can hold data, methods, properties, functions And
even other objects. We can create objects by simply using a variable, name of the object and by assigning brackets
{} to the variable.`);
console.log("\r");

var country = {
	name: "Croatia",
	pop: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.pop + " people.");
	}
}

console.log(`var country = {
	name: "Croatia",
	pop: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.pop + " people.");
	}
}

country.bio();`);

country.bio();
console.log("\r");

console.log(`On the first line, we created a variable named country and initialised it as an object with
key-value pairs. The first key is name and its value is Croatia. The second key is pop and it ha the value 4.224.

Notice that each key-value pair is separated by a comma. The last key-value pair can have a trailing comma,
but it's not necessary.

On the 7th line, we created a function named bio that shows a shoty bio of the country. Don't worry about this
keyword yet. We will cover it later. The critical thing to notice is that JS objects can have functions themselves.`);
console.log("\r");

console.log("Methods");
console.log("\r");

console.log(`Methods are functions that can be used as an action for an object. They perform actions on the objects that they are defined in.
Add the name of the function followed by the colon and the function keyword in the object. Since the bio() function is defined inside the
country object, it can't be called without the country object.

country.bio();`);
console.log("\r");

console.log(`We can create an empty Object literal by creating a variable and assigning empty brackets

  let country = {};

Adding properties to an Object Literal

The object country has five properties. The first property has a key name and a value “Croatia”. Second has a key
population and a value of an integer. In every object key, which is also called property name, is a string. Reserved
keywords can be used as a key:

Constructor Function - Part one

A constructor is a way of creating an object. Use function keyword with a  capitalised function name. Put parameters in parentheses
and use them as arguments in function bodies.

function Car(year, owner, maufacturer) {
  this.year = year;
  this.owner = owner;
  this.manufacturer = manufacturer;
  this.speak = function () {
    return 'vrooooooom!';
  };
}

The constructor function is still a JS function. It can pass parameters to arguments in the body. In our case, the parameters are a year
an owner and a manufacturer. In the body of the function, we use ths this keyword. It helps us set these parameters as properties on an object.
This references the current object, which is the Car. On the 5th line, we added a function speak() to an object Car. Therefore we can call
speak on the Car object. Remember how we use length on the array and string object? We can call properties and object methods in the same
manner.

There are some differences in syntax between literal notation and function constructor when creating an object. Literal notation uses
colons while constructors use = signs for defining properties. Constructor function uses the this keyword which references  the current
object when adding data to it. Literal notation doesn't use this keyword for properties keys.

Constructor Function - Part Two

In the previous example, we just created an object Car. We didn't use it. To use it, we need to instantiate it. That means we have to create an instance
of our object. To do that we call the object and provide the required arguments. The keyword new is necessary to instantiate the object. We
assign the newly created instane to a variable name myCar. Consequently myCar variable stores an instance of an object names Car with properties
specific to myCar. Therefore our object that is stored in the myCar variable is an instance of the Car object. Also, we can call all of the Methods
and properties that Car object has on our instance.

function Car(year, owner, manufacturer) {
	this.year = year;
	this.owner = owner;
	this.manufacturer = manufacturer;
	this.speak = function() {
		console.log('vreeeeeyaaaah');
	};
}

let myCar = new Car("1965", "Ann", "Ford");
myCar.speak();
console.log(myCar.year, myCar.owner);`);

function Car(year, owner, manufacturer) {
	this.year = year;
	this.owner = owner;
	this.manufacturer = manufacturer;
	this.speak = function() {
		console.log('vreeeeeyaaaah');
	};
}
console.log("\r");

let myCar = new Car("1965", "Ann", "Ford");;
console.log("\r");
myCar.speak();

console.log(myCar.year, myCar.owner);
console.log("\r");
console.log('console.log(myCar instanceof Car);');
console.log(myCar instanceof Car);

console.log(`Overriding

Updating property values and methods inthe derived class, it updates property values and methods. You can override a function if you declare
it again after the original declaration.

function saySomething() {
  console.log("Something!");
}

function saySomething() {
  console.log("Something else");
}

saySomething();
`);
console.log("\r");

function saySomething() {
	console.log("Something!");
}

function saySomething() {
	console.log("Something else");
}

saySomething();
console.log("\r");

console.log(`This - Part one

So far we know that an object stores data. What if we want to reference that data from within the same object? How can we get to it?
That is why we need to this keyword. If there is no this keyword, we will get a referenceError. JavaScript would not know that these two
variables were already defined. It couldn't get to them.`);

var person = {
	firstName: "Judy",
	lastName: "Smith",
	hello: function() {
		// notice the template literal and string interpolation
		console.log(`My name is: ${this.firstName} ${this.lastName}`);
	}
};

person.hello();

console.log(`This - Part Two

Aint much in Part two so we will skip directly to part three

This - Part three

Int he precious lesson, we talked about the this keyword. We got to the global object. This time we are going to create an object with a function
and a property named type. The humanise function lets our fruit talk. Wow, JS can so magic! We're gonna let the banana introduce itself by Calling
the function the same way we called function expressions. The first thing is to save it in the variable and then call it on the next line.

let fruit = {
	type: "banana",
	humanize: function() {
		console.log('Although I am a ' + this.type +', I can still talk!');
	}
};

let weirdFunction = fruit.humanize;
weirdFunction();

When we run this we get undefined instead of 'banana'. This is because the variable weirdFunction got a function as a value. The this keyword
in that function no longer has any connection with the fruit object. That is because this is set when we execute the function, not when we 
define it. So again we got to the global object, not the fruit object as we wanted to.

Getting object values

You read object values by using the objects key

var country = {
	name: "Croatia",
	pop: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian"
};

console.log(country.name);
console.log(country.pop);
console.log(country.islands);

Croatia
4.224
1000

You call the name of the property on the object by using dot notation: objectName.property. This is the case no matter how you created
the object.

/* Function constructor */

function Mammal(type, sound) {
	this.type = type;
	this.sound = sound;
}
let doggie = new Mammal("dog", "woof");
console.log(doggie.type);
console.log(doggie.sound);

/* Object constructor*/

let mammal = new Object();
mammal.type = "dog";
mammal.sound = "woof";
console.log(mammal.type);
console.log(mammal.sound);

If you have an object that has another object as a property, then you can use dot notation twice to get the property of the inner object

let tree = {
	species: "olive tree",
	age: 101,
	location: "Zadar",
	leaves: {
		amount: 1000,
		color: "green"	
	}
};

console.log(tree.leaves.amount);
console.log(tree.leaves.color);

1000
green

Updating Object Values

We can change the value of properties using the same syntax; objectName.property and assign a new value to it. This works the same no
matter which of the three ways an object was created.

var country = {
	name: "Croatia",
	population: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.population + " people");
	}
};

country.name = "Ireland";
console.log(country.name);
country.bio()
}

Ireland
Ireland is a country with 4.224 people

Deleteing Object Properties

Properties can be deleted by using the delete keyword along with the objectName.property. This will delete both the key and the value.

var country = {
	name: "Croatia",
	population: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.population + " people");
	}
};

delete country.name;
console.log(country.name);

undefined

Exceptions

Exceptions are a mechanism in JavaScript for handling mistakes. It stops the code and goes back to the line of code where it knows
how to handle the problem. Add it to areas of code where errors may happen.

You will probably make lots of mistakes while codeing in JS. In fact, errors and exceptions should be taken as guidance to correct coding.
sometimes you will want to create your own custom errors. Default built-in JS errors will not be good enough, and this is when you should
use a try... catch...finally statement. It will help you to detect an error, catch it and execute the code accordingly. That statement
is the primary topic of this lecture. When an error occurs, further code execution stops. The JS interpreter will be so dismissive of you,
that it won't even bother to look at any code after the mistake you made. First, fix the mess, then you can talk to JS!

Try-Catch

Try-catch is a statement that handles errors. Uses in a statement to catch a particular error and execute code as an error happens.
First, try to spot an error in the try statement. If an error doesn't happen, continue with the execution:

try {
	console.log("No errors detected!");

} catch(err) {

	console.log('catch is skipped, because there are no errors');
}

console.log("Execution continues");

No errors spotted!
Execution continues

If an error occurs, execute the code from the catch statement

try {
	helloWorld();
} catch(err) {
	console.log("Error occured and the catch statement was executed");
}

console.log("the execution continues");

Error occured and the catch statement was executed
the execution continues

try {
	helloWorld();
} catch(cupcake) {
	console.log(cupcake.name);
	console.log(cupcake.message);
	console.log("Please define a helloWorld function");
}

ReferenceError
helloWorld is not defined
Please define a helloWorld function

Finally

Finally is the last part of the try-catch statement. It executes the code whether or not the exception was thrown. Finally should be 
used when you want to clean up after the error mess.

function openPandoraBox() {}
function closePandoraBox() {
	console.log('closing....')
} try { 
	openPandoraBox();
	sneekpeak();
}

finally {
	closePandoraBox();
}

closing...
ReferenceError: sneekpeak is not defined
    at eval:6:2
    at eval
	at new Promise


Here is a different example.

var numbers = [1,2,3,4,5, "banana", null];

var i = 0, total = 0;
while(i < numbers.length) {
	try {
		if ((typeof numbers[i] != "number") || isNaN(numbers[i])) {
			continue;
		}
		total += numbers[i];
	}
	finally {
		console.log("Finally statement executed!");
		i++;
		console.log(total);
	}
}

Finally statement executed!
1
Finally statement executed!
3
Finally statement executed!
6
Finally statement executed!
10
Finally statement executed!
15
Finally statement executed!
15
Finally statement executed!
15

We didn't use the catch statement inthe example above because try will never have an error. So catch will have nothing to catch. Ok, 
don't be overwhelmed with the code. We are taking it step by step. So, on the first line, we declared an array that has seven items which
means that the length of the array is 7. then we used a while loop. We set two variables; i and total. The var i is used as an incrementor
and total is the sum of all the numbers in the array. So the while loop will be executed until the i is no longer less than the length of
the array which is equal to 7.

Now to the fun part. In the try statement, we have an if statement that checks if var i is something other than a number, either if the 
result of the typeof numbers[i] is something other than the number type or if the result of the NaN(numbers[i]) is true. If either of
these two expressions returns true, then the code in the if statement will be executed. So if the number in the array is a number, then
add that number to the total sum. If it is not a number, then skip the iteration with the continue statement and move on to the next one.

Now to the finally statement. The variable i in the finally statement will be incremented by 1 in each iteration. It is going to be 
numbers[0], numbers[1], numbers[2], numbers[3], numbers[4].

That is it. We used a finally statement to make sure that i is increased by 1 in each iteration. There are, as always, other ways to 
achieve the same result. Finally statement will be executed no matter what. Its code will run after try and catch statments regardless of
the result.

Throw

It is an operator which throws a user-defined exception. The syntax is throw <error object>
Let's have an example

Let person = {"age": 30, firstName: "Jane"};

try {
	if (!person.occupancy) {
		throw new Error ("No such property as occupancy");
		console.log("You will never get to me!");
	}
} catch(e) {
	alert("Error: + e.message);
}

Error: No such property as occupancy

Instead of having the default JS message for an error, we defined out own on the 5th line. We could have written anythng we want. Feel
free to add some funny sentences and rerun the code in the message. So when the interpreter realised there is no occupancy property on
the person object, throw generated a new instance of the error object with the message. As a consequence, our object has a propety message
with a string "No such property as occupancy". When we use alert to show the error message, it will be that same message because we created
it for the error object with the throw operator. The critical thing to note that no other statement after the throw operator will be executed.
The interpreter moves to the catch statement. Therefore that 6th line will never run.

`);