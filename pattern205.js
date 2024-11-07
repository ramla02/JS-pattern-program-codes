let pattern = "";
let n = 5;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        if (j <= n / 2)
        {
            pattern += "0  ";
        }
        else
        {
            pattern += "1  ";
        }
    }
    pattern += "\n";
}
console.log(pattern)
