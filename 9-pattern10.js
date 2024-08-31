#!/usr/node

/* JS program that prints 5x3 grid of numbers */

let pattern = "";

for (let i = 1; i <= 5; i++)
{
    for (let j = 1; j <= 3; j++)
    {
	pattern += j + " " + i + " ";
    }
    pattern += "\n";
}
console.log(pattern)
