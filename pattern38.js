let pattern = "";
let n = 5;

for (let i = n; i >= 1; i--)
{
    for (let j = n; j >= i; j--)
    {
        pattern += (j + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
