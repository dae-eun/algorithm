function solution(n, arr) {
    let answer,
        max = Number.MIN_SAFE_INTEGER;
    let item2; // item의 자릿수의 합을 더해줄 item2
    let item3 = 0; // 자릿수 합의 최고 값
    let item4 = 0; // 최고값의 인덱스
    // 배열로 받은 arr을 순회
    arr.forEach((element, index) => {
        const item = `${element}`; // 문자로 변환된 arr의 요소

        item2 = 0; // item의 자릿수의 합을 더해줄 item2 && 초기화
        for (let i = 0; i < item.length; i++) {
            // 문자로 변환된 배열의 요소를 숫자로 더해줌
            item2 += Number(item[i]);
        }
        // arr을 순회하며 더해준 item2를 item3과 비교하여 더 클 경우 item3에 넣어줌
        if (item2 >= item3) {
            item3 = item2;
            // 이번 순회에서 숫자가 더 클 경우 index를 item4에 담아 줌
            if (arr[index] > arr[item4]) {
                item4 = index;
            }
            // 결과 도출
            answer = arr[item4];
        }
    });

    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
