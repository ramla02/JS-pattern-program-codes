let pattern = "";
let n = 4;
let x = 1;

for (let i = 1; i <= n; i++)
{
    for (j = 1; j <= i; j++)
    {
        pattern += (x * x).toString().padStart(4, "  ");
        x++;
    }
    pattern += "\n";
}

console.log(pattern);
