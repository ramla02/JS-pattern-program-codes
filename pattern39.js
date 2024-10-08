let pattern = "";
let n = 5;

for (let i = n; i >= 1; i--)
{
    for (let j = i; j <= n; j++)
    {
        pattern += (j + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
