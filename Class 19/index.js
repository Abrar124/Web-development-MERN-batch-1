// function checkAddress(fieldId) {
//      var val = document.getElementById(fieldId).value;
//      if (val === "") {
//           alert("Email address required.");
//      }
// }




// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//           case "60":
//                cityName = "Chicago";
//                break;
//           case "68114":
//                cityName = "Omaha";
//                break;
//           case "53212":
//                cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
// }






// function expandLoris() {
//      var expandedParagraph = " 1Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have severaladaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
//      document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }






// function makeInvisible() {
//      document.getElementById("ugly").className = "hidden";
// }





// function swapPic() {
//      document.getElementById("before").src = "https://media.gettyimages.com/photos/shah-faisal-masjid-islamabad-pakistan-picture-id912853916?s=612x612";
// }




// function makeBig() {
//      document.getElementById("p1").style.fontSize = "2em";
// }





var par = document.getElementsByTagName("p");
console.log(par.length)

console.log(par[1])
par[1].innerHTML = "This SUV is too big.";

