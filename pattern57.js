// Fibonacci Series
let pattern = "";
let n1 = 0, n2 = 1;
let r = n1 + n2;

for (let i = 1; i <= 5; i++)
{
    for (let j = 1; j <= i; j++)
    {
        pattern += r.toString().padStart(4, " ");
        r = n1 + n2;
        n1 = n2;
        n2 = r;
    }
    pattern += "\n";
}
console.log(pattern)
