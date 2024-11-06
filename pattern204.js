let pattern = "";

for (let i = 0; i < 5; i++)
{
    for (let j = i; j < i + 5; j++)
    {
        pattern += ((j % 5) + 1 + "  ");
    }
    pattern += "\n";
}
console.log(pattern)
