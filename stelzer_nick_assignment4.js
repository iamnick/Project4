// Nick Stelzer

// Does a string follow a 123-456-7890 pattern like a phone number?
var isValidPhoneNumber = function (string) {

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

// Does a string follow an aaa@bbb.ccc pattern like an email address?
var isValidEmail = function (string) {
	var atSymbols = [];
	
	// Check for just 1 @ character
	for (var i = 0; i < (string.length); i++) {
		if (string.charAt(i) == "@") {
			atSymbols.push(i);
		}
	}
	
	// If only 1 @ character, make sure the @ isn't first char and check for a .aaa or .bb type suffix
	if (atSymbols.length == 1 && atSymbols[0] != 0) {
		if (string.charAt(string.length - 3) == "." || string.charAt(string.length - 4) == ".") {
			return true;
		} else {
			return false;	// no period found for a domain suffix, invalid e-mail format
		}
	} else {
		return false;	// @ is first char, or there are multiple @ symbols, invalid e-mail format
	}
}

// Is the string a URL? (Does it start with http: or https:?)
var isValidURL = function (string) {
	console.log(string.substring(0,8));
	// Checks for http:// or https:// prefix
	if ((string.substring(0,7) == "http://") || (string.substring(0,8) == "https://")) {
		return true;
	} else {
		return false;
	}
}

// Test Section
//var phoneNumber = "1-860-933-1964";
//console.log(isValidPhoneNumber(phoneNumber));

//var eMail = "iamnick@comcast.net";
//console.log(isValidEmail(eMail));

var URL = "https://www.pandora.com/";
console.log(isValidURL(URL));

//1-860-684-7818	14 char
//860-684-7818	12 char
//18606847818		11 char
//8606847818		10 char
//alert("JavaScript works!");