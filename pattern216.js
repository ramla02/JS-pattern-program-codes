let pattern = "";
let n = 5;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        if (j > i)
        {
            pattern += "*  ";
        }
        else
        {
            pattern += j + "  ";
        }
    }
    pattern += "\n";
}
console.log(pattern)
