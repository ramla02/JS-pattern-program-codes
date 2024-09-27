let pattern = "";
let n = 5;
let ch = 0;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        pattern += (String.fromCharCode(ch + 65) + "  ");
        if (ch < 26)
        {
            ch++;
        }
        else
        {
            ch = 0;
        }
    }
    pattern += "\n";
}
console.log(pattern)
