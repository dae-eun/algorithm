function solution(s) {
    let answer;
    // 소문자 변환
    s = s.toLowerCase();
    // 문자열 뒤집기
    const reverseS = s.split("").reverse().join("");

    // s 문자열 비교
    if (s === reverseS) answer = "YES";

    return answer;
}

let str = "goooG";
console.log(solution(str));
