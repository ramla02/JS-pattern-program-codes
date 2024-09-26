let pattern = "";

for (let i = 1; i <= 5; i++)
{
    for (let j = 69; j >= 65; j--)
    {
        pattern += String.fromCharCode(j) + "  ";
    }
    pattern += "\n";
}
console.log(pattern)
