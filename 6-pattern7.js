/* JS code prints a grid of numbers where each number is incremented
 by 2 from the previous one.
this code will work on none node.js environment.
*/

let pattern = "";
let n = 5;
let x = 1;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
	pattern += x.toString().padStart(5, " ");
	x += 2;
    }
    pattern += "\n";
}
console.log(pattern)
