//****** saeed barcha  date mm-dd-yyyy 7-11-2024 


// ***********************************************************************
//handeling request on the server.  
// ***********************************************************************


const http = require("http");


//****  creating our own server  ****//

const server = http.createServer((req, res) => {
    // console.log(req.url); // this will show the search url for server

    if (req.url == "/") {
        res.end("hello.......... ")
    } else if (req.url == "/home") {
        res.end("this page is home")
    }
    else if (req.url == "/contact") {
        res.end("this is contains contact information")
    }
    else if (req.url == "/about") {
        res.end("this page contains information all about this site")
    } 
    else {
        res.writeHead(404, { "content-type": "text/html" })    // to change the type of this document file into html
        res.end("<p>404 this page doesn't exist</p>"); // to change this file content into html.
    }

})

/// for listening request on server
server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});

// //*****   this is same
//     const server=http.createServer((req,res)=>{
//           console.log(req.url);
//           res.end("Hello from server.hahahhahahhahahahaha");
//           }).listen(8000,"127.0.0.1", ()=>{
//                console.log("listening to the port no 8000");
//           });



