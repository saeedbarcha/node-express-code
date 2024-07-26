


// ***********************************************************************
// every file wrap function like this 
// ***********************************************************************


// (
//     function(exports, require, module, __filename, __dirname){

//         const a = require("fs");
//         const name = "saeed"
//         console.log("name..", name)

//         module.exports ={name}
//     }
// )




// ***********************************************************************
// every module work like IFFI
// ***********************************************************************
// (
//     function(){

//         const a = require("fs");
//         const name = "saeed"
//         console.log("name..", name)

        
//     }
// )()

// console.log("name..", name)




// ***********************************************************************
// we can direct access file name and directory name just because of wrapper function
// ***********************************************************************
 console.log("dirname...", __dirname)
 console.log("filename...", __filename)
