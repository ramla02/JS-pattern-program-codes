pattern = "";
let n = 5;
let x;

for (let i = 0; i < n; i++)
{
    x = i;
    for (let j = 1; j <= n; j++)
    {
        x += n;
        pattern += String.fromCharCode(x - n + 65) + "  ";
    }
    pattern += "\n";
}
console.log(pattern)
