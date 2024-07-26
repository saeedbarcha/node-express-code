//****** saeed barcha  date mm-dd-yyyy 7-11-2024 

// ***********************************************************************
//to create our own server we need to import http module. 
// ***********************************************************************

const http=require("http");
// console.log(http); //will  show all the properties and methods this http module contains

const server=http.createServer((req,res)=>{

res.end("Hello from server");
});

server.listen(8000,"127.0.0.1", ()=>{
     console.log("listening to the port no 8000");
});