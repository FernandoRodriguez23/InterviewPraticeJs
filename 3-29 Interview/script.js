
let output = [];
let num = 0;

function sortHundered() {
    for(let i = 0; i < 100; i++){
        num++;
        if(num[i] / 3){
            num[i] += "Fizz";
        }
        if(num[i] / 5){
            num[i] += "Buzz";
        }
        if(num[i] / 3 && num[i] / 5){
            num[i] += "FizzBuzz";
        }
        output.push(num);
    }
    return output;
}

sortHundered();

console.log(`${output}` + ",")

