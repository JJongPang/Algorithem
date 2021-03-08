let result = 0;
let check = 0;

function solution(a, b) {
    result = Math.floor(a / b);
    check = a % b;

    console.log(result + ' ' + check);
}

solution(7, 2);

// 해설 답안

const num = ['7', '2'];

let val1 = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
console.log(val1);

let val2 = Math.floor(parseInt([0], 10) % parseInt([1], 10));
console.log(val1, val2);
