let pattern = "";
let n = 5;
let x = 1;
let y = n;
let t1, t2, r1, r2;

for (let i = n; i >= 1; i--)
{
    t1 = x;
    t2 = y;
    r1 = i;
    r2 = i + 1;
    for (let j = n; j >= i; j--)
    {
        if ((i + j) % 2 == 0)
        {
            pattern += t1.toString().padStart(3, " ")
        }
        else
        {
            pattern += (t2).toString().padStart(3, " ")
        }
        t1 = t1 - r1++;
        t2 = t2 - r2++;
    }
    y = y + i - 1;
    x = x + i;
    pattern += "\n";
}
console.log(pattern)
