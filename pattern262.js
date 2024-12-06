let pattern = "";
let n = 5;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= i; j++)
    {
        if (j % 2 == 0)
        {
            pattern += "*  ";
        }
    else
    {
        pattern += "#  ";
    }
    }
    pattern += "\n";
}
console.log(pattern);
