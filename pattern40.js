let pattern = "";
let n = 5;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= i; j++)
    {
        pattern += ((j * 2) + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
