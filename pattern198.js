let pattern = "";
let n = 5;
let x = 1;
let y = n * (n * 2) - (n - 1);
let px, py;

for (let i = 1; i <= n; i++)
{
    px = x;
    py = y;
    for (let j = 1; j <= n; j++)
    {
        if (i <= n / 2 + 1)
        {
            pattern += px.toString().padStart(3, " ")
            px++;
        }
        else
        {
            pattern += py.toString().padStart(3, " ")
            py++;
        }
    }
    pattern += "\n";
    x = x + (n * 2);
    y = y - (n * 2);
}
console.log(pattern)
