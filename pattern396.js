let pattern = "";
let n = 10;
let px = n / 2;
let py = n / 2;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n - 1; j++)
    {
        if ((i == 1 || i == n) && j == n / 2)
        {
            pattern += "* ";
        }
        else if (j == px)
        {
            pattern += "/ ";
        }
        else if (j == py)
        {
            pattern += "\\ ";
        }
        else
        {
            pattern += "  ";
        }
    }
    if (i == n / 2)
    {
        let t = px;
        px = py;
        py = t;
    }
    else
    {
        px--;
        py++;
    }
    pattern += "\n";
}
console.log(pattern)
