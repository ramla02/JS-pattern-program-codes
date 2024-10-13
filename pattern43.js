let pattern = "";

for (let i = 1; i <= 5; i++)
{
    let t = i - 1;
    for (let j = 1; j <= i; j++)
    {
        pattern += ((t + i) + "  ");
        t += 2;
    }
    pattern += "\n";
}
console.log(pattern)
