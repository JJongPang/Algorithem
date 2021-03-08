let lst = [];
let result = 0;

function solution(a, b, c) {
    lst.push(a);
    lst.push(b);
    lst.push(c);
    for (let i = 0; i < lst.length; i++) {
        result += lst[i];
    }
    console.log(result / lst.length);
}

solution(20, 30, 40);
