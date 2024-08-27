#!/usr/bin/node

// JS program that prints 5 rows and 5 columns without user input

/*
let pattern = "";
let n = 5;
let k = 1;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
	pattern += k.toString().padStart(3,"");
	k++;
    }
    pattern += "\n"
}
console.log(pattern)
*/


// with user input and 5 wide but it only works  in web browser

/*
let pattern = "";
let n = prompt("Enter the size of the grid: ");
let k = 1;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
	pattern += k.toString().padStart(5, " ");
	k++;
    }
    pattern += "\n";
}
console.log(pattern)
*/


// as for this it works on  Node.js environments.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the size of the grid: ', (input) => {
    let n = parseInt(input);
    let pattern = "";
    let k = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            pattern += k.toString().padStart(5, " ");
            k++;
        }
        pattern += "\n";
    }
    console.log(pattern);

    rl.close();
});
