let pattern = "";
let p_height = 5;
let s = p_height * 2 - 1;
let p_space = p_height - 1;

for (let i = p_height; i >= 1; i--)
{
    for (let j = p_space; j >= i; j--)
    {
        pattern += " ";
    }
    for (let k = 1; k <= s; k++)
    {
        pattern += k;
    }
    s -= 2;
    pattern += "\n";
}
console.log(pattern)
