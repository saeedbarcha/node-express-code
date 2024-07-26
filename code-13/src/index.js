//****** saeed barcha  date mm-dd-yyyy 6-13-2021

//*******   using hbs    *****// 

//***** importing modules
const express = require("express");
const app = express();
const port = 8000;
const fs =require("fs")

const productData = fs.readFileSync(__dirname + "/product.json", "utf-8");

app.set("view engine", "hbs")


// Remove or comment out the home route if it conflicts with serving the static file
app.get("/", (req, res) => {
    res.render("index", {
                name:"barcha",
                
            })
        }
);

app.get("/contact", (req, res) => {

    res.render("contact",{
        data:productData[0]

    });
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