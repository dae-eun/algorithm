function solution(s) {
    let answer = "YES";
    // 정규식으로 replace하여 문자열로 변환 후 소문자로 반환
    s = s.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // 문자열 뒤집기
    const reverseItem = s.split("").reverse().join("");

    // 주어진 문자열과 뒤집은 문자열 비교하여 반환
    if (s !== reverseItem) answer = "NO";

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
