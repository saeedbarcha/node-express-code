// 7-11-2024 saeed

const add = (a, b) => {
    return a + b;
}


const name = "saeed"

// ***********************************************************************
// exporting single pro/method
// ***********************************************************************
// befor exporting add function was private now its public

module.exports = add
// module.exports = name




const sub = (a, b) => {
    return a - b;
}

// const name1 = "saeed"

// method 1
// ***********************************************************************
// exporting multiplt pro/method
// ***********************************************************************
// befor exporting add function was private now its public

// module.exports.add = add
// // module.exports.sub = sub
// module.exports.name = name


// method 2
module.exports = { add, sub, name }