//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******   custamising views directory.    *****// 

//***** importing modules
const express = require("express");
const app = express();
const port = 8000;
const path = require("path")

const staticPath = path.join(__dirname, "../templates");


app.set("view engine", "hbs")
app.set("views", staticPath)


// Remove or comment out the home route if it conflicts with serving the static file
app.get("/", (req, res) => {
    res.render("index");
   
});



app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/product", (req, res) => {
    res.render("products");
});

// Remove or comment out the home route if it conflicts with serving the static file
app.get("/", (req, res) => {
     res.send("Hello.......... ");
});

//**** Start the server ****//
app.listen(port, () => {
    console.log(`Listening to the port no ${port}`);
});


// app.get("/", (req, res) => {
//     res.render("index",{
//         name:"saeed"
//     });
// });