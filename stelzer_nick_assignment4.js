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
	// Checks for http:// or https:// prefix
	if ((string.substring(0,7) == "http://") || (string.substring(0,8) == "https://")) {
		return true;
	} else {
		return false;
	}
}

// Title-case a string
var titleCase = function (string) {
	// Change entire string to lowercase
	string = string.toLowerCase();
	var newString = "";
	
	console.log(string);
	// Search for spaces in string, capitalize next character if found
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == " ") {
			newString += string.charAt(i);
			newString += string.charAt(i+1).toUpperCase();
			i++;
		} else {
			newString += string.charAt(i);
		}
	}
	
	// Capitalize first letter of string
	newString = newString.slice(0,1).toUpperCase() + newString.slice(1);
	
	return newString;
}

// List separator swap
var swapSeparator = function (list, curSep, newSep) {
	// Create dynamic reg exp
	var re = new RegExp(curSep,"g");
	list = list.replace(re, newSep);
	return list;
}

// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var twoDecimalPlaces = function (num) {
	return num.toFixed(2);
}

// Fuzzy-match a number: is the number above or below a number within a certain percent?
var fuzzyMatchNum = function (num, threshold, percent) {
	var min = (threshold - (threshold * percent)),
		max = (threshold * (1 + percent))
	;
	
	if (num >= min && num <= max) {
		return true;
	} else {
		return false;
	}
}

// Find the number of hours or days difference between two dates.
var timeToDate = function (currentDate, futureDate) {
	var time = [0, 0];		// days, hours
	var temp = 0;
	
	// Find number of milliseconds between each date
	var ms = (futureDate.getTime() - currentDate.getTime());
	time[0] = Math.floor(ms/(1000*60*60*24));
	time[1] = Math.ceil((ms%(1000*60*60*24)) / (1000*60*60));
	
	console.log("DAYS: " + time[0] + " HOURS: " + time[1]);
		
	return time;
}

// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
var makeNumber = function (string) {
	return parseFloat(string);
}

// Find the smallest value in an array that is greater than a given number
var arraySearch = function (array, num) {
	// First, sort the array from smallest value to largest
	var compareFunction = function (a, b) {
		return a - b;
	}
	array.sort(compareFunction);
	
	// Loop through each array element until you find one greater than 'num'
	for (var i = 0; i < array.length; i++) {
		if (array[i] > num) {
			return array[i];
		}
	}
}

// Find the total value of just the numbers in an array, even if some of the items are not numbers.
var totalArrayNums = function (array) {
	
	// Loop through each array element, determine if it's a number, then add to a total
	var total = 0;
	
	for (var i = 0; i < array.length; i++) {
		temp = parseFloat(array[i]);
		if (!isNaN(temp)) {
			total += temp;
		}
	}
	return total;
}

// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects
var sortArrayByKey = function (array, key) {
	var compareFunction = function (a, b) {
		var x = a[key]; var y = b[key];
		return x - y;
	}
	array.sort(compareFunction);	
	return array;
}


// Test Section

//var phoneNumber = "1-860-933-1964";
//console.log(isValidPhoneNumber(phoneNumber));

//var eMail = "iamnick@comcast.net";
//console.log(isValidEmail(eMail));

//var URL = "https://www.pandora.com/";
//console.log(isValidURL(URL));

//var string = "hello My name is NICK";
//console.log(titleCase(string));

//var list = "Bananas,Oranges,Apples",
//	newSep = ":"
//;
//console.log(swapSeparator(list, ",", newSep));

//var cash = 10.2;
//console.log(twoDecimalPlaces(cash));

//var n = 32, t = 30, p = .10;
//console.log(fuzzyMatchNum(n, t, p));

var today = new Date();
var future = new Date("July 30, 2012");
console.log(timeToDate(today, future));

//var string = "148";
//console.log(makeNumber(string));

//var array = [78, 90, 12, 34, 56, 0];
//console.log(arraySearch(array, 50));

//var array = [1, "A", 2, [], 3, true, 4, {}];
//console.log(totalArrayNums(array));

//var objArray = [{a:2,b:1,c:2},{a:3,b:3,c:1},{a:1,b:2,c:3}];
//var key = "b";
//console.log(sortArrayByKey(objArray, key));