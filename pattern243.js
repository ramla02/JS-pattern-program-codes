let pattern = "";
let n = 4;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j < 2 * n; j++)
    {
        if (j == i || j == 2 * n - i || j == n)
        {
            pattern += "* ";
        }
        else
        {
            pattern += "0 ";
        }
    }
    pattern += "\n";
}
console.log(pattern)
