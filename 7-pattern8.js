/* JS program that prints 2 to 200 by add 2 to every number
   e.g (2,4,6,8.......200)*/

let pattern = "";
let n = 10;
let x = 2;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
	pattern += x.toString().padStart(5, " ");//it doesn't work in node.js
	x += 2;
    }
    pattern += "\n";
}
console.log(pattern)
