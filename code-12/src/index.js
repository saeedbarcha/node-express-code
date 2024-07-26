//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******   rendering an html page    *****// 

//***** importing modules
const path = require("path");
const express = require("express");

const app = express();
const port = 8000;


// Set the static files directory
const staticPath = path.join(__dirname, "../public");
console.log("Static Path: ", staticPath);

// Middleware to serve static files
app.use(express.static(staticPath));

// Remove or comment out the home route if it conflicts with serving the static file
// app.get("/", (req, res) => {
//      res.send("Hello.......... ");
// });
app.get("/", (req, res) => {
    //  res.send("index");
     res.sendFile(path.join(staticPath, "index.html"));
});
app.get("/products", (req, res) => {
    // res.send("products");
    res.sendFile(path.join(staticPath, "products.html"));

});

//**** Start the server ****//
app.listen(port, () => {
    console.log(`Listening to the port no ${port}`);
});


// 
// Middleware functions are functions that have access to the request object (req),
//  the response object (res), and the next middleware function in the application’s
//  request-response cycle.
