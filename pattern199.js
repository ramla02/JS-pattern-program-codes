/* prime numbers pattern */
let pattern = "";
let n = 5;
let r;
let cn = 1;
let count;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
        for (let k = cn + 1; k <= 10000; k++)
        {
            cn = k;
            count = 0;
            for (r = 1; r <= cn; r++)
            {
                if (cn % r == 0)
                {
                    count++;
                }
            }
            if (count == 2)
            {
                pattern += cn.toString().padStart(3, "  ")
                break;
            }
        }
    }
    pattern += "\n";
}
console.log(pattern);
