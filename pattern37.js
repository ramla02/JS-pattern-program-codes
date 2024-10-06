let pattern = "";
let n = 5;

for (let i = n; i >= 1; i--)
{
    for (let j = n; j >= i; j--)
    {
        pattern += (i + "  ");
    }
    pattern += "\n";
}
console.log(pattern);
