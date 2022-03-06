// var cities = ["Karachi",  "Lahore", "Islamabad", "Quetta"];
// cities[2] = "Sakkar"
//removing elements from the last index
// cities.pop()
// removing element from the first index
// cities.shift()
// adding elements in the begininning of an array
// cities.unshift("Faislabad", "punjab");

// cities.splice(1, 0,"Faislabad", "punjab" );

// console.log(cities);


// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var cityToCheck = "Great Falls"
// var boolen = false

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         boolen = true
//         console.log(boolen)
//         alert("It's one of the cleanest cities");
//         break;
//     }

// }

// boolean values
// true false


var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];


for (var i = 0; i < firstNames.length; i++) { stop
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
        console.log(fullNames);
    }
}

