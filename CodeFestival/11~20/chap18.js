let lst = [];
let result = 0;

function solution(a, b, c) {
    lst.push(a);
    lst.push(b);
    lst.push(c);
    for (let i = 0; i < lst.length; i++) {
        result += parseInt(lst[i], 10);
    }
    console.log(result / lst.length);
}

solution(20, 30, 40);

//해설 답

// const score = ['20', '30', '40'];
// let sum = 0;

// for (let i = 0; i < score.length; i++) {
//     susm = sum + parseInt(score[i], 10);
// }
// console.log(Math.floor(sum / score.length));

// Math.floor : 주어진 값보다 이하의 가장 큰 정수를 반환합니다.
