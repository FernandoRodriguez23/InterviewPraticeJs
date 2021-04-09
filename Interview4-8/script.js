
let input = ["racecar"];

function checkpalindrome() {
    let reverse = [];
    let unReverse = [];
    for(i in input){
        reverse = input[i].split("").reverse();
        unReverse = input[i].split("");
        if(JSON.stringify(unReverse) === JSON.stringify(reverse)){
            console.log(`${input} is a palindorme`);
        }else{
            console.log(`${input} is not a palindorme`);
        }
    }
    
}

checkpalindrome();