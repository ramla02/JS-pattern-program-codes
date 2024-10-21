let pattern = "";
let n = 5;
let k;

for (let i = 1; i <= n; i++)
{
    k = i;
    for (let j = 1; j <= i; j++)
    {
        pattern += k.toString().padStart(3, "  ");
        k = k + (n - j);
    }
    pattern += "\n";
}
console.log(pattern)
