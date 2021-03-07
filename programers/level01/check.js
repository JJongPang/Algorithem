let m = 20;
let arr = [16, 15, 9, 17, 1, 3];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == m) {
            count++;
        }
    }
}

console.log(count);

function solution(M, load) {
    var answer = 0;
    return answer;
}
