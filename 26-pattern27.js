let pattern = "";

for (let i = 1; i <= 5; i++)
{
    for (let j = 65; j <= 69; j++)
    {
        pattern += String.fromCharCode(j) + "  ";
    }
    pattern += "\n";
}
console.log(pattern)
