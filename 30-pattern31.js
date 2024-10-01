pattern = "";
let n = 5;

for (let i = 0; i < n; i++)
{
    for (let j = 0; j < n; j++)
    {
        pattern += String.fromCharCode(i + j + 65) + "  ";
    }
    pattern += "\n";
}
console.log(pattern)
