import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta("Welcome to Currency Converter"));
let exchane_rate = {
    USD: 1,
    INR: 70,
    EUR: 0.8,
    GBP: 0.7,
    AUD: 1.2,
    JPY: 110,
    PKR: 277.70,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select your currency to convert from: ",
        choices: ["USD", "INR", "EUR", "GBP", "AUD", "JPY", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select your currency to convert into: ",
        choices: ["USD", "INR", "EUR", "GBP", "AUD", "JPY", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:"
    }
]);
let from_amount = exchane_rate[user_answer.from_currency];
let to_amount = exchane_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`The converted amount is ${chalk.green(converted_amount.toFixed(2))}`);
