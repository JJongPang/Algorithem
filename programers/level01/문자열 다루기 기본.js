// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	    return
// a234	    false
// 1234	    true

let str = '1234';

let check = Number(str);

if (isNaN(check)) {
    answer = true;
} else {
    answer = false;
}

function solution(s) {
    let answer = true;
    let num = Number(s);
    if (isNaN(num)) {
        answer = false;
    } else {
        answer = true;
    }
    return answer;
}
