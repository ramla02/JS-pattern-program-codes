#!/usr/bin/node

/* JS program pattern that prints 1 to 5 in descending order */

let pattern = "";

for (let i = 5; i >= 1; i--)
{
    for (let j = 1; j <= 5; j++)
    {
	pattern += i;
    }
    pattern += "\n";
}
console.log(pattern)
