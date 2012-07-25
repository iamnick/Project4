// Nick Stelzer

// Does a string follow a 123-456-7890 pattern like a phone number?
var isValidPhoneNumber = function (string) {
	var validLength = [10, 11, 12, 14];		// Lengths of a phone number string with/without area code/dashes
	
	// Check to see if string is a valid length to be a phone number 
	switch(string.length) {
		case 10:
			if (!isNaN(string)) {
				return true;	// string is a number, can't be a phone number
			} else {
				return false;	// string is NaN, can be a phone number
			}
			break;
		case 11:
			if (!isNaN(string)) {
				return true;
			} else {
				return false;
			}
			break;
		case 12:
			if (string.charAt(3) == "-" && string.charAt(7) == "-") {
				if (!isNaN(string.substring(0,2)) && !isNaN(string.substring(4,6)) && !isNaN(string.substring(8,11))) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case 14:
			if (string.charAt(1) == "-" && string.charAt(5) == "-" && string.charAt(9) == "-") {
				if (!isNaN(string.charAt(0)) && !isNaN(string.substring(2,4)) && !isNaN(string.substring(6,8)) && !isNaN(string.substring(10,13))) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		default:
			return false;	// string isn't a valid length to possibly be a phone number
			break;
	}	
}
var phoneNumber = "1-800-684-7818";
console.log("String: " + phoneNumber);
console.log(isValidPhoneNumber(phoneNumber));

//1-860-684-7818	14 char
//860-684-7818	12 char
//18606847818		11 char
//8606847818		10 char
//alert("JavaScript works!");