// var static = require("node-static");

// var file = new static.Server("./public");

// require("http").createServer(function (req, res) {
//   req.addListener("end", () => {
//       file.serve(req, res);
//     })
//     .resume();
// }).listen(process.env.PORT || 2000 ,()=>{
//   console.log("Server is running on port 2000")
// })

// var book = {
//   name : "Book 1",
//   type: "Novel",
//   price: 12,
// }

// JSON.stringify()      convert object to JSON
// JSON.parse()          Convert JSON to object

// const  objToJson = JSON.stringify(book)
// console.log(objToJson)

// const JsonToObj = JSON.parse(objToJson)
// console.log(JsonToObj)

// var http = require('http')
// var server = http.createServer((req,res)=>{
//   var book = {
//       name : "Book 1",
//       type: "Novel",
//       price: 12,
//     };
//      res.end(JSON.stringify(book));
// });

// server.listen(process.env.PORT || 2000 ,()=>{
//     console.log("Server is running on port 2000")
//   })

const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'))

app.get("/", (req, res) => {
  res.send("This is home page.");
});

app.get("/about", (req, res) => {
  res.send("This is about page.");
});

app.post("/login", (req, res) => {
  res.send("This is login page.");
});

app.post("/signup", (req, res) => {
  res.send("This is singup page.");
});

app.listen(process.env.PORT || 2000, () => {
  console.log("Server is running on port 2000");
});


