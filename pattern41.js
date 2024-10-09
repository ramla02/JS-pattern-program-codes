let pattern = "";
let n = 1;

for (let i = 1; i <= 4; i++)
{
    for (let j = 1; j <= i; j++)
    {
        pattern += (n + "  ");
        n++;
    }
    pattern += "\n";
}
console.log(pattern)
