let pattern = "";
let n = 10;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= n; j++)
    {
	pattern += (i * j).toString().padStart(5, " ");
    }
    pattern += "\n";
}
console.log(pattern)
