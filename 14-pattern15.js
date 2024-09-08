let pattern = "";

let n = 5;
let x, y;
for (let i = 1; i <= n; i++)
{
    x = i;
    y = n - x + 1;
    
    for (let j = 1; j <= n; j++)
    {
        if (j % 2 == 0)
        {
            pattern += x.toString().padStart(3, " ");
        }
        else
        {
            pattern += y.toString().padStart(3, " ");
        }
        x = x + n;
        y = y + n;
    }
    pattern += "\n";
}
console.log(pattern)
