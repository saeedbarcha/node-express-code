// 7-11-2024 saeed

const path = require("path")



// ***********************************************************************
// to find path to the directory where file is present
// ***********************************************************************

// console.log("find path...", path.dirname('C:/Users/Masroor/Desktop/node course/index-3-path.js'))




// ***********************************************************************
// find file extention
// ***********************************************************************

// console.log("file extention...", path.extname('C:/Users/Masroor/Desktop/node course/index-3-path.js'))



// ***********************************************************************
// find file name
// ***********************************************************************

// console.log("file name...", path.basename('C:/Users/Masroor/Desktop/node course/index-3-path.js'))



// ***********************************************************************
// return an object with details related file
// ***********************************************************************

console.log("file name...", path.parse('C:/Users/Masroor/Desktop/node course/index-3-path.js'))
const fileDetailsObj = path.parse('C:/Users/Masroor/Desktop/node course/index-3-path.js')
console.log("file name only..", fileDetailsObj.name)
