#!/usr/bin/node

/* JS program that prints pattern number 1 to 5 */


let pattern = "";

for (let i = 1; i <= 5; i ++)
{
    for (let j = 1; j <= 5; j++)
    {
	pattern += j;
    }
    pattern += "\n";
}
console.log(pattern)
