function isOldEnough(num) {

	if (Math.sign(num) == -1 || isNaN(num)) {
		return "Invalid argument";
	} else if (num >= 18) {
		return true;
	} else {
		return false;
	}

}

isOldEnough(-19);