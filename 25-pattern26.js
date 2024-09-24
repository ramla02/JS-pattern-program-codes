let pattern = "";

for (let i = 65; i <= 69; i++)
{
    for (let j = 1; j <= 5; j++)
    {
        pattern += String.fromCharCode(i) + "  ";
    }
    pattern += "\n";
}
console.log(pattern)
