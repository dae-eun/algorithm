function solution(arr) {
    let answer = [];
    // 소수는 자기자신과 1만 나눠떨어진다.
    // 자기자신만큼 for문으로 순회하여 나머지값이 없는 경우 새 배열에 넣어 줌 answer.push()
    arr.forEach((element, index) => {
        // 배열의 요소가 숫자로 들어오기 때문에 문자로 변환하여 뒤집어 준 후 숫자로 변환
        const item = Number(`${element}`.split("").reverse().join(""));
        // 소수는 1이 포함되지 않기 때문에 1이상인 경우
        if (item > 1) {
            // 2부터 자기자신까지 나누기
            for (let i = 2; i <= item; i++) {
                // item보다 i가 작고 item이 i로 나눴을 때 0이면 소수가 아님으로 for문 break
                if (item > i && item % i === 0) {
                    break;
                } else if (item === i) {
                    // 위 과정을 거친 후 item이 i와 같을 경우 배열에 추가
                    answer = [...answer, item];
                }
            }
        }
    });
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
