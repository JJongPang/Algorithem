function solution(str, check) {
    let result = str.splite();
    let result = str.split(' ');
    for (let i = 0; i < result.length; i++) {
        if (result[i] === check) {
            console.log(i + 1);
        }
    }
}
