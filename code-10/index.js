//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******   creating  user API.    *****// 

//***** importing modules
const fs = require("fs");
const http = require("http");
//****  creating  server  ****//

const server = http.createServer((req, res) => {

     const userData = fs.readFileSync("userData.json", "utf-8");
     const parsedUserData = JSON.parse(userData);

     const productData = fs.readFileSync("productData.json", "utf-8");

     const orderData = fs.readFileSync("orderData.json", "utf-8");

     const countryData = fs.readFileSync("countryData.json", "utf-8");

     if (req.url == "/") {
          res.end("hello.......... ");
     } else if (req.url == "/user") {
          res.end(parsedUserData[3].firstName); // printing single property of an object inside array               
          res.end(userData);// printing single property of an object inside array               

     } else if (req.url == "/products") {             
          res.end(productData);              

     } else if (req.url == "/orders") {
          // res.end(data[3]);            
          res.end(orderData);              

     } else if (req.url == "/country") {
          // res.end(data[3]);            
          res.end(countryData);              

     }
      else {
          res.writeHead(404, { "content-type": "text/html" });
          res.end("<h1>404 this page doesn't exist</h1>");
     }
     console.log(req.url);
});


server.listen(9000, "127.0.0.1", () => {
     console.log("listening to the port no 9000");
});



