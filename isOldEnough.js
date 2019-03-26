function isOldEnough(num) {
	if (num >= 18) {
		return true;
	} else if (num >= 0 && num < 18) {
		return false;
	} else if (Math.sign(num) == -1) {
		return console.log("Invalid argument");
	} else if (Number.isInteger(num) == false) {
		return console.log("Invalid argument");
	} else {
		return false;
	}
}

console.log(isOldEnough("rt"));