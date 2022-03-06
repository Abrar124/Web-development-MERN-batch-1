// var car = {
//     name: ["Audi", "Mercedes", "Ferrari"],
//     color: "red",
//     model: "e-tron",
//     price: 980000,
//     auto_drive: true
// }
// delete car.name
// console.log(car)

// console.log(car.name.innervalue = "mercedes" )





// const myCar = new Object();
// myCar.name = 'Audi';
// myCar.model = 'e-tron';
// myCar.price = 980000;

// console.log(myCar)
// console.log(myCar.name)









// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = plan1.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < plan1.discountMonths.length; i++) {
//             if (plan1.discountMonths[i] === thisMo) {
//                 bestPrice = plan1.price * percentIfDisc;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };
// console.log(plan1.calcAnnual())





// var Manager = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer"

// }

// var Intern = {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern"
// }

// function sayHi() {
//     console.log(`Hello, my name is ${this.name}`)
// }

// // add sayHi function to both objects
// Manager.sayHi = sayHi;
// Intern.sayHi = sayHi;

// Manager.sayHi(); // Hello, my name is John'
// Intern.sayHi(); // Hello, my name is Ben'







// var car = {
//     name: ["Audi", "Mercedes", "Ferrari"],
//     color: "red",
//     model: "e-tron",
//     price: 980000,
//     auto_drive: true
// }



// var propCheck = "color" in car 
// console.log(propCheck)












// get the current url
// var whereWeAt = window.location.href;
// console.log(whereWeAt)



// assign new url
// var newLoc= window.location.assign("https://www.google.com/")
// console.log(newLoc)



// replace the url
// var newLoc=  window.location.replace("https://www.google.com/");
// console.log(newLoc)
    
// history.forward();
// window.open();
var monkeyWindow = window.open("index.html", "win1", "width=420,height=380");