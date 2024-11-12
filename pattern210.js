let pattern = "";
let n = 5;

for (let i = n - 1; i >= 0; i--)
{
    for (let j = 0; j <= n - 1; j++)
    {
        pattern += (Math.abs(i - j) + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
