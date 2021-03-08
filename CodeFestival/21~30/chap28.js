// 2-gram

function solution(str) {}

let str = 'Javascript';

let test = str.split('');

console.log(test);

for (let i = 0; i < test.length - 1; i++) {
    let result = '';
    result += test[i] + ' ' + test[i + 1];
    console.log(result);
}
