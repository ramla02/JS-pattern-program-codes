let paatern = "";
let n = 5;
let x;

for (let i = 1; i <= n; i++)
{
    x = i;
    for (let j = 1; j <= n; j++)
    {
	pattern += x.toString(),padStart(3, " ");
	x += n;
    }
    pattern += "\n";
}
console.log(pattern)
