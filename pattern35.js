let pattern = "";

for (let i = 1; i <= 9; i++)
{
    for (let j = 1; j <= i; j++)
    {
        pattern += (i + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
