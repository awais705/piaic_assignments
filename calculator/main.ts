import inquirer from "inquirer";
import {
  Multiplication,
  Addition,
  Division,
  Substraction,
} from "./arithmatic.js";

let questions = await inquirer
  .prompt([
    {
      message: "Enter 1st Number: ",
      type: "number",
      name: "num1",
    },
    {
      message: "Enter 2nd Number: ",
      type: "number",
      name: "num2",
    },
    {
      message: "Enter Your desired operation: ",
      type: "list",
      name: "operation",
      choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
  ])
  .then((answers) => {
    if (answers.operation == "Addition") {
      let add = Addition(answers.num1, answers.num2);
      console.log(`Addition of ${answers.num1} + ${answers.num2} is ${add} `);
    } else if (answers.operation == "Subtraction") {
      let subtract = Substraction(answers.num1, answers.num2);
      console.log(
        `Subtraction of ${answers.num1} - ${answers.num2} is ${subtract} `
      );
    } else if (answers.operation == "Multiplication") {
      let Multiply = Multiplication(answers.num1, answers.num2);
      console.log(
        `Multiplication of ${answers.num1} * ${answers.num2} is ${Multiply} `
      );
    } else if (answers.operation == "Division") {
      let Divide = Division(answers.num1, answers.num2);
      console.log(
        `Multiplication of ${answers.num1} / ${answers.num2} is ${Divide} `
      );
    }
  });

export {};
