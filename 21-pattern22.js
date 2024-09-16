let pattern = "";
let n = 5;

for (let i = 0; i < n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        pattern += (i % 2) + "  ";
    }
    pattern += "\n";
}
console.log(pattern)
