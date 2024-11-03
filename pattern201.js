/* Octal number pattern */

let pattern = "";
let n = 4;
let x = 1;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        pattern += x.toString(8).padStart(3, "  ");
        x++;
    }
    pattern += "\n";
}
console.log(pattern);
