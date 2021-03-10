// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

let arr = [20, 20, 20, 20, 20];

function solution(weight, n, arr) {
    let check = 0;
    for (let i = 0; i < arr.length; i++) {
        check += n[i];
        console.log(check);
    }
}

solution(50, 5, arr);
