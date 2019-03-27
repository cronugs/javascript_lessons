function isOldEnough(num) {
	if (num >= 18) {
		return true;
	} else if (num >= 0 && num <= 17) {
		return false;
	} else if (num == isNaN) {
		return 'Invalid argument';
	} else {
		return 'Invalid argument';
	}
}



console.log(isOldEnough("35"));


function clipArray(arr) {
	arr.pop();
	return arr;
}

var arrayToClip = [1, 2, 3, 4];
console.log(clipArray(arrayToClip));



function repeatString(string, num) {
	return string.repeat(num);
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'