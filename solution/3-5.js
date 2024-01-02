function solution(s) {
    let answer = "";
    let cnt = 1;

    for (let i = 0; i < s.length; i++) {
        // 다음에 올 string과 같으면 cnt를 증가시켜준다
        if (s[i] === s[i + 1]) {
            cnt++;
        }
        // 다른 string이 왔을 때
        else {
            // 문자열 + cnt(반복 횟수) 1일 경우 비워주기
            answer += s[i] + (cnt > 1 ? cnt : "");
            // cnt 초기화
            cnt = 1;
        }
    }

    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
