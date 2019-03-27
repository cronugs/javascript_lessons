function repeatString(string, num) {
	var i = 0;
	var arr = [];
	while (i < num) {
		arr.push(string);
		i++;
	}
	return arr.join("");
}

var output = repeatString('*', 15);
console.log(output); // --> 'codecodecode'