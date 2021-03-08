let check = ['수성', '금성', '지구', '화성', '목성', '토성', '천황성', '해왕성'];

function solution(n) {
    if (n === 0 || n > check.length) {
        console.log('ㅌㅌㅌㅌㅌㅌ');
    } else {
        console.log(check[n - 1]);
    }
}
