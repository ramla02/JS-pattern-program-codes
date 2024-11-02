/* Binary number pattern */
let pattern = "";
let n = 3;
let x = 1;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        pattern += x.toString(2).padStart(5, "  ")
        x++;
    }
    pattern += "\n";
}
console.log(pattern);
