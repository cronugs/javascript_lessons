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

`);