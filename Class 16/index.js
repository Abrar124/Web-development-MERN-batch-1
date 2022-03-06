


// var cleanestCities = ["KARACHI", "lahore", "lslamabad", "quetta", "sukkur"];
// var userCityName = prompt("Enter your city name");
// userCityName = userCityName.toUpperCase();


// change letters to lower characters
// tolowerCase()
// change letters capital letters
// toUpperCase()


// for (var i = 0; i <= 4; i++) {
//     if (userCityName === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }


// var text1 = text.length
// console.log(text1)
// var text = "World War II"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//         console.log(text)
//     }
// }


// var text = "World War II";
// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//     console.log(text)

// }



// var text = "World War II";
// var newText = text.replace("World War II", "the Second World War");
// console.log(newText)


// var resultsOfMath = 78.6
// var roundNumb = Math.round(resultsOfMath);
// console.log(roundNumb)




// var randomNumber = Math.random();
// console.log(randomNumber)



// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// console.log(improvedNum)
// var numberOfStars = Math.floor(improvedNum);
// console.log(numberOfStars)


// var currentAge = prompt("Enter your age.");
// "32" 321
//  var qualifyingAge = parseInt(currentAge) + 1;
//  console.log(qualifyingAge)


// var integerString = "24"
// var num = Number(integerString);
// console.log(num)



// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();
// console.log(numberAsString  + "Karachi")



// // 0.95986516156
// var total = 10.59675
// var prettyTotal = total.toFixed(2);
// console.log(prettyTotal)


// var date = new Date()
// // Sun Feb 06 2022 17:11:36 GMT-0800 (Pacific Standard Time)
// var todayDay = date.getDay()
// console.log(todayDay)

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
console.log(theDay)
var nameOfToday = dayNames[theDay];
console.log(nameOfToday)