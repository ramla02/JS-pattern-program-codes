let pattern = "";
let n = 5;

for (let i = 0; i < n; i++)
{
    for (let j = 0; j <= i; j++)
    {
        pattern += ((i % 2) + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
