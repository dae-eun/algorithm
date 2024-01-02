function solution(str) {
    let answer = "";

    // 정규식을 사용한 입력된 str replace
    answer = str.replace(/[^0-9]/g, "");

    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
