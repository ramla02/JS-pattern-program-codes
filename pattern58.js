/* Fibanocci Pyramid */
let pattern = "";
let firstNum = 0, secondNum = 1, result = 0;
let n = 5;

for (let i = 1; i <= n; i++)
{
    for (let j = 1; j <= i; j++)
    {
            firstNum = secondNum;
            secondNum = result;
            pattern += (result + "  ");
            result = firstNum + secondNum;
    }
        firstNum = 0;
        secondNum = 1;
        result = 0;
             pattern += "\n";
}
console.log(pattern)
