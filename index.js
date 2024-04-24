#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1, //based currency
    USD: 0.0036,
    IND: 0.30,
    EUR: 0.0034,
    GBP: 0.0029,
    AUD: 0.0056,
    CAD: 0.0049,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter  Your Currency You Want From Convert",
        choices: ["PKR", "USD", "IND", "EUR", "GBP", "AUD", "CAD"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter Your Currency You Want To Convert",
        choices: ["PKR", "USD", "IND", "EUR", "GBP", "AUD", "CAD"
        ]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount",
    },
]);
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; // exchnge rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //PKR base currency 1
let convertedAmount = baseAmount * toAmount;
console.log(`Your convert amount is ${convertedAmount}`);
