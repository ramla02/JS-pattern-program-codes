let pattern = "";
let n = 5;
let x = 1;
let y, t;
for (let i = n; i >= 1; i--)
{
    y = i;
    t = x;
    for (let j = n; j >= i; j--)
    {
        pattern += t.toString().padStart(3, "  ");
        t = t - y;
        y++
    }
    x = x + i;
    pattern += "\n";
}
console.log(pattern)
