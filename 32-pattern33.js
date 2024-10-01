pattern = "";
let n = 5;
let x;

for (let i = 1; i <= n; i++)
{
    x = n - i;
    for (let j = 1; j <= n; j++)
    {
        pattern += String.fromCharCode(x + 65) + "  ";
        x = x + n;
    }
    pattern += "\n";
}
console.log(pattern)
