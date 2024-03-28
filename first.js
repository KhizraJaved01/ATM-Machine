#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1806;
let fastCashOptions = ["10000", "20000", "30000", "40000", "50000"];
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter your pin number:",
        type: "number"
    }
]);
if (pinAnswer.q1 === myPin) {
    console.log("Correct pin code!!");
    let actionAns = await inquirer.prompt([
        {
            name: "action",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    if (actionAns.action === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to Withdraw:",
                type: "number"
            }
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Now your balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (actionAns.action === "Check Balance") {
        console.log(`Your current balance is:  ${myBalance}`);
    }
    else if (actionAns.action === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "How much fastCash do you want?:",
                choices: fastCashOptions.map(option => ({ name: option })),
            }
        ]);
        if (fastCashOptions.includes(fastCashAns.fastCash)) {
            console.log(`Your fast cash amount is ${fastCashAns.fastCash}`);
            myBalance -= parseInt(fastCashAns.fastCash);
            console.log(`Now your balance is ${myBalance}`);
        }
        else {
            console.log("Invalid Fast Cash amount selected");
        }
    }
}
else {
    console.log("Invalid pin code");
}
