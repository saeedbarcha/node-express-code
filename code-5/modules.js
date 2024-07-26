// 7-11-2024 saeed




// ***********************************************************************
// chalk module
// ***********************************************************************

import chalk from 'chalk';
// cont chalk = require("chalk")

// console.log(chalk.blue('hello world'));
// console.log(chalk.blue.italic('hello world'));
// console.log(chalk.blue.underline('hello world'));
// console.log(chalk.green.underline.inverse('hello world'));




// ***********************************************************************
// validator module
// ***********************************************************************

import validator from 'validator';

// const res = validator.isEmail("saeedgmail.com")
// console.log(res)




// ***********************************************************************
// complete validation using chalk and validator
// ***********************************************************************
// import chalk from 'chalk';
// import validator from 'validator';

const res = validator.isEmail("saeedgmail.com")

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))
// console.log(!res ? chalk.green.inverse(res) : chalk.red.inverse(res))


