function solution(str, check) {
    let result = str.split(' ');
    for (let i = 0; i < result.length; i++) {
        if (result[i] === check) {
            console.log(i + 1);
        }
    }
}

let str = 'pineapple is yummy';
let check = 'apple';

console.log(str.indexOf(check));
