let pattern = "";

for (let i = 0; i <=4; i++)
{
    for (let j = 1; j <= 5; j++)
    {
        if (j <= i)
        {
            pattern += "0  ";
        }
        else
        {
            pattern += ((i + j) + "  ");
        }
    }
    pattern += "\n";
}
console.log(pattern)
