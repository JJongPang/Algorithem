// 2-gram

let str = 'Javascript';

let test = str.split('');

for (let i = 0; i < test.length - 1; i++) {
    let result = '';
    result += test[i] + ' ' + test[i + 1];
    console.log(result);
}
