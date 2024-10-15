let pattern = "";
let n = 5;
let x = 1;

for (let i = n; i >= 1; i--)
{
    for (let j = n; j >= i; j--)
    {
        pattern += x.toString().padStart(3, "   ");
        x += 2;
    }
    pattern += "\n";
}
console.log(pattern)
