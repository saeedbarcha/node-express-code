// 7-11-2024 saeed

console.log("ssssssssssss")
const fs = require("fs")




// ***********************************************************************
// creating folder/directory
// ***********************************************************************

// fs.mkdirSync("my data");
// console.log("After the above process")

// fs.mkdir("data", (err) => {
//     if (err) {
//         console.log("folder is created", err);
//     }

//     else {
//         console.log("folder is created", err);

//     }
// })
// console.log("After the above process")






// ***********************************************************************
// creating file and adding data
// ***********************************************************************

// fs.writeFileSync("my data/myfile.html", "text inside the file");
// console.log("After the above process")

// fs.writeFile("my data/myfile.txt", "mmmmmmmmmm ", (err) => {
//    if (err) {
//       console.log("error", e)
//    } else {
//       console.log("file is created")
//    }
// });
// console.log("After the above process")





// ***********************************************************************
// appending data in file
// ***********************************************************************

// fs.appendFileSync("my data/myfile.txt" , "this is appended text.")
// console.log("After the above process")

// fs.appendFile("my data/myfile.txt" , ".....this is appended text." , (err) =>{
//     console.log("inserted data into file successfully")
//    })
// console.log("After the above process")





// ***********************************************************************
// reading data from file
// ***********************************************************************

// let data=fs.readFileSync("my data/myfile.txt", "UTF-8" );
// let data=fs.readFileSync("my data/myfile.txt", );
// console.log("After the above process")

// console.log("data...", data)
// console.log("data...", data.toString())


// fs.readFile("my data/myfile.txt", "UTF-8" , (err, data) => {
//     console.log("data from the file",data);
//     // console.log(err);
// });
// console.log("After the above process")





// ***********************************************************************
// renaming file
// ***********************************************************************

// rename the file
// fs.renameSync ("my data/myfile.txt","my data/file.txt");
// console.log("After the above process")

// fs.rename("my data/myfile.txt","my data/file.txt", (err)=>{
//     console.log("rename done");
// });
// console.log("After the above process")





// ***********************************************************************
// Delete file
// ***********************************************************************

// fs.unlinkSync("my data/file.txt")
// console.log("After the above process")

// fs.unlink("data/file.txt", (error) => {
//    if (error) {
//       console.log("error.....")
//    } else {
//       console.log("file deleted successfully ")
//    }
// })
// console.log("After the above process")






// ***********************************************************************
// Delete directory
// ***********************************************************************

fs.rmdirSync("my data")
// console.log("After the above process")

// fs.rmdir("my data", (error) => {
//    console.log("folder deleted successfully  ")
// })
// console.log("After the above process")
