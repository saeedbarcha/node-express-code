//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******   creating  user API.    *****// 

//***** importing modules
const express = require("express");
const app = express();
const port = 8000;


// Home route
app.get("/", (req, res) => {
     res.send("Hello.......... ");
});

// User API route
app.get("/user", (req, res) => {
     // res.status(200).json({
     //      "id": 1,
     //      "firstName": "John",
     //      "lastName": "Doe",
     //      "fatherName": "Michael Doe",
     //      "gender": "Male",
     //      "country": "USA",
     //      "email": "john.doe@example.com",
     //      "phone": "+1-555-1234",
     //      "dateOfBirth": "1990-01-01",
     //      "password": "123456"
     // }); //Sends a JSON response with Content-Type: application/json

     // res.end('Some plain text'); // Sends plain text and ends the response
     // res.end(); // Ends the response with no data

     // res.send('Hello World'); // Sends a string
     // res.send({ key: 'value' }); // Sends an object as JSON
     // res.send([1, 2, 3]); // Sends an array as JSON

     // res.render('index', { title: 'Home Page' }); // Renders the 'index' view template with data


     // res.write("<h1>hello world</h1>"); 
     // res.write("<h2>hello world</h2>"); 
     // res.send();

});





//**** Start the server ****//
app.listen(port, () => {
     console.log(`Listening to the port no ${port}`);
});


























// ///////////////////////////////////


















//****** saeed barcha  date mm-dd-yyyy 6-13-2021

// //*******   creating  user API.    *****// 

// //***** importing modules
// const fs = require("fs");
// const express = require("express");
// const app = express();
// const port = 8000;

// //**** Middleware to parse JSON ****//
// app.use(express.json());

// //**** Reading data from JSON files ****//
// const userData = JSON.parse(fs.readFileSync("userData.json", "utf-8"));
// const productData = JSON.parse(fs.readFileSync("productData.json", "utf-8"));
// const orderData = JSON.parse(fs.readFileSync("orderData.json", "utf-8"));
// const countryData = JSON.parse(fs.readFileSync("countryData.json", "utf-8"));

// //**** Routes ****//

// // Home route
// app.get("/", (req, res) => {
//      res.send("Hello.......... ");
// });

// // User API route
// app.get("/userapi", (req, res) => {
//      res.json(userData); // Send all user data
// });

// // Products route
// app.get("/products", (req, res) => {
//        res.json(productData); //Sends a JSON response with Content-Type: application/json

//      //   res.end('Some plain text'); // Sends plain text and ends the response
//      //   res.end(); // Ends the response with no data

//      // res.send('Hello World'); // Sends a string
//      // res.send({ key: 'value' }); // Sends an object as JSON
//      // res.send([1, 2, 3]); // Sends an array as JSON

//      // res.render('index', { title: 'Home Page' }); // Renders the 'index' view template with data
// });

// // Product detail route
// app.get("/product-detail", (req, res) => {
//      // http://localhost:8000/product-detail?id=1
//      const productId = parseInt(req.query.id);
//      const product = productData.find(p => p.id === productId);
//      if (product) {
//           res.json(product); // Send the product with the specified ID
//      } else {
//           res.status(404).json({ error: "Product not found" });
//      }
// });

// // Orders route
// app.get("/orders", (req, res) => {
//      res.json(orderData); // Send all order data
// });

// // Order detail route
// app.get("/order-details", (req, res) => {
//      // console.log("price....", req.query)
//      const orderId = parseInt(req.query.id);
//      const order = orderData.find(o => o.id === orderId);
//      if (order) {
//           res.json(order); // Send the order with the specified ID
//      } else {
//           res.status(404).json({ error: "Order not found" });
//      }
// });

// // Country route
// app.get("/country", (req, res) => {
//      res.json(countryData); // Send all country data
// });

// // 404 route for undefined endpoints
// app.use((req, res) => {
//      res.status(404).send("<h1>404 This page doesn't exist</h1>");
// });

// //**** Start the server ****//
// app.listen(port, () => {
//      console.log(`Listening to the port no ${port}`);
// });


