let pattern = "";

let k = 0;
let n = 4;

for (let i = 1; i <= n; i++)
{
    k += i;
    for (let j = k; j > k - i; j--)
    {
        pattern += (j + "  ")
    }
    pattern += "\n";
}
console.log(pattern)
