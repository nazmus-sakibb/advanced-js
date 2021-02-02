let bonus = 20;
function sum(first, second) {
    const result = first + second + bonus;
    // console.log(bonus);
    if(result > 10){
        const mood = 'Happy';
        console.log(mood);
    }
    return result;
}

const output = sum(5, 6);
// console.log(bonus);
// console.log(output);